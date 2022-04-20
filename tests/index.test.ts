import {randomName } from "../lib/cjs/random-name"

test('randomName function', () => { 
    expect(['A', 'B', 'C']).toContain(randomName())
})