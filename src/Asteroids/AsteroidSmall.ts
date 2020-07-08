    import { Asteroid } from "./Asteroid";
    
    export class AsteroidSmall extends Asteroid {

        static textures: Array<string> = ["asteroidSmall1", "asteroidSmall2"]

        constructor( scene: Phaser.Scene ) {
            super(
              scene, 
              AsteroidSmall.textures[Math.floor(Math.random() * AsteroidSmall.textures.length)],
              0.6,
              Phaser.Math.GetSpeed(20, 1)
              );
        }
  
    }
