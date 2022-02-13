// **************select items************
const alert=document.querySelector(".alert");
const form=document.querySelector(".grocery-form");
const grocery=document.getElementById("grocery");
const submitBtn=document.querySelector(".submit-btn");
const container=document.querySelector(".grocery-container");
const list=document.querySelector(".grocery-list");
const clearBtn=document.querySelector(".clear-btn");

// EDIT OPTION
let editElement;
let editFlag=false;
let editID="";

// ************Event listener************
// submit form
form.addEventListener("submit", addItem);
//clear items action
clearBtn.addEventListener("click",clearItems)

// const deleteBtn=document.querySelector(".delete-btn")
// console.log(deleteBtn);

// ************Function***********
function addItem(e){
    e.preventDefault();
    const value= grocery.value;

    //*************checking the value(value=item entered as input)************
    // if(value){
    //     console.log("yes")
    // }else if(!value){
    //     console.log("no")
    // }

    const id=new Date().getTime().toString();
    // console.log(id);
    if(value && !editFlag){

        const element=document.createElement('article')
        //adding class
        element.classList.add('grocery-item')
        //adding id
        const attr=document.createAttribute('data-id');
        attr.value=id;
        element.setAttributeNode(attr)
        element.innerHTML=`<p class="title">${value}</p>
                <div class="btn-container">
                <!-- edit button -->
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <!-- delete button -->
                <button type="delete" class="delete-btn">
                    <i class="fa fa-trash"></i>
                </button>
            </div>`
    const deleteBtn=element.querySelector(".delete-btn")
    const editBtn=element.querySelector(".edit-btn")

    //setting an event listener by callng both the function 
    deleteBtn.addEventListener("click",deleteItem);
    editBtn.addEventListener("click",editItem);

    //append the element 
    list.appendChild(element);
    //displaying success message
    displayAlert("item added to the list", "success")
    //adding a new class(show container)
    container.classList.add("show-container");
    //add to local storage
    addToLocalStorage(id,value);
    //set back to default
    setBackToDefault();


    }else if(value && editFlag){
        editElement.innerHTML=value;
        displayAlert("value changed","success")
        setBackToDefault();
        //edit local storage
        editLocalStorage(editID,value)
        // grocery.value='';
    }else{
        displayAlert("empty, please enter the value","danger");
    }
}

//DISPLAYING ALERT MESSAGE
function displayAlert(text,action){
    alert.textContent= text;
    alert.classList.add(`alert-${action}`);

        //REOVING THE ALERT MESSAGE
        setTimeout(function(){
            alert.textContent="";
            alert.classList.remove(`alert-${action}`);
        },2000);
}

// ************Event listener************

// ************Event listener************

//************set back to default*********
function setBackToDefault(){
    console.log("set back to default")
    grocery.value='';
    editFlag=false;
    editID='';
    submitBtn.textContent="submit";
}

//***********add to local storage***********
function addToLocalStorage(id,value){
console.log("added to local storage")
}

//**********clear items function**********
function clearItems(){
    const items=document.querySelectorAll(".grocery-item");
    console.log(items);
    if(items.length>0){
        items.forEach(function(item){
            list.removeChild(item);
        })
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    // localStorage.removeItem("list");
}

//************submit button**********
function deleteItem(e){
   const element= e.currentTarget.parentElement.parentElement;
   const id=element.dataset.id;
   console.log(id);
   list.removeChild(element);
   if(list.children.length===0){
container.classList.remove("show-container")
   }
   displayAlert("item removed","danger")
   setBackToDefault();
//    console.log(element)
//    console.log("item deleted")
//remove from local storage =====
removeFromLocalStorage(id);
}

//remove from local storage function
function removeFromLocalStorage(id){
}
//edit from local storage
function editLocalStorage(id,value){
}
//************edit button**********
function editItem(e){
    const element= e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement=e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value=editElement.innerHTML;
    editFlag=true;
    editID=element.dataset.id;
    submitBtn.textContent="Edit"

}

