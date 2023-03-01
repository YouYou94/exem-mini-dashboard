# EXEM MINI DASHBOARD

### 0. 실행 방법

<br>

프로그램 실행

```
npm start
```

<br>
<br>

### 1. 개발 기간

_23. 02. 25 ~ 23. 03. 01_
<br>
<br>

### 2. 사용 기술

- Javascript
- React
- Styled-Components

<br>
<br>

### 3. 필수 요구 사항

1. 대시보드 앱에 보여질 차트 3종을 구현합니다.

   - 3종의 차트는 각각 라인 차트, 파이 차트, 값 차트를 의미합니다.
   - 라인 차트는 GET /timeseries API 의 응답 데이터를 적절히 표현할 수 있어야 합니다.

   - 파이 차트는 GET /pie API 의 응답 데이터를 적절히 표현할 수 있어야 합니다.
   - 값 차트는 GET /value API 의 응답 데이터를 적절히 표현할 수 있어야 합니다.
   - 3종의 차트는 10초 주기로 데이터를 갱신해야 합니다.

2. 각 차트에 보여질 데이터를 선택할 시간 범위 selector를 구현합니다.

   - selector의 모양은 자유롭게 선택하셔도 됩니다.
   - 시간 범위 selector의 설정 값은 대시보드 페이지의 모든 차트에 영향을 줍니다.
   - 시간 범위 selector의 선택 가능한 옵션은 10분, 30분, 1시간 입니다.
     ex) 주기 옵션이 10분이라면, 10분 전부터 현재 시각까지의 데이터를 차트에 반영합니다.

<br>
<br>

### 4. 과제 수행 과정

<br>

_23. 02. 25_

- 프로젝트 생성
- mocking 서버 및 api 연동

<br>

_23. 02. 26_

- `pie`에 대한 api 테스트
- `from`과 `to`의 주기가 1시간 이상이 될 경우 500 에러 발생
- 500 에러에 대한 원인을 찾으려고 했으나 찾지 못했음.

<br>

_23. 02. 27 ~ 28_

- 차트 관련 라이브러리 다운로드 : `recharts` | `chart.js` | `react-chartjs`
- 단일 페이지 구현을 위한 `React-Router-Dom` 사용
- Home 컴포넌트 생성 `Presenter-Container` 패턴을 사용하여 마크업 구조와 동작 구조로 나눔
- `Timeseries` 차트 완성

<br>

_23. 03. 01_

- `pie` 및 `value` 차트 완성
- 필수 요구사항 중 10초 주기로 데이터 갱신 성공

<br>
<br>

### 5. 프로젝트를 진행하면서 어려웠던 점

- 처음으로 mock 서버를 연동하여 데이터를 받아왔는데 처음이라 그런지 세팅 방법이 어려웠고, 학습하느라 시간이 많이 걸렸습니다. 그래도 새로운 경험을 통해 새로운 기술을 배울 수 있었고, 아직은 mock을 사용하는데 저의 역량이 많이 부족하여 해당 기술의 장점에 대해 잘 파악하지 못하였으나 학습을 진행하여 해당 기술에 대해 학습을 진행할 계획입니다.

- `from`과 `to`에 대한 `input` 값이 무엇인지 파악하는데 어려움이 있었습니다. 그러나 api 명세서와 `timeseries`, `pie`, `value` 코드를 하나씩 뜯어보며 `console.log`를 통해 디버깅을 하여 해당 코드의 동작 과정을 파악 후 `input` 값에 대해 알게 되었고, 과제를 진행하는데 큰 어려움이 없었습니다.

- 10분 주기의 경우 연동이 잘 되나 30분 또는 1시간으로 `select`를 선택 후 진행할 경우 500 에러가 발생하는 현상이 있었습니다. 해당 오류의 경우 서버 통신의 Timeout 지연 오류나 서버 트래픽의 과부하 등이 있을 경우 발생하는 오류여서 원인을 파악하고자 시간을 변경하며 원인을 찾아내려고 했으나 결국 찾아내지 못하였습니다. 해당 어려웠던 부분에 대해 피드백을 받고자 합니다.
