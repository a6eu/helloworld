import '../styles/globals.css';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import  store from '../slices/index.js'


const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default App;
