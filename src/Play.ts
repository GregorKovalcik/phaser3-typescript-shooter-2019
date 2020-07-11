import { Bullet } from "./Projectiles/Bullet";
import { Enemy } from "./Enemies/Enemy";
import { Enemy1 } from "./Enemies/Enemy1";
import { Enemy2 } from "./Enemies/Enemy2";
import { Enemy3 } from "./Enemies/Enemy3";
import { Asteroid } from "./Asteroids/Asteroid";
import { AsteroidBig } from "./Asteroids/AsteroidBig";
import { AsteroidMedium } from "./Asteroids/AsteroidMedium";
import { AsteroidSmall } from "./Asteroids/AsteroidSmall";

export class Play extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Sprite;

    // here we will store the action mapping "action name" => keycode 
    moveKeys: {[key:string] : Phaser.Input.Keyboard.Key };

    // this will act as a pool for Bullet(s) as well as "Unity collision layer"
    lasers: Phaser.Physics.Arcade.Group;

    // this will act as a pool for Enemy(ies) as well as "Unity collision layer"
    enemies1: Phaser.Physics.Arcade.Group;
    enemies2: Phaser.Physics.Arcade.Group;
    enemies3: Phaser.Physics.Arcade.Group;

    // this will act as a pool for Asteroid(s) as well as "Unity collision layer"
    asteroidsBig: Phaser.Physics.Arcade.Group;
    asteroidsMedium: Phaser.Physics.Arcade.Group;
    asteroidsSmall: Phaser.Physics.Arcade.Group;


    lastEnemySpawn: number = 0;
    lastAsteroidSpawn: number = 0;

    score: number = 0;

    scoreText: Phaser.GameObjects.Text;
    debugText: Phaser.GameObjects.Text;

    constructor() {
        super("Play");
    }

    create() {
        console.log("Play.create()");

        this.player = this.physics.add.sprite(320, 500, "playership1").setScale(0.5, 0.5);
        this.player.body.collideWorldBounds=true;
        this.player.body.width *= 0.5;
        this.player.body.height *= 0.5;

        this.moveKeys = <{[key:string] : Phaser.Input.Keyboard.Key }> this.input.keyboard.addKeys({
            'up': Phaser.Input.Keyboard.KeyCodes.W,
            'down': Phaser.Input.Keyboard.KeyCodes.S,
            'left': Phaser.Input.Keyboard.KeyCodes.A,
            'right': Phaser.Input.Keyboard.KeyCodes.D,
            'fire': Phaser.Input.Keyboard.KeyCodes.SPACE
        });

        // Enables movement of player with WASD keys; note that event names are string based
        // Note that Phaser3 docs at https://photonstorm.github.io/phaser3-docs
        // are containing the whole section called "Events" listing all existing events
        // and Keyboard is extending the standard string notation (lower-case w/o suffix Event)
        // by adding "keycode" you want to react to
        this.input.keyboard.on('keydown_W', function (event: object) {
            this.scene.player.setAccelerationY(-800);
        });
        this.input.keyboard.on('keydown_S', function (event: object) {
            this.scene.player.setAccelerationY(800);
        });
        this.input.keyboard.on('keydown_A', function (event: object) {
            this.scene.player.setAccelerationX(-800);
        });
        this.input.keyboard.on('keydown_D', function (event: object) {
            this.scene.player.setAccelerationX(800);
        });            

        // Stops player acceleration on uppress of WASD keys
        this.input.keyboard.on('keyup_W', function (event: object) {
            if (this.scene.moveKeys['down'].isUp)
                this.scene.player.setAccelerationY(0);
        });
        this.input.keyboard.on('keyup_S', function (event: object) {
            if (this.scene.moveKeys['up'].isUp)
                this.scene.player.setAccelerationY(0);
        });
        this.input.keyboard.on('keyup_A', function (event: object) {
            if (this.scene.moveKeys['right'].isUp)
                this.scene.player.setAccelerationX(0);
        });
        this.input.keyboard.on('keyup_D', function (event: object) {
            if (this.scene.moveKeys['left'].isUp)
                this.scene.player.setAccelerationX(0);
        });
        
        // BULLET GROUP
        this.lasers = this.physics.add.group({
            classType: Bullet,
            maxSize: 100,
            runChildUpdate: true
        });            

        // ENEMY GROUP
        this.enemies1 = this.physics.add.group({
            classType: Enemy1,
            maxSize: 10,
            runChildUpdate: true
        });
        this.enemies2 = this.physics.add.group({
            classType: Enemy2,
            maxSize: 10,
            runChildUpdate: true
        });
        this.enemies3 = this.physics.add.group({
            classType: Enemy3,
            maxSize: 10,
            runChildUpdate: true
        });

        // ASTEROID GROUP
        this.asteroidsBig = this.physics.add.group({
            classType: AsteroidBig,
            maxSize: 10,
            runChildUpdate: true
        });
        this.asteroidsMedium = this.physics.add.group({
            classType: AsteroidMedium,
            maxSize: 20,
            runChildUpdate: true
        });
        this.asteroidsSmall = this.physics.add.group({
            classType: AsteroidSmall,
            maxSize: 40,
            runChildUpdate: true
        });

        // LASERS kill ENEMIES
        this.physics.add.collider(this.lasers, this.enemies1, this.collideLaserEnemy, null, this); // last parameter is the context passed into the callback
        this.physics.add.collider(this.lasers, this.enemies2, this.collideLaserEnemy, null, this);
        this.physics.add.collider(this.lasers, this.enemies3, this.collideLaserEnemy, null, this);

        // LASERS splits ASTEROIDS
        this.physics.add.collider(this.lasers, this.asteroidsBig, this.collideLaserAsteroid, null, this);
        this.physics.add.collider(this.lasers, this.asteroidsMedium, this.collideLaserAsteroid, null, this);
        this.physics.add.collider(this.lasers, this.asteroidsSmall, this.collideLaserAsteroid, null, this);


        // PLAYER is killed by ENEMIES
        this.physics.add.collider(this.player, this.enemies1, this.collidePlayerEnemy, null, this); // last parameter is the context passed into the callback
        this.physics.add.collider(this.player, this.enemies2, this.collidePlayerEnemy, null, this);
        this.physics.add.collider(this.player, this.enemies3, this.collidePlayerEnemy, null, this);

        // PLAYER is killed by ASTEROIDS
        this.physics.add.collider(this.player, this.asteroidsBig, this.collidePlayerAsteroid, null, this);
        this.physics.add.collider(this.player, this.asteroidsMedium, this.collidePlayerAsteroid, null, this);
        this.physics.add.collider(this.player, this.asteroidsSmall, this.collidePlayerAsteroid, null, this);


        // SCORE TEXT
        this.scoreText = this.add.text(5, 5, "Score: 0", { fontFamily: "Arial Black", fontSize: 12, color: "#33ff33", align: 'left' }).setStroke('#333333', 1);

        // DEBUG TEXT
        this.debugText = this.add.text(5, 30, "Debug", { fontFamily: "Arial Black", fontSize: 12, color: "#33ff33", align: 'left' }).setStroke('#333333', 1);
    }

    update(time: number, delta: number) {
        this.constrainVelocity(this.player, 100);

        if (this.input.keyboard.checkDown(this.moveKeys['fire'], 300))
        {
            // default fire mode
            let bulletDefault: Bullet = this.lasers.get() as Bullet;
            if (bulletDefault) {
                bulletDefault.fireDefault(this.player.x, this.player.y);  
            } 

            // stacked front
            if (true){
                let bulletLeft: Bullet = this.lasers.get() as Bullet;
                if (bulletLeft) {
                    bulletLeft.fireFrontLeft(this.player.x, this.player.y);
                }
                let bulletRight: Bullet = this.lasers.get() as Bullet;
                if (bulletRight) {
                    bulletRight.fireFrontRight(this.player.x, this.player.y);
                }
            }

            // stacked rear
            if (true){
                let bulletLeft: Bullet = this.lasers.get() as Bullet;
                if (bulletLeft) {
                    bulletLeft.fireRearLeft(this.player.x, this.player.y);
                }
                let bulletRight: Bullet = this.lasers.get() as Bullet;
                if (bulletRight) {
                    bulletRight.fireRearRight(this.player.x, this.player.y);
                }
            }

            // stacked side
            if (true){
                let bulletLeft: Bullet = this.lasers.get() as Bullet;
                if (bulletLeft) {
                    bulletLeft.fireSideLeft(this.player.x, this.player.y);
                }
                let bulletRight: Bullet = this.lasers.get() as Bullet;
                if (bulletRight) {
                    bulletRight.fireSideRight(this.player.x, this.player.y);
                }
            }
        }

        // SPAWN ENEMY    
        this.lastEnemySpawn -= delta;

        if (this.lastEnemySpawn < 0) {
            var enemyGroup = this.enemies1;
            var nEnemyTypes = 3;
            switch(Math.floor(Math.random() * nEnemyTypes))
            {
                case 0: 
                    enemyGroup = this.enemies1;
                    break;
                case 1: 
                    enemyGroup = this.enemies2;
                    break;
                case 2: 
                    enemyGroup = this.enemies3;
                    break;
            }

            let e : Enemy = enemyGroup.get() as Enemy;
            if (e) { 
              e.launch(Phaser.Math.Between(50, 400), -50);     
            }
            
            this.lastEnemySpawn += 1000;
        }

        // SPAWN ASTEROID    
        this.lastAsteroidSpawn -= delta;

        if (this.lastAsteroidSpawn < 0) {
            
            let e : Asteroid = this.asteroidsBig.get() as Asteroid;
            if (e) { 
              e.launch(Phaser.Math.Between(50, 400), -50);     
            }
            
            this.lastAsteroidSpawn += 5000;
        }

        this.debugText.text = "Debug";
    }

    constrainVelocity(sprite: Phaser.Physics.Arcade.Sprite, maxVelocity: number)
    {
        if (!sprite || !sprite.body)
        return;

        var angle, currVelocitySqr, vx, vy;
        vx = sprite.body.velocity.x;
        vy = sprite.body.velocity.y;
        currVelocitySqr = vx * vx + vy * vy;

        if (currVelocitySqr > maxVelocity * maxVelocity)
        {
            angle = Math.atan2(vy, vx);
            vx = Math.cos(angle) * maxVelocity;
            vy = Math.sin(angle) * maxVelocity;
            sprite.body.velocity.x = vx;
            sprite.body.velocity.y = vy;
        }
    }

    collideLaserEnemy(laser: Bullet, enemy: Enemy) { 
        if (!laser.active) return;
        if (!enemy.active) return;

        laser.setActive(false).setVisible(false);
        enemy.setActive(false).setVisible(false);

        this.score += 1;
        this.scoreText.text = "Score: " + this.score;
    }

    collideLaserAsteroid(laser: Bullet, asteroid: Asteroid) { 
        if (!laser.active) return;
        if (!asteroid.active) return;

        laser.setActive(false).setVisible(false);
        asteroid.setActive(false).setVisible(false);

        // split big asteroids
        let splitSpeed = 20;
        if (asteroid instanceof AsteroidBig){
            let left : Asteroid = this.asteroidsMedium.get() as Asteroid;
            if (left) { 
                left.launch(asteroid.x - 30, asteroid.y, -Phaser.Math.GetSpeed(splitSpeed, 1)); 
            }
            let right : Asteroid = this.asteroidsMedium.get() as Asteroid;
            if (right) { 
                right.launch(asteroid.x + 30, asteroid.y, Phaser.Math.GetSpeed(splitSpeed, 1));
            }
        }
        if (asteroid instanceof AsteroidMedium){
            let left : Asteroid = this.asteroidsSmall.get() as Asteroid;
            if (left) { 
                left.launch(asteroid.x - 15, asteroid.y, -Phaser.Math.GetSpeed(splitSpeed, 1));
            }
            let right : Asteroid = this.asteroidsSmall.get() as Asteroid;
            if (right) { 
                right.launch(asteroid.x + 15, asteroid.y, Phaser.Math.GetSpeed(splitSpeed, 1));
            }
        }
    }

    collidePlayerEnemy(player: Phaser.Physics.Arcade.Sprite, enemy: Enemy) { 
        if (!player.active) return;
        if (!enemy.active) return;

        player.setActive(false).setVisible(false);
        enemy.setActive(false).setVisible(false);

        this.time.delayedCall(500, this.gameOver, [], this);
    }

    collidePlayerAsteroid(player: Phaser.Physics.Arcade.Sprite, asteroid: Asteroid) { 
        if (!player.active) return;
        if (!asteroid.active) return;

        player.setActive(false).setVisible(false);
        asteroid.setActive(false).setVisible(false);

        this.time.delayedCall(500, this.gameOver, [], this);
    }

    gameOver() {
        this.scene.restart();
    }

}