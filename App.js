import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 id="heading" className="head" tabIndex={5}>
    Namaste React 🚀 using JSX
  </h1>
);

// React Component (Functional)
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1>{heading}</h1>
      <h1 className="heading">Namaste React from Component 🚀 🤡</h1>
    </div>
  );
};

// both HeadingComponent and HeadingComponent2 are same only syntax is different.
const HeadingComponent2 = () => (
  <div id="container">
    <h1>Namaste React from Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // -> Rendering a React Element.

root.render(<HeadingComponent />); // -> Rendering a React Component.
