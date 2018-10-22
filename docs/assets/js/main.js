const loveButton = document.querySelector('.button__1');
const careerButton = document.querySelector('.button__2');
const lifeButton = document.querySelector('.button__3');
const whateverButton = document.querySelector('.button__4');

const mainBox = document.querySelector('.main-box');

const heading_1 = document.querySelector('.heading-primary__1');
const heading_2 = document.querySelector('.heading-primary__2');

const paragraph_1 = document.querySelector('.paragraph__1');
const paragraph_2 = document.querySelector('.paragraph__2');

//------------

provideWisdom();

function provideWisdom() {
    loveButton.addEventListener('click', loveWisdom);
    careerButton.addEventListener('click', careerWisdom);
    lifeButton.addEventListener('click', lifeWisdom);
    whateverButton.addEventListener('click', whateverWisdom);
}

function loveWisdom(){

    let tasks = [
        {   name_1: `Rainer Maria Rilke`, 
            name_2: `Shakira`, 
            quote_1: `Love consists of this: two solitudes that meet, protect and`, 
            quote_2: `waka waka` },
        {   name_1: `Alexander Smith`, 
            name_2: `Beyonce`, 
            quote_1: `Love is but the discovery of ourselves in others, and the delight in`, 
            quote_2: `grinding up in the club` },
        {   name_1: `Ray Bradbury`, 
            name_2: `Eminem`, 
            quote_1: `Love is the answer to everything. It's`, 
            quote_2: `mom's spaghetti` },
        {   name_1: `Henry David Thoreau`, 
            name_2: `Bruno Mars`, 
            quote_1: `There is no remedy for love but to`, 
            quote_2: `catch a grenade` },
        {   name_1: `Lao Tzu`, 
            name_2: `Drake`, 
            quote_1: `Being deeply loved by someone gives you strength, while`, 
            quote_2: `I only love my bed and my momma I’m sorry` },
    ];

    let randomIndex = Math.floor(Math.random() * tasks.length);

    heading_1.textContent = tasks[randomIndex].name_1 + ` + `;
    heading_2.textContent = tasks[randomIndex].name_2;
    paragraph_1.textContent = tasks[randomIndex].quote_1 + ` `;
    paragraph_2.textContent = tasks[randomIndex].quote_2;

    flipMainBox();
}

function careerWisdom(){

    let tasks = [
        {   name_1: `Colin Powell`, 
            name_2: `P!nk`, 
            quote_1: `A dream doesn't become reality through magic; it takes sweat, determination and`, 
            quote_2: `let's get the party started` },
        {   name_1: `Philip Green`, 
            name_2: `Black Eyed Peas`, 
            quote_1: `It's all about quality of life and finding a happy balance between work and friends and`, 
            quote_2: `c'mon y'all, lets get woohoo!` },
        {   name_1: `Patrick Lencioni`, 
            name_2: `Miley Cyrus`, 
            quote_1: `Teamwork requires some sacrifice up front; people who work as a team have`, 
            quote_2: `hands in the air like we don't care` },
        {   name_1: `Steve Jobs`, 
            name_2: `KISS`, 
            quote_1: `Your work is going to fill a large part of your life, and the only way to be truly satisfied is to`, 
            quote_2: `rock and roll all nite` },
        {   name_1: `Donovan Bailey`, 
            name_2: `Journey`, 
            quote_1: `Follow your passion, be prepared to work hard and sacrifice, and, above all,`, 
            quote_2: `don't stop believin'` },
    ];

    let randomIndex = Math.floor(Math.random() * tasks.length);

    heading_1.textContent = tasks[randomIndex].name_1 + ` + `;
    heading_2.textContent = tasks[randomIndex].name_2;
    paragraph_1.textContent = tasks[randomIndex].quote_1 + ` `;
    paragraph_2.textContent = tasks[randomIndex].quote_2;

    flipMainBox();
}

function lifeWisdom(){

    let tasks = [
        {   name_1: `George Sand`, 
            name_2: `Ricky Martin`, 
            quote_1: `There is only one happiness in this life`, 
            quote_2: `livin' la vida loca` },
        {   name_1: `Audrey Hepburn`, 
            name_2: `Nirvana`, 
            quote_1: `The best thing to hold onto in life is`, 
            quote_2: `denial` },
        {   name_1: `Charles R. Swindoll`, 
            name_2: `Britney Spears`, 
            quote_1: `Life is 10% what happens to you and 90%`, 
            quote_2: `oops, I did it again` },
        {   name_1: `Earl Nightingale`, 
            name_2: `Lady Gaga`, 
            quote_1: `Learn to enjoy every minute of your life. Be happy now.`, 
            quote_2: `Just dance. Gonna be okay.
            Da-doo-doo-doo` },
        {   name_1: `Matt Cameron`, 
            name_2: `50 Cent`, 
            quote_1: `Live life to the fullest, and`, 
            quote_2: `party like it's your birthday` },
    ];

    let randomIndex = Math.floor(Math.random() * tasks.length);

    heading_1.textContent = tasks[randomIndex].name_1 + ` + `;
    heading_2.textContent = tasks[randomIndex].name_2;
    paragraph_1.textContent = tasks[randomIndex].quote_1 + ` `;
    paragraph_2.textContent = tasks[randomIndex].quote_2;

    flipMainBox();
}

function whateverWisdom(){

    let tasks = [
        {   name_1: `Dale Carnegie`, 
            name_2: `Kanye West`, 
            quote_1: `If you want to conquer fear, don't sit home and think about it. Go out and`, 
            quote_2: `get arrested` },
        {   name_1: `Seneca`, 
            name_2: `Justin Bieber`, 
            quote_1: `One of the most beautiful qualities of true friendship is`, 
            quote_2: `when you nod your head yes
            but you wanna say no` },
        {   name_1: `George A. Moore`, 
            name_2: `Camila Cabello`, 
            quote_1: `A man travels the world over in search of what he needs and returns home to find`, 
            quote_2: `half of my heart is in Havana, ooh-na-na` },
        {   name_1: `William Feather`, 
            name_2: `Metallica`, 
            quote_1: `A budget tells us what we can't afford, but`, 
            quote_2: `so what?` },
        {   name_1: `Billie Jean King`, 
            name_2: `Jay-Z`, 
            quote_1: `Sports teaches you character, it teaches you to play by the rules, it teaches you to
            know what it feels like to`, 
            quote_2: `ball so hard muhfuckas wanna fine me` },
    ];

    let randomIndex = Math.floor(Math.random() * tasks.length);

    heading_1.textContent = tasks[randomIndex].name_1 + ` + `;
    heading_2.textContent = tasks[randomIndex].name_2;
    paragraph_1.textContent = tasks[randomIndex].quote_1 + ` `;
    paragraph_2.textContent = tasks[randomIndex].quote_2;

    flipMainBox();
}

function flipMainBox(){
    if(mainBox.className == 'main-box') {
        mainBox.className = 'main-box main-box--back';
    } else {
        mainBox.className = 'main-box';
    }
}