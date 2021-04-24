import React, { useMemo } from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Droplet, Energy, Leaf } from '../../../assets/icons';
import { Car } from '../../../types';
import { formatToPtBrCurrency } from '../../../utils';
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

      <S.Image source={{ uri: image }} resizeMode="contain" />
    </S.Container>
  );
};
