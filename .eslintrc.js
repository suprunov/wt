module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    // 'airbnb-base',
    "eslint:recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: [1, "tab"], // Величина отступа 1 TAB
    "linebreak-style": ["error", "windows"], // правильный перевод строки для Windows 'CRLF', для unix 'LF'
    "no-console": "off", // разрешить консоль
    "no-unused-vars": [0], // отключить проверку неиспользуемых переменных
    "space-before-blocks": 1, // отступ перед блоками
    "keyword-spacing": ["warn", { after: true }], // отступ после ключевых слов
    "space-infix-ops": "warn", // пробелы между знаком равно
    "key-spacing": ["warn", { afterColon: true }] //
  }
};

/*
WebStorm:
  Settings->Languages->JS->Code Quality Tools->ESLint
    Set ESLint Package `./node_modules/eslint`
  Settings->Tools->File Watchers->Add
    Set Name: `ESLint`
    Set `node_modules\.bin\eslint`
    Set `--fix .`
    Set Working directory `.`
VSCode:

*/
