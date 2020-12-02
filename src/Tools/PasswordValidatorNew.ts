import Password from "../Model/Password";

export default (password: Password): boolean => {
    return (
        password.password.charAt(password.minOccurs - 1) === password.charToSearch ||
        password.password.charAt(password.maxOccurs - 1) === password.charToSearch
        ) &&
        false === (
            password.password.charAt(password.minOccurs - 1) === password.charToSearch &&
            password.password.charAt(password.maxOccurs - 1) === password.charToSearch
        ) 
}
