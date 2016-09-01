/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SearchForm = __webpack_require__(1);

	ReactDOM.render(React.createElement(SearchForm, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ResultList = __webpack_require__(2);

	var SearchForm = React.createClass({
	  displayName: 'SearchForm',

	  loadVersesFromServer: function loadVersesFromServer(surah) {},
	  getInitialState: function getInitialState() {
	    return { surah: '' };
	  },
	  handleSurahChange: function handleSurahChange(e) {
	    $.ajax({
	      url: 'http://localhost:8080/quran/search/' + e.target.value,
	      dataType: 'json',
	      cache: false,
	      success: function (data) {

	        this.setState({ data: data.content });
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error('http://localhost:8080/quran/search/' + e.target.value, status, err.toString());
	      }.bind(this)
	    });
	    this.setState({ surah: e.target.value });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'form',
	        { className: 'form-wrapper' },
	        React.createElement('input', {
	          type: 'text',
	          id: 'search',
	          placeholder: 'What are you looking for?',
	          value: this.state.surah,
	          onChange: this.handleSurahChange
	        })
	      ),
	      React.createElement(ResultList, { data: this.state.data })
	    );
	  }
	});

	module.exports = SearchForm;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Result = __webpack_require__(3);

	var ResultList = React.createClass({
	  displayName: "ResultList",

	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  render: function render() {

	    if (this.props.data == null) return null;
	    var resultNodes = this.props.data.map(function (result) {
	      return React.createElement(Result, { data: result });
	    });
	    return React.createElement(
	      "div",
	      { className: "comments-container" },
	      React.createElement(
	        "ul",
	        { id: "comments-list", className: "comments-list" },
	        resultNodes
	      )
	    );
	  }
	});

	module.exports = ResultList;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var Result = React.createClass({
	  displayName: "Result",

	  render: function render() {
	    var imageSource = "./images/" + this.props.data.surahEnglishName.replace(" ", "-").toLowerCase() + ".jpg";
	    return React.createElement(
	      "li",
	      null,
	      React.createElement(
	        "div",
	        { className: "comment-main-level" },
	        React.createElement(
	          "div",
	          { className: "comment-avatar" },
	          React.createElement("img", {
	            src: imageSource,
	            alt: "" })
	        ),
	        React.createElement(
	          "div",
	          { className: "comment-box" },
	          React.createElement(
	            "div",
	            { className: "comment-head" },
	            React.createElement(
	              "h6",
	              { className: "comment-name by-author" },
	              React.createElement(
	                "a",
	                { href: "http://creaticode.com/blog" },
	                this.props.data.surahArabicName,
	                " - ",
	                this.props.data.surahEnglishName
	              )
	            ),
	            React.createElement(
	              "span",
	              null,
	              "[",
	              this.props.data.surahNumber,
	              ":",
	              this.props.data.verseNumber,
	              "]"
	            ),
	            React.createElement("i", null),
	            React.createElement("i", { className: "fa fa-heart" })
	          ),
	          React.createElement(
	            "div",
	            { className: "comment-content" },
	            this.props.data.verse
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Result;

/***/ }
/******/ ]);