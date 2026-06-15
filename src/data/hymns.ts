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
      "“My Life, My Love, I Give to Thee” is a consecration hymn written by Ralph E. Hudson in 1882. It is often known by the refrain, “I’ll live for Him who died for me.” Hudson, a Methodist minister, musician, and composer, contributed many gospel hymns and tunes that emphasized devotion, surrender, and the joy of salvation. This particular hymn reflects the believer’s wholehearted response to the love of Christ, who gave His life on Calvary.\n\nThe hymn begins with a direct statement of devotion: the offering of life and love to the Savior. Each stanza deepens this theme, expressing gratitude for Christ’s atonement, a pledge of faithful service, and a desire to honor Him in every part of life. The chorus serves as both a declaration and a reminder, affirming the believer’s commitment: “I’ll live for Him who died for me, how happy then my life shall be.” Hudson ties joy to obedience, showing that true happiness is found in living fully for Christ.\n\nThis hymn has been used widely in revival meetings, evangelistic services, and personal dedication moments. Its language is simple and heartfelt, making it easy for congregations to sing as a prayer of surrender. The words remind believers of the cost of their redemption, bought through the sacrifice of Jesus, and call them to respond with total devotion. Its connection to Galatians 2:20 highlights the central truth of the Christian life: that self is crucified, and Christ lives in and through His people. Hudson’s hymn continues to inspire believers to give themselves without reserve to the Savior who gave everything for them.",
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
      "In 1834, Charlotte Elliott was 45 years old. She lived in Brighton where her brother, a pastor, organized a bazaar to raise money to send the daughters of poor clergymen to school. Charlotte was passionate about the cause and eager to help, but, after weeks of preparation, she was too sick to attend. Left behind, home alone, feeling weak, useless, and defeated, she sank into despair.\n\nThen, out of the blue, she remembered the words of a visiting minister who had told her to come to Christ just as she was. She picked up her pen and wrote the lyrics to “Just As I Am.” Her creative energy revived, she eventually wrote close to 150 hymns; 112 of them were included in The Invalid’s Hymn Book (1836).\n\n“Just As I Am” took on a life of its own, often paired with the words of Jesus: “Whoever comes to me, I will never turn away” (John 6:37). Her hymn has been translated into many languages. Billy Graham, the 20th-century evangelist, claimed that he was converted while this hymn was being sung. From the pen of a woman alone and in pain, came a hymn text reminding us that we are always given the chance to be born again into God’s love.",
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
      "“It Is Well with My Soul” is one of the most beloved and inspiring hymns in Christian history. Its message of peace, faith, and trust in God during deep suffering has comforted millions of believers for more than a century. The hymn was written by Horatio Gates Spafford in 1873 and set to music by Philip Paul Bliss in 1876.\n\nWhat makes the hymn especially remarkable is that it was born out of one of the greatest personal tragedies a man could experience. Horatio Spafford was a successful lawyer, businessman, and devoted Christian who lived in Chicago with his wife, Anna, and their children. After losing his business assets in the Great Chicago Fire, he sent his family ahead to Europe. Their ship collided mid-Atlantic, and all four of his daughters drowned.\n\nSailing out to meet his grieving wife, near the spot where his daughters perished, Spafford put pen to paper in the middle of the ocean. The hymn reminds Christians that faith is not the absence of sorrow. Rather, it is the confidence that God remains faithful even in life's darkest moments, prompting us to declare: “It is well with my soul.”",
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
      "Johnson Oatman, Jr. was born on April 21, 1856, near Medford, New Jersey. Although his father was known as an excellent singer, Oatman himself became famous not for singing but for writing hymns. He worked in business and insurance while serving as a Methodist preacher and became one of the most prolific gospel hymn writers in history, writing thousands of hymns including “Higher Ground” and “Count Your Blessings.”\n\nThe hymn was written to remind believers that no human friend can compare to Jesus. Oatman focused on Christ's compassion, faithfulness, holiness, and unique ability to understand human struggles.\n\nIts memorable chorus: “Jesus knows all about our struggles, He will guide till the day is done,” remains a source of great encouragement for Christians around the world, reminding them that Christ is a faithful friend who never fails.",
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
      "“Nearer, My God, to Thee” is one of the most famous Christian hymns ever written. It expresses a believer's desire to draw closer to God, even through suffering, trials, and life's difficulties. The hymn has brought comfort to Christians around the world for more than 170 years.\n\nThe hymn is based on the story of Jacob in Genesis 28:10–19. While fleeing from his brother Esau, Jacob slept in the wilderness with a stone for his pillow. During the night, he dreamed of a ladder reaching from earth to heaven with angels ascending and descending upon it.\n\nWhen Jacob awoke, he realized God was with him and declared: “Surely the Lord is in this place.” The hymn reflects Jacob's longing to draw closer to God despite hardship and loneliness.",
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
