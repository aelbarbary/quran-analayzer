var Result = require('./result.jsx');

var ResultList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {

    if (this.props.data == null)
    return null;
    var resultNodes = this.props.data.map(function(result) {
      return (
        <Result data={result}>
        </Result>
      );
    });
    return (
      <div className="comments-container">
        <ul id="comments-list" className="comments-list">
        {resultNodes}
      </ul>
      </div>
    );
  }
});

module.exports = ResultList;
