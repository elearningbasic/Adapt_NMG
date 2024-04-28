function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62qE6KcnpqH":
        Script1();
        break;
      case "6UWcS9UaG4B":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let allVideosInCourse = document.getElementsByTagName("video"); 
for (let i = 0; i < allVideosInCourse.length; i++) {
  allVideosInCourse[i].setAttribute("controls", "true");
}
}

window.Script2 = function()
{
  let allVideosInCourse = document.getElementsByTagName("video"); 
for (let i = 0; i < allVideosInCourse.length; i++) {
  allVideosInCourse[i].setAttribute("controls", "true");
}
}

};
