import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Sparkle With Us. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
