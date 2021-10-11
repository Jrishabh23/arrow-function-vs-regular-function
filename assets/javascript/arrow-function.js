const sum = (a, b) => a + b;
console.log(sum(2, 3));

//** Arrow functions do not have a prototype property.
const properties = () => {};
console.log(properties.prototype); // undefined

//** Can not be used as constructor
const Foo = () => {};
//const foo = new Foo(); // TypeError: Foo is not a constructor
console.log(foo);
/**
 * * Arrow functions can have either a "concise body" or the usual "block body".
 * In a concise body, only an expression is specified, which becomes the implicit
 * return value.In a block body, you must use an explicit return statement.
 */

const func4 = (x) => x * x;
// concise body syntax, implied "return"
const Func = (x, y) => {
    return x + y;
};
// with block body, explicit "return" needed

//** An arrow function cannot contain a line break between its parameters and its arrow.
const func5 = (a, b, c)
  => 1;
// SyntaxError: expected expression, got '=>'
