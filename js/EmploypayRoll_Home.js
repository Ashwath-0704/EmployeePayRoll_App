/ UC 4 – Display Employee Details in Tabular Format using Template Literals

const createEmployeePayRollJSON = () => {
    let employeePayRollLocal = [

        {
            _name: 'Ashwath ',
            _profilePic: '../assert/FS HTML_CSS LP02 Employee Payroll App Assets (1)/assets/profile-images/Ellipse -3.png ',
            _gender: 'male',
            _department: ['Sales', 'Finance', 'Engineer'],
            _salary: '479800',
            _note: 'TEST - 1',
            _id: new Date().getTime(),
            // _date = "29 Oct 2019"
        },
        {
            _name: "Anusha",
            _profilePic: "../assert/FS HTML_CSS LP02 Employee Payroll App Assets (1)/assets/profile-images/Ellipse -4.png",
            _gender: "female",
            _department: ["HR", "Finance"],
            _salary: "400000",
            _note: "TEST-2",
            _id: new Date().getTime(),
            // _date = "10 feb 2019"
        }
    ];
    return employeePayRollLocal;
}

// UC 5 – Display Employee Details from JSON Object

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    let employeePayRollList = createEmployeePayRollJSON();
    const headerHtml = `<tr><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>`;
    let innerHtml = `${headerHtml}`;
    if (employeePayRollList.length != 0) {
        for (const employeePayRollData of employeePayRollList) {
            innerHtml = `${innerHtml}
            <tr>
                <td><img src="${employeePayRollData._profilePic}" alt="!!!" class="profile">${employeePayRollData._name}</td>
                <td>${employeePayRollData._gender}</td>
                <td>${getDeptHtml(employeePayRollData._department)}</td>
                <td>${employeePayRollData._salary}</td>
                <td>${employeePayRollData._date}</td>
                <td>
                    <img id="1" src="../assert/FS HTML_CSS LP02 Employee Payroll App Assets (1)/assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
                    <img id="1" src="../assert/FS HTML_CSS LP02 Employee Payroll App Assets (1)/assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this)">
                </td>
            </tr>
            `;
        }
        document.querySelector('#table-display').innerHTML = innerHtml;
    } else return;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// UC 6– Display Employee Details from Local Storage

let employeePayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrollList = getEmployeeDataFromStorage();
    console.log(employeePayrollList);
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeeDataFromStorage = () => {
    return localStorage.getItem("EmployeePayRollData") ? JSON.parse(localStorage.getItem("EmployeePayRollData")) : [];
}

const createInnerHtml = () => {
    const headerHtml = `<tr><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>`;

    if (employeePayrollList.length != 0) {

        let innerHtml = `${headerHtml}`;
        for (const employeePayRollData of employeePayrollList) {
            innerHtml = `${innerHtml}
            <tr>
                <td><img src="${employeePayRollData._profilePic}" alt="!!!" class="profile">${employeePayRollData._name}</td>
                <td>${employeePayRollData._gender}</td>
                <td>${getDeptHtml(employeePayRollData._department)}</td>
                <td>${employeePayRollData._salary}</td>
                <td>${employeePayRollData._date}</td>
                <td>
                    <img id="1" src="../assert/FS HTML_CSS LP02 Employee Payroll App Assets (1)/assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
                    <img id="1" src="../assert/FS HTML_CSS LP02 Employee Payroll App Assets (1)/assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this)">
                </td>
            </tr>
            `;
        }
        document.querySelector('#table-display').innerHTML = innerHtml;
    } else return;
}

const getDeptHtml = (deptList) => {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
