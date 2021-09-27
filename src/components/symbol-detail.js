import React from 'react';
import styled from '@emotion/styled';
import { colors, widths } from '../styles';
import useWindowDimensions from '../utils/useWindowDimensions';
import ContentSection from './content-section';
import ReactPlayer from 'react-player/youtube';
import SymbolsNav from './symbols-navigation';
import MarkDown from './md-content';

/**
 * Symbol Detail renders content of a given symbol:
 * Video player, symbols navigation and markdown content
 */
const SymbolDetail = ({ fund, symbol }) => {
  const { videoUrl, title, content } = symbol;
  const { width } = useWindowDimensions();

  return (
    <>
      <TopSection>
        <TopContainer totalWidth={width}>
          <PlayerContainer>
            <ReactPlayer url={videoUrl} width="100%" height="100%" />
          </PlayerContainer>
          <SymbolsNav fund={fund} symbol={symbol}></SymbolsNav>
        </TopContainer>
      </TopSection>
      <ContentSection>
        <SymbolTitle>{title}</SymbolTitle>
        <MarkDown content={content} />
      </ContentSection>
    </>
  );
};

export default SymbolDetail;

/** Symbol Detail styled components */
const TopSection = styled.div({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colors.black.base,
  padding: 20,
  borderBottom: `solid 1px ${colors.pink.base}`,
});

const TopContainer = styled.div(({ totalWidth }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  width: '100%',
  maxWidth: widths.largePageWidth,
  // 60 below removes 3 * 20 horizontal paddings (sides and inner between player and list)
  height: ((totalWidth - 60) * (2 / 3)) / (16 / 9),
  maxHeight: (widths.largePageWidth * (2 / 3)) / (16 / 9),
}));

const PlayerContainer = styled.div({
  width: '66%',
});

const SymbolTitle = styled.h1({
  marginTop: 10,
  marginBottom: 30,
  paddingBottom: 10,
  color: colors.black.lighter,
  borderBottom: `solid 1px ${colors.pink.base}`,
});
