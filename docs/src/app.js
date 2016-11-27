import React, { Component } from 'react';
import { Grid, Cell } from '../../src';
import Nav from './components/Nav';
import * as pages from './components/Pages';

export default class DocsApp extends Component {
  constructor() {
    super(...arguments);
    this.changePage = this.changePage.bind(this);
    const hash = (typeof location !== 'undefined' && location.hash || "").substr(1);
    this.state = {
      Page: hash && pages[hash] || pages['default']
    }
  }

  changePage(page) {
    this.setState({
      Page: pages[page]
    });
  }

  render() {
    const { Page } = this.state;
    return (
      <div>
        <Grid>
          <Cell>
            <Nav onChange={ this.changePage }/>
          </Cell>
          <Cell>
            <Page/>
          </Cell>
        </Grid>
      </div>
    )
  }
}