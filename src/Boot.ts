  export class Boot extends Phaser.Scene {

      constructor(){
          super("Boot");
      }

      preload() {
          console.log("Boot.preload()");
          // We need to use jsdelivr.net in order to be able to get Github stuff; you can click-through the link to see all the content we have there
          this.load.setBaseURL("https://cdn.jsdelivr.net/gh/kefik/kenney/Shooter/");
          
          // player ships
          this.load.image("playership1", "playerShip1_blue.png");
          
          // projectiles
          this.load.image("bullet", "lasers/laserBlue01.png");
          
          // enemies
          this.load.image("enemy1", "enemies/enemyBlack1.png");
          this.load.image("enemy2", "enemies/enemyRed4.png");
          this.load.image("enemy3", "ufoRed.png");

          // asteroids
          this.load.image("asteroidBig1", "meteors/meteorGrey_big1.png");
          this.load.image("asteroidBig2", "meteors/meteorGrey_big2.png");
          this.load.image("asteroidBig3", "meteors/meteorGrey_big3.png");
          this.load.image("asteroidBig4", "meteors/meteorGrey_big4.png");

          this.load.image("asteroidMedium1", "meteors/meteorGrey_med1.png");
          this.load.image("asteroidMedium2", "meteors/meteorGrey_med2.png");
          
          this.load.image("asteroidSmall1", "meteors/meteorGrey_small1.png");
          this.load.image("asteroidSmall2", "meteors/meteorGrey_small2.png");
          
      }

      create() {
        console.log("Boot.create()");
        this.scene.start("Play");
      }

  }