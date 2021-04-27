import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding: 80px 32px 0;

    flex: 1;
    align-items: center;
  `}
`;

export const Main = styled.View`
  ${() => css`
    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 40px;
    color: ${theme.colors.gray['50']};
    text-align: center;
    margin-bottom: 16px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['200']};
  `}
`;

export const Footer = styled.View`
  ${() => css`
    margin-bottom: 16px;

    align-items: center;
  `}
`;

export const SignButtons = styled.View`
  ${() => css`
    margin-bottom: 24px;

    flex-direction: row;
    align-items: center;
  `}
`;

export const ButtonWrapper = styled.View`
  ${() => css`
    flex: 1;
  `}
`;

export const GoBackButton = styled.TouchableOpacity`
  ${() => css`
    height: 48px;
    width: 80px;

    align-items: center;
    justify-content: center;
  `}
`;

export const GoBackButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.medium};
    font-size: 13px;
    color: ${theme.colors.gray['400']};
  `}
`;
