import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import store from '../store';
import {Provider} from 'react-redux';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
