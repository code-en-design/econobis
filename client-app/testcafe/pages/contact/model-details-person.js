import { Selector } from 'testcafe';

export default class ModelDetailsPerson {
    constructor () {

        //address
        this.newAddress = Selector('span').withExactText('Adres gegevens').parent().child('a');
        this.postalCode = Selector('input[name="postalCode"]');
        this.number = Selector('input[name="number"]');
        this.street = Selector('input[name="street"]');
        this.city = Selector('input[name="city"]');
        this.addressRows = Selector('span').withExactText('Adres gegevens').parent().parent().child().nth(1).child().child().child();


        //harmonica's
        this.housingFileHarmonica = Selector('.harmonica-button').nth(7).child().nth(0).child().nth(1).child('a');
        this.intakeHarmonica = Selector('.harmonica-button').nth(5).child().nth(0).child().nth(1).child('a');
    }
}