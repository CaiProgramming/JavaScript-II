// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2-3: Create a counter function ====
const counter = () => {
  let count = 0;
  const change = value => (count += value);
  return {
    increment: function() {
      change(1);
    },
    decrement: function() {
      change(-1);
    },
    value: function() {
      return count;
    }
  };
};

const letscount = counter();

letscount.increment();
letscount.decrement();
letscount.decrement();

console.log(letscount.value());
