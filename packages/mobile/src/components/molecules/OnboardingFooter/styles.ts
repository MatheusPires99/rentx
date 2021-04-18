import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

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

export const NextButton = styled.TouchableOpacity`
  ${() => css`
    width: 48px;
    height: 48px;

    align-items: center;
    justify-content: center;
  `}
`;
