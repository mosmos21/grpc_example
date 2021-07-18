const withTM = require("next-transpile-modules")([
  "@todo-app/proto",
]);

module.exports = withTM({
  reactStrictMode: true
})
