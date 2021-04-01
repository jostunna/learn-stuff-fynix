const app = require("./server");

const port = process.env.PORT || 4000;

app.listen(port);

console.log(`server ready at http://localhost:${port}/graphql`);
