import '../styles/globals.css'
import Layout from '../components/Layout'
import  configureStore from '../slices/index.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const { store, persistor } = configureStore();

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </PersistGate>
  </Provider>
);

export default App;
