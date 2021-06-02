import React from 'react';
import { getUser, removeUserSession } from '../../Utils/Common';
import { useHistory } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import styles from "../../styles/dashboard.module.scss"
 
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
      <div className={` ${styles.container} ${styles['col-4']} `}>
        <section className={styles.card}>
          <div className={styles.content}>
              <div className={styles.title}>
                  <h2>Website Editor</h2>
                  <p className={styles.subTitle}></p>
              </div>
              <div className={styles.media}>
                  <figure>
                  </figure>
              </div>
              <div className={styles.copy}>
                Edit your website using a custom built editor.
              </div>
          </div>
          <div className={styles.footer}>
              <div className={styles.link}>  
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
        <section className={styles.card}>
          <div className={styles.content}>
              <div className={styles.title}>
                  <h2>Content Management</h2>
                  <p className={styles.subTitle}></p>
              </div>
              <div className={styles.media}>
                  <figure>
                  </figure>
              </div>
              <div className={styles.copy}>
                Manage the content of your website with our custom built Content Management System.
              </div>
          </div>
          <div className={styles.footer}>
              <div className={styles.link}>  
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