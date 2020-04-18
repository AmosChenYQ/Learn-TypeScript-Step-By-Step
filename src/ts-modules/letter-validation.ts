namespace Validation {
    export const isLetterReg = /^[a-zA-Z]+$/
    export const checkLetter = (text: any) => {
        return isLetterReg.test(text)
    }
}