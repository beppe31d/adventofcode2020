class TobogganTrajectory {
    countTreesMultipleSlopes = (rows: Array<string>, slopes: Array<[number, number]>): number => {
        return slopes
            .map((slope: [number, number]): number => {
                return this.countTrees(rows, 0, slope[0], slope[1]);
            })
            .reduce((prev: number, cur: number): number => {
                return prev * cur;
            })
        ;
    }

    countTrees = (rows: Array<string>, position: number, movementRight: number, movementDown: number): number => {
        let counter = 0;
        let index = 0;
        
        for (let i = movementDown; i < rows.length; i += movementDown) {            
            index = this.buildIndex(index, movementRight, rows[i].length);               
            counter += this.treeEncountered(rows[i][index]) ? 1 : 0;
        }

        return counter;
    }

    private buildIndex = (position: number, increment: number, length: number): number => {
        return (position + increment) % length;        
    }

    private treeEncountered = (cell: string): boolean => {
        return cell === "#";
    }
}

export default TobogganTrajectory;
