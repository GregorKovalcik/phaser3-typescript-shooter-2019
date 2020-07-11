import { Bullet } from "./Projectiles/Bullet";
import { Enemy } from "./Enemies/Enemy";
import { EnemyStraight } from "./Enemies/EnemyStraight";
import { EnemySideways } from "./Enemies/EnemySideways";
import { EnemyCircular } from "./Enemies/EnemyCircular";
import { Asteroid } from "./Asteroids/Asteroid";
import { AsteroidBig } from "./Asteroids/AsteroidBig";
import { AsteroidMedium } from "./Asteroids/AsteroidMedium";
import { AsteroidSmall } from "./Asteroids/AsteroidSmall";
import { PowerUp } from "./PowerUps/PowerUp";
import { PowerUpScore } from "./PowerUps/PowerUpScore";
import { PowerUpFirepower } from "./PowerUps/PowerUpFirepower";
import { PowerUpDefense } from "./PowerUps/PowerUpDefense";
import { Star } from "./Environment/Star";

export class Play extends Phaser.Scene {

    player: Phaser.Physics.Arcade.Sprite;

    // here we will store the action mapping "action name" => keycode 
    moveKeys: {[key:string] : Phaser.Input.Keyboard.Key };

    // this will act as a pool for Bullet(s) as well as "Unity collision layer"
    lasers: Phaser.Physics.Arcade.Group;

    isFrontFireModeEnabled: boolean = false;
    isSideFireModeEnabled: boolean = false;
    isRearFireModeEnabled: boolean = false;

    // this will act as a pool for Enemy(ies) as well as "Unity collision layer"
    enemies1: Phaser.Physics.Arcade.Group;
    enemies2: Phaser.Physics.Arcade.Group;
    enemies3: Phaser.Physics.Arcade.Group;

    // this will act as a pool for Asteroid(s) as well as "Unity collision layer"
    asteroidsBig: Phaser.Physics.Arcade.Group;
    asteroidsMedium: Phaser.Physics.Arcade.Group;
    asteroidsSmall: Phaser.Physics.Arcade.Group;

    // this will act as a pool for PowerUp(s) as well as "Unity collision layer"
    powerupsScore: Phaser.Physics.Arcade.Group;
    powerupsFirepower: Phaser.Physics.Arcade.Group;
    powerupsDefense: Phaser.Physics.Arcade.Group;
    
    // we don't need physics for stars
    stars: Phaser.GameObjects.Group;

    explosionParticles: Phaser.GameObjects.Particles.ParticleEmitterManager;
    explosionEmitter: Phaser.GameObjects.Particles.ParticleEmitter;

    lastEnemySpawn: number = 0;
    lastAsteroidSpawn: number = 0;
    lastPowerupSpawn: number = 0;
    lastStarSpawn: number = 0;

    score: number = 0;
    lives: number = 3;

    scoreText: Phaser.GameObjects.Text;
    livesText: Phaser.GameObjects.Text;

    constructor() {
        super("Play");
    }

    create() {
        console.log("Play.create()");

        this.player = this.physics.add.sprite(320, 500, "playership1").setScale(0.5, 0.5);
        this.player.setCollideWorldBounds(true);
        this.player.body.setSize(this.player.body.width * 0.5, this.player.body.height * 0.5);
        this.player.setDepth(100);

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
            classType: EnemyStraight,
            maxSize: 10,
            runChildUpdate: true
        });
        this.enemies2 = this.physics.add.group({
            classType: EnemySideways,
            maxSize: 10,
            runChildUpdate: true
        });
        this.enemies3 = this.physics.add.group({
            classType: EnemyCircular,
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

        // POWERUP GROUP
        this.powerupsScore = this.physics.add.group({
            classType: PowerUpScore,
            maxSize: 3,
            runChildUpdate: true
        });
        this.powerupsFirepower = this.physics.add.group({
            classType: PowerUpFirepower,
            maxSize: 3,
            runChildUpdate: true
        });
        this.powerupsDefense = this.physics.add.group({
            classType: PowerUpDefense,
            maxSize: 3,
            runChildUpdate: true
        });
        
        // STARS GROUP
        this.stars = this.add.group({
            classType: Star,
            maxSize: 100,
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

        // PLAYER collects POWERUPS
        this.physics.add.collider(this.player, this.powerupsScore, this.collidePlayerPowerUp, null, this);
        this.physics.add.collider(this.player, this.powerupsFirepower, this.collidePlayerPowerUp, null, this);
        this.physics.add.collider(this.player, this.powerupsDefense, this.collidePlayerPowerUp, null, this);
        

        // SCORE TEXT
        this.scoreText = this.add.text(5, 5, "Score: 0", { fontFamily: "Arial Black", fontSize: 12, color: "#33ff33", align: 'left' }).setStroke('#333333', 1);
        this.scoreText.setDepth(1000);

        // LIVES TEXT
        this.livesText = this.add.text(5, 30, "Lives: 3", { fontFamily: "Arial Black", fontSize: 12, color: "#33ff33", align: 'left' }).setStroke('#333333', 1);
        this.livesText.setDepth(1000);

        // SPAWN STARS
        for (let i = 0; i < this.stars.maxSize; i++) {
            let star : Star = this.stars.get() as Star;
            if (star) { 
                let randomX = Math.random() * Number(this.game.config.width);
                let randomY = Math.random() * Number(this.game.config.height) + 50;
                star.launch(randomX, randomY);     
            }
        }

        // EXPLOSION EMITTER
        this.explosionParticles = this.add.particles("explosion");
        this.explosionParticles.setDepth(101);
        this.explosionEmitter = this.explosionParticles.createEmitter({
            frequency: -1,
            speed: { min: 0, max: 80 },
            angle: { min: 0, max: 360 },
            scale: { start: 0.7, end: 0 },
            tint: 0xff3300,
            blendMode: 'ADD',
            lifespan: 600,
            gravityY: 0
        });
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
            if (this.isFrontFireModeEnabled){
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
            if (this.isRearFireModeEnabled){
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
            if (this.isSideFireModeEnabled){
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

            // enemy level 1 (default)
            let e : Enemy = this.enemies1.get() as Enemy;
            if (e) { 
                e.launch(Phaser.Math.Between(50, 400), Phaser.Math.Between(-40, -60), Phaser.Math.GetSpeed(Phaser.Math.Between(40, 60), 1));     
            }

            // enemy level 2 (after 1 minute)
            if (time > 60000){
                let e : Enemy = this.enemies2.get() as Enemy;
                if (e) { 
                    e.launch(Phaser.Math.Between(50, 400), Phaser.Math.Between(-40, -60), Phaser.Math.GetSpeed(Phaser.Math.Between(40, 60), 1));     
                }
            }

            // enemy level 3 (after 2 minutes)
            if (time > 120000){
                let e : Enemy = this.enemies3.get() as Enemy;
                if (e) { 
                    e.launch(Phaser.Math.Between(50, 400), Phaser.Math.Between(-40, -60), Phaser.Math.GetSpeed(Phaser.Math.Between(40, 60), 1));     
                }
            }

            this.lastEnemySpawn += 1000;
        }

        // SPAWN ASTEROID    
        this.lastAsteroidSpawn -= delta;

        if (this.lastAsteroidSpawn < 0) {
            
            let asteroid : Asteroid = this.asteroidsBig.get() as Asteroid;
            if (asteroid) { 
               asteroid.launch(Phaser.Math.Between(50, 400), -50, 0, Phaser.Math.GetSpeed(Phaser.Math.Between(15, 25), 1));  
               asteroid.health = Math.ceil(time / 60000);   
            }
            
            this.lastAsteroidSpawn += 5000;
        }

        // SPAWN POWERUP    
        this.lastPowerupSpawn -= delta;

        if (this.lastPowerupSpawn < 0) {
            let powerupGroup = this.powerupsScore;
            let nPowerupTypes = 3;
            switch(Math.floor(Math.random() * nPowerupTypes))
            {
                case 0: 
                    powerupGroup = this.powerupsScore;
                    break;
                case 1: 
                    powerupGroup = this.powerupsFirepower;
                    break;
                case 2: 
                    powerupGroup = this.powerupsDefense;
                    break;
            }

            let powerup : PowerUp = powerupGroup.get() as PowerUp;
            if (powerup) { 
                powerup.launch(Phaser.Math.Between(50, 400), -50);     
            }
            
            this.lastPowerupSpawn += 10000;
        }

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

        this.explosionEmitter.explode(10, enemy.x, enemy.y);
    }

    collideLaserAsteroid(laser: Bullet, asteroid: Asteroid) { 
        if (!laser.active) return;
        if (!asteroid.active) return;

        laser.setActive(false).setVisible(false);

        if (!asteroid.hit()){
            return;
        }

        asteroid.setActive(false).setVisible(false);

        // split big asteroids
        if (asteroid instanceof AsteroidBig){
            let left : Asteroid = this.asteroidsMedium.get() as Asteroid;
            if (left) { 
                left.launch(asteroid.x - 30, asteroid.y, -Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1)); 
                left.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(20, 50), 1);
            }
            let right : Asteroid = this.asteroidsMedium.get() as Asteroid;
            if (right) { 
                right.launch(asteroid.x + 30, asteroid.y, Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                right.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(20, 50), 1);
            }
        }
        if (asteroid instanceof AsteroidMedium){
            let left : Asteroid = this.asteroidsSmall.get() as Asteroid;
            if (left) { 
                left.launch(asteroid.x - 15, asteroid.y, -Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                left.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(40, 70), 1);
            }
            let right : Asteroid = this.asteroidsSmall.get() as Asteroid;
            if (right) { 
                right.launch(asteroid.x + 15, asteroid.y, Phaser.Math.GetSpeed(Phaser.Math.Between(5, 40), 1));
                right.speed = Phaser.Math.GetSpeed(Phaser.Math.Between(40, 70), 1);
            }
        }
    }

    collidePlayerEnemy(player: Phaser.Physics.Arcade.Sprite, enemy: Enemy) { 
        if (!player.active) return;
        if (!enemy.active) return;

        enemy.setActive(false).setVisible(false);
        this.playerHit();

        this.explosionEmitter.explode(10, enemy.x, enemy.y);
    }

    collidePlayerAsteroid(player: Phaser.Physics.Arcade.Sprite, asteroid: Asteroid) { 
        if (!player.active) return;
        if (!asteroid.active) return;

        asteroid.setActive(false).setVisible(false);
        this.playerHit();
    }

    collidePlayerPowerUp(player: Phaser.Physics.Arcade.Sprite, powerup: PowerUp) { 
        if (!player.active) return;
        if (!powerup.active) return;

        powerup.setActive(false).setVisible(false);

        if (powerup instanceof PowerUpScore){
            this.score += 100;
            this.scoreText.text = "Score: " + this.score;
        }
        else if (powerup instanceof PowerUpFirepower){
            if (!this.isFrontFireModeEnabled){
                this.isFrontFireModeEnabled = true;
            } 
            else if (!this.isSideFireModeEnabled){
                this.isSideFireModeEnabled = true;
            } 
            else if (!this.isRearFireModeEnabled) {
                this.isRearFireModeEnabled = true
            }
            else {
                this.score += 10;
                this.scoreText.text = "Score: " + this.score;
            }
        }
        else if (powerup instanceof PowerUpDefense){
            this.lives += 1;
            this.livesText.text = "Lives: " + this.lives;
        }
    }

    playerHit(){
        this.lives -= 1;
        this.livesText.text = "Lives: " + this.lives;

        if (this.lives <= 0){
            this.player.setActive(false).setVisible(false);
            this.time.delayedCall(500, this.gameOver, [], this);
        }
        
        this.explosionEmitter.explode(10, this.player.x, this.player.y);
    }

    gameOver() {
        this.scene.restart();
        this.lives = 3;
        this.isFrontFireModeEnabled = false;
        this.isSideFireModeEnabled = false;
        this.isRearFireModeEnabled = false;
    }

}