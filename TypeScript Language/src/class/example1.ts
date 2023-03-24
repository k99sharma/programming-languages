// class
// A chess game
// class Game {}
// class Piece {}
// class Position {}

// Let's add position and color to our Piece class
type Color = "Black" | "White";
type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Position {
  constructor(private file: File, private rank: Rank) {}
}

class Piece {
  protected position: Position;

  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
}

// We can extend class
class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

export {};
