describe('SortingAlgorithm', () => {
    it('should be sorted into [1, 2, 3, 4] when [3, 2, 4, 1] is passed in', () => {
        const array = [3, 2, 4, 1];
        const sortedArray = sort(array);
        expect(sortedArray).toEqual([1, 2, 3, 4]);
    });
    it('should remain the same when a sorted array is passed in', () => {
        const array = [1, 2, 3, 4, 5]
        const sortedArray = sort(array);
        expect(sortedArray).toEqual(array);
    })
    it('should be sorted into [1, 2, 3, 4, 5, 6, 7] when [4, 6, 1, 3, 2, 7, 5] is passed in', () => {
        const array = [4, 6, 1, 3, 2, 7, 5];
        const sortedArray = sort(array);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7]);
    })
    it('should sort an array of 100 items', () => {
        let array = Array.from({ length: 100 }, () =>
            Math.floor(Math.random() * 100)
        );
        let sortedArray = [...array].sort((a, b) => a - b);
        let result = sort(array);
        for (let i = 0; i < array.length; i++) {
            expect(result[i]).toEqual(sortedArray[i])
        }
    })
})