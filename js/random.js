
/**
 * 1. get all users
 * 2. get random user
 * 3. add class to user
 * 4. remove class from user
 * 5. repeat
 * 6. stop
 * 7. show selected user
*/
const list = $("#list");
// add class available-user to all users
$("li", list).addClass("available-user");

let users = $("li.available-user", list);


const sort_btn = $("#sort-btn");
sort_btn.on("click", function () {
  console.log(`users size`, users.length);
  console.log(`users`, users);
  let rd = Math.round(Math.random() * users.length);
  if(users.length === 1) rd = 0;
  console.log(`rd`, rd);
  console.log(`users`, $(users[rd]).text());
  $(users[rd]).toggleClass("available-user selected-user").animate({
    boxShadow: "0px 0px 0px 0px hsla(100, 70%, 60%, 0.8)"
  });
  users = $("li.available-user", list);
})

// browsing the users table with each
users.each(function (index, user) {
  // on click on user
  $(user).on("click", function () {
    // if user has class available-user or missing-user
    if ($(user).hasClass("available-user") || $(user).hasClass("misssing-user")) {
      $(user).toggleClass("available-user misssing-user");
    } else if ($(user).hasClass("selected-user")) {
      $(user).toggleClass("selected-user available-user")
    }

    users = $("li.available-user", list);
  });
});



