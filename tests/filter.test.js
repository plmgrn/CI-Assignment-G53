import { describe, expect, it } from "vitest";
import filter from '../src/filter.js'

describe('does as the documentation describes', () => {

    it('Iterates over elements of `array`, returning an array of all elements `predicate` returns truthy for.', () => {
        expect(filter([1,2,3,4], (value) => value % 2 === 0)).toEqual([2,4])
    })

    it('is invoked with three arguments: (value, index, array).', () => {
        const values = [1, 2, 3]
        const calls = []

        const result = filter(values, (value, index, array) => {
            calls.push([value, index, array])
            return index === 1
        })

        expect(result).toEqual([2])
        expect(calls).toEqual([
            [1, 0, values],
            [2, 1, values],
            [3, 2, values],
        ])
    })

    it('this method returns a new array', () => {
        const original_array = [6,7]

        const return_array = filter(original_array, (value) => value === value)
        expect(return_array).not.toBe(original_array)
    })


})