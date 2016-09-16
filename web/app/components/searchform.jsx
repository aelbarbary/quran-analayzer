var ResultList = require('./resultlist.jsx');
var Menu = require('./menu.jsx');
var MenuItem = require('./menuitem.jsx');
var ReactPaginate = require('react-paginate');
var React = require('react');
var config = require('./../config');
var $ = require('jQuery');
var sprintf = require("sprintf-js").sprintf;

var SearchForm = React.createClass({
  showLeft: function() {
        this.refs.left.show();
  },
  loadResultsFromServer: function(searchTerm) {
    var url = sprintf("http://%s:%s/quran/search/%s",config.api.host, config.api.port, searchTerm);

    console.log("url:" + url);
    console.log("offset:" + this.state.offset);
    $.ajax({
      url: url,
      data: {limit: 10, page: this.state.offset },
      dataType: 'json',
      cache: false,
      success: function(data) {

        this.setState({data: data.content, pageNum: Math.ceil(data.totalElements / data.size)});

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {searchTerm: '', offset: 0};
  },
  handleSearchTermChange: function(e) {
    this.setState({offset: 0, searchTerm: e.target.value});
    this.loadResultsFromServer(e.target.value);
  },
  handlePageClick: function(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected);

    this.setState({offset: offset}, () => {
      this.loadResultsFromServer(this.state.searchTerm);
    });

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
            onChange={this.handleSearchTermChange}
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
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={
              <a href="">...</a>
            }
            breakClassName={"break-me"}
            pageNum={this.state.pageNum}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            clickCallback={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />

      </div>
    );
  }
});

module.exports = SearchForm;
