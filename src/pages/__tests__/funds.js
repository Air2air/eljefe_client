import React from "react";
// this adds custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { InMemoryCache } from "@apollo/client";
import { renderApollo, cleanup, waitForElement } from "../../utils/test-utils";
import FundsList, { FUNDSLIST } from "../funds";

const mockFund = {
  id: "c_0",
  title: "Nap, the hard way",
  thumbnail:
    "https://images.unsplash.com/photo-1542403810-74c578300013?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0",
  length: 1420,
  symbolsCount: 6,
  manager: {
    name: "Cheshire Cat",
    photo:
      "https://images.unsplash.com/photo-1593627010886-d34828365da7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0",
  },
};

describe("FundsList Page", () => {
  afterEach(cleanup);
  const cache = new InMemoryCache({ addTypename: false });

  it("renders funds", async () => {
    const mocks = [
      {
        request: { query: FUNDSLIST },
        result: {
          data: {
            fundsInPortfolio: [mockFund],
          },
        },
      },
    ];

    const { getByText } = await renderApollo(<FundsList />, {
      mocks,
      cache,
    });

    await waitForElement(() => getByText(/nap, the hard way/i));
  });
});

/*
import React from 'react';
import { renderApollo, cleanup, waitForElement } from '../../test-utils';
import { InMemoryCache } from '@apollo/client';

import FundsList, { FUNDSLIST } from '../fundsList';
const mockFund = {
  id: 'c_0',
  title: 'Nap, the hard way',
  thumbnail:
    'https://images.unsplash.com/photo-1542403810-74c578300013?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzA0OH0',
  fundLength: 1420,
  manager: {
    name: 'Cheshire Cat',
  },
};

describe('FundsList Page', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders funds', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: { query: FUNDSLIST },
        result: {
          data: {
            funds: [mockFund],
          },
        },
      },
    ];
    const { getByText } = await renderApollo(<FundsList />, {
      mocks,
      cache,
    });
    await waitForElement(() => getByText(/nap, the hard way/i));
  });
});*/
