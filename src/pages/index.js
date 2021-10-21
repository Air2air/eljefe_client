import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import FundsList from './fundsList';
import Fund from './fund';
import Symbol from './symbol';

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <FundsList path="/" />
      <Fund path="/fund/:fundId" />
      <Symbol path="/fund/:fundId/symbol/:symbolId" />
    </Router>
  );
}
