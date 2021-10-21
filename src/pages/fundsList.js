import React from 'react';
import { useQuery, gql } from '@apollo/client';
import FundCard from '../containers/fund-card';
import { Layout, QueryResult } from '../components';

/** FUNDSLIST gql query to retrieve all funds */
export const FUNDSLIST = gql`
  query getFundsList {
    fundsInPortfolio {
      id
      title
      description
      # manager {
      #   id
      #   title
      #   description
      # }
      # symbols {
      #   id
      #   title
      #   description
      # }
    }
  }
`;

/**
 * Grid of funds fetched with useQuery with the FUNDSLIST query
 */
const FundsList = () => {
  const { loading, error, data } = useQuery(FUNDSLIST);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.fundsInPortfolio?.map((fund, index) => (
          <FundCard key={fund.id} fund={fund} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default FundsList;
