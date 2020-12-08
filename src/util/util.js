const MyMonad = value => ({
    // <... insert arbitrary chain and of here ...>
    map(f) {
        return this.chain(a => this.constructor.of(f(a)));
    }
});