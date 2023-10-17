const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = React.createElement(
    'h1', 
    {className: 'heading', id: 'xyz'}, 
    'Hello World from React!');

console.log(heading);

//root.render(heading);

/* 
1st dom structure 
<div id="parent1">
    <div id="child">
        <h1></h1>
    </div>
</div>

2nd dom struvture
<div id="parent2">
    <div id="child1">
        <h1></h1>
    </div>
    <div id="child2">
        <h1></h1>
    </div>
</div> */

const parent1 = React.createElement('div', {id: 'parent1'}, React.createElement('div', {id: 'child'}, 
    React.createElement('h1', {}, 'I am the h1')));

const parent = React.createElement('div', {id: 'parent2'}, React.createElement('div', {id: 'child'}, 
    [React.createElement('h1', {id: 'h1'}, 'I am the h1'), React.createElement('h2', {id: 'h2'}, 'I am the h2')]));

root.render(parent);

