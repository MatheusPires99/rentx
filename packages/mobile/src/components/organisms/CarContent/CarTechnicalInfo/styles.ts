import { FlatList } from 'react-native';

import styled, { css } from 'styled-components/native';

import { IconType } from '../../../../types';

export const Container = styled(
  FlatList as new () => FlatList<{ data: string; icon: IconType }>,
)`
  ${() => css`
    margin: -4px;
    margin-top: 16px;
  `}
`;

export const Box = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors['gray.50']};
    height: 92px;
    margin: 4px;

    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${theme.colors['gray.100']};

    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`;
