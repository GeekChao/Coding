import Employee from "./Employee"
import CallCenter from "./"
import { STATUS, ROLE_LEVELS, ERROR_NO_AVAILABLE } from "./Global"

abstract class CallHandler {
    abstract findAvailEmployee(cc: CallCenter): Employee | string;

    dispatchCall(cc: CallCenter): Employee | string {
        return this.findAvailEmployee(cc)
    }
}

class RoleCallHandler extends CallHandler{
    findAvailEmployee(cc: CallCenter): Employee | string {
        for (const role of ROLE_LEVELS){
            const availEmpolyees = cc.getEmployeesByRoleAndType(role)(STATUS.VACANT)
            const busyEmpolyees = cc.getEmployeesByRoleAndType(role)(STATUS.BUSY)

            if(availEmpolyees.length > 0){
                const e = availEmpolyees[0]
                e.setStatus(STATUS.BUSY)
                busyEmpolyees.push(e)
                availEmpolyees.splice(0, 1)

                return e
            }
        }

        return ERROR_NO_AVAILABLE
    }
}

export default CallHandler

export {
    RoleCallHandler
}