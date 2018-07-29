//the Ticking Clock Example from one of the Previous Section
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


//Encapsulating How the Clock Looks (WRONG!)
function Clock(props){
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);


//Converting a Function to a Class
/*README.md
1. Create an ES6 class, with the same name, that extends
React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.
*/
class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
);

//Adding Local State to a Class
//Step 1: Replace this.props.date with this.state.date in the render() method.
class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
);

//Step 2: Add a class constructor that assigns the initial this.state.
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
);

//Step 3: Remove the date prop from the <Clock /> element.
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


//Adding Lifecycle Method to a Class ...????
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()});
    }
    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


//Using State Correctly
//Do Not Modify State Directly
this.state.comment = 'Hello'; //wrong (this.state in constructor ONLY)
this.setState({comment: 'Hello'}); //correct


//State Updates May Be Asynchronous
this.setState({counter: this.state.counter + this.props.increment}); //wrong
this.setState((prevState, props) => {
    counter: prevState.counter + props.increment
    }
); //correct


//State Updates are Merged ...?
