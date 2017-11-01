# Pig Dice

##### Javascript Object Practice - Pig Dice Game

#### By Ginger Lee Kretschmer and Cheryl Frankenfield, 11/1/17

## Description

This application is a demonstration of constructors and prototypes using JavaScript and jQuery to create a game of Pig Dice.

## Setup

Install address-book by cloning this repository.

## Specs

The application will display a simple input form for first player name input.
* Example Input: Player One types name: MissPiggy5000
* Example Output: Name of Player One is now 'MissPiggy5000'.

The application will display a simple input form for second player name input.
* Example Input: Player Two types name: Kermit42
* Example Output: Name of Player Two is now 'Kermit42'.

User clicks play button and the application will start game on submit.
* Example Input: User clicks Play button.
* Example Output: Game begins.

At start of game, application will display both players' names, turn score and total score.
* Example Input:  Application will display output information listed below.
* Example Output: Player One name: MissPiggy5000, turn score: 0, and total score: 0.

Player One will always start game.
* Example Input: Application will highlight Player One to indicate that it is their turn.
* Example Output: Player One information will be highlighted in green.

Application allows Player One to click roll button to roll die and application will show random number 1 through 6. A dice roll of 1 will end player's turn and score is nothing.
* Example Input: Player One clicks roll button and application randomly rolls/shows a 1.
* Example Output: Player One rolls a 1 and ends turn.

Application allows Player One to click roll button to roll die and application will show random number 2 through 6. A dice of roll of 2-6 will allow player to continue play.
* Example Input: Player One clicks roll button and application randomly rolls/shows a 5.
* Example Output: Player One rolls a 5 and application will display 5 in dice show area.

Application takes Player One's last roll of 2-6 and adds it to turn score tally.
* Example Input: Player One rolls a 5. Player One current turn score: 7.
* Example Output: Player One Turn Score: 12.

Player One decides to hold by clicking hold button. Turn total is added to total score.
* Example Input: Player One clicks hold button. Player One turn score: 12, Player One Total Score: 20
* Example Output: Player One Total Score: 32

At end of players' turn, application will allow second player to play.
* Example Input: Player One rolls a 1 or Player one clicks hold
* Example Output: Turn moves to Player Two

The first player's total score to reach 100 or more points win. At end of each roll or hold application will check players turn score and total score to see if the total is equal to or over 100.
* Example Input: Player One turn score: 10, Player One Total Score: 90
* Example Output: Application notifies player one they are the winner.

## Technologies Used

JavaScript and jQuery

### Legal

Copyright (c) 2017 **Epicodus**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
