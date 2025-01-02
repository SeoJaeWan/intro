const WordSplit = (letter: string) => {
  return letter.split('').map((char) => (char === ' ' ? '\u00A0' : char));
};

export default WordSplit;
