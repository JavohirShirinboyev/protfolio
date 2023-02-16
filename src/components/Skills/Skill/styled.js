import styled from "styled-components";

const Card = styled.div`
  width: 196px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--textColor-grey);
`;

const CardHeader = styled.div`
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid var(--textColor-grey);
`;

const Title = styled.div`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`;

const CardBody = styled.div`
  width: 100%;
  padding: 8px;
`;

const Info = styled.div`
  font-family: "Fira Code";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: var(--textColor-grey);
`;

export { Card, CardHeader, Title, CardBody, Info };
