import React from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './components/navbar/navbar';
import products from './data/products';
import categories from './data/categories';
import permissions from './data/permissions';
import { configureStore, history } from './redux/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MiniAlert from './components/alert/mini-alert';

class App extends React.Component {

  constructor(props) {
    super(props);

    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('permissions', JSON.stringify(permissions));
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <ConnectedRouter history={history}>
          <Navbar></Navbar>
          <Routes></Routes>
        </ConnectedRouter>

        <MiniAlert />
      </Provider>
    );
  }
}

export default App;
