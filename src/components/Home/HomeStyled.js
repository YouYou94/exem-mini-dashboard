import styled from "styled-components";

export const Layout = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const SelectorLayout = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Selector = styled.select`
  width: 25rem;
  height: 2rem;

  font-size: 1rem;

  padding-left: 0.5rem;
`;

export const Option = styled.option`
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 4rem;
  height: 2rem;

  font-size: 1rem;

  border: none;
  border-radius: 0.5rem;

  background-color: black;
  color: white;

  cursor: pointer;

  :hover {
    background-color: rgb(45, 45, 45);
  }
`;

export const ChartTitle = styled.h2`
  font-size: 2rem;
`;
