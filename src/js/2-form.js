let formData = { email: "", message: "" };

document.querySelector(".feedback-form").addEventListener("input", function(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const storeData = localStorage.getItem("feedback-form-state");
if (storeData) {
    formData = JSON.parse(storeData);
    document.querySelector('input[name = "email"]').value = formData.email;
    document.querySelector('textarea[name = "message"]').value = formData.message;
};

document.querySelector(".feedback-form").addEventListener("submit", function(event) {
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData = { email: "", message: "" };
        document.querySelector('input[name = "email"]').value = "";
        document.querySelector('textarea[name = "message"]').value = "";
    }
    event.preventDefault();
});