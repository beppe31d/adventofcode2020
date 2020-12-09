export default <A>(value: A, index: number, self: Array<A>): boolean => {
    return self.indexOf(value) === index;
}
