/**
 * Problem: 
 * The task here is to implement the builder pattern to create an assignment. 
 * Each assignment is of a subject: it has a level, which means it is either easy, medium, or hard.
 * It also has a due date. The announcement function given to you displays all this information. 
 * You have to figure out where to put this function’s definition and how to build the assignment step-by-step.
 */

type AssignmentLevel = 'Easy' | 'Medium' | 'Hard'

class Assignment {
    private subject: string
    private level: AssignmentLevel
    private dueDate: string

    public setSubject(subject: string) {
        this.subject = subject
    }

    public setLevel(level: AssignmentLevel) {
        this.level = level
    }

    public setDueDate(dueDate: string) {
        this.dueDate = dueDate
    }

    public announcement() {
        return `The assignment of ${this.subject} --- Level: ${this.level} Due date: ${this.dueDate}`
    }
}

interface Builder {
    createAssignment() : void
    setLevel() : void
    setDueDate(): void
    getAssignment(): Assignment
}

class AssignmentBuilder implements Builder {
    private assignment: Assignment

    public constructor(private subject: string, private level: AssignmentLevel, private dueDate: string) {}

    public createAssignment() {
        this.assignment = new Assignment()
        this.assignment.setSubject(this.subject)
    }

    public setLevel() {
        this.assignment.setLevel(this.level)
    }

    public setDueDate() {
        this.assignment.setDueDate(this.dueDate)
    }

    public getAssignment() {
        return this.assignment
    }
}

class AssignmentDirector {
    public make(assignmentBuilder: Builder) {
        assignmentBuilder.createAssignment()
        assignmentBuilder.setLevel()
        assignmentBuilder.setDueDate()

        return assignmentBuilder.getAssignment()
    }
}

var assignment = new AssignmentDirector();
var assignmentBuilder = new AssignmentBuilder("Math", "Hard", "12th June, 2020");
var mathAssignment = assignment.make(assignmentBuilder);
console.log(mathAssignment.announcement()); 