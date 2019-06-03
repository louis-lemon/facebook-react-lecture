const stats = require('./stats');

describe('stats', () => {
    it('gets maximum value', () => {
        expect(stats.max([1, 2, 3, 4])).toBe(4);
    });

    it('gets mininum value', () => {
        expect(stats.min([1, 2, 3, 4])).toBe(1);
    });

    it('gets average value', () => {
        expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
    });

    describe('median', () => {
        it('sorts the array', () => {
            expect(stats.sort([5, 2, 3, 4, 1])).toEqual([1, 2, 3, 4, 5]); // array, object의 경우, toEqual을 사용해야한다. array 내용이 같다고 같은 참조를 하는게 아니니까.
        });

        it('gets the median for odd length', () => {
            expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
        });

        it('gets the median for even length', () => {
            expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
        });
    });

    describe('mode(최빈값)', () => {
        it('has one mode', () => {
            expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
        });

        it('has no mode', () => {
            expect(stats.mode([1, 2, 3])).toBe(null);
        });

        it('has multiple mode', () => {
            expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
        });
    });
});