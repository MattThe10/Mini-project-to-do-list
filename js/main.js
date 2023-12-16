const addButton = document.getElementById('submit-btn');
const textInput = document.getElementById('to-do-in');
const wrapper = document.getElementById('main-wrapper');

//DB
let DB = [];


function clear() {
    textInput.value = '';

}

addButton.addEventListener('click', () => {
    let inputValue = document.getElementById('to-do-in').value;
    if(inputValue === ''){
        alert('Insert valid text');
    } else{
        DB.push(inputValue);
    updateList(inputValue);
    clear();
    }
})

function updateList(inputValue){
        //creating elements
    let div = document.createElement('div');
    let par = document.createElement('p');
    let deleteButton = document.createElement('button');

    //updating their classList and type
    par.classList.add('to-do-text');
    div.classList.add('to-do-div');
    deleteButton.classList.add('delete-btn');
    deleteButton.type = 'button';
    deleteButton.textContent = 'X';

    //deleting elements
    deleteButton.onclick = function(){
        wrapper.removeChild(div);
    }

    //updating text in paragraph
    par.textContent = inputValue;

    //appending
    wrapper.appendChild(div);
    div.appendChild(par);
    div.appendChild(deleteButton);
    
}






