import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from './store/group';
import { postSubmission } from './store/rsvpSubmission';

class RSVPSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      going: [],
      notGoing: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => {
      if (value ==='accept') {
        if (!prevState.going.includes(name)) {
          return {
            going: [...prevState.going, name],
            notGoing: prevState.notGoing.filter(notGoing => notGoing !== name)
          }
        } else {
          return {
            notGoing: prevState.notGoing.filter(notGoing => notGoing !== name)
          }
        }
      } else if (value === 'decline') {
        if (!prevState.notGoing.includes(name)) {
          return {
            notGoing: [...prevState.notGoing, name],
            going: prevState.going.filter(going => going !== name)
          }
        } else {
          return {
            going: prevState.going.filter(going => going !== name)
          }
        }
      }
    })
  }

  async handleSubmit(event)  {
    event.preventDefault();
    await this.props.postSubmission(this.state.going, this.state.notGoing);
  }

  async componentDidMount() {
    await this.props.fetchGroup(this.props.guest.guestData.groupId)
  }

  render() {
    let errorMessage;
    if (this.props.rsvpSubmission.error) {
      errorMessage = <div>{this.props.rsvpSubmission.error}</div>
    }
    console.log(this.state);
    return (
      <div className="rsvp-select">
        <div>{`Hi, ${this.props.guest.guestData.firstName}`}</div>
        <form onSubmit={this.handleSubmit}>
          {this.props.group.groupMembers.length === 0 ?
            <div>loading...</div> :
            this.props.group.groupMembers.map(member =>
              <div key={member.id} className="group-member">
                <label for={member.id}>{`${member.firstName} ${member.lastName}`}</label>
                <select onChange={this.handleChange} name={member.id}>
                  <option value="pending">--Please choose an option--</option>
                  <option value="accept">Accept</option>
                  <option value="decline">Decline</option>
                </select>
              </div>
            )
          }
           <div className="submit-btn_container">
            <input className="submit-btn" type="submit" disabled={this.state.going.length === 0 && this.state.notGoing.length === 0 } />
          </div>
        </form>
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  guest: state.guest,
  group: state.group,
  rsvpSubmission: state.rsvpSubmission
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
  postSubmission: (accept, decline) => dispatch(postSubmission(accept, decline))
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVPSelect);
