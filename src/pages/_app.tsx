import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import type {AppProps} from 'next/app';

const MyApp = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp;
