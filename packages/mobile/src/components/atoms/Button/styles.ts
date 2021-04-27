import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Variant } from '.';

type ContainerProps = {
  variant?: Variant;
  disabled?: boolean;
};

export const Container = styled(RectButton)<ContainerProps>`
  ${({ theme, variant, disabled }) => css`
    height: 56px;

    ${variant === 'primary' &&
    css`
      background: ${theme.colors.primary};
    `}

    ${variant === 'secondary' &&
    css`
      background: ${theme.colors.gray['800']};
    `}

    ${disabled &&
    css`
      opacity: 0.5;
    `}

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
