var Verse = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h6 className="commentAuthor">
          {this.props.verse.verse}
        </h6>
      </div>
    );
  }
});
