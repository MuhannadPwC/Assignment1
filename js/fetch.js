let posts = document.getElementById("posts");
let form = document
  .getElementById("addPost")
  .addEventListener("submit", addPost);

loadPosts();

async function loadPosts() {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = '<h1 style="text-align: center;">Posts</h1>';
      data.forEach((post) => {
        output += `
        <a href="#addPost" class="no-decor" onclick="editPost('${post.title}', \`${post.body}\`);">
          <div class="post" id="post${post.id}">
            <h2 class="post-text border-bottom">${post.title}</h2>
            <p class="post-text">${post.body}</p>
          </div>
        </a>
        `;
      });
      posts.innerHTML = output;
    })
    .catch((e) => console.log(e));
}

function editPost(titleEdit, bodyEdit) {
  const title = (document.getElementById("title").value = titleEdit);
  const body = (document.getElementById("body").value = bodyEdit);
}

async function addPost(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  console.log(title, body);

  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      posts.innerHTML += `
    <a href="#addPost" class="no-decor">
      <div class="post" id="post${data.id}">
        <h2 class="post-text border-bottom">${data.title}</h2>
        <p class="post-text">${data.body}</p>
      </div>
    </a>
    `;
    });
}
