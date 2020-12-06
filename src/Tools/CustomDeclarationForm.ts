type Answers = {
    [P in string]: number;
}

class CustomDeclarationForm {
    countTotalYesAnswers = (rows: Array<string>): number => {
        return this.buildGroups(rows)
            .map(this.countYesAnswerForAGroup)
            .reduce((prev, cur) => prev + cur);
    }

    buildGroups = (rows: Array<string>): Array<Answers> => {
        const groups: Array<Answers> = [];
        let group: Answers = {};
        rows.forEach((row: string, index: number) => {
            if (row === "") {
                groups.push(group);
                group = {}
                return;
            }
            row.split("").forEach((answer: string) => {
                group[answer] = 1;
            })

            if (index === rows.length - 1) {
                groups.push(group);
            }
        })

        return groups;
    }

    countYesAnswerForAGroup = (answers: Answers): number => {
        return Object.keys(answers).length;
    }
}

export default CustomDeclarationForm
