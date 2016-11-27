import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './app';

import src from '../../src';
import * as all from '../../src';

console.log('src', src);
console.log('all', all);
console.log('new', all.GridCell({ test: true }));
console.log('all.Grid', all.Grid, all.Grid.name);
console.log('all.Cell', all.Cell, all.Cell.name);

ReactDOM.render(<Docs/>, document.getElementById('docs'));