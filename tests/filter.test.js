import { describe, expect, it } from "vitest";
import filter from '../src/filter.js'

//test helpers for filter.js
const DEFAULT_PRED = (x) => {x === x}




//testing against documentation / blackboxing
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

        //filter so that the output array is the same as the original
        const return_array = filter(original_array, (value) => value === value)

        //expect the values of the array to be same
        expect(return_array).toEqual(original_array)

        //expect the array objects to be different
        expect(return_array).not.toBe(original_array)
    })
})

describe('whitebox testing', () =>{

    //@bug this returns array in an array, when supposed to return empty array
    it('returns an empty array when input is an empty array', ()=> {
        expect(filter([],DEFAULT_PRED)).toEqual([])
    })


})

describe('positive testing', () =>{

    it('returns the correct array', () => {
        //TODO
    })

    it('handles predicate logic correctly', () =>{
        //TODO
    })

    //TODO more tests that just run the filter function normally

})

describe('handles equivalent inputs equally', () =>{
    it('functions the same on equivalent input arrays', () =>{
        const array1 = [1,2,3]
        const array2 = [1,2,3]
        expect(array1).toEqual(array2) //gate the testing behind equivalency

        const pred1 = (x) => {x === x-1}
        const result1 = filter(array1,pred1)
        const result2 = filter(array2,pred1)
        expect(result1).toEqual(result2)
    })
})

describe('negative testing', () =>{

    it('doesnt throw on empty list', () => {
        expect(() => filter([],DEFAULT_PRED)).not.toThrow()
    })

    it('throws on empty predicate', () => {
        expect(() => filter([1,2,3],)).toThrow('predicate is not a function')
    })
})

describe('mutation testing', () => {
    it('doesnt touch the original list with default predicate', () => {
        let original_list = [1,6,7,9]
        let input_list = original_list
        const output_list = filter(input_list,DEFAULT_PRED)
        expect(input_list).toEqual(original_list)
    })

    it('doesnt touch the original list with actual predicate', () => {
        let original_list = [1,6,7,9]
        let input_list = original_list
        const output_list = filter(input_list,(x) => x % 2 !== 0)
        expect(input_list).toEqual(original_list)
    })

    it('doesnt touch the original simple predicate', () => {
        let original_predicate = (x) => {x === x}
        let input_predicate = original_predicate
        let input_list = [1,6,7,9]
        const output_list = filter(input_list,input_predicate)
        expect(input_predicate).toEqual(original_predicate)
    })

    it('doesnt touch the original function predicate', () => {
        let original_predicate = (x) => {x % 2 !== 0}
        let input_predicate = original_predicate
        let input_list = [1,6,7,9]
        const output_list = filter(input_list,input_predicate)
        expect(input_predicate).toEqual(original_predicate)
    })
})