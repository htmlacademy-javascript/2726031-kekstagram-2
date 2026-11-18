const checkStrLength = (str, length) => str.length <= length;

const checkPalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  const reversedStr = [...normalizedStr].reverse().join('');

  return normalizedStr === reversedStr;
};

const extractPositiveInteger = (value) => {
  const str = String(value);
  let result = '';

  for (const char of str) {
    if (Number.isFinite(Number(char)) && char.trim() !== '') {
      result += char;
    }
  }

  return result ? Number(result) : NaN;
};
