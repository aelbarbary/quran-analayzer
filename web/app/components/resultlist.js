var Result = require('./result.js');

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
      <div>
        {resultNodes}
      </div>
    );
  }
});

module.exports = ResultList;
