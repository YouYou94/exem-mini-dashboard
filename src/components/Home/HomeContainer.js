import axios from "axios";
import { useState } from "react";
import { HomePresenter } from "./HomePresenter";

export const HomeContainer = () => {
  const [time, setTime] = useState(null);
  const [timeseries, setTimeseries] = useState({
    data: [],
    times: [],
  });

  const onChangeSelector = (event) => {
    const { value } = event.target;

    setTime(value);
  };

  const onClickSelectorButton = async () => {
    if (!time) {
      alert("시간을 선택해주세요.");
      return;
    }

    const from = new Date().getTime();
    const to = new Date(
      Date.parse(new Date()) + 1000 * 60 * Number(time)
    ).getTime();

    console.log(new Date());
    console.log(new Date(Date.parse(new Date()) + 1000 * 60 * Number(time)));

    await axios
      .get(`http://localhost:3000/timeseries?from=${from}&to=${to}`)
      .then((res) => {
        console.log(res.data);

        const { data, times } = res.data;
        const arr = [];

        for (let i = 0; i < data.length; i++) {
          arr.push({
            name: `${new Date(times[i]).getHours()}:${new Date(
              times[i]
            ).getMinutes()}:${new Date(times[i]).getSeconds()}`,
            data: data[i],
          });
        }

        setTimeseries(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* chart */

  return (
    <HomePresenter
      timeseries={timeseries}
      handleChange={onChangeSelector}
      handleClick={onClickSelectorButton}
    />
  );
};
