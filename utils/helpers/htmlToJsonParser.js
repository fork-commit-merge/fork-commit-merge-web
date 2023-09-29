const html = ``;

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
