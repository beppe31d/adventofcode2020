import Password from "../Model/Password";

export default (password: Password): boolean => {
    const occurencies = (password.password.match(new RegExp(password.charToSearch, "g")) || []).length;
    
    return occurencies >= password.minOccurs && occurencies <= password.maxOccurs;
}
