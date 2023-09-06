export function createId(inputString: string) {
  const words = inputString.split('-');
  const capitalizedWords = words.map((word) => word[0].toUpperCase());

  return capitalizedWords.join('');
}
