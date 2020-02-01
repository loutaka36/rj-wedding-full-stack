import React from 'react';
import { attemptLogin } from './store/access';
import { toggleAccessSubmitBtn } from './store/accessSubmitBtn';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './AccessPage.css';

class AccessPage extends React.Component {
  constructor() {
    super();
    this.state = {
      inviteCode: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.props.toggleAccessSubmitBtn();
    await this.props.attemptLogin(this.state.inviteCode);
  }

  render() {
    let errorMessage;
    if (this.props.access.error === 'Incorrect invite code') {
      errorMessage = <div className="access-error">Oops! Looks like you entered an incorrect invite code. Please check your input or contact the bride and groom.</div>
    } else if (this.props.access.error === 'Network Error') {
      errorMessage = <div className="access-error">Oops! There was a network error. Please check to make sure you are connected to the internet.</div>
    }

    return (
      <div className="access-page">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label className="access-page_item" htmlFor="inviteCode">Hello! Please enter invite code you recieved from the bride and groom: </label>
          <input
            className="access-page_item access-page_invite-code"
            type="text"
            name="inviteCode"
            placeholder="Invite Code"
            value={this.state.inviteCode}
            onChange={(event) => this.handleInputChange(event)}
          />
          <input className="access-page_item" type="submit" value={ this.props.isAccessSubmitDisabled ? "Wait..." : "See Website!"} disabled={this.props.isAccessSubmitDisabled}/>
        </form>
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  access: state.access,
  isAccessSubmitDisabled: state.isAccessSubmitDisabled
});

const mapDispatchToProps = (dispatch) => ({
  toggleAccessSubmitBtn: () => dispatch(toggleAccessSubmitBtn()),
  attemptLogin: (inviteCode) => dispatch(attemptLogin(inviteCode))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccessPage));
