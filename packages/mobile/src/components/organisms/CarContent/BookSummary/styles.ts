import styled, { css } from 'styled-components/native';

import { Text } from '../../../atoms';

export const Container = styled.View`
  ${() => css`
    margin-top: 40px;
  `}
`;

export const DatesContainer = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const CalendarIcon = styled.View`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    background: ${theme.colors.primary};

    align-items: center;
    justify-content: center;
  `}
`;

export const DateRange = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
  `}
`;

export const SubText = styled(Text).attrs({
  fontFamily: 'archivo.medium',
  fontSize: 'xs',
  color: 'gray.300',
})`
  ${() => css`
    margin-bottom: 8px;
  `}
`;

export const Values = styled(Text).attrs({
  fontFamily: 'inter.medium',
})``;

export const Summary = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;
