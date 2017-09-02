function TennisGame(){
  this.reset = () =>{

  }
  this.echo = () =>{
    return 'LOVE - LOVE'
  }
}

test('Echo "LOVE  - LOVE" when press reset button',() =>{
  //Arrage
  let app = new TennisGame()
  //Act
  app.reset();
  let result = app.echo()

  //Assert
  expect(result).toBe('LOVE - LOVE')
})
