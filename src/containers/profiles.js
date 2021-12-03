import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Header } from '../components';
import { Profiles } from '../components';
import { FirebaseContext } from '../context/firebase';
import { useContext } from 'react';

export function SelectProfileContainer({user, setProfile}) {
    const { firebase } = useContext(FirebaseContext);
    //const user = firebase.auth().currentUser || {};

    return (
    <>
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's Watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
                    <Profiles.Picture src={user.photoURL}/>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
    );
}