import '../styles/globals.css'
import Layout from '../components/Layout'
import  configureStore from '../slices/index.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AlertProvider } from "@/components/AlertContext";
import '../styles/Alert.css';
import useJivoWidget from "@/customHooks/useJivoWidget";


const { store, persistor } = configureStore();

const App = ({ Component, pageProps }) => {
    useJivoWidget();
    return (
        <AlertProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Component {...pageProps}/>
                    </Layout>
                </PersistGate>
            </Provider>
        </AlertProvider>
    );
}

export default App;
