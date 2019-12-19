import React from 'react';
import { attemptLogin } from './store/access';
import { toggleAccessSubmitBtn } from './store/accessSubmitBtn';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    if (this.props.access.error) {
      errorMessage = <div>{this.props.access.error}</div>
    }

    return (
      <div className="access-page">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="inviteCode">Please enter invite code: </label>
          <input
            type="text"
            name="inviteCode"
            value={this.state.inviteCode}
            onChange={(event) => this.handleInputChange(event)}
          />
          <input type="submit" value="Go!" disabled={this.props.isAccessSubmitDisabled}/>
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
