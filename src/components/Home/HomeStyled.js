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
  width: 100%;

  padding-top: 1.5rem;

  font-size: 2rem;
  text-align: center;

  border-top: 1px solid rgb(45, 45, 45);
`;

export const DoughnutContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

export const DoughnutDataList = styled.ul`
  width: 15rem;
  list-style: none;

  padding: 0;

  gap: 1rem;
`;

export const DoughnutDataBox = styled.li`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const DoughnutDataColor = styled.div`
  width: 3rem;
  height: 0.5rem;
  background-color: ${(prop) => prop.color};
`;

export const DoughnutDataLabel = styled.div`
  flex: 1;
`;

export const ValueContainer = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  justify-content: center;
`;

export const ValueBox = styled.div`
  width: 30rem;
  height: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(45, 45, 45);
`;

export const ValueName = styled.label`
  font-size: 2rem;
  font-weight: bold;
`;

export const ValueLabel = styled.label`
  font-size: 4rem;
  font-weight: bold;
`;
