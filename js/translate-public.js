const texts = {
    ua: {
    //menu
    menu1: "Головна",
    menu2: "Про нас",
    menu3: "Послуги",
    menu4: "Публікації",
    menu5: "Контакти",

    //contacts
    contact1: "провідна юридична компанія з командою досвідчених адвокатів, готових допомогти вам з усіма вашими юридичними потребами.",
    contact2: "Навігація",
    contact3: "Головна",
    contact4: "Про нас",
    contact5: "Послуги",
    contact6: "Публікації",
    contact7: "Контакти",
    contact8: "Корисні ресурси",
    contact9: "Цивільне право",
    contact10: "Кримінальне право",
    contact11: "Нові законопроєкти",
    contact12: "Інформація для бізнесу",

    title: "Наші статті",
    },

    uk: {
    //menu
    menu1: "Home",
    menu2: "About us",
    menu3: "Services",
    menu4: "Publications",
    menu5: "Contacts",

    //contacts
    contact1: "a leading law firm with a team of experienced lawyers ready to help you with all your legal needs.",
    contact2:  "Navigation",
    contact3:  "Home",
    contact4:  "About us",
    contact5:  "Services",
    contact6:  "Publications",
    contact7:  "Contacts",
    contact8:  "Useful resources",
    contact9:  "Civil law",
    contact10: "Criminal law",
    contact11: "New draft laws",
    contact12: "Business information",

    title: "Our articles",
    },

    ru: {
    //menu
    menu1: "Главная",
    menu2: "Про нас",
    menu3: "Услуги",
    menu4: "Публикации",
    menu5: "Контакты",

    //contacts
    contact1: "ведущая юридическая компания с командой опытных адвокатов, готовых помочь вам со всеми вашими юридическими потребностями.",
    contact2:  "Навигация",
    contact3:  "Главная",
    contact4:  "Про нас",
    contact5:  "Услуги",
    contact6:  "Публикации",
    contact7:  "Контакты",
    contact8:  "Полезные ресурсы",
    contact9:  "Гражданское право",
    contact10: "Криминальное право",
    contact11: "Новые законопроекти",
    contact12: "Информация для бизнеса",

    title: "Наши статьи",
    }
}

function lang_ua()
{
    document.getElementById("menu-1").innerHTML = texts["ua"].menu1;
    document.getElementById("menu-2").innerHTML = texts["ua"].menu2;
    document.getElementById("menu-3").innerHTML = texts["ua"].menu3;
    document.getElementById("menu-4").innerHTML = texts["ua"].menu4;
    document.getElementById("menu-5").innerHTML = texts["ua"].menu5;

    document.getElementById("contact-1").innerHTML = texts["ua"].contact1;
    document.getElementById("contact-2").innerHTML = texts["ua"].contact2;
    document.getElementById("contact-3").innerHTML = texts["ua"].contact3;
    document.getElementById("contact-4").innerHTML = texts["ua"].contact4;
    document.getElementById("contact-5").innerHTML = texts["ua"].contact5;
    document.getElementById("contact-6").innerHTML = texts["ua"].contact6;
    document.getElementById("contact-7").innerHTML = texts["ua"].contact7;
    document.getElementById("contact-8").innerHTML = texts["ua"].contact8;
    document.getElementById("contact-9").innerHTML = texts["ua"].contact9;
    document.getElementById("contact-10").innerHTML = texts["ua"].contact10;
    document.getElementById("contact-11").innerHTML = texts["ua"].contact11;
    document.getElementById("contact-12").innerHTML = texts["ua"].contact12;

    document.getElementById("title").innerHTML = texts["ua"].title;
}

function lang_uk()
{
    document.getElementById("menu-1").innerHTML = texts["uk"].menu1;
    document.getElementById("menu-2").innerHTML = texts["uk"].menu2;
    document.getElementById("menu-3").innerHTML = texts["uk"].menu3;
    document.getElementById("menu-4").innerHTML = texts["uk"].menu4;
    document.getElementById("menu-5").innerHTML = texts["uk"].menu5;

    document.getElementById("contact-1").innerHTML = texts["uk"].contact1;
    document.getElementById("contact-2").innerHTML = texts["uk"].contact2;
    document.getElementById("contact-3").innerHTML = texts["uk"].contact3;
    document.getElementById("contact-4").innerHTML = texts["uk"].contact4;
    document.getElementById("contact-5").innerHTML = texts["uk"].contact5;
    document.getElementById("contact-6").innerHTML = texts["uk"].contact6;
    document.getElementById("contact-7").innerHTML = texts["uk"].contact7;
    document.getElementById("contact-8").innerHTML = texts["uk"].contact8;
    document.getElementById("contact-9").innerHTML = texts["uk"].contact9;
    document.getElementById("contact-10").innerHTML = texts["uk"].contact10;
    document.getElementById("contact-11").innerHTML = texts["uk"].contact11;
    document.getElementById("contact-12").innerHTML = texts["uk"].contact12;
    
    document.getElementById("title").innerHTML = texts["uk"].title;
}

function lang_ru()
{
    document.getElementById("menu-1").innerHTML = texts["ru"].menu1;
    document.getElementById("menu-2").innerHTML = texts["ru"].menu2;
    document.getElementById("menu-3").innerHTML = texts["ru"].menu3;
    document.getElementById("menu-4").innerHTML = texts["ru"].menu4;
    document.getElementById("menu-5").innerHTML = texts["ru"].menu5;

    document.getElementById("contact-1").innerHTML = texts["ru"].contact1;
    document.getElementById("contact-2").innerHTML = texts["ru"].contact2;
    document.getElementById("contact-3").innerHTML = texts["ru"].contact3;
    document.getElementById("contact-4").innerHTML = texts["ru"].contact4;
    document.getElementById("contact-5").innerHTML = texts["ru"].contact5;
    document.getElementById("contact-6").innerHTML = texts["ru"].contact6;
    document.getElementById("contact-7").innerHTML = texts["ru"].contact7;
    document.getElementById("contact-8").innerHTML = texts["ru"].contact8;
    document.getElementById("contact-9").innerHTML = texts["ru"].contact9;
    document.getElementById("contact-10").innerHTML = texts["ru"].contact10;
    document.getElementById("contact-11").innerHTML = texts["ru"].contact11;
    document.getElementById("contact-12").innerHTML = texts["ru"].contact12;

    document.getElementById("title").innerHTML = texts["ru"].title;
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