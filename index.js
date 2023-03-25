const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(capitalizeEveryWord);
  return newTutorials;
}

function capitalizeEveryWord(string) {
  const stringArray = string.split(` `);
  const newStringArray = stringArray.map(word => (word[0].toUpperCase() + word.slice(1)));
  return newStringArray.join(` `);
}