//create a canvas to display p5js
function setup() {
    createCanvas(400, 200);
  }
  
  function draw() {
 //create string of text
    let s = 'Recipes by Maya Valencia';
    fill(50);
    textSize(40);
    text(s, 480, 300); 

    //create gradient ellipse that follows x and y coordinates of the mouse
	push()

	let radius = 100;
	let h = 0.000001;
	for (let r = radius; r > 0; --r) {
		let from = color(218, 255, 211);
		let to = color(1, 105, 6);
		noFill()
		stroke(lerpColor(from, to, h));
		ellipse(mouseX, mouseY, r, r);
		h = h + 0.01
	}
  }


//make const of strings to pull from for fruit salad

const recipe = {
    "@type": "Recipe",
    "cookTime": "15M",
    "description": "Get ready to make yummy fruit salad",
    "recipeIngredient": [
      "Raspberries",
      " Grapes",
      " Strawberries",
      " Bananas"
  ],
  "name": "Fruit Salad Recipe",
  "nutrition": {
  
  },
  "prepTime": "Prep Time: 2 minutes",
  "instructions": "Combine fruit in bowl and serve with spoon. ",
  "recipeYield": "1 sandwich",
  }
  
  //append to screen using innerText and DOM
  const titleElement = document.getElementById("title");
  
  titleElement.innerText = recipe.name;
  
  document.getElementById("description").innerText = recipe.description;
  
  
  const instructionElement  = document.getElementById("instructions");
  
  instructionElement.innerText = recipe.instructions;
  
  const timeElement = document.getElementById("time");
  
  timeElement.innerText = recipe.prepTime;
  
  
  const ingredientElement = document.getElementById("ingredients");
  
  ingredientElement.innerText = recipe.recipeIngredient;







//make const of strings to pull from for pasta salad
  const pastaRecipe = {
    "@type": "Recipe",

    "pastaDescription": "Get ready to make delicious pasta salad",
    "recipeIngredientPasta": [
      "Arugula",
      " Pasta",
      " Pesto from the store",
      " Cherry tomatoes",
      " Avocado"
  ],
  "namePasta": "Pasta Salad Recipe",
  "nutritionPasta": {
  
  },
  "prepTimePasta": "Prep Time: 20 minutes",
  "instructionsPasta": "First, cook the pasta on the stove. Next, prepare the cherry tomatoes by slicing them in half. Next, take out the avocado and cut it. When the pasta is ready, combine everything in a bowl and add salt and pepper to taste. ",

  }
  
    //append to screen using innerText and DOM
  const titleElementPasta = document.getElementById("pasta-title");
  
  titleElementPasta.innerText = pastaRecipe.namePasta;
  
  document.getElementById("pasta-description").innerText = pastaRecipe.pastaDescription;
  
  
  const instructionElementPasta  = document.getElementById("pasta-instructions");
  
  instructionElementPasta.innerText = pastaRecipe.instructionsPasta;
  
  const timeElementPasta = document.getElementById("pasta-time");
  
  timeElementPasta.innerText = pastaRecipe.prepTimePasta;
  
  
  const ingredientElementPasta = document.getElementById("pasta-ingredients");
  
  ingredientElementPasta.innerText = pastaRecipe.recipeIngredientPasta;
  
  








//make const of strings to pull from for salad
  const regRecipe = {
    "@type": "Recipe",

    "regDescription": "Get ready to make scrumptious salad",
    "recipeIngredientReg": [
      "Lettuce",
      " Chopped Carrots",
      " Cut tomatoes",
      " Chopped Cucumbers",
      " Lemon"
  ],
  "nameReg": "Regular Salad Recipe",
  "nutritionReg": {
  
  },
  "prepTimeReg": "Prep Time: 10 minutes",
  "instructionsReg": "Combine all ingredients in a nice bowl and lightly toss them around. Add lemon to taste. ",

  }
  
//append to screen using innerText and DOM
  const titleElementReg = document.getElementById("reg-title");
  
  titleElementReg.innerText = regRecipe.nameReg;
  
  document.getElementById("reg-description").innerText = regRecipe.regDescription;
  
  
  const instructionElementReg  = document.getElementById("reg-instructions");
  
  instructionElementReg.innerText = regRecipe.instructionsReg;
  
  const timeElementReg = document.getElementById("reg-time");
  
  timeElementReg.innerText = regRecipe.prepTimeReg;
  
  
  const ingredientElementReg = document.getElementById("reg-ingredients");
  
  ingredientElementReg.innerText = regRecipe.recipeIngredientReg;

  function setup(){
	createCanvas(1520, 700);
	angleMode(DEGREES);
	
}

