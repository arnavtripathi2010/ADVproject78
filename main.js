Image_array
["26-268437_family-clipart-only-child-only-father-clipart.png", "mother.png", "brother.png", "sister.JPEG"]
name_array
["Ashutosh prasad", "Rakhi tripathi", "Arnav tripathi", "ameya tripathi"]

var i = 0;
  function update()
 {
  i++;
  var family_member =4
if(i > family_member )
{
     i = 0;
}
var updatedImage = Image_array[i];
var updatedName  = name_array[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
  }
