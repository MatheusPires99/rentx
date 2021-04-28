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
