import React from 'react';
import styled from '@emotion/styled';
import {
  colors,
  Button,
  IconRun,
  IconView,
  IconTime,
  IconBook,
} from '../styles';
import { humanReadableTimeFromSeconds } from '../utils/helpers';
import { Link } from '@reach/router';
import ContentSection from './content-section';
import MarkDown from './md-content';

/**
 * Fund Detail component renders the main content of a given fund:
 * manager, length, number of views, symbols list, among other things.
 * It provides access to the first symbol of the fund.
 */
const FundDetail = ({ fund }) => {
  const {
    title,
    description,
    thumbnail,
    manager,
    length,
    symbolsCount,
    symbols,
    numberOfViews,
  } = fund;

  return (
    <ContentSection>
      <CoverImage src={thumbnail} alt="" />
      <FundDetails>
        <DetailRow>
          <h1>{title}</h1>
        </DetailRow>
        <DetailRow>
          <DetailItem>
            <h4>Fund details</h4>
            <IconAndLabel>
              <IconView width="16px" />
              <div id="viewCount">{numberOfViews} view(s)</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconBook width="14px" height="14px" />
              <div>{symbolsCount} symbols</div>
            </IconAndLabel>
            <IconAndLabel>
              <IconTime width="14px" />
              <div>{humanReadableTimeFromSeconds(length)}</div>
            </IconAndLabel>
          </DetailItem>
          <DetailItem>
            <h4>Manager</h4>
            <ManagerImage src={manager.photo} />
            <ManagerName>{manager.title}</ManagerName>
          </DetailItem>
          <div>
            <StyledLink to={`./symbol/${symbols[0]['id']}`}>
              <Button
                icon={<IconRun width="20px" />}
                color={colors.pink.base}
                size="large"
              >
                Start Fund
              </Button>
            </StyledLink>
          </div>
        </DetailRow>
        <SymbolListContainer>
          <DetailItem>
            <h4>Symbols</h4>
            <ul>
              {symbols.map((symbol) => (
                <li key={symbol.title}>
                  <div>{symbol.title}</div>
                  <SymbolLength>
                    {humanReadableTimeFromSeconds(symbol.length)}
                  </SymbolLength>
                </li>
              ))}
            </ul>
          </DetailItem>
        </SymbolListContainer>
      </FundDetails>
      <MarkDown content={description} />
    </ContentSection>
  );
};

export default FundDetail;

/** Fund detail styled components */
const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 30,
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
});

const FundDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  h4: {
    fontSize: '1.2em',
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: colors.textSecondary,
  alignSelf: 'center',
});

const ManagerImage = styled.img({
  height: 30,
  width: 30,
  marginBottom: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const ManagerName = styled.div({
  lineHeight: '1em',
  fontSize: '1em',
});

const IconAndLabel = styled.div({
  display: 'flex',
  flex: 'row',
  alignItems: 'center',
  maxHeight: 20,
  width: '100%',
  div: {
    marginLeft: 8,
  },
  svg: {
    maxHeight: 16,
  },
  '#viewCount': {
    color: colors.pink.base,
  },
});

const SymbolListContainer = styled.div({
  width: '100%',
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 2,
    },
  },
});

const SymbolLength = styled.div({
  marginLeft: 30,
  color: colors.grey.light,
});
