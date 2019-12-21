import React from 'react';
import { connect } from 'react-redux';
import { fetchGroup } from './store/group';
import { postSubmission, setSubmissionError } from './store/rsvpSubmission';
import { toggleRSVPSubmitBtn } from './store/rsvpSubmitBtn';

import './RSVPSelect.css';

class RSVPSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      submissions: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const guestId = event.currentTarget.attributes.getNamedItem('guestid').value;
    const name = event.target.name;
    const value = event.target.value;

    if (!this.state.submissions.hasOwnProperty(guestId)) {
      this.setState((prevState) => ({
        submissions: {
          ...prevState.submissions,
          [guestId]: {
            [name]: value,
            entree: '',
            restrictions: ''
          }
        }
      }))
    } else {
      if (name === 'attendence' && value === 'pending') {
        this.setState(prevState => {
          delete prevState.submissions[guestId];
          return prevState;
        })
      } else {
        this.setState((prevState) => ({
          submissions: {
            ...prevState.submissions,
            [guestId]: {
              ...prevState.submissions[guestId],
             [name]: value
            }
          }
        }));
      }
    }
  }

  async handleSubmit(event)  {
    event.preventDefault();
    this.props.toggleRSVPSubmitBtn();
    let ids = Object.keys(this.state.submissions);
    let error = false;

    for (let id of ids) {
      if (this.state.submissions[id].attendence === 'accept' && !this.state.submissions[id].entree) {
        error = !error;
        this.props.toggleRSVPSubmitBtn();
        this.props.setSubmissionError('Please select an entree for those attending');
      }
    }
    if (!error) {
      await this.props.postSubmission(this.state.submissions);
    }
  }

  async componentDidMount() {
    await this.props.fetchGroup(this.props.guest.guestData.groupId)
  }

  render() {
    let errorMessage;
    if (this.props.rsvpSubmission.error) {
      errorMessage = <div>{this.props.rsvpSubmission.error}</div>
    }
    return (
      <div className="rsvp-select">
        <form onSubmit={this.handleSubmit}>
          {this.props.group.groupMembers.length === 0 ?
            <div className="loader"></div> :
            this.props.group.groupMembers.map(member =>
              <div onChange={this.handleChange} key={member.id} guestId={member.id} className="group-member">
                <label for="attendence">{`${member.firstName} ${member.lastName}`}</label>
                <select name="attendence">
                  <option value="pending">--Will this individual be attending?--</option>
                  <option value="accept">Accept</option>
                  <option value="decline">Decline</option>
                </select>
                <label for="entree">Entree</label>
                <select disabled={areExtraFieldsDisabled(this.state, member.id)} name="entree">
                  <option value="">--Choose your entree--</option>
                  <option value="steak">Manhattan strip steak with garlic jus, asparagus, roasted garlic mash</option>
                  <option value="salmon">Atlantic salmon, whipped potato, spinach, lemon dill</option>
                  <option value="vegetarian">Grilled eggplant cannelloni, preserved tomato, wilted spinach</option>
                </select>
                <label for="restrictions">Any dietary restrictions or food allergies?</label>
                <textarea disabled={areExtraFieldsDisabled(this.state, member.id)} name="restrictions" placeholder="Any dietary restrictions or allergies?"></textarea>
              </div>
            )
          }
           <div className="submit-btn_container">
            <input className="submit-btn" type="submit" value={this.props.isRSVPSubmitBtnDisabled ? 'submitting...' : 'submit'} disabled={this.props.isRSVPSubmitBtnDisabled || Object.keys(this.state.submissions).length < 1} />
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
  rsvpSubmission: state.rsvpSubmission,
  isRSVPSubmitBtnDisabled: state.isRSVPSubmitBtnDisabled
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroup: (groupId) => dispatch(fetchGroup(groupId)),
  postSubmission: (accept, decline) => dispatch(postSubmission(accept, decline)),
  toggleRSVPSubmitBtn: () => dispatch(toggleRSVPSubmitBtn()),
  setSubmissionError: (error) => dispatch(setSubmissionError(error))
});

const areExtraFieldsDisabled = (state, memberId) => {
  if (state.submissions.hasOwnProperty(memberId)) {
    if (state.submissions[memberId].hasOwnProperty('attendence')){
      if (state.submissions[memberId].attendence === 'accept') {
        return false;
      }
    }
  }
  return true;
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVPSelect);
