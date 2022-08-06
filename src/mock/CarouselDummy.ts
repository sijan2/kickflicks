import DateAndDayGenerator from '../utils/DayGen';
import {
  fourDigitRandomNumber,
  sixDigitRandomNumber,
  threeDigitRandomNumber,
} from '../utils/randomNumberGenerator';

const date = new Date();
const dateAndDay = DateAndDayGenerator(date);
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
export const carouseldata = [
  {
    id: 1,
    image: require('../assets/images/News1.png'),
    title: 'LIVE Transfer Talk: Ronaldo pushing for Man City move',
    name: 'Kathmandu Post',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    author: Authors[0],
    views: sixDigitRandomNumber(),
    likes: fourDigitRandomNumber(),
    comments: threeDigitRandomNumber(),
    type: '',
    description:
      '\tMinisters representing the Nepali Congress in the government have demanded resignation of Finance Minister Janardan Sharma.During a Cabinet meeting held at the Office of Prime Minister and Council of Ministers on Tuesday, the ministers urged Finance Minister Sharma to resign from his post.\n\nSharma is accused of inviting two unauthorized persons to change tax rates on the eve of the budget presentation for the next fiscal year 2022-23. \n\nThe ministers said that the Finance Minister should resign on moral grounds as questions have been raised against him in public quarters.',
  },
  {
    id: 2,
    image: require('../assets/images/News2.png'),
    title:
      'Tottenham: Paddy Kenny laments ‘disappointing’ Harry Kane situation',
    name: 'Himalayan Times',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    author: Authors[1],
    type: 'Live Transfer Talk',
    views: sixDigitRandomNumber(),
    likes: fourDigitRandomNumber(),
    comments: threeDigitRandomNumber(),
    description:
      '\tThe ongoing Central Working Committee meeting of the Nepali Congress, which was supposed to end today, has been extended till tomorrow after the party President Sher Bahadur Deuba called off today’s meeting.\n\nThe decision to postpone today’s meeting was taken after senior NC leader Ramchandra Paudel and leader Bijaya Kumar Gachchhadar presented their opinions. \n\nThe NC president had planned to conclude the meeting today itself after taking decisions related to poor performance of the party in elections, fixing date and place for the Maha Samiti meeting, formation of statute drafting and central election committees, and announcement of campaigns to revive the party, among others.\n\nHowever, Deuba postponed the meeting in a bid to seek consensus on the resolution to be passed by the CWC, according to NC CWC member Pradip Paudel.\n\nThe camp led by senior leader Paudel has demanded that the CWC decisions should also include annulment of parliamentary board and central work execution committee ‘formed in violation of the party statute’.Leaders representing the Paudel camp are preparing to write a note of dissent if the two bodies are not scrapped.\n\nThe Paudel faction has also demanded that the gathering of the NC district presidents be held within this month, followed by Maha Samiti next month. However, the establishment faction is planning to delay the meetings.In today’s meeting, Paudel reiterated that Deuba should take the responsibility of the humiliating loss in the elections at the hands of the left alliance of the CPN-UML and the CPN-Maoist Centre. He also attributed the election loss especially to the working style of Deuba and decisions taken by his government.\n\nPaudel also said that they were not trying to remove Deuba from leadership, but they wanted change.He also defended the letter he had written to Deuba around two months ago. In the letter, Paudel had accused Deuba of being power hungry and only working in the interest of the leaders representing his camp. However, leaders close to Deuba had slammed Paudel for the ‘type of language’ used in the letter.\n\nPaudel stood firm in his stand and asked, “How many times Ganesh Man Sing became the country’s prime minister and how many times Deuba became the PM? Whom do the people admire, Deuba or Singh?” He said he had not written the letter to make it public, but the spokesperson made it public. Similarly, Gachchhadar, who merged his erstwhile Nepal Democratic Forum with the NC just before the elections, said that he and other NDF leaders should be adjusted in the party in line with the understanding reached during the merger, according to a leader present at the meeting.',
  },
  {
    id: 3,
    image: require('../assets/images/News3.png'),
    title: 'Luis Suarez returns to Nacional, the team where it all began',
    name: 'Online Khabar',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    author: Authors[1],
    type: 'Live Transfer Talk',
    views: sixDigitRandomNumber(),
    likes: fourDigitRandomNumber(),
    comments: threeDigitRandomNumber(),
    description: `\tOn Sunday, when the CPN (Unified Socialist), one of the partners in the ruling coalition, suddenly decided to recall four of its ministers with a view to sending a new set of leaders to replace them, it was expected to set in motion a Cabinet reshuffle, with more changes of ministerial portfolios. However, until Sunday night, it looked like Prime Minister Sher Bahadur Deuba might not implement the Unified Socialist’s decision immediately.
      \nOn Monday, Deuba refused to change the ministers as recommended by the Unified Socialist, in what seems to be a setback for its chair Madhav Kumar Nepal.
      \nSources say changing some ministers from the Unified Socialist would have created pressure on Deuba for a major Cabinet reshuffle, which stopped him from implementing Nepal’s decision.
      \nAnd there were concerns if changing ministers at a time when the budget is being discussed in Parliament could have sent a good message.
      \nDeuba, also the Nepali Congress president, consulted CPN (Maoist Centre) chair Pushpa Kamal Dahal, Madhav Nepal and Janata Samajbadi Party chair Upendra Yadav on Monday morning.
      \n“We suggested that the Cabinet reshuffle be stalled for now,” said Upendra Yadav, chair of Janata Samajbadi Party. “How can ministers be changed when the budget is yet to be endorsed by Parliament?”
      \nYadav’s position against a Cabinet rejig, however, stems from pressure he is facing from some of his lawmakers for ministerial berths.
      \nSome lawmakers had already started asking Yadav to recall the ministers and send them to the Cabinet as he had earlier told them that a new set of leaders would be made ministers “after six months.”
      \nFormed in mid-July, Deuba had given full shape to his government three months later. Four ministers each from the Unified Socialist and Janata Samajbadi were appointed in the first week of October.
      \n“Our chairman had told us that the existing set of ministers would be replaced after six months,” said Pradip Yadav, one of the lawmakers of the Janata Samajbadi who is aspiring for a ministerial portfolio. “We have reminded the party chair of his words. Let’s see when he decides to replace ministers.”
      \nOn Sunday, the Unified Socialist decided to recommend Jeevan Ram Shrestha as minister for tourism, culture and civil aviation to replace Prem Ale; Metmani Chaudhary as minister for urban development to replace Ram Kumari Jhakri; Sher Bahadur Kunwar as minister for labour and employment in place of Krishna Kumar Shrestha; and Bhawani Prasad Khapung as minister for health and population to replace Birodh Khatiwada. Khapung is currently serving as state minister for health. The party also recommended Hira Chandra KC as minister of state for health and population.
      \nThe incumbent ministers, however, complained that they were not taken into confidence before the decision was taken.
      \n“Reshuffling the Cabinet when the ministers are discussing the budget in Parliament is unheard of anywhere in the world,” said Birodh Khatiwada, the minister for health and population, earlier in the afternoon. “I will be attending the Cabinet meeting later today.”
      \nAfter the decision was not implemented, Khatiwada did attend the Cabinet meeting.
      \nIt was not immediately clear why Madhav Nepal made the abrupt decision to replace his party’s ministerial line-up.
      \nSenior leader of the party Jhalanath Khanal said the leadership should take the responsibility of implementing the party’s decisions.
      \n“It’s a surprising act in Nepali politics. One of the coalition partners takes a decision and the coalition refuses to implement it,” Khanal told the Post. “Our leadership should take the responsibility and the decision must be implemented.”
      \nKhanal said the issue will be raised in the party meeting.
      \n“Our party doesn’t function along the lines of what the coalition says,” said Khanal. “Our’s is a sovereign and independent party.”
      \nMany say Deuba may have nixed Unified Socialist’s proposal to change the ministers also to offset pressure he was feeling within his party to reshuffle the Cabinet.
      \nNepali Congress general secretary and lawmaker Gagan Thapa said on Monday that there are demands within his party to induct new faces into the Cabinet although formal discussions are yet to happen.
      \n“Those who have served as ministers are demanding that they be given a chance to show their performance,” Thapa, also a former minister, told reporters after the House meeting. “It’s up to the Parliamentary Party [Deuba] leader to decide as there is a short time remaining for this government to spend in office.”
      \nThapa said lawmakers have been complaining that the same leaders are repeated every time the Congress forms the government or joins a coalition.
      \nSome Congress leaders said it’s up to Madhav Nepal how he deals with his party members after the prime minister refused to change the ministers as recommended by him.
      \n“It’s up to the leaders of the Unified Socialist; the Congress has nothing to comment on it,” said a senior Congress leader who wished to remain anonymous.
      \nNow that Unified Socialist ministers have been given continuity, a dispute is set to arise in the party, and if the problem continues, it could affect the coalition. Party chair Madhav Nepal has already expressed displeasure at the coalition after the party’s poor performance in the local polls. Another party that is not happy with the local poll performance is Janata Samajbadi.
      \nThe coalition’s fifth partner, Rastriya Janamorcha, has no share in the Deuba-led Cabinet.
      \nAs the country prepares for general elections, due later this year, Deuba is in a bid to protect the coalition so as to keep the main opposition CPN-UML in check. He fears a possible left alliance of the UML, the Maoist Centre and Unified Socialist. The Maoist Centre, which seems happy with its poll performance, does not look too keen on joining hands with the UML.
      \nSome say the dispute in the Unified Socialist, however, may trigger a new chain of events.
      \nDeuba, meanwhile, is weighing various options as he intends to conduct the general elections by November-end.
      \nAccording to coalition party leaders, Deuba and Dahal have said that the Cabinet could be reshuffled after the budget is endorsed by Parliament.
      \nDeuba is also making attempts to rope in the Loktantrik Samajbadi Party to the government by offering deputy Speaker and at least two ministers to the party.
      \nAccording to leaders, the ongoing meeting of the party’s Central Executive Committee is discussing whether to join the government.
      \n“We are ready to join the government but we need at least three ministers,” said a Central Executive Committee member of the party asking not to be named. “Why would we need the deputy Speaker’s position when the House is set to complete its term?”
      \nThe party is preparing to hand over a memorandum to the prime minister on Tuesday with a set of demands it wants to be met by the government.
      \n“We have not received any proposal from the government yet,” said Keshav Jha, a Loktantrik Samajbadi leader. “But the prime minister seems ready to address our demands.”`,
  },
];
