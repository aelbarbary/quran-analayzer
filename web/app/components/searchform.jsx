var ResultList = require('./resultlist.jsx');
var Menu = require('./menu.jsx');
var MenuItem = require('./menuitem.jsx');

var SearchForm = React.createClass({
  showLeft: function() {
        this.refs.left.show();
  },
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
      <div className="form-wrapper">
          <button onClick={this.showLeft}>
            Show Left Menu!
          </button>
          <input
            type="text"
            id="search"
            placeholder="What are you looking for?"
            value={this.state.surah}
            onChange={this.handleSurahChange}
            />
        <ResultList data={this.state.data} />

        <Menu ref="left" alignment="left">
          <MenuItem hash="first-page">
            First Page
          </MenuItem>
          <MenuItem hash="second-page">
            Second Page
          </MenuItem>
          <MenuItem hash="third-page">
            Third Page
          </MenuItem>
        </Menu>

      </div>
    );
  }
});

module.exports = SearchForm;
