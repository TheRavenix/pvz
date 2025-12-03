import {
  drawZombieId,
  drawZombieRect,
  handleZombieDefaultMovement,
  syncZombieHitbox,
} from "./helpers";
import { createHitbox, drawHitbox } from "@/game/helpers/hitbox";

import { ZOMBIE_HEIGHT, ZOMBIE_WIDTH, ZombieId } from "./constants";

import { type Vector2 } from "@/game/utils/vector";
import type {
  Zombie,
  ZombieDrawOptions,
  ZombieState,
  ZombieUpdateOptions,
} from "./types";

type FlagZombieState = ZombieState;

type FlagZombie = Zombie<FlagZombieState>;

type CreateFlagZombieOptions = Vector2;

const FLAG_ZOMBIE_HEALTH = 190;
const FLAG_ZOMBIE_DAMAGE = 100;
const FLAG_ZOMBIE_SPEED = 25;

function createFlagZombie(options: CreateFlagZombieOptions): FlagZombie {
  const { x, y } = options;
  const state: FlagZombieState = {
    id: ZombieId.Flag,
    x,
    y,
    width: ZOMBIE_WIDTH,
    height: ZOMBIE_HEIGHT,
    health: FLAG_ZOMBIE_HEALTH,
    damage: FLAG_ZOMBIE_DAMAGE,
    speed: FLAG_ZOMBIE_SPEED,
    hitbox: createHitbox({
      x,
      y,
      width: ZOMBIE_WIDTH,
      height: ZOMBIE_HEIGHT,
    }),
  };

  return {
    state,
    draw,
    update,
  };
}

function draw(options: ZombieDrawOptions<FlagZombieState>) {
  const { state, board } = options;
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  drawZombieRect(options);
  drawZombieId(options);
  drawHitbox(state.hitbox, board);
}

function update(options: ZombieUpdateOptions<FlagZombieState>) {
  handleZombieDefaultMovement(options);
  syncZombieHitbox(options);
}

export { createFlagZombie };
