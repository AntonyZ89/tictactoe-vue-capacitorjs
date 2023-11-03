type X = "X";
type O = "O";

type Mark = X | O;

type Board = [
  Mark | null,
  Mark | null,
  Mark | null,
  Mark | null,
  Mark | null,
  Mark | null,
  Mark | null,
  Mark | null,
  Mark | null,
];

type Winner = Mark | "Draw" | "None";

type GameMode = "PLAYER" | "BOT";

export type { X, O, Mark, Board, Winner, GameMode };
