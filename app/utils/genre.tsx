import { useGenreStore } from '../stores/GenreStore';

export const convertTypeWithGenre = (arr: string | any[], type: string, isSearch: any) => {
  const { genres } = useGenreStore();

  if (type === 'normal' || isSearch) {
    if (arr.length > 1) return `${genres[arr[0]].name}, ${genres[arr[1]].name}`;
    return arr.length !== 0 ? `${genres[arr[0]].name}` : '';
  }

  return arr.length !== 0 && type !== genres[arr[0]].name
    ? `${type}, ${genres[arr[0]].name}`
    : type;
};

export const convertToGenres = (genres: string | any[], messageNotFound = 'Uninformed') =>
  genres.length > 0
    ? genres.length > 1
      ? `${genres[0].name}, ${genres[1].name}`
      : genres[0].name
    : messageNotFound;
