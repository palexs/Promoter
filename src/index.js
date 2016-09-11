import React, {
  Component,
} from 'react';
import { App } from './container';
import { Provider } from 'react-redux';
import configureStore from './common/redux/store/configureStore';

const store = configureStore();

class Promoter extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Promoter;
