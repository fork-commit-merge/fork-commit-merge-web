const html = `<a href="https://github.com/Deepkha"><img src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/96628370?v=4&h=300&w=300&fit=cover&mask=circle&maxage=7d" width="80px"/></a>`;

const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
const anchors = doc.querySelectorAll("a");

const result = Array.from(anchors).map((a) => {
  const github_url = a.href;
  const github_id = github_url.split("/").pop();
  const avatar_url = a
    .querySelector("img")
    .src.replace("https://images.weserv.nl/?url=", "");

  return {
    id: github_id,
    url: github_url,
    avatar: avatar_url,
    name: github_id,
  };
});

console.log(JSON.stringify(result, null, 2));
