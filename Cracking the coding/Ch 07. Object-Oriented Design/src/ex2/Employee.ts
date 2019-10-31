import { ROLE_LEVELS_TYPES, STATUS } from "./Global"

class Employee {
    constructor(private _name: string, private _role: ROLE_LEVELS_TYPES, private _status: STATUS) {}

    public get name(): string {
        return this._name
    }

    public get role(): ROLE_LEVELS_TYPES {
        return this._role
    }

    public get status(): STATUS {
        return this._status
    }

    public setStatus(status: STATUS): void {
        this._status = status
    }
}

class Respondent extends Employee {

}

class Manager extends Employee {

}

class Director extends Employee {

}

export default Employee

export {
    Respondent,
    Manager,
    Director
}