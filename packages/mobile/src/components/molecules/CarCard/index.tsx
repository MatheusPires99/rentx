import React, { useMemo } from 'react';
import { TouchableOpacityProps } from 'react-native';

import CarImage from '../../../assets/audi.png';
import { Droplet, Energy, Leaf } from '../../../assets/icons';
import { Car } from '../../../types';
import { formatToPtBrCurrency } from '../../../utils';
import * as S from './styles';

type CarCardProsp = Omit<Car, 'id'> & TouchableOpacityProps;

export const CarCard = ({
  name,
  brand,
  valuePerDay,
  fuel,
  image,
  ...rest
}: CarCardProsp) => {
  const renderCarFuelIcon = useMemo(() => {
    if (fuel === 'gasoline') return <Droplet />;

    if (fuel === 'eletric') return <Energy />;

    if (fuel === ' hybrid') return <Leaf />;

    return null;
  }, [fuel]);

  const formattedValuePerDay = formatToPtBrCurrency(valuePerDay);

  return (
    <S.Container {...rest}>
      <S.Content>
        <S.SubTitle>{brand}</S.SubTitle>
        <S.Name>{name}</S.Name>

        <S.Box>
          <S.ValuePerDayContainer>
            <S.SubTitle>AO DIA</S.SubTitle>
            <S.ValuePerDay>{formattedValuePerDay}</S.ValuePerDay>
          </S.ValuePerDayContainer>

          {renderCarFuelIcon}
        </S.Box>
      </S.Content>

      <S.Image source={CarImage} resizeMode="cover" />
    </S.Container>
  );
};
