  import { Star } from "./Environment/Star";

  export class Menu extends Phaser.Scene {
      
      stars: Phaser.GameObjects.Group;
      headerText: Phaser.GameObjects.Text;

      constructor(){
          super("Menu");
      }

      create() {
          // setup background
          this.stars = this.add.group({
              classType: Star,
              // consistent star density across various display resolutions
              maxSize: Math.floor(1.0 * (Number(this.game.config.width) * Number(this.game.config.height)) / (480*640) * 100),
              runChildUpdate: true
          });
          for (let i = 0; i < this.stars.maxSize; i++) {
              let star : Star = this.stars.get() as Star;
              if (star) { 
                  let randomX = Math.random() * Number(this.game.config.width);
                  let randomY = Math.random() * Number(this.game.config.height) + 50;
                  star.launch(randomX, randomY);     
              }
          }

          // draw menu
          this.add.text(
              Number(this.game.config.width) / 2 - 180, 
              100, 
              ["Classic", "Sh00ter"], { 
              fontFamily: 'Arial', 
              color: '#36bbf5',
              fontSize: 100,
              align: "center"
          });

          this.add.text(
            Number(this.game.config.width) / 2 - 180,
            Number(this.game.config.height) - 100, "Press any key to start.", { 
              fontFamily: 'Arial', 
              color: '#36bbf5',
              fontSize: 36,
              align: "center"
          });

          // start game when any key is pressed
          this.input.keyboard.on('keydown', (event) => {
              this.scene.start("Play"); 
          });
      }

  }