export const replaceZeroToBlank = (text: string) => {
  const regex = /^[0]*$/;
  return text.replace(regex, '');
};
