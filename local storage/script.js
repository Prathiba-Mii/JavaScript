

// local storage object allows u to save key/value pairs in the browser
// the local storage object stores data with no expiration data.
// the data is not deleted when the browser is closed and are available for future sessions


localStorage.setItem("YoutubeJsCourse","addingData");
// setItem (key,value) key  is the name of the data and value is the data itself

// setItem is for setting the data in the local storage
// getItem is for reading getting data from local storage
// removeItem is for remove/delete the data from local storage 

localStorage.getItem("YoutubeJsCourse");
// key should be same

localStorage.removeItem("YoutubeJsCourse");

// we need to do this in the console of the browser and check the local storage in the application tab
// local storage me sirf string hi store hothey hai 
// json lo convert karke local storage data me save karsakthey hai 
// json me json.stringify() and json.parse() use karte hai
