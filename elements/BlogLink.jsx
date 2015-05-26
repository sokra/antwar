'use strict';
var React = require('react');

var config = require('config');


module.exports = React.createClass({
  displayName: 'BlogLink',
  render: function() {
    var props = this.props;
    var item = props.item;
    var url = item.url;

    // skip category
    url = url.split('/').slice(1).join('/');

    // Router.Link yields an absolute link! better do a custom one
    return <a href={url}>{props.children}</a>;
  },
});
