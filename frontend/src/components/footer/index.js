import React from 'react';
import { Container, Wrapper, Row, Column, Link, Title, CopyContainer, Copy } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Footer.CopyContainer = function CopyContainer({ children, ...restProps }) {
  return <CopyContainer {...restProps}>{children}</CopyContainer>;
};
Footer.Copy = function FooterCopy({ children, ...restProps }) {
  return <Copy {...restProps}>{children}</Copy>;
};
