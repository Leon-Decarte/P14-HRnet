import { useState } from "react"
import Select from "react-select"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import states from "../data/states" 
import departments from "../data/departments" 

import Modal from "modal-leon-lib" 
import "modal-leon-lib/dist/index.css"

import "./CreateEmployee.css" 


const departmentOptions = departments.map((dept) => ({
    value: dept.value,
    label: dept.label,
}))

const stateOptions = states.map((s) => ({
    value: s.abbreviation,
    label: s.name,
}))

export default function CreateEmployee() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        department: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    // Gère les changements dans les champs de formulaire
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Récupère les employés existants depuis le localStorage
        const employees = JSON.parse(localStorage.getItem("employees")) || []
        // Met à jour la liste des employés
        const updated = [...employees, formData]
        // Sauvegarde dans le localStorage
        localStorage.setItem("employees", JSON.stringify(updated))
        setIsModalOpen(true)
    }

    return (
        <div className="form-container">
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input name="firstName" onChange={handleChange} required />

                <label>Last Name</label>
                <input name="lastName" onChange={handleChange} required />

                <label>Date of Birth</label>
                <DatePicker
                    selected={formData.dateOfBirth}
                    onChange={(date) =>
                        setFormData((prev) => ({ ...prev, dateOfBirth: date }))
                    }
                    dateFormat="MM/dd/yyyy"
                    wrapperClassName="custom-datepicker"
                    popperPlacement="bottom-start"
                />

                <label>Start Date</label>
                <DatePicker
                    selected={formData.startDate}
                    onChange={(date) =>
                        setFormData((prev) => ({ ...prev, startDate: date }))
                    }
                    dateFormat="MM/dd/yyyy"
                    wrapperClassName="custom-datepicker"
                    popperPlacement="bottom-start"
                />

                <label>Street</label>
                <input name="street" onChange={handleChange} />

                <label>City</label>
                <input name="city" onChange={handleChange} />

                <label>State</label>
                <Select
                    options={stateOptions}
                    onChange={(selected) =>
                        setFormData((prev) => ({ ...prev, state: selected.value }))
                    }
                />

                <label>Zip Code</label>
                <input name="zipCode" type="number" onChange={handleChange} />

                <label>Department</label>
                <Select
                    options={departmentOptions}
                    onChange={(selected) =>
                        setFormData((prev) => ({ ...prev, department: selected.value }))
                    }
                />

                <button type="submit">Save</button>
            </form>

            <Modal isOpen={isModalOpen}  closeText = "x" onClose={() => setIsModalOpen(false)}>
                <p> Employee Created!</p>
            </Modal>
        </div>
    )
}
