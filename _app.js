import '../styles/globals.css';
import { Amplify } from 'aws-amplify';
import amplifyConfig from '../amplifyConfig';

Amplify.configure(amplifyConfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
