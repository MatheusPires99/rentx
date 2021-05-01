import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import { Car } from '../../../types';
import { ProfileHeader } from '../../molecules';
import { ProfileContent } from '../../organisms';

type ProfileTemplateProps = {
  cars: Car[] | undefined;
};

export const ProfileTemplate = ({ cars }: ProfileTemplateProps) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleToggleEditProfile = useCallback(
    () => setIsEditingProfile(state => !state),
    [],
  );

  return (
    <View style={{ flex: 1 }}>
      <ProfileHeader
        title={isEditingProfile ? 'Editar Perfil' : 'Perfil'}
        isEditingProfile={isEditingProfile}
        onToggle={handleToggleEditProfile}
      />

      <ProfileContent isEditingProfile={isEditingProfile} cars={cars} />
    </View>
  );
};
