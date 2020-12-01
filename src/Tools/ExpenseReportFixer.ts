class ExportReportFixer {
    findNumbersSumTo = (numbers: Array<number>, sumTo: number): [number, number] => {        
        return numbers
            .map((value: number): [number, number] => {
                const sumTo2020 = numbers.filter((secondValue) => value + secondValue === sumTo)                
                return [value, sumTo2020 ? sumTo2020[0] : -1]
            })
            .filter((temp: [number, number]) => {            
                return temp[1] !== undefined && temp[1] !== -1;
            })[0]
    };

    multiplyNumbersSumTo2020 = (numbers: Array<number>): number => {
        const values = this.findNumbersSumTo(numbers, 2020);        

        return values[0] * values[1];
    }
}

export default ExportReportFixer;
