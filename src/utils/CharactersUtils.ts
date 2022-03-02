export const getIdFromUrl = (url: string, regex: RegExp): string =>
  url.split(regex)[1].split('/')[1]
