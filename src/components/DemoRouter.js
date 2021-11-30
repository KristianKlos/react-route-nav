import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Crud from './CrudDemo';


const DemoRouter = () => {
    return (
        <div className="container">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/home" component={Home}  />
                    <Route path="/crud" component={Crud} />
                    <Route path="/person" component={Person}  />
                    <Route path="/about" component={About}  />

                    <Route component={PageNotFound} />

                </Switch>
            </Router>
        </div>
    )
}

const Header = () => {
    return(
        <ul className="nav nav-pills nav-fill bg-dark text-white">
            <li className="nav-item">
                <Link className="nav-link" to="/">Welcome</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/crud">CrudDemo</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/person">Person</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>
    )
};

const Welcome = () => {
    return (<b>Welcome</b>)
}

const Home = () => {
    return (<b>Home</b>)
}

const About = () => {
    return (<b>About us</b>)
}

const Person = () => {
    return (<b>Person</b>)
}

const PageNotFound = () => {
    return (<b>404: Page not found</b>)
}

export default DemoRouter;