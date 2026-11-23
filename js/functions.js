const checkStrLength = (str, length) => str.length <= length;

checkStrLength('проверяемая строка', 20);

const checkPalindrome = (str) => {
  const normalizedStr = str.toLowerCase().replace(/\s+/g, '');
  const reversedStr = [...normalizedStr].reverse().join('');

  return normalizedStr === reversedStr;
};

checkPalindrome('Лёша на полке клопа нашёл ');

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

extractPositiveInteger(2023);
