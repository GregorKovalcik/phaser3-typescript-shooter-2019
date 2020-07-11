    import { Enemy } from "./Enemy";
    
    export class EnemySideways extends Enemy {

        startingX: number;
        timePeriod: number = 2000;
        randomTimeOffset: number = Math.floor(Math.random() * this.timePeriod);
        sidewaysExtent: number = 100;

        constructor( scene: Phaser.Scene ) {
            super(scene, "enemy2");
        }
  
        launch(x: number, y: number) : Enemy {
            this.startingX = x;
            return super.launch(x, y);
        }

        update(time: number, delta: number) {
            this.y += this.speed * delta;
            
            // sideways periodic motion
            let timePhase: number = (time + this.randomTimeOffset) % this.timePeriod;
            let offsetX = Math.sin(timePhase / this.timePeriod * Phaser.Math.PI2) * this.sidewaysExtent;
            this.x = this.startingX + offsetX;

            if (this.y > Number(this.scene.game.config.height) + 50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }
    }
