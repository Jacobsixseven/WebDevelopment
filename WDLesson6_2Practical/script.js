function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = "";

  for( let i = 0; i < 3; i += 1){
  build += `<div class = "card">`
  build += `<h2> ${school.name}</h2>`
  build += `<img src = ${school.image}>`
  build += `<p> ${school.address}</p>`
  build += ` </div>`
  }

}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"Drake",
    "image":"https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9",
    "album":"data:image/webp;base64,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",
    "url":"<a href = https://drakerelated.com/ </a>"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
  let build2 = `
    <div class = card`
}


