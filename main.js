import {
  Retrieving_name_of_race,
  Retrieving_CurrentLapTotalLaps,
  Retrieving_total_cars_in_race,
  car_onw_waiting_for_pit_stop,
  car_two_waiting_for_pit_stop,
  Search_for_a_car_by_number,
} from "./process_data.js";




async function main() {
  console.log("Pit Stop Queue - Race Team Management System");
  console.log(
    "Race engineer:Let's check the current queue status on the pit wall.\n",
  );
  console.log("Loading queue data...\n");
  console.log("========== PIT STOP QUEUE ========== ");

  console.log(`Race:${await Retrieving_name_of_race()}`);
  console.log(`Lap:${await Retrieving_CurrentLapTotalLaps}`);
  console.log(`Total cars in race:${await Retrieving_total_cars_in_race()}`);
  console.log("Pit stops completed: 1\n");
  console.log("Cars waiting for pit stop:");
  console.log(
    `Car#${await car_onw_waiting_for_pit_stop().carNumber} | Driver${await car_two_waiting_for_pit_stop.driverName}`,
  );
  console.log(
    `Car#${await cars_waiting_for_pit_stop[1].carNumber} | Driver${await cars_waiting_for_pit_stop[1].driverName}`,
  );
  console.log("Next car to enter the pit:");
  console.log(
    `>> Car#${await cars_waiting_for_pit_stop[0].carNumber} | Driver${await cars_waiting_for_pit_stop[0].driverName}`,
  );
  console.log("============================================\n");
  console.log(
    `Radio message to car #${await cars_waiting_for_pit_stop[0].carNumber}:Box box box, Daniel Levi, pit this lap!\n`,
  );
  console.log("--- Search for a car by number --- ");
  console.log(
    `Fond car #4${await Search_for_a_car_by_number(44).carNumber}|Driver${await cars_waiting_for_pit_stop[0].driverName} status:${await cars_waiting_for_pit_stop[0].status}`,
  );
  console.log(`Eror:${await Search_for_a_car_by_number(99)}`);
}

await main()