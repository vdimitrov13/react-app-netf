import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import * as ROUTES from '../constants/routes';

export default function Signup(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //TODO: abstract validation logic
    const isInvalid = password === '' || emailAddress === '' || firstName === '';

    const handleSignUp = (event) =>{
        event.preventDefault();
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                }).then(() =>{
                    history.push(ROUTES.BROWSE);
                })
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                        
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
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
                            Sign Up
                        </Form.Submit>
                    </Form.Base>
                    
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in here.</Form.Link>
                    </Form.Text>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}