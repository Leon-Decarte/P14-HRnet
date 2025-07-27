import { useEffect, useState } from "react"

function EmployeeList() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || []
        setEmployees(storedEmployees)
    }, [])

    return (
        <div className="employee-list">
            <h2>Current Employees</h2>
            {employees.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Start Date</th>
                            <th>Department</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, index) => (
                            <tr key={index}>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.dateOfBirth}</td>
                                <td>{emp.startDate}</td>
                                <td>{emp.department}</td>
                                <td>{emp.street}</td>
                                <td>{emp.city}</td>
                                <td>{emp.state}</td>
                                <td>{emp.zipCode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default EmployeeList
