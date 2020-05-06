export default class GoogleMap {
    SearchField = '#react-google-places-autocomplete-input';
    MyGeoButton = '.geolocate-button > img';
    SearchSelectorItem = '#searchDropdown > :nth-child(';
    PutAwayButton = '[title="Уменьшить"]';
    getSearchField(){
        return this.SearchField;
    }
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