const form = document.querySelector('form')!;
const addressInupt = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInupt.value;

    // Send this to Google's API
}

form.addEventListener('submit',searchAddressHandler)