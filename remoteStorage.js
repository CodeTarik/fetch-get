function onloadFunc(){
    console.log("test");        // ob die Funktion aufgerufen wird, soll die Funktion loadData aufgerufen werden.
    loadData("/name");               // die Funktion wird aufgerufen
}

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/"; // URL der Datenbank, in dem Fall die Firesebase-Datenbank


async function loadData(path=""){
    let response = await fetch(BASE_URL + path + ".json");      // die Datenbank wird geladen, diese Funktion kann warten
    //let responseToJson = await response.json();                 // die Datenbank wird in JSON-Format geladen
    return responseToJson = await response.json();              // die JSON-Daten werden zurückgegeben und diues zwar direkt   
    //console.log(responseToJson);
}

loadData().then(data=> console.log(data))