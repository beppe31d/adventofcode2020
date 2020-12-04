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

    countValidPassportWithFilters = (rows: Array<string>): number => {
        return this.buildPassports(rows)
            .filter(this.validatePassportFields)
            .length
    }

    private buildPassports = (rows: Array<string>): Array<Passport> => {
        let passports: Array<Passport> = [];
        let currentObj: Temp = {}
        rows.forEach((row: string, index: number) => {
           if (row === "") {               
               const passport = this.validatePassport(currentObj);
               if (passport !== null) {
                 passports.push(passport);                 
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

           if (index === rows.length - 1) {
                const passport = this.validatePassport(currentObj);
                if (passport !== null) {
                passports.push(passport);                 
                }
           }
        });

        return passports;
    }

    private validatePassport = (temp: Temp): Passport|null => {
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

    private validatePassportFields = (passport: Passport): boolean => {
        return this.validateByr(parseInt(passport.byr)) &&
            this.validateIyr(parseInt(passport.iyr)) &&
            this.validateEyr(parseInt(passport.eyr)) &&
            this.validateHeight(passport.hgt) &&
            this.validateHairColor(passport.hcl) &&
            this.validateEyeColor(passport.ecl) &&
            this.validatePid(passport.pid)
    }

    private validateByr = (byr: number): boolean => {
        return byr >= 1920 && byr <= 2002;
    }

    private validateIyr = (iyr: number): boolean => {
        return iyr >= 2010 && iyr <= 2020;
    }

    private validateEyr = (eyr: number): boolean => {
        return eyr >= 2020 && eyr <= 2030;
    }

    validateHeight = (hgt: string): boolean => {
        const unitMeasure = hgt.substr(-2);
        const height = parseInt(hgt.substr(0, hgt.length -2));    
        if (unitMeasure === "in") {
            return height >= 59 && height <= 76;
        }
        if (unitMeasure === "cm") {
            return height >= 150 && height <= 193;
        }

        return false;
    }

    validateHairColor = (hcl: string): boolean => {
        let regexpNumber = /^#[0-9A-Fa-f]{6}$/    
        
        return regexpNumber.test(hcl);
    }

    validateEyeColor = (ecl: string): boolean => {
        const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

        return colors.indexOf(ecl) >= 0;
    }

    validatePid = (pid: string): boolean => {
        let regexpNumber = /^[0-9]{9}$/
        
        return regexpNumber.test(pid);
    }
}

export default PassportValidator