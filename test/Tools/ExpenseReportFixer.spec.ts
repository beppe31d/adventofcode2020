import ExpenseReportFixer from '../../src/Tools/ExpenseReportFixer'

const expenseReportFixer = new ExpenseReportFixer();

test('Should find two numbers sum to 2020', () => {
    let result = expenseReportFixer.findNumbersSumTo([
        1721,
        979,
        366,
        299,
        675,
        1456
    ], 2020)[0];
    expect(result[0]).toBe(1721);
    expect(result[1]).toBe(299);
});

test('Should find three numbers sum to 2020', () => {
    let result = expenseReportFixer.findThreeNumbersSumTo([
        1721,
        979,
        366,
        299,
        675,
        1456
    ], 2020)[0];
    expect(result[0]).toBe(979);
    expect(result[1]).toBe(366);
    expect(result[2]).toBe(675);
});
