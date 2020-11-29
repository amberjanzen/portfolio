import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  z-index: 998;
  position: fixed;
  background-color:  #fff;;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .zz {
    padding: 25px 0 20px 10px;
   
    font-family: 'Lato', sans-serif;
  }
`

const Navbar = () => {
  return (
    <Nav>
      
      <div className="zz">
        Amber Janzen
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar