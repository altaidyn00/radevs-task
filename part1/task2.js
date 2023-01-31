//Queue Time Function
function queueTime(customers, registers) {
  if (customers.length === 0 || registers === 0) return 0;

  const queue = Array(registers).fill(0);

  customers.forEach((c) => {
    queue[queue.indexOf(Math.min(...queue))] += c;
  });

  return Math.max(...queue);
}

//Tests
const tests = [
  {
    customers: [26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14],
    registers: 1,
  },
  {
    customers: [
      34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47,
    ],
    registers: 4,
  },
  {
    customers: [19, 1, 27, 35, 16, 4, 45, 49, 41, 25],
    registers: 5,
  },
];

function checkTests(data) {
  for (let i = 0; i < data.length; i++) {
    const result = queueTime(data[i].customers, data[i].registers);
    console.log(`test ${i + 1} --->`, result);
  }
}

checkTests(tests);
