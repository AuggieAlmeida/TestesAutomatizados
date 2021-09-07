function sum() {
    return Object.values(arguments).reduce(
        (memo, current) => memo + current, 0)
}

module.exports = sum