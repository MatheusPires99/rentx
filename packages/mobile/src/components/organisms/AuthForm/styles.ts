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

export const Form = styled.View`
  ${() => css`
    margin-top: ${IPHONE_8_HEIGHT ? 110 : 64}px;
  `}
`;
