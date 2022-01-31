// UC 4 – Display Employee Details in Tabular Format using Template Literals

// UC 5 – Display Employee Details from JSON Object

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    let employeePayRollList = createEmployeePayRollJSON();
    const headerHtml = "<tr><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    for (const employeePayRollData of employeePayRollList) {
        const innerHtml = `${headerHtml}
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
        document.querySelector('#table-display').innerHTML = innerHtml;
    }
}

const getDeptHtml = (deptList) => {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}