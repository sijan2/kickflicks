//words counter in the string
export const titleWordsCounter = (title: string): number => {
  return title.split(' ').length;
};

//characters counter in the string
export const titleCharactersCounter = (title: string): number => {
  return title.length;
};
