const mathOperations = require("../calculator"); 

//* We state that describe method was collection of similar tests 
describe("Calculator Tests", () => {
    test("Adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1,2)).toBe(3);
        expect(mathOperations.sum(1, 4)).not.toBe(6);
    }); 

    test("Subtract testing", () => {
        let result  = mathOperations.difference(10,2)
        expect(result).toBe(8); 
        expect(mathOperations.difference(4, 2)).not.toBe(1)
    });
})