
const allCheckBox = document.querySelectorAll('.custom-checkbox');
const allInputs = document.querySelectorAll('input')
const errorLabel = document.querySelector('.error-label')
allCheckBox.forEach(checkBox => {
    
   
    checkBox.addEventListener('click', (e) => {
        const allFieldsFilled = [...allInputs].every((input)=>{
            return input.value

        })
        // const allCheckBoxFilled = [...allCheckBox].every((check)=>{
        //     console.log(check.value) 
        // })
        if(allFieldsFilled){
            checkBox.classList.toggle('checked');
            checkBox.nextElementSibling.classList.toggle('goal-input-checked')
            
           

        }
        else{
            errorLabel.classList.remove('error-label')
            errorLabel.classList.add('error-show')

            
        }
        
        // console.log(e.target.value)
    })
    
});
allInputs.forEach((input)=>{
    input.addEventListener('focus', (e)=>{
        errorLabel.classList.add('error-label')
        errorLabel.classList.remove('error-show')
    })

})


