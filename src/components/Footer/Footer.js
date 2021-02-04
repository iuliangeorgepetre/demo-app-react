import React from "react";
import {
  FooterSubscription,
  FooterContainer,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
} from "./Footer.elements";

import { Button } from "../../globalStyles";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our newsletter to receive the latest updates on our website.
        </FooterSubHeading>
        <FooterSubText>Unsubscribe anytime.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig> Subscribe</Button>
        </Form>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
