//Functional and Class Components
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}


//Functional and Class Components
class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}


//Rendering a Component ...?
function Welcome(props){ //props == {name: 'Sara}
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="PuryBab" />; //capital letter to represent a component
ReactDOM.render(
    element,
    document.getElementById('root')
);


//Composing Componenets
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

function App(){
    return (
        <div>
            <Welcome name="PuryBab" />
            <Welcome name="DeongiBab" />
            <Welcome name="PuryGuk" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


//Extracting Components (Before)
function Comment(props) { //{author: '{avatarUrl: 'string'}, text: 'string', date: 'date'}
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
  }


//Extracting Components (Extract 'Avatar')
/*
This is why we have given its prop
a more generic name: user rather than author.
*/

function Avatar(props){ //{user: '{avatarUrl: 'string', name 'string'}}
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    );
}

function Comment(props){ //{author: '{avatarUrl: 'string', name: 'string'}, text: 'string', date: 'date'}
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


//Extracting Components (Extract 'UserInfo')
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props){ //{author: '{avatarUrl: 'string', name: 'string'}, text: 'string', date: 'date'}
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

/*README.md
if a part of UI is used several times (Button, Panel, Avatar),
or is complex enough on its own (App, FeedStory, Comment)
-> extract => reusable

Props(Components) are Read-Only
*/
