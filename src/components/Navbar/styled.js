import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 61px;
  border: 1px solid red;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  color: var(--textColor-white);
  h3 {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: var(--textColor-white);
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

export { Wrapper, Logo, Content, Link };
