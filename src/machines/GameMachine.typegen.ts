
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: "checkBoardState" | "spawnNewTile";
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "checkBoardState": "MOVE";
"spawnNewTile": "IDLE" | "xstate.init";
"updateBoard": "UPDATE_BOARD";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "gameOver" | "idle" | "moving" | "updatingBoard";
        tags: never;
      }
  