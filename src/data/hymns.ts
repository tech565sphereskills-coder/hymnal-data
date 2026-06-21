import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";
import author3 from "@/assets/author-3.jpg";
import author4 from "@/assets/author-4.jpg";
import author5 from "@/assets/author-5.jpg";

export type Hymn = {
  id: string;
  number: number;
  title: string;
  author: string;
  authorImage: string;
  year: number;
  tune?: string;
  theme: string;
  scripture: { ref: string; text: string };
  history: string;
  message: string;
  incipit: string;          // first line — used as a tasteful preview
  hasYoruba: boolean;
  yorubaLyrics?: string;
  lyrics?: string;
};

export const hymns: Hymn[] = [
  {
    id: "my-life-my-love",
    number: 1,
    title: "My Life, My Love, I Give To Thee",
    author: "Ralph E. Hudson",
    authorImage: author1,
    year: 1882,
    theme: "Consecration & Total Surrender",
    scripture: {
      ref: "Galatians 2:20",
      text: "I have been crucified with Christ; it is no longer I who live, but Christ lives in me.",
    },
    history:
      "“My Life, My Love, I Give to Thee” is a beloved hymn of consecration and dedication that calls believers to respond wholeheartedly to the sacrificial love of Jesus Christ. The hymn is widely known by its memorable refrain:“I'll live for Him who died for me.”\n\nThe hymn was written in 1882 by Ralph Erskine Hudson.Hudson was a Methodist minister, gospel songwriter, composer, and music publisher who played an important role in the gospel music movement of the late nineteenth century. Throughout his ministry, he wrote and composed numerous hymns that emphasized salvation, Christian service, devotion, and surrender to God.His hymns were designed to be easily understood and sung by ordinary believers, making them especially effective in revival meetings and evangelistic services.\n\nThe hymn begins with a personal declaration of devotion. The believer offers both life and love to Jesus in gratitude for His sacrifice on the cross.Galatians 2:20“I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.”Christ gave His life for us on Calvary. The proper response to such love is to offer ourselves fully to Him, serving Him faithfully and living each day for His glory.",
    message:
      "A believer's only worthy response to Calvary is the whole of life — body, mind, time and treasure — laid quietly on the altar.",
    incipit: "My life, my love I give to Thee, Thou Lamb of God who died for me…",
    hasYoruba: true,
    yorubaLyrics: `Mo f'aye at'ife mi fun
Od'aguntan to ku fun mi;
Je ki n le je olotito,
Jesu Olorun mi.

N o wa f'Eni t'O ku fun mi,
Aye mi yo si dun pupo;
N o wa f'Eni to ku fun mi,
Jesu Olorun mi.

Mo gbagbo pe Iwo n gbani
'Tori 'Wo ku k'emi le la;
Emi yo si gbekele O,
Jesu Olorun mi.

Iwo t'O ku ni Kalfari,
Lati so mi dominira;
Mo yara mi soto fun O,
Jesu Olorun mi.`,
  },
  {
    id: "just-as-i-am",
    number: 2,
    title: "Just As I Am",
    author: "Charlotte Elliott",
    authorImage: author2,
    year: 1834,
    theme: "Grace & Acceptance",
    scripture: {
      ref: "John 6:37",
      text: "All that the Father gives Me will come to Me, and the one who comes to Me I will by no means cast out.",
    },
    history:
      "“Just As I Am” is one of the most cherished invitation hymns in Christian history. Its message is simple yet powerful: God accepts people who come to Him in faith, regardless of their past, weaknesses, failures, or circumstances. For nearly two centuries, this hymn has encouraged countless individuals to come to Christ exactly as they are. The hymn was written in 1835 by Charlotte Elliott. \n\nAt the time, Charlotte was 45 years old and living in the seaside town of Brighton. She suffered from chronic illness and often struggled with feelings of weakness and discouragement. Her brother, a minister, was organizing a fundraising bazaar to support the education of daughters of poor clergymen. Charlotte was deeply passionate about the cause and spent weeks preparing to help. However, when the day arrived, her illness became so severe that she was unable to attend.\n\nLeft alone at home, she felt useless, disappointed, and overwhelmed by despair.During that difficult moment, she remembered the words of a visiting minister who had once encouraged her to come to Christ just as she was without trying to make herself better first. Inspired by that truth, Charlotte picked up a pen and began writing the words that would become “Just As I Am.\n\n”The hymn emphasizes that salvation is not earned through good works or personal perfection. Instead, God welcomes anyone who comes to Him in faith.Its message echoes the words of Jesus in John 6:37: “Whoever comes to me I will never drive away.” We do not need to become perfect before approaching God. His invitation is open to all who come with a willing heart.",
    message:
      "We do not clean ourselves before coming to Christ; we come, and He cleans us.",
    incipit: "Just as I am, without one plea, but that Thy blood was shed for me…",
    hasYoruba: false,
   lyrics: `1
Just as I am, without one plea,
But that Thy blood was shed for me,
And that Thou bid’st me come to Thee,
O Lamb of  God, I come! I come!

2
Just as I am, and waiting not
To rid my soul of one dark blot;
To Thee whose blood can cleanse each spot,
O Lamb of God, I come, I come!

3
Just as I am, though tossed about
With many a conflict, many a doubt;
Fightings within, and fears without,
O Lamb of God, I come, I come!

4
Just as I am, poor, wretched, blind;
Sight, riches, healing of the mind;
Yes, all I need, in Thee to find,
O Lamb of God, I come, I come!`,
  },
  {
    id: "it-is-well",
    number: 3,
    title: "It Is Well With My Soul",
    author: "Horatio G. Spafford",
    authorImage: author3,
    year: 1873,
    tune: "Philip P. Bliss",
    theme: "Peace Through Suffering",
    scripture: {
      ref: "Isaiah 66:12",
      text: "For thus says the LORD: 'Behold, I will extend peace to her like a river.'",
    },
    history:
      "The hymn was written by Horatio Gates Spafford, a successful lawyer, businessman, and devoted Christian from Chicago.Before writing the hymn, Spafford had already experienced several devastating setbacks. Much of his business property was destroyed in the Great Chicago Fire, causing significant financial loss.\n\nTwo years later, in 1873, Spafford planned a family trip to Europe. Due to unexpected business matters, he remained behind while his wife, Anna Spafford, and their four daughters traveled ahead aboard the SS Ville du Havre.During the voyage, tragedy struck. The ship collided with another vessel in the Atlantic Ocean and sank. More than 200 people lost their lives, including all four of Spafford's daughters.\n\nThe hymn reminds believers that God's peace is not dependent on circumstances but on His unchanging presence.The central message of “It Is Well with My Soul” is that believers can experience God's peace even during life's darkest moments.True peace is not found in favorable circumstances but in a steadfast relationship with God. No matter what we face, we can trust Him to carry us through and give us peace that surpasses understanding.",
    message:
      "Faith's deepest worship is not the absence of sorrow but the presence of peace within it.",
    incipit: "When peace like a river attendeth my way, when sorrows like sea billows roll…",
    hasYoruba: true,
    lyrics: `1
When peace like a river attendeth my way,
  When sorrows like sea billows roll;
Whatever my lot Thou hast taught me to say,
  “It is well, it is well with my soul!”
 
It is well with my soul!
It is well, it is well with my soul!

2
My sin—oh, the bliss of this glorious thought—
  My sin, not in part, but the whole,
Is nailed to His Cross, and I bear it no more;
  Praise the Lord, praise the Lord, O my soul!

3 
For me, be it Christ, be it Christ hence to live;
  If dark hours about me shall roll,
No pang shall be mine, for in death as in life
  Thou wilt whisper Thy peace to my soul.`
  },
  {
    id: "no-not-one",
    number: 4,
    title: "No, Not One",
    author: "Johnson Oatman Jr.",
    authorImage: author4,
    year: 1895,
    theme: "The Friendship of Jesus",
    scripture: {
      ref: "Proverbs 18:24",
      text: "There is a friend who sticks closer than a brother.",
    },
    history:
      "“No, Not One” is a beloved gospel hymn that celebrates the unmatched love, compassion, and faithfulness of Jesus Christ. Known in many Yoruba churches as Ore Bi Jesu (meaning Friend Like Jesus), the hymn reminds believers that there is no friend, helper, or savior who can compare to Christ.For generations, Christians around the world have found comfort in its reassuring message that Jesus understands every struggle and remains with His people through every trial of life.\n\nThe hymn was written by Johnson Oatman Jr., one of the most prolific gospel songwriters in Christian history.Oatman was born on April 21, 1856, near Medford. His father was known as an excellent singer and greatly influenced his love for Christian music. Although Johnson Oatman did not become famous as a singer, he became widely known through his gift for writing hymns.Johnson Oatman wanted believers to understand that while human friendships may fail, Jesus never does. Christ alone fully understands our pain, weaknesses, disappointments, and struggles.\n\nOne of the most memorable lines from the hymn is: Jesus knows all about our struggles, He will guide till the day is done. This message continues to encourage believers because it reminds them that they never face life's challenges alone.Human friends may disappoint us, but Jesus is always present, always loving, and always willing to help. Whatever challenges we face, we can trust Him because there is truly no friend like Jesus.",
    message:  
      "Every human bond has a ceiling. The friendship of Jesus has none.",
    incipit: "There's not a friend like the lowly Jesus, no, not one! No, not one!",
    hasYoruba: true,
        lyrics: `
 1. Ore bi jesu kosi laye yi
 Oun nikan I ore otito
  Oro aye yi y o fi wa sile 
  Sugbon Jesu ko je gbagbe wa 
  
  Ah! Ko je gbagbe wa 2ce 
  Sugbon Jesu ko je gbagbe wa 

  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Sugbon Jesu koje gbagbe mi (But Jesus can never forget me) 

2. There’s not a Friend like the lowly Jesus:
 No, not one! no, not one! 
 None else could heal all our souls’ diseases:
  No, not one! no, not one! 

  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Aah! Ko je gbagbe mi (Aah! can never forget)
  Sugbon Jesu koje gbagbe mi (But Jesus can never forget me) 

3. There’s not an hour that He is not near us, 
No, not one! no, not one! 
No night so dark, but His love can cheer us,
 No, not one! no, not one! 
 
 Aah! Ko je gbagbe mi (Aah! can never forget)
  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Sugbon Jesu koje gbagbe mi (But Jesus can never forget me)`,
  },
  {
    id: "nearer-my-god",
    number: 5,
    title: "Nearer, My God, To Thee",
    author: "Sarah Flower Adams",
    authorImage: author5,
    year: 1841,
    theme: "Drawing Closer To God",
    scripture: {
      ref: "Genesis 28:12",
      text: "Then he dreamed, and behold, a ladder was set up on the earth, and its top reached to heaven.",
    },
    history:
      "“Nearer, My God, to Thee” is one of the most beloved and enduring Christian hymns ever written. For over 170 years, it has inspired and comforted believers around the world with its message of drawing closer to God through every circumstance of life, including suffering, trials, loneliness, and hardship.\n\nThe hymn is based on the story of Jacob found in Genesis.While fleeing from his brother Esau, Jacob found himself alone in the wilderness. As night fell, he used a stone as a pillow and slept. During the night, God gave him a remarkable dream: he saw a ladder stretching from earth to heaven, with angels ascending and descending upon it.When Jacob awoke, he realized that God's presence had been with him all along. In awe, he declared:“Surely the Lord is in this place; and I knew it not.”\n\nGenesis 28:16This experience transformed Jacob's understanding of God and inspired a deeper desire to walk closely with Him. The hymn captures that same longing—to be nearer to God, even in difficult circumstances.The hymn was written in 1841 by Sarah Flower Adams, an English poet and hymn writer. She originally composed it for use in worship at her church.\n\nDespite facing personal health challenges during her life, Adams wrote words that have continued to encourage generations of Christians to seek God's presence above all else.“Nearer, My God, to Thee” continues to be sung in churches, schools, funerals, memorial services, and Christian gatherings around the world. Its timeless message reminds believers that no matter where they are or what they face, they can always seek a closer relationship with God.",
    message:
      "Even sorrow can be a stone Jacob's-pillow if it draws us nearer to God.",
    incipit: "Nearer, my God, to Thee, nearer to Thee! E'en though it be a cross that raiseth me…",
    hasYoruba: false,
    lyrics: `1
Nearer, my God, to Thee,
  Nearer to Thee;
E’en though it be a cross
  That raiseth me,
Still all my song shall be
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
2
Though, like a wanderer,
  The sun gone down,
Darkness comes over me,
  My rest a stone;
Yet in my dreams I’d be
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
3
There let me see the sight,
  An open heaven;
All that Thou sendest me,
  In mercy given;
Angels to beckon me
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
4
Then, with my waking thoughts
  Bright with Thy praise,
Out of my stony griefs
  Bethel I’ll raise,
So by my woes to be
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
`,
  },
];

export const authors = hymns.map(h => ({
  name: h.author,
  image: h.authorImage,
  year: h.year,
  hymn: h.title,
}));
