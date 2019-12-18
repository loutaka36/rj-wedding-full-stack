import React from 'react';

class AccessPage extends React.Component {
  constructor() {
    super();
    this.state = {
      inviteCode: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="access-page">
        <form>
          <label htmlFor="inviteCode">Please enter invite code: </label>
          <input
            type="text"
            name="inviteCode"
            value={this.state.inviteCode}
            onChange={(event) => this.handleInputChange(event)}
          />
          <input type="submit" value="Go!" />
        </form>
      </div>
    );
  }
}

//map dispatch and state to props

export default AccessPage;
