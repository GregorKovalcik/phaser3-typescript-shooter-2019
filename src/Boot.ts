  export class Boot extends Phaser.Scene {

      constructor(){
          super("Boot");
      }

      preload() {
          console.log("Boot.preload()");
          // We need to use jsdelivr.net in order to be able to get Github stuff; you can click-through the link to see all the content we have there
          this.load.setBaseURL("https://cdn.jsdelivr.net/gh/kefik/kenney/Shooter/");
          this.load.image("playership1", "playerShip1_blue.png");
          this.load.image("bullet", "lasers/laserBlue01.png");
          this.load.image("enemy", "enemies/enemyBlack1.png");
      }

      create() {
        console.log("Boot.create()");
        this.scene.start("Play");
      }

  }