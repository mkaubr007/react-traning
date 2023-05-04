import Parent from "./components/passing data from child to parent using props/Parent";
import User from "./components/events/User";
import Employees from "./components/list/Employees";

function App() {
  return (
    <div className="conatiner">
      <header className="App-header">
     <Employees />
      </header>
    </div>
  );
}

export default App;
