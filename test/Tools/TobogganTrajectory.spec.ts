import TobogganTrajectory from '../../src/Tools/TobogganTrajectory'

const tobogganTrajectory = new TobogganTrajectory();

test('Test full case', () => {
    expect(tobogganTrajectory.countTrees([
        "..##.......",
        "#...#...#..",
        ".#....#..#.",
        "..#.#...#.#",
        ".#...##..#.",
        "..#.##.....",
        ".#.#.#....#",
        ".#........#",
        "#.##...#...",
        "#...##....#",
        ".#..#...#.#"
    ], 0, 3)).toBe(7);
});
