import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    );
}

export default App;
