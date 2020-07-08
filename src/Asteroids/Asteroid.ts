    // Siilar to Bullet, here we model the player's adversary setting up its Arcade body
    // and providing simple movement in update(...) method
    export class Asteroid extends Phaser.Physics.Arcade.Sprite {
  
        public speed: number = Phaser.Math.GetSpeed(20, 1);
        public spriteTexture: string = "asteroidBig1";
        public spriteScale: number = 0.6;

        constructor( scene: Phaser.Scene, texture?: string, spriteScale?: number, speed?: number) {
            super(scene, 0, 0, texture);

            if (texture)
                this.spriteTexture = texture;
            if (spriteScale)
                this.spriteScale = spriteScale;
            if (speed)
                this.speed = speed;
        }

        launch(x: number, y: number) : Asteroid {
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
            
            this.setScale(this.spriteScale, this.spriteScale);
            

            this.scene.physics.add.existing(this);
            this.body.height *= this.spriteScale;
            this.body.width *= this.spriteScale;

            this.setPosition(x, y);

            this.setActive(true);
            this.setVisible(true);

            return this;
        }

        update(time: number, delta: number) {
            this.y += this.speed * delta;

            if (this.y > Number(this.scene.game.config.height) + 50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }
  
    }
