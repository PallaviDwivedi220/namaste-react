import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

//React Element
const Title = () => (<h1 id="heading" className="heading">Hello World from React using JSX!</h1>);
const num = 899999;

//React Functional Component
const HeadingComponent = () => (<div className="container">
        <Title />
        <h1>{num + 2 }</h1>
        <h1 className="heading">Hello World from React using JSX Functional Component!</h1>
    </div>);


root.render(<HeadingComponent/>);