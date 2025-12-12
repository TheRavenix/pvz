export const ZOMBIE_WIDTH = 96;
export const ZOMBIE_HEIGHT = 96;

export const ZombieName = {
  Normal: "normal_zombie",
  Flag: "flag_zombie",
} as const;

export type ZombieName = (typeof ZombieName)[keyof typeof ZombieName];

export const ZombieStateName = {
  Walking: "walking",
  Eating: "eating",
} as const;

export type ZombieStateName =
  (typeof ZombieStateName)[keyof typeof ZombieStateName];
