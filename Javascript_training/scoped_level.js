// Nested function

function one() {
  const username = "Swaraj";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "swaraj";
  if (username === "swaraj") {
    const website = "youtube";
    // console.log(username + website);
  }
  //console.log(website);
}
// console.log(username);
addone(5);

function addone(num) {
  return num + 1;
}

addtwo(8);
const addtwo = function (num) {
  return num + 2;
};
