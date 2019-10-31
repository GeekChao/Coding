import { STATUS, ROLE_RESPONDENT, ROLE_MANAGER, ROLE_DIRECTOR, ERROR_NO_AVAILABLE } from "../Global"
import { Respondent, Manager, Director } from "../Employee"
import CallCenter from '../' 
import { RoleCallHandler } from '../CallHandler'

const nthFn = fn => (n: number) => {
    for(let i = 0; i < n; i++){
        fn()
    }
}

describe("Call center", () => {
    it("can create a new respondent", () => {
        const respondent = new Respondent("morris", ROLE_RESPONDENT, STATUS.VACANT)

        expect(respondent.name).toEqual("morris")
        expect(respondent.role).toEqual(ROLE_RESPONDENT)
        expect(respondent.status).toEqual(STATUS.VACANT)
    })

    it("can add a new respondent", () => {
        const respondent = new Respondent("morris", ROLE_RESPONDENT, STATUS.VACANT)
        const callCenter = new CallCenter()
        
        callCenter.addEmployee(respondent)
        expect(callCenter.getEmployeesByRoleAndType(ROLE_RESPONDENT)(STATUS.VACANT)).toHaveLength(1)
    })

    describe("can dispatch a call to the first available employee with lowest level", () => {
        let callCenter

        beforeEach(() => {
            const respondent1 = new Respondent("morris1", ROLE_RESPONDENT, STATUS.BUSY)
            const respondent2 = new Respondent("morris2", ROLE_RESPONDENT, STATUS.VACANT)
            const respondent3 = new Respondent("morris3", ROLE_RESPONDENT, STATUS.VACANT)
            const manager1 = new Manager("kevin1", ROLE_MANAGER, STATUS.VACANT)
            const manager2 = new Manager("kevin2", ROLE_MANAGER, STATUS.VACANT)
            const director = new Director("abe", ROLE_DIRECTOR, STATUS.VACANT)

            callCenter = new CallCenter(new RoleCallHandler())
            callCenter.addEmployee(respondent1)
            callCenter.addEmployee(respondent2)
            callCenter.addEmployee(respondent3)
            callCenter.addEmployee(manager1)
            callCenter.addEmployee(manager2)
            callCenter.addEmployee(director)
        })

        it("if respondents are available, dispatch a call to them first", () => {
            expect(callCenter.dispatchCall().name).toEqual("morris2")
        })

        it("if no respondents available, dispatch a call to managers", () => {
            nthFn(callCenter.dispatchCall)(2)

            expect(callCenter.dispatchCall().name).toEqual("kevin1")
        })

        it("if no respondents and managers available, dispatch a call to the director", () => {
            nthFn(callCenter.dispatchCall)(4)

            expect(callCenter.dispatchCall().name).toEqual("abe")
        })

        it("if nobody is available", () => {
            nthFn(callCenter.dispatchCall)(5)

            expect(callCenter.dispatchCall()).toEqual(ERROR_NO_AVAILABLE)
        })
    })
})