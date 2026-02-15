import { CardItemProps, SessionType, SessionFormat } from '@shared/interfaces'

export const Items: CardItemProps[] = [
  {
    image:
      'https://s2ru1.kinoplan24.ru/938/0406060507289e25bf701fc6/24046.jpg?mode=fit&width=999&height=999',
    alt: 'Природа',
    description: 'Красивый пейзаж с горами и лесом',
    detailedDescription:
      'На этом фото изображены величественные горы, покрытые густым лесом. Идеальное место для прогулок и отдыха на природе, где можно насладиться чистым воздухом и тишиной.',
    genre: 'Документальный',
    director: 'Иван Смирнов',
    cast: 'Алексей Иванов',
    runtime: '52 мин',
    country: 'Россия',
    releaseYear: 2022,
    ageRating: '0+',
    eventTimes: ['10:00', '14:00'],
    premiere: '2022-11-01',
    sessions: [
      {
        room_id: 1,
        timestamp: 1735585200,
        type: SessionType.STANDARD,
        format: SessionFormat.TWO_D,
        price: 300,
      },
      {
        room_id: 2,
        timestamp: 1735592400,
        type: SessionType.VIP,
        format: SessionFormat.THREE_D,
        price: 500,
      },
    ],
  },
  {
    image:
      'https://s1ru1.kinoplan24.ru/863/04060605071ad2b1f4a0cf55/10065222.jpg?mode=fit&width=999&height=999',
    alt: 'Море',
    description: 'Спокойное море на закате',
    detailedDescription:
      'Мягкий золотистый свет заката отражается в спокойных волнах моря. Идеальный момент для медитации и фотографий романтической природы.',
    genre: 'Природа / Пейзажи',
    director: 'Мария Долина',
    cast: '—',
    runtime: '45 мин',
    country: 'Италия',
    releaseYear: 2021,
    ageRating: '6+',
    eventTimes: ['12:00', '18:30'],
    premiere: '2021-07-10',
    sessions: [
      {
        room_id: 3,
        timestamp: 1735603200,
        type: SessionType.STANDARD,
        format: SessionFormat.TWO_D,
        price: 250,
      },
    ],
  },
  {
    image:
      'https://s2ru1.kinoplan24.ru/985/04060605071ab251ee52f8db/22709.jpg?mode=fit&width=999&height=999',
    alt: 'Город',
    description: 'Вечерний городской пейзаж с огнями',
    detailedDescription:
      'Сверкающие огни города создают атмосферу вечернего оживления. На фото видно сочетание современной архитектуры и динамики городской жизни.',
    genre: 'Городской арт',
    director: 'Чжан Вэй',
    cast: '—',
    runtime: '38 мин',
    country: 'Китай',
    releaseYear: 2020,
    ageRating: '0+',
    eventTimes: ['16:00'],
    premiere: '2020-10-05',
    sessions: [
      {
        room_id: 1,
        timestamp: 1735610400,
        type: SessionType.VIP,
        format: SessionFormat.THREE_D,
        price: 450,
      },
      {
        room_id: 4,
        timestamp: 1735617600,
        type: SessionType.STANDARD,
        format: SessionFormat.TWO_D,
        price: 300,
      },
    ],
  },
  {
    image:
      'https://s1ru1.kinoplan24.ru/443/04060605072c4798225af9e7/10067948.jpg?mode=fit&width=999&height=999',
    alt: 'Цветы',
    description: 'Яркие цветы в солнечном саду',
    detailedDescription:
      'Солнечные лучи освещают яркие лепестки цветов, создавая живописную и радостную атмосферу. Идеально подходит для вдохновения и спокойного настроения.',
    genre: 'Натюрморт',
    director: 'Оливия Роуз',
    cast: '—',
    runtime: '30 мин',
    country: 'Франция',
    releaseYear: 2023,
    ageRating: '0+',
    eventTimes: ['09:00', '11:00'],
    premiere: '2023-04-20',
    sessions: [
      {
        room_id: 5,
        timestamp: 1735624800,
        type: SessionType.STANDARD,
        format: SessionFormat.TWO_D,
        price: 200,
      },
    ],
  },
  {
    image:
      'https://s2ru1.kinoplan24.ru/969/0406060507207c681b0473bf/10066171.jpg?mode=fit&width=999&height=999',
    alt: 'Природа',
    description: 'Трансформеры: Эпоха истребления',
    detailedDescription:
      'На этом фото изображены величественные горы, покрытые густым лесом. Идеальное место для прогулок и отдыха на природе, где можно насладиться чистым воздухом и тишиной.',
    genre: 'Фантастика / Боевик',
    director: 'Майкл Бэй',
    cast: 'Марк Уолберг, Никола Пельтц, Стэнли Туччи',
    runtime: '165 мин',
    country: 'США',
    releaseYear: 2014,
    ageRating: '12+',
    eventTimes: ['19:00', '21:45'],
    premiere: '2014-06-27',
    sessions: [
      {
        room_id: 2,
        timestamp: 1735632000,
        type: SessionType.VIP,
        format: SessionFormat.THREE_D,
        price: 600,
      },
      {
        room_id: 3,
        timestamp: 1735639200,
        type: SessionType.STANDARD,
        format: SessionFormat.TWO_D,
        price: 400,
      },
    ],
  },
]
