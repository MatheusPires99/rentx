import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type StepProps = {
  active: boolean;
};

export const Container = styled(SafeAreaView)`
  ${() => css`
    flex: 1;
    padding: 80px 32px 0;
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
    color: ${theme.colors.gray['100']};
  `}
`;

export const Main = styled.View`
  ${() => css`
    margin-top: 80px;

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

export const Footer = styled.View`
  ${() => css`
    margin-bottom: 24px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const StepCount = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const Step = styled.View<StepProps>`
  ${({ theme, active }) => css`
    width: ${active ? 6 : 4}px;
    height: ${active ? 6 : 4}px;
    border-radius: ${active ? 3 : 2}px;
    background: ${active ? theme.colors.gray['600'] : theme.colors.gray['300']};
    margin-right: 8px;
  `}
`;

export const NextButton = styled.TouchableOpacity`
  ${() => css`
    width: 48px;
    height: 48px;

    align-items: center;
    justify-content: center;
  `}
`;
