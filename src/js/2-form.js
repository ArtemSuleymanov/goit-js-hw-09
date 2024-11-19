const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-field";

let formData = {
    email: "",
    message: ""
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
};

function newLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener("input", (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    newLocalStorage();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
  
    console.log(formData);
  
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
  });