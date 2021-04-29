import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default class MyRouter extends Component{
    render() {
        return (
            <div>
                <Router>
                    <Link to='/'>home</Link>
                    <Link to='/detail'>detail</Link>

                    <Switch>
                        <Route exact path='/'
                               children={() => {
                                   return (
                                       <div>children</div>
                                   )
                               }}
                               render={() => {
                                   return (
                                       <div>render</div>
                                   )
                               }}
                               component={Home} />
                        <Route path='/detail' component={Detail} />
                        <Route component={NotFound}/>
                    </Switch>

                </Router>
            </div>
        )
    }

}

class Home extends Component{
    render() {
        return (
            <div>Home</div>
        )
    }
}

class Detail extends Component{
    render() {
        return (
            <div>Detail</div>
        )
    }
}

class NotFound extends Component{
    render() {
        return (
            <div>404</div>
        )
    }
}
