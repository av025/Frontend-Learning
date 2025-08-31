test("truthy value", () =>{
    var name = "Aayush"; 
    var n = null; 
    expect(n).toBeNull(); 
    expect(name).not.toBeNull();

    expect(name).toBeTruthy();
    expect(n).toBeFalsy();

    var numOne = 100; 
    var numTwo = -20; 

    expect(numOne).toBeGreaterThan(10);
    expect(numTwo).toBeLessThan(0);
})