function makePost(){
  axios.request({
    url:"https://jsonplaceholder.typicode.com/posts",
    method:"POST",
    headers: {
      'Content-Type': "application/json"
    },
    data: {
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      userId:1
    }}).then(makePostsuccess).catch(makePostFailed)
}

function makePostsuccess(response){
  document.getElementById('loginResult').innerText="Post sent";
  console.log(response);
}

function makePostFailed(error){
  console.log(error);
}

document.getElementById('createPost').addEventListener('click', makePost);
