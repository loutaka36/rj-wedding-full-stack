import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleGuest } from './store/singleGuest';

class RSVPFind extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event)  {
    event.preventDefault();
    await this.props.fetchSingleGuest(this.state.firstName, this.state.lastName);
  }

  render() {
    let errorMessage;
    if (this.props.guest.error) {
      errorMessage = <div>{this.props.guest.error}</div>
    }

    return (
      <div className="rsvp-find">
        <form onSubmit={this.handleSubmit}>
          <div className="rsvp-list_item">
            <div className="title">Name</div>
            <div className="name-fields">
              <div className="name-field">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Your First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="name-field">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>
          <div className="submit-btn_container">
            <input className="submit-btn" type="submit" value="Find me!" disabled={false}/>
          </div>
        </form>
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  guest: state.guest
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleGuest: (firstName, lastName) => dispatch(fetchSingleGuest(firstName, lastName))
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVPFind);
