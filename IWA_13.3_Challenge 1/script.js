let state = 'idle';
let user = null;
let calculated = '1';

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === 'string' && !isNaN(calculated);
  const calculatedAsNumber = isString ? parseFloat(calculated) : Number(calculated);
  return calculatedAsNumber === 2;
};

const calcUser = () => {
  if (logCalc()) {
    user = 'John';
    state = 'requesting';
  }
};

const checkUser = () => {
  if (user && state === 'requesting') {
    console.log(`User: ${user} (${calculated})`);
    user = null; // Resetting the user to null after logging the message
  }
};

// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
