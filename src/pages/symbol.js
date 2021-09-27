import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, SymbolDetail, QueryResult } from '../components';

/**
 * GET_SYMBOL_AND_PARENT_FUND gql query to retrieve a specific symbol and its parent fund,
 * both needed for the SymbolDetail component
 */
export const GET_SYMBOL_AND_PARENT_FUND = gql`
  query getSymbolAndParentFund($symbolId: ID!, $fundId: ID!) {
    symbol(id: $symbolId) {
      id
      title
      content
      videoUrl
    }
    fund(id: $fundId) {
      id
      title
      symbols {
        id
        title
        length
      }
    }
  }
`;

/**
 * Symbol page fetches both parent fund and symbol's data from the gql query GET_SYMBOL_AND_PARENT_FUND
 * and feeds them to the SymbolDetail component
 */
const Symbol = ({ symbolId, fundId }) => {
  const { loading, error, data } = useQuery(GET_SYMBOL_AND_PARENT_FUND, {
    variables: { symbolId, fundId },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <SymbolDetail fund={data?.fund} symbol={data?.symbol} />
      </QueryResult>
    </Layout>
  );
};

export default Symbol;
