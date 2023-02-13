import styled from "styled-components";

const Container = styled.div`
  /* height: 423px; */
  display: flex;
  justify-content: space-between;
  margin-top: 74px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Title = styled.h1`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  color: var(--textColor-white);

  padding: 60px 0 32px 0;

  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Info = styled.p`
  margin-bottom: 24px;
  font-size: 18px;

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Img = styled.img`
  z-index: 1;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 84px;
  z-index: -1;
`;

const Dots = styled.img`
  position: absolute;
  right: 0;
  bottom: 90px;
`;

export { Container, Content, Title, Info, Img, Logo, Dots };
