import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IPHONE_8_HEIGHT } from '../../../constants';

const { width } = Dimensions.get('window');

export const Container = styled(SafeAreaView)`
  ${() => css`
    width: ${width}px;
    padding: 80px 32px 0;

    flex: 1;
  `}
`;

export const Header = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const StepNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 56px;
    color: ${theme.colors.gray['200']};
  `}
`;

export const Main = styled.View`
  ${() => css`
    margin-top: ${IPHONE_8_HEIGHT ? 80 : 64}px;

    flex: 1;
    justify-content: flex-start;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.bold};
    font-size: 40px;
    color: ${theme.colors.gray['600']};
    max-width: 184px;
    margin-bottom: 24px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.regular};
    font-size: 15px;
    line-height: 25px;
    color: ${theme.colors.gray['400']};
    max-width: 200px;
  `}
`;
