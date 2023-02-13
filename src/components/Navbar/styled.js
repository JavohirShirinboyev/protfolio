import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 61px;
`;

const MenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 61px;
  transition: all 0.5s ease-out;
  width: 100%;
  display: none;
  z-index: 100;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
  background-color: #343840;
  .active {
    color: var(--textColor-white);
  }

  @media screen and (max-width: 768px) {
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 25px;
  .contact__icon {
    font-size: 30px;
    color: #abb2bf;
    background-color: #343840;
    cursor: pointer;
  }
`;

const ContactFixedBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 17px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .contact__icon {
    font-size: 22px;
    color: #abb2bf;
    background-color: var(--bg-dark);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  left: 10px;
  height: 120px;
  width: 1px;
  background: #abb2bf;
`;

const Content = styled.div`
  display: ${({ menu }) => (menu ? "none" : "flex")};
  align-items: center;
  color: var(--textColor-white);
  h3 {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  cursor: ${({ logo }) => logo && "pointer"};

  .icon {
    font-size: 25px;
  }

  .active {
    color: var(--textColor-white);
  }

  @media screen and (max-width: 768px) {
    display: ${({ navbarLinks }) => navbarLinks && "none"};
    display: ${({ menu }) => menu && "flex"};
  }
`;

const Logo = styled.img`
  width: 16px;
  margin-right: 8px;
`;

const Link = styled(NavLink)`
  color: var(--textColor-grey);
  text-decoration: none;
  font-size: 16px;
  margin: 0 16px;
  text-transform: lowercase;
  span {
    color: var(--textColor-danger);
  }
  :hover {
    color: var(--textColor-white);
  }
`;

export {
  Wrapper,
  Logo,
  Content,
  Link,
  MenuContainer,
  ContactContainer,
  ContactFixedBox,
  Line,
};
