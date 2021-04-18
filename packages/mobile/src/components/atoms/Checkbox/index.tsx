import React, { useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import * as S from './styles';

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
  label: string;
};

export const Checkbox = ({
  isChecked,
  onChange,
  label,
  ...rest
}: CheckboxProps) => {
  const checkedBoxOpacity = useSharedValue(0);

  useEffect(() => {
    checkedBoxOpacity.value = withTiming(isChecked ? 1 : 0, {
      duration: 250,
      easing: Easing.bezier(0.19, 1, 0.22, 1),
    });
  }, [isChecked, checkedBoxOpacity]);

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            checkedBoxOpacity.value,
            [0, 1],
            [0, 1],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const checkedBoxStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        checkedBoxOpacity.value,
        [0.5, 1],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onChange} {...rest}>
      <S.Container>
        <S.Box>
          <S.Background style={backgroundStyle} />

          <S.CheckedBox style={checkedBoxStyle} />
        </S.Box>

        <S.Label>{label}</S.Label>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
