class GitHub {
    constructor() {
        this.clientId = "24895927f4c5ff1a6e7c";
        this.clientSecret = "33d59b7e30d05997c9bf1bad3d73e4bbbec7caa3";
        this.gitHubAPI = 'https://api.github.com/users/';
    }

    async getUserProfie(username) {
        const userInfoAPI = `${this.gitHubAPI}${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        const response = await fetch(userInfoAPI);
        const userData = await response.json();
        return userData;      
    }


    async getUserRepos(username) {
        const userRepoAPI = `${this.gitHubAPI}${username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        const response = await fetch(userRepoAPI);
        const userRepoData = await response.json();
        return userRepoData;
    }

}