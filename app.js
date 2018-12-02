class Lichtpunkt {
    constructor(
        id,
        nummer,
        ort,
        hausnummer,
        bemerkung,
        schrankNummer,
        longitude,
        latitude,
        bilder,
        lampenTyp,
        lampenMontagedatum,
        leuchtenTyp,
        leuchtenMontagedatum,
        leuchtenLichtpunkthöhe,
        mastTyp,
        mastLänge,
        mastFundament,
        mastAuslegertyp,
        mastMontagedatum,
    ) {
        this.id = id
        this.nummer = nummer
        this.ort = ort
        this.hausnummer = hausnummer
        this.bemerkung = bemerkung
        this.schrankNummer = schrankNummer
        this.longitude = longitude
        this.latitude = latitude
        this.bilder = bilder
        this.lampenTyp = lampenTyp
        this.lampenMontagedatum = lampenMontagedatum
        this.leuchtenTyp = leuchtenTyp
        this.leuchtenMontagedatum = leuchtenMontagedatum
        this.leuchtenLichtpunkthöhe = leuchtenLichtpunkthöhe
        this.mastTyp = mastTyp
        this.mastLänge = mastLänge
        this.mastFundament = mastFundament
        this.mastAuslegertyp = mastAuslegertyp
        this.mastMontagedatum = mastMontagedatum
    }
}

class MetaInfo {
    /**
     * 
     * @param {string} displayName 
     * @param {bool} visible 
     */
    constructor(displayName, visible) {
        this.displayName = displayName;
        this.visible = visible;
    }
}


class LichtpunktMeta {
    /**
     * 
     * @param {MetaInfo} id 
     * @param {MetaInfo} nummer 
     * @param {MetaInfo} ort 
     * @param {MetaInfo} hausnummer 
     * @param {MetaInfo} bemerkung 
     * @param {MetaInfo} schrankNummer 
     * @param {MetaInfo} longitude 
     * @param {MetaInfo} latitude 
     * @param {MetaInfo} bilder 
     * @param {MetaInfo} lampenTyp 
     * @param {MetaInfo} lampenMontagedatum 
     * @param {MetaInfo} leuchtenTyp 
     * @param {MetaInfo} leuchtenMontagedatum 
     * @param {MetaInfo} leuchtenLichtpunkthöhe 
     * @param {MetaInfo} mastTyp 
     * @param {MetaInfo} mastLänge 
     * @param {MetaInfo} mastFundament 
     * @param {MetaInfo} mastAuslegertyp 
     * @param {MetaInfo} mastMontagedatum 
     */
    constructor(
        id,
        nummer,
        ort,
        hausnummer,
        bemerkung,
        schrankNummer,
        longitude,
        latitude,
        bilder,
        lampenTyp,
        lampenMontagedatum,
        leuchtenTyp,
        leuchtenMontagedatum,
        leuchtenLichtpunkthöhe,
        mastTyp,
        mastLänge,
        mastFundament,
        mastAuslegertyp,
        mastMontagedatum,
    ) {
        this.id = id;
        this.nummer = nummer;
        this.ort = ort;
        this.hausnummer = hausnummer;
        this.bemerkung = bemerkung;
        this.schrankNummer = schrankNummer;
        this.longitude = longitude;
        this.latitude = latitude;
        this.bilder = bilder;
        this.lampenTyp = lampenTyp;
        this.lampenMontagedatum = lampenMontagedatum;
        this.leuchtenTyp = leuchtenTyp;
        this.leuchtenMontagedatum = leuchtenMontagedatum;
        this.leuchtenLichtpunkthöhe = leuchtenLichtpunkthöhe;
        this.mastTyp = mastTyp;
        this.mastLänge = mastLänge;
        this.mastFundament = mastFundament;
        this.mastAuslegertyp = mastAuslegertyp;
        this.mastMontagedatum = mastMontagedatum;
    }

    /**
     * 
     * @param {function(Lichtpunkt): MetaInfo} cb 
     */
    getDisplayName(cb) {
        return cb(this).displayName;
    }

    /**
     * 
     * @param {function(Lichtpunkt): MetaInfo} cb 
     */
    getVisible(cb) {
        return cb(this).visible;
    }
}

let model = new Lichtpunkt('bla', 22, 23, 33);
let metaModel = new LichtpunktMeta({
    displayName: 'test-id',
    visible: true
});

console.log(metaModel.getDisplayName(lp => lp.id));