export interface Article {
  id: number;
  title: string;
  image: string;
  category: string;
  created_at: string;
  owner: string;
  description: string;
}

export const articles = [
  {
    id: 1,
    title: 'That\'s the news!',
    image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg',
    category: 'Travels',
    created_at: '14.01.2022',
    owner: 'Lisa McCartney',
    description: 'Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam dignissim elementum. Donec a ullamcorper diam. /n Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?'
  },
  {
    id: 2,
    title: 'Exhibition in Paris',
    image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg',
    category: 'Art',
    created_at: '12.01.2022',
    owner: 'Anna Doe',
    description: 'Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.'
  },
  {
    id: 3,
    title: 'Stock market boom',
    image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg',
    category: 'Bussiness',
    created_at: '10.01.2022',
    owner: 'Joe Svan',
    description: 'Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue sem finibus eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus. Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum ac. Maecenas sed blandit dolor.'
  },
   {
    id: 4,
    title: 'Loram Ipsume',
    image: 'https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg',
    category: 'Art',
    created_at: '10.01.2023',
    owner: 'Stefan',
    description: 'Sed sollicitudin. \n Nullam scelerisque odio vel lacus faucibus, vitae interdum lectus. Praesent nulla purus, commodo at euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum ac. Maecenas sed blandit dolor.'
  },
];
