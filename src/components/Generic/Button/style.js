import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--textColor-danger);
  width: ${({ width }) => (width ? `${width}px` : "109px")};
  height: ${({ height }) => (height ? `${height}px` : "35px")};

  color: var(--textColor-white);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  :active {
    background: rgba(199, 120, 221, 0.2);
  }

  @media screen and (max-width: 768px) {
    display: ${({ display }) => (display ? `${display}` : "block")};
  }
`;

export { Container };
