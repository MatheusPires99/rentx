import { useNavigation } from '@react-navigation/core';

export const useTabBar = () => {
  const navigation = useNavigation();

  const toggleTabBar = (toggle: boolean) => {
    navigation?.dangerouslyGetParent()?.setOptions({
      tabBarVisible: toggle,
    });
  };

  return {
    toggleTabBar,
  };
};
