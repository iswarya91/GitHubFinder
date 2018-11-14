class UI {
    constructor(){}
    
    static hideUserProfile() {
        document.querySelector('#user_profile').style.display = 'none';
    }

    static displayUserProfile(profileData) {
        if(typeof profileData.login === 'undefined') {
            UI.displayAlert("User Not Found");
            return;
        }
        const UIProfileDiv = document.querySelector('#user_profile');
        document.querySelector('.alert').style.display = 'none';

        document.querySelector(".profile-image").setAttribute('src', profileData['avatar_url']);
        document.querySelector("#profile-link").setAttribute('href', profileData['html_url'])

        const dataList = document.querySelector("ul.list-group");
        dataList.innerHTML = `
            <li class="list-group-item">Company: ${profileData.company}</li>
            <li class="list-group-item">Web-Site/Blog: ${profileData.blog}</li>
            <li class="list-group-item">Location : ${profileData.location}</li>
            <li class="list-group-item">Member Since: ${profileData.created_at}</li>
        `;

        const repos = document.querySelector("#repo");
        const gist = document.querySelector("#gist");
        const follower = document.querySelector("#follower");
        const following = document.querySelector("#following");
        repos.textContent = `Public Repos: ${profileData.public_repos}`;
        repos.setAttribute('href',profileData['repos_url']);
        gist.textContent = `Public Gists: ${profileData.public_gists}`;
        gist.setAttribute('href',profileData['gists_url']);
        follower.textContent =`Followers: ${profileData.followers}`;
        follower.setAttribute('href',profileData['followers_url']);
        following.textContent =`Followings: ${profileData.following}`;
        following.setAttribute('href',profileData['following_url']);

        UIProfileDiv.style.display = 'block';
    }

    static displayLatestRepo(latestRepos) {
        if(latestRepos.length === 0) {
            UI.hideLatestRepo();
        }

        
        const repoDisplay = document.querySelector('#user_repos');
        repoDisplay.style.display = 'block';
        let output = '';
        latestRepos.forEach(function(repo){
            output += `
            <div class='card p-2 my-2'>
                <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <a class="m-1 btn btn-info btn-sm">Forks: ${repo.forks}</a>
                <a class="m-1 btn btn-success btn-sm">Watchers: ${repo.watchers}</a>
                <a  class="m-1 btn btn-warning btn-sm">Open Issues: ${repo.open_issues}</a>
                </div>
                </div>
            </div>`
        })
        repoDisplay.innerHTML = output;
    }

    static hideLatestRepo() {
        const repoDisplay = document.querySelector('#user_repos');
        repoDisplay.style.display = 'none';
    }

    static displayAlert(text) {
        const alert = document.querySelector('.alert');
        alert.textContent=text;
        alert.style.display = 'block';
    }

}