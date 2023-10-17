const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = React.createElement(
    'h1', 
    {className: 'heading', id: 'xyz'}, 
    'Hello World from React!');

console.log(heading);

//root.render(heading);

/* 
Desired DOM structure
<div id="parent2">
    <div id="child1">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> */

const parent = React.createElement('div', {id: 'parent'},[
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {}, 'I am the h1 in child1'),
        React.createElement('h2', {}, 'I am h2 in child1')
    ])], 
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {id: 'h1'}, 'I am the h1 in child2'),
        React.createElement('h2', {id: 'h2'}, 'I am the h2 in child2')
    ]));

root.render(parent);

