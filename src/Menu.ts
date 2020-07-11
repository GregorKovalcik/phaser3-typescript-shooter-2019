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
              maxSize: 100,
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
          this.add.text(110, 100, ["Classic", "Sh00ter"], { 
              fontFamily: 'Arial', 
              color: '#36bbf5',
              fontSize: 72,
              align: "center"
          });

          this.add.text(120, Number(this.game.config.height) - 100, "Press any key to start.", { 
              fontFamily: 'Arial', 
              color: '#36bbf5',
              fontSize: 24,
              align: "center"
          });

          // start game when any key is pressed
          this.input.keyboard.on('keydown', (event) => {
              this.scene.start("Play"); 
          });
      }

  }