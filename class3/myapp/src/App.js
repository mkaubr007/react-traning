import Customer from "./components/Customer";
import Employee from "./components/Employee";
import Hello from "./components/Hello";
import Person from "./components/Person";
import ProductList from "./components/ProductList";
import Students from "./components/Student";
import User from "./components/User";
import World from "./components/World";


function App() {
  return (
    <div className="container">
      <header className="App-header">
      {/* <Person name = 'Mark'/>
       
       <Employee id = '101' name = 'Maark' email = 'm@gmail.com' />
       <Employee id = '102' name = 'Jone' email = 'j@gmail.com' />
       <Employee id = '103' name = 'Smith' email = 's@gmail.com' />

       <Customer data = {{id : '101', name: 'Mark', email: 'm@gmail.com'}} />
       <Customer data = {{id : '102', name: 'Jone', email: 'j@gmail.com'}} />
       <Customer data = {{id : '103', name: 'Smith', email: 's@gmail.com'}} /> */}

       {/* <ProductList /> */}

       {/* <User name = 'Jone' /> */}

       {/* <Students id = '121' name = 'Jone' /> */}

       {/* <Hello /> */}

       <World />
      </header>
    </div>
  );
}

export default App;
