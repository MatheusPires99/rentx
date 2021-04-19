import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IPHONE_8_HEIGHT } from '../../../constants';

export const Container = styled(SafeAreaView)`
  ${() => css`
    padding: 0 32px;

    flex: 1;
    justify-content: center;
  `}
`;

export const Content = styled.View`
  ${() => css`
    flex: 1;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 40px;
    color: ${theme.colors.gray['600']};
    width: 170px;
    margin-bottom: 24px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['400']};
    line-height: 25px;
    width: 204px;
  `}
`;

export const Form = styled.View`
  ${() => css`
    margin-top: ${IPHONE_8_HEIGHT ? 64 : 110}px;
  `}
`;
