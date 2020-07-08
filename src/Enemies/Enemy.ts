    // Siilar to Bullet, here we model the player's adversary setting up its Arcade body
    // and providing simple movement in update(...) method
    export class Enemy extends Phaser.Physics.Arcade.Sprite {
  
        public speed: number;
        public spriteTexture: string;
        public spriteScaleX: number = 0.3;
        public spriteScaleY: number = 0.3;

        constructor( scene: Phaser.Scene, texture: string = "enemy1", speed: number = Phaser.Math.GetSpeed(50, 1) ) {
            super(scene, 0, 0, texture);
            this.spriteTexture = texture;
            this.speed = speed;
        }

        launch(x: number, y: number) : Enemy {
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
            
            this.setScale(this.spriteScaleX, this.spriteScaleY);
            

            this.scene.physics.add.existing(this);
            this.body.height *= this.spriteScaleY;
            this.body.width *= this.spriteScaleX;

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
    
