import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import Siderbar from './components/Sidebar';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Siderbar />
  </Fragment>
);

export default App;
