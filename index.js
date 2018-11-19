// add solution here
var musicians = ["B Young", "Geko", "Alec Benjamin"];
var instruments = ["Piano","Guitar","Drums"];
theBeatlesPlay(musicians,instruments);
Function theBeatlesPlay (musicians,instruments) {
  beatleArray = [];
  for (let i=0; i<musicians.length;i++) {
    beatleArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatleArray;
}