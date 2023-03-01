import axios from "axios";
import { useEffect, useState } from "react";
import { HomePresenter } from "./HomePresenter";

export const HomeContainer = () => {
  const [time, setTime] = useState(null);
  const [isChart, setIsChart] = useState(false);
  const [timeseries, setTimeseries] = useState({
    data: [],
    times: [],
  });
  const [pie, setPie] = useState({});
  const [value, setValue] = useState(null);

  const onChangeSelector = (event) => {
    const { value } = event.target;

    setTime(value);
  };

  const getMocksData = async () => {
    const from = new Date().getTime();
    const to = new Date(
      Date.parse(new Date()) + 1000 * 60 * Number(time)
    ).getTime();

    await axios
      .get(`http://localhost:3000/timeseries?from=${from}&to=${to}`)
      .then((res) => {
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
      // pie 연동
      await axios
        .get(`http://localhost:3000/pie?from=${from}&to=${to}`)
        .then((res) => {
          const labels = [];
          const datas = [];

          res.data.data.map((pieData) => {
            labels.push(pieData.name);
            datas.push(pieData.value);
            return 0;
          });

          setPie({
            labels,
            datasets: [
              {
                labels,
                data: datas,
                borderWidth: 2,
                hoverBorderWidth: 3,
                backgroundColor: [
                  "rgba(238, 102, 121, 1)",
                  "rgba(98, 181, 229, 1)",
                  "rgba(255, 198, 0, 1)",
                  "rgba(151, 45, 0, 1)",
                  "rgba(199, 102, 25, 1)",
                ],
                fill: true,
              },
            ],
          });
        })
        .catch((error) => {
          console.log(error);
        });

      // value 연동
      await axios
        .get(`http://localhost:3000/value?from=${from}&to=${to}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    console.log("도는 중");
  };

  const onClickSelectorButton = () => {
    if (!time) {
      alert("시간을 선택해주세요.");
      return;
    }

    setIsChart(true);

    getMocksData();
  };

  /* 10초 주기 갱신 */
  useEffect(() => {
    let timer = setInterval(() => {
      getMocksData();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HomePresenter
      isChart={isChart}
      timeseries={timeseries}
      pie={pie}
      handleChange={onChangeSelector}
      handleClick={onClickSelectorButton}
    />
  );
};
