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
const [recipeShown, setrecipeShown] = React.useState(false)


function toggleRecipeShown(){
    setrecipeShown(prev => !prev);
}



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
             required
             />

             <button>Add ingredient</button>

        </form>
{
        // here i will write a ternary condition to render the section page if ingredient is available 
}
          {  ingredientList.length > 0?  <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientList} </ul>
               {ingredientList.length > 3 ?  <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div> : null}
            </section> : null}


       {  recipeShown ?
       
       <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section> : null}
   
    </main>



</>
    )
}
