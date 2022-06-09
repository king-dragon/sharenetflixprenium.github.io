// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Heateam',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'admin account',
      icon: 'user',
      link: 'https://t.me/Chiensaker',
    },
    {
      id: '2',
      name: 'Telegram',
      icon: 'message-circle',
      link: 'https://t.me/cookienetflxpremium',
    },
    {
      id: '5',
      name: 'netflix',
      icon: 'youtube',
      link: 'https://www.netflix.com',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'video',
      id: '1',
      links: [
        {
          name: 'Spiderman series',
          link: 'https://www.netflix.com/watch/80166369?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596460304_titles%2F1%2F%2Fspiderman%2F0%2F0%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596460304_titles%2F1%2F%2Fspiderman%2F0%2F0%2Cunknown%2C%2Cd76f2ccf-3908-467b-a98f-f01341350174-596460304%7C1%2CtitlesResults%2C80166369',
        },
        {
          name: 'Hulk',
          link: 'https://www.netflix.com/watch/70087537?trackId=255824129&tctx=0%2C3%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596520810_titles%2F1%2F%2Fthor%2F0%2F0%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596520810_titles%2F1%2F%2Fthor%2F0%2F0%2Cunknown%2C%2Cd76f2ccf-3908-467b-a98f-f01341350174-596520810%7C1%2CtitlesResults%2C70087537',
        },
        {
          name: 'Avatar',
          link: 'https://www.netflix.com/watch/70142405?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596611014_titles%2F1%2F%2Favatar%2F0%2F0%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596611014_titles%2F1%2F%2Favatar%2F0%2F0%2Cunknown%2C%2Cd76f2ccf-3908-467b-a98f-f01341350174-596611014%7C1%2CtitlesResults%2C70142405',
        },
        {
          name: 'GodZilla',
          link:'https://www.netflix.com/watch/81044417?trackId=255875003&tctx=0%2C4%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596653381_titles%2F2%2F%2F%2F1%2F81058097%2CNAPA%40%40%7Cd76f2ccf-3908-467b-a98f-f01341350174-596653381_titles%2F2%2F%2F%2F1%2F81058097%2Cunknown%2C%2Cd76f2ccf-3908-467b-a98f-f01341350174-596653381%7C1%2CsuggestionTitlesResults%2C81044417',
        },
      ],
    },
    {
      icon: 'cookie',
      id: '2',
      links: [
        {
          name: 'Cookies 1',
          link: 'https://za7o7cw6-my.sharepoint.com/:u:/g/personal/hoanglong_coursedeals_org/ERilu_EzjCxJu5XG7vvHl1ABDL40dQuR525GA1OX0MEX0Q?e=vix4Gw',
        },
        {
          name: 'Cookies 2',
          link: 'https://za7o7cw6-my.sharepoint.com/:u:/g/personal/hoanglong_coursedeals_org/Ed5M-x6R1z9Fij5zz3XGlRoBJQ4uWxabKTF-1lDSNDFL8Q?e=vEbV6u',
        },
        {
          name: 'Cách lấy cookies',
          link: 'https://youtu.be/_5THHXpREiA',
        },
        {
          name: 'Kho cookies',
          link: 'https://docs.google.com/spreadsheets/d/1YK9j-87ShDNjoPRqWX0QWXC5Z7EoaiDWgpmBY99igXU/edit#gid=0',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
