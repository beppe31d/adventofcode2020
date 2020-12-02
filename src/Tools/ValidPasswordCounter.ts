import PasswordSplitter from './PasswordSplitter'
import PasswordValidator from './PasswordValidator'

export default (passwords: Array<string>): number => {
    return passwords.filter((password: string) => {
        return PasswordValidator(PasswordSplitter(password));
    }).length
}
