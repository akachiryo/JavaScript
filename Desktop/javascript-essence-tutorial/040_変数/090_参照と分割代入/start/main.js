const a = {
  prop: 0
}

let { prop } = a;
prop = 1;
console.log(prop);

function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}

fn(a);
