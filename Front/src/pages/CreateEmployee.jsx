import { useState } from "react"
import Modal from "../components/Modal"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { states } from "../data/states"


const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        startDate: null,
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "Sales"
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Formatage des dates
        const formattedData = {
            ...formData,
            dateOfBirth: formData.dateOfBirth?.toLocaleDateString(),
            startDate: formData.startDate?.toLocaleDateString()
        }

        const existingEmployees = JSON.parse(localStorage.getItem("employees")) || []
        const updatedEmployees = [...existingEmployees, formattedData]
        localStorage.setItem("employees", JSON.stringify(updatedEmployees))

        setFormData({
            firstName: "",
            lastName: "",
            dateOfBirth: null,
            startDate: null,
            street: "",
            city: "",
            state: "",
            zipCode: "",
            department: "Sales"
        })

        setIsModalOpen(true)
    }

    return (
        <div className="container">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />

                <label>Date of Birth</label>
                <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={(date) => setFormData((prev) => ({ ...prev, dateOfBirth: date }))}
                />

                <label>Start Date</label>
                <DatePicker
                    selected={formData.startDate}
                    onChange={(date) => setFormData((prev) => ({ ...prev, startDate: date }))}
                />

                <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                <label>State</label>
                <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                >
                    <option value="">-- Select a state --</option>
                    {states.map((state) => (
                        <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                        </option>
                    ))}
                </select>
                <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
                <select name="department" value={formData.department} onChange={handleChange}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="submit">Save</button>
            </form>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p>✅ Employee Created!</p>
            </Modal>
        </div>
    )
}

export default CreateEmployee
