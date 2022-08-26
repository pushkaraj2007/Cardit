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
const userCardDiv = document.querySelector(".user-card-div");

const colorInputFrom = document.querySelector(".color-inputs-form")
const colorInput = document.querySelectorAll(".color-input");
const color1 = document.querySelector("#color-1");
const color2 = document.querySelector("#color-2");
const fillPercent = document.querySelector("#fill-percentage");
const resetBtn = document.querySelector("#reset-background");
const selectCustomBackground = document.querySelector(".select-custom-background");

createCardBtn.onclick = async ()=>{
    let tempUsername = githubUsername.value;
    
    if (tempUsername.length == 0) return;

    let request = await fetch(`https://api.github.com/users/${tempUsername}`)
    let res = await request.json();
    userCardOuterDiv.style.display = 'flex'
    avatar.src = res.avatar_url
    profileName.innerText = res.name
    username.innerText = res.login
    followers.innerText = res.followers
    following.innerText = res.following
    publicRepos.innerText = res.public_repos
    profileLink.innerText = `github.com/${res.login}`
    selectCustomBackground.style.display = 'flex'
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

const createBackgroundGradient = () =>  {
    const colorFrom = color1.value;
    const colorTo = color2.value;
    const fill = fillPercent.value;

    userCardDiv.style.background = `linear-gradient(to right, ${colorFrom} ${fill}%, ${colorTo})`
}

for(let i = 0; i < colorInput.length; i++) {
    colorInput[i].addEventListener("input", () => createBackgroundGradient());
}

colorInputFrom.addEventListener("reset", () => {
    color1.value = '#4A00E0';
    color2.value = '#8E2DE2';
    fillPercent.value = 0;
    createBackgroundGradient();
})

createBackgroundGradient();