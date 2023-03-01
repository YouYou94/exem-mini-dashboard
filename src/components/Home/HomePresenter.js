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
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export const HomePresenter = ({
  isChart,
  timeseries,
  pie,
  value,
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
          <Styled.ChartTitle>Timeseries Chart</Styled.ChartTitle>
          <LineChart
            width={800}
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
          <Styled.ChartTitle>Pie Chart</Styled.ChartTitle>
          {pie ? (
            <Styled.DoughnutContainer>
              <Doughnut
                options={{
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
                data={pie}
                width={100}
                height={100}
              />
              <Styled.DoughnutDataList>
                {pie.labels?.map((label, index) => {
                  return (
                    <Styled.DoughnutDataBox key={index}>
                      <Styled.DoughnutDataColor
                        color={pie.datasets[0].backgroundColor[index]}
                      />
                      <Styled.DoughnutDataLabel>
                        {label} ({pie.datasets[0].data[index]})
                      </Styled.DoughnutDataLabel>
                    </Styled.DoughnutDataBox>
                  );
                })}
              </Styled.DoughnutDataList>
            </Styled.DoughnutContainer>
          ) : (
            <></>
          )}
          <Styled.ChartTitle>Value Chart</Styled.ChartTitle>
          <Styled.ValueContainer>
            <Styled.ValueBox>
              <Styled.ValueName>{value?.name}</Styled.ValueName>
              <Styled.ValueLabel>
                {value?.value} {value?.unit}
              </Styled.ValueLabel>
            </Styled.ValueBox>
          </Styled.ValueContainer>
        </>
      ) : (
        <></>
      )}
    </Styled.Layout>
  );
};
