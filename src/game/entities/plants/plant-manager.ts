import type { Plant } from "./types";

type PlantManager = {
  get plants(): Plant[];
  addPlant(plant: Plant): void;
  addPlants(...plants: Plant[]): void;
  removePlantById(id: string): void;
  findPlantById(id: string): Plant | undefined;
};

function createPlantManager(): PlantManager {
  let plants: Plant[] = [];

  return {
    get plants() {
      return plants;
    },
    addPlant: (plant) => addPlant(plants, plant),
    addPlants: (...pList) => {
      for (const plant of pList) {
        addPlant(plants, plant);
      }
    },
    removePlantById: (id) => {
      plants = removePlantById(plants, id);
    },
    findPlantById: (id) => {
      return findPlantById(plants, id);
    },
  };
}

function addPlant(plants: Plant[], plant: Plant) {
  plants.push(plant);
}

function removePlantById(plants: Plant[], id: string): Plant[] {
  return plants.filter((plant) => plant.state.id !== id);
}

function findPlantById(plants: Plant[], id: string): Plant | undefined {
  return plants.find((p) => p.state.id === id);
}

export { createPlantManager };
export type { PlantManager };
