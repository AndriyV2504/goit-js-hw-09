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

