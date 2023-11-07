// Kuvatakse teated:
window.confirm("Teade");
window.alert("Teade");

// If 1:
if (tingimus) {

}

// If 2:
if (tingimus) {

} else {

}

// If 3:
if (op == "") {
 
   
} else if (op == "") {


} else if (op == "") {


} else if (op == "") {


}

//atsAlert
atsAlert("1","Teade","Trükkimiseks on vaja enne teha päring!","Jah" )

//atsSendMessage
atsSendMessage("1", "Ei leitud sellise märksõnaga artiklit!", 15000);

// Akna suuruse määramine olenevalt resost
if (atsDispDim() == "1") {
    h = 900;
}

// Funksioon

/**
* ATS0
* 
* @method atsSymb
* @param {String} cOper 
*/
function atsSymb(cOper) {
 
    
}




// XML objekti avab stringi
// getXmlString - lisad.js
var cString = getXmlString(oEditDOM);

// Teeb XML stringist XML objekti
// BuildXMLFromString - tools_dx.js
oEditDOM = BuildXMLFromString(cString);

// Kuvab XML objekti XML tekstina:
window.alert(getXmlString("String --> " + getXmlString(oEditDOM)));

// Annab elementide järjekorra peale meie poolt näidatud elementi
// qn_art = "x:A"
// qn_toimetaja = "x:T"
// follNimed = "x:TA|x:TL|x:PT|x:PTA|x:X|x:XA"
// getFollowingSiblings - lisad.js

var follNimed = getFollowingSiblings(qn_art, qn_toimetaja);


/*
        var cmdXml = "<prm>" +
        "<cmd>" + sCmdId + "</cmd>" +
        "<vol>" + currentVolId + "</vol>" +
        "<nfo>" + sQryInfo + "</nfo>" +
        "<axp>" + art_xpath + "</axp>" +
        "<exp>" + elm_xpath + "</exp>" +
        "<wC>" + withCase + "</wC>" +
        "<wS>" + withSymbols + "</wS>" +
        "<evP>" + evPath + "</evP>" +
        "<qn>" + seldQn + "</qn>" +
        "<fSrP>" + srchPtrn + "</fSrP>" +
        "<pFakPtrn>" + fakPtrn + "</pFakPtrn>" +
        "<fMsqlP>" + mySqlPtrn + "</fMsqlP>" +
        "<hlP>" + hlPtrn + "</hlP>" +
        "<qM>" + qM + "</qM>" +
        "<pQrySql>" + pQrySql + "</pQrySql>" +
        "</prm>";
 

        var cmdXml = "<prm>" +
        "<cmd>" + sCmdId + "</cmd>" +
        "<vol>" + currentVolId + "</vol>" +
        "<nfo>[toimetamisaeg (.//x:TA) [ '2018*' (↔: 5)]], tt-tu, m-dega, glob.</nfo>" +
        "<axp>x:A[.//x:TA[self::node()[al_p:srch(.)&gt; 0]]]</axp>" +
        "<exp>.//x:TA[self::node()[al_p:srch(.) &gt; 0]]</exp>" +
        "<wC>" + withCase + "</wC>" +
        "<wS>0</wS>" +
        "<evP>.//x:TA//text()</evP>" +
        "<qn>x:TA</qn>" +
        "<fSrP>^2018</fSrP>" +
        "<pFakPtrn>" + fakPtrn + "</pFakPtrn>" +
        "<fMsqlP>" + mySqlPtrn + "</fMsqlP>" +
        "<hlP>%5Cb2018</hlP>" +
        "<qM>" + qM + "</qM>" +
        "<pQrySql>" + pQrySql + "</pQrySql>" +
        "</prm>";
*/

// ARHIIV

/**
* Uuendab Toimetamisala ja Vaateala.
* 
* @method vaatedRefresh
* @param {String} nr Eristab, kas on "UndoRedo" või mitte.
* @param {Boolean} uuendaTala 
* @param {Boolean} uuendaVala
*/
function vaatedRefresh1(nr, uuendaTala, uuendaVala) {

        var oclid, newFragment;
        //window.alert("document=" + document);
        //window.alert(uuendaTala);
    
        if (uuendaTala) {
            if (oClicked) {
                oclid = oClicked.id;
    
                //window.alert("oClicked.id= " + oclid);
    
            }
    
            //window.alert(getXmlString(oEditDOM));
            newFragment = talaXslProse.transformToFragment(oEditDOM, document);
            talaDiv.innerHTML = "";
            // kui XSL-iga peaks mingi jama olema ...
            if (newFragment) {
                talaDiv.appendChild(newFragment);
                if (oclid) {
                    oClicked = talaDoc.getElementById(oclid);
                }
            }
        }
    
        if (uuendaVala) {
            newFragment = valaXslProse.transformToFragment(oEditDOM, document);
            valaDiv.innerHTML = "";
            if (newFragment) {
                valaDiv.appendChild(newFragment);
            }
        }
    
    
    
        var artMsMuudetudElement = document.getElementById("artMsMuudetud");
        if (artOrgString) {
            //window.alert(artOrgString);
            var jooksevArtStr = getXmlString(oEditDOM);
            if (jooksevArtStr == artOrgString) {
                artMsMuudetudElement.textContent = "";
                // võib ju olla alles sisestatud artikkel oma tühjade kastidega
                // dhxTalaBar.disableItem("btnSave");
    
                // ATS01 Salvestus tehtud.
                dArtSave = true;
            }
            else {
                artMsMuudetudElement.textContent = "*";
                // dhxTalaBar.enableItem("btnSave");
    
                // ATS01 Salvestus tegematta.
                dArtSave = false;
            }
    
            if (jooksevArtStr != urArray[urIndex]) {
                // vist ei ole võimalik igasugu NS-de pärast stringe ikka täpselt võrrelda
                if (nr != "UndoRedo") {
                    urArray = urArray.slice(0, urIndex + 1);
                    urIndex = urArray.push(jooksevArtStr) - 1;
    
    
    
                }
            }
    
            var currBuffNrElement = document.getElementById("currBuffNr");
            currBuffNrElement.textContent = urIndex + 1;
            var buffCountElement = document.getElementById("buffCount");
            buffCountElement.textContent = urArray.length;
    
            if (urIndex <= 0) {
                dhxTalaBar.disableItem("btnUndo");
            } else {
                dhxTalaBar.enableItem("btnUndo");
            }
            if (urIndex >= urArray.length - 1) {
                dhxTalaBar.disableItem("btnRedo");
            } else {
                dhxTalaBar.enableItem("btnRedo");
            }
    
        }
    } //vaatedRefresh



