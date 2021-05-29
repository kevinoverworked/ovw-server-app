import React from 'react';
import { getUser, removeUserSession } from '../Utils/Common';
import { useHistory } from "react-router-dom";
 
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
      Welcome {user.name}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;