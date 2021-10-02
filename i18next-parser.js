module.exports = {
  createOldCatalogs: true,
  indentation: 2,
  lexers: {
    js: ["JsxLexer"],
    ts: ["JsxLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],

    default: ["JsxLexer"],
  },
  locales: ["en", "my", "my_zg", "zh"],
  output: "src/locales/$LOCALE/$NAMESPACE.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  verbose: true,
};
