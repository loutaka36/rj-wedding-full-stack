import React from 'react';
import axios from 'axios';
import './RSVP.css';
import { serialize } from './scripts';
import { Link } from 'react-router-dom';

class RSVP extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      additionalGuests: 0,
      inviteCode: '',
      error: '',
      submission: {},
      isSendingFormData: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   if (encode(this.state.inviteCode) === '993715cafa4258018357cd2fe4ba1f94') {
  //     const encodedData = serialize({
  //       firstName: this.state.firstName,
  //       lastName: this.state.lastName,
  //       additionalGuests: this.state.additionalGuests
  //     });
  //     this.sendFormData(encodedData);
  //     //immediately disables submit button to prevent multiple submissions. this runs before the async sendFormData function
  //     this.setState({
  //       isSendingFormData: true,
  //     })
  //   } else {
  //     this.setState({
  //       error: 'invalidInviteCode'
  //     })
  //   }
  // }

  //async function to send form data to google docs
  async sendFormData(encodedData) {
    try {
      const {data} = await axios.post('https://script.google.com/macros/s/AKfycbz7gVTXRDkYvrK-ACXlSLb561vU5qQSnrxoq_pOH233kxrjo9qK/exec', encodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      this.setState({
        firstName: '',
        lastName: '',
        additionalGuests: 0,
        inviteCode: '',
        error: '',
        submission: data,
        isSendingFormData: false
      })
    } catch (err) {
      this.setState({
        error: 'networkError',
        isSendingFormData: false
      })
    }
  }

  render() {
    //display helpful message when user enters incorrect access code or if there is a network error
    let error = ''
    if (this.state.error === 'invalidInviteCode') {
      error = <div className="RSVPErrorMessage">Oops! Looks like you typed an incorrect invite code. Please check your input or contact the Bride & Groom.</div>;
    }
    if (this.state.error === 'networkError') {
      error = <div className="RSVPErrorMessage">There was a problem with the network. Please try again.</div>;
    }

    //disable submit button if any of the required fields are empty or if the user has clicked the submit button
    const isSubmitDisabled = !this.state.firstName || !this.state.lastName || !this.state.inviteCode || this.state.isSendingFormData;
    //change cursor to wait when form data is being sent to google docs
    const cursor = this.state.isSendingFormData ? {cursor: "wait"} : {cursor: "default"};

    return (
      !this.state.submission.result ?
      <div className="rsvp" style={cursor}>
        <div className="rsvp-text">Please fill in and submit the form to RSVP</div>
        <form className="rsvp-list" method="POST" onSubmit={this.handleSubmit}>
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
          <div className="rsvp-list_item">
            <label className="title" htmlFor="additionalGuests">Additional Guests* </label>
            <input
              name="additionalGuests"
              type="number"
              min="0"
              max="4"
              value={this.state.additionalGuests}
              onChange={this.handleChange}
            />
          </div>
          <div className="rsvp-list_item">
            <label className="title" htmlFor="inviteCode">Invite Code* </label>
            <input
              name="inviteCode"
              type="text"
              placeholder="Invite Code"
              value={this.state.inviteCode}
              onChange={this.handleChange}
            />

          </div>
          <div className="submit-btn_container">
            <input className="submit-btn" type="submit" value="I'll be there!" disabled={isSubmitDisabled}/>
          </div>
        </form>
        {error}
      </div> :
      <div>
        <div>Thanks for the submission, {JSON.parse(this.state.submission.data).firstName}! We'll see you there.</div>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default RSVP;
