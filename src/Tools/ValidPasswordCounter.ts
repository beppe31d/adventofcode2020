import Password from '../Model/Password';
import PasswordSplitter from './PasswordSplitter'

export default (passwords: Array<string>, validator: (password: Password) => boolean): number => {
    return passwords.filter((password: string) => {
        return validator(PasswordSplitter(password));
    }).length
}
