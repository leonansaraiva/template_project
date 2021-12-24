
test('adds 1 + 2 to equal 3', () => {
  expect( 1+ 2).toBe(3);
})

it('with It only', () => {
  expect( 1 + 2).toBe(3);
})

const suite1 = ('with It 1', () => {
  expect( 1 + 2).toBe(3);
})

const suite2 = ('with It 2', () => {
  expect( 1 + 2).toBe(3);
})


describe('with describe ',() => {

  suite1()
  suite2()
  
})