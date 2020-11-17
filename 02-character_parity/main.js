// For symbol '5', the output should be characterParity(symbol) = "odd";
// For symbol '8', the output should be characterParity(symbol) = "even";
// For symbol 'q', the output should be characterParity(symbol) = "not a digit";

function characterParity(str) {
    // one way to do it 
    if(parseInt(str) % 2 == 0) {
        return "even";
    } else if (parseInt(str) % 2 == 1) {
        return "odd"
    } else {
        return "not a digit";
    }

    // another way to do it
    const num = parseInt(str);

    if(isNaN(num)) {
        return num % 2 === 0 ? "even" : "odd";
    }
}



describe('characterParity()', () => {
    it('returns odd for odd numbers', () => {
        // arrange
        const str = "7";

        // act
        const result = characterParity(num);

        // log
        console.log("result for odd number: " + result)

        // assert
        expect(result).toBe("odd");
    });

    it('returns even for even numbers', () => {
        // arrange
        const str = "12";

        // act 
        const result = characterParity(str);

        // log
        console.log("result for even number: " + result);

        // assert
        expect(result).toBe("even");
    });

    it ('returns not a digit when a number is not provided', () => {
        // arrange
        const str = "q";

        // act
        const result = characterParity(str);

       // log 
       console.log("result for when a number is not provided" + result);

        // assert
        expect(result).toBe("not a digit");
    });
})