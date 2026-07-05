import { read_data_from_the_json } from "./load_data.js";

export async function Retrieving_name_of_race() {
  const reading_the_data = await read_data_from_the_json();
  const name_race = reading_the_data.raceName;
  return name_race;
}

export async function Retrieving_CurrentLapTotalLaps() {
  const reading_the_data = await read_data_from_the_json();
  const correntlep = reading_the_data.currentlep;
  const totallep = reading_the_data.totallaps;
  return `${correntlep}/${totallep}`;
}

export async function Retrieving_total_cars_in_race() {
  const reading_the_data = await read_data_from_the_json();
  const lisr_cars = reading_the_data.cars;
  return lisr_cars.length;
}

export async function car_onw_waiting_for_pit_stop() {
  const reading_the_data = await read_data_from_the_json();
  const lisr_cars = reading_the_data.cars;
  const cars_waiting = lisr_cars.filter((obj) => obj.status === "waiting");
  return cars_waiting[0];
}

export async function car_two_waiting_for_pit_stop() {
  const reading_the_data = await read_data_from_the_json();
  const lisr_cars = reading_the_data.cars;
  const cars_waiting = lisr_cars.filter((obj) => obj.status === "waiting");
  return cars_waiting[1];
}

export async function Search_for_a_car_by_number(number) {
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

console.log(await car_onw_waiting_for_pit_stop());
