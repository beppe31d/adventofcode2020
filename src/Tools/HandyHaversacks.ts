type Haversacks = Array<{
    luggage: string;
    quantity: number;
}>;

type Luggage = Map<string, Haversacks>;

class HandyHaversacks {
    countBagsWithShinyGold = (inputs: Array<string>): number => {
        return this.countBagsWith("shiny gold", this.buildLuggages(inputs)).length;
    }

    countBagsWith = (bagToSearch: string, luggage: Luggage): Array<string> => {
        let bags: Array<string> = [];
        luggage
            .forEach((haversacks: Haversacks, key: string) => {                
                if (haversacks
                    .filter((haversack) => {
                        return haversack.luggage === bagToSearch;
                    })
                    .length > 0) {
                    bags = bags.concat(key, this.countBagsWith(key, luggage));
                }
            })        

        return bags.filter((value, index, self) => self.indexOf(value) === index);
    }

    buildLuggages = (inputs: Array<string>): Luggage => {
        const luggage: Luggage = new Map
        inputs.forEach((input: string) => {
            const result = this.buildLuggage(input);
            luggage.set(result[0], result[1]);
        });

        return luggage;
    }

    buildLuggage = (input: string): [string, Haversacks] => {
        const firstSplit = input.split(" contain ");    
        const index: string = firstSplit[0].replace("bags", "").replace("bag", "").trim();
        const luggages: Haversacks = []    
        firstSplit[1]
            .replace(".", "")
            .split(",")
            .forEach((secondSplit: string) => {
                if (secondSplit === "no other bags") {
                    return;
                }                
                const thirdSplit = secondSplit.trim().split(" ");
                const quantityString = thirdSplit.shift();
                thirdSplit.pop();
                const quantity = parseInt(quantityString !== undefined ? quantityString : "0");
                const luggage = thirdSplit.join(" ");
                luggages.push({
                    luggage,
                    quantity
                })
            });            
        return [index, luggages];
    }
}

export default HandyHaversacks;