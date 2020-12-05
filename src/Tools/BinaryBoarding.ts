class BinaryBoarding {
    findMySeat = (boardingPasses: Array<string>): number => {
        const seats = boardingPasses
            .map(this.buildSeatId)
            .sort((n1,n2) => n1 - n2);

        for (let i = 0; i < seats.length; i++) {
            if (seats[i + 1] !== seats[i] + 1) {
                return seats[i] + 1;
            }
        }    

        return -1;
    }

    highestSeatId = (boardingPasses: Array<string>): number => {
        return boardingPasses
            .map(this.buildSeatId)
            .reduce((prev, cur) => Math.max(prev, cur))
    }

    buildSeatId = (input: string): number => {
        return this.buildRow(input.substr(0, 7)) * 8 + this.buildColumn(input.substr(7, 3));
    }

    buildRow = (input: string): number => {        
        return parseInt(input.replace(/F/g, "0").replace(/B/g, "1"), 2);
    }

    buildColumn = (input: string): number => {        
        return parseInt(input.replace(/L/g, "0").replace(/R/g, "1"), 2);
    }
}

export default BinaryBoarding;