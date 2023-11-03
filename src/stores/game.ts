import type { Board, Mark, Winner, GameMode } from "@/types";

const useGameStore = defineStore("game", () => {
  const PLAYER_MARK = "X";
  const BOT_MARK = "O";

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const board = ref<Board>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const mode = ref<GameMode>("BOT");
  const mark = ref<Mark>(PLAYER_MARK);
  const winner = ref<Winner | undefined>("None");

  const scoreboard = ref<Record<Exclude<Winner, "None">, number>>({
    X: 0,
    O: 0,
    Draw: 0,
  });

  function reset(autoStart = true) {
    board.value = [null, null, null, null, null, null, null, null, null];

    if (!autoStart) {
      winner.value = "None";
      scoreboard.value = { X: 0, O: 0, Draw: 0 };
      return;
    }

    const startsWithX = Math.random() < 0.5;

    mark.value = startsWithX ? PLAYER_MARK : BOT_MARK;
    winner.value = undefined;

    if (!startsWithX && mode.value === "BOT") {
      markBot();
    }
  }

  function _mark(index: number) {
    if (winner.value || board.value[index]) {
      return;
    }

    board.value[index] = mark.value;

    winner.value = getWinner();

    if (winner.value) {
      scoreboard.value[winner.value] += 1;
      return;
    }

    mark.value = mark.value === "X" ? "O" : "X";
  }

  function markPlayer(index: number) {
    if (winner.value || (mode.value === "BOT" && mark.value === BOT_MARK)) {
      return;
    }

    _mark(index);

    if (!winner.value && mode.value === "BOT") {
      markBot();
    }
  }

  function markBot() {
    if (winner.value || mark.value === PLAYER_MARK) {
      return;
    }

    let index;

    // compare bot marks and choose a play
    for (const line of lines) {
      const _board = board.value;

      const [a, b, c] = line;

      if (_board[a] === BOT_MARK && _board[b] === BOT_MARK && !_board[c]) {
        index = c;
        break;
      }

      if (_board[a] === BOT_MARK && _board[c] === BOT_MARK && !_board[b]) {
        index = b;
        break;
      }

      if (_board[b] === BOT_MARK && _board[c] === BOT_MARK && !_board[a]) {
        index = a;
        break;
      }
    }

    if (!index) {
      // compare player marks and choose a play
      for (const line of lines) {
        const _board = board.value;

        const [a, b, c] = line;

        if (
          _board[a] === PLAYER_MARK &&
          _board[b] === PLAYER_MARK &&
          !_board[c]
        ) {
          index = c;
          break;
        }

        if (
          _board[a] === PLAYER_MARK &&
          _board[c] === PLAYER_MARK &&
          !_board[b]
        ) {
          index = b;
          break;
        }

        if (
          _board[b] === PLAYER_MARK &&
          _board[c] === PLAYER_MARK &&
          !_board[a]
        ) {
          index = a;
          break;
        }
      }
    }

    if (!index) {
      // choose a random play
      index = Math.floor(Math.random() * 9);
    }

    if (board.value[index]) {
      markBot();
      return;
    }

    _mark(index);
  }

  function getWinner() {
    for (const line of lines) {
      const [a, b, c] = line;

      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        return board.value[a] || undefined;
      }
    }

    if (!board.value.includes(null)) {
      return "Draw";
    }
  }

  return {
    /** states */
    scoreboard,
    board,
    mark,
    winner,
    mode,

    /** functions */
    reset,
    markPlayer,
  };
});

export { useGameStore };
