/*Show content*/
let count = 0;

function service_1()
{
    if(count == 4)
    {
        for(var i = 2; i <= 13; i++)
        {
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }
    
    count++;
    document.getElementById("srv_1").style.display = "block";
    document.getElementById("cls_1").style.display = "block";
}

function service_2()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 2)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_2").style.display = "block";
    document.getElementById("cls_2").style.display = "block";
}

function service_3()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 3)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_3").style.display = "block";
    document.getElementById("cls_3").style.display = "block";
}

function service_4()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 4)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_4").style.display = "block";
    document.getElementById("cls_4").style.display = "block";
}

function service_5()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 5)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_5").style.display = "block";
    document.getElementById("cls_5").style.display = "block";
}

function service_6()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 6)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_6").style.display = "block";
    document.getElementById("cls_6").style.display = "block";
}

function service_7()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 7)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_7").style.display = "block";
    document.getElementById("cls_7").style.display = "block";
}

function service_8()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 8)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_8").style.display = "block";
    document.getElementById("cls_8").style.display = "block";
}

function service_9()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 9)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_9").style.display = "block";
    document.getElementById("cls_9").style.display = "block";
}

function service_10()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 10)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_10").style.display = "block";
    document.getElementById("cls_10").style.display = "block";
}

function service_11()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 11)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_11").style.display = "block";
    document.getElementById("cls_11").style.display = "block";
}

function service_12()
{
    if(count == 4)
    {
        for(var i = 1; i <= 13; i++)
        {
            if(i == 12)
            {
                continue;
            }
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_12").style.display = "block";
    document.getElementById("cls_12").style.display = "block";
}

function service_13()
{
    if(count == 4)
    {
        for(var i = 1; i <= 12; i++)
        {
            document.getElementById("srv_"+i).style.display = "none";
            document.getElementById("cls_"+i).style.display = "none";
        }
        count = 0;
    }

    count++;
    document.getElementById("srv_13").style.display = "block";
    document.getElementById("cls_13").style.display = "block";
}

/*Closing content*/
function close_1()
{
    count--;
    document.getElementById("srv_1").style.display = "none";
    document.getElementById("cls_1").style.display = "none";
}

function close_2()
{
    count--;
    document.getElementById("srv_2").style.display = "none";
    document.getElementById("cls_2").style.display = "none";
}

function close_3()
{
    count--;
    document.getElementById("srv_3").style.display = "none";
    document.getElementById("cls_3").style.display = "none";
}

function close_4()
{
    count--;
    document.getElementById("srv_4").style.display = "none";
    document.getElementById("cls_4").style.display = "none";
}

function close_5()
{
    count--;
    document.getElementById("srv_5").style.display = "none";
    document.getElementById("cls_5").style.display = "none";
}

function close_6()
{
    count--;
    document.getElementById("srv_6").style.display = "none";
    document.getElementById("cls_6").style.display = "none";
}

function close_7()
{
    count--;
    document.getElementById("srv_7").style.display = "none";
    document.getElementById("cls_7").style.display = "none";
}

function close_8()
{
    count--;
    document.getElementById("srv_8").style.display = "none";
    document.getElementById("cls_8").style.display = "none";
}

function close_9()
{
    count--;
    document.getElementById("srv_9").style.display = "none";
    document.getElementById("cls_9").style.display = "none";
}

function close_10()
{
    count--;
    document.getElementById("srv_10").style.display = "none";
    document.getElementById("cls_10").style.display = "none";
}

function close_11()
{
    count--;
    document.getElementById("srv_11").style.display = "none";
    document.getElementById("cls_11").style.display = "none";
}

function close_12()
{
    count--;
    document.getElementById("srv_12").style.display = "none";
    document.getElementById("cls_12").style.display = "none";
}

function close_13()
{
    count--;
    document.getElementById("srv_13").style.display = "none";
    document.getElementById("cls_13").style.display = "none";
}