// abstract modifier
abstract class Piece {
  constructor() {}
}

// new Piece('White', 'E');     Error: Cannot create instance of abstract class

class Position {}
abstract class Piece1 {
  protected position: Position | undefined;

  // can have a implemented method
  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}

// we always needs to implement abstract methods in extending class
class King extends Piece1 {
  canMoveTo(position: Position): boolean {
    // return some boolean
    return true;
  }
}

export {};
