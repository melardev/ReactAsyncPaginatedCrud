import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Header from "./components/shared/Header";
import {Notifications} from "./components/shared/Notifications";
import NotFound from "./components/pages/NotFound";
import TodoList from "./components/todos/TodoList";
import Footer from "./components/shared/Footer";
import {TodoDetails} from "./components/todos/TodoDetails";
import {TodoCreateOrEdit} from "./components/todos/TodoCreateOrEdit";
import About from "./components/pages/About";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div className='container'>
                        <Header/>
                        <Notifications/>
                        <Switch>
                            {/* Todo routes */}
                            <Redirect exact={true} from='/' to='/todos'/>
                            <Route path="/todos" exact component={TodoList}/>
                            <Route path="/todos/:id" exact component={TodoDetails}/>
                            <Route path="/todos" exact component={TodoList}/>
                            <Route path="/todos/:id/edit" exact component={TodoCreateOrEdit}/>
                            <Route path="/about" component={About}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
