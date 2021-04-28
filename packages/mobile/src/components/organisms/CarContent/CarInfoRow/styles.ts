import styled, { css } from 'styled-components/native';

import { Text } from '../../../atoms';
import { IPHONE_8_HEIGHT } from '../../../../constants';

type TitleProps = {
  color: string;
};

export const Container = styled.View`
  ${() => css`
    margin-top: 36px;

    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const SubTitle = styled(Text).attrs({
  fontFamily: 'archivo.medium',
  fontSize: 'xs',
  color: 'gray.300',
})`
  ${() => css`
    margin-bottom: 4px;
    text-transform: uppercase;
  `}
`;

export const Title = styled(Text).attrs({
  fontFamily: 'archivo.medium',
  fontSize: IPHONE_8_HEIGHT ? 'lg' : 'xl',
})<TitleProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};
  `}
`;
