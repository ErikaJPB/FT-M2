/* Creating a variable called URL and assigning it the value of the API. */
let URL = 'http://localhost:5000/amigos'

/**
 * It takes the data from the API and appends it to the list.
 */
let friends = () => {
  let list = $("#lista");
  list.empty();

  $.get(`${URL}`, function (data) {
    console.log(data);

// data.forEach (element => {
//     let li = document.createElement("li")
//     li.id = element.id
//     let list = document.querySelector("#lista")
//     list.appendChild(li)
// })

    data.forEach((element) =>
      $(`<li id = "${element.id}">${element.name}
      <button id="${element.id}" onclick="deleteFriend(${element.id})"> X </button></li>`).appendTo("ul")
    );
  });
};

$("#boton").click(friends);



/**
 * It takes the value of the input field, and if it's not empty, it makes a GET request to the URL with
 * the input value appended to it. If the request is successful, it will display the name of the friend
 * in the #amigo div.
 */
let searchFriend = () => {
  let input = $("#input").val();

  if (input) {
    $.get(`${URL}/${input}`, function (data) {
      console.log(data);
      $("#amigo").text(`${data.name}`);
    }); 
  } 
};

$("#search").click(searchFriend);



/**
 * It takes the value of the input field, and if it's not empty, it sends a DELETE request to the
 * server, and if the request is successful, it displays a message, clears the input field, and calls
 * the friends() function.
 */

/**
 * If the idCruz parameter is a number, then set the id variable to the value of idCruz. Otherwise, set
 * the id variable to the value of the inputDelete element.
 * @param idCruz - the id of the friend to be deleted
 */


let deleteFriend = (idCruz) => {
  if (typeof idCruz === 'number') {
    id = idCruz
  } else {
    id = $("#inputDelete").val();
  }


  if (id) {
    $.ajax({
      url: `${URL}/${id}`,
      type: "DELETE",
      success: function () {
        $("#success").text("Tu amigo ha sido borrado con exito");
       // $("#inputDelete").val("");
        friends();
      },
    });
  }
};

$("#delete").click(deleteFriend);