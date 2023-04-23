const { createApp } = require("./app");

const app = createApp();
const PORT = process.env.PORT;

app.listen(PORT || 8000, () => {
  console.log(`server is runnig on port ${PORT || 8000}`);
});
