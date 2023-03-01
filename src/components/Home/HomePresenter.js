import * as Styled from "./HomeStyled";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const HomePresenter = ({
  isChart,
  timeseries,
  handleChange,
  handleClick,
}) => {
  return (
    <Styled.Layout>
      <Styled.Title>EXEM MINI DASHBOARD</Styled.Title>
      <Styled.SelectorLayout>
        <Styled.Selector onChange={handleChange}>
          <Styled.Option hidden>시간을 선택해주세요.</Styled.Option>
          <Styled.Option value="10">10분</Styled.Option>
          <Styled.Option value="30">30분</Styled.Option>
          <Styled.Option value="60">60분</Styled.Option>
        </Styled.Selector>
        <Styled.Button onClick={handleClick}>확 인</Styled.Button>
      </Styled.SelectorLayout>
      {isChart ? (
        <>
          <Styled.ChartTitle>Timeseries</Styled.ChartTitle>
          <LineChart
            width={1024}
            height={300}
            data={timeseries}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="data" stroke="#8884d8" />
          </LineChart>
        </>
      ) : (
        <></>
      )}
    </Styled.Layout>
  );
};
