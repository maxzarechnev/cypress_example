export default class HomePage {
    ProjectUrl = ''; //can't view because of NDA
    ApiUrl = '';
    getProjectUrl() {
       return this.ProjectUrl;
    }
    getApiUrl() {
        return this.ApiUrl;
    }

    RandomPhoneNumber(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
