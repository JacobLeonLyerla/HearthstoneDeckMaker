/*          JUST A GENERATOR FUNCTION THAT I WANT FOR REFERENCE
//declare all the functings to yield in the generator and tie them together.
const thirdTier={
    heading:'Third tier decks',
paladin:'Aggro Paladin',
priest:'Big Priest',
mage:'Control Mage',
hunter:'Midrange Hunter',
[Symbol.iterator]: function*(){
    

    yield this.heading;

    yield this.paladin;
    
    yield this.priest;
    
    yield this.mage;
    


    yield this.hunter;
}
};



const secondTier ={
 
    heading:'Second tier decks',
druid:'Agro Druid',
shaman:'Evolve Shaman',
paladin:"Midrange Paladin",
paladin2:'Murloc Paladin',
warrior:'Pirate Warrior',
mage:'Tempo Mage',
warlock:'Zoo Warlock',
[Symbol.iterator]: function*(){
    yield this.heading;
    yield this.druid;
    
    yield this.shaman;
    
    yield this.paladin;
    
    yield this.paladin2;
    
    yield this.warrior;
    
    yield this.mage;
    
    yield this.warlock;
}


};



const tierList ={
    //the top code ties the objects together
    // all the other objects are tied in this one
    //if you make a fouth tier it has to be notated here
    secondTier,
    thirdTier,
    heading:'Top teir decks',
priest:"Highlander Priest",
druid:'Jade Druid',
rogue:'Tempo Rogue',

[Symbol.iterator]: function*(){

  
      yield this.heading;

yield this.priest;

yield this.druid;

yield this.rogue;
// makes a door that goes into the next function
yield* this.secondTier;
yield* this.thirdTier;

  
}

};



// this calls code out of the topTier object






//run a for loop over the iterator and then output
for(let name of tierList){
 console.log(name)
}





*/


/*I want this app to have be for creating a data base of ratings, including stuff like
Brian Kibler, Firebat,Zeale,Krip,Trump,Hafu,Raynad,Disguied Toast, HearthPwn,
 and other MAJOR personalities
i do not watch them all so i can't say who,
this will inculde number ratings even if they used words to describe cards such as
good or bad or great or average, i will convert that too numbers the best i can,
i will then use those numbers to calculate the total card value in each deck, 
i want to let a player pick cards thet make up a 30 card Hearthstone deck, 
and then be able to see a total and avg amount of points based on the cards in the decks value
after this i will want to allow the play to decide who they would like the rating from,
the value of a kripp deck and the value of a kibler deck is going to be different.




*/

/* figure out a function that will take an array and grab the last item
in every array i make i will set the last item to the star value
so something like array.length -1 should get that
and then just sum it up using a for each
something like
arr.foreach((prev,cur)=>{
    let total = 0;
   return total = prev.value + cur.value;
})
allowing me to get the total of the whole array,

*/

/*
{
    this is the the card object and it will represent each card
    
    name:'',
    the rareity can be common, rare, epic or legendary
    rarity:'',
    Cost of the card located in the top left of the card
    cost:0,
    this will be the attack of the and the defense follows they will be set to 0 on spells
    attack: 0,
    defense:0,
    armor that is given by a spell or a hero card
    armor:0,
    type can be either minion spell or weapon OR DEATH KNIGHT~~!!
    type:'',
    tribe is only for stuff like dragon and stuff that has a type if it does not it not be
    declared
    tripe:'',
    class:'',
    effect:'none',
    checks if standard so i can sort wild from standard decks
    isStandard:true:
    // adding in an ID for each card in the game it's going to start with the set and then a number

    id:'0'
    // tihs will be for stuff like taunt and so on, an array of mechanics i'll add in after
    // i get the code up and running
mechanics: [
		""
]
}

*/

                //remove class tags
const trumpsValues = [1,5,5,1,4,1,4,1,3,1,3,1,1,1,3,1,1,1,1,1]


const knightsoftheFrozenThrone =[
 // going to leave the first object blank so i can copy it without needing to change values.
/*

    {
        name:'',
        rarity:'',
        cost:0,
        attack: 0,
        defense:0,
        armor:0,
        durability:0,
        type:'',
        tribe:'none',
        class:'',
        effect:'none',
        isStandard:true
        id:'KotFT'

    },
    
    
    */
{
    name:'Hadronox',
    rarity:'Legendary',
    cost:9,    
    attack: 3,
    defense:7,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'Beast',
    class:'Druid',
    effect:'Deathrattle: Summon your Taunt minions that died this game.',
    isStandard:true,
    id:'KotFT1'

},
{
    name:'Malfurion the Pestilent',
    rarity:'Legendary',
    cost:7,    
    attack: 0,
    defense:0,
    armor:5,
    durability:0,
    type:'Death Knight',
    tribe:'none',
    class:'Druid',
    effect:'Choose One- Summon 2 Poisonous Spiders or 2 Scarabs with Taunt.',
    isStandard:true,
    id:'KotFT2'

},
{
    name:'Ultimate Infestation',
    rarity:'Epic',   
    cost:10,
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Druid',
    effect:'Deal 5 damage. Draw 5 cards. Gain 5 Armor. Summon a 5/5 Ghoul.',
    isStandard:true,
    id:'KotFT3'

},
{
    name:'Fatespinner',
    rarity:'Epic',
    cost:5,    
    attack: 5,
    defense:3,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Druid',
    effect:'Choose a DeathRattle (secretly)- Deal 3 damage to all minions: or Give them +2/+2.',
    isStandard:true,
    id:'KotFT4'

},
{
    name:'Spreading Plague',
    rarity:'Rare',
    cost:6,    
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Druid',
    effect:'Summon a 1/5 Scarab with Taunt. If your oppent has more minions. cast this again.',
    isStandard:true,
    id:'KotFT5'


},
{
    name:'Strongshell Scavenger',
    rarity:'Rare',
    cost:4,    
    attack: 2,
    defense:3,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Druid',
    effect:'Battlecry: Give your Taunt minion+2/+2.',
    isStandard:true,
    id:'KotFT6'

},
{
    name:'Druid of the Swarm',
    rarity:'Rare',
    cost:2,    
    attack: 1,
    defense:2,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Druid',
    effect:'Choose One - Transform into a 1/2 with Poisonous: or a 1/5 with Taunt.',
    isStandard:true,
    id:'KotFT7'

},
{
    name:'Webweave',
    rarity:'Common',
    cost:5,    
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Druid',
    effect:'Summon two 1/2 Poisonous Spiders.',
    isStandard:true,
    id:'KotFT8'

},
{
    name:'Crypt Lord',
    rarity:'Common',
    cost:3,    
    attack: 1,
    defense:6,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Druid',
    effect:'Taunt After you summon a minion gain +1 Health.',
    isStandard:true,
    id:'KotFT9'

},
{
    name:'Gnash',
    rarity:'Common',
    cost:3,    
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Druid',
    effect:'Give your hero +3 Attack this turn Gain 3 Armor.',
    isStandard:true,
    id:'KotFT10'

},

{
    name:'Deathstalker Rexxar',
    rarity:'Legendary',
    cost:6,
    attack: 0,
    defense:0,
    armor:5,
    durability:0,
    type:'Death Knight',
    tribe:'none',
    class:'Hunter',
    effect:'Battlecry: Deal 2 damage to all enemy minions.',
    isStandard:true,
    id:'KotFT11'

},
{
    name:'Professor Putricide',
    rarity:'Legendary',
    cost:4,
    attack: 5,
    defense:4,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Hunter',
    effect:'After you play a Secret, put a random Hunter Secret into the battlefield.',
    isStandard:true,
    id:'KotFT12'

},
{
    name:'Abominable Bowman',
    rarity:'Epic',
    cost:7,
    attack: 6,
    defense:7,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Hunter',
    effect:'Deathrattle: Summon a random friendly Beast that died this game.',
    isStandard:true,
    id:'KotFT13'

},


{
    name:'Toxic Arrow',
    rarity:'Epic',
    cost:2,
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Hunter',
    effect:'Deal 2 damage to a minion. If it survives, give it Poisonous',
    isStandard:true,
    id:'KotFT14'

},
{
    name:'Corpse Widow',
    rarity:'Rare',
    cost:5,
    attack: 4,
    defense:6,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'Beast',
    class:'Hunter',
    effect:'Your Deathrattle cards cost (2) less.',
    isStandard:true,
    id:'KotFT15'

},
{
    name:'Exploading Bloatbat',
    rarity:'Rare',
    cost:4,
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'Beast',
    class:'Hunter',
    effect:'DeathRattle: Deal 2 damage to all enemy minions.',
    isStandard:true,
    id:'KotFT16'

},
{
    name:'Venomstrike Trap',
    rarity:'Rare',
    cost:2,
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Hunter',
    effect:'Secret: When one of your minions is attacked, summon a 2/3 Poisonous Cobra.',
    isStandard:true,
    id:'KotFT17'

},
{
    name:'Bearshark',
    rarity:'Common',
    cost:3,
    attack: 4,
    defense:3,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'Beast',
    class:'Hunter',
    effect:'Can\'t be targeted by spells or Hero Powers.',
    isStandard:true,
    id:'KotFT18'


},
{
    name:'Stitched Tracker',
    rarity:'Common',
    cost:3,
    attack: 2,
    defense:2,
    armor:0,
    durability:0,
    type:'Minion',
    tribe:'none',
    class:'Hunter',
    effect:'Battlecry: Discover a copy of a minion in your deck.',
    isStandard:true,
    id:'KotFT19'

},
{
    name:'Play Dead',
    rarity:'Common',
    cost:1,
    attack: 0,
    defense:0,
    armor:0,
    durability:0,
    type:'Spell',
    tribe:'none',
    class:'Hunter',
    effect:'Trigger a friendly minion\'s Deathrattle.',
    isStandard:true,
    id:'KotFT20'

},




  
];
/////////////////////////////////////////////////////////////////////////
//                     LIST OF FUNCTIONS FOR WORKING WITH MY ARRAYS


// justchecks the total of the whole sets cost goo reference for other functions
//const total = knightsoftheFrozenThrone.reduce((prev,cur)=> prev + cur.cost,0);
//console.log(total)


// empty array to add the deck i make with this function to
let playerDeck=[];

//takes an array and runs uses it in these functions
deckSetup = function(array){
// picks a class
let pickedClass,pickedCard,currentCard;
let hasDuplicates = false;

     pickedClass = prompt('What Class do you choose?(Druid or Hunter only)');
    console.log(`Choose a Neutral or ${pickedClass} card`)
    
    array.filter(pClass => {
    
        //console.log(pClass)
    
        if (pClass.class === pickedClass||pClass.class === 'Neutral'){
        
        
    return console.log(pClass)
    }

   

});

// i think i know the issue here nothing is being returned to pCard fix it tomorrow

// cardLimit = function(card){
// console.log('calling here')
//     var uniq = playerDeck
//     .map((name) => {
//         console.log('calling 1')
        
//       return {count: 1, name: name}
//     })
//     .reduce((a, b) => {
//         console.log('calling 2')
        
//       a[b.name] = (a[b.name] || 0) + b.count
//       console.log(a[b.name] = (a[b.name] || 0) + b.count)
//       return a
//     }, {})
//     console.log('calling 4')
    
//     var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)
//     console.log(duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1))
    
//     console.log(duplicates)
// }


// this is a function testing if duplicates exist inside the array
// i send in the playerDeck array and test it to see if it has copies inside this array
function cardLimit(arr, newName) {
    return arr.some(function(e) {
        hasDuplicates = e.name === newName.name
        return e.name === newName.name;
    });
}
// this is the start of my filter function
array.filter(pCard => {
        if (playerDeck.length  === 6){
           

            return currentCard
    
        }

  pickedCard = prompt(`type the name of a Neutral or ${pickedClass} card on the list type Exit to quit`)
         function checkIndex(array){
             // this returns the array index of the object that matches the picked card
             return array.name === pickedCard;
             
         }
         // this calls the function to find the index
         let cardIndex = array.findIndex(checkIndex)
         // this test if the objext is in the array, if it's not it will be set as -1
         if(cardIndex >- 1 ){
         // this sets cardIndext to the same thing as the array and the index
          currentCard = array[cardIndex]
          // so when this catches the duplicate test function returning true
          // it stops the code from adding in any more copies of that card.
          
         console.log(currentCard)

          // this makes sure the card class matches the selected or is a Neutral card
         if(currentCard.class === pickedClass || currentCard.class === 'Neutral'){
    
    // since i only want one copy of legendary cards i run this before the push 
    // so the first time thru it's false but the second it is not and it stops 
    // a second card from being added
    // also checks again if true so it can double check has duplicate    
 if(currentCard.rarity === 'Legendary'|| hasDuplicates ===true){
     console.log(currentCard.rarity === 'Legendary'|| hasDuplicates ===true)
        cardLimit(playerDeck,currentCard);
       }
    // makes sure it's not true, but it can be undifined.
   if(hasDuplicates  !== true ){   
      // same as with the legendary check but since it's inside the if.
      //This lets two copies be pushed into the deck before it stopps letting that happen.
    cardLimit(playerDeck,currentCard);
  
    console.log(`Adding ${currentCard.name} to the deck.`)       
    playerDeck.push(currentCard);
   }else{

 // if it has duplicates it runs this and does not add it and then waits for a new card input
       console.log(`${currentCard.name} has not been added to the deck.`)
console.log(`${currentCard.name} has duplicates in the array`)
              console.log('please pick another card')


   }
        }else{
            // stops non-nuetral or cards of the wrong class being put into the deck
           console.log(`${pickedCard} is not a ${pCard.class} or Neurtral card`)
           

       // }
     //   console.log('not working m8')
    }
        if (playerDeck.length  === 6){
        // the deck is full and then it returns the deck, but it returns it too many times
        // i have to fix this
            console.log(`This ${currentCard.class} deck is full `);
                    
             console.log(playerDeck)
            return currentCard
                }

        
            }else{
                if(pickedCard !== 'Exit'){
                    // i am not sure if this ever runs because it kinda is redundent.
                    console.log('------------------------------------------------------')
              console.log(`${pickedCard} is not a ${pickedClass} or Neutral card.`)
              console.log(`Please look at the list and try again.`)
                return pCard
            }else{
                // if you type exit this stops the code
                throw new Error('broke this shit')
            }
            }
     })

  array.forEach((e,i) =>  e.rating = trumpsValues[i])

}


// calls the whole function
deckSetup(knightsoftheFrozenThrone)




/*
filters the object array finds a beast and puts it into a new array
works fine
let beastArr = []; 

knightsoftheFrozenThrone.filter(beast => {
   if  (beast.tribe === 'Beast') {
   
    return beastArr.push(beast)
   }
});
console.log(beastArr)
*/

////////////////////////////////////////////////////////////////////////////////
//                    LIST OF FUNCTIONS I WANT TO WRITE(in no order)
// 1) A function that calculates the star value and returns a sum and total

// 2) A function that allows the user to choose the personsvalue they want to use



// 3) DONE A function that tells the player when the deck is full

// A) DONE A FUNCTION THAT ASK A PLAYER WHAT CLASS THEY WANT AND ONLY ALLOWS
// THAT CLASS AND NUERTRAL CARDS.


// 4)DONE A function that stores the cards the player wants store in deck 
// DONE ask the player the name of the card and the number they want
// DONE also function 4 must check if card is legendary and if so only allow one copy in deck

// 5) A function that allows makes roll get a random hand of card from their deck

// 6) A function that allows the player to draw an extra card that is not already in thier hand

// 7) A function that checks if the players deck is standard or not

// 8) A function(maybe more than one) that that can sort the deck based on cost,class, ect 

