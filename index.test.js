const sum = require('./')


const expect = (result, expected) => ({
    toBe: (expected) => {
        if (result === expected) {
            console.log('\x1b[37m', 'Teste passou!')
        } else {
            console.log('\x1b[31m', 'Teste falhou!')
        }
    },
    notToBe: (expected) => {
        if (result !== expected) {
            console.log('\x1b[32m', 'Teste passou!')
        } else {
            console.log('\x1b[31m', 'Teste falhou!')
        }
    },
})

const it = (description, cb) => {
    console.log('\x1b[33m','---', description, '\x1b[37m')
    cb()
}

it('Should sum 2 values', () => {
    expect(sum(10, 10)).toBe(20)
})

it('Should sum 3 values', () => {
    expect(sum(20, 20, 10)).notToBe(30)    
})

it('Should sum 5 values', () => {
    expect(sum(20, 20, 40, 40)).notToBe(100)    
})

console.log('\x1b[35m', 'Fim da execução\n\n', '\x1b[37m') 