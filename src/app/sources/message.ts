export interface Message {
  id: number;
  message: string;
}

export interface MessageThread {
  id: number;
  username: string;
  image: string;
  active: string;
  messages: {
    reply: Message[];
    receive: Message[];
  };
}

export const messages: MessageThread[] = [
  {
    id: 1,
    username: 'yoona_lim',
    image: 'assets/image/yoona_lim.jpg',
    active: '1h',
    messages: {
      reply: [
        {
          id: 1,
          message: 'otw',
        },
        {
          id: 2,
          message: 'Seblak saha?'
        },
        {
          id: 3,
          message: 'Seblak t\'amah? atau seblak mang dayat? cabena beraha sendok???'
        }
      ],
      receive: [
        {
          id: 1,
          message: 'A atang..'
        },
        {
          id: 2,
          message: 'hoyong seblak :('
        },
        {
          id: 3,
          message: 'hoyong seblak,.. buru ◣_◢'
        }
      ]
    }
  },
  {
    id: 2,
    username: 'angelina_jolie',
    image: 'assets/image/joli.jpg',
    active: '10m',
    messages: {
      reply: [],
      receive: [
        {
          id: 1,
          message: 'rek meser kangkung?'
        }
      ]
    }
  },
  {
    id: 3,
    username: 'robertdowneyjr',
    image: 'assets/image/tony_stark.jpg',
    active: '30m',
    messages: {
      reply: [],
      receive: [
        {
          id: 1,
          message: 'hayu joging kang'
        },
        {
          id: 2,
          message: 'minggu ka stadion gbk'
        }
      ]
    }
  }
];

