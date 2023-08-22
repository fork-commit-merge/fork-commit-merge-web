const html = `<a href="https://github.com/Aloneking789"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/116704975?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/PranshuBasak"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/75575986?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/NanduNanduz"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/115874551?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/NereidaRondon"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/97356401?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/MasabBinZia"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/94193065?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/FreakWolf"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100259763?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/PlasticPath"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/126716491?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/Hello-Utkarsh"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/106660104?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>
<a href="https://github.com/alxhal"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/57196291?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>`;

const parser = new DOMParser();
const doc = parser.parseFromString(html, 'text/html');
const anchors = doc.querySelectorAll('a');

const result = Array.from(anchors).map(a => {
    const github_url = a.href;
    const github_id = github_url.split('/').pop();
    const avatar_url = a.querySelector('img').src.replace('https://images.weserv.nl/?url=', '');

    return {
        id: github_id,
        url: github_url,
        avatar: avatar_url,
        name: github_id,
    };
});

console.log(JSON.stringify(result, null, 4));
