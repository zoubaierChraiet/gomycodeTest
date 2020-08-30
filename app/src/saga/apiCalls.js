import axios from "axios"

export const addInstructor = async (instructor) => {
    const addedInstructor = await axios.post("/instructors/newInstructor",instructor) ;
    return addedInstructor
}

export const editInstructor = async (instructor) => {
    const editedInstructor = await axios.post(`/instructors/editInstructor/${instructor._id}`,instructor)
    return editedInstructor
}

export const deleteInstructor = async (id) => {
    const deletedInstructor = await axios.delete(`/instructors/deleteInstructor/${id}`)
    return deletedInstructor
}

export const getInstructors = async () => {
    return axios.get("/instructors")
    .then(instructors => ({instructors}))
    .catch(err => ({err}))
}

export const fetchInstructor = async (id) => {
    const instructor = await axios.get(`/instructors/${id}`)
    return instructor
}

