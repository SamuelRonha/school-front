export class Sort {
  direction: Direction;
  property: string;
  ignoreCase: boolean;
  ascending: boolean;
  descending: boolean;
}

enum Direction {
  ASC, DESC
}
