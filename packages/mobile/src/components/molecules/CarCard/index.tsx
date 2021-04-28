import React, { useMemo } from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Droplet, Energy, Leaf } from '../../../assets/icons';
import { Car } from '../../../types';
import { formatToPtBrCurrency } from '../../../utils';
import { Text } from '../../atoms';
import * as S from './styles';

type CarCardProps = Pick<
  Car,
  'name' | 'brand' | 'valuePerDay' | 'image' | 'fuel'
> &
  Omit<RectButtonProps, 'style'>;

export const CarCard = ({
  name,
  brand,
  valuePerDay,
  image,
  fuel,
  ...rest
}: CarCardProps) => {
  const renderCarFuelIcon = useMemo(() => {
    if (fuel === 'gasoline') return <Droplet />;

    if (fuel === 'eletric') return <Energy />;

    if (fuel === 'hybrid') return <Leaf />;

    return null;
  }, [fuel]);

  const formattedValuePerDay = formatToPtBrCurrency(valuePerDay);

  return (
    <S.Container {...rest}>
      <S.Content>
        <Text
          fontFamily="archivo.medium"
          fontSize="xs"
          color="gray.300"
          style={{ textTransform: 'uppercase', marginBottom: 8 }}
        >
          {brand}
        </Text>
        <Text fontFamily="archivo.semiBold" style={{ marginBottom: 16 }}>
          {name}
        </Text>

        <S.Box>
          <S.ValuePerDayContainer>
            <Text
              fontFamily="archivo.medium"
              fontSize="xs"
              color="gray.300"
              style={{ textTransform: 'uppercase', marginBottom: 8 }}
            >
              AO DIA
            </Text>
            <Text fontFamily="archivo.semiBold" color="primary">
              {formattedValuePerDay}
            </Text>
          </S.ValuePerDayContainer>

          {renderCarFuelIcon}
        </S.Box>
      </S.Content>

      <S.Image source={{ uri: image }} resizeMode="contain" />
    </S.Container>
  );
};
