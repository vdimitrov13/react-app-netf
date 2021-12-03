import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signin(){
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  
  const handleSignIn = (event) => {
    //TODO: this should be abstracted
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(()=> {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })
  }
  
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
            
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input 
              placeholder="Email Address"
              value={emailAddress}
              onChange={({target}) => setEmailAddress(target.value)}
            />
            
            <Form.Input
              type="Password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
                Sign In
            </Form.Submit>
          </Form.Base>
          
          <Form.Text>
              New to Netflix? <Form.Link to="/signup">You can sign up here.</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      
      <FooterContainer/>
    </>
    );
}