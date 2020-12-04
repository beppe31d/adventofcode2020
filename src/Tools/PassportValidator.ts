type Passport = {
    byr: string;
    iyr: string;
    eyr: string;
    hgt: string;
    hcl: string;
    ecl: string;
    pid: string;
    cid?: string;
}

type Temp = {
    [prop: string]: string;
}

class PassportValidator {
    countValidPassport = (rows: Array<string>): number => {
        return this.buildPassports(rows).length
    }

    buildPassports = (rows: Array<string>): Array<Temp> => {
        let passports: Array<Temp> = [];
        let currentObj: Temp = {}
        rows.forEach((row: string) => {
           if (row === "") {
               const passport = this.validatePassport(currentObj);
               if (passport !== null) {
                 passports.push(currentObj);                 
               }
               currentObj = {}
           }
           const fields = row.split(" ");
           fields.forEach((field: string) => {
               if (field === "") {
                   return;
               } 
               const keyVal = field.split(":");            
               currentObj[keyVal[0]] = keyVal[1];
           });
        });

        return passports;
    }

    validatePassport = (temp: Temp): Passport|null => {
        const passport: Passport = temp as Passport;            
        if (passport.byr !== undefined && 
            passport.iyr !== undefined &&
            passport.eyr !== undefined &&
            passport.hgt !== undefined &&
            passport.hcl !== undefined &&
            passport.ecl !== undefined &&
            passport.pid !== undefined
            ) {   
            return passport             
        }

        return null;
    }
}

export default PassportValidator