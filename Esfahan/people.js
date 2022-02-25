const people = [
  {
    name: "parsa",
    name_fn: "پارسا",
    transactions: [
      {
        name: "املت رگ راگ",
        date: "1400/11/23",
        time: "9:30",
        category: "food",
        items: [
          {
            name: "املت",
            price: 168000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "با ماهاس",
        date: "1400/11/20",
        time: "21:30",
        category: "food",
        items: [
          {
            name: "شکارچیان ۹۸",
            price: 60000,
            users: [6],
          },
          {
            name: "شکارچیان ۹۸",
            price: 60000,
            users: [2],
          },
        ],
      },
      {
        name: "هانی",
        date: "1400/11/20",
        time: "14:30",
        category: "food",
        items: [
          {
            name: "خورشت کاری",
            price: 45000,
            users: [6],
          },
          {
            name: "آلبالو پلو",
            price: 69000,
            users: [2],
          },
        ],
      },
    ],
  },
  {
    name: "keyvan",
    name_fn: "کیوان",
    transactions: [
      {
        name: "املت سر راهی",
        date: "1400/11/22",
        time: "8:30",
        category: "food",
        items: [
          {
            name: "املت",
            price: 200000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "فالوده",
        date: "1400/11/22",
        time: "19:30",
        category: "pre-food",
        items: [
          {
            name: "فالوده",
            price: 42000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "مجموعه غذایی ریجان",
        date: "1400/11/22",
        time: "22:04",
        category: "food",
        items: [
          {
            name: "هالوپینو",
            price: 78000,
            users: [1, 5],
          },
          {
            name: "هالوپینو",
            price: 78000,
            users: [4],
          },
          {
            name: "مخصوص ریحان",
            price: 65000,
            users: [3, 6],
          },
          {
            name: "س اسپشیال",
            price: 54000,
            users: [3, 6],
          },
          {
            name: "س اسپشیال",
            price: 54000,
            users: [1, 5],
          },
          {
            name: "لازانیا",
            price: 48000,
            users: [2],
          },
          {
            name: "آب معدنی",
            price: 16000,
            users: [1, 2, 3, 6],
          },
          {
            name: "دلستر",
            price: 18000,
            users: [4, 5],
          },
        ],
      },
    ],
  },
  {
    name: "sarina",
    name_fn: "سارینا",
    transactions: [
      {
        name: "سیگار",
        date: "1400/11/22",
        time: "NA",
        category: "cigar",
        items: [
          {
            name: "سیگار",
            price: 45000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "آندورا",
        date: "1400/11/21",
        time: "14:30",
        category: "food",
        items: [
          {
            name: "دنگ پارسا",
            price: 126000,
            users: [1],
          },
          {
            name: "دنگ کیوان",
            price: 39000,
            users: [2],
          },
          {
            name: "دنگ آرین",
            price: 125000,
            users: [4],
          },
          {
            name: "دنگ کیمیا",
            price: 47000,
            users: [5],
          },
          {
            name: "دنگ آبتین",
            price: 86000,
            users: [6],
          },
        ],
      },
    ],
  },
  {
    name: "arian",
    name_fn: "آرین",
    transactions: [
      {
        name: "چیپس و چایی",
        date: "1400/11/22",
        time: "7:50",
        category: "pre-food",
        items: [
          {
            name: "چیپس و چایی",
            price: 62000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "بنزین",
        date: "1400/11/22",
        time: "12:32",
        category: "fuel",
        items: [
          {
            name: "بنزین",
            price: 80400,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "سیگار",
        date: "1400/11/22",
        time: "NA",
        category: "cigar",
        items: [
          {
            name: "سیگار",
            price: 40000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
      {
        name: "بریونی هزار و یک شب",
        date: "1400/11/22",
        time: "14:53",
        category: "food",
        items: [
          {
            name: "بریونی",
            price: 255000,
            users: [2, 4, 6],
          },
        ],
      },
    ],
  },
  {
    name: "kimia",
    name_fn: "کیمیا",
    transactions: [
      {
        name: "home food",
        date: "1400/11/22",
        time: "14:53",
        category: "food",
        items: [
          {
            name: "سمبوسه",
            price: 32000,
            users: [1, 3, 5],
          },
          {
            name: "قارچ سوخاری",
            price: 37500,
            users: [1, 3, 5, 6],
          },
          {
            name: "سیب زمینی بزرگ",
            price: 37000,
            users: [1, 3, 5],
          },
          {
            name: "نوشابه",
            price: 11000,
            users: [1, 3, 5],
          },
        ],
      },
    ],
  },
  {
    name: "abtin",
    name_fn: "آبتین",
    transactions: [
      {
        name: "رگ راگ",
        date: "1400/11/22",
        time: "20:50",
        category: "place",
        items: [
          {
            name: "هاستل رگ راگ",
            price: 480000,
            users: [1, 2, 3, 4, 5, 6],
          },
        ],
      },
    ],
  },
];

export default people;
