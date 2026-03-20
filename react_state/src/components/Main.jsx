import { useState } from "react"
// or we can just import all the react lib
import React  from "react"


export default function Main() {
    // let use state here 
    const [ingredients, setIngredients] = React.useState([]) // i initalize the state setup

    const ingredientList = ingredients.map(item => (
        <li key={item}> {item}</li>
        // what happen here is that we loop through the array 
        // for each item return a list and i set the key to item 
    ))
    function Submitbtn(formData){
        // The code below stop the page from refreshing 

        // event.preventDefault()

        // console.log("You click me!!")
        // alert("you hit me ")
        // here i create an instance of the data that is enter in the form by calling the formdata
        // and the get the target event and pass in the name of the event which is in this case is ingredient 
        // ingredient is the name of the form which we want to get the data from 

        // const formData = new FormData(event.currentTarget)
        // here the form create a form data object from the submitted form 
        const newIngredient = formData.get("ingredient")
        // here it will retrieve the values from the input field name ingredient 
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        // the setIngredients update the array by spreading the old array and adding the new ingredients to it end 

        // console.log(newIngredient)
        // // i will add the new ingredient to the list
        // ingredients. (newIngredient)
        // console.log(ingredients)
    }

    // let [result, setResult] = React.useState("")
    // // this will reture an array and we can access them the same way we do with array 

    // function handleClick(){
    //     setResult("List added")
    // }
    // console.log(result)
//   function handleSubmit(formData) {
//     // event.preventDefault()
//     // const formEl = event.currentTarget
//     // const formData = new FormData(formEl)
//     const email = formData.get("email")
//     // Gather the info from the form
//     // Submit it to a backend
//     // formEl.reset() // help to reset the form

//   }
    

    return (

<>
 {/* <section>
      <h1>Signup form</h1>
      <form action={handleSubmit} >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section> */}


    <main>
        <form className="add-ingredient-form" action={Submitbtn}>

            <input type="text" aria-label="Add ingredient"
             placeholder="e.g oregano" name="ingredient"
             />

             <button>Add ingredient</button>

        </form>

        <ul>
            {ingredientList}
        </ul>

   
    </main>



</>
    )
}
