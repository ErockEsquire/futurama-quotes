import React, { useState } from 'react'
import '../style/quote.scss'


export default function Quote () {

  const [quote, setQuote] = useState(selectQuote(futurama))
  const [index, setIndex] = useState("")
  
  const handleClick = (e:any) => {
    setQuote(selectQuote(futurama))
    setIndex(`${quote[1]}`)
  }

  return (
    <article className="article_quotes">

      <div key={index} className="episode_name">
        <h4>{quote[0].episode}</h4>
        <h4>{quote[0].code}</h4>
      </div>
      
      <section className="article_quotes__section">
        <div key={index} className="article_quotes__section_quote__div">
          <h2>{quote[0].speaker}</h2>
          <p>"{quote[0].quote}"</p>
        </div>
        {quote[0].speakerTwo && 
        <div className="article_quotes__section_quote__div">
          {quote[0].speakerTwo && <h2>{quote[0].speakerTwo}</h2>}
          {quote[0].quoteTwo && <p>"{quote[0].quoteTwo}"</p>}
        </div>}
      </section>

      <span 
        className="article_quotes__span"
        onClick={(e) => handleClick(e)}
      >
        NEXT
      </span>

    </article>
  )
}

const selectQuote = (futurama: any) => {
  const quoteNum = Math.floor(Math.random() * Math.floor(futurama.length))
  return [futurama[quoteNum], quoteNum]
}

const futurama = [
{speaker: "Bender", quote: "Hot Diggity Daffodil!", episode: "War is the H-Word", code: "S02E17"},
{speaker: "Fry", quote: "Ugh, it’s like a party in my mouth and everyone’s throwing up!", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Zoidberg", quote: "I took the liberty of fertilizing your caviar.", episode: "Where the Buggalo Roam", code: "S03E10"},
{speaker: "Zoidberg", quote: "Your music is bad & you should feel bad!", episode: "The Devil's Hands are Idle Playthings", code: "S04E18"},
{speaker: "Bender", quote: "Afterlife? If I thought I had to live another life, I’d kill myself now!", episode: "A Pharoah to Remember", code: "S03E17"},
{speaker: "Zapp Brannigan", quote: "The way to a woman’s bed is through her parents. Have sex with them and you’re in.", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Zapp Brannigan", quote: "If we hit that bullseye, the rest of the dominoes will fall like a house of cards. Checkmate.", episode: "When Aliens Attack", code: "S01E12"},
{speaker: "Zapp Brannigan", quote: "Happy Freedom Day, ladies! Come on, show me something. Anything. Seriously, I’d take an armpit.", episode: "A Taste Of Freedom", code: "S04E05"},
{speaker: "Nixon", quote: "In our darkest hour, we can stand erect, with proud upthrust bosoms!", speakerTwo: "Fry", quoteTwo: "Anyone who laughs is a communist!", episode: "A Taste Of Freedom", code: "S04E05"},
{speaker: "Zapp Brannigan", quote: "If it's a lesson in love, watch out; I suffer from a very sexy learning disability. What do I call it, Kif?", speakerTwo: "Kif", quoteTwo: "*Sigh* Sexlexia.", episode: "War is the H-Word", code: "S02E17"},
{speaker: "Bender", quote: "I’m so embarrassed. I wish everybody else was dead.", episode: "Bend Her", code: "S04E13"},
{speaker: "Bender", quote: "Oh, no room for Bender, huh? Fine! I’ll go build my own lunar lander, with blackjack and hookers. In fact, forget the lunar lander and the blackjack. Ahh, screw the whole thing!", episode: "The Series has Landed", code: "S01E02"},
{speaker: "Bender", quote: "Have you ever tried simply turning off your TV, sitting down with your child, and hitting them?", episode: "Bender Should Not Be Allowed on TV", code: "S04E15"},
{speaker: "Fry", quote: "You know what else sucks about being a slave? The hours.", episode: "A Pharoah to Remember", code: "S03E17"},
{speaker: "Professor Farnsworth", quote: "Oh, a lesson in not changing history from mister 'I'm-my-own-grandpa'.", episode: "Roswell That Ends Well", code: "S03E19"},
{speaker: "Bender", quote: "Okay, I'm done reconfoobling the energy mo-tron... or whatever.", episode: "Where No Fan Has Gone Before", code: "S04E11"},
{speaker: "Whale Biologist", quote: "You're lumpy and you smell awful. I calls em like I sees em. I'm a whale biologist.", episode: "Three Hundred Big Boys", code: "S04E16"},
{speaker: "Amy Wong", quote: "Fry, where's your brain slug?", speakerTwo: "Professor Farnsworth", quoteTwo: "Poor little guy, starved to death.", episode: "Raging Bender", code: "S02E12"},
{speaker: "Hermes", quote: "Sweet ghost of Babylon!", episode: "The Cryonic Woman", code: "S03E03"},
{speaker: "Professor Farnsworth", quote: "If we don't get rid of the worms now, they'll burrow so deep into the bowel, not even Hermes famous jerk prunes could dislodge them.", speakerTwo: "Hermes", quoteTwo: "I call it carribean Draino.", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Fry", quote: "Goodbye friends. I never thought I would die like this, but I always really hoped.", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Professor Farnsworth", quote: "We seem to be lurching forward randomly in time, like a needle skipping on a record player!", speakerTwo: "Amy Wong", quoteTwo: "What's causing it? Is it my outfit?", episode: "Time Keeps On Slippin", code: "S03E14"},
{speaker: "Hermes", quote: "I'm just glad my fat, ugly mama isn't alive to see this day.", speakerTwo: "Professor Farnsworth", quoteTwo: "Enough about your promiscuous mother, Hermes! We have bigger problems.", episode: "Time Keeps On Slippin", code: "S03E14"},
{speaker: "Professor Farnsworth", quote: "There'll be plenty of time to discuss your objections when and if you return.", episode: "A Big Piece of Garbage", code: "S01E08"},
{speaker: "Leela", quote: "I was trying to save the Popplers. You were sucking them down like the fat hog you are, and you were stepping on them for fun.", episode: "The Problem with Poplars", code: "S02E15"},
{speaker: "Bender", quote: "Stop eating Poplars. Stop eating them with honey mustard sauce. Stop eating them with tangy sweet & sour sauce. Stop eating the new fiesta Poplar salad. Stop taking advantage of the money saving 12 pack.", episode: "The Problem with Poplars", code: "S02E15"},
{speaker: "Amy Wong", quote: "Look, everyone wants to be like Germany, but do we really have the pure strength of will?", episode: "Futurestock", code: "S03E21"},
{speaker: "Hermes", quote: "We'll start by slashing salaries. And this time, I mean REALLY slashing.", episode: "The Route of All Evil", code: "S03E12"},
{speaker: "Fry", quote: "Here's to another lousy millenium.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Professor Farnsworth", quote: "Did he at least die painlessly? ...To shreds, you say. How's his wife holding up? ...To shreds, you say.", episode: "I, Roommate", code: "S01E03"},
{speaker: "Professor Farnsworth", quote: "My God, this is an outrage! I was going to eat that mummy!", episode: "I, Roommate", code: "S01E03"},
{speaker: "Professor Farnsworth", quote: "This is for you, Fry. Zevulon the Great. He's teriyaki style!", episode: "I, Roommate", code: "S01E03"},
{speaker: "Hermes", quote: "Labor Day? That phoney-baloney holiday crammed down our throats by fat-cat union gangsters?", episode: "When Aliens Attack", code: "S01E12"},
{speaker: "Bender", quote: "Your social security check is late! Things cost more than they used to! Young people use curse words!", episode: "A Clone of My Own", code: "S02E10"},
{speaker: "Professor Farnsworth", quote: "Show us this 'the wheel.'", episode: "Mother's Day", code: "S02E14"},
{speaker: "Fry", quote: "They're like sex, except I'm having it!'", episode: "The Problem with Poplars", code: "S02E15"},
{speaker: "Kid", quote: "It's like skateboarding, but half of the time, someone dies.", speakerTwo: "Fry", quoteTwo: "Oh. So it's a little safer than skateboarding.", episode: "The Cryonic Woman", code: "S03E03"},
{speaker: "Fry", quote: "I feel like a rat. Here I am whining like a pig while all along Leela is as lonely as a frog.", episode: "XMAS Story", code: "S02E04"},
{speaker: "Fry", quote: "My girlfriend had one of those. Actually it wasn't hers, it was her dad's. And she wasn't my girlfriend, she just lived next door and never closed her curtains?", episode: "Lesser of Two Evils", code: "S02E06"},
{speaker: "Scruffy", quote: "Boy, I've never seen him so down. Or ever before.", episode: "A Pharaoh to Remember", code: "S03E17"},
{speaker: "Scruffy", quote: "Jail's not so bad. You can make sangria in the terlet. Course, it's shank or be shanked.", episode: "Three Hundred Big Boys", code: "S04E16"},
{speaker: "Scruffy", quote: "I'm Scruffy... the janitor.", episode: "A Fishful of Dollars", code: "S01E06"},
{speaker: "Bender", quote: "Bite my shiny metal ass.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Fry", quote: "She does too! She’s loaded with meat! She’s got more meat than a cow!", episode: "Parasites Lost", code: "S03E04"},
{speaker: "Bender", quote: "Pay dirt! I've got the clover! Plus, his wedding ring. Sorry, ladies, I'm taken. Hey, Fry, you want me to smack the corpse up a little?", episode: "The Luck of the Fryish", code: "S04E03"},
{speaker: "Clamps", quote: "Gee, you think? You think that maybe I should use these clamps that I use every single day at every opportunity? You're a freaking genius, you idiot! ", episode: "Bender Gets Made", code: "S02E13"},
{speaker: "Roberto", quote: "I'm thinking of a number between 1 and 10. Guess it, and you die first! GO!!!", episode: "Insane in the Mainframe", code: "S03E11"},
{speaker: "LaBarbara", quote: "That's not back fat bacon! That's your back fat bakin'!", episode: "Neutopia", code: "S06E20"},
{speaker: "Bender", quote: "Maybe you can interface with my ass...by biting it!", episode: "Amazon Women in the Mood", code: "S03E05"},
{speaker: "Slurms Mckenzie", quote: "Alright, when we get to Earth. But please, don't invite too many people, I wanna keep it small.", speakerTwo: "Bender", quoteTwo: "No can do, Slurms.", episode: "Fry and the Slurm Factory", code: "S01E13"},
{speaker: "Hermes", quote: "So you're telling me I could fire my whole staff and hire Grunka Lunkas at half the cost?", speakerTwo: "Glurmo", quoteTwo: "That's right. They think they have a good union but they don't. *whispers* They're basically slaves.", episode: "Fry and the Slurm Factory", code: "S01E13"},
{speaker: "Bender", quote: "Well, they're tasty right? Let's call em Tasticles.", episode: "The Problem with Poplars", code: "S02E15"},
{speaker: "Old Man Waterfall", quote: "You can crush me but you can't crush my spirit! AGHH my spirit!", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "Old Man Waterfall", quote: "That's right, I'm a polygamist. Yet I would gladly eat a flag myself, had I not used my intestine as a rope to hoist a flag made of my own skin, if it would protect the freedoms of the proud people who salute that flag. Freedom such as polygamy.", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "Old Man Waterfall", quote: "I can't wait to tell my husband!", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "Old Man Waterfall", quote: "I don't condone what Dr. Zoidberg did, but I'll fight tooth and nail for his freedom to do it! Or I would, if I hadn't lost my nails and teeth on Mars and Saturn, respectively.", episode: "A Taste of Freedom", code: "S04E05"},
{speaker: "That Guy", quote: "My only regret, is that I have... bone-itis...", episode: "Futurestock", code: "S03E21"},
{speaker: "Fry", quote: "I'll be whatever I wanna do!", episode: "Futurestock", code: "S03E21"},
{speaker: "That Guy", quote: "There are two kinds of people: sheep and sharks. Anyone who is a sheep is fired. Who's a sheep?", speakerTwo: "Zoidberg", quoteTwo: "Errr, excuse me... which is the one people like to hug?", episode: "Futurestock", code: "S03E21"},
{speaker: "Leela", quote: "Oh my god! I'm a millionare! Suddenly I have an opinion on the capital gains tax!", episode: "Futurestock", code: "S03E21"},
{speaker: "Leela", quote: "Bender, this is Fry's decision. And he made it wrong, so it's time for us to interfere in his life.", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Lucy LiuBot", quote: "You're one sexy man, PHILLIP J FRY.", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Leela", quote: "Oh no! They're forming a human pyramid... of robots!", episode: "I Dated a Robot", code: "S03E15"},
{speaker: "Leela", quote: "At least here, you'll be treated with dignity and respect. Now strip naked and get on the probulator.", episode: "Space Pilot 3000", code: "S01E01"},
{speaker: "Zapp Brannigan", quote: "She's a beautiful ship, alright. Shapely, seductive. I'm gonna fly her brains out.", episode: "A Flight to Remember", code: "S01E10"},
{speaker: "Zapp Brannigan", quote: "But as a gentleman, I must warn you. If you so  much as glance at another woman, I will be all over Leela like a fly on a very seductive pile of manure.", episode: "A Flight to Remember", code: "S01E10"},
{speaker: "Number 1.0", quote: "Bureacrat Conrad, you are technically correct; the best kind of correct.", episode: "How Hermes Requisitioned His Groove Back", code: "S02E14"},
{speaker: "Bender", quote: "I guess a robot would have to be crazy to wanna be a folk singer...", episode: "The Series Has Landed", code: "S01E02"},
]