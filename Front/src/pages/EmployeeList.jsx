import { useEffect, useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import { TextField, Box } from "@mui/material"
import "./EmployeeList.css"

export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("employees")) || []
        setEmployees(stored)
    }, [])

    const columns = [
        { field: "firstName", headerName: "First Name", flex: 1 },
        { field: "lastName", headerName: "Last Name", flex: 1 },
        { field: "startDate", headerName: "Start Date", flex: 1 },
        { field: "department", headerName: "Department", flex: 1 },
        { field: "dateOfBirth", headerName: "Date of Birth", flex: 1 },
        { field: "street", headerName: "Street", flex: 1 },
        { field: "city", headerName: "City", flex: 1 },
        { field: "state", headerName: "State", flex: 1 },
        { field: "zipCode", headerName: "Zip Code", flex: 1 },
    ]

    const rows = employees.map((emp, index) => ({ id: index, ...emp }))

    const filteredRows = rows.filter((emp) =>
        Object.values(emp).join(" ").toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Box
            sx={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: 2,
                overflowX: "auto",   
            }}
        >
            <h1>Current Employees</h1>

            <TextField
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ marginBottom: 2 }}
                onChange={(e) => setSearch(e.target.value)}
            />

            <DataGrid
                rows={filteredRows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10, 20]}
                autoHeight
                disableColumnMenu
            />
        </Box>
    )
}
