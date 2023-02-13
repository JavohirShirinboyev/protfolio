import styled from "styled-components";

const Container = styled.div`
  width: 330px;
  /* height: 391px; */
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  border: 1px solid #abb2bf;
`;

const Img = styled.img`
  width: 100%;
  height: 201px;
  object-fit: cover;
`;

const TechnologyContainer = styled.div`
  width: 100%;
  border-top: 1px solid #abb2bf;
  border-bottom: 1px solid #abb2bf;
  padding: 8px;

  p {
    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    margin: 0;
    color: #abb2bf;
  }
`;

const TitleWork = styled.h3`
  width: 1005;
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  margin: 10px 0 10px 16px;
  text-align: left;
  color: #ffffff;
`;

const Info = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #abb2bf;
  margin: 0 0 10px 16px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px 0 0 16px;
`;

export { Container, Img, TechnologyContainer, TitleWork, Info, ButtonBox };
