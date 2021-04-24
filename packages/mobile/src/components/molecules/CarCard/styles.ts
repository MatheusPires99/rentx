import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 100%;
    padding: 24px;
    background: ${theme.colors.white};
    margin-bottom: 16px;

    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.gray['100']};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Content = styled.View`
  ${() => css``}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: 10px;
    color: ${theme.colors.gray['300']};
    margin-bottom: 4px;
    text-transform: uppercase;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 16px;
    color: ${theme.colors.gray['600']};
    margin-bottom: 16px;
  `}
`;

export const Box = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ValuePerDayContainer = styled.View`
  ${() => css`
    margin-right: ${isIphoneX() ? 18 : 12}px;
  `}
`;

export const ValuePerDay = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 16px;
    color: ${theme.colors.primary};
  `}
`;

export const Image = styled.Image`
  ${() => css`
    width: 160px;
    height: 92px;
  `}
`;
