var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")
var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorhandler(error) {
    console.log("Error occured", error);
    alert("Something went wrong! Try again after sometime")
}

function clickHandler() {
    //console.log("Clicked");
    //console.log("input", txtInput.value);
    //outputDiv.innerText = "ajsasjs" + txtInput.value;

    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorhandler);
}
btnTranslate.addEventListener("click", clickHandler)