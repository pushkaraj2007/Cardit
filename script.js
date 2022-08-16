const githubUsername = document.querySelector('.username-input');
const createCardBtn = document.querySelector('.create-card-btn');
const avatar = document.querySelector('.avatar')
const profileName = document.querySelector('.name');
const username = document.querySelector('.username')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const publicRepos = document.querySelector('.public-repos')
const userCardDiv = document.querySelector('.user-card-div')

createCardBtn.onclick = async ()=>{
    let request = await fetch(`https://api.github.com/users/${githubUsername.value}`)
    let res = await request.json();
    userCardDiv.style.display = 'flex'
    avatar.src = res.avatar_url
    profileName.innerText = res.name
    username.innerText = res.login
    followers.innerText = res.followers
    following.innerText = res.following
    publicRepos.innerText = res.public_repos
}

githubUsername.onkeydown = (e)=>{
    if(e.keyCode == 13){
        createCardBtn.click()
    }
}