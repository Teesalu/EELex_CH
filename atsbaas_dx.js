//**********************************************************************
//* atsbaas_dx.js
//* Brauserisõltumatu versiooni js.
//*
//* Autor: Ain Teesalu
//* Loodud   - 08.09.2023
//* Muudatus - 25.09.2023  
//**********************************************************************

/**
* Käivitab otsingupäringu.
* 
* @method atsBaasOtsing
* @param {String} parQM Päringumeetod (XML või MySQL).
*/
function atsBSOtsing(parQM, ft) {
    var withCase = 0;
    var xft, attXmlPred = "", attSqlPred = "", mySqlAttCond = "", sNodeTest, seldQn, qt, qtMySql;
    var artRada, elemRada, evPath, srchPtrn, fakPtrn = "", mySqlPtrn = "", hlPtrn = "", pQrySql = "";
    var hasSeldText = false;
    var qM = parQM;
    var oConfDOM;

    oConfDOM = IDD("File", "shsconfig_" + cDicdescX + ".xml", false, false, null);
    if (!oConfDOM) {
        alert("Puudub sõnastiku konf. fail 'shsconfig_" + cDicdescX + ".xml'!");
        return;
    }
    try {
        DICPR_A = oConfDOM.documentElement.getElementsByTagName("dicpr")[0].textContent;
    }
    catch (e) {
 
            window.alert("Tekkis viga valitud sõnastiku shsconfig_ lugemisel!");
            return;
    }
 
    nColInd == "0";

    withSymbols = 0;

    sQryInfo = dhxBar.getItemText("volSelect") + ": " + "Märksõna (m)" + " = '" + ft + "'";

    sNodeTest = default_query;
    seldQn = sNodeTest.substr(sNodeTest.lastIndexOf("/") + 1);
    hasSeldText = true;
     
    cAbiMarkSona = DICPR_A  + ":m";

    seldQn = cAbiMarkSona;

    qt = "self::node()";
    if (qt == ".//text()") {
        qtMySql = "//text()";
    } else if (qt == "self::node()") {
        qtMySql = "//text()";
    } else if (qt == "text()") {
        qtMySql = "/text()";
    }

    artRada = DICPR_A  + ":A";
    evPath = sNodeTest;
    if (sNodeTest == artRada) { //A
        elemRada = "";
    } else {
        if (1 == 1) { // use_global linnuke
            elemRada = ".//" + seldQn;
            evPath = ".//" + seldQn;
        } else {
            elemRada = sNodeTest.substr(sNodeTest.indexOf("/") + 1); //'q:A/ - st edasi ...
        }
    }

    // valitud artikkel ning otsitakse kas tühja v olematut artiklit
    if (sNodeTest == artRada && (ft == "" || ft == "=NULL")) {
        return;
    }

    if (seldQn == qn_ms && fakult.length > 0 && withSymbols == -1) {
        fakPtrn = fakult;
    }

    if (ft == "=.") {
        return;
    } else if (ft == "!=.") {
        return;
    } else if (jsLeft(ft, 2) == "§§") {
        withSymbols = 1;
        withCase = 1;
        qM = "XML";
        srchPtrn = ft.substr(2);
        srchPtrn = jsReplace(srchPtrn, "\\u", "\\p{Lu}"); //'suurtähed;
        srchPtrn = jsReplace(srchPtrn, "\\l", "\\p{Ll}"); //'väiketähed;
        srchPtrn = jsReplace(srchPtrn, "\\k", "[bcdfghjklmnpqrsšzžtvwx]"); //'eesti konsonandid;
        srchPtrn = jsReplace(srchPtrn, "\\v", "[aeiouõäöüy]"); //'eesti vokaalid;
        elpred = "[al_p:srch(.) > 0]";
        if (sNodeTest == artRada) { //A;
            elm_xpath = "self::node()";
            art_xpath = artRada + attXmlPred + "[" + qt + elpred + "]";
            evPath = artRada + attSqlPred + qtMySql;
        } else {
            arttingimus = elemRada + attXmlPred + "[" + qt + elpred + "]";
            elm_xpath = arttingimus;
            art_xpath = artRada + "[" + arttingimus + "]";
            evPath = elemRada + attSqlPred + qtMySql;
        }
    } else if (jsLeft(ft, 1) == "§") {
        elpred = "[" + jsTrim(ft).substr(1) + "]";
        if (sNodeTest == artRada) { //A;
            elm_xpath = "self::node()";
            art_xpath = artRada + attXmlPred + elpred;
        } else {
            arttingimus = elemRada + attXmlPred + elpred;
            elm_xpath = arttingimus;
            art_xpath = artRada + "[" + arttingimus + "]";
        }
        //MySQL "extractValue" tegutseb juurika tasemel (ehk siis "A");
        evPath = evPath + attSqlPred + elpred + qtMySql;
        //•The :: operator == ! supported in combination with node types such as the following;
        if ((elpred.indexOf("::comment()") > -1 || elpred.indexOf("::text()") > -1 || elpred.indexOf("::processing-instruction()") > -1 || elpred.indexOf("::node()") > -1)) {
            qM = "XML";
        }
        //axes ! supported in MySQL ExtractValue;
        if ((elpred.indexOf("following-sibling::") > -1 || elpred.indexOf("following::") > -1 || elpred.indexOf("preceding-sibling::") > -1 || elpred.indexOf("preceding::") > -1)) {
            qM = "XML";
        }
        //functions ! supported in MySQL ExtractValue;
        if ((elpred.indexOf("id(") > -1 || elpred.indexOf("lang(") > -1 || elpred.indexOf("local-name(") > -1 || elpred.indexOf("name(") > -1 || elpred.indexOf("namespace-uri(") > -1 || elpred.indexOf("normalize-space(") > -1 || elpred.indexOf("starts-with(") > -1 || elpred.indexOf("string(") > -1 || elpred.indexOf("substring-after(") > -1 || elpred.indexOf("substring-before(") > -1 || elpred.indexOf("translate(") > -1)) {
            qM = "XML";
        }
        //ka Perl funktsioonid tuleb siit välja arvata (srch, srch2);
        if ((elpred.indexOf("al_p:srch") > -1)) {
            qM = "XML";
        }
        //kui XPath tingimuse SEES on on veel mingi tingimus ja sisemist tingimust rahuldab rohkem kui 1 juhus,;
        //select * from vsl where extractvalue(art,"z:A[z:P/z:mg[z:m[not(@z:zs)] && z:etg/z:etgg/z:keel = 'ld']]//text()") != '' && vol_nr>0;;
        //select * from vsl where extractvalue(art,"z:A/z:P/z:mg[z:m[not(@z:zs)] && z:etg/z:etgg/z:keel = 'ld']//text()") != '' && vol_nr>0;;
        //MySQL ei suuda seda leida. Senikaua - kui selgusetu - olgu alati "XML";
        withSymbols = 1;
        withCase = 1;
        qM = "XML";
        // et kas elemendil on teksti ette näthud v mitte (hasSeldText)
        // kui 'false', siis läheb alati ExtractValue kaudu
        hasSeldText = false;
        pQrySql = getSqlQuery(seldQn, ft, hasSeldText, withSymbols, withCase, evPath, elemRada, mySqlAttCond);
    } else {

        var qtTing;
        if (ft == "*") {
            withSymbols = 1; // XML: vahet pole; mysql: art_alt ja val_nos on tühjad. Vale tulemus
            elpred = "";
            qtTing = "";
            evPath = evPath + attSqlPred + qtMySql;
        } else if (ft == "") {
            withSymbols = 1; // XML: vahet pole; mysql: art_alt ja val_nos on tühjad. Vale tulemus
            elpred = "[. = '']";
            qtTing = elpred;
            evPath = evPath + attSqlPred + elpred + qtMySql;
        } else if (ft == "=NULL") { //'A korral ei täideta, vt ülal;
            seldQn = artRada;
            hasSeldText = false;  //otsitav element muutus <A>, sellel pole mysql tabelites teksti ega atribuute;
            withSymbols = 1;
            withCase = 1;
            //        elpred = "[not(" + elemRada + ")]" ' see vist ei käivitunud MySql XML-i "not()" iseärasuste tõttu
            elpred = "[count(" + elemRada + ") = 0]";
            qtTing = elpred;
            evPath = artRada + elpred + "//text()" //'sõltumata "qtMySql" - ist
            attXmlPred = ""; //'ei ole kasutatav atr tingimus, kui otsime elementi, mida pole;
            mySqlAttCond = "";
        } else {
            ft = RemoveSymbols(ft, "*? ");

            //serveris otsib 'srch' tectContent' abil, selles aga '&amp;' -> '&';
            // juba "RemoveSymbols" - is tehtud
            srchPtrn = jsReplace(ft, "&amp;", "&");
            srchPtrn = getSrPn2(srchPtrn, "XML");

            elpred = "[al_p:srch(.) > 0]";
            qtTing = "[" + qt + elpred + "]";
            evPath = evPath + attSqlPred + qtMySql;
        }

        if (seldQn == artRada) { //A;
            elm_xpath = "self::node()";
            art_xpath = artRada + attXmlPred + qtTing;
        } else {
            arttingimus = elemRada + attXmlPred + qtTing;
            elm_xpath = arttingimus;
            art_xpath = artRada + "[" + arttingimus + "]";
        }

        //value = 'qname|name|URI|IsElement|kirjeldav';
        if ("1" == "1") { // aElemInfo[3], IsElement
            pQrySql = getSqlQuery(seldQn, ft, hasSeldText, withSymbols, withCase, evPath, elemRada, mySqlAttCond);
        }

    }

    var PrintQrySql = pQrySql;
    var PrintArtXpath = art_xpath;

    var nMaxLeid = parseInt(cMaxLeid);

    pQrySql += "";
    art_xpath += "";

    var currentVolId = dhxBar.getListOptionSelected("volSelect");
    sCmdId = "ClientRead";

    var cQM = qM;

    if (withSymbols == 1) {
        ft = ft.replace("*", "");
        srchPtrn = "^" + ft;
        cQM = "xml";
    }

    currentVolId = cDicdescX + "All";
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
        "<qM>" + cQM + "</qM>" +
        "<pQrySql>" + pQrySql + "</pQrySql>" +
        "</prm>";

 
    var cmdXmlDom = IDD("String", cmdXml, false, false, null);
    atsBSStartFind(cmdXmlDom);

} // atsBSOtsing

/**
* Käivitab operatsiooni, mille vastus jõuab pikka rada pidi funktsioonile ParseSrvInfo.
* 
* @method atsBSStartFind
* @param {Object} oPrmDom
*/
function atsBSStartFind(oPrmDom) {
    var cmdId = oPrmDom.documentElement.getElementsByTagName("cmd")[0].textContent;
 
    //esimeseks tuleb siis "app_lang", siis "dic_desc", lõppu kasutajanimi
    var nNode;
 
    nNode = oPrmDom.documentElement.insertBefore(oPrmDom.createElement("dic_desc"), oPrmDom.documentElement.firstChild);
    
    nNode.textContent = cDicdescX;

    nNode = oPrmDom.documentElement.insertBefore(oPrmDom.createElement("app_lang"), oPrmDom.documentElement.firstChild);
    nNode.textContent = sAppLang;
    nNode = oPrmDom.documentElement.appendChild(oPrmDom.createElement("un"));
    nNode.textContent = sUsrName;

    sbMain.setText("");

    dhxBar.disableItem("btnSrch");

    dtOpStart = new Date();
    dhxLayout.progressOn();

    atsBSQueryResponseAsync(oPrmDom);
} // atsBSStartFind


/**
* Teeb asünkroonse päringu servfuncs.cgi-st ja vastus läheb funktsiooni doHttpReadyStateChange.
*
* @method atsBSQueryResponseAsync
* @param {Object} oPrmDom XML objekt päringuga.
*/
function atsBSQueryResponseAsync(oPrmDom) {

    xmlHTTPAsync = getXmlHttpObject();
    xmlHTTPAsync.onreadystatechange = atsBSDoHttpReadyStateChange;
    xmlHTTPAsync.open("POST", "srvfuncs.cgi", true);
    xmlHTTPAsync.setRequestHeader("Content-Type", "text/xml; charset='utf-8';");
    xmlHTTPAsync.send(getXmlString(oPrmDom));
} // atsQueryResponseAsync

/**
* Töötleb päringu vastust ja edastatakse funktsiooniga asyncCompleted.
*
* @method atsDoHttpReadyStateChange
*/
function atsBSDoHttpReadyStateChange() {
    if (xmlHTTPAsync.readyState == XMLHTTP_COMPLETED) {
        if (IsRequestSuccessful(xmlHTTPAsync)) {
            var oSrvRspDOM = ParseHTTPResponse(xmlHTTPAsync);
            atsBSAsyncCompleted(oSrvRspDOM);
        } else {
            alert(xmlHTTPAsync.statusText);
            atsBSAsyncCompleted(null);
        }
    }
} // atsDoHttpReadyStateChange

/**
* Käivitub, kui serverist päring tagasi tuleb.
* 
* @method atsBSAsyncCompleted
* @param {Object} objXMLDom
*/
function atsBSAsyncCompleted(objXMLDom) {

    if (!objXMLDom) {
        StopOperation();
        return;
    }

    atsBSParseSrvInfo(objXMLDom);
    StopOperation();

} // atsBSAsyncCompleted

/**
* Töötleb serveri vastuseid. Funktsiooniga atsBSStartFind tehtud päringute vastused jõuavad siia.
* 
* @method atsBSParseSrvInfo
* @param {Object} oRespDom XML Dom.
*/
function atsBSParseSrvInfo(oRespDom) {
    var sta, cnt, vol, qM, vastus;
    sta = oRespDom.documentElement.getElementsByTagName("sta")[0].textContent;
    cnt = oRespDom.documentElement.getElementsByTagName("cnt")[0].textContent;
    cnt = parseInt(cnt);
    vol = oRespDom.documentElement.getElementsByTagName("vol")[0].textContent;
    qM = oRespDom.documentElement.getElementsByTagName("qM")[0].textContent;

    if (sta == "Success") {
        if (sCmdId == "ClientRead" || sCmdId == "BrowseRead" || sCmdId == "prevNextRead" || sCmdId == "msSarnased" || sCmdId == "tyhjadViited") {
            if (cnt == 0) {
                //window.alert("Ei leitud sellise märksõnaga artiklit!");
                atsSendMessage("1", "Ei leitud sellise märksõnaga artiklit!", 15000);
                nColInd = "0"

            } else if (cnt == 1) {

                if (nColInd == "0") {
                    wG = oRespDom.documentElement.getElementsByTagName(DICPR_A + ":G")[0].textContent;
                    
                    //window.alert(vol + " -> " + vastus);
                    //window.alert(getXmlString(oRespDom));
                    
                    vastus = oRespDom.documentElement.getElementsByTagName(DICPR_A + ":m")[0].textContent;
                    atsViewBaas("1", vastus, vol, wG);
                } else if (nColInd == "3") {

                   // window.alert("Koht 1");
  
                    let cDUri = "http://www.eki.ee/dict/" + cDicdescX;
                    vastus = oRespDom.documentElement.getElementsByTagNameNS(cDUri, "A")[0];
                    nColInd = "0"
                    viewRefBrowse(vastus);
                }

            } else if (cnt > 1 || cnt == -1) {
                nColInd = "0"
                vastus = oRespDom.documentElement.getElementsByTagName("outDOM")[0];
                atsViewBaas("2", getXmlString(vastus),"n","n");
            }
            //window.alert(getXmlString(vastus));
        }
    }
    else {
        alert(getXmlString(oRespDom));
        return;
    }
} // atsParseSrvInfo


/**
* ATS0 Leitud märksõnade aken
* 
* @method atsViewBaas
*/
function atsViewBaas(zRez, zVastus, zV1, zG1) {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    cDialogArg = cDicdescX + PD + zVastus + PD + cAbiMarkSona + PD + zRez + PD + DICPR_A + PD + zV1 + PD + zG1;
    if (!dhxWins.window("vbaas")) {
        //var w = 1025;
        //var h = 1000;

        var w = atsWinMast("W", 1000, 3);
        var h = atsWinMast("H", 1000, 0);


        var dhxWinParams = {
            id: "vbaas",
            //left: 700,
            //top: 120,
            width: w,
            height: h,
            caption: "Artikli sisu vaatamiseks clicki märksõnale...",
            resize: false,
            move: true,
            park: true,
            close: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("vbaas").centerOnScreen();
        //dhxWins.window("vbaas").denyResize();
        dhxWins.window("vbaas").keepInViewport(false);
        dhxWins.window("vbaas").setModal(false);
        dhxWins.window("vbaas").button("close").disable();

        if (dhxWins.window("vbaas").isParked()) {
            dhxWins.window("vbaas").park();
        }
        //dhxWins.window("vbaas").button("close").hide();

    }
    dhxWins.window("vbaas").attachURL(atsCatal + "/atsViewBaas.html", false);
}

/**
* Otsingu filtri määramine
* 
* @method atsChooseBase
* @param {Object} DIndex - sõnastiku indeks.
*/
function atsChooseBase(cDIndex) {
    cDicdescX = "";
    let cRetValue = "";
    let i = 0;
    while (i == 0) {

        cRetValue = prompt("Sisestage: märksõna filter (võib kasutada '*'). Näiteks 'kaa*' või '*aaned'.", cRetValue);

        if (cRetValue == null) {
            return
        } else {
            // määrame alt. andmebaasi indeksi
            cDicdescX = cDIndex;
            baseViewParam();
            i = 1;
            atsBSOtsing("xml", cRetValue);
        }
    }
}


/**
* Teeb BrowseRead päringu. Otsingutulemuste nimekirjas millelegi peale klikates käivitub.
* 
* @method doViewArtBase
* @param {String} qM Query Method
* @param {String} sVol
* @param {String} sG
*/
function doViewArtBase(qM, sVol, sG) {

    nColInd = "3";
    // ATS01 Salvestuse kontroll (ATeesalu)
    //atsSaveContr();

    sQryInfo = " ";

    sCmdId = "BrowseRead";
    var cmdXml = "<prm>" +
        "<cmd>" + sCmdId + "</cmd>" +
        "<vol>" + sVol + "</vol>" +
        "<nfo>" + sQryInfo + "</nfo>" +
        "<G>" + sG + "</G>" +
        "<qM>" + qM + "</qM>" +
        "</prm>";

    //window.alert("Vastus1-> " + rowId);
    //window.alert("Vastus2-> " + userdata);
    //window.alert("cmdXml -> " + cmdXml);

    var cmdXmlDom = IDD("String", cmdXml, false, false, null);
    //StartOperation(cmdXmlDom);
    atsBSStartFind(cmdXmlDom);
}

// doBrowseRead


/**
* Loob uues aknas vaate faili.
* 
* @method viewRefBrowse
*/
function viewRefBrowse(vastus) {
   
    var oclid, newFragment;
    newFragment = baseXslProse.transformToDocument(vastus, document);
    var cNewHtml = getXmlString(newFragment);
    atsBrowseArt(cNewHtml, 1200, 600);

} // viewRefBrowse


/**
* Vaate faili parameetrid.
* 
* @method baseViewParam
*/
function baseViewParam() {

    baseXsl = IDD("File", "xsl/gendView_" + cDicdescX + ".xsl", false, false, null);
    if (!baseXsl) {
        alert("Vaate genereerimine tegemata!");
        return;
    }

    baseXslProse = new XSLTProcessor();
    if (baseXslProse) {
        baseXslProse.importStylesheet(baseXsl);
    } else {
        alert("\"new XSLTProcessor()\" nurjus ('base')!");
        return;
    }

} // baseViewParam


/**
* ATS0 Otsingu tulemuste kuvamine.
* 
* @method atsBrowseArt
*/
function atsBrowseArt(zNewHtml, nW, nH) {
    nColInd == "0";
    cDialogArg = cDicdescX + PD + zNewHtml;
    if (!dhxWins.window("browx")) {
        var w = nW;
        var h = nH;
        var dhxWinParams = {
            id: "browx",
            left: 1000,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Sõnastiku (" + cDicdescX + ") "  + "valitud artikli sisu:",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("browx").centerOnScreen();
        //dhxWins.window("browsex").denyResize();
        dhxWins.window("browx").keepInViewport(false);
        dhxWins.window("browx").setModal(false);
        if (dhxWins.window("browx").isParked()) {
            dhxWins.window("browx").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("browx").attachURL(atsCatal + "/atsBrowseArt.html", false);

}