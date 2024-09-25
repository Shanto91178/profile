const profileForm = document.querySelector('.profileForm');
const profile = document.querySelector('.profile');
const nameInput = document.querySelector('#name');
const ageInput = document.querySelector('#age');
const professionInput = document.querySelector('#profession');

//Listening event

profileForm.addEventListener("submit", function (event){
   event.preventDefault();
   const profileData = {
     name: nameInput.value,
     age: ageInput.value,
     profession: professionInput.value
   }
  
  const formatedText = formatText(profileData);    

 const nameInputValue = nameInput.value;
 const ageInputValue = ageInput.value;
 const professionInputValue = professionInput.value;
 
   profile.innerHTML += formatedText;
  nameInput.value = '';
   ageInput.value = '';
   professionInput.value = '';
})

function formatText({name, age, profession}){
   return `
   <div class="profile-section">
          <h3>Name: ${name}</h3>
          <p>Age: ${age}</p>
          <p>Profession: ${profession}</p>
        </div>
     `;
}