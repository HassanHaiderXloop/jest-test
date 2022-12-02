const sum = require('./sum');

Test('addNum', ()=> {
    expect(sum(1,2).tobe(3))
}
);

Test('1 and 2 make 3' ,() => {
    const arg1 = 1;
    const arg2 = 2;
    const answer = 3;
    const result = sum(arg1,arg2)
    expect(result).tobe(answer)
}
)