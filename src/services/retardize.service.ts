export function retardize(normalText: string): string {
  return normalText
    .toLowerCase()
    .split(" ")
    .map((word) => {
      const wordChars = word.split("");
      const retardizedWord: string[] = [];

      wordChars.forEach((char, index) => {
        const nonLetter = /[^A-Za-z]/.test(char);

        if (nonLetter || index === 0) {
          retardizedWord.push(char);
          return;
        }

        if (index === 1) {
          retardizedWord.push(char.toUpperCase());
          return;
        }

        if (retardizedWord[index - 1]) {
          if (
            retardizedWord[index - 1] ===
            retardizedWord[index - 1].toUpperCase()
          ) {
            retardizedWord.push(char.toLowerCase());
            return;
          } else if (
            retardizedWord[index - 1] ===
            retardizedWord[index - 1].toLowerCase()
          ) {
            retardizedWord.push(char.toUpperCase());
            return;
          }
        }

        retardizedWord.push(char);
      });

      return retardizedWord.join("");
    })
    .join(" ");
}
