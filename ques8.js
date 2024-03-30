var input = document.querySelector("#myText");
var data = [
  {
    name: "Gourav Vyas",
    src: "data:image/png;base64,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",
  },
  {
    name: "Deepanshi Goyal",
    src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Abhi Jain",
    src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ayush Jain",
    src: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Chakshu Adlakha",
    src: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

var person = "";

data.forEach((elem) => {
  person += `<div class="person" id="per1"><img src="${elem.src}">
        <h2>${elem.name}</h2>
        </div>`;
});

document.querySelector(".Content").innerHTML = person;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.toLowerCase().startsWith(input.value.toLowerCase());
  });
  var newuser = "";
  matching.forEach((elem) => {
    newuser += `<div class="person" id="per1"><img src="${elem.src}">
        <h2>${elem.name}</h2>
        </div>`;
  });

  document.querySelector(".Content").innerHTML = newuser;
});
