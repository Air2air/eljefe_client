import React from 'react';
import styled from '@emotion/styled';
import { colors, mq } from '../styles';
//import { humanReadableTimeFromSeconds } from '../utils/helpers';
import { Link } from '@reach/router';

/**
 * Fund Card component renders basic info in a card format
 * for each fund populating the funds grid homepage.
 */
const FundCard = ({ fund }) => {
  const { title, description, manager, id } = fund;

  return (
    <CardContainer to={`/fund/${id}`}>
      <CardContent>
        <CardImageContainer>{title}
        </CardImageContainer>
        <CardBody>
          <CardTitle>{title || ''}</CardTitle>
          <CardFooter>
            <ManagerAndFund>
              {/* <ManagerName>{manager.title}, {manager.description}, </ManagerName> */}
              <ManagerName>{title}, {description}, </ManagerName>
              <FundLength>
              {description}
              </FundLength>
            </ManagerAndFund>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default FundCard;

/** Fund Card styled components */
const CardContainer = styled(Link)({
  borderRadius: 6,
  color: colors.text,
  backgroundSize: 'cover',
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [mq[0]]: {
    width: '90%',
  },
  [mq[1]]: {
    width: '47%',
  },
  [mq[2]]: {
    width: '31%',
  },
  height: 380,
  margin: 10,
  overflow: 'hidden',
  position: 'relative',
  ':hover': {
    backgroundColor: colors.pink.lightest,
  },
  cursor: 'pointer',
  textDecoration: 'none',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100%',
});

const CardTitle = styled.h3({
  textAlign: 'center',
  fontSize: '1.4em',
  lineHeight: '1em',
  fontWeight: 700,
  color: colors.text,
  flex: 1,
});

const CardImageContainer = styled.div({
  height: 220,
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(250,0,150,0.20)',
  },
});

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: 'flex',
  color: colors.textSecondary,
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const CardFooter = styled.div({
  display: 'flex',
  flexDirection: 'Row',
});



const ManagerAndFund = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const ManagerName = styled.div({
  lineHeight: '1em',
  fontSize: '1.1em',
});

const FundLength = styled.div({
  fontSize: '0.8em',
});
