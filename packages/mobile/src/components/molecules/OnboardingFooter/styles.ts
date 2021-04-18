import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

type StepProps = {
  active: boolean;
};

export const Footer = styled(Animated.View)`
  ${() => css`
    width: 100%;
    margin-bottom: 24px;
    padding: 0 32px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

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
