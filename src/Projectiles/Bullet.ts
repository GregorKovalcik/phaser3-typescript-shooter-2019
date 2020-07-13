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
  
        fire(x: number, y: number, angle: number = 0) {
            // Will re-call Sprite constructor for this instance
            // For params see: https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
            // We need to reinitialize the sprite here because we might have been "drawn" from the pool
            Phaser.Physics.Arcade.Sprite.call(this, this.scene, 0, 0, 'bullet');

            
            // fix for physics entities picking up random velocity (probably due to collisions?)
            this.setVelocity(0);

            this.setPosition(x, y);
            // reset rotation
            this.direction = new Phaser.Math.Vector2(0, -1);
            this.setRotation(0);
            // set new rotation
            this.direction.rotate(angle * Phaser.Math.DEG_TO_RAD);
            this.setRotation(angle * Phaser.Math.DEG_TO_RAD);
            
            this.setActive(true);
            this.setVisible(true);
        }

        fireDefault(x: number, y: number) {
            // model sprite is not well aligned
            this.fire(x + 5, y - 15);
        }

        fireFrontLeft(x: number, y: number) {
            this.fire(x - 20, y);
        }

        fireFrontRight(x: number, y: number) {
            this.fire(x + 30, y);
        }

        fireRearLeft(x: number, y: number) {
            this.fire(x - 20, y + 60, 180);
        }

        fireRearRight(x: number, y: number) {
            this.fire(x + 30, y + 60, 180);
        }

        fireSideLeft(x: number, y: number) {
            this.fire(x - 50, y + 30, 270);
        }

        fireSideRight(x: number, y: number) {
            this.fire(x + 60, y + 30, 90);
        }

        update(time: number, delta: number)
        {
            // update position
            this.x += this.direction.x * this.speed * delta;
            this.y += this.direction.y * this.speed * delta;
            
            // deactivate out of display bullets
            if (this.y < -50 
                || this.y > Number(this.scene.game.config.height) + 50
                || this.x < -50
                || this.x > Number(this.scene.game.config.width) + 50)
            {
                this.setActive(false);
                this.setVisible(false);

                // reset rotation for the next use
                this.direction = new Phaser.Math.Vector2(0, -1);
                this.setRotation(0);
            }
        }
  
    }
