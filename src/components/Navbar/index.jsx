import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Logo, Wrapper, Content, Link } from "./styled";
import logoImg from "../../assets/icons/logo.png";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Container>
        <Wrapper>
          <Content onClick={() => navigate("/home")} logo>
            <Logo src={logoImg} />
            <h3>Javokhir</h3>
          </Content>
          <Content>
            {navbar.map(({ title, path, id }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  <span>#</span>
                  {title}
                </Link>
              );
            })}
          </Content>
        </Wrapper>
      </Container>
      <Outlet />
    </nav>
  );
};

export default Navbar;
