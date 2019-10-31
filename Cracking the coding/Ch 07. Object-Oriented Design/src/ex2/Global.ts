export const ROLE_RESPONDENT = "RESPONDENT"
export const ROLE_MANAGER = "MANAGER"
export const ROLE_DIRECTOR = "DIRECTOR"

export const ROLE_LEVELS = [ROLE_RESPONDENT, ROLE_MANAGER, ROLE_DIRECTOR] as const// the order in the array is the priority
export type ROLE_LEVELS_TYPES = typeof ROLE_LEVELS[number]

export enum STATUS {
    VACANT = "VACANT",
    BUSY = "BUSY"
}

//error message
export const ERROR_NO_AVAILABLE = "Sorry, please wait. There is nobody available now"