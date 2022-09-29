var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // TU CÓDIGO AQUÍ

 /* Iterating through the children of the element and calling the function recursively. */
  let children = startEl.children;

  for (let i =0; i < children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, children[i]);
    resultSet = [...resultSet, ...elements]
  }
  
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {


  // tu código aquí

  // ID --> #
  // CLASS --> . AL INICIO
  // TAG.CLASS ---> . PUNTO EN EL MEDIO
  // TAG --> NADA - DEFAULT

 /* Checking the first character of the selector and returning the type of selector. */
  if (selector[0] === "#") {
    return 'id';
  } else if (selector[0] === ".") {return 'class';
} else if (selector.indexOf('.') > 0) {
  return 'tag.class'
} 

return 'tag'

  }
  



// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

/* Creating a function that will return a function that will return a boolean. */
var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 

    // matchFunction = elem => ` #${elem.id === selector}`
   matchFunction = function(elem) {
    return '#' + elem.id === selector; // <div id = "ondas> </div\>"
  } 

  
   
  } /* Checking if the selector is a class and returning true if it is. */
  else if (selectorType === "class") { 
    return matchFunction =  elem => {
    let classes = elem.classList; // nos arroja arreglo con clases
    for (let i = 0; i < classes.length; i++) {
      if (('.' + classes[i]) === selector) return true; // `.${classes[i]}`
      }  
      return false;
    }
    
/* Splitting the selector into two parts, the tag and the class. Then it is calling the
matchFunctionMaker function on both parts and returning true if both parts match. */

  } else if (selectorType === "tag.class") {
    matchFunction = function (elem) {
      let [t, c] = selector.split(".");
      return matchFunctionMaker(t)(elem) && matchFunctionMaker(`.${c}`)(elem);

    }
     
  } /* Checking if the selector is a tag and returning true if it is. */
  else if (selectorType === "tag") {
    matchFunction = elem => {
      // return elem.tagName === selector.toUpperCase();
       return elem.tagName.toLowerCase() === selector;
    }
     
  }
  return matchFunction;
};
/* Creating a function that will return an array of elements that match the selector. */

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
