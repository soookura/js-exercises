export const lineBreakChange = (str: string): string => {
  if (str.includes("\r\n")) {
    return str.replace("\r\n", "\n");
  } else if (str.includes("\n")) {
    return str.replace("\n", "\r\n");
  } else return str;
};
