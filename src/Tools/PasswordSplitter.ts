import Password from "../Model/Password";

export default (row: string): Password =>  {
    const firstSplit = row.split(':');
    const secondSplit = firstSplit[0].split(" ");
    const thirdSplit = secondSplit[0].split("-");

    return {
        password: firstSplit[1].trim(),
        charToSearch: secondSplit[1],
        minOccurs: parseInt(thirdSplit[0]),
        maxOccurs: parseInt(thirdSplit[1])
    }
}
