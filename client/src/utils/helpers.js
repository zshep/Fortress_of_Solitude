const parseError = (error) => {
    const removeThese = [
        "ValidationError:",
        "email:",
        "password:",
        "username:",
        "Error:"
    ]
    const split = error.split(" ")
    const returnString = split.filter((el) => {
        return !removeThese.includes(el)
    })
    return returnString.join(" ")
}

module.exports = {
    parseError
}