function envelope_function() {
    document.querySelector("#open-btn").addEventListener("click", () => {
        document.querySelector(".envelope-header").classList.add("open-header");
        document.querySelector(".envelope-body-overlay").classList.add("open-envelope-body-overlay");
        document.querySelector("#open-btn").style.display = "none";
        audio.play();
        typing_effect();
    });
}

envelope_function();


var i = 0;
var letter = `Today is your special day, Aly! 
I'm really glad to meet you because you do simple things for me that make me happy. 
You are pretty and kind. Your pretty smile and your vibes give me a happy smile. 
Your positive, unwavering spirit is truly an inspiration. 
I wish you had a great day today. I hope to see you on my birthday too. 
Just be safe always, and don't forget if you need someone, I'm always here. 
I got you, and promise me not to hide yourself when you're in pain. 
It's unfair that we laughed together but you cried alone. 
I hope your wish will come true. Don't forget to pray always. 
Again, Happy Birthday!!! see you on my birthday. I'm counting on you, Aly.`;
var speed = 130;

function typing_effect(){

    if(i < letter.length){
        document.querySelector(".message").textContent += letter.charAt(i);
        i++;
        setTimeout(typing_effect, speed);
    }
}



