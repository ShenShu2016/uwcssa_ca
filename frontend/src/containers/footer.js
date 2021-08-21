import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="/members">Our Team</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>News</Footer.Title>
            <Footer.Link href="/marketing">CSSA News</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Get In Touch</Footer.Title>
            <Footer.Link href="#">Email: uwincssa.it@gmail.com</Footer.Link>
            <Footer.Link href="#">Follow UWCSSA</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Jobs</Footer.Title>
            <Footer.Link href="#">
              Come work with us! We are always looking for great talent to join
              our team.
            </Footer.Link>
            {/* <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link> */}
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
      <Footer.CopyContainer>
        <Footer.Copy> © UWCSSA 2021</Footer.Copy>
      </Footer.CopyContainer>
    </Footer>
  );
}
