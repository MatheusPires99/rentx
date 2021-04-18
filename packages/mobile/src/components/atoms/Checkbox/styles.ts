import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const Box = styled.View`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background: ${theme.colors.gray['100']};
    margin-right: 12px;

    position: relative;

    align-items: center;
    justify-content: center;
  `}
`;

export const Background = styled(Animated.View)`
  ${({ theme }) => css`
    background: ${theme.colors.black};

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    top: 0;
    bottom: 0;
  `}
`;

export const CheckedBox = styled(Animated.View)`
  ${({ theme }) => css`
    width: 8px;
    height: 8px;
    background: ${theme.colors.white};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 13px;
    color: ${theme.colors.gray['400']};
  `}
`;
