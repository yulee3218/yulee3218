import React from 'react';
import styled, {css} from 'styled-components';
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = (props, context) => {
  return (
    <Container>
      <NavBarLogo>
        <FontAwesomeIcon icon={faCat} />
        <LogoTitle as="a" href="/">Shopping</LogoTitle>
      </NavBarLogo>
      <NavBarMenu>
        <List as="a" href="/">Home</List>
        <List as="a" href="/product">Product</List>
        <List as="a" href="/cart">Cart</List>
      </NavBarMenu>
      <NavBarIcon>
        <List as="a" href="/"><FontAwesomeIcon icon={faTwitter} /></List>
        <List as="a" href="/"><FontAwesomeIcon icon={faInstagramSquare} /></List>
      </NavBarIcon>
    </Container>
  );
};

export default Navigation;

const aStyle = css` // 스타일 지정
  text-decoration: none;
  color: white; 
`
const space = css`
  padding: 8px 12px;
`

const Container = styled.div `
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  ${space} // 스타일 지정한거 사용
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const NavBarLogo = styled.div`
  font-size: 24px;
  color: white;
`
const LogoTitle = styled.div`
  ${aStyle}
  margin-left: 2px;
`
const List = styled.li`
  ${aStyle}
  ${space}
`
const NavBarMenu = styled.ul`
  display: flex;
  padding-left: 0;
  a {
    &:hover {
      background-color: #d49466;
      border-radius: 4px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
   ${List} {
      width: 100%;
      text-align: center;
    }
  }
`

const NavBarIcon = styled.div`
  ${aStyle}
  ${space}
  padding-left: 0;
  @media screen and (max-width: 768px) {
      text-align: center;
      width: 100%;
  }
`
