var Result = React.createClass({
  render: function() {
    return (
      <div>
        <h5>[{this.props.data.surahNumber}:{this.props.data.verseNumber}] {this.props.data.surahArabicName} - {this.props.data.surahEnglishName}</h5>
        <h6>
          {this.props.data.verse}
        </h6>
      </div>
    );
  }
});

module.exports = Result;
