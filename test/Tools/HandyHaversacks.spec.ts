import HandyHaversacks from '../../src/Tools/HandyHaversacks'

const handyHaversacks = new HandyHaversacks();

test('Test build handy haversack object', () => {    
    const result = handyHaversacks.buildLuggage("light red bags contain 1 bright white bag, 2 muted yellow bags.")    
    expect(result[0]).toBe("light red");    
    expect(result[1][0].luggage).toBe("bright white");    
    expect(result[1][0].quantity).toBe(1);    
    expect(result[1][1].luggage).toBe("muted yellow");    
    expect(result[1][1].quantity).toBe(2);    
});

test('Test build empty handy haversack object', () => {    
    const result = handyHaversacks.buildLuggage("faded blue bags contain no other bags.")    
    expect(result[1].length).toBe(0);    
});

test('Test Count shiny gold bags', () => {    
    expect(handyHaversacks.countBagsWithShinyGold([
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
        "bright white bags contain 1 shiny gold bag.",
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
        "faded blue bags contain no other bags.",
        "dotted black bags contain no other bags."
    ])).toBe(4);    
});
