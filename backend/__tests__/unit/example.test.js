//Testando Função Range
const range =  require('./range')

// test('Passando Um Parametro', () => {
//   expect(range(5)).toEqual([1, 2, 3, 4, 5,]);
// })

it('Passando dois parametro, com primeiro menor que o sengundo', () => {
   expect(range(5)).toEqual([1, 2, 3, 4, 5,]);
})

it('Passando dois parametro, com primeiro menor que o sengundo', () => {
  expect(range(6, 11)).toEqual([6, 7, 8, 9, 10, 11]);
})

it('Passando 3 parametros, com primeiro menor que o segundo e o passo', () => {
  expect(range(10, 19, 2)).toEqual([10, 12, 14, 16,18]);

})

it('Passando dois parametro, com primeiro maior que o sengundo', () => {
  expect(range(6, 2)).toEqual([6, 5, 4 ,3, 2]);
})


it('Passando 3 parametros, com primeiro maior que o segundo e o passo', () => {
  expect(range(8, -3, 4)).toEqual([8, 4, 0]);
})
