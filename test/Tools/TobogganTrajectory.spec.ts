import TobogganTrajectory from '../../src/Tools/TobogganTrajectory'

const tobogganTrajectory = new TobogganTrajectory();

test('Test siingle slope', () => {
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
    ], 0, 3, 1)).toBe(7);
});

test('Test multiple slopes', () => {
    expect(tobogganTrajectory.countTreesMultipleSlopes([
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
    ], [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ])).toBe(336);
});
