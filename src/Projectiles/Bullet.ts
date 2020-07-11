    // Bullet to shoot enemies with; it features Arcade body in order to be able to collide
    // Movement is done in update(...) method
    export class Bullet extends Phaser.Physics.Arcade.Sprite {
  
        speed: number;
        direction: Phaser.Math.Vector2;

        constructor( scene: Phaser.Scene ){
            super(scene, 0, 0, "bullet");
            this.speed = Phaser.Math.GetSpeed(300, 1);
            this.direction = new Phaser.Math.Vector2(0, -1);
        }
  
        fire(x: number, y: number, angle: number = 15) {
            // Will re-call Sprite constructor for this instance
            // For params see: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
            // We need to reinitialize the sprite here because we might have been "drawn" from the pool
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, 'bullet');

            this.scene.physics.add.existing(this);

            this.setPosition(x, y - 45);
            this.direction.rotate(angle * Phaser.Math.DEG_TO_RAD);
            this.setRotation(angle * Phaser.Math.DEG_TO_RAD);
            
            this.setActive(true);
            this.setVisible(true);
        }

        update(time: number, delta: number)
        {
            // update position
            this.x += this.direction.x * this.speed * delta;
            this.y += this.direction.y * this.speed * delta;
            
            // deactivate out of display bullets
            if (this.y < -50 || this.y > Number(this.scene.game.config.height) + 50)
            {
                this.setActive(false);
                this.setVisible(false);
                
                // reset rotation for the next use
                this.direction = new Phaser.Math.Vector2(0, -1);
                this.setRotation(0);
            }
        }
  
    }
