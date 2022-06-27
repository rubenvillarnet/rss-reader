export const showDate = (date: string): string => {
  const today = new Date(date).toLocaleDateString("es-ES");
  const formatedDate = new Date(date).toLocaleDateString("es-ES");
  return formatedDate === today ? "Today" : formatedDate;
};
