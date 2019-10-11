const key = 'LWOSehuW3bkG9PjHoUUE3AE8fEl9RGnA';
const toSearch = 'moon landing apollo 11'.replace(' ', '+');

fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${toSearch}&api-key=${key}`)
    .then(res => res.json())
    .then(data =>
        data.response.docs.forEach(doc => 
            add(doc.headline.main, doc.snippet, doc.pub_date, doc.web_url)
        )
    );

function add(headline, snippet, date, url) {
    let li = document.createElement('li');
    li.innerHTML = '<strong>Headline: </strong> ' + headline;

    let li2 = document.createElement('li');
    li2.innerHTML = '<strong>Snippet: </strong> ' + snippet;

    let li3 = document.createElement('li');
    li3.innerHTML = '<strong>Publication Date: </strong> ' + date;

    let li4 = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', url);
    link.textContent = url;
    li4.innerHTML = '<strong>Link: </strong>'
    li4.appendChild(link);

    let ul = document.createElement('ul');
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.style.borderBottom = '2px dashed gray';

    document.querySelector('div').appendChild(ul);
}