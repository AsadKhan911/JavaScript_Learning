let arr_joke = ["What do kids play when their mom is using the phone? Bored games" ,
                "What do you call an ant who fights crime? A vigilANTe" ,
                "Why are snails slow? Because they’re carrying a house on their back" ,
                "What’s the smartest insect? A spelling bee!" ,
                "What does a storm cloud wear under his raincoat? Thunderwear.",
                "What is fast, loud and crunchy? A rocket chip.",
                "How does the ocean say hi? It waves!",
                "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.",
                "Why did the teddy bear say no to dessert? Because she was stuffed.",
                "Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands.",
                "Name the kind of tree you can hold in your hand? A palm tree!",
                "What do birds give out on Halloween? Tweets.",
                "What has ears but cannot hear? A cornfield.",
                "What’s a cat’s favorite dessert? A bowl full of mice-cream.",
                "Where did the music teacher leave her keys? In the piano!"]

const joke_func = () => {
    let random_Num =Math.floor(Math.random()*arr_joke.length) //generates a random number till array length.
    let joke_div = document.getElementsByClassName('joke_container')[0]
    joke_div.innerHTML = arr_joke[random_Num]
}

setInterval(joke_func , 3000);
// joke_func()