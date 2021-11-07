const ha = {
  user: {
    url: "https://ww.namu.la/s/f6240787d1fe934702fb178ec37e8682113ff63683df754f994e2d857cd812b071c8677af6fe39dc9711b8e733b40b1a3d9d67c97c60a14f0863939d3f88c4b52c51fb1bb171436f359ba2c361f5ccec12b87d644ad009d7012438544fc22713823625a43b7812e4e28b76d0f596308c",
    name: "스폰지밥",
  },
};

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Co(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo user={props.author} />
      </div>
      <div className="Comment-text">{props.text}</div>
      {/* <div className="Comment-date">{formatDate(props.date)}</div> */}
    </div>
  );
}

function tick() {
  const ele = (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
    </div>
  );
}

setInterval(tick, 1000);

function with1(account, amount) {
  account.total -= amount;
}

function Form() {
  function handle(e) {
    e.preventDefault();
    alert("당신은 클릭했습니다");
  }
  return (
    <form onSubmit={handle}>
      <button type="submit">입력</button>
    </form>
  );
}

<button onClick={(e) => this.handleClick(id, e)}>Delete Row</button>;
<button onClick={this.handleClick.bind(this, id)}>Delete Row</button>;

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function UserGreeting(props) {
  return <h1>Welcome back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  LoginClick() {
    this.setState({ isLoggedIn: true });
  }

  LogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.LogoutClick} />;
    } else {
      button = <LoginButton onClick={this.LoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClicked = this.handleToggleClicked.bind(this);
  }

  handleToggleClicked() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClicked}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

function NumberList2(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

function Blog(props) {
  const sideBar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sideBar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to Learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element.",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

<form onSubmit={this.handleSubmit}>
  <label>
    Pick your favorite flavor:
    <select value={this.state.value} onChange={this.handleChange}>
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </label>
  <input type="submit" value="Submit" />
</form>;
