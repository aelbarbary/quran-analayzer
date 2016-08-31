var ResultList = require('./resultlist.js');

var SearchForm = React.createClass({
  loadVersesFromServer: function(surah) {

  },
  getInitialState: function() {
    return {surah: ''};
  },
  handleSurahChange: function(e) {
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
  render: function() {
    return (
      <div>
        <form className="form-wrapper" >
          <input
            type="text" id="search"
            placeholder="What are you looking for?"
            value={this.state.surah}
            onChange={this.handleSurahChange}
          />
          <input type="submit" value="go" id="submit" />
        </form>
        <ResultList data={this.state.data} />
      </div>
    );
  }
});

module.exports = SearchForm;
