import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { BookStep } from '../../../types';

type BookButtonContainerProps = {
  step: number;
};

export const Container = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const BookButtonContainer = styled.View<BookButtonContainerProps>`
  ${({ theme, step }) => css`
    background: ${step === BookStep.Date || step === BookStep.Confirm
      ? theme.colors.white
      : theme.colors.gray['50']};
    padding: 24px 24px ${getBottomSpace() || 24}px;
  `}
`;
