const githubUsername = document.querySelector('.username-input');
const createCardBtn = document.querySelector('.create-card-btn');
const avatar = document.querySelector('.avatar')
const profileName = document.querySelector('.name');
const username = document.querySelector('.username')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const publicRepos = document.querySelector('.public-repos')
const userCardOuterDiv = document.querySelector('.user-card-outerDiv')
const profileLink = document.querySelector('.profile-link')

createCardBtn.onclick = async ()=>{
    let request = await fetch(`https://api.github.com/users/${githubUsername.value}`)
    let res = await request.json();
    userCardOuterDiv.style.display = 'flex'
    avatar.src = res.avatar_url
    profileName.innerText = res.name
    username.innerText = res.login
    followers.innerText = res.followers
    following.innerText = res.following
    publicRepos.innerText = res.public_repos
    profileLink.innerText = `github.com/${res.login}`
}

githubUsername.onkeydown = (e)=>{
    if(e.keyCode == 13){
        createCardBtn.click()
    }
}

document.querySelector('.download-btn').onclick = ()=>{
    domtoimage.toBlob(document.querySelector('.user-card-div'))
        .then(function (blob) {
            window.saveAs(blob, `${username.innerText}.png`);
    });
}