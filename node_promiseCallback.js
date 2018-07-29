function concat(a, b){
 return r = a + b;
}
function upper(a){
  return a.toUpperCase();
}
function decor(a){
 return '*' + a + '*';
}

function concatP(a, b){
  return new Promise(resolve => {
    concat(a,b, resolve);
  });
}

function upperP(a){
  return new Promise(resolve => {
    upper(a, resolve);
  });
}

function decorP(a){
  return new Promise(resolve => {
    decor(a, resolve);
  });
}

// Promise Binding
concatP("hello", "universe")
.then(upperP.bind(this))
.then(decorP.bind(this))
.then(console.log)
