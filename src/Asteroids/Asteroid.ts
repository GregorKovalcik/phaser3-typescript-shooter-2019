    // Siilar to Bullet, here we model the player's adversary setting up its Arcade body
    // and providing simple movement in update(...) method
    export class Asteroid extends Phaser.Physics.Arcade.Sprite {
  
        public speed: number = Phaser.Math.GetSpeed(20, 1);
        public lateralSpeed: number = 0;
        public spriteTexture: string = "asteroidBig1";
        public spriteScale: number = 0.6;
        public health: number = 1;

        constructor( scene: Phaser.Scene, texture?: string, spriteScale?: number, speed?: number) {
            super(scene, 0, 0, texture);

            if (texture)
                this.spriteTexture = texture;
            if (spriteScale)
                this.spriteScale = spriteScale;
            if (speed)
                this.speed = speed;

            this.setDepth(10);
        }

        launch(x: number, y: number, lateralSpeed: number = 0, speed?: number) : Asteroid {
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
            
            this.setScale(this.spriteScale, this.spriteScale);
            
            this.scene.physics.add.existing(this);
            this.body.setSize(this.spriteScale, this.spriteScale);

            // fix for physics entities picking up random velocity (probably due to collisions?)
            this.setVelocity(0);
            
            this.setPosition(x, y);
            this.lateralSpeed = lateralSpeed;

            if (speed){
                this.speed = speed;
            }

            this.setActive(true);
            this.setVisible(true);

            return this;
        }

        update(time: number, delta: number) {
            this.y += this.speed * delta;
            this.x += this.lateralSpeed * delta;

            if (this.y > Number(this.scene.game.config.height) + 50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }

        // return true if destroyed by the hit
        hit() : boolean {
            // small asteroids are destroyed by one hit by default
            return true;
        }
  
    }
