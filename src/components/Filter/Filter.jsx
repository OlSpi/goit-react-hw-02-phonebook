const { Component } = require('react');

export class Filter extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { filter } = this.props;
    return (
      <input
        type="text"
        placeholder="Search...."
        value={filter}
        onChange={this.handleChange}
      />
    );
  }
}
