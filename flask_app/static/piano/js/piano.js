const sound = {65:"http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
                87:"http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
                83:"http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
                69:"http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
                68:"http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
                70:"http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
                84:"http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
                71:"http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
                89:"http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
                72:"http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
                85:"http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
                74:"http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
                75:"http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
                79:"http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
                76:"http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
                80:"http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
                186:"http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"};

const scaryAudio = "https://orangefreesounds.com/wp-content/uploads/2020/09/Creepy-piano-sound-effect.mp3?_=1";


let sequence = "";

/* Responsible for styling pressed keys, playing audio
and checking for weseeyou sequence */
document.addEventListener('keydown', (e) => {
    if (sequence !== "weseeyou")
    {
        //Formats keystroke into the name of id inside HTML for easy lookup
        var key = e.key;
        var elementID = key.toUpperCase() + "-key";
        var element = document.getElementById(elementID)

        //Makes the key look pressed
        element.style.transform = "scale(.95, .95)";

        //Plays the audio for the specific key code
        let audio = new Audio(sound[e.keyCode]);
        audio.play();

        if (e.keyCode === 87) {sequence = "w";} 
        else if (sequence === 'w' && e.keyCode === 69) {sequence = "we";} 
        else if (sequence === "we" && e.keyCode === 83) {sequence = "wes";}
        else if (sequence === "wes" && e.keyCode === 69) {sequence = "wese";} 
        else if (sequence === "wese" && e.keyCode === 69) {sequence = "wesee";} 
        else if (sequence === "wesee" && e.keyCode === 89) {sequence = "weseey";}
        else if (sequence === "weseey" && e.keyCode === 79) {sequence = "weseeyo";} 
        else if (sequence === "weseeyo" && e.keyCode === 85) {sequence = "weseeyou"; weSeeYou();}
        else {sequence = ""}
    }
})

//Responsible for returning keys back to normal after a keydown
document.addEventListener('keyup', (e) => {
    var key = e.key;
    var elementID = key.toUpperCase() + "-key";
    var element = document.getElementById(elementID)

    element.style.transform = "scale(1, 1)"
})

//Handles showing the Great Old One
function weSeeYou()
{
    let pianoKeys = document.getElementById("piano-keys");
    let pianoContent = document.getElementById("piano-content");
    let pianoName = document.getElementById("piano-name");

    let scarySound = new Audio(scaryAudio);
    scarySound.play();

    //Makes the keys invisible
    pianoKeys.style.display = "none";

    //Changes text
    pianoName.innerHTML = "I Have Awoken."
    
    //Makes piano background invisible
    pianoContent.style.opacity = "0";
    pianoContent.style.backgroundImage = "url(/static/piano/images/texture.jpeg)";
    pianoContent.style.backgroundPosition = "center";
    pianoContent.style.backgroundSize = "cover";

    //Adds animation attributes to piano content to achieve fading in animation
    pianoContent.style.animation = "fadeInAnimation ease 3s";
    pianoContent.style.animationIterationCount = "1"
    pianoContent.style.animationFillMode = "forwards";
}