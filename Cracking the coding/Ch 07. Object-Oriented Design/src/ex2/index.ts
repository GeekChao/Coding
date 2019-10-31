import {ROLE_LEVELS, STATUS, ROLE_LEVELS_TYPES} from './Global'
import Employee from "./Employee"
import CallHandler from "./CallHandler"

class CallCenter{
    constructor(private _itsCallHandler?: CallHandler) {
        ROLE_LEVELS.forEach(role  => this[role] = Object.values(STATUS).reduce((accu, status) => {
            accu[status] = []
            return accu
        }, {}))

        this.addEmployee = this.addEmployee.bind(this)
        this.dispatchCall = this.dispatchCall.bind(this)
    }

    getEmployeesByRoleAndType = (role: ROLE_LEVELS_TYPES): Function => (status: STATUS): Employee[] => this[role][status]

    addEmployee(e: Employee): void {
        this[e.role][e.status].push(e)
    }

    dispatchCall(): Employee | String {
        return this._itsCallHandler.dispatchCall(this)
    }
}

export default CallCenter