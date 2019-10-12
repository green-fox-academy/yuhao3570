let headers = new Headers()
headers.set('Authorization', 'Basic ' + btoa('yuhao3570@gmail.com' + ":" + '044da62301f56ad26b9af31602fe767db96ca1de'));

const repos = ['_'];
getRepo();

document.querySelector('button').addEventListener('click', _ => {
    document.querySelector('.container').innerHTML = '';
    let next = popRepo().next()
    if(next !== undefined){
        const repo = next.value.name;
        document.querySelector('#title').textContent = repo;
        getCommits(repo);
    }else{
        document.querySelector('#title').textContent = 'someone';
    }
});

async function getRepo() {
    const response = await fetch ('https://api.github.com/orgs/green-fox-academy/repos');
    const data = await response.json();
    repos[0] = data;
}

function* popRepo() {
    yield repos[0].shift();
}

async function getCommits(repo) {
    let commitHistory = await fetch(`https://api.github.com/repos/green-fox-academy/${repo}/commits`);
    const commits = await commitHistory.json();

    console.log(commits);
    
    for(let commit of commits){
        addCommit(commit.commit);
    }
}

function addCommit(commit) {
    let span1 = document.createElement('span');
    span1.textContent = commit.author.date;

    let span2 = document.createElement('span');
    span2.textContent = '     ' + commit.message;

    let span3 = document.createElement('span');
    span3.textContent = '     by ' + commit.author.name;

    let div = document.querySelector('.container');
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);

    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));
}