const texts = {
    ua: {
    //menu
    menu1: "Головна",
    menu2: "Про нас",
    menu3: "Послуги",
    menu4: "Публікації",
    menu5: "Контакти",

    //home
    home1: 'Юридична компанія "Ordynat Tsymbaluk Skuba"',
    home2: "Практикуючі,",
    home3: "висококваліфіковані адвокати забезпечать високоякісну юридичну допомогу",
    home4: "Підтримуюча",
    home5: "та розуміюча команда, присвячена допомозі клієнтам",
    home6: "Доступність,",
    home7: "чесність та відкритість до надання різного спектору юридичних послуг",
    home8: "Наша адвокатська компанія є новим обличчям на ринку правничої допомоги. Проте до складу нашого колективу входять досвідчені адвокати та юристи, за плечима яких великий досвід захисту клієнтів в судах та органах влади. Серед іншого, наші фахівці мають багаторічні контракти на представництво громадян та юридичних осіб. Перевірка часом - найбільш вагомий аргумент як доказ стабільної якості надання юридичних послуг. Окрім цього, колектив доповнюють молоді фахівці, які своїм амбітним та професійним ставленням впевнено доводять тезу: майбутнє юриспруденції в Україні є! Спектр послуг, що надаються представниками нашої команди, дозволить обрати спеціаліста саме у тій галузі права, яка стосується саме вас.",

    //about_us
    aboutUs1: "/ про нас /",
    aboutUs2: "Команда",
    aboutUs3: "наших адвокатів - це різноманітна і талановита група професіоналів, кожен з яких володіє унікальним набором навичок і пристрастю до захисту інтересів наших клієнтів. <br/> <br/>Вони віддані своїй справі, співчутливі та дуже компетентні, мають глибоке розуміння закону та прагнення до досконалості. <br/> <br/>Незалежно від того, чи вирішуєте ви складні юридичні питання або надаєте індивідуальну юридичну консультацію, наші юристи завжди готові прийняти виклик і домогтися виняткових результатів.",
    aboutUs4: "Понад 20 років на адвокатському ринку",
    aboutUs5: "Понад 500 клієнтів отримали кваліфіковану допомогу",
    aboutUs6: "Понад 11 галузей адвокатської діяльності",
    aboutUs7: "Понад 450 виграних справ",

    //team
    team1: "/ команда /",
    team2: "Наша команда",
    team3: "20 років у адвокатській справі",
    team4: "Михайло Цимбалюк",
    team5: "Адвокат",
    team6: "Спеціалізація: банківське право, цивільне та сімейне право, іпотечні та банківські спори, господарські спори, виконавче провадження, нотаріат (правочини, спадщина, та ін.), супровід господарської діяльності фізичних осіб-підприємців та юридичних осіб. Судовий адвокат. Загальний стаж судового юриста/адвоката складає 20 років.",
    team7: "Зоя Ординат",
    team8: "Адвокат",
    team9: "Спеціалізація: адвокат з військових справ, цивільне та сімейне право, виконавче провадження. Судовий адвокат. Загальний юридичний стаж 15 років.",
    team10: "Микола Скуба",
    team11: "Адвокат",
    team12: "Спеціалізація: кримінальний та адміністративний процес, справи про адміністративні правопорушення, ІТ-адвокат, виконавче провадження. Судовий адвокат. Загальний юридичний стаж 5 років.",
    team13: "Артем Старченко",
    team14: "Юрист/помічник адвоката",
    team15: "Спеціалізація: цивільне та сімейне право.",
    team16: "Максим Бабяк",
    team17: "Юрист/помічник адвоката",
    team18: "Спеціалізація: цивільне та сімейне право.",

    //why_us
    whyUs1: "/ чому ми /",
    whyUs2: "Чому люди обирають саме нас?",
    whyUs3: 'Юридична компанія "OTS" - це досвідчені адвокати, індивідуальне обслуговування та успішні результати. <br><br>Вибирайте нас за наш досвід, самовідданість і відданість вашій справі.  <br><br>Довіртеся нам, і ми досягнемо позитивних результатів!',
    whyUs4: "Написати нам", //id="link-to-submit"
    whyUs5: "Найвищий сервіс та стандарти",
    whyUs6: "Конфіденційність.",
    whyUs7: "Підтримка 24 / 7",
    whyUs8: "Експертне представництво",
    whyUs9: "Тільки кваліфіковані адвокати",
    whyUs10: "Індивідуальне обслуговування",
    whyUs11: "З урахуванням ваших конкретних потреб і турбот",
    whyUs12: "Відданість справі та зобов'язання",
    whyUs13: "Прагнемо надавати послуги найвищого рівня",

    //contacts
    contact1: "Контакти",
    contact2: "Телефон:",
    contact3: "Почта:",
    contact4: "Месенджери:",
    contact5: "Адреса:&nbsp;&nbsp;&nbsp;&nbsp; м. Київ, вул. Жилянська 126/23 оф. 203-204",
    contact6: "Написати нам",
    contact7: "Ваше питання...", //placeholder
    contact8: "Надіслати",
    contact9: "провідна юридична компанія з командою досвідчених адвокатів, готових допомогти вам з усіма вашими юридичними потребами.",
    contact10: "Навігація",
    contact11: "Головна",
    contact12: "Про нас",
    contact13: "Послуги",
    contact14: "Публікації",
    contact15: "Контакти",
    contact16: "Корисні ресурси",
    contact17: "Цивільне право",
    contact18: "Кримінальне право",
    contact19: "Нові законопроєкти",
    contact20: "Інформація для бізнесу",
    },

    //~~~~~~~~~~~~~~~~~~~~~
    uk: {
    //menu
    menu1: "Home",
    menu2: "About us",
    menu3: "Services",
    menu4: "Publications",
    menu5: "Contacts",

    //home
    home1: '"Ordynat Tsymbalyuk Skuba" law firm',
    home2: "Practitioners,",
    home3: "highly qualified lawyers will provide high-quality legal assistance",
    home4: "Supporting",
    home5: "and an understanding team dedicated to helping clients",
    home6: "Availability,",
    home7: "honesty and openness to providing a wide range of legal services",
    home8: "Our law firm is a new face in the legal aid market. However, our team consists of experienced lawyers and lawyers who have extensive experience in protecting clients in courts and government agencies. Among other things, our specialists have multi-year contracts for representation of citizens and legal entities. Time verification is the most weighty argument as proof of the stable quality of legal services provided. In addition, the team is complemented by young specialists who, with their ambitious and professional attitude, confidently prove the thesis: there is a future of law in Ukraine! The range of services provided by our team representatives will allow you to choose a specialist in the area of law that concerns you.",

    //about_us
    aboutUs1: "/ about us /",
    aboutUs2: "Team",
    aboutUs3: "our lawyers are a diverse and talented group of professionals, each with a unique set of skills and a passion for protecting the interests of our clients. <br / > <br / >They are dedicated, compassionate and very competent, have a deep understanding of the law and strive for excellence. <br><br> Regardless of whether you solve complex legal issues or provide individual legal advice, our lawyers are always ready to accept the challenge and achieve exceptional results.",
    aboutUs4: "More than 20 years in the law Market",
    aboutUs5: "More than 500 clients received qualified assistance",
    aboutUs6: "More than 11 branches of advocacy",
    aboutUs7: "More than 450 cases won",

    //team
    team1: "/ team /",
    team2: "Our team",
    team3: "20 years in law",
    team4: "Mikhail Tsymbalyuk",
    team5: "Lawyer",
    team6: "Specialization: banking law, civil and family law, mortgage and banking disputes, economic disputes, enforcement proceedings, notary (transactions, inheritance, etc.), support of economic activities of individual entrepreneurs and legal entities. Trial lawyer. The total experience of a judicial lawyer/lawyer is 20 years.",
    team7: "Zoya Ordynat",
    team8: "Lawyer",
    team9: "Specialization: military lawyer, civil and family law, enforcement proceedings. Trial lawyer. Total legal experience of 15 years.",
    team10: "Mykola Skuba",
    team11: "Lawyer",
    team12: "Specialization: criminal and administrative proceedings, cases of administrative offenses, it lawyer, enforcement proceedings. Trial lawyer. Total legal experience of 5 years.",
    team13: "Artem Starchenko",
    team14: "Lawyer / assistant lawyer",
    team15: "Specialization: civil and family law.",
    team16: "Maxym Babyak",
    team17: "Lawyer / assistant lawyer",
    team18: "Specialization: civil and family law.",

    //why_us
    whyUs1: "/ why we /",
    whyUs2: "Why do people choose us?",
    whyUs3: '"OTS" law company offers experienced lawyers, individual service and successful results. <br> <br>Choose us for our experience, dedication and dedication to your cause.  <br><br>Trust us and we will achieve positive results!',
    whyUs4: "Write to us", //id="link-to-submit"
    whyUs5: "High service and standards",
    whyUs6: "Confidentiality.",
    whyUs7: "24/7 support",
    whyUs8: "Expert representative office",
    whyUs9: "Only qualified lawyers",
    whyUs10: "Individual service",
    whyUs11: "Tailored to your specific needs and concerns",
    whyUs12: "Commitment and commitment",
    whyUs13: "We strive to provide the highest level of services",

    //contacts
    contact1: "Contacts",
    contact2: "Phone number:",
    contact3: "Mail:",
    contact4: "Messengers:",
    contact5: "Address:&nbsp;&nbsp;&nbsp;&nbsp; Kiev, Zhilyanskaya STR. 126/23 of. 204",
    contact6: "Write to us",
    contact7: "Your question...", //placeholder
    contact8: "Send",
    contact9: "a leading law company with a team of experienced lawyers ready to help you with all your legal needs.",
    contact10: "Navigation",
    contact11: "Home",
    contact12: "About us",
    contact13: "Services",
    contact14: "Publications",
    contact15: "Contacts",
    contact16: "Useful resources",
    contact17: "Civil law",
    contact18: "Criminal law",
    contact19: "New draft laws",
    contact20: "Business information",
    },

    //~~~~~~~~~~~~~~~~~~~~~
    ru: {
    //menu
    menu1: "Главная",
    menu2: "Про нас",
    menu3: "Услуги",
    menu4: "Публикации",
    menu5: "Контакты",

    //home
    home1: 'Юридическая компания "Ordynat Tsymbalyuk Skuba"',
    home2: "Практикующие,",
    home3: "квалифицированные адвокаты обеспечат высококачественную юридическую помощь",
    home4: "Поддерживающая",
    home5: "и понимающая команда, посвященная помощи клиентам",
    home6: "Доступность,",
    home7: "честность и открытость в предоставлении широкого спектра юридических услуг",
    home8: "Наша юридическая компания - это новое лицо на рынке юридической помощи. Однако наша команда состоит из опытных юристов и правоведов, которые имеют большой опыт защиты клиентов в судах и государственных учреждениях. Помимо прочего, наши специалисты имеют многолетние контракты на представительство интересов граждан и юридических лиц. Проверка времени - самый весомый аргумент в качестве доказательства стабильного качества предоставляемых юридических услуг. Кроме того, команда дополняется молодыми специалистами, которые своим амбициозным и профессиональным отношением уверенно доказывают тезис: у права в Украине есть будущее! Спектр услуг, предоставляемых представителями нашей команды, позволит вам выбрать специалиста в интересующей вас области права.",

    //about_us
    aboutUs1: "/ про нас /",
    aboutUs2: "Команда",
    aboutUs3: "наших юристов - это разнообразная и талантливая группа профессионалов, каждый из которых обладает уникальным набором навыков и страстью к защите интересов наших клиентов. <br / > <br / >Они преданны делу, сострадательны и очень компетентны, обладают глубоким пониманием закона и стремятся к совершенству. <br><br> Независимо от того, решаете ли вы сложные юридические вопросы или предоставляете индивидуальную юридическую консультацию, наши юристы всегда готовы принять вызов и добиться исключительных результатов.",
    aboutUs4: "Более 20 лет на юридическом рынке",
    aboutUs5: "Более 500 клиентов получили квалифицированную помощь",
    aboutUs6: "Более 11 отраслей адвокатуры",
    aboutUs7: "Более 450 выигранных дел",

    //team
    team1: "/ команда /",
    team2: "Наша команда",
    team3: "20 лет в адвокатском деле",
    team4: "Михаил Цимбалюк",
    team5: "Адвокат",
    team6: "Специализация: банковское право, гражданское и семейное право, ипотечные и банковские споры, хозяйственные споры, исполнительное производство, нотариат (сделки, наследство и др.), сопровождение хозяйственной деятельности физических лиц-предпринимателей и юридических лиц. Судебный адвокат. Общий стаж судебного юриста / адвоката составляет 20 лет.",
    team7: "Зоя Ординат",
    team8: "Адвокат",
    team9: "Специализация: адвокат по военным делам, гражданское и семейное право, исполнительное производство. Судебный адвокат. Общий юридический стаж 15 лет.",
    team10: "Николай Скуба",
    team11: "Адвокат",
    team12: "Специализация: уголовный и административный процесс, дела об административных правонарушениях, ИТ-адвокат, исполнительное производство. Судебный адвокат. Общий юридический стаж 5 лет.",
    team13: "Артем Старченко",
    team14: "Юрист / помощник адвоката",
    team15: "Специализация: гражданское и семейное право.",
    team16: "Максим Бабяк",
    team17: "Юрист / помощник адвоката",
    team18: "Специализация: гражданское и семейное право.",

    //why_us
    whyUs1: "/ почему мы /",
    whyUs2: "Почему люди выбирают именно Нас?",
    whyUs3: 'Юридическая компания "OTS" - это опытные адвокаты, индивидуальное обслуживание и успешные результаты. <br><br>Выбирайте нас за наш опыт, самоотверженность и преданность вашему делу. <br><br>Доверьтесь нам, и мы достигнем положительных результатов!',
    whyUs4: "Написать нам", //id="link-to-submit"
    whyUs5: "Высочайший сервис и стандарты",
    whyUs6: "Конфиденциальность.",
    whyUs7: "Поддержка 24 / 7",
    whyUs8: "Экспертное представительство",
    whyUs9: "Только квалифицированные адвокаты",
    whyUs10: "Индивидуальное обслуживание",
    whyUs11: "С учетом ваших конкретных потребностей и забот",
    whyUs12: "Преданность делу и обязательства",
    whyUs13: "Стремимся предоставлять услуги самого высокого уровня",

    //contacts
    contact1: "Контакты",
    contact2: "Телефон:",
    contact3: "Почта:",
    contact4: "Мессенджеры:",
    contact5: "Адрес:&nbsp;&nbsp;&nbsp;&nbsp; г. Киев, ул. Жилянская, 126/23, оф. 204",
    contact6: "Написать нам",
    contact7: "Ваш вопрос...", //placeholder
    contact8: "Выслать",
    contact9: "ведущая юридическая компания с командой опытных адвокатов, готовых помочь вам со всеми вашими юридическими потребностями.",
    contact10: "Навигация",
    contact11: "Главная",
    contact12: "Про нас",
    contact13: "Услуги",
    contact14: "Публикации",
    contact15: "Контакты",
    contact16: "Полезные ресурсы",
    contact17: "Гражданское право",
    contact18: "Криминальное право",
    contact19: "Новые законопроекти",
    contact20: "Информация для бизнеса",
    }
};

function lang_ua()
{
    document.getElementById("menu-1").innerHTML = texts["ua"].menu1;
    document.getElementById("menu-2").innerHTML = texts["ua"].menu2;
    document.getElementById("menu-3").innerHTML = texts["ua"].menu3;
    document.getElementById("menu-4").innerHTML = texts["ua"].menu4;
    document.getElementById("menu-5").innerHTML = texts["ua"].menu5;

    document.getElementById("home-1").innerHTML = texts["ua"].home1;
    document.getElementById("home-2").innerHTML = texts["ua"].home2;
    document.getElementById("home-3").innerHTML = texts["ua"].home3;
    document.getElementById("home-4").innerHTML = texts["ua"].home4;
    document.getElementById("home-5").innerHTML = texts["ua"].home5;
    document.getElementById("home-6").innerHTML = texts["ua"].home6;
    document.getElementById("home-7").innerHTML = texts["ua"].home7;
    document.getElementById("home-8").innerHTML = texts["ua"].home8;

    document.getElementById("about-us-1").innerHTML = texts["ua"].aboutUs1;
    document.getElementById("about-us-2").innerHTML = texts["ua"].aboutUs2;
    document.getElementById("about-us-3").innerHTML = texts["ua"].aboutUs3;
    document.getElementById("about-us-4").innerHTML = texts["ua"].aboutUs4;
    document.getElementById("about-us-5").innerHTML = texts["ua"].aboutUs5;
    document.getElementById("about-us-6").innerHTML = texts["ua"].aboutUs6;
    document.getElementById("about-us-7").innerHTML = texts["ua"].aboutUs7;

    document.getElementById("team-1").innerHTML = texts["ua"].team1;
    document.getElementById("team-2").innerHTML = texts["ua"].team2;
    document.getElementById("team-3").innerHTML = texts["ua"].team3;
    document.getElementById("team-4").innerHTML = texts["ua"].team4;
    document.getElementById("team-5").innerHTML = texts["ua"].team5;
    document.getElementById("team-6").innerHTML = texts["ua"].team6;
    document.getElementById("team-7").innerHTML = texts["ua"].team7;
    document.getElementById("team-8").innerHTML = texts["ua"].team8;
    document.getElementById("team-9").innerHTML = texts["ua"].team9;
    document.getElementById("team-10").innerHTML = texts["ua"].team10;
    document.getElementById("team-11").innerHTML = texts["ua"].team11;
    document.getElementById("team-12").innerHTML = texts["ua"].team12;
    document.getElementById("team-13").innerHTML = texts["ua"].team13;
    document.getElementById("team-14").innerHTML = texts["ua"].team14;
    document.getElementById("team-15").innerHTML = texts["ua"].team15;
    document.getElementById("team-16").innerHTML = texts["ua"].team16;
    document.getElementById("team-17").innerHTML = texts["ua"].team17;
    document.getElementById("team-18").innerHTML = texts["ua"].team18;

    document.getElementById("why-us-1").innerHTML = texts["ua"].whyUs1;
    document.getElementById("why-us-2").innerHTML = texts["ua"].whyUs2;
    document.getElementById("why-us-3").innerHTML = texts["ua"].whyUs3;
    document.getElementById("link-to-submit").innerHTML = texts["ua"].whyUs4;
    document.getElementById("why-us-5").innerHTML = texts["ua"].whyUs5;
    document.getElementById("why-us-6").innerHTML = texts["ua"].whyUs6;
    document.getElementById("why-us-7").innerHTML = texts["ua"].whyUs7;
    document.getElementById("why-us-8").innerHTML = texts["ua"].whyUs8;
    document.getElementById("why-us-9").innerHTML = texts["ua"].whyUs9;
    document.getElementById("why-us-10").innerHTML = texts["ua"].whyUs10;
    document.getElementById("why-us-11").innerHTML = texts["ua"].whyUs11;
    document.getElementById("why-us-12").innerHTML = texts["ua"].whyUs12;
    document.getElementById("why-us-13").innerHTML = texts["ua"].whyUs13;

    document.getElementById("contact-1").innerHTML = texts["ua"].contact1;
    document.getElementById("contact-2").innerHTML = texts["ua"].contact2;
    document.getElementById("contact-3").innerHTML = texts["ua"].contact3;
    document.getElementById("contact-4").innerHTML = texts["ua"].contact4;
    document.getElementById("contact-5").innerHTML = texts["ua"].contact5;
    document.getElementById("contact-6").innerHTML = texts["ua"].contact6;
    document.getElementById("contact-7").placeholder = texts["ua"].contact7;
    document.getElementById("contact-8").innerHTML = texts["ua"].contact8;
    document.getElementById("contact-9").innerHTML = texts["ua"].contact9;
    document.getElementById("contact-10").innerHTML = texts["ua"].contact10;
    document.getElementById("contact-11").innerHTML = texts["ua"].contact11;
    document.getElementById("contact-12").innerHTML = texts["ua"].contact12;
    document.getElementById("contact-13").innerHTML = texts["ua"].contact13;
    document.getElementById("contact-14").innerHTML = texts["ua"].contact14;
    document.getElementById("contact-15").innerHTML = texts["ua"].contact15;
    document.getElementById("contact-16").innerHTML = texts["ua"].contact16;
    document.getElementById("contact-17").innerHTML = texts["ua"].contact17;
    document.getElementById("contact-18").innerHTML = texts["ua"].contact18;
    document.getElementById("contact-19").innerHTML = texts["ua"].contact19;
    document.getElementById("contact-20").innerHTML = texts["ua"].contact20;

}
function lang_uk()
{
    document.getElementById("menu-1").innerHTML = texts["uk"].menu1;
    document.getElementById("menu-2").innerHTML = texts["uk"].menu2;
    document.getElementById("menu-3").innerHTML = texts["uk"].menu3;
    document.getElementById("menu-4").innerHTML = texts["uk"].menu4;
    document.getElementById("menu-5").innerHTML = texts["uk"].menu5;

    document.getElementById("home-1").innerHTML = texts["uk"].home1;
    document.getElementById("home-2").innerHTML = texts["uk"].home2;
    document.getElementById("home-3").innerHTML = texts["uk"].home3;
    document.getElementById("home-4").innerHTML = texts["uk"].home4;
    document.getElementById("home-5").innerHTML = texts["uk"].home5;
    document.getElementById("home-6").innerHTML = texts["uk"].home6;
    document.getElementById("home-7").innerHTML = texts["uk"].home7;
    document.getElementById("home-8").innerHTML = texts["uk"].home8;

    document.getElementById("about-us-1").innerHTML = texts["uk"].aboutUs1;
    document.getElementById("about-us-2").innerHTML = texts["uk"].aboutUs2;
    document.getElementById("about-us-3").innerHTML = texts["uk"].aboutUs3;
    document.getElementById("about-us-4").innerHTML = texts["uk"].aboutUs4;
    document.getElementById("about-us-5").innerHTML = texts["uk"].aboutUs5;
    document.getElementById("about-us-6").innerHTML = texts["uk"].aboutUs6;
    document.getElementById("about-us-7").innerHTML = texts["uk"].aboutUs7;

    document.getElementById("team-1").innerHTML = texts["uk"].team1;
    document.getElementById("team-2").innerHTML = texts["uk"].team2;
    document.getElementById("team-3").innerHTML = texts["uk"].team3;
    document.getElementById("team-4").innerHTML = texts["uk"].team4;
    document.getElementById("team-5").innerHTML = texts["uk"].team5;
    document.getElementById("team-6").innerHTML = texts["uk"].team6;
    document.getElementById("team-7").innerHTML = texts["uk"].team7;
    document.getElementById("team-8").innerHTML = texts["uk"].team8;
    document.getElementById("team-9").innerHTML = texts["uk"].team9;
    document.getElementById("team-10").innerHTML = texts["uk"].team10;
    document.getElementById("team-11").innerHTML = texts["uk"].team11;
    document.getElementById("team-12").innerHTML = texts["uk"].team12;
    document.getElementById("team-13").innerHTML = texts["uk"].team13;
    document.getElementById("team-14").innerHTML = texts["uk"].team14;
    document.getElementById("team-15").innerHTML = texts["uk"].team15;
    document.getElementById("team-16").innerHTML = texts["uk"].team16;
    document.getElementById("team-17").innerHTML = texts["uk"].team17;
    document.getElementById("team-18").innerHTML = texts["uk"].team18;

    document.getElementById("why-us-1").innerHTML = texts["uk"].whyUs1;
    document.getElementById("why-us-2").innerHTML = texts["uk"].whyUs2;
    document.getElementById("why-us-3").innerHTML = texts["uk"].whyUs3;
    document.getElementById("link-to-submit").innerHTML = texts["uk"].whyUs4;
    document.getElementById("why-us-5").innerHTML = texts["uk"].whyUs5;
    document.getElementById("why-us-6").innerHTML = texts["uk"].whyUs6;
    document.getElementById("why-us-7").innerHTML = texts["uk"].whyUs7;
    document.getElementById("why-us-8").innerHTML = texts["uk"].whyUs8;
    document.getElementById("why-us-9").innerHTML = texts["uk"].whyUs9;
    document.getElementById("why-us-10").innerHTML = texts["uk"].whyUs10;
    document.getElementById("why-us-11").innerHTML = texts["uk"].whyUs11;
    document.getElementById("why-us-12").innerHTML = texts["uk"].whyUs12;
    document.getElementById("why-us-13").innerHTML = texts["uk"].whyUs13;

    document.getElementById("contact-1").innerHTML = texts["uk"].contact1;
    document.getElementById("contact-2").innerHTML = texts["uk"].contact2;
    document.getElementById("contact-3").innerHTML = texts["uk"].contact3;
    document.getElementById("contact-4").innerHTML = texts["uk"].contact4;
    document.getElementById("contact-5").innerHTML = texts["uk"].contact5;
    document.getElementById("contact-6").innerHTML = texts["uk"].contact6;
    document.getElementById("contact-7").placeholder = texts["uk"].contact7;
    document.getElementById("contact-8").innerHTML = texts["uk"].contact8;
    document.getElementById("contact-9").innerHTML = texts["uk"].contact9;
    document.getElementById("contact-10").innerHTML = texts["uk"].contact10;
    document.getElementById("contact-11").innerHTML = texts["uk"].contact11;
    document.getElementById("contact-12").innerHTML = texts["uk"].contact12;
    document.getElementById("contact-13").innerHTML = texts["uk"].contact13;
    document.getElementById("contact-14").innerHTML = texts["uk"].contact14;
    document.getElementById("contact-15").innerHTML = texts["uk"].contact15;
    document.getElementById("contact-16").innerHTML = texts["uk"].contact16;
    document.getElementById("contact-17").innerHTML = texts["uk"].contact17;
    document.getElementById("contact-18").innerHTML = texts["uk"].contact18;
    document.getElementById("contact-19").innerHTML = texts["uk"].contact19;
    document.getElementById("contact-20").innerHTML = texts["uk"].contact20;
}
function lang_ru()
{
    document.getElementById("menu-1").innerHTML = texts["ru"].menu1;
    document.getElementById("menu-2").innerHTML = texts["ru"].menu2;
    document.getElementById("menu-3").innerHTML = texts["ru"].menu3;
    document.getElementById("menu-4").innerHTML = texts["ru"].menu4;
    document.getElementById("menu-5").innerHTML = texts["ru"].menu5;

    document.getElementById("home-1").innerHTML = texts["ru"].home1;
    document.getElementById("home-2").innerHTML = texts["ru"].home2;
    document.getElementById("home-3").innerHTML = texts["ru"].home3;
    document.getElementById("home-4").innerHTML = texts["ru"].home4;
    document.getElementById("home-5").innerHTML = texts["ru"].home5;
    document.getElementById("home-6").innerHTML = texts["ru"].home6;
    document.getElementById("home-7").innerHTML = texts["ru"].home7;
    document.getElementById("home-8").innerHTML = texts["ru"].home8;

    document.getElementById("about-us-1").innerHTML = texts["ru"].aboutUs1;
    document.getElementById("about-us-2").innerHTML = texts["ru"].aboutUs2;
    document.getElementById("about-us-3").innerHTML = texts["ru"].aboutUs3;
    document.getElementById("about-us-4").innerHTML = texts["ru"].aboutUs4;
    document.getElementById("about-us-5").innerHTML = texts["ru"].aboutUs5;
    document.getElementById("about-us-6").innerHTML = texts["ru"].aboutUs6;
    document.getElementById("about-us-7").innerHTML = texts["ru"].aboutUs7;

    document.getElementById("team-1").innerHTML = texts["ru"].team1;
    document.getElementById("team-2").innerHTML = texts["ru"].team2;
    document.getElementById("team-3").innerHTML = texts["ru"].team3;
    document.getElementById("team-4").innerHTML = texts["ru"].team4;
    document.getElementById("team-5").innerHTML = texts["ru"].team5;
    document.getElementById("team-6").innerHTML = texts["ru"].team6;
    document.getElementById("team-7").innerHTML = texts["ru"].team7;
    document.getElementById("team-8").innerHTML = texts["ru"].team8;
    document.getElementById("team-9").innerHTML = texts["ru"].team9;
    document.getElementById("team-10").innerHTML = texts["ru"].team10;
    document.getElementById("team-11").innerHTML = texts["ru"].team11;
    document.getElementById("team-12").innerHTML = texts["ru"].team12;
    document.getElementById("team-13").innerHTML = texts["ru"].team13;
    document.getElementById("team-14").innerHTML = texts["ru"].team14;
    document.getElementById("team-15").innerHTML = texts["ru"].team15;
    document.getElementById("team-16").innerHTML = texts["ru"].team16;
    document.getElementById("team-17").innerHTML = texts["ru"].team17;
    document.getElementById("team-18").innerHTML = texts["ru"].team18;

    document.getElementById("why-us-1").innerHTML = texts["ru"].whyUs1;
    document.getElementById("why-us-2").innerHTML = texts["ru"].whyUs2;
    document.getElementById("why-us-3").innerHTML = texts["ru"].whyUs3;
    document.getElementById("link-to-submit").innerHTML = texts["ru"].whyUs4;
    document.getElementById("why-us-5").innerHTML = texts["ru"].whyUs5;
    document.getElementById("why-us-6").innerHTML = texts["ru"].whyUs6;
    document.getElementById("why-us-7").innerHTML = texts["ru"].whyUs7;
    document.getElementById("why-us-8").innerHTML = texts["ru"].whyUs8;
    document.getElementById("why-us-9").innerHTML = texts["ru"].whyUs9;
    document.getElementById("why-us-10").innerHTML = texts["ru"].whyUs10;
    document.getElementById("why-us-11").innerHTML = texts["ru"].whyUs11;
    document.getElementById("why-us-12").innerHTML = texts["ru"].whyUs12;
    document.getElementById("why-us-13").innerHTML = texts["ru"].whyUs13;

    document.getElementById("contact-1").innerHTML = texts["ru"].contact1;
    document.getElementById("contact-2").innerHTML = texts["ru"].contact2;
    document.getElementById("contact-3").innerHTML = texts["ru"].contact3;
    document.getElementById("contact-4").innerHTML = texts["ru"].contact4;
    document.getElementById("contact-5").innerHTML = texts["ru"].contact5;
    document.getElementById("contact-6").innerHTML = texts["ru"].contact6;
    document.getElementById("contact-7").placeholder = texts["ru"].contact7;
    document.getElementById("contact-8").innerHTML = texts["ru"].contact8;
    document.getElementById("contact-9").innerHTML = texts["ru"].contact9;
    document.getElementById("contact-10").innerHTML = texts["ru"].contact10;
    document.getElementById("contact-11").innerHTML = texts["ru"].contact11;
    document.getElementById("contact-12").innerHTML = texts["ru"].contact12;
    document.getElementById("contact-13").innerHTML = texts["ru"].contact13;
    document.getElementById("contact-14").innerHTML = texts["ru"].contact14;
    document.getElementById("contact-15").innerHTML = texts["ru"].contact15;
    document.getElementById("contact-16").innerHTML = texts["ru"].contact16;
    document.getElementById("contact-17").innerHTML = texts["ru"].contact17;
    document.getElementById("contact-18").innerHTML = texts["ru"].contact18;
    document.getElementById("contact-19").innerHTML = texts["ru"].contact19;
    document.getElementById("contact-20").innerHTML = texts["ru"].contact20;
}


switch (localStorage.getItem("lang").toString()) {
    case "1":
        lang_ua();
        document.querySelector(".select-lang").selectedIndex = 0;
        break;
    case "2":
        lang_uk();
        document.querySelector(".select-lang").selectedIndex = 1;
        break;
    case "3":
        lang_ru();
        document.querySelector(".select-lang").selectedIndex = 2;
        break;
    default:
        break;
}
function sel()
{
    let select = document.querySelector(".select-lang");
    let lang = select.options[select.selectedIndex].value;
    switch (lang.toString()) {
        case "1":
            lang_ua();
            break;
        case "2":
            lang_uk();
            break;
        case "3":
            lang_ru();
            break;
        default:
            break;
    }
    localStorage.setItem("lang", lang);
}

