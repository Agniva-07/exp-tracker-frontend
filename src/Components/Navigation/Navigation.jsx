import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(true); // Sidebar starts open, close by default if you prefer

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const onMenuItemClick = (id) => {
    setActive(id);
    if (window.innerWidth <= 1023) setMenuOpen(false); // On mobile, auto-close
  };

  return (
    <>
      {/* Hamburger/Toggle shown everywhere */}
      <Hamburger onClick={handleMenuToggle}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </Hamburger>
      {/* Sidebar slides in/out */}
      <NavStyled className={menuOpen ? 'show-menu' : ''}>
        <div className="user-con">
          <img src={avatar} alt="User avatar" />
          <div className="text">
            <h2>Mike</h2>
            <p>Your Money</p>
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => onMenuItemClick(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <div className="bottom-nav">
          <li>
            {signout} Sign Out
          </li>
        </div>
      </NavStyled>
    </>
  );
}

// Hamburger always shown
const Hamburger = styled.div`
  display: flex;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1100;
  cursor: pointer;
  width: 30px;
  height: 22px;
  flex-direction: column;
  justify-content: space-between;
  .bar {
    width: 100%;
    height: 4px;
    background-color: #222260;
    border-radius: 10px;
    transition: 0.3s;
    &.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px);}
    &.open:nth-child(2) { opacity: 0;}
    &.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px);}
  }
`;


// Sidebar navigation styles
const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100vh;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);

  &.show-menu {
    transform: translateX(0);
    box-shadow: 2px 0 15px rgba(0,0,0,0.2);
  }

  /* Shrink on mobile */
  @media (max-width: 1023px) {
    width: 250px;
    padding: 1.2rem .7rem;
    border-radius: 16px;
  }
  /* Optionally overlay content on mobile */
  @media (max-width: 700px) {
    width: 82vw;
  }

  /* For mobile: hide sidebar by default, show on toggle */
  @media (max-width: 1023px) {
    width: 250px;
    transform: translateX(-100%);
    &.show-menu {
      transform: translateX(0);
      box-shadow: 2px 0 15px rgba(0, 0, 0, 0.2);
    }
  }

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }

  .bottom-nav {
    li {
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      transition: color 0.3s ease;
      i {
        font-size: 1.4rem;
      }
      &:hover {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
`;

export default Navigation;
