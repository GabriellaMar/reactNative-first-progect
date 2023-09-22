
 import image from '../../assets/forest.jpg';
import blackSee from '../../assets/blackSee.jpg'
import oldHouse from '../../assets/oldHouse.jpg'
import authAvatar from '../../assets/comAvatar.jpg'
import userAvatar from '../../assets/commentAvatar.jpg'
 
//  export const postsData = [{
//     id: 1,
//     title: 'Ліс',
//     image: image,
    
//     likes: 2,
//     locationName: 'Ukraine',
//     location:  {
//   latitude: 48.6752, // Широта озера Синевир
//   longitude: 23.4419, // Довгота озера Синевир
//   latitudeDelta: 0.09, // Зум для широти (можете змінити за необхідністю)
//   longitudeDelta: 0.09
//     },
//     comments: [
//         {
//             id: 5,
//             useravatar: userAvatar,
//             commentText: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
//             date:'09 червня, 2020 | 08:40'
//         },

//         {id: 10,
//             useravatar: authAvatar,
//             commentText:'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
//             date:'09 червня, 2020 | 09:14',
//         },
//         {id: 7,
//             useravatar: userAvatar,
//             commentText:'Thank you! That was very helpful!',
//             date:'09 червня, 2020 | 09:20',
//         }

//     ],
// },

// {
//     id:2 ,
//     title: 'Захід сонця на Чорному морі',
//     image: blackSee,
//     comments: [],
//     likes: 10,
//     locationName: 'Ukraine',
//     location:  {
//         latitude: 46.1173,
//         longitude: 32.9207,
//         latitudeDelta: 0.9,
//         longitudeDelta: 0.9,
//     },
// },
// {
//     id: 3,
//     title: 'Старий будинок',
//     image: oldHouse,
//     comments: [1, 2],
//     likes: 5,
//     locationName: 'Italy',
//     location:  {
//         latitude: 41.9028, 
//         longitude: 12.4964,
//         latitudeDelta: 0.9,
//         longitudeDelta: 0.9,
//     },
// },

// ]
export const postsData = [{
    id: 1,
    title: 'Ліс',
    image: image,
    likes: 2,
    locationName: 'Ukraine',
    location: {
      latitude: 48.6752,
      longitude: 23.4419,
      latitudeDelta: 0.09,
      longitudeDelta: 0.09,
    },
    comments: [
      {
        id: 5,
        useravatar: userAvatar,
        commentText: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
        date: '09 червня, 2020 | 08:40',
      },
      {
        id: 10,
        useravatar: authAvatar,
        commentText: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
        date: '09 червня, 2020 | 09:14',
      },
      {
        id: 7,
        useravatar: userAvatar,
        commentText: 'Thank you! That was very helpful!',
        date: '09 червня, 2020 | 09:20',
      },
    ],
  },
  {
    id: 2,
    title: 'Захід сонця на Чорному морі',
    image: blackSee,
    comments: [], // Змініть це на порожній масив
    likes: 10,
    locationName: 'Ukraine',
    location: {
      latitude: 46.1173,
      longitude: 32.9207,
      latitudeDelta: 0.9,
      longitudeDelta: 0.9,
    },
  },
  {
    id: 3,
    title: 'Старий будинок',
    image: oldHouse,
    comments: [ 
      {
        id: 1,
        useravatar: userAvatar,
        commentText: 'Дуже гарний пост!',
        date: '10 червня, 2020 | 10:00',
      },
      {
        id: 2,
        useravatar: authAvatar,
        commentText: 'Дякую за коментар!',
        date: '10 червня, 2020 | 10:15',
      },
    ],
    likes: 5,
    locationName: 'Italy',
    location: {
      latitude: 41.9028,
      longitude: 12.4964,
      latitudeDelta: 0.9,
      longitudeDelta: 0.9,
    },
  },
  ];