import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, SymbolDetail, QueryResult } from '../components';

/**
 * GET_MODULE_AND_PARENT_TRACK gql query to retrieve a specific symbol and its parent track,
 * both needed for the SymbolDetail component
 */
export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getSymbolAndParentTrack($symbolId: ID!, $trackId: ID!) {
    symbol(id: $symbolId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
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
 * Symbol page fetches both parent track and symbol's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the SymbolDetail component
 */
const Symbol = ({ symbolId, trackId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { symbolId, trackId },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <SymbolDetail track={data?.track} symbol={data?.symbol} />
      </QueryResult>
    </Layout>
  );
};

export default Symbol;
