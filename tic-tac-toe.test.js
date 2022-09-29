describe('Tic-Tac-Toe Game', () => {
  test('should start the game with two players', () => {
    const game = new Game()
    game.start()

    expect(game.players.length).toBe(2)
    expect(game.board.length).toBe(3)
    expect(game.board[0].length).toBe(3)
  })
})
