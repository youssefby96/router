import React from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";
import Login, { fakeAuth } from "./Login";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="li-nav">
            <Link to="/">Homes</Link>
          </li>
          <li className="li-nav">
            <Link to="/category">Category</Link>
          </li>
          <li className="li-nav">
            <Link to="/products">Products</Link>
          </li>
          <li className="li-nav">
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

/* PrivateRoute component definition */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

//Home component
const Home = props => (
  <div >
    <center>
    <h2 className="hhome">Home {console.log(props)}</h2>
    </center>
  </div>
);

//Admin component
const Admin = ({ match }) => {
  return (
    <div>
      {" "}
      <h2 className="hadwelc">Welcome admin </h2>
    </div>
  );
};




