    // Siilar to Bullet, here we model the player's adversary setting up its Arcade body
    // and providing simple movement in update(...) method
    export class PowerUp extends Phaser.Physics.Arcade.Sprite {
  
        public speed: number;
        public spriteTexture: string;
        public spriteScale: number = 1;
        public animationDuration: number = 1000;
        public animationScaleChange: number = 0.1;

        
        constructor( scene: Phaser.Scene, texture: string = "powerupScore", speed: number = Phaser.Math.GetSpeed(50, 1) ) {
            super(scene, 0, 0, texture);
            this.spriteTexture = texture;
            this.speed = speed;

            this.setDepth(100);
        }

        launch(x: number, y: number) : PowerUp {
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, this.spriteTexture);
            
            this.setScale(this.spriteScale, this.spriteScale);
            
            this.scene.physics.add.existing(this);
            this.body.setSize(this.spriteScale, this.spriteScale);

            // fix for physics entities picking up random velocity (probably due to collisions?)
            this.setVelocity(0);
            
            this.setPosition(x, y);

            this.setActive(true);
            this.setVisible(true);

            return this;
        }

        update(time: number, delta: number) {
            this.y += this.speed * delta;

            // animate "heartbeat"
            let timePhase = time % this.animationDuration;
            let scaleOffset: number = Math.sin(timePhase / this.animationDuration * Phaser.Math.PI2) * this.animationScaleChange;
            this.setScale(this.spriteScale + scaleOffset, this.spriteScale+ scaleOffset);

            if (this.y > Number(this.scene.game.config.height) + 50)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }
  
    }

