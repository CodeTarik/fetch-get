function onloadFunc() {
    console.log("test");
    postData("/name", {"banana": "rama" })
}

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path=""){
  let response = await fetch(BASE_URL + path + ".json");
  let responseToJson = await response.json();
  
}

async function postData(path="",data={}){
    let response = await fetch(BASE_URL + path + ".json", {
    method: "POST" ,
    header: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)

    });

    let responseToJson = await response.json();
}