function centuryFromYear(year) {
    // 1. find the baseline year / century
    const century = year / 100;

    // 2. handle edge case
    if (year % 100 === 0) {
        return century;
    }

    // 3. return all other case
    return Math.floor(century) + 1;
}



describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;

        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(20);
    });

    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;

        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(17);
    });
});