class ExportReportFixer {
    findNumbersSumTo = (numbers: Array<number>, sumTo: number): Array<[number, number]> => {        
        return numbers
            .map((value: number): [number, number] => {
                const sumTo2020 = numbers.filter((secondValue) => value + secondValue === sumTo)                
                return [value, sumTo2020 ? sumTo2020[0] : -1]
            })
            .filter((temp: [number, number]) => {            
                return temp[1] !== undefined && temp[1] !== -1;
            })
    };

    multiplyNumbersSumTo2020 = (numbers: Array<number>): number => {
        const values = this.findNumbersSumTo(numbers, 2020)[0];        

        return values[0] * values[1];
    }

    findThreeNumbersSumTo = (numbers: Array<number>, sumTo: number): Array<number[]> => {
        return numbers
            .map((value: number) => {
                const otherValues: Array<[number, number]> = this.findNumbersSumTo(numbers, 2020 - value);

                if (otherValues.length > 0) {                
                    return [value, otherValues[0][0], otherValues[0][1]]
                }

                return [value, -1, -1]
            })
            .filter((temp: number[]) => {
                return temp[1] !== undefined && temp[1] !== -1;
            })
    }

    multiplyThreeNumbersSumTo2020 = (numbers: Array<number>): number => {
        const values = this.findThreeNumbersSumTo(numbers, 2020)[0];        

        return values[0] * values[1] * values[2];
    }
}

export default ExportReportFixer;
