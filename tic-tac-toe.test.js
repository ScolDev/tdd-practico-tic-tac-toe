class Game {
  players
  board
  numOfMoves

  start () {
    this.numOfMoves = 0
    this.players = ['', '']
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }

  pickCell (boardCoords) {
    const [x, y] = boardCoords

    if (this.numOfMoves % 2 === 0) {
      this.board[x][y] = 'X'
    } else {
      this.board[x][y] = 'O'
    }

    this.players = ['X', 'O']
    this.numOfMoves++
  }
}

describe('Tic-Tac-Toe Game', () => {
  test('should start the game with two players', () => {
    const game = new Game()
    game.start()

    expect(game.players.length).toBe(2)
    expect(game.board.length).toBe(3)
    expect(game.board[0].length).toBe(3)
  })

  test('should allow to make the first move to the player number one', () => {
    const game = new Game()
    game.start()

    game.pickCell([1, 2])

    expect(game.board[1][2]).toBe('X')
    expect(game.players[0]).toBe('X')
    expect(game.players[1]).toBe('O')
  })

  test('should allow to make the second move to the player number two', () => {
    game.pickCell([2, 2])
    game.pickCell([0, 1])

    expect(game.board[2][2]).toBe('X')
    expect(game.board[0][1]).toBe('O')
  })
})
