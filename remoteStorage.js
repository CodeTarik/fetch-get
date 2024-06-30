function onloadFunc() {
    console.log("test");
    loadData("/name");
}

const BASE_URL = "https://remotestorage-3f179-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadData(path=""){
  let response = await fetch(BASE_URL + path + ".json");
  let responseToJson = await response.json();
  console.log(responseToJson);
}