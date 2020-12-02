import PasswordSplitter from '../../src/Tools/PasswordSplitter'

test('Test valid passwords', () => {
    expect(PasswordSplitter("1-3 a: abcde")).toStrictEqual({
        password: "abcde", 
        charToSearch:"a", 
        minOccurs: 1,
        maxOccurs: 3
    });
});
