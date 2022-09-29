class Game {
  players
  board
  numOfMoves
  ended

  start () {
    this.initialize()
  }

  initialize () {
    this.ended = false
    this.numOfMoves = 0
    this.players = ['X', 'O']
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }

  pickCell (boardCoords) {
    const [x, y] = boardCoords

    if (this.board[x][y] !== '') {
      return
    }

    this.makeMove(x, y)
    this.evaluateMove(x, y)
  }

  makeMove (x, y) {
    this.board[x][y] = this.numOfMoves % 2 === 0
      ? this.players[0]
      : this.players[1]

    this.numOfMoves++
  }

  evaluateMove (x, y) {
    const column = [
      this.board[x][0],
      this.board[x][1],
      this.board[x][2]
    ]

    if (column !== '' && column[0] === column[1] && column[0] === column[2]) {
      this.ended = true
      this.gameResult = 'Player One Wins!'
    }
  }

  hasEnded () {
    return this.ended
  }
}

describe('Tic-Tac-Toe Game', () => {
  let game

  beforeEach(() => {
    game = new Game()
    game.start()
  })

  test('should start the game with two players', () => {
    expect(game.players.length).toBe(2)
    expect(game.board.length).toBe(3)
    expect(game.board[0].length).toBe(3)
  })

  test('should allow to make the first move to the player number one', () => {
    game.pickCell([1, 2])

    expect(game.board[1][2]).toBe('X')
    expect(game.players[0]).toBe('X')
    expect(game.players[1]).toBe('O')
  })

  test('should allow to make the second move to the player number one', () => {
    game.pickCell([2, 2])
    game.pickCell([0, 1])

    expect(game.board[2][2]).toBe('X')
    expect(game.board[0][1]).toBe('O')
  })

  test('should allow to select only empty cells to the player', () => {
    game.pickCell([0, 0])
    game.pickCell([2, 0])
    game.pickCell([0, 0])

    expect(game.board[0][0]).toBe('X')
    expect(game.board[2][0]).toBe('O')
    expect(game.numOfMoves).toBe(2)
  })

  test('should win the player number one', () => {
    game.pickCell([0, 0])
    game.pickCell([2, 0])
    game.pickCell([0, 1])
    game.pickCell([2, 1])
    game.pickCell([0, 2])

    const hasEnded = game.hasEnded()

    expect(game.gameResult).toBe('Player One Wins!')
    expect(hasEnded).toBe(true)
  })
})
