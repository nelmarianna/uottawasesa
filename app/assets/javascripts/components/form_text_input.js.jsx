var FormTextInput = React.createClass({
  getDefaultProps() {
      return {
          type: 'text'
      };
  },
  render() {
    return (
      <div>
        <input
          { ...this.props }
        />
        <FormError />
      </div>
    );
  }
});
