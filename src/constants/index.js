import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  docker,
  spikizy,
  amazon,
  freelance,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Про меня",
  },
  {
    id: "work",
    title: "Мои работы",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const services = [
  {
    title: "Веб разработчик",
    icon: web,
  },
  {
    title: "React Native Разработчик",
    icon: mobile,
  },
  {
    title: "Backend Разработчик",
    icon: backend,
  },
  {
    title: "Контент Креатор",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Разработчик",
    company_name: "iOne",
    icon: '',
    iconBg: "#383E56",
    date: "Июнь 2020 - Сентябрь 2020",
    points: [
      "Разработка и поддержка веб-приложений с использованием HTML, CSS и JavaScript.",
      "Взаимодействие с кросс-функциональными командами, включая дизайнеров, продукт-менеджеров и других разработчиков для создания качественных продуктов.",
      "Реализация адаптивного дизайна и обеспечение кросс-браузерной совместимости.",
      "Участие в код-ревью и предоставление конструктивной обратной связи другим разработчикам.",
    ],
  },
  {
    title: "Backend разработчик",
    company_name: "Spikizy",
    icon: spikizy,
    iconBg: "#E6DEDD",
    date: "Октябрь 2022 - Май 2023",
    points: [
      "Разработка и поддержка серверной части веб-приложений с использованием языка Python.",
      "Создание и интеграция RESTful API для взаимодействия с фронтенд-частью и другими сервисами.",
      "Оптимизация производительности и безопасности серверного кода.",
      "Работа в команде с другими разработчиками, обеспечивая высокое качество кода и следование лучшим практикам разработки.",
    ],
  },
  {
    title: "Backend разработчик",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "Октябрь 2023 - Декабрь 2023",
    points: [
      "Разработка и поддержка серверной части высоконагруженных веб-приложений с использованием языка Python.",
      "Создание и интеграция масштабируемых RESTful API, обеспечивающих стабильное взаимодействие с фронтенд-частью и внешними сервисами.",
      "Сотрудничество с кросс-функциональными командами, включая инженеров, продукт-менеджеров и дизайнеров, для создания высококачественных решений.",
      "Оптимизация производительности и обеспечение безопасности серверного кода.",
    ],
  },
  {
    title: "Full stack Разработчик",
    company_name: "Фриланс",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Январь 2024 - По сей день",
    points: [
      "Фулстек-разработка веб-приложений с использованием HTML, CSS, JavaScript для фронтенда и Python для бэкенда.",
      "Разработка и внедрение искусственного интеллекта для Улугбека Шарипова, включая создание алгоритмов машинного обучения, обработку и анализ данных, а также разработку и оптимизацию моделей.",
      "Создание и поддержка телеграм-ботов, включая разработку функционала, интеграцию с внешними API и обеспечение безопасности.",
      "Проектирование и разработка масштабируемых и эффективных решений для различных клиентов и проектов.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Я думал, что сделать веб-сайт таким же красивым, как наш продукт, невозможно, но Толеби доказал обратное.",
    name: "Данияр Ералиев",
    designation: "Бизнесмен",
    company: " ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Я никогда не встречал веб-разработчика, который действительно заботится об успехе своих клиентов так, как Толеби.",
    name: "Алиаскар Сатылды",
    designation: "Data Analyst",
    company: "DHL Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "После того как Толеби оптимизировал наш веб-сайт, наш трафик увеличился на 73%. Мы не можем выразить ему достаточную благодарность!",
    name: "Зухра Байтасова",
    designation: "Бизнесвумен",
    company: "Магазин",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Веб-платформа, которая позволяет пользователям искать, бронировать и управлять арендами автомобилей от различных поставщиков, предоставляя удобное и эффективное решение для транспортных потребностей.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Веб-приложение, которое позволяет пользователям искать вакансии, просматривать предполагаемые диапазоны зарплат для позиций и находить доступные рабочие места на основе их текущего местоположения.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Комплексная платформа для бронирования путешествий, которая позволяет пользователям бронировать авиабилеты, отели и автомобили в аренду, а также предлагает специально подобранные рекомендации для популярных направлений.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
