import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${() => css`
    padding: 24px 24px ${getBottomSpace() || 24}px;
  `}
`;
