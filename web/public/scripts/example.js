var Verse = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div className="comment">
        <h6 className="commentAuthor">
          {this.props.verse}
        </h6>
      </div>
    );
  }
});

var VerseBox = React.createClass({

  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Verses</h1>
        <VerseForm />
      </div>
    );
  }
});

var VerseList = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    console.log(this.props.data);
    if (this.props.data == null)
      return null;
    var verseNodes = this.props.data.map(function(comment) {
      return (
        <Verse verse={comment.verse}>
        </Verse>
      );
    });
    return (
      <div className="verseList">
        {verseNodes}
      </div>
    );
  }
});

var VerseForm = React.createClass({
  loadVersesFromServer: function(surah) {

  },
  getInitialState: function() {
    return {surah: ''};
  },
  handleSurahChange: function(e) {
    console.log(e.target.value);
    $.ajax({
      url: 'http://192.168.99.100:8080/quran/surah/' + e.target.value ,
      dataType: 'json',
      cache: false,
      success: function(data) {

        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('http://localhost:8080/quran/surah/' + e.target.value, status, err.toString());
      }.bind(this)
    });
    this.setState({surah: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var surahNumber = this.state.surah.trim();
    if (!surahNumber) {
      return;
    }
    this.props.onSurahSubmit({surah: surah});
    this.setState({surah: ''});
  },
  render: function() {
    return (
      <form className="verseForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Surah Number"
          value={this.state.surah}
          onChange={this.handleSurahChange}
        />
        <input type="submit" value="Post" />
        <VerseList data={this.state.data} />
      </form>
    );
  }
});

ReactDOM.render(
  <VerseBox />,
  document.getElementById('content')
);
