import axios from "axios"

export const addInstructor = async (instructor) => {
    const addedInstructor = await axios.post("/instructors/new",instructor) ;
    return addedInstructor
}

export const editInstructor = async (instructor) => {
    const editedInstructor = await axios.post(`/instructors/edit/${instructor._id}`,instructor)
    return editedInstructor
}

export const deleteInstructor = async (id) => {
    console.log(id)
    const deletedInstructor = await axios.delete(`/instructors/delete/${id}`)
    return deletedInstructor
}

export const getInstructors = async () => {
    const instructors = await axios.get("/instructors")
    return instructors
}

