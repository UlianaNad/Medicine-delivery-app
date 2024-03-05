import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledHeader>
      <WrapNavLink>
        {/* <StyledNavLink to="/">Home</StyledNavLink> */}
        <StyledNavLink to="shops">Shops</StyledNavLink>
        <StyledNavLink to="cart">Your cart</StyledNavLink>
      </WrapNavLink>
    </StyledHeader>
  );
};

export default NavBar;

export const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 20px 50px;
`;
export const StyledNavLink = styled(NavLink)`
  color: darkgray;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: black;
  }
`;

export const WrapNavLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
`;
