class CustomApiError extends Error{
    constructor(message,codeStatus){
        super(message)
        this.codeStatus = codeStatus
    }
}

const createCustomError = (message,codeStatus) => {
    return new CustomApiError(message,codeStatus)
}

module.exports = {createCustomError,CustomApiError}