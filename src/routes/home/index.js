import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout/Layout';

function action() {
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
