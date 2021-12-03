import React from 'react';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { OptForm } from '../components'
import { Feature } from '../components';

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address"/>
                        <OptForm.Button>Try Now</OptForm.Button>
                        <OptForm.Break></OptForm.Break>
                        <OptForm.Text>Ready to Watch? Enter your email to start watching or renew your subscription.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
      );
}