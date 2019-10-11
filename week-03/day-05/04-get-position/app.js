document.querySelector('button').addEventListener('click', _ => {
    getLocation(document.querySelector('input').value)
        .then(location => {
            let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAS-HpV459V-m1VsG_Zkbt2sdTeZpF9nOA&q=${location}`;
            document.querySelector('iframe').setAttribute('src', url);
        });
})

function getLocation(ip) {
    return fetch(`http://api.ipapi.com/${ip}?access_key=1d5ba066b2e6d2cee4d02abba3466547`)
        .then(res => res.json())
        .then(data => data.city);
}
//195.228.147.122