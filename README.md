# Memorize - Angular Course Hands-On Exercise
This game is an implementation of generally knows cards flipping games. Below is the general design that will be implemented throughout the course.
Flipping game lays a matrix of cards on a table flipped with backs to the user, on the other side cards are pictures or drawings of some kind where every drawing is placed as a pair. These cards are shuffled and the player if flipping to cards. If these cards have the same drawing it is considered a match and cards are left on the table flipped on the drawing side. In case cards don't match, they are both flipped back and next round starts.

Game ends where all card pair have been found. 

Game keeps track for time and number of turns it took to flip all cards, where every two cards fliped considered a `move`.

## Game design

### Major feature list
1. Board - Screen where cards are placed, playing area.
1. Login - Login mechanism, this should include registration and login mechanics. (Possibly integrating it with facebook/google services in the future).
1. Leaderboard - Ability to display leaderboard with score. Score will be based on a calculation between time it took to solve the game and number of moves made.
1. Multiplayer - (optional) Multiplayer capabilities, playing together as a pair where you compete on time with other players realtime. This will show on a small screen near the game screen the progress of the other player (Moves count and how many pairs of cards he/she solved)



# Angular Generated README

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


