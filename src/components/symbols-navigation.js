import React from 'react';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { colors, IconArrowRight, IconDoubleArrowRight } from '../styles';
import { humanReadableTimeFromSeconds } from '../utils/helpers';

/**
 * Symbol Navigation: displays a list of symbols titles
 * from a track and navigates to the symbols page
 */
const SymbolsNav = ({ symbol, track }) => {
  return (
    <SymbolsNavContainer>
      <SymbolTitle>
        <h4>
          <Link to="../..">{track.title}</Link>
        </h4>
      </SymbolTitle>
      <SymbolsList>
        {track.symbols.map((navSymbol) => (
          <SymbolListItem key={`symbol_${navSymbol.id}`}>
            <div>
              <SymbolNavStyledLink to={`../${navSymbol.id}`}>
                <SymbolListItemContent isActive={navSymbol.id === symbol.id}>
                  {navSymbol.id === symbol.id ? (
                    <IconDoubleArrowRight width="14px" />
                  ) : (
                    <IconArrowRight width="14px" weight="thin" />
                  )}
                  <div>{navSymbol.title}</div>
                  <div>{humanReadableTimeFromSeconds(navSymbol.length)}</div>
                </SymbolListItemContent>
              </SymbolNavStyledLink>
            </div>
          </SymbolListItem>
        ))}
      </SymbolsList>
    </SymbolsNavContainer>
  );
};

export default SymbolsNav;

/** Symbol Navigation styled components */
const SymbolsNavContainer = styled.div({
  width: '33%',
  position: 'relative',
  marginLeft: 20,
  backgroundColor: colors.black.light,
  borderRadius: 4,
  border: `solid 1px ${colors.black.lighter}`,
  overflow: 'auto',
});

const trackTitleHeight = 70;

const SymbolTitle = styled.div({
  display: 'flex',
  position: 'sticky',
  fontSize: '1.6em',
  fontWeight: '400',
  height: trackTitleHeight,
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'colors.pink.base',
  borderBottom: `solid 1px ${colors.pink.base}`,

  a: {
    textDecoration: 'none',
    color: colors.silver.base,
  },
  ':hover': {
    backgroundColor: colors.black.base,
  },
});

const SymbolsList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  overflowY: 'scroll',
  height: `calc(100% - ${trackTitleHeight}px)`,
});

const SymbolListItem = styled.li((props) => ({
  borderBottom: `solid 1px ${colors.grey.darker}`,
  ':last-child': {
    borderBottom: 'none',
  },
}));

const SymbolNavStyledLink = styled(Link)({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

const SymbolListItemContent = styled.div((props) => ({
  backgroundColor: props.isActive ? colors.black.base : colors.black.light,
  color: props.isActive ? colors.silver.lighter : colors.silver.darker,
  minHeight: 80,
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.1em',
  flex: 1,
  ':hover': {
    backgroundColor: props.isActive ? colors.black.dark : colors.black.base,
    color: 'white',
  },
}));
