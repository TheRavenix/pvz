import type { Vector2 } from "@/game/utils/vector";
import type { ZombieId } from "./constants";
import type { Board } from "@/game/board";
import type { Hitbox } from "@/game/helpers/hitbox";
import type { Size } from "@/game/utils/size";

export type ZombieState = {
  id: ZombieId;
  health: number;
  damage: number;
  speed: number;
  hitbox: Hitbox;
} & Vector2 &
  Size;

export type Zombie<S extends ZombieState = ZombieState> = {
  state: S;
  draw(options: ZombieDrawOptions): void;
  update(options: ZombieUpdateOptions): void;
};

export type ZombieDrawOptions<S extends ZombieState = ZombieState> = {
  state: S;
  board: Board;
};

export type ZombieUpdateOptions<S extends ZombieState = ZombieState> = {
  deltaTime: number;
  state: S;
};
