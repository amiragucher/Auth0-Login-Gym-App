import "./App.css";
import LoginButton from "../LoginButton/LoginButton.js";
import LogOutButton from "../LogOutButton/LogOutButton.js";
import UserProfile from "../UserProfile/UserProfile.js"
import Title from "../Title/Title.js"

function App() {
  return (
    <div>
      <LoginButton />
      <LogOutButton />
      <UserProfile />
      <Title />
    </div>
  );
}

export default App;
