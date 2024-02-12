"use server"
export const addContact = async (formData) => {
    const contact = {

        fname: formData.get("fname"),
        company: formData.get("company"),
        email: formData.get("email"),
        mobile: formData.get("mobile"),
        message: formData.get("message")
    }
    const response = await fetch(" http://localhost:5000/user", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "contact-Type": "application/json"
        }
    })

    if (response.status !== 201) {
        console.log("Error")
    }
    console.log("ok");
}   