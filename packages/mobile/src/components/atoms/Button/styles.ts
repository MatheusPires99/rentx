import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Variant } from '.';

type ContainerProps = {
  variant?: Variant;
};

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, variant }) => css`
    background-color: ${variant === 'secondary'
      ? theme.colors.gray['800']
      : theme.colors.primary};
    height: 56px;

    align-items: center;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.medium};
    font-size: 15px;
    color: ${theme.colors.white};
  `}
`;
