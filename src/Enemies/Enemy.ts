    // Siilar to Bullet, here we model the player's adversary setting up its Arcade body
    // and providing simple movement in update(...) method
    export class Enemy extends Phaser.Physics.Arcade.Sprite {
  
        public speed: number;
        public spriteTexture: string;
        public spriteScale: number = 0.3;
        public health: number = 1;
        
        constructor( scene: Phaser.Scene, texture: string = "enemy1", speed: number = Phaser.Math.GetSpeed(50, 1) ) {
            super(scene, 0, 0, texture);
            this.spriteTexture = texture;
            this.speed = speed;

            this.setDepth(100);
        }

        launch(x: number, y: number, speed?:number, health?: number) : Enemy {
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
            
            this.setScale(this.spriteScale, this.spriteScale);
            
            this.scene.physics.add.existing(this);
            this.body.setSize(this.spriteScale, this.spriteScale);

            this.setPosition(x, y);
            if (speed){
                this.speed = speed;
            }
            if (health){
                this.health = health;
            }

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

        // return true if destroyed by the hit
        hit() : boolean {
            this.health -= 1;
            return this.health <= 0;
        }
    }

