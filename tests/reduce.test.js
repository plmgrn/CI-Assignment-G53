import { describe, expect, it } from "vitest";
import reduce from '../src/reduce.js';

describe('black box testing', () => {
    it('works', () => {
        expect(() => reduce([1,2], (sum,n) => sum + n, 0)).not.toThrow()
    })
})