var FormTextArea = React.createClass({

  render: function() {
    return (
      <textarea
        { ...this.props }
      />
    );
  }
});
