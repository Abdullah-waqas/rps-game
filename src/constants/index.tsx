import { GAME_STATE, PLAYER_SELECTION_TYPE } from '../types';

export const PLAYER_VS_COMPUTER: GAME_STATE = 'PLAYER_VS_COMPUTER';
export const COMPUTER_VS_COMPUTER: GAME_STATE = 'COMPUTER_VS_COMPUTER';
export const WELCOME_SCREEN: GAME_STATE = 'WELCOME_SCREEN';

export const PAPER: PLAYER_SELECTION_TYPE = 'PAPER';
export const SCISSOR: PLAYER_SELECTION_TYPE = 'SCISSOR';
export const ROCK: PLAYER_SELECTION_TYPE = 'ROCK';

export const OPTIONS_LIST: PLAYER_SELECTION_TYPE[] = [PAPER, SCISSOR, ROCK];

export const HEADER_TEXT: {
  [key in GAME_STATE]: string;
} = {
  PLAYER_VS_COMPUTER: 'Player Vs Computer',
  COMPUTER_VS_COMPUTER: 'Computer Vs Computer',
  WELCOME_SCREEN: 'How do you want to play?',
};
