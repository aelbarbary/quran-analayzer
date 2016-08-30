var Verse = React.createClass({
  render: function() {
    return (
      <div>
        <h6>
          {this.props.verse}
        </h6>
      </div>
    );
  }
});

module.exports = Verse;
