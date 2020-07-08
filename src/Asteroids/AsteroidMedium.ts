    import { Asteroid } from "./Asteroid";
    
    export class AsteroidMedium extends Asteroid {

        static textures: Array<string> = ["asteroidMedium1", "asteroidMedium2"]

        constructor( scene: Phaser.Scene ) {
            super(
              scene, 
              AsteroidMedium.textures[Math.floor(Math.random() * AsteroidMedium.textures.length)],
              0.5,
              Phaser.Math.GetSpeed(40, 1)
              );
        }
  
    }
