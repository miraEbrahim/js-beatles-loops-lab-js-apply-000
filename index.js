var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

Function theBeatlesPlay (musicians,instruments) {
  beatleArray = [];
  for (let i=0; i<musicians.length;i++) {
    beatleArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatleArray;
}