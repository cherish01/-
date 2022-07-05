import './App.css';


function Contacts() {
  return <div className="Contacts" ><App1/></div>;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function App1() {
  return (
    
    <div>
      <h1>12345</h1>
       hello word 你好！
    </div>

  );
}



export default App;
