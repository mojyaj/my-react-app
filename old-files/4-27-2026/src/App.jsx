import UserGreeting from "./UserGreeting.jsx"

function App() {

  return(
    <>
      <UserGreeting isLoggedIn={true} username="John Doe"/>
      <hr></hr>
      <UserGreeting isLoggedIn={false} username="*Show-case false value"/>
      <hr></hr>
      <UserGreeting />
    </>
  );
}

export default App
