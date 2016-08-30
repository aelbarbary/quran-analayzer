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

	var VerseList = __webpack_require__(2);

	var VerseForm = React.createClass({
	  displayName: 'VerseForm',

	  loadVersesFromServer: function loadVersesFromServer(surah) {},
	  getInitialState: function getInitialState() {
	    return { surah: '' };
	  },
	  handleSurahChange: function handleSurahChange(e) {
	    console.log(e.target.value);
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
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var surahNumber = this.state.surah.trim();
	    if (!surahNumber) {
	      return;
	    }
	    this.props.onSurahSubmit({ surah: surah });
	    this.setState({ surah: '' });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'form',
	        { className: 'form-wrapper', onSubmit: this.handleSubmit },
	        React.createElement('input', {
	          type: 'text', id: 'search',
	          placeholder: 'What are you looking for?',
	          value: this.state.surah,
	          onChange: this.handleSurahChange
	        }),
	        React.createElement('input', { type: 'submit', value: 'go', id: 'submit' })
	      ),
	      React.createElement(VerseList, { data: this.state.data })
	    );
	  }
	});

	module.exports = VerseForm;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Verse = __webpack_require__(3);

	var VerseList = React.createClass({
	  displayName: "VerseList",

	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  render: function render() {

	    if (this.props.data == null) return null;
	    var verseNodes = this.props.data.map(function (verse) {
	      console.log(" verse =");
	      console.log(verse);
	      return React.createElement(Verse, { verse: verse.verse });
	    });
	    return React.createElement(
	      "div",
	      { className: "verse-list" },
	      verseNodes
	    );
	  }
	});

	module.exports = VerseList;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var Verse = React.createClass({
	  displayName: "Verse",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h6",
	        null,
	        this.props.verse
	      )
	    );
	  }
	});

	module.exports = Verse;

/***/ }
/******/ ]);