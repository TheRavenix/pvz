import type { Vector2 } from "@/game/utils/vector";
import type { ZombieName, ZombieStateName } from "./constants";
import type { Board } from "@/game/board";
import type { Hitbox } from "@/game/helpers/hitbox";
import type { Size } from "@/game/utils/size";
import type { Game } from "@/game/game";

export type ZombieState = {
  name: ZombieName;
  id: string;
  stateName: ZombieStateName;
  health: number;
  damage: number;
  speed: number;
  get hitbox(): Hitbox;
  damageTimer: number;
} & Vector2 &
  Size;

export type Zombie<S extends ZombieState = ZombieState> = {
  get state(): S;
  draw(options: ZombieDrawOptions): void;
  update(options: ZombieUpdateOptions): void;
  takeDamage(options: ZombieTakeDamageOptions): void;
};

export type ZombieDrawOptions<S extends ZombieState = ZombieState> = {
  get state(): S;
  get board(): Board;
};

export type ZombieUpdateOptions<S extends ZombieState = ZombieState> = {
  deltaTime: number;
  get state(): S;
  get game(): Game;
};

export type ZombieTakeDamageOptions<S extends ZombieState = ZombieState> = {
  damage: number;
  get state(): S;
};
