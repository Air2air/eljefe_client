import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import FundDetail from '../components/fund-detail';

/** GET_TRACK gql query to retrieve a specific fund by its ID */
export const GET_TRACK = gql`
  query getFund($fundId: ID!) {
    fund(id: $fundId) {
      id
      title
      manager {
        id
        name
        photo
      }
      thumbnail
      length
      symbolsCount
      numberOfViews
      symbols {
        id
        title
        length
      }
      description
    }
  }
`;

/**
 * Fund Page fetches a fund's data from the gql query GET_TRACK
 * and provides it to the FundDetail component to display
 */
const Fund = ({ fundId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { fundId },
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <FundDetail fund={data?.fund} />
      </QueryResult>
    </Layout>
  );
};

export default Fund;
