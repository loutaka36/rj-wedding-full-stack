import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from './store/group';

class RSVPSelect extends React.Component {
  constructor() {
    super();

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   event.preventDefault();
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  handleSubmit(event)  {
    event.preventDefault();
  }

  async componentDidMount() {
    await this.props.fetchGroup(this.props.guest.guestData.groupId)
  }

  render() {
    let errorMessage;
    if (this.props.guest.error) {
      errorMessage = <div>{this.props.guest.error}</div>
    }

    return (
      <div className="rsvp-select">
        <div>{`Hi, ${this.props.guest.guestData.firstName}`}</div>
        <form>
          {this.props.group.groupMembers.length === 0 ?
            <div>loading...</div> :
            this.props.group.groupMembers.map(member =>
              <div className="group-member">
                <input type="checkbox" name={`${member.firstName} ${member.lastName}`} value={member.id} />
                <label for={`${member.firstName} ${member.lastName}`}>{`${member.firstName} ${member.lastName}`}</label>
              </div>
            )
          }
        </form>
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  guest: state.guest,
  group: state.group
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => dispatch(fetchGroup(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVPSelect);
