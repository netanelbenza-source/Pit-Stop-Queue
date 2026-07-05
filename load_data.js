import fs from "fs/promises";
import { join } from "path";
import { json } from "stream/consumers";

async function Loading_data_from_the_server() {
  try {
    const response = await fetch(
      "https://server-for-test-week-13.onrender.com/api/race",
    );
    if (!response.ok) {
      throw Error("There is a problem loading the server.");
    }
    const obj = response.json();
    return obj;
  } catch (err) {
    console.log(err);
  }
}

async function writing_data_to_the_json() {
  try {
    const data = await Loading_data_from_the_server();
    await fs.writeFile("./data.txt", JSON.stringify(data), "utf-8");
  } catch (err) {
    console.log(err);
  }
}

await writing_data_to_the_json();

async function read_data_from_the_json() {
  try {
    const response = await fs.readFile("./data.txt", "utf-8");
    const data = JSON.parse(response);
    return data;
  } catch (err) {
    console.log(err);
  }
}

