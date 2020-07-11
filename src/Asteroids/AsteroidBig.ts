    import { Asteroid } from "./Asteroid";
    
    export class AsteroidBig extends Asteroid {

        static textures: Array<string> = ["asteroidBig1", "asteroidBig2", "asteroidBig3", "asteroidBig4"]

        constructor( scene: Phaser.Scene ) {
            super(
              scene, 
              AsteroidBig.textures[Math.floor(Math.random() * AsteroidBig.textures.length)],
              0.6,
              Phaser.Math.GetSpeed(20, 1)
              );
        }

        // return true if destroyed by the hit
        hit() : boolean {
            this.health -= 1;
            return this.health <= 0;
        }
    }
