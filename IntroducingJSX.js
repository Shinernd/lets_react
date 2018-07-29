//Embedding Expressions in JSX
const name = 'Pury Bab';
const element = <h1>Hello, {name}</h1>;

ReactDom.render(
    element, //<h1>Hello, {name}</h1>
    document.getElementById('root') //#root
)


//Embedding Expressions in JSX
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Pury',
    lastName: 'Bab'
};

const element = <h1>Hello, {formatName(user)}!</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);


//JSX is an Expression Too
function getGreeting(user){
    if (user){
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    else {
        return <h1>Hello, Stranger.</h1>;
    }
}


//Specifying Attributes with JSX
const element = <div tabIndex="0"></div>;


//Specifying Attributes with JSX
const element = <img src={ruser.avatarUrl}></img>;


//Specifying Children with JSX
const element = <img src={user.avatarUrl} />;


//Specifying Children with JSX
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);


//JSX Prevents Injection Attacks
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;


//JSX Represents Objects
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);
//identical
const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);


//JSX Represents Objects ...?
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};