import { FlatList } from 'react-native';

import styled, { css } from 'styled-components/native';

import { Car } from '../../../../types';

export const CarsListContainer = styled(FlatList as new () => FlatList<Car>)`
  ${() => css`
    padding: 16px;
  `}
`;
