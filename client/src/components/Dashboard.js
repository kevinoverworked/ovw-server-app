import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
 
function Dashboard(props) {
  const user = getUser();
  const history = useHistory();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history.push('/login');
  }
 
  return (
    <div>
      <h1>Welcome {user.first_name}!</h1>
      <input type="button" onClick={handleLogout} value="Logout" />
      <div className="dashboard_container col-4">
        <section className="card">
          <div className="content">
              <div className="title">
                  <h2>Website Editor</h2>
                  <p className="subtitle"></p>
              </div>
              <div className="media">
                  <figure>
                  </figure>
              </div>
              <div className="copy">
                Edit your website using a custom built editor.
              </div>
          </div>
          <div className="footer">
              <div className="link">  
              <Link to="/editor">
                Edit Website
              </Link>
              </div>
              <div className="icons"></div>
          </div>
          <div role="navigation"></div>
          <div className="deck">
          </div>
        </section>
        <section className="card">
          <div className="content">
              <div className="title">
                  <h2>Content Management</h2>
                  <p className="subtitle"></p>
              </div>
              <div className="media">
                  <figure>
                  </figure>
              </div>
              <div className="copy">
                Manage the content of your website with our custom built Content Management System.
              </div>
          </div>
          <div className="footer">
              <div className="link">  
              <Link to="/content-management">
                Manage Content
              </Link>
              </div>
              <div className="icons"></div>
          </div>
          <div role="navigation"></div>
          <div className="deck">
          </div>
        </section>
      </div>
    </div>
  );
}
 
export default withRouter(Dashboard);