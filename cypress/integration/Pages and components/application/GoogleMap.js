export default class GoogleMap {
    MyGeoButton = '.geolocate-button > img';
    SearchSelectorItem = '#searchDropdown > :nth-child(';
    PutAwayButton = '[title="Уменьшить"]';

    getMyGeoButton(){
        return this.MyGeoButton;
    }
    getSearchSelectorItem(value){
        return this.SearchSelectorItem + value + ')';
    }
    getPutAwayButton() {
        return this.PutAwayButton;
    }

}