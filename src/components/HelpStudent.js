import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ChatApp from "./ChatApp";

export default function HelpStudent() {
    return (
        <>
        <Router>
        <h1 className="page-title">Help Student</h1>
        <br />
        <div className="component">
          <table className="table">
            <tbody className="tutor-list">
                <tr>
                    <td><Link to="/ChatApp">Struggling Student</Link></td>
                </tr>
            </tbody>
          </table>
        </div>
        <Switch>
            <Route path="/ChatApp"><ChatApp /></Route>
        </Switch>
        </Router>
        </>
    )
}

