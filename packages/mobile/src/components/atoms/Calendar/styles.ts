import { FlatList } from 'react-native';

import styled, { css } from 'styled-components/native';

type DayProps = {
  selected?: boolean;
  inRange?: boolean;
};

type DayTextProps = {
  selected?: boolean;
  disabled?: boolean;
  inRange?: boolean;
};

export const Container = styled.View`
  ${() => css`
    padding: 24px;
  `}
`;

export const Header = styled.View`
  ${() => css`
    margin-bottom: 24px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const CurrentDate = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: 20px;
    color: ${theme.colors.gray['600']};
  `}
`;

export const WeekDays = styled.View`
  ${({ theme }) => css`
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.gray['100']};

    padding-bottom: 16px;
    margin-bottom: 24px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const WeekDaysText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.archivo.regular};
    font-size: 10px;
    color: ${theme.colors.gray['300']};
    letter-spacing: 1px;
  `}
`;

export const MonthContainer = styled(
  FlatList as new () => FlatList<Date>,
)<DayTextProps>``;

export const DayButton = styled.TouchableOpacity<DayProps>`
  ${({ theme, selected, inRange }) => css`
    width: 48px;
    height: 48px;

    flex: 1;
    align-items: center;
    justify-content: center;

    ${selected &&
    css`
      background: ${theme.colors.primary};
    `}

    ${inRange &&
    css`
      background: ${theme.colors.opacityPrimary};
    `}
  `}
`;

export const DayText = styled.Text<DayTextProps>`
  ${({ theme, selected, disabled, inRange }) => css`
    font-family: ${theme.fonts.inter.regular};
    font-size: 15px;
    color: ${theme.colors.gray['600']};

    ${disabled &&
    css`
      color: ${theme.colors.gray['300']};
    `}

    ${selected &&
    css`
      font-family: ${theme.fonts.archivo.semiBold};
      color: ${theme.colors.white};
    `}

    ${inRange &&
    css`
      font-family: ${theme.fonts.archivo.semiBold};
      color: ${theme.colors.primary};
    `}
  `}
`;
