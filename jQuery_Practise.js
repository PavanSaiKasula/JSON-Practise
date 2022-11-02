$("document").ready(() => {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      $("#picture").html(data.results[0].picture.thumbnail);
      $("#first").html(data.results[0].name.first);
      $("#last").html(data.results[0].name.last);
      $("#title").html(data.results[0].name.title);
      $("#gender").html(data.results[0].gender);

      $("#Street").html(data.results[0].location.street.number);
      $("#streetname").html(data.results[0].location.street.name);
      $("#city").html(data.results[0].location.city);
      $("#state").html(data.results[0].location.state);
      $("#country").html(data.results[0].location.country);
      $("#postcode").html(data.results[0].location.postcode);
      $("#latitude").html(data.results[0].location.coordinates.latitude);
      $("#longitude").html(data.results[0].location.coordinates.longitude);
      $("#offset").html(data.results[0].location.timezone.offset);
      $("#description").html(data.results[0].location.timezone.description);
      $("#longitude").html(data.results[0].location.coordinates.longitude);

      $("#email").html(data.results[0].email);

      $("#username").html(data.results[0].login.username);
      $("#password").html(data.results[0].login.password);

      $("#date").html(data.results[0].dob.date);
      $("#age").html(data.results[0].dob.age);

      $("#phone").html(data.results[0].phone);
      $("#cell").html(data.results[0].cell);


      
    },
  });
});
