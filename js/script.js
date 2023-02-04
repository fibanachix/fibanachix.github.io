let prev_element = null;

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    //slidesPerGroup: 1,

    //loop: true,
    centerSlide: 'true',
    fade: 'true',
    //grabCursor: 'true',
    cssMode: 'true',
    //loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        992:{
            slidesPerView: 3,
        },
        1400:{
            slidesPerView: 4,
        },
    },
});
  
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.body.style.transition = "height 2s ease";
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

/* services */
function service_1()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_1").style.display = "block";
    prev_element = document.getElementById("srv_1");
}

function service_2()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_2").style.display = "block";
    prev_element = document.getElementById("srv_2");
}

function service_3()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_3").style.display = "block";
    prev_element = document.getElementById("srv_3");
}

function service_4()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_4").style.display = "block";
    prev_element = document.getElementById("srv_4");
}

function service_5()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_5").style.display = "block";
    prev_element = document.getElementById("srv_5");
}

function service_6()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_6").style.display = "block";
    prev_element = document.getElementById("srv_6");
}

function service_7()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_7").style.display = "block";
    prev_element = document.getElementById("srv_7");
}

function service_8()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_8").style.display = "block";
    prev_element = document.getElementById("srv_8");
}

function service_9()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_9").style.display = "block";
    prev_element = document.getElementById("srv_9");
}

function service_10()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_10").style.display = "block";
    prev_element = document.getElementById("srv_10");
}

function service_11()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_11").style.display = "block";
    prev_element = document.getElementById("srv_11");
}

function service_12()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_12").style.display = "block";
    prev_element = document.getElementById("srv_12");
}

function service_13()
{
    if(prev_element != null)
    {
        prev_element.style.display = "none";
    }
    document.getElementById("srv_13").style.display = "block";
    prev_element = document.getElementById("srv_13");
}