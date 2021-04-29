import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import { ProfileHeader } from '../../molecules';
import { ProfileContent } from '../../organisms';

export const ProfileTemplate = () => {
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

      <ProfileContent />
    </View>
  );
};
