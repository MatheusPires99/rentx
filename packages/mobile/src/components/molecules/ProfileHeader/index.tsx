import React from 'react';
import { Alert, View } from 'react-native';

import { useTheme } from 'styled-components';

import { Pencil, Power } from '../../../assets/icons';
import { useAuth } from '../../../hooks';
import { ArrowButton, Header, Text } from '../../atoms';
import * as S from './styles';

type ProfileHeaderProps = {
  title: string;
  isEditingProfile: boolean;
  onToggle: () => void;
};

export const ProfileHeader = ({
  title,
  isEditingProfile,
  onToggle,
}: ProfileHeaderProps) => {
  const theme = useTheme();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert('Sair', 'Deseja realmente sair do app?', [
      {
        text: 'Sim',
        onPress: () => signOut(),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <Header height={200} style={{ justifyContent: 'flex-start' }}>
      {isEditingProfile ? (
        <ArrowButton
          direction="left"
          color={theme.colors['gray.300']}
          onPress={onToggle}
        />
      ) : (
        <S.Button onPress={onToggle}>
          <Pencil color={theme.colors['gray.300']} />
        </S.Button>
      )}

      <Text fontFamily="archivo.semiBold" fontSize="xl" color="white">
        {title}
      </Text>

      {isEditingProfile ? (
        <View style={{ width: 48, height: 48 }} />
      ) : (
        <S.Button onPress={handleSignOut}>
          <Power color={theme.colors['gray.300']} />
        </S.Button>
      )}
    </Header>
  );
};
