import React from 'react';
import { Link } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';

const Profile = () => {
  const { user, logoutUser, isLoggedIn } = useIdentityContext();

  const name = user && user.user_metadata && user.user_metadata.full_name;

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link to="/dashboard/secret" activeClassName="active">
            Secret Stuff
          </Link>
          <Link to="/dashboard/base" activeClassName="active">
            See Your Base
          </Link>
        </nav>
        <span>
          {' '}
          Logged in as {name}.
          <button type="button" onClick={() => logoutUser()}>
            log out
          </button>
        </span>
      </div>
    )
  );
};

export default Profile;
