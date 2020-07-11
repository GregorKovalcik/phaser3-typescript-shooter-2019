# Report



## What have you learned during this assignment?
Working with Phaser 3. I have never heard of it before. Unity3D and UnrealEngine are well known in comparison. It's very easy to create small games for web using Phaser 3.

## What has worked well and what’s not during the development?

### Worked well:

- It's helpful to have a game window in StackBlitz that updates automatically.
- It's helpful to have version control integration in StackBlitz.
- Assets are very easy to load in Phaser 3.
- I don't do programming in JavaScript/TypeScript, but it was fairly easy to jump in.
- It's nice to have lots of example projects on the web, but I did not use them very much.

### Did not work well:

- There is no constructor overloading in typescript. I used optional and autofilled arguments instead.
- I had troubles understanding and working with Phaser 3 groups.
- There is a weird physics behavior (game objects occasionally pick up a random velocity vector) and I am not sure whether I made a programming error or it's a bug in Phaser 3.
- Multiple StackBlitz editor problems:
    - I lost the entire afternoon of work because I pressed backspace twice while the focus was on game window. This closed the project and moved me back to the project selection screen without saving changes locally (I modded my web browser to execute "go back" action on backspace key).
    - Multiple fake intellisense errors (can't find import files, nonexistent property or function, etc.).
    - Unable to set tabulator size in StackBlitz editor. Number of inserted spaces is hardcoded to 2.
    - Because the editor runs as a webpage in a web browser, its rendering is slow and causes input latency when typing text. Additionally, text editor does not scroll like a text document (3 lines per scroll) but like a webpage (third of screen per scroll) which is very annoying when trying to navigate in code.
    - A weird bug when a project is opened and loaded from version control, game engine/compiler? uses the initial version of files not the latest one. I had to make a small change in those files and save them to force editor to refresh the latest version of the file (I am not 100% sure about this behavior, but it worked for me).


## What was the biggest obstacle you have encountered?

Working with StackBlitz editor and trying to fix corrupted project.


## How satisfied are you with the result?

- I am very satisfied with the end result. The game looks nice and its gameplay is fairly enjoyable and the difficulty is quite balanced.
- I am not very satisfied with the code. It needs refactoring, replacing magic numbers with constants, putting some redundant pieces of code into functions, etc.


## How extendable your solution is?

How easy is to add another:

### Level

This is not a game with levels, but additional levels could be added as new scenes. However, some refactoring should be performed to reduce redundancy of code, and to export some code that's currently crammed into a single scene, for later usage in multiple scenes.

### Enemy 

Very easy by extending a base Enemy class that has a basic behavior. A custom behavior can be implemented by overriding ancestor methods (like in EnemySideways and EnemyCircular).

Collisions with other objects are already implemented (when casted as base Enemy class). However, each enemy type has a separate container and spawn settings so these have to be added for each new enemy type separately.

### Weapon

Very easy to add a new bullet firing direction. The Bullet class was extended to allow firing bullets at an angle.

For a new type of weapon, some refactoring would be required to create a base projectile which other projectile types would just extend (similar to how Enemy base class is implemented). Then, projectile mechanics could be generalized in the main code.


## How much time it took you to create the game?

2 days:

1. Learning basics and losing a few hours of work after avoiding small commits and mistakenly closing project in an editor that does not store local changes.
2. Implementation, debugging, testing, optimizing difficulty and writing a report.


## Are you confident you will be able to start working on another Phaser game now?

Yes, but I don't think I will. JavaScript/TypeScript is not my preferred language and web browser is not my preferred platform. And I did not enjoy working with StackBlitz editor. Nevertheless, I am glad that I learned Phaser, in case I will need it someday.
 