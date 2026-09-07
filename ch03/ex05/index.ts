export const lfToCrlf = (str: string): string => {
  if (str.includes("\n")) {
    return str.replace("\n", "\r\n");
  } else return str;
};

export const CrlfToLf = (str: string): string => {
  if (str.includes("\r\n")) {
    return str.replace("\r\n", "\n");
  } else return str;
};
