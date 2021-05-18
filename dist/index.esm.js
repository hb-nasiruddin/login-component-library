import { jsx } from 'react/jsx-runtime';

function App() {
  return /*#__PURE__*/jsx("div", {
    className: "App",
    children: /*#__PURE__*/jsx("header", {
      className: "App-header",
      children: /*#__PURE__*/jsx("p", {
        children: "Hello From Login Component Library"
      })
    })
  });
}

export { App as LoginComponent };
