#!/usr/bin/env node

import startGame from '../src/cli.js';
import findEven from './brain-even';

console.log('Welcome to the Brain Games!');
startGame();
findEven();
