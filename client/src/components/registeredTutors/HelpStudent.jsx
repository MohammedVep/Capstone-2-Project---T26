import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

const HelpStudent = () => {
  return (
    <>
        <BrowserRouter>
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
          <Routes>
              <Route path="/ChatApp" element={<ChatApp />}/>
          </Routes>
        </BrowserRouter>
        </>
  )
}

export default HelpStudent