import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import * as serviceWorker from './serviceWorker'
import configureClient from './configureClient'
import './index.css'

/* query 사용법 in React */
import gql from 'graphql-tag';
const query = gql`
query {
  ping
}
`
const client = configureClient();
client.query({query}).then(console.log);

const Root: React.FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
