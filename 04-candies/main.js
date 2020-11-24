// n children have got m pieces of candy. they want to eat as much candy as they can, but each child
// must eat exactly the same amount of candy as any other child. Determine how many pieces of candy 
// will be eaten by all the children together. individual pieces of candy cannot be split.

// for n=3 and m=10, the output should be candies(n, m) = 9
// each child will eat 3 pieces so the answer is 9


function candies(children, candy) {
    const candyPerChild = Math.floor(candy / children);

    return candyPerChild * children;
    
}


describe('candies()', () => {
    it('returns amount of total candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;

        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(9);
    })
})