//Bigger number function
function nextBiggerNumber(num) {
  const getSortedDigits = (number) =>
    number.toString().split("").sort().reverse().join("");
  const largestNum = getSortedDigits(num);

  for (let i = num + 1; i <= parseInt(largestNum); i++) {
    if (largestNum === getSortedDigits(i)) return i;
  }
  return -1;
}

//Tests
const tests = [23, 624, 2018, 9, 111, 531];

function checkTests(data) {
  for (let i = 0; i < data.length; i++) {
    const result = nextBiggerNumber(data[i]);
    console.log(`test ${i} --->`, result);
  }
}

checkTests(tests);

//Note: In this task, it was asked to find the NEXT larger number which is 2081,
//however, in the document for the third test case, the result is 8210.
