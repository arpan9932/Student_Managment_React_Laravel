import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './componends/sidebar.js';
import Create from './componends/Create.js';
import Dashbord from './componends/Dashbord.js';
import Table  from "./componends/Table.js";
import Edit  from "./componends/Edit.js";
import "./App.css";

function App() {
  return (
    <div className="home">
      <Router>
        <Sidebar/>
        <div className="maincontent" style={{width:'195vh'}}>
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand"></a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>
          <div className="container">
          <Routes>
          <Route path="/" element={<Dashbord/>} />
            <Route path="/add" element={<Create />} />
            <Route path="/view" element={<Table/>} />
            <Route path="/edit/:id" element={<Edit/>} />

          </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
