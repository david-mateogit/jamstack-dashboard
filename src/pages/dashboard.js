import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import PrivateRoute from '../components/private-route';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
  const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
    // eslint-disable-next-line
  }, []);

  const showModal = () => setVisibility(!isVisible);

  return (
    <Layout>
      <Profile />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal showDialog={isVisible} onCloseDialog={showModal} />
    </Layout>
  );
};

export default Dashboard;
