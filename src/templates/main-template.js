import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

export default class IndexPage extends Component {
  render() {
    console.log('hello from main template');
    console.log('props', this.props);
    return <div>This is template!!</div>;
  }
}
