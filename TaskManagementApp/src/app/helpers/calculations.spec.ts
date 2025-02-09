import Calculations from "./calculations";

// Please complete the following unit tests for the Calculations class:

describe('Calculations', () =>
{
    it('should calculate the percentage standard deviation of a one-dimensional array', () =>
    {
        // TODO: Implement test
        const array = [1, 0, 1, 1, 1];
        const result = Calculations.calculatePercentageStandardDeviationOfOneDimensionalArray(array);
        console.log("###################Test result for one-dimensional",result);
        expect(result).toBeGreaterThan(0);

    });

    
    it('should calculate the zero crossing percentage of an array', () =>
    {
        // TODO: Implement test
        const array = [-1, 2, -3, 4, -5];
        const result = Calculations.zeroCrossingPercentage(array);
        console.log("###################Test result for zero crossing percentage of an array",result);
        expect(result).toBeGreaterThan(0);

    });

    it('should calculate the average of a two-dimensional array', () =>
    {
        // TODO: Implement test
        const array = [[1, 2], [3, 4]];
        const result = Calculations.calculateAverageOfTwoDimensionalArray(array);
        console.log("###################Test result for average of a two-dimensional array",result);
        expect(result).toBe(2.5);
        expect(typeof result).toBe('number');
    });

    it('should get the most frequent value at each subarray', () =>
    {
        // TODO: Implement test
        const array = [[1, 1, 2], [3, 3, 4]];
        const result = Calculations.getMostFrequentValueAtEachSubarray(array);
        console.log("###################Test result for most frequent value at each subarray",result);
        expect(result).toEqual([1, 3]);
    });

    /*it('should get the average value of each subarray after trimming percentage highest and lowest values', () =>
    {
        // TODO: Implement test

    });*/
});