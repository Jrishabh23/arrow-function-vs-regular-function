# arrow-function-vs-regular-function

/**--------Arrow Function---------**/
Difference and limitation

1. Does not have its binding to 'this' and 'super' and should not be used as a method.
2. Can not be used as constructor
3. Can not be used yield
4. Arrow functions do not have a prototype property.
5. Arrow functions can have either a "concise body" or the usual "block body".
   In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.
6. An arrow function cannot contain a line break between its parameters and its arrow.
