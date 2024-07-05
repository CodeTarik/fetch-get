function onloadFunc(){
    console.log("test");                // ob die Funktion aufgerufen wird, soll die Funktion loadData aufgerufen werden.
    loadData("/name");
    deleteData("/Notizen/-O13tplN-E5jG_AyfPXQ");
    postData("/Notice", {"promise":"versprechen"});
                
}

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/"; // URL der Datenbank, in dem Fall die Firesebase-Datenbank


async function loadData(path=""){
    let response = await fetch(BASE_URL + path + ".json");          // die Datenbank wird geladen, diese Funktion kann warten
    //let responseToJson = await response.json();                   // die Datenbank wird in JSON-Format geladen
    return responseToJson = await response.json();                  // die JSON-Daten werden zurückgegeben und diues zwar direkt   
    //console.log(responseToJson);
}

async function postData(path="", data={}){
    let response = await fetch(BASE_URL + path + ".json",
        {
        method: "POST",
        header: {"Content-Type": "application/json",
        },
        body: JSON.stringify(data)
        });      
    //let responseToJson = await response.json();                 
    return responseToJson = await response.json();
    //console.log(responseToJson);              
}

async function deleteData(path=""){
    let response = await fetch(BASE_URL + path + ".json",{
    method: "DELETE",
    });
    return responseToJson = await response.json();
}

loadData().then(data=> console.log(data))