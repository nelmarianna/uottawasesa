var LinkedStateMixin = React.addons.LinkedStateMixin;

var MyFormInput = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {
      firstName: '',
      lastName: '',
      faculty: '',
      programOfStudy: '',
      email: '',
      commitments: '',
      linkedInUrl: '',
      githubUrl: '',
      whyGoodCandidate: '',
      resumeUrl: '',
      additionalInfo: ''
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var application =  {
      'data' : {
        'type': 'application',
        'attributes':{
          'firstName': this.state.firstName.trim(),
          'lastName':  this.state.lastName.trim(),
          'faculty': this.state.faculty.trim(),
          'programOfStudy':  this.state.programOfStudy.trim(),
          'email': this.state.email.trim(),
          'commitments': this.state.commitments.trim(),
          'linkedInUrl': this.state.linkedInUrl.trim(),
          'githubUrl': this.state.githubUrl.trim(),
          'whyGoodCandidate':  this.state.whyGoodCandidate.trim(),
          'resumeUrl': this.state.resumeUrl.trim(),
          'additionalInfo':  this.state.additionalInfo.trim()
        }
      }
    };
    $.ajax({
      url: '/applications',
      dataType: 'json',
      type: 'POST',
      data: application,
      success: function(data) {
        $(ReactDOM.findDOMNode(this)).hide();
        $('.successful-application').show();
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        $(ReactDOM.findDOMNode(this)).hide();
        $('.retry-application').show();
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <form role='form' onSubmit={this.handleSubmit} acceptCharset='UTF-8'>
        <FormLabel id={"firstName"} label={"First Name"}>
          <FormTextInput className={"form-control"} id={"firstName"} valueLink={this.linkState('firstName')} required />
        </FormLabel>
        <FormLabel id={"lastName"} label={"Last Name"}>
          <FormTextInput className={"form-control"} id={"lastName"} valueLink={this.linkState('lastName')} required />
        </FormLabel>
        <FormLabel id={"faculty"} label={"Faculty"}>
          <FormTextInput className={"form-control"} id={"faculty"} valueLink={this.linkState('faculty')} placeholder={"Faculty of Engineering"} />
        </FormLabel>
        <FormLabel id={"programOfStudy"} label={"Program of Study"}>
          <FormTextInput className={"form-control"} id={"programOfStudy"} valueLink={this.linkState('programOfStudy')} placeholder={"Software Engineering"} />
        </FormLabel>
        <FormLabel id={"email"} label={"Please enter your preferred email address for contact"}>
          <FormTextInput type={"email"} className={"form-control"} id={"email"} valueLink={this.linkState('email')} placeholder={"esmith007@uottawa.ca"} required />
        </FormLabel>
        <FormLabel id={"commitments"} row={"3"} label={"Other commitments during the year (e.g. Co-op, Exchange, Part-time job, Other extracurriculars, Other clubs, etc.)"}>
          <FormTextArea className={"form-control"} id={"commitments"} valueLink={this.linkState('commitments')} />
        </FormLabel>
        <FormLabel id={"linkedInUrl"} label={"LinkedIn URL"}>
          <FormTextInput className={"form-control"} id={"linkedInUrl"} valueLink={this.linkState('linkedInUrl')} />
        </FormLabel>
        <FormLabel id={"githubUrl"} label={"Github URL"}>
          <FormTextInput className={"form-control"} id={"githubUrl"} valueLink={this.linkState('githubUrl')} />
        </FormLabel>
        <FormLabel id={"whyGoodCandidate"} row={"3"} label={"Why would you be a good candidate?"}>
          <FormTextArea className={"form-control"} id={"whyGoodCandidate"} valueLink={this.linkState('whyGoodCandidate')} />
        </FormLabel>
        <FormLabel id={"resumeUrl"} label={"Resume URL (Dropbox, Google Docs, etc.)"}>
          <FormTextInput className={"form-control"} id={"resumeUrl"} valueLink={this.linkState('resumeUrl')} />
        </FormLabel>
        <FormLabel id={"additionalInfo"} row={"3"} label={"Anything else?"}>
          <FormTextArea className={"form-control"} id={"additionalInfo"} valueLink={this.linkState('additionalInfo')} />
        </FormLabel>
        <input type="submit" value="Apply" className="signup" />
      </form>
    );
  }
});
