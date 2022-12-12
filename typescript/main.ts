import { readLines } from "https://deno.land/std@0.167.0/io/mod.ts";

const fileReader = await Deno.open("input.txt");
let max = 0;
let sum = 0;
for await (let line of readLines(fileReader)) {
  if (line === "") {
    if (max < sum) {
      max = sum;
    }
    sum = 0;
  } else {
    sum += Number(line);
  }
}

console.log(max);
