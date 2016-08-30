var VerseList = require('./verselist.js');

var VerseForm = React.createClass({
  loadVersesFromServer: function(surah) {

  },
  getInitialState: function() {
    return {surah: ''};
  },
  handleSurahChange: function(e) {
    console.log(e.target.value);
    $.ajax({
      url: 'http://localhost:8080/quran/search/' + e.target.value ,
      dataType: 'json',
      cache: false,
      success: function(data) {

        this.setState({data: data.content});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('http://localhost:8080/quran/search/' + e.target.value, status, err.toString());
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
      <div>
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <input
            type="text" id="search"
            placeholder="What are you looking for?"
            value={this.state.surah}
            onChange={this.handleSurahChange}
          />
          <input type="submit" value="go" id="submit" />
        </form>
        <VerseList data={this.state.data} />
      </div>
    );
  }
});

module.exports = VerseForm;
