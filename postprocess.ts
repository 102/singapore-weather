import {
  readCSV,
  readJSON,
  writeCSV,
} from "https://deno.land/x/flat@0.0.14/mod.ts";

const filename = Deno.args[0];
const json = await readJSON(filename);

const newFilename = "history.csv";
const history = await readCSV(newFilename);

await writeCSV(newFilename, [{
  "temperature in °C": json[0].Temperature.Metric.Value,
  description: json[0].WeatherText,
  date: new Date().toISOString(),
}, ...history]);
