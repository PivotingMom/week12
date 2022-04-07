//post task 

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

//patch task 

function patchPost(){
  axios.request({
    url:"https://jsonplaceholder.typicode.com/posts/1",
    method:"PATCH",
    headers: {
      'Content-Type': "application/json"
    },
    data: {
      Id:1,
      userId:1,
      title: "motivational quote for week 12",
      body: "Success is not final, failure is not fatal: It is the courage to continue that counts.– Pele",
      
    }}).then(patchPostsuccess).catch(patchPostFailed)
}

function patchPostsuccess(response){
  document.getElementById("patchPost").innerText="The only guarantee for failure is to stop trying.– John C. Maxwell";
  console.log(response);
}
function patchPostFailed(error){
  console.log(error);
}

document.getElementById('editPost').addEventListener('click', patchPost);

//delete task 
function deletePost(){
  axios.request({
    url:"https://jsonplaceholder.typicode.com/posts/1",
    method:"DELETE",
    headers: {
      'Content-Type': "application/json"
    },
    data: {
      Id:1,
      userId:1,
      title: "motivational quote for week 11",
      body: "Failure is only the opportunity to begin again, this time more intelligently. Henry Ford",
      
    }}).then(deletePostsuccess).catch(deletePostFailed)
}
function deletePostsuccess(response){
  document.getElementById("deletePost").innerText="Post deleted";
  console.log(response);
  }
function deletePostFailed(error){
  console.log(error);
}

document.getElementById('deleteNow').addEventListener('click', deletePost);

//Get task

allpost = document.getElementById('getAllPost').value,

function getAllPost(){
  axios.request({
    url:"https://jsonplaceholder.typicode.com/posts",
    method:"GET",
    data: [allpost],
    headers: {
      'Content-Type': "application/json"
    },
    }).then(getAllPostsuccess).catch(getAllPostFailed)
}
function getAllPostsuccess(response){
  document.getElementById("getAllPost").innerText[allpost]=response.data[allpost],
  console.log(response);
  }


  function getAllPostFailed(error){
  console.log(error);
}

document.getElementById('reload').addEventListener('windows.onload', getAllPost);


