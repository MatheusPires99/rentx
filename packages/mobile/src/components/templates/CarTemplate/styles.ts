import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const BookButtonContainer = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.gray['50']};
    padding: 24px 24px ${getBottomSpace() || 24}px;
  `}
`;
