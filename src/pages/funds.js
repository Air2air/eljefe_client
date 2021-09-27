import React from 'react';
import { useQuery, gql } from '@apollo/client';
import FundCard from '../containers/fund-card';
import { Layout, QueryResult } from '../components';

/** TRACKS gql query to retreive all funds */
export const TRACKS = gql`
  query getFunds {
    fundsForHome {
      id
      title
      thumbnail
      length
      symbolsCount
      manager {
        name
        photo
      }
    }
  }
`;

/**
 * Funds Page is the Catstronauts home page.
 * We display a grid of funds fetched with useQuery with the TRACKS query
 */
const Funds = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.fundsForHome?.map((fund, index) => (
          <FundCard key={fund.id} fund={fund} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Funds;
