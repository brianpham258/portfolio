import dayjs from 'dayjs';

export const getFormattedDate = (date) => dayjs(date).format('DD MMM, YYYY');
export const getFormattedMonth = (date) => dayjs(date).format('MMM YYYY');