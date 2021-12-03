import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faq.json';

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email Address"/>
                <OptForm.Button>Try Now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Ready to Watch? Enter your email to start watching or renew your subscription.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}