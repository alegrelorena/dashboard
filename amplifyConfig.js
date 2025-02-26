import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    region: 'us-east-2',
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
    mandatorySignIn: true, 
  },
};

Amplify.configure(amplifyConfig);
export default amplifyConfig;
