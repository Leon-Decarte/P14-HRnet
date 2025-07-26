import { useState } from "react"

function CreateEmployee() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "Sales"
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // récupérer les employés existants
        const existingEmployees = JSON.parse(localStorage.getItem("employees")) || []

        // ajouter le nouvel employé
        const updatedEmployees = [...existingEmployees, formData]

        // sauvegarder dans localStorage
        localStorage.setItem("employees", JSON.stringify(updatedEmployees))

        console.log("✅ Employee saved:", formData)

        // vider le formulaire
        setFormData({
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            startDate: "",
            street: "",
            city: "",
            state: "",
            zipCode: "",
            department: "Sales"
        })

        // (on ajoutera une modale ici ensuite)
    }


    return (
        <div className="form-container">
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input name="firstName" onChange={handleChange} value={formData.firstName} />

                <label>Last Name</label>
                <input name="lastName" onChange={handleChange} value={formData.lastName} />

                <label>Date of Birth</label>
                <input name="dateOfBirth" type="date" onChange={handleChange} value={formData.dateOfBirth} />

                <label>Start Date</label>
                <input name="startDate" type="date" onChange={handleChange} value={formData.startDate} />

                <fieldset>
                    <legend>Address</legend>
                    <label>Street</label>
                    <input name="street" onChange={handleChange} value={formData.street} />

                    <label>City</label>
                    <input name="city" onChange={handleChange} value={formData.city} />

                    <label>State</label>
                    <select name="state" onChange={handleChange} value={formData.state}>
                        <option value="">Select a state</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="NY">New York</option>
                        {/* Tu pourras ajouter tous les états ici plus tard */}
                    </select>

                    <label>Zip Code</label>
                    <input name="zipCode" type="number" onChange={handleChange} value={formData.zipCode} />
                </fieldset>

                <label>Department</label>
                <select name="department" onChange={handleChange} value={formData.department}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreateEmployee
