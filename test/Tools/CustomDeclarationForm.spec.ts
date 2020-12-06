import CustomDeclarationForm from '../../src/Tools/CustomDeclarationForm'

const customDeclarationForm = new CustomDeclarationForm();

test('Test build groups', () => {    
    expect(customDeclarationForm.buildGroups([
        "abc",
        "",
        "a",
        "b",
        "c",
        "",
        "ab",
        "ac",
        "",
        "a",
        "a",
        "a",
        "a",
        "",
        "b"
    ]).length).toBe(5);    
});

test('Test Count Answers in a group', () => {    
    expect(customDeclarationForm.countYesAnswerForAGroup({
        a: 1,
        b: 1,
        c: 1
    })).toBe(3);    
});

test('Test count total yes answer', () => {    
    expect(customDeclarationForm.countTotalYesAnswers([
        "abc",
        "",
        "a",
        "b",
        "c",
        "",
        "ab",
        "ac",
        "",
        "a",
        "a",
        "a",
        "a",
        "",
        "b"
    ])).toBe(11);    
});
