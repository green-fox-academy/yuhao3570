const key = '1d5ba066b2e6d2cee4d02abba3466547';
const ggKey =  'AIzaSyAS-HpV459V-m1VsG_Zkbt2sdTeZpF9nOA';
let latitude, longitude;

function getl(ip){
    fetch(`http://api.ipapi.com/${ip}?access_key = ${key}`)
        .then(res => res.json())
        .then(data => {
            latitude = data.latitude;
            longitude = data.longitude;
        })
    
    
}

