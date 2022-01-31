/**
 * @author -> Ashwath Naidu <ashwath.bly@gmail.com> 
 * @purpose -> UC 1 – Employee Payroll Class with New Attributes
 */
class EmployeePayRoll {

    // ( Getter and Setter )

    // id
    get id() { return this._id; }
    set id(id) { this._id = id; }

    // name
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else textError.textContent = "Name is incorrect";
    }

    //profilePic
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) { this._profilePic = profilePic; }

    // gender
    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }

    //department
    get department() { return this._department; }
    set department(department) { this._department = department; }

    // salary
    get salary() { return this._salary; }
    set salary(salary) { this._salary = salary; }

    // note
    get note() { return this._note; }
    set note(note) { this._note = note; }

    //startDate
    get startDate() { return this._startDate; }
    set startDate(startDate) { this._startDate = startDate; }


    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this._startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this._id + "\nname=" + this._name + "\ngender=" + this._gender + "\nprofilePic=" + this._profilePic + "\ndepartment=" + this._department + "\nsalary=" + this._salary + "\nstartDate=" + empDate + "\nnote=" + this._note;
    }
}

/**
 * @purpose -> UC 2 – On Document Load Set Event Listeners
 */
window.addEventListener('DOMContentLoaded', (event) => {

    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayRoll()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
});

/**
 * @purpose -> UC 3 – On Save Create Employee Payroll Object
 * @returns -> If there is not error, It save employee Data into local storage or It returns an Error 
 */
const save = () => {
    try {
        let employeePayRoll = createEmployeePayRoll();
        saveToLocalStorage(employeePayRoll);
    } catch (error) {
        return;
    }
}

/**
 * @purpose -> UC 4 – Saving Employee Payroll to Local Storage
 * @param {*} ObjectData 
 */
function saveToLocalStorage(employeePayRoll) {

    let employeePayRollData = JSON.parse(localStorage.getItem("EmployeePayRollData"));

    if (employeePayRollData != undefined) {
        employeePayRollData.push(employeePayRoll);
    } else {
        employeePayRollData = [employeePayRoll]
    }

    alert(employeePayRollData.toString());
    localStorage.setItem("EmployeePayRollData", JSON.stringify(employeePayRollData));

}

/**
 * @purpose -> To create a new EmployeePayRoll Data.
 * @returns -> If there is no error, It creates and returns new Object of employeePayRollData or it throw an error.
 */
const createEmployeePayRoll = () => {
    let employeePayRoll = new EmployeePayRoll();
    try {
        employeePayRoll.name = document.querySelector('#name').value;
    } catch (error) {
        setTextError('.text-error', error);
        throw error;
    }

    employeePayRoll.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayRoll.gender = getSelectedValues('[name=gender]').pop();
    employeePayRoll.department = getSelectedValues('[name=department]');
    employeePayRoll.salary = document.querySelector('#salary').value;
    employeePayRoll.note = document.querySelector('#notes').value;
    let date = document.querySelector('#day') + " " + document.querySelector('#month') + " " + document.querySelector('#year');
    employeePayRoll.date = Date.parse(date);
    alert(employeePayRoll.toString());
    return employeePayRoll;
}

/**
 * @purpose ->  To get all the items from the html and check for items.
 * @param {*} propertyValue 
 * @returns -> It returns the only array of Checked items.
 */
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) selItems.push(item.value);
    });
    return selItems;
}