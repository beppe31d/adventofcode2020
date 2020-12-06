type Answers = {
    [P in string]: number;
}

class CustomDeclarationForm {
    countTotalYesAnswersAnyone = (rows: Array<string>): number => {
        return this.buildGroupsAnyone(rows)
            .map(this.countYesAnswerForAGroupAnyone)
            .reduce((prev, cur) => prev + cur);
    }

    countTotalYesAnswersEveryone = (rows: Array<string>): number => {
        return this.buildGroupsEveryone(rows)
            .map(this.countYesAnswerForAGroupEveryone)
            .reduce((prev, cur) => prev + cur);
    }

    buildGroupsAnyone = (rows: Array<string>): Array<Answers> => {
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

    countYesAnswerForAGroupAnyone = (answers: Answers): number => {
        return Object.keys(answers).length;
    }

    buildGroupsEveryone = (rows: Array<string>): Array<Array<Answers>> => {
        const groups: Array<Array<Answers>> = [];
        let group: Array<Answers> = [];
        rows.forEach((row: string, index: number) => {
            if (row === "") {
                groups.push(group);
                group = []
                return;
            }

            const answers: Answers = {}
            row.split("").forEach((answer: string) => {
                answers[answer] = 1;
            })
            group.push(answers)

            if (index === rows.length - 1) {
                groups.push(group);
            }
        })

        return groups;
    }

    countYesAnswerForAGroupEveryone = (group: Array<Answers>): number => {
        return Object.keys(
            group.reduce((o1, o2) => { 
                const keys = Object.keys(o1).filter({}.hasOwnProperty.bind(o2))
                const answers: Answers = {}
                keys.forEach((key: string) => {
                    answers[key] = 1;
                });

                return answers;
            })
        ).length;
    }
}

export default CustomDeclarationForm
