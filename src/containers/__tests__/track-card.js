import React from 'react';
import { renderApollo, cleanup, waitForElement } from '../../utils/test-utils';
import FundCard from '../fund-card';

const mockFundCardData = {
  id: 'c_0',
  title: 'Cat-stronomy, an introduction',
  thumbnail:
    'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
  length: 2377,
  manager: {
    name: 'Henri, le Chat Noir',
    photo:
      'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  },
};

describe('Fund Card', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders fund Card', async () => {
    const mocks = [];
    const { getByText } = await renderApollo(
      <FundCard fund={mockFundCardData} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );
    await waitForElement(() => getByText(/cat-stronomy/i));
  });
});
