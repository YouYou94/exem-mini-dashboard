// src/mocks/handlers.js
import { rest } from "msw";
import timeseriesDataGet from "./resolver/timeseries";
import { pieResolver } from "./resolver/pie";
import { valueResolver } from "./resolver/value";
const chartHandlers = [
  rest.get(
    `http://localhost:3000/timeseries?from=<FROM>&to=<TO>`,
    timeseriesDataGet
  ),
  rest.get("http://localhost:3000/pie?from=<FROM>&to=<TO> ", pieResolver),
  rest.get("http://localhost:3000/value?from=<FROM>&to=<TO> ", valueResolver),
];
export const handler = chartHandlers;
