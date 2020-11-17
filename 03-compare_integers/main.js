// Compare two integers as strings

// For a="12" and b="13", the output should be compareIntegers(a, b) = "less";
// For a="875" and b="799", the output should be compareIntegers(a, b) = "greater";
// For a="1000" amd b="1000", the output should be compareIntegers(a, b) = "equal"

function compareIntegers(a, b) {
    const num_a = parseInt(a);
    const num_b = parseInt(b);

    if (num_a > num_b) {
        return "greater";
    } 
    
    if (num_a < num_b) {
        return "less";
    } 

     return "equal";
}


describe('compareIntegers()', () => {
    it('should return less if a is less than b') {
        // arrange
        const a = 50;
        const b = 100;

        // act
        const result = compareIntegers(a, b);

        // console
        console.log("result for a < b: " + result);

        // assert
        expect(result).toBe("less");
    }

    it('should return greater if a is greater than b') {
        // arrange
        const a = 100;
        const b = 10;

        // act
        const result = compareIntegers(a, b);

        // console
        console.log("result for a > b: " + result)

        // assert
        expect(result).toBe("greater");
    }

    it('should return equal if a is equal to b') {
        // arrange
        const a, b = 25;

        // act
        const result = compareIntegers(a, b);

        // console
        console.log("result for a = b: " + result);

        // assert
        expect(result).toBe("equal");
    }
})