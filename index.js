const keys = document.body.querySelectorAll(".key")
let audio;
console.log(keys)
keys.forEach(key => {
  key.addEventListener("click", () => {
        console.log(key.firstElementChild.innerText)
        const play = key.firstElementChild.innerText;
        toggleClassName(play);
        playSound(play);
    })
});

document.addEventListener("keydown", (event) => {
    console.log(event.key)
    const play = (event.key).toUpperCase();
    toggleClassName(play)
    playSound(play);
   });

const delay =(ms) => new Promise(resolve => setTimeout(resolve, ms))

const toggleClassName = async (key) => {
   
        const pressedKey = document.getElementById(key);
        pressedKey.classList.add("playing");
        await delay(100);
        pressedKey.classList.remove("playing");
};

const playSound = (play) => {
    switch(play){
        case "A":
            audio = new Audio("sounds/clap.wav")
            audio.play()
        case "S":
            audio = new Audio("sounds/hihat.wav")
            audio.play()
        case "D":
            audio = new Audio("sounds/kick.wav")
            audio.play()
        case "F":
            audio = new Audio("sounds/openhat.wav")
            audio.play()
        case "G":
            audio = new Audio("sounds/boom.wav")
            audio.play()
        case "H":
            audio = new Audio("sounds/ride.wav")
            audio.play()
        case "J":
            audio = new Audio("sounds/snare.wav")
            audio.play()
        case "K":
            audio = new Audio("sounds/tom.wav")
            audio.play()
        case "L":
            audio = new Audio("sounds/tink.wav")
            audio.play()
    }

}