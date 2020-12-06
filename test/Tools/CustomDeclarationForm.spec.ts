import CustomDeclarationForm from '../../src/Tools/CustomDeclarationForm'

const customDeclarationForm = new CustomDeclarationForm();

test('Test build groups anyone', () => {    
    expect(customDeclarationForm.buildGroupsAnyone([
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

test('Test count at least one yes answers in a group', () => {    
    expect(customDeclarationForm.countYesAnswerForAGroupAnyone({
        a: 1,
        b: 1,
        c: 1
    })).toBe(3);    
});

test('Test count total at least one yes answer', () => {    
    expect(customDeclarationForm.countTotalYesAnswersAnyone([
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

test('Test build groups everyone', () => {    
    const groups = customDeclarationForm.buildGroupsEveryone([
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
    ]);
    expect(groups.length).toBe(5);    
    expect(groups[1].length).toBe(3);    
});

test('Test count total everyone answer yes ', () => {    
    expect(customDeclarationForm.countTotalYesAnswersEveryone([
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
    ])).toBe(6);    
});
