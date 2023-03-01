import axios from "axios";
import { useState } from "react";
import { HomePresenter } from "./HomePresenter";

export const HomeContainer = () => {
  const [time, setTime] = useState(null);
  const [isChart, setIsChart] = useState(false);
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

    await axios
      .get(`http://localhost:3000/timeseries?from=${from}&to=${to}`)
      .then((res) => {
        console.log(res);
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

    // 60분은 오류가 난다.
    // 30분은 오류가 날 때도 있고, 오류가 나지 않을 때도 있다.
    // 500 에러라서 서버가 에러인 것 같은데 서버 문제인지는 확실히 모르겠다.
    if (time !== "60") {
      await axios
        .get(`http://localhost:3000/pie?from=${from}&to=${to}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(`http://localhost:3000/value?from=${from}&to=${to}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setIsChart(true);
  };

  /* chart */

  return (
    <HomePresenter
      isChart={isChart}
      timeseries={timeseries}
      handleChange={onChangeSelector}
      handleClick={onClickSelectorButton}
    />
  );
};
