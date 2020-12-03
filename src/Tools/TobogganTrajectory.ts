class TobogganTrajectory {
    countTrees = (rows: Array<string>, position: number, movement: number): number => {
        let counter = 0;
        let index = 0;
        
        for (let i = 1; i < rows.length; i++) {            
            index = this.buildIndex(index, movement, rows[i].length);               
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
