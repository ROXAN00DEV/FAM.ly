 /* ═══════════════════════════════════════════
   FAM.LY — data.js
   All fake demo data — replace with Firebase later
   ═══════════════════════════════════════════ */

const MEMBERS = [
  { id:1, name:'Papa',   initials:'PA', color:'cl0', img:'https://i.pravatar.cc/100?img=12', role:'Father' },
  { id:2, name:'Mama',   initials:'MA', color:'cl1', img:'https://i.pravatar.cc/100?img=47', role:'Mother' },
  { id:3, name:'Priya',  initials:'PR', color:'cl2', img:'', role:'Daughter' },
  { id:4, name:'Rahul',  initials:'RH', color:'cl3', img:'', role:'Son' },
  { id:5, name:'Dadi ji',initials:'DJ', color:'cl5', img:'', role:'Grandmother' },
];

const POSTS = [
  {
    id:1, authorName:'Dad', authorInitials:'PA', authorColor:'cl0',
    authorImg:'https://i.pravatar.cc/100?img=12',
    time:'2 hours ago', tag:'trip', tagLabel:'✈️ Trip',
    text:"Just found this old photo from our Goa trip! Can't believe it's been 5 years. Those sunsets, that food, that laughter — I'd give anything to relive it. 🌊",
    photo:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    photoFull:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
    likes:12, liked:false,
    comments:[
      { name:'Mama',  initials:'MA', color:'cl1', text:"Those were the best days 😭❤️ We NEED to go back!" },
      { name:'Priya', initials:'PR', color:'cl2', text:"Bhai remember when you got sunburnt so bad 😂" },
    ]
  },
  {
    id:2, authorName:'Priya', authorInitials:'PR', authorColor:'cl2',
    authorImg:'',
    time:'Yesterday · 8:30 PM', tag:'bday', tagLabel:'🎂 Birthday',
    text:"Dadi's 70th birthday surprise was everything 🎉 She had no idea we were planning this for 3 months. When she saw all of us she just started crying. Best moment of my life. 💛",
    photo:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
    photoFull:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=85',
    likes:24, liked:true,
    comments:[
      { name:'Papa',  initials:'PA', color:'cl0', text:"Dadi kept saying 'mujhe kuch nahi chahiye sirf aap sab' 🥺" },
      { name:'Mama',  initials:'MA', color:'cl1', text:"Proudest day of our lives. She deserves all the love 💐" },
    ]
  },
  {
    id:3, authorName:'Rahul', authorInitials:'RH', authorColor:'cl3',
    authorImg:'',
    time:'3 days ago', tag:'mem', tagLabel:'💛 Memory',
    text:"Found this while cleaning my old cupboard. Priya is literally 3 years old here 😭 Where did all those years go. Childhood was so beautiful. Missing simpler times 🏡",
    photo:'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80',
    photoFull:'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&q=85',
    likes:31, liked:false,
    comments:[
      { name:'Priya', initials:'PR', color:'cl2', text:"BHAI DELETE THIS RIGHT NOW 😂😂 I was such a baby" },
      { name:'Mama',  initials:'MA', color:'cl1', text:"My babies 😭 Time please slow down just a little 🙏" },
    ]
  },
];

const BIRTHDAYS = [
  { name:'Dadi ji', date:'December 10', relation:'Grandmother', color:'cl5', initials:'DJ', days:3,  emoji:'🎈' },
  { name:'Priya',   date:'December 30', relation:'Daughter',    color:'cl2', initials:'PR', days:23, emoji:'🎂' },
  { name:'Rahul',   date:'January 15',  relation:'Son',         color:'cl3', initials:'RH', days:39, emoji:'🎊' },
  { name:'Papa',    date:'March 22',    relation:'Father',      color:'cl0', initials:'PA', days:105,emoji:'👑' },
  { name:'Mama',    date:'July 8',      relation:'Mother',      color:'cl1', initials:'MA', days:211,emoji:'💐' },
];

const SLIDER_ITEMS = [
  {
    img:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
    tag:'✈️ Trip', caption:"Goa 2024 — 5 years of this view 🌊"
  },
  {
    img:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&q=80',
    tag:'🎂 Birthday', caption:"Dadi's 70th — the surprise that made her cry 💛"
  },
  {
    img:'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&q=80',
    tag:'💛 Memory', caption:"Childhood throwback — where it all began 🏡"
  },
];

const ALBUMS = [
  {
    name: 'Goa 2024',
    emoji: '🌊',
    count: 4,
    desc: '5 days of sun, sea and family',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80'
    ]
  },
  {
    name: "Dadi's 70th",
    emoji: '🎂',
    count: 3,
    desc: 'The most beautiful surprise',
    images: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80'
    ]
  },
  {
    name: 'Childhood Photos',
    emoji: '📷',
    count: 3,
    desc: 'Old scanned family photos',
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80',
      'https://images.unsplash.com/photo-1484981138541-3d074aa97716?w=800&q=80',
      'https://images.unsplash.com/photo-1472162072142-d544e77ade5e?w=800&q=80'
    ]
  },
  {
    name: 'Shimla Trip',
    emoji: '🏔️',
    count: 3,
    desc: 'Coming up December 26th!',
    images: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
      'https://images.unsplash.com/photo-1483168527879-c66136b56105?w=800&q=80'
    ]
  },
  {
    name: 'Festivals & Puja',
    emoji: '🪔',
    count: 3,
    desc: 'Diwali, Holi, Eid together',
    images: [
      'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=800&q=80',
      'https://images.unsplash.com/photo-1561376374-847b4e72a09a?w=800&q=80',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80'
    ]
  },
  {
    name: "Rahul's Journey",
    emoji: '🏆',
    count: 3,
    desc: 'From fresher to Senior Engineer',
    images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    ]
  }
];

const MESSAGES = [
  { text:"Wherever this family goes, we go together. Distance is just a number when love is this strong.", author:'Dadi ji', color:'cl5', initials:'DJ', date:'December 2023' },
  { text:"Thank you for being my safe place. No matter what happens in the world, coming home to you is everything.", author:'Papa', color:'cl0', initials:'PA', date:'November 2023' },
  { text:"I don't say it enough, but I'm so grateful for this family. You are my whole world. 💛", author:'Mama', color:'cl1', initials:'MA', date:'October 2023' },
  { text:"Bhai, watching you grow up was the best front-row seat I ever had. So proud of everything. 🌟", author:'Priya', color:'cl2', initials:'PR', date:'November 2024' },
  { text:"Priya, your laughter literally heals everyone in this house. Never change, ever. 🌸", author:'Rahul', color:'cl3', initials:'RH', date:'September 2023' },
  { text:"This family taught me that true wealth is not money — it is memories and love. 💛", author:'Dadi ji', color:'cl5', initials:'DJ', date:'January 2024' },
];

const TIMELINE = [
  { date:'December 2024', title:'Shimla Trip Planned ✈️',     text:'First family vacation in 2 years. Booking done Dec 26. So excited!', emoji:['🏔️','❄️','🛷'] },
  { date:'November 2024', title:"Rahul's Promotion 🎉",       text:'3 years of hard work — Senior Engineer. We always knew he would.', emoji:['🏆','🎊','💼'] },
  { date:'August 2024',   title:'Goa Family Reunion 🌊',      text:'5 magical days. Papa sunburnt, Dadi saw ocean for first time.', emoji:['🌊','🐚','🌅'] },
  { date:'January 2024',  title:"Dadi's 70th Birthday 🎂",   text:'Surprise party with 40 relatives. She cried happy tears.', emoji:['🎂','💐','🥲'] },
  { date:'March 2023',    title:'New House — New Chapter 🏡', text:'After 20 years, we finally moved into our dream home.', emoji:['🏡','🔑','🛋️'] },
  { date:'June 2022',     title:"Priya's Graduation 🎓",      text:'First Masters degree in the family. Drove 300km to watch her.', emoji:['🎓','📜','🌸'] },
];

const GOALS = [
  { icon:'✈️', title:'Visit all 5 South Indian temples', desc:'Plan a 10-day trip with Dadi before she turns 75.', progress:35 },
  { icon:'💰', title:'Family emergency fund ₹5 lakh',   desc:'Everyone contributing ₹5,000/month.', progress:68 },
  { icon:'📸', title:'Scan all old photos (500+)',       desc:"Dadi's printed photos — digitise them all.", progress:45 },
  { icon:'🍳', title:'Document 20 family recipes',       desc:'Recipes no one has ever written down. Must save.', progress:80 },
  { icon:'🏃', title:'Family 5km Sunday walks',         desc:'All members walk 5km every Sunday together.', progress:55 },
];

const TREE_MEMBERS = {
  gen1: [
    { name:'Nana ji',  initials:'NJ', color:'cl0', role:'Grandfather' },
    { name:'Nani ji',  initials:'NI', color:'cl2', role:'Grandmother' },
    { name:'Dada ji',  initials:'DD', color:'cl3', role:'Grandfather' },
    { name:'Dadi ji',  initials:'DJ', color:'cl5', role:'Grandmother' },
  ],
  gen2: [
    { name:'Papa', initials:'PA', color:'cl0', role:'Father' },
    { name:'Mama', initials:'MA', color:'cl1', role:'Mother' },
  ],
  gen3: [
    { name:'Rahul', initials:'RH', color:'cl3', role:'Son · Engineer' },
    { name:'Priya', initials:'PR', color:'cl2', role:'Daughter · Designer' },
  ],
};
