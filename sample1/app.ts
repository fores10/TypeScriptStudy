class Student {
    private _name: string;
    get name() {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
}

let student = new Student();

student.name = "Tom";
console.info(student.name);
