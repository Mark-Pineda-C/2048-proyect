import { createMachine } from 'xstate';

interface Context {
    score: number;
    board: number[][];
}

type Events = 
    | { type: 'MOVE', direction: 'up' | 'down' | 'left' | 'right' } 
    | { type: 'UPDATE_BOARD', board: number[][] }
    | { type: 'IDLE' }
    | { type: 'END_GAME' };


// XState machine
export const gameMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCYAMAWAHAYgKoAUARAQQBUBRAfQCEB5YgJUIG1UBdRUABwHtYBLAC78eAO04gAHogDMARkwA6GQDYA7Mjlq1mAJz6VqFQBoQAT0S6AvldNosi-hAA2YbAFlaANXKsOSEF4BYTEJaQQ1AFZFNXR9eJltSMiVE3NENGRFXUj5VEjMOTlkdB10GzsMJQBbHgA3flEoPCIyKjpGFnYJIKERcQDwgpVszV0i5BV0YvzTCwQZZDVlFV01KcxUTG0VZAqQexr6xubyADlCSgBxYndfboDekIHQcJlExS3InO3UzF+5hlUFkcnkChNSphyrYDlVFABXLgQACGwia1B4yIAThBsABJQgAGXu-m4fD6oUGshUckUkTkKXQ31Uui+gIQ6FQtLQYLka0wyEiGBsMNEPAgcAkhx65OeYUQAFpkLp2UVokywYVipDoZUHE5XDLgv15Qg+eylrSWdpVOhSu9dbCHLUGk0jRSXlIMqyYgp1j84uhVha1FbVjapvaZI7DgikaiThjsRB3XKqQhvuhFCptvSoZghchMGl5pzuahefzBXJ9rGoMjqmBaHUwFjUyb098sjpimtVly1LN0ghNOrcmqGSV6eMRVYgA */
  id: '2048',
  initial: 'idle',
  tsTypes: {} as import("./GameMachine.typegen").Typegen0,
  schema: {
    context: {
        score: 0,
        board: [[0, 0, 0, 0], 
                [0, 0, 0, 0], 
                [0, 0, 0, 0], 
                [0, 0, 0, 0]]
    } as Context,
    events: {} as Events
  },
  states:  {
    idle: {
        entry: 'spawnNewTile',
        on: {
            MOVE: 'moving'
        }
    },
    moving: {
        entry: 'checkBoardState',
        on: {
            UPDATE_BOARD: 'updatingBoard',
            END_GAME: 'gameOver'
        }
    },
    updatingBoard: {
        on: {
            IDLE: 'idle'
        }
    },
    gameOver: {
        type: 'final'
    }
  },
  on: {
    UPDATE_BOARD: {
        actions: 'updateBoard'
    }
  }
},
{
    actions: {
        updateBoard: (context, event) => {
            // code to update the game board
          }
    }
});
