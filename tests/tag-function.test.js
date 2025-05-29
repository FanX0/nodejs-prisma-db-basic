const tagFunction = (array, ...args) => {
  console.info(array);
  console.info(args);
};

test("tag function", () => {
  const name = "Farid";
  const age = 22;

  tagFunction`Hello ${name}!, how are you?`;
  tagFunction`Bye ${name}!, see you later!`;

  //   untuk sql
  tagFunction`SELECT * FROM users WHERE name = ${name} AND age= ${age}`;
});
