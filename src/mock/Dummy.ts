import DateAndDayGenerator from '../utils/DayGen';
import timeGenerator from '../utils/timeGenerator';
const date = new Date();
const dateAndDay = DateAndDayGenerator(date);
export const Teams = [
  {
    id: '001',
    name: 'FC Barcelona',
    logo: require('../assets/images/Team3.png'),
  },
  {
    id: '002',
    name: 'Real Madrid',
    logo: require('../assets/images/Team1.png'),
  },
  {
    id: '003',
    name: 'Arsenal',
    logo: require('../assets/images/Team2.png'),
  },
  {
    id: '004',
    name: 'Juventus',
    logo: require('../assets/images/Team4.png'),
  },
  {
    id: '005',
    name: 'Manchester United',
    logo: require('../assets/images/Team5.png'),
  },
];

export const Matches = [
  {
    id: '001',
    name: 'Spotify Camp Nou',
    team1: Teams[0],
    team2: Teams[2],
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    time: timeGenerator(),
  },
  {
    id: '002',
    name: 'Allianz Stadium',
    team1: Teams[3],
    team2: Teams[1],
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    time: timeGenerator(),
  },
  {
    id: '003',
    name: 'Old Trafford',
    team1: Teams[4],
    team2: Teams[0],
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    time: timeGenerator(),
  },
  {
    id: '004',
    name: 'Emirates Stadium',
    team1: Teams[1],
    team2: Teams[2],
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    time: timeGenerator(),
  },
  {
    id: '005',
    name: 'Santiago Bernabeu',
    team1: Teams[1],
    team2: Teams[0],
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    time: timeGenerator(),
  },
];

export const Authors = [
  {
    id: '001',
    name: 'Brian Imanuel',
    avatar: require('../assets/images/Avatar1.png'),
  },
  {
    id: '002',
    name: 'Daniel Feliciano',
    avatar: require('../assets/images/Team5.png'),
  },
];

export const News = [
  {
    id: '001',
    thumbnail: require('../assets/images/ArsenalCrystal.jpeg'),
    title:
      'Arsenal break Crystal Palace hoodoo in perfect Premier League start',
    type: 'News',
    author: Authors[0],
    views: '125,908',
    name: 'Sky Sports',
    likes: '1403',
    comments: '976',
    date: '2020-05-15',
    detail: `A header from Gabriel Martinelli and deflected Bukayo Saka shot gave Arsenal a two-goal opening day victory at Crystal Palace – who they had beaten just once in their previous eight attempts.

    Martinelli broke the deadlock in the 20 th minute as he headed home from a clever corner routine that saw Oleksandr Zinchenko peel away into space at the back post, with his header across the face of goal being turned in by the Brazilian.
    
    That made up for the forward spurning a glorious opportunity to open the scoring in the third minute as he skewed his effort wide from point-blank range. It summed up the dominance from the visitors in the opening half-hour, with Palace unable to get out of their own half.
    
    Yet the home side grew into the game as the half went on – Odsonne Edouard twice was denied from close range as Arsenal’s control of the game declined under the home side’s pressure. Yet Palace could not find a leveller and it was a deflected effort from Saka that settled the game late on.`,
  },
  {
    id: '002',
    thumbnail: require('../assets/images/deJong.jpeg'),
    title: `Man Utd news: Frenkie de Jong 'frustration' grows as Cristiano Ronaldo hint dropped`,
    type: '',
    author: Authors[1],
    name: 'Fabrizio Romano',
    views: '1223',
    likes: '111',
    comments: '666',
    date: '2021-09-02',
    detail: `The Premier League season is finally underway, with Manchester United's opening game of the new campaign coming on Sunday against Brighton.

    But the game will be overshadowed by the Red Devils' continued slow business in the transfer market. They are still yet to sign new boss Erik ten Hag's top target Frenkie de Jong, with United chiefs growing increasingly frustrated with the time it is taking for the deal to be completed.
    
    That news comes as former captain Gary Neville accused club chiefs of failing Ten Hag after the Dutchman dropped a major hint over Cristiano Ronaldo's future at Old Trafford. Here, Mirror Football rounds up all the latest United news.
    Manchester United's frustration over the time it is taking for them to complete a deal for Frenkie de Jong is reportedly growing.

The Red Devils are thought to have agreed a fee with Barcelona for the sale of the Dutchman. But De Jong has been unwilling to leave the Nou Camp for Old Trafford, instead preferring to stay in Catalonia.
While Barca have been attempting to convince him to leave, it is now claimed that United have been growing 'frustrated' with their efforts. With less than a month before the transfer window slams shut, United will need Barca to increase their attempts to move De Jong on.
  `,
  },
  {
    id: '003',
    thumbnail: require('../assets/images/barcelona.webp'),
    title: `Barcelona already know that they will have to activate the fourth lever... and more`,
    type: '',
    author: Authors[1],
    name: 'Fabrizio Romano',
    views: '1223',
    likes: '111',
    comments: '666',
    date: '2021-09-02',
    detail: `Although Joan Laporta insisted during the presentation of Robert Lewandowski that the fourth lever was in reserve just in case and they were confident that they would not have to resort to it, Barcelona already know that they are going to need it.

    Those in charge of this issue in the Catalan institution already know that the figures they have presented will not be enough. They will need to activate the fourth lever and do something else.
    
    In fact, MARCA have already explained here that the Catalan giants will need, in addition to this fourth lever, to sell Memphis Depay and do something with Frenkie de Jong: either a substantial reduction in his salary or a transfer this summer.
    
    Laporta himself acknowledged a certain unease about some of the signings when he negotiated their incorporation. For example, this was the case with Lewandowski.
    
    In fact, in order to reassure the Pole, he was promised that he would be the first to be registered. In principle, according to club sources, his participation from day one is not in danger.`,
  },
  {
    id: '003',
    thumbnail: require('../assets/images/barcafinance.webp'),
    title: `Laporta: Barcelona have made 868m euros in two months`,
    type: '',
    author: Authors[1],
    name: 'Fabrizio Romano',
    views: '1223',
    likes: '111',
    comments: '666',
    date: '2021-09-02',
    detail: `At the presentation of Robert Lewandowski as a new Barcelona player, Joan Laporta expressed his confidence in being able to register all the summer signings and therefore comply with the financial demands of LaLiga.

    In fact, he boasted about the club's financial operations completed in recent days. The Blaugrana president has revealed that the club has earned 868 million euros, counting the four levers, corresponding to the TV rights and the sale of almost half of Barca Studios, as well as capital gains.
    
    "We have worked to register all of them [new signings]. We have worked hard and well to meet the requirements [of LaLiga]," he said.
    
    "And if we need to do some more business, we will do it. We are waiting. It's a decision for LaLiga to make.
    
    "We have complied with what is required. We are confident that we will be able to register them."
    
    Regarding the new-look Barcelona, Laporta is ecstatic.
    
    "We are building a great team, we have withstood the pressure well. It's been a historic day. And we will keep working," he said.
    
    On Lewandowski specifically, Laporta was delighted with the Pole's arrival.
    
    "This is a historic day. We were able to see it at the presentation. It's one of those days when the Cules feel the club more than ever," he said.
    
    "It shows that Barcelona are more than just a club. Thank you [Robert] for the effort to come. It wasn't easy, but we've done it.
    
    "Starting with you, through your agent, Mateu Alemany, Jordi Cruyff... also the efforts of the board. We have all been watching you because we knew you were special. You have the gift of scoring.
    
    "You are serious, charismatic, elegant and respectful. You earn people's respect. I think this is proof that we are in a new, splendid phase for Barcelona. We are very proud to have you here."
    
    Lewandowski will wear the No.9 shirt, despite the number having previously been occupied by Memphis Depay.
    
    "It was the club's decision," Laporta said. "For reasons that are in the club's interest, for image [reasons], for commercial reasons.
    
    "We thought it was the right decision. Maximum respect to Memphis."`,
  },
];

const dummyData = {Teams, Matches, News, Authors};

export default dummyData;
