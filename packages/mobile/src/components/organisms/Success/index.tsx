import React from 'react';
import { Dimensions, View } from 'react-native';

import { Done, Rentx } from '../../../assets/icons';
import { Button, Text } from '../../atoms';
import * as S from './styles';

type SuccessProps = {
  title: string;
  description: string;
  onOk: () => void;
};

const { width } = Dimensions.get('window');

export const Success = ({ title, description, onOk }: SuccessProps) => {
  return (
    <S.Container>
      {/* Height value to match svg icon */}
      <View style={{ height: '29%', opacity: 0.04 }}>
        <Rentx color="white" size={width} />
      </View>

      <S.DoneIconContainer>
        <Done />
      </S.DoneIconContainer>

      <Text fontFamily="archivo.semiBold" fontSize="2xl" color="white">
        {title}
      </Text>

      <S.Description>
        <Text color="gray.300" style={{ textAlign: 'center', lineHeight: 25 }}>
          {description}
        </Text>
      </S.Description>

      <Button onPress={onOk} variant="secondary" style={{ width: 80 }}>
        Ok
      </Button>
    </S.Container>
  );
};
