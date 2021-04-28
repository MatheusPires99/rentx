/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { View } from 'react-native';

import { differenceInDays } from 'date-fns';
import { useTheme } from 'styled-components';

import { Calendar, ChevronRight } from '../../../../assets/icons';
import { useCalendar } from '../../../../hooks';
import { formatDate, formatToPtBrCurrency } from '../../../../utils';
import * as S from './styles';

type BookSummaryProps = {
  valuePerDay: number;
};

export const BookSummary = ({ valuePerDay }: BookSummaryProps) => {
  const theme = useTheme();
  const { startDate, endDate } = useCalendar();

  const formattedStartDate = formatDate(startDate!);
  const formattedEndDate = formatDate(endDate!);

  const formattedValuePerDay = formatToPtBrCurrency(valuePerDay);
  const amountOfDays = differenceInDays(endDate!, startDate!) + 1;
  const totalFormatted = formatToPtBrCurrency(valuePerDay * amountOfDays);

  return (
    <S.Container>
      <S.DatesContainer>
        <S.CalendarIcon>
          <Calendar color={theme.colors.white} />
        </S.CalendarIcon>

        <S.DateRange>
          <View>
            <S.SubText>DE</S.SubText>
            <S.Text>{formattedStartDate}</S.Text>
          </View>

          <View style={{ marginHorizontal: 20 }}>
            <ChevronRight />
          </View>

          <View>
            <S.SubText>DE</S.SubText>
            <S.Text>{formattedEndDate}</S.Text>
          </View>
        </S.DateRange>
      </S.DatesContainer>

      <S.Summary>
        <View>
          <S.SubText>TOTAL</S.SubText>
          <S.Text>
            {`${formattedValuePerDay} x${amountOfDays} ${
              amountOfDays === 1 ? 'diária' : 'diárias'
            }`}{' '}
          </S.Text>
        </View>

        <S.Total>{totalFormatted}</S.Total>
      </S.Summary>
    </S.Container>
  );
};
