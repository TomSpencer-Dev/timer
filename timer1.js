const args = process.argv;

let argsArr = [];
for (const element in args) {
  if (element > 1 && parseInt(args[element]) == args[element]) {
    argsArr.push(parseInt(args[element]) * 1000);
  }
}

const alarmClock = function(argsArr) {
  let arr = argsArr.sort((a, b) => a - b);
  let delay = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && typeof arr[i] === "number") {
      delay = arr[i];
      setTimeout(() => {
        process.stdout.write("\r" + (arr[i] / 1000).toString() + "   ");
      }, delay);
    }
  }
  setTimeout(() => {
    console.log("\n");
  }, delay);

};

alarmClock(argsArr);





