import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--textColor-grey);
  opacity: 0.4;
`;

const FooterBox = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
`;

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterContet = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .contact__icon {
    font-size: 22px;
    color: #abb2bf;
    background-color: var(--bg-dark);
    cursor: pointer;
    margin-right: 14px;
  }
`;

const Logo = styled.img``;

const Title = styled.h3`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;
  margin: ${({ right }) => (right ? "0 0 12px 0" : "0 0 0 9px")};
`;

const Email = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: var(--textColor-grey);
  margin: 0 0 0 32px;
`;

const Location = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  margin-top: 21px;
  @media screen and (max-width: 768px) {
    margin-bottom: 28px;
  }
`;

const FooterBottom = styled.div`
  margin-top: 48px;
  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: var(--textColor-grey);
  }
`;

export {
  Line,
  FooterBox,
  FooterTop,
  FooterBottom,
  FooterContet,
  Content,
  Logo,
  Title,
  Email,
  Location,
};
