import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../../hooks';
import { Car } from '../../../types';
import { Divider, Text } from '../../atoms';
import { ProfileImage } from '../../molecules';
import { CarsList } from '../CarsList';
import { CarListHeader } from './CarListHeader';
import { UserData } from './UserData';
import * as S from './styles';

type ProfileContentProps = {
  isEditingProfile: boolean;
  cars: Car[] | undefined;
};

export const ProfileContent = ({
  isEditingProfile,
  cars,
}: ProfileContentProps) => {
  const { user } = useAuth();

  return (
    <S.Container>
      <ProfileImage />

      <Text fontFamily="archivo.semiBold" fontSize="xl">
        {user.name}
      </Text>

      <View style={{ flex: 1 }}>
        {isEditingProfile ? (
          <UserData />
        ) : (
          <>
            <Divider marginVertical={24} />

            <CarsList cars={cars} listHeaderComponent={<CarListHeader />} />
          </>
        )}
      </View>
    </S.Container>
  );
};
