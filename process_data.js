import { read_data_from_the_json } from "./load_data.js";

async function Retrieving_name_of_race() {
  const reading_the_data = await read_data_from_the_json();
  const name_race = reading_the_data.raceName;
  return name;
}

async function Retrieving_CurrentLapTotalLaps() {
  const reading_the_data = await read_data_from_the_json();
  const data = `${reading_the_data.currentlep}/${reading_the_data.totallaps}`;
  return data;
}

async function Retrieving_total_cars_in_race() {
  const reading_the_data = await read_data_from_the_json();
  const lisr_cars = reading_the_data.cars;
  return lisr_cars.length;
}

async function cars_waiting_for_pit_stop() {
  const reading_the_data = await read_data_from_the_json();
  const lisr_cars = reading_the_data.cars;
  const cars_waiting = lisr_cars.filter((obj) => obj.status === "waiting");
  return cars_waiting;
}

async function Search_for_a_car_by_number(number) {
  try {
    const reading_the_data = await read_data_from_the_json();
    const lisr_cars = reading_the_data.cars;
    const Search_result = lisr_cars.find((obj) => obj.carNumber === number);
    return Search_result;
  } catch (err) {
    console.log(
      `Error: No car found with number #${number} in the current race`,
    );
  }
}
