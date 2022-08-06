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
    image: require('../assets/images/laliga.png'),
    thumbnail: require('../assets/images/laligaPlus.jpeg'),
    title:
      'LaLiga teams up with Streamline to jointly create new experience for fans in China',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    author: Authors[0],
    views: sixDigitRandomNumber(),
    likes: fourDigitRandomNumber(),
    comments: threeDigitRandomNumber(),
    type: '',
    description: `LaLiga announces a six-year strategic partnership with Beijing based Streamline Media Technology, officially launching the LaLiga live streaming application in China: LaLiga Plus.

      The DTC Exclusive Brand Dedicated Application solution, LaLiga Plus will connect Chinese fans to LaLiga Santander and LaLiga Smartbank starting this season. This APP will offer different packages to the fans through a freemium model combining free and paid matches. Fans will be able to enjoy all 380 matches of LaLiga Santander and for the first time in China, all 462 matches and promotion play-offs of LaLiga Smartbank will be available to the Chinese fans as well. With this launch, LaLiga is the first among the major leagues to have a DTC solution in the country.
      
      "Brand Dedicated Application is the future of sports broadcasting. Technology is playing an increasingly important role in the world of sport. This is a strategic agreement and a firm commitment to innovation in a country as important to us as China", said Javier Tebas, president of LaLiga.
      
      Laliga has been continuously dedicated to offering an interactive viewing experience to all its fans in China. The partnership with Streamline enables LaLiga to connect with Chinese fans through a deeper and more profound relationship. By immersing fans in the LaLiga culture, which will be an all new immersive experience by integrating sport, technology and IP derivatives, targeted to build an comprehensive showcase for LaLiga delivering its full excitement and passion.
      
      "I couldn’t ask for a better partner, a world class sports brand like LaLiga, who shares our vision of how we believe sports will be brought to audiences in the future. LaLiga Plus will be a significant game changer in the sports entertainment industry and I am optimistic we will soon be able to announce partnerships with other major sports brands and IP’s.", said Marco Weber, Chairman, CEO and Founder of Streamline.
      
      The two parties will work closely on delivering a more immersive LaLiga game viewing experience to all Chinese fans.
      
      "LaLiga Plus is the core of our strategy in China for the next years. This is a first step of a complete ecosystem we are building to provide new and unique experiences and new products to fans. Together with Streamline, we are investing in technology, fan experience and increasing value for our brand and business", said Sergi Torrents, LaLiga’s managing director in China.`,
  },
  {
    id: 2,
    image: require('../assets/images/laliga.png'),
    thumbnail: require('../assets/images/eaLaliga.jpeg'),
    title: 'EA SPORTS FC will be the title sponsor of all LaLiga competitions',
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    author: Authors[1],
    type: 'Live Transfer Talk',
    views: sixDigitRandomNumber(),
    likes: fourDigitRandomNumber(),
    comments: threeDigitRandomNumber(),
    description: `'Electronics Arts Inc. (NASDAQ: EA) and LaLiga, a leader in football entertainment, announced today they have entered into a one of a kind, multi-year partnership that will allow both parties to deliver groundbreaking experiences for global football fans. Starting in the 2023/2024 season, the partnership between EA SPORTS FC™ and LaLiga will include title naming rights for all LaLiga competitions, a complete rebrand of LaLiga with EA SPORTS including all logos, graphics, fonts and other visual elements, while also delivering new in-game integration, broadcast highlights, and joint commitments to supporting grassroots initiatives.

      This new partnership will encompass the first and second divisions of LaLiga (Spain’s top professional football competitions), LaLiga Promises (the league’s annual youth tournament) and eLaLiga.
      
      “EA SPORTS FC is committed to delivering the most authentic and immersive experiences in global football. Our innovative new partnership with LaLiga further elevates that ambition and solidifies both organizations' position at the centre of football culture,” said David Jackson, VP Brand, EA SPORTS FC. “The visible reach and scale of this partnership is deeply exciting, as is the opportunity to deliver incredible experiences for fans through in-game innovation, interactive entertainment and grassroots initiatives.” 
      
      "EA SPORTS represents the cutting edge of interactive football experiences while LaLiga is at the forefront of actual football competitions with unmatched in-person, broadcast and digital fan experiences,” said Javier Tebas, President, LaLiga. “We have been strategic partners with EA SPORTS for years and this expanded agreement is a commitment to providing the next level of innovation to all football fans, a fusion between the virtual and real worlds of football.”
      
      For years, fans have been able to experience unrivaled authenticity in game, playing with their favourite LaLiga teams, players, and stadiums within EA SPORTS’ football ecosystem. With this partnership, EA SPORTS and LaLiga will deepen their collaboration. In addition to the naming rights partnership, fans will experience the benefit through technology, gameplay enhancements and development, and real-world football highlights. Both LaLiga and EA SPORTS are committed to grassroots initiatives to grow the game which will include increasing accessibility, upgrading facilities, and many more initiatives to truly immerse fans into the world of football.
      
      “This partnership with EA SPORTS is set to truly transform the way football is enjoyed around the world,” said Óscar Mayo, Executive Director, LaLiga. “Moreover the alliance demonstrates LaLiga is a global brand, evidence of the success of our league to connect with fans internationally.”
      
      “We’re thrilled to partner with a worldwide leader in football fandom to better connect our fans to their favourite clubs, players, and LaLiga competitions,” said Nick Wlodyka, SVP & GM, EA SPORTS FC. “The contributions from LaLiga to our EA SPORTS FC portfolio will be immense, not only from a visual aspect, but across technological and game development improvements, further blurring the lines between the real and virtual worlds of football.”
      
      More details of the partnership will be shared in the coming months, with information on EA SPORTS FC products being made available in Summer 2023.'`,
  },
  {
    id: 3,
    image: require('../assets/images/arsenal.png'),
    thumbnail: require('../assets/images/cystalarsenal.jpeg'),
    title:
      "Crystal Palace and Arsenal players take a knee before the Premier League season's curtain-raiser",
    date: `${dateAndDay.month} ${dateAndDay.date}, ${dateAndDay.year}`,
    author: Authors[1],
    type: 'Live Transfer Talk',
    views: sixDigitRandomNumber(),
    likes: fourDigitRandomNumber(),
    comments: threeDigitRandomNumber(),
    description: `Crystal Palace and Arsenal players took the knee before their Premier League clash on Friday night (which the latter won 2-0) - with top flight stars deciding to perform the gesture at 'significant moments', including the start of the season.

    As Sportsmail forecasted on Tuesday, the pre-match gesture will no longer take place before every game this season, but players of the Eagles and Gunners opted to show their commitment to anti-discrimination before the first match of the campaign.
    
    Top flight players are planning to take the knee during the opening round of fixtures which began with Palace v Arsenal, and then again on Boxing Day, the finals of the FA Cup and League Cup, the last day of the season and weeks when the No Room For Racism campaign is active in October and November. 
    
    
    In a collective statement, the top-flight captains said: 'We have decided to select significant moments to take the knee during the season to highlight our unity against all forms of racism and in so doing we continue to show solidarity for a common cause.
    
    'We remain resolutely committed to eradicate racial prejudice, and to bring about an inclusive society with respect and equal opportunities for all.'
    
    Club skippers met a week ago to discuss several of issues. While a number still supported taking the knee, there were opposing views from some who felt the gesture had run its course.
    
    A compromise has now been found to ensure it remains part of the season but only ahead of certain matches. Having originally said they would not be taking the knee, Bournemouth players will now perform the anti-racism gesture on the days agreed.

While support for equality remains as strong as ever among top-flight footballers, there was some hesitation during last week's talks to make a definitive decision on how to proceed. 

The act of taking the knee before every game was first introduced in 2020 during Project Restart as a show of solidarity following the brutal murder of George Floyd by a police officer in Minneapolis.
The gesture has continued despite criticism that the act had political connotations.

Sources have indicated to Sportsmail over the summer that certain figures were keen for the gesture to be scrapped because it was proving too divisive.

In confirming the news, a statement read: 'Ahead of the new season, Premier League club captains have reaffirmed their commitment to fighting racism and all forms of discrimination.

'The players have decided to use specific moments during the upcoming campaign to take the knee, to amplify the message that racism has no place in football or society. 

'The Premier League supports the players' decision and, alongside the clubs, will use these opportunities to elevate anti-racism messaging as part of the League's No Room for Racism Action Plan.' 

    `,
  },
];
