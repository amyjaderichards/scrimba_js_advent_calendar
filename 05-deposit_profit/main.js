// you have deposited a specific amount of dollars into your bank account. each year your
// balance increases at the same growth rate. find out how long it would take for your
// balance to pass a specific threshold with the assumption that you don't make any
// additional deposits 

// for deposit=100, rate=20 and threshold=170, the output should be depositProfit(deposit, rate, threshold)=3

function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let currentAccountValue = deposit;

    while (threshold > currentAccountValue) {
        currentAccountValue += currentAccountValue*(rate/100);
        year++;
    }
    
    return year;
}


describe('depositProfit()', () => {
    it('returns number of years it will take to hit threshold based off of deposit and rate', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;

        // act
        const result = depositProfit(deposit, rate, threshold);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(3);
    })
})
