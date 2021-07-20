import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Label, Input, Form, Textarea } from '../Contact/ContactStyles';
import Button from '../../styles/GlobalComponents/Button';
import emailjs from 'emailjs-com';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_q7mgzib', 'template_nev001k', e.target, 'user_E9AtReBeYQcKTiY7iOkvV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


const Contact = () => (
    <Section id="contact">
        <SectionTitle>Contact</SectionTitle>
        <SectionText>Fill the contact form and <br />send me a message.</SectionText>
        <Form onSubmit={sendEmail}>
            <Label>Subject</Label><br/>
            <Input type="text" name="subject" />
            <Label>Name</Label><br/>
            <Input type="text" name="user_name" /><br/>
            <Label>Email</Label><br/>
            <Input type="email" name="user_email" /><br/>
            <Label>Message</Label><br/>
            <Textarea name="message" /><br/>
            <Button type="submit" value="Send" >Send</Button>
        </Form>
    </Section>
)

export default Contact