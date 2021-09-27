import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Funds from './funds';
import Fund from './fund';
import Symbol from './symbol';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Funds path="/" />
      <Fund path="/fund/:fundId" />
      <Symbol path="/fund/:fundId/symbol/:symbolId" />
    </Router>
  );
}
