import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleGuest } from './store/singleGuest';
import { toggleSingleGuestSubmitBtn } from './store/singleGuestSubmitBtn';

import './RSVPFind.css';

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
    this.props.toggleSingleGuestSubmitBtn();
    await this.props.fetchSingleGuest(this.state.firstName.trim(), this.state.lastName.trim());
  }

  render() {
    let errorMessage;
    if (this.props.guest.error) {
      errorMessage = <div className="rsvp-find-error">{this.props.guest.error}</div>
    }

    return (
      <div className="rsvp-find">
        <form onSubmit={this.handleSubmit}>
          <div className="rsvp-list_item">
            <div className="title">Please let us know whether you are able to join us!</div>
            <div className="name-fields">
              <div className="name-field">
                <input
                  name="firstName"
                  type="text"
                  placeholder="Your First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="name-field">
                <input
                  name="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="submit-btn_container">
            <button className="rsvp-find-submit-btn" type="submit" disabled={this.props.isSingleGuestSubmitDisabled}>
              {this.props.isSingleGuestSubmitDisabled ? "Wait..." : "Submit"}
            </button>
          </div>
        </form>
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  guest: state.guest,
  isSingleGuestSubmitDisabled: state.isSingleGuestSubmitDisabled
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleGuest: (firstName, lastName) => dispatch(fetchSingleGuest(firstName, lastName)),
  toggleSingleGuestSubmitBtn: () => dispatch(toggleSingleGuestSubmitBtn())
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVPFind);
