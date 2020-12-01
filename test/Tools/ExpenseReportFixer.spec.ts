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
    ], 2020);
    expect(result[0]).toBe(1721);
    expect(result[1]).toBe(299);
});