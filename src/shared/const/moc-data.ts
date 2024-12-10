import { TCategory, TService } from "../types/types";

// export const categories: TCategory[] = [
//   {
//     id: "fizioterapiya",
//     name: "Физиотерапия",
//     imageUrl:
//       "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
//   },
//   {
//     id: "massazhi",
//     name: "Массажи",
//     imageUrl:
//       "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
//   },
//   {
//     id: "procedury",
//     name: "Процедуры",
//     imageUrl:
//       "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
//   },
//   {
//     id: "lfk",
//     name: "ЛФК",
//     imageUrl:
//       "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
//   },
// ];

export const servicesList: TService[] = [
  {
    id: "1",
    title: "PRP-терапия 1",
    description:
      "1 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "1000",
    categoryId: "fizioterapiya",
  },
  {
    id: "2",
    title: "PRP-терапия 2",
    description:
      "2 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "2000",
    categoryId: "fizioterapiya",
  },
  {
    id: "3",
    title: "PRP-терапия 3",
    description:
      "3 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "3000",
    categoryId: "fizioterapiya",
  },
  {
    id: "4",
    title: "PRP-терапия 4",
    description:
      "4 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "4000",
    categoryId: "fizioterapiya",
  },
  {
    id: "5",
    title: "PRP-терапия 5",
    description:
      "5 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "5000",
    categoryId: "fizioterapiya",
  },
  {
    id: "6",
    title: "PRP-терапия 6",
    description:
      "6 PRP-терапия — это инновационная процедура, основанная на введении плазмы пациента, обогащенной тромбоцитами плазмы",
    price: "6000",
    categoryId: "fizioterapiya",
  },
];

export const ServicesTitlesList = servicesList.map((item: TService) => ({
  title: item.title,
}));

export const ImageCardMocData = {
  id: 1,
  imageUrl:
    "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
  altText: "string",
  services: ServicesTitlesList,
};

export const ImageMocData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1630631729332-d564de91400f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    altText: "string",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
];

export const MainBunnerImageUrl =
  "https://images.unsplash.com/photo-1593012370132-c4390ff79e92?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const SecondBunnerImageUrl =
  "https://images.unsplash.com/photo-1593012370132-c4390ff79e92?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const ContactData = {
  address: "Краснодар, Постовая улица, 23",
  schedule: "Пн-Сб: 08:00—20:00",
  phone: "+7 (918) 232-13-13",
};

export const graduation = [
  "Кубанский государственный медицинский университет (лечебное дело) (2014 г.)",
  "Кубанский государственный медицинский университет (анестезиология и реаниматология) (2015 г.)",
  "Курсы повышения квалификации",
  "Кубанский государственный медицинский университет (травматология и ортопедия) (2016 г.)",
];

export const expirience = [
  "Общая практика",
  "Врач травматолог-ортопед. МБУЗ «Детская городская поликлиника №3» (2016-2020 гг.).",
];

export const cpecialistsList = [
  {
    id: 1,
    name: "Лиясов Андрей Игоревич",
    cpeciality: ["Ортопед", "Травматолог"],
    description:
      "Является специалистом по ЛФК, а также работает в сфере ортопедии и травматологии. В качестве тренера по лечебной физкультуре он ведет работу с пациентами самых разных групп",
    imageUrl:
      "https://images.unsplash.com/photo-1630631729332-d564de91400f?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Лиясов Андрей Игоревич",
    cpeciality: ["Ортопед", "Травматолог"],
    description:
      "Является специалистом по ЛФК, а также работает в сфере ортопедии и травматологии. В качестве тренера по лечебной физкультуре он ведет работу с пациентами самых разных групп",
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 3,
    name: "Лиясов Андрей Игоревич",
    cpeciality: ["Ортопед", "Травматолог"],
    description:
      "Является специалистом по ЛФК, а также работает в сфере ортопедии и травматологии. В качестве тренера по лечебной физкультуре он ведет работу с пациентами самых разных групп",
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
  {
    id: 4,
    name: "Лиясов Андрей Игоревич",
    cpeciality: ["Ортопед", "Травматолог"],
    description:
      "Является специалистом по ЛФК, а также работает в сфере ортопедии и травматологии. В качестве тренера по лечебной физкультуре он ведет работу с пациентами самых разных групп",
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    altText: "string",
  },
];
