export default class Calculations
{
    static calculatePercentageStandardDeviationOfOneDimensionalArray(array: number[]): number
    {
        const mean = array.reduce((acc, val) => acc + val, 0) / array.length;
        const squaredDifferences = array.map(value => Math.pow(value - mean, 2));
        const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / array.length;
        const stdDeviation = Math.sqrt(variance);
        const percentageSTD = Math.abs((stdDeviation / mean) * 100); // Take absolute value
        return percentageSTD;
    }

    static calculatePercentageStandardDeviationOfTwoDimensionalArray(array: number[][]): number
    {
        const mean = array.reduce((acc, val) => acc + val.reduce((acc2, val2) => acc2 + val2, 0), 0) / array.length;
        const squaredDifferences = array.map(value => value.map(val => Math.pow(val - mean, 2)));
        const variance = squaredDifferences.reduce((acc, val) => acc + val.reduce((acc2, val2) => acc2 + val2, 0), 0) / array.length;
        const stdDeviation = Math.sqrt(variance);
        const percentageSTD = Math.abs((stdDeviation / mean) * 100); // Take absolute value
        return percentageSTD;
    }

    static zeroCrossingPercentage(numbers: number[]): number
    {
        if (numbers.length < 2)
        {
            return 0;
        }
        let count = 0;
        for (let i = 1; i < numbers.length; i++)
        {
            if ((numbers[i] >= 0 && numbers[i - 1] < 0) || (numbers[i] < 0 && numbers[i - 1] >= 0))
            {
                count++;
            }
        }
        return (count / numbers.length) * 100;
    }

    static calculateAverageOfTwoDimensionalArray(array: number[][]): number
    {
        return array.reduce((acc, val) => acc + val.reduce((acc2, val2) => acc2 + val2, 0), 0) / array.length;
    }

    static getMostFrequentValueAtEachSubarray(array: number[][]): number[]
    {
        return array.map(subArray =>
        {
            const counts = new Map<number, number>();
            subArray.forEach(value =>
            {
                if (counts.has(value))
                {
                    counts.set(value, counts.get(value) + 1);
                }
                else
                {
                    counts.set(value, 1);
                }
            });
            let mostFrequentValue = 0;
            let highestCount = 0;
            counts.forEach((count, value) =>
            {
                if (count > highestCount)
                {
                    highestCount = count;
                    mostFrequentValue = value;
                }
            });
            return mostFrequentValue;
        });
    }

    static getAvreageValueOfHighestPercentageOfEachSubarray(array: number[][], percentage: number): number[]
    {
        return array.map(subArray =>
        {
            const sorted = subArray.sort((a, b) => b - a);
            const topPercentage = sorted.slice(0, Math.floor(subArray.length * (percentage / 100)));
            return topPercentage.reduce((acc, val) => acc + val, 0) / topPercentage.length;
        });
    }

    static getAverageValueOfEachSubarryAfterRemoveingOutliers(array: number[][]): number[]
    {
        return array.map(subArray =>
        {
            const sorted = subArray.sort((a, b) => a - b);
            const lowerQuartile = sorted[Math.floor(sorted.length * 0.25)];
            const upperQuartile = sorted[Math.floor(sorted.length * 0.75)];
            const iqr = upperQuartile - lowerQuartile;
            const lowerBound = lowerQuartile - (1.5 * iqr);
            const upperBound = upperQuartile + (1.5 * iqr);
            const filtered = subArray.filter(value => value >= lowerBound && value <= upperBound);
            return filtered.reduce((acc, val) => acc + val, 0) / filtered.length;
        });
    }

    static getAverageValueOfEachSubarryAfterTrimmingPercentageHighestAndLowestValues(array: number[][], percentage: number): number[]
    {
        return array.map(subArray =>
        {
            const sorted = subArray.sort((a, b) => a - b);
            const topPercentage = sorted.slice(0, Math.floor(subArray.length * (percentage / 100)));
            const bottomPercentage = sorted.slice(Math.floor(subArray.length * (1 - (percentage / 100))));
            const filtered = subArray.filter(value => !topPercentage.includes(value) && !bottomPercentage.includes(value));
            return filtered.reduce((acc, val) => acc + val, 0) / filtered.length;
        });
    }

}