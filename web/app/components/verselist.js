var Verse = require('./verse.js');

var VerseList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {

    if (this.props.data == null)
      return null;
    var verseNodes = this.props.data.map(function(verse) {
      console.log(" verse =");
      console.log(verse);
      return (
        <Verse verse={verse.verse}>
        </Verse>
      );
    });
    return (
      <div className="verse-list">
        {verseNodes}
      </div>
    );
  }
});

module.exports = VerseList;
