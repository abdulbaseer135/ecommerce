import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
     <Routes>
      
     <Route element={<PrivateComponent />}>
      <Route exact path="/"element={<ProductList />} />
      <Route exact path="/add"element={<AddProduct />} />
      <Route exact path="/logout"element={<h1>Logout Component</h1>} />
      <Route exact path="/update/:id" element={<UpdateProduct />} />
            {//there is id issue in the update component
      }
      <Route exact path="/profile"element={<Profile />} />
      </Route>

      <Route exact path="/signup"element={ <SignUp />} />
      <Route exact path="/login"element={ <Login />} />
     
      </Routes>
     </Router>
    
     <Footer />
    </div>
  );
}

export default App;



//if there is any error then goto product list and comment out map function