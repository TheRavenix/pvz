import type { Zombie } from "./types";

type ZombieManager = {
  zombies: Zombie[];
  addZombie(zombie: Zombie): void;
  addZombies(...zombies: Zombie[]): void;
};

function createZombieManager(): ZombieManager {
  const zombies: Zombie[] = [];

  return {
    zombies,
    addZombie: (zombie) => addZombie(zombies, zombie),
    addZombies: (...zList) => {
      for (const zombie of zList) {
        addZombie(zombies, zombie);
      }
    },
  };
}

function addZombie(zombies: Zombie[], zombie: Zombie) {
  zombies.push(zombie);
}

export { createZombieManager };
export type { ZombieManager };
