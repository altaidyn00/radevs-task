//Sorting function
function sortString(str) {
  if (!str) return "";

  const words = str.split(" ");
  const sortedWords = words.sort((a, b) => a.match(/\d/) - b.match(/\d/));

  return sortedWords.join(" ");
}

//Tests
const tests = [
  "g5et ski3lls on6 use1 your2 to4 7top",
  "",
  "practic3 h4rder yo1u 2hould",
];

function checkTests(data) {
  for (let i = 0; i < data.length; i++) {
    const result = sortString(data[i]);
    console.log(`test ${i + 1} --->`, result);
  }
}

checkTests(tests);
