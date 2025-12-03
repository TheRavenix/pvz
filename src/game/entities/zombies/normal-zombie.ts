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

type NormalZombieState = ZombieState;

interface NormalZombie extends Zombie<NormalZombieState> {}

type CreateNormalZombieOptions = Vector2;

const NORMAL_ZOMBIE_HEALTH = 190;
const NORMAL_ZOMBIE_DAMAGE = 100;
const NORMAL_ZOMBIE_SPEED = 15;

function createNormalZombie(options: CreateNormalZombieOptions): NormalZombie {
  const { x, y } = options;
  const state: NormalZombieState = {
    id: ZombieId.Normal,
    x,
    y,
    width: ZOMBIE_WIDTH,
    height: ZOMBIE_HEIGHT,
    health: NORMAL_ZOMBIE_HEALTH,
    damage: NORMAL_ZOMBIE_DAMAGE,
    speed: NORMAL_ZOMBIE_SPEED,
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

function draw(options: ZombieDrawOptions<NormalZombieState>) {
  const { state, board } = options;
  const { ctx } = board;

  if (ctx === null) {
    return;
  }

  drawZombieRect(options);
  drawZombieId(options);
  drawHitbox(state.hitbox, board);
}

function update(options: ZombieUpdateOptions<NormalZombieState>) {
  handleZombieDefaultMovement(options);
  syncZombieHitbox(options);
}

export { createNormalZombie };
