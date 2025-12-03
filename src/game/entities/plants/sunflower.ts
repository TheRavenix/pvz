import { createHitbox, drawHitbox } from "@/game/helpers/hitbox";
import { drawPlantId, drawPlantRect, syncPlantHitbox } from "./helpers";

import { PLANT_HEIGHT, PLANT_WIDTH, PlantId } from "./constants";

import type {
  Plant,
  PlantDrawOptions,
  PlantState,
  PlantUpdateOptions,
} from "./types";
import type { Vector2 } from "@/game/utils/vector";

type SunflowerState = PlantState;

interface Sunflower extends Plant<SunflowerState> {}

type CreateSunflowerOptions = Vector2;

const SUNFLOWER_TOUGHNESS = 300;
const SUNFLOWER_SUNCOST = 50;

function createSunflower(options: CreateSunflowerOptions): Sunflower {
  const { x, y } = options;
  const state: SunflowerState = {
    id: PlantId.Sunflower,
    x,
    y,
    width: PLANT_WIDTH,
    height: PLANT_HEIGHT,
    toughness: SUNFLOWER_TOUGHNESS,
    sunCost: SUNFLOWER_SUNCOST,
    hitbox: createHitbox({
      x,
      y,
      width: PLANT_WIDTH,
      height: PLANT_HEIGHT,
    }),
  };

  return {
    state,
    draw,
    update,
  };
}

function draw(options: PlantDrawOptions<SunflowerState>) {
  const { state, board } = options;
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  drawPlantRect(options);
  drawPlantId(options);
  drawHitbox(state.hitbox, board);
}

function update(options: PlantUpdateOptions<SunflowerState>) {
  syncPlantHitbox(options);
}

export { createSunflower };
