let isSamsungBrowser = /SamsungBrowser/.test(navigator.userAgent);
if(isSamsungBrowser)
{
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome)
    {
        if(!window.open('https://fibanachix.github.io/', '_blank', 'google'))
        {
            window.location.href = "https://www.google.com/chrome/";
        }
        else
        {
            window.open('https://fibanachix.github.io/', '_blank', 'google');
        }
    }
    else
    {
        window.open('https://fibanachix.github.io/', '_blank', 'chrome');
    }
}