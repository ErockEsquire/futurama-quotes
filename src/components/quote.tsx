import React, { useState } from 'react'
import '../style/quote.scss'


export default function Quote (props: any) {

  const { handleShip, ship, setSplash, splash } = props

  const [quote, setQuote] = useState(selectQuote(futurama))
  const [index, setIndex] = useState("")
  const [clickedImages, setClickedImages] = useState(false)
  const [clickedNext, setClickedNext] = useState(false)
  
  const handleClick = () => {
    setQuote(selectQuote(futurama));
    setIndex(`${quote[1]}`);
    setClickedNext(true);
    setTimeout(() => setClickedNext(false), 500)
  }

  const handleClickedImages = () => {
    setClickedImages(true)
    setTimeout(() => setClickedImages(false), 500)
  }

  return (
    <section className="section_quotes">

      <article className="section_quotes__article_top">
        <div key={index} className={ship ? "section_quotes__article_top__div_episode dead":"section_quotes__article_top__div_episode"} onClick={() => handleShip(true)}>
          <h4>{quote[0].episode}</h4>
          <h4>{quote[0].code}</h4>
        </div>
        <span className="section_quotes__span images" onClick={() => {setSplash(!splash);handleClickedImages()}}>
          Images
          {clickedImages && <div className="circle"/>}
        </span>
      </article>
      
      <article className="section_quotes__article">
        <div key={index} className="section_quotes__article_quote__div first">
          <h2>{quote[0].speaker}</h2>
          <p>"{quote[0].quote}"</p>
        </div>
        {quote[0].speakerTwo && 
        <div className="section_quotes__article_quote__div second">
          {quote[0].speakerTwo && <h2>{quote[0].speakerTwo}</h2>}
          {quote[0].quoteTwo && <p>"{quote[0].quoteTwo}"</p>}
        </div>}
      </article>

      <span 
        className="section_quotes__span next"
        onClick={() => handleClick()}
      >
        Next
        {clickedNext && <div className="circle"/>}
      </span>

    </section>
  )
}

const selectQuote = (futurama: any) => {
  const quoteNum = Math.floor(Math.random() * Math.floor(futurama.length))
  return [futurama[quoteNum], quoteNum]
}

const futurama = [
{speaker: "Bender", quote: "Hot diggity daffodil!", episode: "War is the H-Word", code: "S02E17"},
{speaker: "Zapp Brannigan", quote: "Dammit, Kif! Where's the little umbrella? That's what makes it as scotch on the rocks.", episode: "War is the H-Word", code: "S02E17"},
{speaker: "Fry", quote: "Ugh, it’s like a party in my mouth and everyone’s throwing up!", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Zoidberg", quote: "I took the liberty of fertilizing your caviar.", episode: "Where the Buggalo Roam", code: "S03E10"},
{speaker: "Zoidberg", quote: "Your music is bad and you should feel bad!", episode: "The Devil's Hands are Idle Playthings", code: "S04E18"},
{speaker: "Bender", quote: "Afterlife? If I thought I had to live another life, I’d kill myself now!", episode: "A Pharoah to Remember", code: "S03E17"},
{speaker: "Zapp Brannigan", quote: "The way to a woman’s bed is through her parents. Have sex with them and you’re in.", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Zapp Brannigan", quote: "If we hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.", episode: "When Aliens Attack", code: "S01E12"},
{speaker: "Zapp Brannigan", quote: "Call me cocky, but if there's an alien out there I can't kill, I haven't met him and killed him yet.", episode: "When Aliens Attack", code: "S01E12"},
{speaker: "Zapp Brannigan", quote: "Happy Freedom Day, ladies! Come on, show me something. Anything. Seriously, I’d take an armpit.", episode: "A Taste Of Freedom", code: "S04E05"},
{speaker: "Nixon", quote: "In our darkest hour, we can stand erect, with proud upthrust bosoms!", speakerTwo: "Fry", quoteTwo: "Anyone who laughs is a communist.", episode: "A Taste Of Freedom", code: "S04E05"},
{speaker: "Zapp Brannigan", quote: "If it's a lesson in love, watch out; I suffer from a very sexy learning disability. What do I call it, Kif?", speakerTwo: "Kif", quoteTwo: "*Sigh* Sexlexia.", episode: "War is the H-Word", code: "S02E17"},
{speaker: "Bender", quote: "I’m so embarrassed. I wish everybody else was dead.", episode: "Bend Her", code: "S04E13"},
{speaker: "Bender", quote: "Oh, no room for Bender, huh? Fine! I’ll go build my own lunar lander, with blackjack... and hookers. In fact, forget the lunar lander and the blackjack. Ahh, screw the whole thing!", episode: "The Series has Landed", code: "S01E02"},
{speaker: "Bender", quote: "You're the kind of guy who visits Jerusalem and doesn't want to see the Sexeteria!", episode: "The Series has Landed", code: "S01E02"},
{speaker: "Bender", quote: "Have you ever tried simply turning off your TV, sitting down with your child, and hitting them?", episode: "Bender Should Not Be Allowed on TV", code: "S04E15"},
{speaker: "Leela", quote: "Fry, if it's obvious to you with your learning disability, then of course it's obvious to me!", episode: "A Bicyclops Built for Two", code: "S02E09"},
{speaker: "Alcazar", quote: "This sacred mosaic depicts our goddess of beauty.", speakerTwo: "Fry", quoteTwo: "Hmm. You got any sacred artwork of her from the back?", episode: "A Bicyclops Built for Two", code: "S02E09"},
{speaker: "Leela", quote: "Alright, Alcazar, I just have one last question for you. If you could change form, why didn't you change it in the one place that counts?", episode: "A Bicyclops Built for Two", code: "S02E09"},
{speaker: "Fry", quote: "You know what else stinks about being a slave? The hours.", episode: "A Pharoah to Remember", code: "S03E17"},
{speaker: "Fry", quote: "You know the worst thing about being a slave? They make you work, but they don't pay you or let you go.", episode: "A Pharoah to Remember", code: "S03E17"},
{speaker: "Fry", quote: "Dearly beloved, we are here today to remember Bender, taken from us in the prime of life when he was crushed by a runaway semi driven by the Incredible Hulk.", episode: "A Pharoah to Remember", code: "S03E17"},
{speaker: "Fry", quote: "But won't that change history?", speakerTwo: "Professor Farnsworth", quoteTwo: "Ooh, a lesson in not changing history from mister 'I'm-my-own-grandpa'. Let's get the hell out of here already, screw history!", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "Fry", quote: "What smells like blue?", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "Enos Fry", quote: "Did you ever get the feeling you're only goin' out with girls 'cause you're s'pose ta?", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "Professor Farnsworth", quote: "You know, you really don't cook enough roast, Leela.", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "President Truman", quote: "If you come in peace, surrender or be destroyed. If you're here to make war, we surrender.", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "President Truman", quote: "Invent NASA and tell them to get off their fannies!", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "Bender", quote: "It's not uninhabited, it's inhabited by robots.", speakerTwo: "Fry", quoteTwo: "Oh, kinda like how a warehouse is inhabited by boxes.", episode: "Fear of a Bot Planet", code: "S01E05"},
{speaker: "Bender", quote: "They let me go when I told 'em I killed a million billion humans.", episode: "Fear of a Bot Planet", code: "S01E05"},
{speaker: "Bender", quote: "Uhh, I'm a little tired right now. Would it be alright if I just gave them a savage beating?", episode: "Fear of a Bot Planet", code: "S01E05"},
{speaker: "Bender", quote: "And what a surprise!. Look who's scraping up the filth. Is it a human child? I wish!", episode: "Fear of a Bot Planet", code: "S01E05"},
{speaker: "Bender", quote: "Oh, so just cause a robot wants to kill humans, that makes him a 'radical'.", episode: "Fear of a Bot Planet", code: "S01E05"},
{speaker: "Bender", quote: "Okay, I'm done reconfoobling the energy mo-tron... or whatever.", episode: "Where No Fan Has Gone Before", code: "S04E11"},
{speaker: "Whale Biologist", quote: "You're lumpy and you smell awful. I calls em like I sees em. I'm a whale biologist.", episode: "Three Hundred Big Boys", code: "S04E16"},
{speaker: "Amy Wong", quote: "Fry, where's your brain slug?", speakerTwo: "Professor Farnsworth", quoteTwo: "Poor little guy, starved to death.", episode: "Raging Bender", code: "S02E12"},
{speaker: "Professor Farnsworth", quote: "Good news, everyone! I taught the toaster to feel love!", episode: "Raging Bender", code: "S02E12"},
{speaker: "Bender", quote: "Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree.", speakerTwo: "Professor Farnsworth", quoteTwo: "But like most politicians, he promised more than he could deliver.", episode: "A Head in the Polls", code: "S02E07"},
{speaker: "Hermes", quote: "Sweet ghost of Babylon!", episode: "The Cryonic Woman", code: "S03E03"},
{speaker: "Fry", quote: "Things are different this time. Before she was demanding and possessive, but now she wants me to do stuff and stay with her all the time.", episode: "The Cryonic Woman", code: "S03E03"},
{speaker: "Defrosted Man", quote: "I wanted to meet Shakespeare and I figured that time was cyclical.", speakerTwo: "Fry", quoteTwo: "Nope. Straight line.", episode: "The Cryonic Woman", code: "S03E03"},
{speaker: "Professor Farnsworth", quote: "If we don't get rid of the worms now, they'll burrow so deep into the bowel, not even Hermes famous jerk prunes could dislodge them.", speakerTwo: "Hermes", quoteTwo: "I call it arribean Draino.", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Professor Farnsworth", quote: "Your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.", speakerTwo: "Zoidberg", quoteTwo: "There's no part of that sentence I didn't like!", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Fry", quote: "Goodbye friends. I never thought I would die like this, but I always really hoped.", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Professor Farnsworth", quote: "We seem to be lurching forward randomly in time, like a needle skipping on a record player!", speakerTwo: "Amy Wong", quoteTwo: "What's causing it? Is it my outfit?", episode: "Time Keeps On Slippin", code: "S03E14"},
{speaker: "Hermes", quote: "I'm just glad my fat, ugly mama isn't alive to see this day.", speakerTwo: "Professor Farnsworth", quoteTwo: "Enough about your promiscuous mother, Hermes. We have bigger problems.", episode: "Time Keeps On Slippin", code: "S03E14"},
{speaker: "Leela", quote: "I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise about our mamas.", episode: "Time Keeps On Slippin", code: "S03E14"},
{speaker: "Professor Farnsworth", quote: "There'll be plenty of time to discuss your objections when and if you return.", episode: "A Big Piece of Garbage", code: "S01E08"},
{speaker: "Leela", quote: "I was trying to save the Popplers. You were sucking them down like the fat hog you are, and you were stepping on them for fun.", episode: "The Problem with Popplers", code: "S02E15"},
{speaker: "Bender", quote: "Stop eating Popplerss. Stop eating them with honey mustard sauce. Stop eating them with tangy sweet & sour sauce. Stop eating the new fiesta Popplers salad. Stop taking advantage of the money saving 12 pack. Stop enjoying Popplerss on the patio, in the car, or on the boat. Wherever good times are had!", episode: "The Problem with Popplers", code: "S02E15"},
{speaker: "Amy Wong", quote: "Look, everyone wants to be like Germany, but do we really have the pure strength of will?", episode: "Futurestock", code: "S03E21"},
{speaker: "Hermes", quote: "We'll start by slashing salaries. And this time, I mean REALLY slashing.", episode: "The Route of All Evil", code: "S03E12"},
{speaker: "Dwight", quote: "I heard alcohol makes you stupid.", speakerTwo: "Fry", quoteTwo: "No I'm.. doesn't!", episode: "The Route of All Evil", code: "S03E12"},
{speaker: "Fry", quote: "Here's to another lousy millenium.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Fry", quote: "Hello? Pizza delivery for uh... I.C. Wiener? Aww, crud. I always thought by this point in my life I'd be the one making the prank calls.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Professor Farnsworth", quote: "Did he at least die painlessly? ...To shreds, you say. How's his wife holding up? ...To shreds, you say.", episode: "I, Roommate", code: "S01E03"},
{speaker: "Professor Farnsworth", quote: "My God, this is an outrage! I was going to eat that mummy!", episode: "I, Roommate", code: "S01E03"},
{speaker: "Professor Farnsworth", quote: "This is for you, Fry. Zevulon the Great. He's teriyaki style!", episode: "I, Roommate", code: "S01E03"},
{speaker: "Bender", quote: "Hey baby, you wanna kill all humans?", episode: "I, Roommate", code: "S01E03"},
{speaker: "Hermes", quote: "Labor Day? That phoney-baloney holiday crammed down our throats by fat-cat union gangsters?", episode: "When Aliens Attack", code: "S01E12"},
{speaker: "Bender", quote: "Your social security check is late! Things cost more than they used to! Young people use curse words!", episode: "A Clone of My Own", code: "S02E10"},
{speaker: "Fry", quote: "Try waking him up by shocking him!", speakerTwo: "Bender", quoteTwo: "Your social security check is late! Things cost more than they used to! Young people use curse words!", episode: "A Clone of My Own", code: "S02E10"},
{speaker: "Professor Farnsworth", quote: "Show us this, 'the wheel.'", episode: "Mother's Day", code: "S02E14"},
{speaker: "Fry", quote: "Mmm! They're like sex, except I'm having it!'", episode: "The Problem with Popplers", code: "S02E15"},
{speaker: "Kid", quote: "It's like skateboarding, but half of the time, someone dies.", speakerTwo: "Fry", quoteTwo: "Oh. So it's a little safer than skateboarding.", episode: "The Cryonic Woman", code: "S03E03"},
{speaker: "Fry", quote: "I feel like a rat. Here I am whining like a pig while all along Leela is as lonely as a frog.", episode: "XMAS Story", code: "S02E04"},
{speaker: "Fry", quote: "My girlfriend had one of those. Actually it wasn't hers, it was her dad's. And she wasn't my girlfriend, she just lived next door and never closed her curtains?", episode: "Lesser of Two Evils", code: "S02E06"},
{speaker: "Scruffy", quote: "Boy, I've never seen him so down. Or ever before.", episode: "A Pharaoh to Remember", code: "S03E17"},
{speaker: "Fry", quote: "That was the saltiest thing I ever tasted! And I once ate a big heaping bowl of salt!", episode: "My Three Suns", code: "S01E07"},
{speaker: "Scruffy", quote: "Jail's not so bad. You can make sangria in the terlet. Course, it's shank or be shanked.", episode: "Three Hundred Big Boys", code: "S04E16"},
{speaker: "Scruffy", quote: "I'm Scruffy... the janitor.", episode: "A Fishful of Dollars", code: "S01E06"},
{speaker: "Bender", quote: "Bite my shiny metal ass.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Sal", quotes: "Yeah, you're right, she don't get enough meat for a guy like me.", speakerTwo: "Fry", quoteTwo: "She does too! She’s loaded with meat! She’s got more meat than a cow!", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Bender", quote: "Pay dirt! I've got the clover! Plus, his wedding ring. Sorry, ladies, I'm taken. Hey, Fry, you want me to smack the corpse up a little?", episode: "The Luck of the Fryish", code: "S04E03"},
{speaker: "Clamps", quote: "Gee, you think? You think that maybe I should use these clamps that I use every single day at every opportunity? You're a freaking genius, you idiot! ", episode: "Bender Gets Made", code: "S02E13"},
{speaker: "Roberto", quote: "I'm thinking of a number between 1 and 10. Guess it, and you die first! GO!!!", episode: "Insane in the Mainframe", code: "S03E11"},
{speaker: "LaBarbara", quote: "That's not back fat bacon! That's your back fat bakin'!", episode: "Neutopia", code: "S06E20"},
{speaker: "Bender", quote: "Maybe you can interface with my ass...by biting it!", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Fry", quote: "Although the snu-snu part's gonna be pretty good.", speakerTwo: "Zapp Brannigan", quoteTwo: "Baby, it'll blow your mind.", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Slurms Mckenzie", quote: "Alright, when we get to Earth. But please, don't invite too many people, I wanna keep it small.", speakerTwo: "Bender", quoteTwo: "No can do, Slurms.", episode: "Fry and the Slurm Factory", code: "S01E13"},
{speaker: "Hermes", quote: "So you're telling me I could fire my whole staff and hire Grunka Lunkas at half the cost?", speakerTwo: "Glurmo", quoteTwo: "That's right. They think they have a good union but they don't. *whispers* They're basically slaves.", episode: "Fry and the Slurm Factory", code: "S01E13"},
{speaker: "Bender", quote: "Well, they're tasty right? Let's call 'em Tasticles.", episode: "The Problem with Popplers", code: "S02E15"},
{speaker: "Old Man Waterfall", quote: "You can crush me but you can't crush my spirit! AGHH my spirit!", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "Old Man Waterfall", quote: "That's right, I'm a polygamist. Yet I would gladly eat a flag myself, had I not used my intestine as a rope to hoist a flag made of my own skin, if it would protect the freedoms of the proud people who salute that flag. Freedom such as polygamy.", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "Old Man Waterfall", quote: "I can't wait to tell my husband!", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "Old Man Waterfall", quote: "I don't condone what Dr. Zoidberg did, but I'll fight tooth and nail for his freedom to do it! Or I would, if I hadn't lost my nails and teeth on Mars and Saturn, respectively.", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "That Guy", quote: "My only regret, is that I have... bone-itis...", episode: "Futurestock", code: "S03E21"},
{speaker: "Fry", quote: "I'll be whatever I wanna do!", episode: "Futurestock", code: "S03E21"},
{speaker: "That Guy", quote: "There are two kinds of people: sheep and sharks. Anyone who is a sheep is fired. Who's a sheep?", speakerTwo: "Zoidberg", quoteTwo: "Errr, excuse me... which is the one people like to hug?", episode: "Futurestock", code: "S03E21"},
{speaker: "Leela", quote: "Oh my god! I'm a millionaire! Suddenly I have an opinion on the capital gains tax!", episode: "Futurestock", code: "S03E21"},
{speaker: "Leela", quote: "Bender, this is Fry's decision. And he made it wrong, so it's time for us to interfere in his life.", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Lucy LiuBot", quote: "You're one sexy man **PHILLIP J FRY**.", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Lucy LiuBot", quote: "Oh, Fry, I love you more than the moon, the stars, the **POETIC IMAGE #36 NOT FOUND**.", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Leela", quote: "Oh no! They're forming a human pyramid... of robots!", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Leela", quote: "At least here, you'll be treated with dignity and respect. Now strip naked and get on the probulator.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Zapp Brannigan", quote: "She's a beautiful ship, alright. Shapely, seductive. I'm gonna fly her brains out.", episode: "A Flight to Remember", code: "S01E10"},
{speaker: "Zapp Brannigan", quote: "But as a gentleman, I must warn you. If you so  much as glance at another woman, I will be all over Leela like a fly on a very seductive pile of manure.", episode: "A Flight to Remember", code: "S01E10"},
{speaker: "Hermes", quote: "My manwich!", episode: "The Deep South", code: "S02E12"},
{speaker: "Bender", quote: "Do a flip!", episode: "How Hermes Requisitioned His Groove Back", code: "S02E14"},
{speaker: "Number 1.0", quote: "Bureacrat Conrad, you are technically correct; the best kind of correct.", episode: "How Hermes Requisitioned His Groove Back", code: "S02E14"},
{speaker: "Bender", quote: "I guess a robot would have to be crazy to wanna be a folk singer...", episode: "The Series Has Landed", code: "S01E02"},
{speaker: "Edna", quote: "I just want to say that today I got up, and had a piece of toast, and then I brushed my teet-", speakerTwo: "Fry", quoteTwo: "SHUT UP!", episode: "Why Must I Be a Crustacean in Love", code: "S02E09"},
{speaker: "Fry", quote: "People said I was dumb, but I proved them!", episode: "The Day the Earth Stood Stupid", code: "S03E07"},
{speaker: "Fry", quote: "All right, it's Saturday night. I have no date, a two liter bottle of Shasta, and my all-Rush mix tape. Let's rock!", episode: "Anthology of Interest II", code: "S03E18"},
{speaker: "Professor Farnsworth", quote: "I'm afraid the Smelloscope can't locate Bender. His fragrance is too mild. It's being overwhelmed by local sources.", speakerTwo: "Zoidberg", quoteTwo: "Hooray, people are paying attention to me!", episode: "Godfellas", code: "S03E20"},
{speaker: "Monk One", quote: "He speaks out of love for his friend. Perhaps that love in his heart is God.", speakerTwo: "Monk Two", quoteTwo: "Oh, how convenient! A way of looking for God that doesn't require looking through a telescope. Get back to work!", episode: "Godfellas", code: "S03E20"},
{speaker: "Fry", quote: "Man, I don't wanna hurt Bender's feelings but this food actually tastes better as vomit!", episode: "The 30% Iron Chef", code: "S03E22"},
]
