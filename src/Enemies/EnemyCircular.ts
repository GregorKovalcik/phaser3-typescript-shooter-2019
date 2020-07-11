    import { Enemy } from "./Enemy";
    
    export class EnemyCircular extends Enemy {
  
        baseX: number;
        baseY: number;
        timePeriod: number = 2000;
        randomTimeOffset: number = Math.floor(Math.random() * this.timePeriod);
        movementRadius: number = 100;

        constructor( scene: Phaser.Scene ) {
            super(scene, "enemy3");
        }
  
        launch(x: number, y: number) : Enemy {
            this.baseX = x;
            this.baseY = y;
            return super.launch(x, y);
        }

        update(time: number, delta: number) {
            this.baseY += this.speed * delta;
            
            // circular periodic motion
            let timePhase: number = (time + this.randomTimeOffset) % this.timePeriod;
            let offsetX = Math.sin(timePhase / this.timePeriod * Phaser.Math.PI2) * this.movementRadius;
            let offsetY = Math.cos(timePhase / this.timePeriod * Phaser.Math.PI2) * this.movementRadius;
            
            this.x = this.baseX + offsetX;
            this.y = this.baseY + offsetY;

            if (this.y > Number(this.scene.game.config.height) + 50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }
  
    }
