import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ChatApp from "./ChatApp";

export default function GetHelp() {
    return (
        <>
        <Router>
        <h1 className="page-title">Get Help</h1>
        <br />
        <div className="component">
          <table className="table">
            <tbody className="tutor-list">
                <tr>
                    <td><Link to="/ChatApp">Tutor Name</Link></td>
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

