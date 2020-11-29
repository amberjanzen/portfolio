import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 10px 100px;
  flex-flow: row nowrap;
  li {
    padding: 0px 10px;
   
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:  #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 20px;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    z-index: 998;
    transition: transform 0.3s ease-in-out;
    .rnav li{
      color: #b08237;
  
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li>
                <Link to = "/">Home</Link>

              </li>
              <li className ="rnav">
              <Link to = "/Portfolio">Portfolio</Link>
                {/* <a href="/#research" className="page-scroll">
                  Research
                </a> */}
              </li>

    </Ul>
  )
}

export default RightNav