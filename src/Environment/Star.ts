    // Similar to Bullet, here we model the player's adversary setting up its Arcade body
    // and providing simple movement in update(...) method
    export class Star extends Phaser.GameObjects.Sprite {

        public speed: number;
        public maxSpeed: number = Phaser.Math.GetSpeed(50, 1);
        public spriteTexture: string;
        public spriteScale: number;
        public spriteMinScale: number = 0.1;
        public spriteMaxScale: number = 0.3;
        
        constructor( scene: Phaser.Scene ) {
            super(scene, 0, 0, "star");
            this.spriteTexture = "star";
            let randomValue = Math.random();
            this.speed = randomValue * this.maxSpeed;
            this.spriteScale = this.spriteMinScale + randomValue * (this.spriteMaxScale - this.spriteMinScale);
        }

        launch(x: number, y: number) : Star {
            Phaser.GameObjects.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
            
            this.setScale(this.spriteScale, this.spriteScale);

            this.setPosition(x, y);

            this.setActive(true);
            this.setVisible(true);

            return this;
        }

        update(time: number, delta: number) {
            this.y += this.speed * delta;
            
            if (this.y > Number(this.scene.game.config.height) + 25)
            {
                this.y = -25;
            }
        }
  
    }

