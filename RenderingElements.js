//Rendering an Element into the DOM
const element = <h1>Hello, world</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);


//Updating the Rendered Element
function tick(){
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);


/*
In our experience, thinking about how the UI should
look at any given moment rather than how to change
it over time eliminates a whole class of bugs.
...?
*/