import sortDataUtil from "../utils/sortData";

const data = [
    {id: 1, name: 'Janet', age: 26},
    {id: 2, name: 'Jane', age: 22},
    {id: 3, name: 'John', age: 29},
    {id: 4, name: 'Ashley', age: 24}
]

describe("sortDataUtil", () => {
    test("returns an array of objects sorted by name in asc order", () => {
        const sortBy = 'name';
        const order = 'asc';
        const result = sortDataUtil(data, sortBy, order);
        const expected = [
            {id: 4, name: 'Ashley', age: 24},
            {id: 2, name: 'Jane', age: 22},
            {id: 1, name: 'Janet', age: 26},
            {id: 3, name: 'John', age: 29}
        ]
        expect(result).toEqual(expected);
    })
    test("returns an array of objects sorted by name in desc order", () => {
        const sortBy = 'name';
        const order = 'desc';
        const result = sortDataUtil(data, sortBy, order);
        const expected = [
            {id: 3, name: 'John', age: 29},
            {id: 1, name: 'Janet', age: 26},
            {id: 2, name: 'Jane', age: 22},
            {id: 4, name: 'Ashley', age: 24}
        ]
        expect(result).toEqual(expected);
    })
    test("returns an array of objects sorted by age in asc order", () => {
        const sortBy = 'age';
        const order = 'asc';
        const result = sortDataUtil(data, sortBy, order);
        const expected = [
            {id: 2, name: 'Jane', age: 22},
            {id: 4, name: 'Ashley', age: 24},
            {id: 1, name: 'Janet', age: 26},
            {id: 3, name: 'John', age: 29}
        ]
        expect(result).toEqual(expected);
    })
    test("returns an array of objects sorted by age in desc order", () => {
        const sortBy = 'age';
        const order = 'desc';
        const result = sortDataUtil(data, sortBy, order);
        const expected = [
            {id: 3, name: 'John', age: 29},
            {id: 1, name: 'Janet', age: 26},
            {id: 4, name: 'Ashley', age: 24},
            {id: 2, name: 'Jane', age: 22}
        ]
        expect(result).toEqual(expected);
    })
    test("returns an array of objects sorted by id in asc order", () => {
        const sortBy = 'id';
        const order = 'asc';
        const result = sortDataUtil(data, sortBy, order);
        const expected = [
            {id: 1, name: 'Janet', age: 26},
            {id: 2, name: 'Jane', age: 22},
            {id: 3, name: 'John', age: 29},
            {id: 4, name: 'Ashley', age: 24}
        ]
        expect(result).toEqual(expected);
    })
    test("returns an array of objects sorted by id in desc order", () => {
        const sortBy = 'id';
        const order = 'desc';
        const result = sortDataUtil(data, sortBy, order);
        const expected = [
            {id: 4, name: 'Ashley', age: 24},
            {id: 3, name: 'John', age: 29},
            {id: 2, name: 'Jane', age: 22},
            {id: 1, name: 'Janet', age: 26}
        ]
        expect(result).toEqual(expected);
    })
    test("does not mutate the original array", () => {
        const sortBy = 'id';
        const order = 'desc';
        const result = sortDataUtil(data, sortBy, order);
        expect(result).not.toBe(data);
    })
    test("returns an empty array if data is empty", () => {
        const sortBy = 'id';
        const order = 'desc';
        const result = sortDataUtil([], sortBy, order);
        expect(result).toEqual([]);
    })
    test("returns new array", () => {
        const sortBy = 'id';
        const order = 'desc';
        const result = sortDataUtil(data, sortBy, order);
        expect(result).not.toBe(data);
    })
})