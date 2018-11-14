const git = new GitHub();
console.log("USer Data");

const userInput = document.querySelector('#username');

userInput.addEventListener('keyup', function () {
    const userName = userInput.value;
    if (userName === '') {
        UI.hideUserProfile();
        UI.hideLatestRepo();

    } else {
        git.getUserProfie(userName).then(function (data) {
            console.log(data);
            UI.displayUserProfile(data);
        }).catch(function (err) { console.log('GOT ERROR' + err); })

        git.getUserRepos(userName).then(function (repos) {
            repos.reverse();
            const latestRepos = repos.slice(0, 5);
            UI.displayLatestRepo(latestRepos);
        }).catch(function (err) { console.log('GOT ERROR' + err); })
        
    }
})

