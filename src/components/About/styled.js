import styled from "styled-components";

const TitleBox = styled.div`
  margin-top: 53px;
`;

const Title = styled.h2`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;

  span {
    color: var(--textColor-danger);
  }
`;

const Description = styled.p`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;

  margin-top: 7px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Contend = styled.div`
  padding: ${({ left }) => left && "100px 0 100px 0"};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Info = styled.p`
  font-size: 16px;
  color: var(--textColor-grey);
`;

const Img = styled.img`
  width: 300px;
  border-radius: 5px;
  margin: 20px 0;
  border-bottom: 2px solid var(--textColor-danger);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

const Effect1 = styled.img`
  position: absolute;
  top: 550px;
  left: -18px;
  z-index: 100;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Effect2 = styled.img`
  position: absolute;
  top: 250px;
  right: 0;
  z-index: 100;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Effect3 = styled.img`
  position: absolute;
  top: 650px;
  right: 0;
  z-index: 100;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export {
  TitleBox,
  Title,
  Description,
  MainContainer,
  Contend,
  Info,
  Img,
  Effect1,
  Effect2,
  Effect3,
};
