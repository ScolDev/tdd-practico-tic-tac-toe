class Game {
  players
  board

  start () {
    this.players = ['', '']
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }

  pickCell (boardCoords) {
    const [x, y] = boardCoords

    this.board[x][y] = 'X'
    this.players = ['X', 'O']
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

  test('should allow to make the second move to the player number one', () => {
    const game = new Game()
    game.start()

    game.pickCell([2, 2])
    game.pickCell([0, 1])

    expect(game.board[2][2]).toBe('X')
    expect(game.board[0][1]).toBe('O')
  })
})
