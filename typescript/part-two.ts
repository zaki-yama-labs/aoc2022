import { readLines } from "https://deno.land/std@0.167.0/io/mod.ts";

const fileReader = await Deno.open("input.txt");
const calories = [];
let sum = 0;
for await (let line of readLines(fileReader)) {
  if (line === "") {
    calories.push(sum);
    sum = 0;
  } else {
    sum += Number(line);
  }
}

console.log(
  calories
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, curr) => prev + curr)
);
