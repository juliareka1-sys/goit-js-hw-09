const storageKey = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};


const form = document.querySelector(".feedback-form");

form.addEventListener("input", inputHandler);
form.addEventListener("submit", submitHandler);

function inputHandler(event) {
    const key = event.target.name;
    const userData = event.target.value.trim();
    formData[key] = userData;
    localStorage.setItem(storageKey,JSON.stringify(formData));
    console.log(formData);
};

fillFromStorage();
function fillFromStorage (){
    const isData = localStorage.getItem(storageKey);
    
    if (isData) {
        const savedData = JSON.parse(isData);
        form.elements.email.value = savedData.email;
        form.elements.message.value = savedData.message;

        formData.email = savedData.email;
        formData.message = savedData.message;

    }
};
    
function submitHandler(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert('Fill please all fields');
        return;
  }
    console.log(formData);
    formData.email = "";
    formData.message = ""; 
    localStorage.removeItem(storageKey);
    form.reset();
};


