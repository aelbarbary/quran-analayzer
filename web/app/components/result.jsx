var Result = React.createClass({
  render: function() {
    var imageSource = "./images/" +
                      this.props.data.surahEnglishName.replace(" ", "-").toLowerCase() +
                      ".jpg"
    return (
      <li>
        <div className="comment-main-level">
          

          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name by-author">
                <a href="http://creaticode.com/blog">
                  {this.props.data.surahArabicName} - {this.props.data.surahEnglishName}
                </a>
              </h6>
              <span>[{this.props.data.surahNumber}:{this.props.data.verseNumber}]</span>
              <i>
              </i>
              <i className="fa fa-heart">
              </i>
            </div>
            <div className="comment-content">
              {this.props.data.verse}
            </div>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = Result;
