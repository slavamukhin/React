import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('Rendering-Elements')
    );
}

setInterval(tick, 1000);

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tickTack(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tickTack() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world! The data flows down</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function App2() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

function tick2() {
    ReactDOM.render(
        <App2 />,
        document.getElementById('State-page')
    );
}

tick2();


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

function App3() {
    return (
        <div>
            <Toggle />
            <LoggingButton />
        </div>
    )
}

function HandlingEvents() {
    ReactDOM.render(
        <App3 />,
        document.getElementById('HandlingEvents')
    );
}

HandlingEvents()


function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGretting(props) {
    return <h1>Please sing up.</h1>
}

function ToogetherUserGuest() {
    return (
        <div>
            <UserGreeting />
            <GuestGretting />
        </div>
    )
}

function RenderUserGuest() {
    ReactDOM.render(
        <ToogetherUserGuest />,
        document.getElementById('UserGuest')
    )
}

RenderUserGuest();

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
          <h1>Welcom back!</h1>
        );
    }
    return <h1>Please sing up.</h1>
}

function RenderGreeting() {
    ReactDOM.render(
      <Greeting isLoggedIn={true}/>,
        document.getElementById('UserGuest-2')
    );
}

RenderGreeting();

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function RebderLoginControl() {
    ReactDOM.render(
        <LoginControl />,
        document.getElementById('LoginControl')
    )
}

RebderLoginControl();

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    );
}

function RenderMailbox() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    ReactDOM.render(
        <Mailbox  unreadMessages={messages} />,
        document.getElementById('RenderMailbox')
    )
}

RenderMailbox();

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

function RenderClassPage() {
    ReactDOM.render(
        <Page />,
        document.getElementById('RenderClassPage')
    );
}

RenderClassPage();