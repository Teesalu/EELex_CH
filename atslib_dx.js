//**********************************************************************
//* atslib_dx.js
//* Brauserisõltumatu versiooni js.
//*
//* Autor: Ain Teesalu
//* Loodud   - 01.11.2021
//* Muudatus - 25.09.2023  
//**********************************************************************
/*
* atslib_dx
* 
* @method atsOnViit
* @param {String} zContValue (välja nimetus, näiteks x:mvt) 
*/
function atsOnViit(zContValue) {
    //alert("Start");
    var i, n;
    var zRet = false;
    try {
        var configDom = IDD("File", "config/view/gendViewConf_" + dic_desc + ".xml", false, false, null);
    }
    catch (er) {
        window.alert("Ei leitud faili '" + "config/view/gendViewConf_" + dic_desc + ".xml'?")
        return zRet;
    }
    var configElements = configDom.getElementsByTagName('elem');
    for (i = 0; i <= configElements.length - 1; i++) {
        var ooConfigNode = configElements.item(i);
        if (ooConfigNode.hasAttribute("name")) {
            var cAttrValue = configElements.item(i).attributes[0].value;
            var n1 = zContValue.length;
            var n2 = cAttrValue.length;
            var nx = (n2 - n1)
            if (nx > -1) {
                if (cAttrValue.substr(nx) == zContValue) {
                    var ooLinkNode = ooConfigNode.getElementsByTagName('isLink');
                    var ooLNode = ooLinkNode.item(0);
                    var cLinkValue = ooLNode.childNodes[0].nodeValue;
                    if (cLinkValue == "1") {
                        return true;
                    }
                }
            }

        }
    }
    return zRet;
}

/**
* Käivitab operatsiooni, mille vastus jõuab pikka rada pidi funktsioonile ParseSrvInfo.
* 
* @method atsStartFind
* @param {Object} oPrmDom
*/
function atsStartFind(oPrmDom) {
    var cmdId = oPrmDom.documentElement.getElementsByTagName("cmd")[0].textContent;

    //esimeseks tuleb siis "app_lang", siis "dic_desc", lõppu kasutajanimi
    var nNode;
    nNode = oPrmDom.documentElement.insertBefore(oPrmDom.createElement("dic_desc"), oPrmDom.documentElement.firstChild);

    nNode.textContent = dic_desc;

    nNode = oPrmDom.documentElement.insertBefore(oPrmDom.createElement("app_lang"), oPrmDom.documentElement.firstChild);
    nNode.textContent = sAppLang;
    nNode = oPrmDom.documentElement.appendChild(oPrmDom.createElement("un"));
    nNode.textContent = sUsrName;

    sbMain.setText("");

    dhxBar.disableItem("btnSrch");

    dtOpStart = new Date();
    dhxLayout.progressOn();

    //window.alert(getXmlString(oPrmDom));

    atsQueryResponseAsync(oPrmDom);
} // atsStartFind

/**
* Teeb asünkroonse päringu servfuncs.cgi-st ja vastus läheb funktsiooni doHttpReadyStateChange.
*
* @method atsQueryResponseAsync
* @param {Object} oPrmDom XML objekt päringuga.
*/
function atsQueryResponseAsync(oPrmDom) {
    xmlHTTPAsync = getXmlHttpObject();
    xmlHTTPAsync.onreadystatechange = atsDoHttpReadyStateChange;
    xmlHTTPAsync.open("POST", "srvfuncs.cgi", true);
    xmlHTTPAsync.setRequestHeader("Content-Type", "text/xml; charset='utf-8';");
    xmlHTTPAsync.send(getXmlString(oPrmDom));
} // atsQueryResponseAsync

/**
* Töötleb päringu vastust ja edastatakse funktsiooniga asyncCompleted.
*
* @method atsDoHttpReadyStateChange
*/
function atsDoHttpReadyStateChange() {
    if (xmlHTTPAsync.readyState == XMLHTTP_COMPLETED) {
        if (IsRequestSuccessful(xmlHTTPAsync)) {
            var oSrvRspDOM = ParseHTTPResponse(xmlHTTPAsync);
            atsAsyncCompleted(oSrvRspDOM);
        } else {
            alert(xmlHTTPAsync.statusText);
            atsAsyncCompleted(null);
        }
    }
} // atsDoHttpReadyStateChange

/**
* Käivitub, kui serverist päring tagasi tuleb.
* 
* @method atsAsyncCompleted
* @param {Object} objXMLDom
*/
function atsAsyncCompleted(objXMLDom) {
    if (!objXMLDom) {
        StopOperation();
        return;
    }

    atsParseSrvInfo(objXMLDom);
    StopOperation();

} // atsAsyncCompleted

/**
* Töötleb serveri vastuseid. Funktsiooniga atsStartFind tehtud päringute vastused jõuavad siia.
* 
* @method atsParseSrvInfo
* @param {Object} oRespDom XML Dom.
*/
function atsParseSrvInfo(oRespDom) {
    var sta, cnt, vol, qM, vastus;
    sta = oRespDom.documentElement.getElementsByTagName("sta")[0].textContent;
    cnt = oRespDom.documentElement.getElementsByTagName("cnt")[0].textContent;
    cnt = parseInt(cnt);
    vol = oRespDom.documentElement.getElementsByTagName("vol")[0].textContent;
    qM = oRespDom.documentElement.getElementsByTagName("qM")[0].textContent;

    if (cnt == 1) {
        //var cELVaart = oRespDom.documentElement.getElementsByTagName(cDicpr + ":m")[0].textContent;

        var cELVaart = oRespDom.documentElement.getElementsByTagName(cMarkSona)[0].textContent;
        var cALVaart = ccNSV.replace("*", "");
        if (cELVaart != cALVaart) {
            cnt = 0;
        }
    }

    if (sta == "Success") {
        if (sCmdId == "ClientRead" || sCmdId == "BrowseRead" || sCmdId == "prevNextRead" || sCmdId == "msSarnased" || sCmdId == "tyhjadViited") {
            if (cnt == 0) {
                //window.alert("Ei leitud sellise märksõnaga artiklit!");
                atsSendMessage("1", "Ei leitud sellise märksõnaga artiklit!", 15000);

                if (urIndex > 0) {
                    urIndex--;
                    oEditDOM = BuildXMLFromString(urArray[urIndex]);
                    oEditDOMRoot = oEditDOM.documentElement;
                    vaatedRefresh("UndoRedo", true, true);
                    currBuffNrElement = document.getElementById("currBuffNr");


                    if ((cnt == 1) && (cELVaart != cALVaart)) {
                        cnt = 0;
                    }

                    currBuffNrElement.textContent = urIndex + 1;
                }

            } else if (cnt == 1) {
                //vastus = oRespDom.documentElement.getElementsByTagName(cDicpr + ":m")[0].textContent;
                vastus = oRespDom.documentElement.getElementsByTagName(cMarkSona)[0].textContent;

                // Leiame kõik elemendid, millede nime on muutujas ccElemName.
                var ooElemNodes = oEditDOM.getElementsByTagName(ccElemName);
                // Määrame leitud elementide arvu (integer).
                var nnLenght = ooElemNodes.length;

                if (nnLenght > 0) {
                    for (let i = 0; i < nnLenght; i++) {
                        var ooDNode = ooElemNodes.item(i);
                        var ccDocValue = ooDNode.childNodes[0].nodeValue;
                        ccNSV = ccNSV.replace("*", "");
                        ccDocValue = ccDocValue.replace("*", "");
                        if (vastus === ccDocValue) {
                            ooDNode.childNodes[0].nodeValue = ccDocValue;
                            //window.alert(getXmlString(oEditDOM));
                            ooDNode.removeAttribute(cDicpr + ":i");
                            vaatedRefresh(2, true, true);
                        }
                    }
                }
                setButtonSelectId("volSelect", vol);
                sFromVolume = vol;

                //vastus = oRespDom.documentElement.getElementsByTagNameNS(DICURI, "A")[0];

                //window.alert("Sellise märksõnaga artikkel on olemas!");

            } else if (cnt > 1 || cnt == -1) {
                vastus = oRespDom.documentElement.getElementsByTagName("outDOM")[0];
                //console.log(getXmlString(vastus));
                //window.alert(vastus);
                atsViiteValik(getXmlString(vastus));


                //FillBrowseFrame(vastus);
                //tooEsileLoend();
                //sbMain.setText("<img src='graphics/info.png' style='color:red;width:16px;font-weight:bold;'> " + sQryInfo + " - " + cMaxLeid + " artiklit kuvatakse[kokku leiti - " + cnt + " märksõna].");
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
* Käivitab otsingupäringu.
* 
* @method otsing
* @param {String} parQM Päringumeetod (XML või MySQL).
*/
function atsViitOtsing(parQM, ft) {

    //window.alert(parQM + " - " + ft);

    var withCase = 0;
    var xft, attXmlPred = "", attSqlPred = "", mySqlAttCond = "", sNodeTest, seldQn, qt, qtMySql;
    var artRada, elemRada, evPath, srchPtrn, fakPtrn = "", mySqlPtrn = "", hlPtrn = "", pQrySql = "";
    var hasSeldText = false;

    var qM = parQM;
    withSymbols = 0;

    //window.alert(dhxBar.getItemText("elemSelect"));


    sQryInfo = dhxBar.getItemText("volSelect") + ": " + "Märksõna (m)" + " = '" + ft + "'";


    //window.alert(cTrykk);


    //sNodeTest algab artiklist: "q:A/..." jne
    sNodeTest = default_query;
    seldQn = sNodeTest.substr(sNodeTest.lastIndexOf("/") + 1);
    hasSeldText = true;



    // ATS53
    //seldQn = cFindID;
    seldQn = cMarkSona;


    //qt: .//text(), self::node(), text()
    qt = "self::node()";
    if (qt == ".//text()") {
        qtMySql = "//text()";
    } else if (qt == "self::node()") {
        qtMySql = "//text()";
    } else if (qt == "text()") {
        qtMySql = "/text()";
    }

    artRada = qn_art;
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

    //pQrySql += " LIMIT 500";
    //art_xpath += "[position() &lt; 501]";

    //window.alert(nMaxLeid);

    var PrintQrySql = pQrySql;
    var PrintArtXpath = art_xpath;


    var nMaxLeid = parseInt(cMaxLeid);

    //pQrySql += " LIMIT " + nMaxLeid;
    //art_xpath += "[position() &lt; " + (nMaxLeid + 1) + "]";


    pQrySql += "";
    art_xpath += "";

    //window.alert(pQrySql);
    //window.alert(art_xpath);



    var currentVolId = dhxBar.getListOptionSelected("volSelect");
    sCmdId = "ClientRead";
    //art_xpath = "x:A[.//x:m[self::node()[al_p:srch(.) > 0]]]";
    //elm_xpath = ".//x:m[self::node()[al_p:srch(.) > 0]]";


    //window.alert(xft);
    var cQM = qM;

    if (withSymbols == 1) {
        ft = ft.replace("*", "");
        srchPtrn = "^" + ft;
        cQM = "xml";
    }
    //ccNSV = ft;
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

    //window.alert(cmdXml);

    var cmdXmlDom = IDD("String", cmdXml, false, false, null);
    atsStartFind(cmdXmlDom);


} // otsing

/**
* ATS0 Leitud märksõnade aken
* 
* @method atsViiteValik
*/
function atsViiteValik(zVastus) {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    cDialogArg = dic_desc + PD + zVastus + PD + cMarkSona;
    if (!dhxWins.window("viide")) {
        var w = 1025;
        var h = 1000;
        var dhxWinParams = {
            id: "viide",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Märksõna valik",
            resize: true,
            move: true,
            park: false,
            close: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("viide").centerOnScreen();
        dhxWins.window("viide").denyResize();
        dhxWins.window("viide").keepInViewport(false);
        dhxWins.window("viide").setModal(true);

        if (dhxWins.window("viide").isParked()) {
            dhxWins.window("viide").park();
        }
        dhxWins.window("viide").button("close").hide();

    }
    dhxWins.window("viide").attachURL(atsCatal + "/atsViiteValik.html", false);
}

/**
* ATS0 Tegevus peale viite(märksõna) valikut
* 
* @method atsViiteValikReturn
*/
function atsViiteValikReturn(zParms) {


    if (zParms == "*") {
        if (urIndex > 0) {
            urIndex--;
            oEditDOM = BuildXMLFromString(urArray[urIndex]);
            oEditDOMRoot = oEditDOM.documentElement;
            vaatedRefresh("UndoRedo", true, true);
            currBuffNrElement = document.getElementById("currBuffNr");
            currBuffNrElement.textContent = urIndex + 1;
        }
        return;
    } else {
        var aSplitArray = zParms.split(PD);
        var cValik_m = aSplitArray[0];
        var cValik_i = aSplitArray[1];

        // Leiame kõik elemendid, millede nime on muutujas ccElemName.
        var ooElemNodes = oEditDOM.getElementsByTagName(ccElemName);
        // Määrame leitud elementide arvu (integer).
        var nnLenght = ooElemNodes.length;
        if (nnLenght > 0) {
            for (let i = 0; i < nnLenght; i++) {
                var ooDNode = ooElemNodes.item(i);
                var ccDocValue = ooDNode.childNodes[0].nodeValue;
                if (ccDocValue == ccNSV) {
                    ooDNode.childNodes[0].nodeValue = cValik_m;
                    //window.alert(getXmlString(oEditDOM));
                    if (cValik_i != "") {
                        ooDNode.setAttribute(cDicpr + ":i", cValik_i);
                    } else {
                        ooDNode.removeAttribute(cDicpr + ":i");
                    }

                    vaatedRefresh(2, true, true);

                }
            }
        }
    }
}


/**
* ATS0 Symbolite valiku organiseerimine
* 
* @method atsSymbolChoosexxx
*/
function atsSymbolChoosex(ccID) {

    var dhxWins;
    //var w = dhxLayout.cells("a").getWidth() + dhxLayout.cells("b").getWidth();
    // var h = dhxLayout.cells("b").getHeight();
    var dhxWinParams = {
        id: "winTyybid",
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        caption: "Tüüpsõnadx",
        resize: true,
        move: true,
        park: true
    };
    tyybidWindow = dhxWins.createWindow(dhxWinParams);
    //            dhxWins.window("winMorfSetup").setToFullScreen(true);
    //            dhxWins.window("winMorfSetup").centerOnScreen();
    dhxWins.window("winTyybid").center();
    //        dhxWins.window("winMorfSetup").button("minmax1").hide();
    //        dhxWins.window("winMorfSetup").setModal(true);
    //            dhxWins.window("winMorfSetup").maximize();
    dhxWins.window("winTyybid").keepInViewport(true);


    if (dhxWins.window("winTyybid").isParked()) {
        dhxWins.window("winTyybid").park();
    }
    //        var href = oSrc.href;
    dhxWins.window("winTyybid").attachURL("htmlnew/atsSymbolz.html", false); // false: mitte AJAX
    cancelThisEvent(thisEvent);




}

/**
* ATS0 Symbolite valiku organiseerimine
* 
* @method atsSymbolChoose
*/
function atsSymbolChoose(ccID) {

    var sParms = "";
    spawn(function* () {
        //var sParms = yield window.showModalDialog("htmlnew/modalwin.html", "som argument", "dialogWidth:800px;dialogHeight:600px");
        smdArgs = ccID;
        var sParms = yield window.showModalDialog(atsCatal + "/atsSymbolz.html", smdArgs, "dialogWidth:500px;dialogHeight:400px");
    });
}

/**
* atslib_dx - andmebaasi ekport (XML kujul)
* 
* @method atsExport
*/
function atsExport() {
    cDialogArg = dic_desc + PD + sAppLang + PD + "" + PD + sUsrName + PD + dhxBar.getListOptionSelected("volSelect") + PD + cTxtq;
    if (!dhxWins.window("eksport")) {
        var w = 800;
        var h = 500;
        var dhxWinParams = {
            id: "eksport",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Eksport",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("eksport").centerOnScreen();
        dhxWins.window("eksport").denyResize();
        dhxWins.window("eksport").keepInViewport(false);
        dhxWins.window("eksport").setModal(true);
        if (dhxWins.window("eksport").isParked()) {
            dhxWins.window("eksport").park();
        }
    }
    dhxWins.window("eksport").attachURL(atsCatal + "/xmlCopy.html", false);
}

/**
* atslib_dx - setupi kuvamine ja uuendamine
* 
* @method atsShowEELexSetup
*/
function atsShowEELexSetup() {
    cDialogArg = dic_desc + PD + sAppLang + PD + 'trääs' + PD + sUsrName + PD + 'trääs';
    if (!dhxWins.window("setup")) {
        var w = 1000;
        var h = 700;
        var dhxWinParams = {
            id: "setup",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "EELexi sätted",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("setup").centerOnScreen();
        dhxWins.window("setup").denyResize();
        dhxWins.window("setup").keepInViewport(false);
        dhxWins.window("setup").setModal(true);
        if (dhxWins.window("setup").isParked()) {
            dhxWins.window("setup").park();
        }
    }
    dhxWins.window("setup").attachURL(atsCatal + "/atsEelexSetup.html", false);
}

/**
* atslib_dx - EELexi sätete muudatuste salvestamine
* 
* @method atsSetupReturn
*/
function atsSetupReturn(sParms) {
    if (sParms != "*") {
        if (sParms != "") {
            window.alert("EELexi sätted salvestati!");
            //window.alert(sParms);
            var OutArray = sParms.split(PD);
            // Sõnastikulukk
            if (OutArray[0] == "true") {
                if (!atsLukk) {
                    window.alert("Sõnastik on suletud hooldustöödeks!");
                }
                atsLukk = true;
            } else {
                if (atsLukk) {
                    window.alert("Sõnastik on avatud tööks!");
                }
                atsLukk = false;
            }
            // Artikli lisamine
            if (OutArray[1] == "true") {
                dhxBar.enableItem("btnLisaArtikkel");
            } else {
                dhxBar.disableItem("btnLisaArtikkel");
            }

            // Viitekontroll
            if (OutArray[3] == "true") {
                cVCont = "true";
            } else {
                cVCont = "false";
            }

            // Artikklite arv kuvamisel
            if (OutArray[4] != "") {
                cMaxLeid = OutArray[4];
            }
            // Artikklite arv trükkimisel
            if (OutArray[5] != "") {
                cMaxPrint = OutArray[5];
            }
        } else {
            window.alert("Tekkis viga ja EELexi sätted salvestati osaliselt. Kontrollige!!!");
        }
    }

}

/**
* atslib_dx - trükivahemiku valik
* 
* @method atsTrykkVahemik
*/
function atsTrykkVahemik() {

    var sParms = "";
    spawn(function* () {
        //var sParms = yield window.showModalDialog("htmlnew/modalwin.html", "som argument", "dialogWidth:800px;dialogHeight:600px");
        smdArgs = dic_desc + PD + sAppLang + PD + "" + PD + sUsrName;
        var sParms = yield window.showModalDialog(atsCatal + "/atsTrykkVahemik.html", smdArgs, "dialogWidth:400px;dialogHeight:200px");
    });
}



/**
* atslib_dx - Kui vajutame hiire paremale klahvile toimetusalas
* 
* @method atsRightClickk
*/
function atsRightClickk(thisEvent) {

    var thisTarget = thisEvent.target ? thisEvent.target : thisEvent.srcElement;
    var oSrc = thisTarget;
    var oTPNode, cUName, tarr, tnode;
    var frdoc, frDocRoot, yldStruNode, lisatav;
    var follNimed, refNode;
    var cOption = "0";
    //window.alert(getXmlString(oSrc));
    //window.alert(oSrc.id);
    tarr = oSrc.id.split("|");
    //window.alert(tarr[0]);
    var nHeight = screen.height;
    var nWidth = screen.width;
    var x1 = thisEvent.clientX;
    var y1 = thisEvent.clientY;

    //window.alert(y1+300);
    //window.alert(nHeight);
    if ((y1 + 500) < nHeight) {
        y1 = y1 + 100;
    } else {
        y1 = y1 - 150;
    }

    var aElem = new Array();
    var aSubElem = new Array();
    var aSubName = new Array();
    var nELenght = 0;
    // Näide + (n)
    aElem.push(DICPR + ":n");
    aSubElem.push(DICPR + ":tx");
    aSubName.push("täpsustus");
    // Variant + (var)
    aElem.push(DICPR + ":var");
    aSubElem.push(DICPR + ":var2");
    aSubName.push("variandi variant");
    // tekstiinfo + (txt)
    aElem.push(DICPR + ":txt");
    aSubElem.push(DICPR + ":w");
    aSubName.push("sõna");
    // seisukoht + (txt) (ETS)
    aElem.push(DICPR + ":sk");
    aSubElem.push(DICPR + ":w");
    aSubName.push("sõna");
    // üldkommentaar + (co) (ETS)
    aElem.push(DICPR + ":co");
    aSubElem.push(DICPR + ":w");
    aSubName.push("sõna");

    nELenght = aElem.length;
    var dYes1 = false;
    var dYes2 = false;
    var ccELEM = "";
    var ccSUBE = "";
    var ccSUBN = "";
    var ddDel = false;
    var ccCLK = atsWhatElem("0", tarr[0]);
    for (let iv = 0; iv < nELenght; iv++) {
        var aSplit1 = aSubElem[iv].split("|");
        nSplitLenght = aSplit1.length;
        if (nSplitLenght > 0) {
            for (let is = 0; is < nSplitLenght; is++) {
                if (aSplit1[is] == ccCLK) {
                    dYes1 = true;
                }
            }
        }
    }

    if (oSrc.id == "") {
        atsInfoWindow();
        return false;
    }
    if (oSrc.tagName == "SPAN" && atsWhatElem("3", tarr[0]) != "text()" && oSrc.id != "") {

        //        window.alert(atsWhatElem("0", tarr[0]));
        //        window.alert(dYes1);

        if (dYes1 == true) {
            if (cCopyFragment != "") {
                cOption = "3"
            } else {
                cOption = "2"
            }
        } else {
            //cCopyFragment
            if (cCopyFragment != "") {
                cOption = "1"
            } else {
                cOption = "0"
            }
        }

        var cElemx = atsWhatElem(0, tarr[0])
        cDialogArg = cElemx + PD + cOption + PD + tarr[0] + PD + cCopyElemName;
        if (!dhxWins.window("cmenu")) {
            var w = 500;
            var h = 450;
            var dhxWinParams = {
                id: "cmenu",
                left: x1,
                top: y1,
                width: w / 2,
                height: h / 2,
                caption: "Valitud -> " + cElemx,
                resize: true,
                move: true,
                park: false
            };
            tyybidWindow = dhxWins.createWindow(dhxWinParams);
            //dhxWins.window("cmenu").centerOnScreen();
            dhxWins.window("cmenu").denyResize();
            dhxWins.window("cmenu").keepInViewport(false);
            dhxWins.window("cmenu").setModal(false);
            if (dhxWins.window("cmenu").isParked()) {
                dhxWins.window("cmenu").park();
            }
        }
        switch (cOption) {
            case "0":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy1.html", false);
                break;
            case "1":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy2.html", false);
                break;
            case "2":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy4.html", false);
                break;
            case "3":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy5.html", false);
        }
    }

    //window.alert(atsWhatElem("3", tarr[0]));

    // atsNow
    if (oSrc.tagName == "TEXTAREA") {
        for (let iv = 0; iv < nELenght; iv++) {
            if (aElem[iv] == ccElemName) {
                ccELEM = aElem[iv];
                ccSUBE = aSubElem[iv];
                ccSUBN = aSubName[iv] + " (" + aSubElem[iv] + ")";
                dYes1 = true;
            }
        }
        var cCt = atsYldStruNode.getAttribute("pr_sd:ct");
        if (cCt == "3") {
            dYes2 = true;
        }
        if (dYes1 == true && dYes2 == true) {
            cDialogArg = ccSUBE;
            if (!dhxWins.window("cmenq")) {
                var w = 500;
                var h = 400;
                var dhxWinParams = {
                    id: "cmenq",
                    left: x1,
                    top: y1,
                    width: w / 2,
                    height: h / 2,
                    caption: ccSUBN,
                    resize: true,
                    move: true,
                    park: false
                };
                tyybidWindow = dhxWins.createWindow(dhxWinParams);
                //dhxWins.window("cmenu").centerOnScreen();
                dhxWins.window("cmenq").denyResize();
                dhxWins.window("cmenq").keepInViewport(false);
                dhxWins.window("cmenq").setModal(false);
                if (dhxWins.window("cmenq").isParked()) {
                    dhxWins.window("cmenq").park();
                }
            }
            dhxWins.window("cmenq").attachURL(atsCatal + "/atsCMenyy3.html", false);
        }
    }

    if (tarr[0] == "addgrupp") {

        var cRet = window.confirm("Kas lisada uus element ette?");
        if (cRet == true) {

            tnode = getXmlSingleNode(oEditDOMRoot, tarr[2]);
            //alert(tnode.nodeName);
            if (tnode) {
                //refNode = tnode.nextSibling;
                refNode = tnode;

                if (yldStruDom.documentElement.getAttribute("pr_sd:ver") == "2.0") {
                    frdoc = oEditDOM.createDocumentFragment();
                    frDocRoot = frdoc.appendChild(oEditDOM.createElementNS(DICURI, tnode.nodeName));
                    yldStruNode = getXmlSingleNode(yldStruDom, ".//" + tnode.nodeName);
                    if (yldStruNode) {
                        getMajors(yldStruNode, frDocRoot);
                    }
                    lisatav = frDocRoot;

                    //window.alert(getXmlString(lisatav));
                    //window.alert(refNode);
                }
                //window.alert("lisatav = " + getXmlString(lisatav));

                if (lisatav) {
                    //lisatav = tnode;
                    //refNode = tnode;
                    //window.alert(getXmlString(lisatav));
                    tnode.parentNode.insertBefore(lisatav, refNode);
                    AddGruppChecks(lisatav);  //@nrl, tähendusnumbrite ümberarvutused;
                    setATTAPlokid(lisatav);
                    vaatedRefresh(2, true, true);
                }
            }
        } else {
            return false;
        }
    }
    return false;
} //atsRightClickk 


/**
* atslib_dx - Kui vajutame hiire paremale klahvile toimetusalas
* 
* @method atsRightClick
*/
function atsRightClick(thisEvent) {

    var thisTarget = thisEvent.target ? thisEvent.target : thisEvent.srcElement;
    var oSrc = thisTarget;
    var oTPNode, cUName, tarr, tnode;
    var frdoc, frDocRoot, yldStruNode, lisatav;
    var follNimed, refNode;
    var cOption = "0";
    var dYes1 = false;
    var dYes2 = false;
    tarr = oSrc.id.split("|");
    var nHeight = screen.height;
    var nWidth = screen.width;
    var x1 = thisEvent.clientX;
    var y1 = thisEvent.clientY;

    nCX = x1;
    nCY = y1;

    if ((y1 + 500) < nHeight) {
        y1 = y1 + 100;
    } else {
        y1 = y1 - 150;
    }

    // kas kustutamist on menüüse vaja?
    dYes1 = atsSubElemCont("1", atsWhatElem("0", tarr[0]));

    //alert(oSrc.tagName);
    if (oSrc.id == "") {
        atsInfoWindow();
        return false;
    }
    // ats*** (230608)
    if (oSrc.tagName == "SPAN" && oSrc.id != "") {
        //if (oSrc.tagName == "SPAN" && atsWhatElem("3", tarr[0]) != "text()" && oSrc.id != "") {

        if (dYes1 == true) {
            if (cCopyFragment != "") {
                cOption = "3"
            } else {
                cOption = "2"
            }
        } else {
            //cCopyFragment
            if (cCopyFragment != "") {
                cOption = "1"
            } else {
                cOption = "0"
            }
        }

        var cElemx = atsWhatElem(0, tarr[0])
        cDialogArg = cElemx + PD + cOption + PD + tarr[0] + PD + cCopyElemName;
        if (!dhxWins.window("cmenu")) {
            var w = 500;
            var h = 450;
            var dhxWinParams = {
                id: "cmenu",
                left: x1,
                top: y1,
                width: w / 2,
                height: h / 2,
                caption: "Valitud -> " + cElemx,
                resize: true,
                move: true,
                park: false
            };
            tyybidWindow = dhxWins.createWindow(dhxWinParams);
            //dhxWins.window("cmenu").centerOnScreen();
            dhxWins.window("cmenu").denyResize();
            dhxWins.window("cmenu").keepInViewport(false);
            dhxWins.window("cmenu").setModal(false);
            if (dhxWins.window("cmenu").isParked()) {
                dhxWins.window("cmenu").park();
            }
        }
        switch (cOption) {
            case "0":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy1.html", false);
                break;
            case "1":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy2.html", false);
                break;
            case "2":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy4.html", false);
                break;
            case "3":
                dhxWins.window("cmenu").attachURL(atsCatal + "/atsCMenyy5.html", false);
        }
    }

    // atsNow
    //alert(oSrc.tagName);
    if (oSrc.tagName == "TEXTAREA") {
        // Kontrollime elemendi valiku vastavust
        dYes1 = atsSubElemCont("2", ccElemName);
        var cCt = atsYldStruNode.getAttribute("pr_sd:ct");
        if (cCt == "3") {
            dYes2 = true;
        } else {
            return;
        }
        if (dYes1 == true && dYes2 == true) {
            cDialogArg = ccSUBE;
            if (!dhxWins.window("cmenq")) {
                var w = 500;
                var h = 400;
                var dhxWinParams = {
                    id: "cmenq",
                    left: x1,
                    top: y1,
                    width: w / 2,
                    height: h / 2,
                    caption: ccELEM,
                    resize: true,
                    move: true,
                    park: false
                };
                tyybidWindow = dhxWins.createWindow(dhxWinParams);
                //dhxWins.window("cmenu").centerOnScreen();
                dhxWins.window("cmenq").denyResize();
                dhxWins.window("cmenq").keepInViewport(false);
                dhxWins.window("cmenq").setModal(false);
                if (dhxWins.window("cmenq").isParked()) {
                    dhxWins.window("cmenq").park();
                }
            }
            //dhxWins.window("cmenq").attachURL(atsCatal + "/atsCMenX.html", false);
            //dhxWins.window("cmenq").attachURL(atsCatal + "/atsCMenXC.html", false);


            if (cLECT == "2") {
                dhxWins.window("cmenq").attachURL(atsCatal + "/atsCMenXC.html", false);
            } else {
                dhxWins.window("cmenq").attachURL(atsCatal + "/atsCMenX.html", false);
            }



        }
    }
    if (tarr[0] == "addgrupp") {

        var cRet = window.confirm("Kas lisada uus element ette?");
        if (cRet == true) {

            tnode = getXmlSingleNode(oEditDOMRoot, tarr[2]);
            if (tnode) {
                refNode = tnode;
                if (yldStruDom.documentElement.getAttribute("pr_sd:ver") == "2.0") {
                    frdoc = oEditDOM.createDocumentFragment();
                    frDocRoot = frdoc.appendChild(oEditDOM.createElementNS(DICURI, tnode.nodeName));
                    yldStruNode = getXmlSingleNode(yldStruDom, ".//" + tnode.nodeName);
                    if (yldStruNode) {
                        getMajors(yldStruNode, frDocRoot);
                    }
                    lisatav = frDocRoot;
                }
                if (lisatav) {
                    tnode.parentNode.insertBefore(lisatav, refNode);
                    AddGruppChecks(lisatav);  //@nrl, tähendusnumbrite ümberarvutused;
                    setATTAPlokid(lisatav);
                    vaatedRefresh(2, true, true);
                }
            }
        } else {
            return false;
        }
    }
    return false;
} //atsRightClick

/**
* atslib_dx - Mida teha pele menyy cmenq tegevuse valikut
* @method atsAfterCmenq
* @param  zzOpt - 1 = lisa ette, 2 = lisa taha
* @param  zzSubE = subelement (näiteks x:tx)
*/
function atsAfterCmenq(zzOpt, zzSubE) {

    var nHeight = screen.height;
    var nWidth = screen.width;
    var x1 = nCX;
    var y1 = nCY;

    if ((y1 + 500) < nHeight) {
        y1 = y1 + 100;
    } else {
        y1 = y1 - 150;
    }

    cDialogArg = zzOpt;
    if (!dhxWins.window("cmeny")) {
        var w = 500;
        var h = 400;
        var dhxWinParams = {
            id: "cmeny",
            left: x1 + 50,
            top: y1 - 100,
            width: w / 2,
            height: h / 2,
            caption: zzOpt,
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        //dhxWins.window("cmenu").centerOnScreen();
        dhxWins.window("cmeny").denyResize();
        dhxWins.window("cmeny").keepInViewport(false);
        dhxWins.window("cmeny").setModal(false);
        if (dhxWins.window("cmeny").isParked()) {
            dhxWins.window("cmeny").park();
        }
    }
    dhxWins.window("cmeny").attachURL(atsCatal + "/atsCMenY.html", false);
}

/**
* atslib_dx - Mida teha pele menyy cmeny tegevuse valikut
* @method atsAfterCmeny
* @param  zzOpt - 1 = lisa ette, 2 = lisa taha
* @param  zzSubE = subelement (näiteks x:tx)
* @param  zzCheck = kas lisada tekstiväli (true,false)
*/
function atsAfterCmeny(zzOpt, zzSubE, zzCheck) {

    var norm_elem = null;
    var ctarr0 = zzSubE;
    var newnode = oEditDOM.createDocumentFragment();
    //
    var frDocRoot = newnode.appendChild(oEditDOM.createElementNS(DICURI, ctarr0));
    var yldStruNode = getXmlSingleNode(yldStruDom, ".//" + ctarr0);
    getMajors(yldStruNode, frDocRoot);




    if (zzOpt == "LE") {
        norm_elem = selectedNode;
        var textNode = document.createTextNode("...");

        if (zzCheck == true) {
            norm_elem.insertBefore(textNode, clickedNode);
        }
        norm_elem.insertBefore(newnode, clickedNode);
        vaatedRefresh(2, true, true);
    }
    if (zzOpt == "LT") {
        norm_elem = selectedNode;
        var textNode = document.createTextNode("...");
        //alert(getXmlString(norm_elem));
        // alert(getXmlString(newnode));

        if (zzCheck == true) {
            norm_elem.insertBefore(textNode, clickedNode.nextSibling);
        }
        norm_elem.insertBefore(newnode, clickedNode.nextSibling);
        vaatedRefresh(2, true, true);
    }
    if (zzOpt == "LC") {

        norm_elem = selectedNode;



        //var wanderer = selectedNode;
        if (window.getSelection) {  // all browsers, except IE before version 9
            var selection = selectedNode;
            if (selection.rangeCount > 0) {
                var range = selection.getRangeAt(0);

                window.alert(range);

                range.insertNode(newnode);
            }
        }





        vaatedRefresh(2, true, true);
    }
}

/**
* atslib_dx - Mida teha pele menyy cmenq tegevuse valikut
* @method atsAfterCmenqxxx
* @param  zzOpt - 1 = lisa ette, 2 = lisa taha
* @param  zzSubE = subelement (näiteks x:tx)
*/
function atsAfterCmenqxxx(zzOpt, zzSubE) {

    var norm_elem = null;
    var ctarr0 = zzSubE;
    var newnode = oEditDOM.createDocumentFragment();
    var frDocRoot = newnode.appendChild(oEditDOM.createElementNS(DICURI, ctarr0));
    var yldStruNode = getXmlSingleNode(yldStruDom, ".//" + ctarr0);
    getMajors(yldStruNode, frDocRoot);

    if (zzOpt == "LE") {
        norm_elem = selectedNode;
        //alert(getXmlString(newnode));
        norm_elem.insertBefore(newnode, clickedNode);
        vaatedRefresh(2, true, true);
    }
    if (zzOpt == "LT") {
        norm_elem = selectedNode;
        //alert(getXmlString(norm_elem));
        // alert(getXmlString(newnode));
        norm_elem.insertBefore(newnode, clickedNode.nextSibling);
        vaatedRefresh(2, true, true);
    }
}

/**
* atslib_dx - Contmenu-s valitud punkti käivitamine
* 
* @method atsCMenuChoose
*/
function atsCMenuChoose(sRet, sPath) {
    //window.alert(sRet);
    if (sRet != "") {
        if (sRet == "C") {
            //kopeerin
            atsCopyFragment(sPath);

        }
        if (sRet == "PN") {
            //taastan ette
            atsPasteFragmentNext(sPath);
        }
        if (sRet == "PB") {
            //taastan taha
            atsPasteFragmentBefore(sPath);
        }
        if (sRet == "R") {
            //asendan
            atsReplaceFragment(sPath);
        }
        if (sRet == "D") {

            //window.alert(sPath);

            //kustutan
            atsDeleteFragment(sPath);
        }
    }
}


/**
* atslib_dx - väljastab elemendi nime
* @method atsWhatElem
* @param {String} cOpt (kas 0,1,2,3)
* @param {String} cElem (rada: x:A/x:S/x:d...)
*/
function atsWhatElem(cOpt, cElem) {
    var nElemArv, cRetvalue, cRet0, cRet1;
    if (cOpt == "3") {
        var aArray = cElem.split("/");
        nElemArv = aArray.length;
        cRet1 = aArray[nElemArv - 1]
        var aArray = cRet1.split("[");
        cRet0 = aArray[0];
        if (cRet0 == "text()") {
            return cRet0;
        }
    }
    if (cOpt == "2") {
        var aArray = cElem.split("/");
        nElemArv = aArray.length;
        cRet1 = aArray[nElemArv - 1]
        var aArray = cRet1.split("[");
        cRet0 = aArray[0];
        if (cRet0 == "text()") {
            cRetvalue = cElem.replace("/" + cRet1, "");
        } else {
            cRetvalue = cElem;
        }
        return cRetvalue;
    } else {
        var aArray = cElem.split("/");
        nElemArv = aArray.length;
        cRet1 = aArray[nElemArv - 1]
        var aArray = cRet1.split("[");
        cRet0 = aArray[0];
        if (cRet0 == "text()") {

            //window.alert(cElem);

            var aArray = cElem.split("/");
            nElemArv = aArray.length;
            cRet1 = aArray[nElemArv - 2]
            //window.alert(cRet1);
            var aArray = cRet1.split("[");

            //window.alert(aArray[0]);
            cRet0 = aArray[0];
        }
        //window.alert("cRet1 = " + cRet1);
        if (cOpt == "0") {
            cRetvalue = cRet0;
        } else {
            cRetvalue = cRet1;
        }
        return cRetvalue;

    }



}

/**
* atslib_dx - kopeerib XML elemendi
* @method atsCopyFragment
* @param {String} cTarr (path)
*/
function atsCopyFragment(cTarr) {
    var tnode;
    var frdoc, frDocRoot;
    var refNode;
    tnode = getXmlSingleNode(oEditDOMRoot, cTarr);
    //window.alert(getXmlString(tnode));


    if (tnode) {


        refNode = tnode.nextSibling;
        //refNode = tnode;

        if (yldStruDom.documentElement.getAttribute("pr_sd:ver") == "2.0") {
            frdoc = oEditDOM.createDocumentFragment();
            frDocRoot = frdoc.appendChild(tnode.cloneNode(true));
            cCopyFragment = frDocRoot;
            cCopyElemName = atsWhatElem("0", cTarr);

            atsSendMessage("0", "Element " + cCopyElemName + " edukalt kopeeritud.", 15000);

 
        }

    }
}

/**
* atslib_dx - taastab XML elemendi
* @method atsPasteFragmentNext
* @param {String} cTarr (path)
*/
function atsPasteFragmentNext(cTarr) {
    var tnode;
    var refNode;
    if (cCopyElemName == atsWhatElem("0", cTarr)) {
        tnode = getXmlSingleNode(oEditDOMRoot, cTarr);
        //window.alert(getXmlString(tnode));


        if (tnode) {


            refNode = tnode.nextSibling;
            //refNode = tnode;

            if (cCopyFragment) {
                //lisatav = tnode;
                //refNode = tnode;
                //window.alert(getXmlString(lisatav));
                tnode.parentNode.insertBefore(cCopyFragment, refNode);
                AddGruppChecks(cCopyFragment);  //@nrl, tähendusnumbrite ümberarvutused;
                setATTAPlokid(cCopyFragment);
                vaatedRefresh(2, true, true);
            }
        }

    } else {
        window.alert("Siia antud elementi " + cCopyElemName + " taastada pole lubatud.");
    }

}

/**
* atslib_dx - taastab XML elemendi
* @method atsPasteFragmentBefore
* @param {String} cTarr (path)
*/
function atsPasteFragmentBefore(cTarr) {
    var tnode;
    var refNode;
    if (cCopyElemName == atsWhatElem("0", cTarr)) {
        tnode = getXmlSingleNode(oEditDOMRoot, cTarr);
        //window.alert(getXmlString(tnode));


        if (tnode) {


            refNode = tnode;
            //refNode = tnode;

            if (cCopyFragment) {
                //lisatav = tnode;
                //refNode = tnode;
                //window.alert(getXmlString(lisatav));
                tnode.parentNode.insertBefore(cCopyFragment, refNode);
                AddGruppChecks(cCopyFragment);  //@nrl, tähendusnumbrite ümberarvutused;
                setATTAPlokid(cCopyFragment);
                vaatedRefresh(2, true, true);
            }
        }

    } else {
        window.alert("Siia antud elementi " + cCopyElemName + " taastada pole lubatud.");
    }

}


/**
* atslib_dx - taastab XML elemendi
* @method atsReplaceFragment
* @param {String} cTarr (path)
*/
function atsReplaceFragment(cTarr) {
    var tnode;
    var refNode;
    if (cCopyElemName == atsWhatElem("0", cTarr)) {
        tnode = getXmlSingleNode(oEditDOMRoot, cTarr);
        //window.alert(getXmlString(tnode));


        if (tnode) {


            refNode = tnode.nextSibling;
            //refNode = tnode;

            if (cCopyFragment) {
                //lisatav = tnode;
                //refNode = tnode;
                //window.alert(getXmlString(lisatav));
                tnode.parentNode.replaceChild(cCopyFragment, tnode);
                //AddGruppChecks(cCopyFragment);  //@nrl, tähendusnumbrite ümberarvutused;
                //setATTAPlokid(cCopyFragment);
                vaatedRefresh(2, true, true);
            }
        }

    } else {
        window.alert("Siia antud elementi " + cCopyElemName + " taastada pole lubatud.");
    }

}

/**
* atslib_dx - kustutada XML element
* @method atsDeleteFragment
* @param {String} cTarr (path)
*/
function atsDeleteFragment(cTarr) {
    var tnode = getXmlSingleNode(oEditDOMRoot, cTarr);
    var fnode = tnode.parentNode;
    var nn = tnode.nodeName;
    fnode.removeChild(tnode);
    arvutaTxhendusNumbrid(fnode, nn);
    setATTAPlokid(tnode);

    // tnode.parentNode.removeChild(tnode);
    // setATTAPlokid(tnode);
    vaatedRefresh(2, true, true);


}

/**
* atslib_dx - trükivahemiku valik
* 
* @method atsCMenyy
*/
function atsCMenyy() {
    //window.alert(cTName);
    var sParms = "";
    spawn(function* () {
        //var sParms = yield window.showModalDialog("htmlnew/modalwin.html", "som argument", "dialogWidth:800px;dialogHeight:600px");
        smdArgs = dic_desc + PD + sAppLang + PD + "" + PD + sUsrName;
        var sParms = yield window.showModalDialog(atsCatal + "/atsTrykkVahemik.html", smdArgs, "dialogWidth:240px;dialogHeight:338px;dialogLeft:100px;dialogTop:20px;");
        if (sParms != "") {
            atsSymbolChoose(sParms);
        }
    });
}


/**
* atslib_dx - Akna loomine
* 
* @method atsCreateWindow
*/
function atsCreateWindowx() {

    var idPrefix = 1;


    //window.alert("cBuffer =" + cBuffer) ;
    var p = 0;
    dhxWins.forEachWindow(function () {
        p++;
    });
    if (p > 3) {
        alert("Too many windows");
        return;
    }
    var id = "userWin" + (idPrefix++);
    //;
    var w = 500;
    var h = 500;
    var x = 50;
    var y = 100;
    //;
    x = 460;
    var win = dhxWins.createWindow(id, x, y, w, h);

    //Header Text
    win.setText(id);

    //win.attacHTML;
    win.attachURL("htmlnew/atsSymbolz.html", true)
    //win.attachURL("htmlnew/menyy.htm", true)

    // Show Header Icon
    //win.clearIcon();

    //Allow Resizing
    //win.denyResize();

    //Allow Moving
    //win.denyMove();

    //Allow Parking
    win.denyPark();

    //Disable Closing
    //win.button("close").disable();

    //Show "Help" Button
    //win.button("help").show();

    //Show "Stick" Button
    //win.button("stick").show();


    x = x + 8;
    y = y + 6;



}


/**
* atslib_dx - Akna loomine
* 
* @method atsCreateWindow
*/
function atsCreateWindow(cIDX) {
    dInputClose = false;
    dhxTalaBar.setItemImage("btnFix", "112_Plus_Orange_16x16_72.png");
 
    cDialogArg = cIDX;
    // window.alert("OK!");
    if (!dhxWins.window("winTyybid")) {
        var nW1 = window.innerWidth;
        var nH1 = window.innerHeight;

        //window.alert(nW1 + " - " + nH1);

        var w = 1000;
        var h = 1000;
        var dhxWinParams = {
            id: "winTyybid",
            left: nW1 - (w / 2) - 30,
            top: nH1 - (h / 2) - 50,
            width: w / 2,
            height: h / 2,
            caption: "Sümbolid ja märgid",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        //            dhxWins.window("winMorfSetup").setToFullScreen(true);
        //            dhxWins.window("winMorfSetup").centerOnScreen();
        //dhxWins.window("winTyybid").center();
        //        dhxWins.window("winMorfSetup").button("minmax1").hide();
        //        dhxWins.window("winMorfSetup").setModal(true);
        //            dhxWins.window("winMorfSetup").maximize();
        dhxWins.window("winTyybid").keepInViewport(true);
        //dhxWins.window("winTyybid").setModal(true);
        //dhxWins.attachEvent("onClose", atsClose);
        //dhxWins.button("close").disable();
        dhxWins.window("winTyybid").button("close").disable();

    }

    if (dhxWins.window("winTyybid").isParked()) {
        dhxWins.window("winTyybid").park();
    }
    //        var href = oSrc.href;
    //dhxWins.window("winTyybid").attachURL("htmlnew/atsSymbolz.html?mnu7", false); // false: mitte AJAX
    //dhxWins.window("winTyybid").attachURL("htmlnew/menyy.htm", true); // false: mitte AJAX

    dhxWins.window("winTyybid").setText("Märkide ja sümbolite valik.");
    dhxWins.window("winTyybid").attachURL(atsCatal + "/atsSymbVal.html", false);

}

function atsClose() {
    //window.alert("Close1");
    dInputClose = true;
    dhxTalaBar.setItemImage("btnFix", "112_Plus_Green_16x16_72.png");
    dClose = false;
    // dhxWins.window("winTyybid").close();
}

/**
* atslib_dx - Akna loomine
* 
* @method atsInfoWindow
*/
function atsInfoWindow() {

    //window.alert("OK!");
    if (!dhxWins.window("winfo")) {


        //window.alert(w + "  " + h);

        var w = 1000;
        var h = 800;
        //var w = 1000;
        //var h = 700;
        var dhxWinParams = {
            id: "winfo",
            left: 700,
            top: 80,
            width: w / 2,
            height: h / 2,
            caption: "Abiinfo",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        //            dhxWins.window("winMorfSetup").setToFullScreen(true);
        //            dhxWins.window("winMorfSetup").centerOnScreen();
        //dhxWins.window("winfo").center();
        //        dhxWins.window("winMorfSetup").button("minmax1").hide();
        //        dhxWins.window("winMorfSetup").setModal(true);
        dhxWins.window("winfo").denyResize();
        dhxWins.window("winfo").keepInViewport(true);
        //dhxWins.window("winfo").setModal(true);
    }

    if (dhxWins.window("winfo").isParked()) {
        dhxWins.window("winfo").park();
    }
    //        var href = oSrc.href;
    //dhxWins.window("winTyybid").attachURL("htmlnew/atsSymbolz.html?mnu7", false); // false: mitte AJAX
    dhxWins.window("winfo").attachURL(atsCatal + "/atsHelp1.html", false, true); // false: mitte AJAX


}

/**
* atslib_dx - Uue artikli lisamine
* 
* @method atsArtAddWindow
*/
function atsArtAddWindow() {
    cDialogArg = "";
    if (!dhxWins.window("artadd")) {
        var w = 1000;
        var h = 700;
        var dhxWinParams = {
            id: "artadd",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Uue artikli lisamine",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("artadd").centerOnScreen();
        dhxWins.window("artadd").denyResize();
        dhxWins.window("artadd").keepInViewport(false);
        dhxWins.window("artadd").setModal(true);
        if (dhxWins.window("artadd").isParked()) {
            dhxWins.window("artadd").park();
        }
    }
    dhxWins.window("artadd").attachURL(atsCatal + "/newart.html", false);
}

/**
* ATS0 Loendite kuvamine ja töötlemine
* 
* @method atModalWind
*/
function atModalWind(cOpr) {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    cDialogArg = dic_desc + PD + sAppLang + PD + cOpr + PD + sUsrName;
    //window.alert(cOpr);
    if (!dhxWins.window("winloend")) {
        var w = 1600;
        var h = 1200;
        var dhxWinParams = {
            id: "winloend",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Loendid",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("winloend").centerOnScreen();
        dhxWins.window("winloend").denyResize();
        dhxWins.window("winloend").keepInViewport(false);
        dhxWins.window("winloend").setModal(false);
        if (dhxWins.window("winloend").isParked()) {
            dhxWins.window("winloend").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("winloend").attachURL(atsCatal + "/atsDicView.html", false);

}

/**
* ATS0 Loendite kuvamine ja töötlemine
* 
* @method atWinloend
*/
function atWinloend(cOpr) {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    cDialogArg = dic_desc + PD + sAppLang + PD + cOpr + PD + sUsrName;
    //window.alert(cOpr);
    if (!dhxWins.window("winloend")) {
        var w = 1600;
        var h = 1200;
        if (atsDispDim() == "1") {
            h = 900;
        }
        var dhxWinParams = {
            id: "winloend",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Loendid",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("winloend").centerOnScreen();
        dhxWins.window("winloend").denyResize();
        dhxWins.window("winloend").keepInViewport(false);
        dhxWins.window("winloend").setModal(false);
        dhxWins.window("winloend").button("close").disable();
        if (dhxWins.window("winloend").isParked()) {
            dhxWins.window("winloend").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("winloend").attachURL(atsCatal + "/atsDicViewNew.html", false);

}



/**
* ATS0 Loendi aa kuvamine
* 
* @method atLoendWin
*/
function atLoendWin(cOpr) {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    cDialogArg = dic_desc + PD + sAppLang + PD + cOpr + PD + sUsrName + PD + scv;
    //window.alert("OK!");
    if (!dhxWins.window("listloend")) {
        var w = 1600;
        var h = 1000;
        var dhxWinParams = {
            id: "listloend",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Loend",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("listloend").centerOnScreen();
        dhxWins.window("listloend").denyResize();
        dhxWins.window("listloend").keepInViewport(false);
        dhxWins.window("listloend").setModal(false);
        if (dhxWins.window("listloend").isParked()) {
            dhxWins.window("listloend").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("listloend").attachURL(atsCatal + "/atsListingLoend.html", false);

}

/**
* ATS0 Tegevus peale loendist rea valikut
* 
* @method atLoendReturn
*/
function atLoendReturn(retVal) {
    if (retVal) {
        if (retVal != scv) {
            clickedNode.textContent = retVal;
            oClicked.innerHTML = retVal;
            updMuudatused("S", retVal);
            ValueChecks(retVal, scv) //märksõna, hom.nr, kom;
            vaatedRefresh(1, true, true);
        }
    }
    return;

}

/**
* ATS0 Artikli viimine teise köitesse
* 
* @method atMoveToVolume
*/
function atMoveToVolume() {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }

    var nVolArv = aArrVol.length;
    if (nVolArv < 2) {
        //window.alert("Köidete arv peab olema > 1!");
        atsAlert("0", "Teade", "Köidete arv peab olema > 1!", "Jah")
        return;
    }
    var currentVolId = dhxBar.getListOptionSelected("volSelect");
    var iz = 0;
    var sLinkVols = "";
    for (var ix = 0; ix < nVolArv; ix++) {
        var aSplit = aArrVol[ix].split("|");
        if (aSplit[0] != currentVolId) {
            iz = iz + 1;
            sLinkVols = sLinkVols + "<option id='" + aSplit[0] + "'";
            if (iz == 1) {
                sLinkVols = sLinkVols + " selected";
            }
            sLinkVols = sLinkVols + ">" + aSplit[1] + "</option>";
        }
    }
    //window.alert(sLinkVols);




    cDialogArg = dic_desc + PD + sUsrName + PD + sAppLang + PD + sLinkVols;
    //window.alert("OK!");
    if (!dhxWins.window("movetovol")) {
        var w = 1000;
        var h = 400;
        var dhxWinParams = {
            id: "movetovol",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Artikli viimine teise köitesse",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("movetovol").centerOnScreen();
        dhxWins.window("movetovol").denyResize();
        dhxWins.window("movetovol").keepInViewport(false);
        dhxWins.window("movetovol").setModal(false);
        if (dhxWins.window("movetovol").isParked()) {
            dhxWins.window("movetovol").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("movetovol").attachURL(atsCatal + "/atsMoveToVol.html", false);

}
/**
* ATS0 Tegevus peale köite valikut
* 
* @method atVolumeReturn
*/
function atVolumeReturn(retVal) {
    var sFromVolume = dhxBar.getListOptionSelected("volSelect");
    var sMSortVal, msNode;
    msNode = getXmlSingleNode(oEditDOMRoot, first_default);
    sMSortVal = msNode.getAttribute(qn_sort_attr);
    //window.alert(sMSortVal);

    sCmdId = "ClientDelete";
    sQryInfo = sMSortVal;

    var destVol = retVal;
    var sqlVol = sFromVolume;
    var artGuid = getXmlSingleNodeValue(oEditDOMRoot, DICPR + ":A/" + qn_guid);
    var qM = "MySql";
    var seldQn = qn_ms; //pärast otsitakse nn homonüümseid märksõnu, st millised veel sama märksõnaga on;
    var srchPtrn = "^" + sMSortVal + "$";
    var homonyymsed = '';
    var art_xpath = '', elm_xpath = '', sql = '', sPrmDomXml, oPrmDom;
    sPrmDomXml = "<prm>" +
        "<cmd>" + sCmdId + "</cmd>" +
        "<vol>" + sFromVolume + "</vol>" +
        "<nfo>" + sQryInfo + "</nfo>" +
        "<axp>" + art_xpath + "</axp>" +
        "<exp>" + elm_xpath + "</exp>" +
        "<wC>0</wC>" +
        "<wS>1</wS>" +
        "<fSrP>" + srchPtrn + "</fSrP>" +
        "<G>" + artGuid + "</G>" +
        "<sql>" + sql + "</sql>" +
        "<dV>" + destVol + "</dV>" +
        "<qn>" + seldQn + "</qn>" +
        "<qM>" + qM + "</qM>" +
        "</prm>";

    oPrmDom = IDD("String", sPrmDomXml, false, false, null);
    //window.alert(artGuid);
    cccOperName = "movevol";
    StartOperation(oPrmDom);
    showPrevNextEntry(+1);
}

/**
* atslib_dx - Salvestuse kontroll
* 
* @method atsSaveContr
*/
function atsSaveContr() {
    if (srTegija == false) {
        dArtSave = true;
        return;
    }
    if (!dArtSave) {
        // Küsimus salvestamise kohta
        var nRetBtn = window.confirm("Kas soovid enne salvestada artiklit '" + document.getElementById("artMsTekst").textContent + "'?");
        dArtSave = true;
        if (nRetBtn == true) {
            imgArtSaveClick();
        }
    }
}

/**
* atslib_dx - Salvestuse kontroll
* 
* @method atsSaveContry
*/
function atsSaveContry() {
    if (!dArtSave) {
        dhtmlx.confirm({
            title: "Salvestuse kontroll.",
            type: "confirm-warning",
            ok: "Jah", cancel: "Ei",
            text: "Kas soovid enne salvestada artiklit '" + document.getElementById("artMsTekst").textContent + "'?",
            callback: function (result) { atsReturn(result); }
        });
    }
}
/**
* atslib_dx - Salvestuskontrolli tegevused
* 
* @method atsReturn
*/
function atsReturn(result) {
    dArtSave = true;
    if (result == true) {
        imgArtSaveClick();
    }
}

/**
* atslib_dx - Teadete saatmine
* 
* @method atsSendMessage
* @param zType   {String} Tüüp (0,1))
* @param zTxt    {String} Tekst)
* @param zExpire {integer} Kuvamise aeg (millisek))
*/
function atsSendMessage(zType, zTxt, zExpire) {
    var cType = "";
    if (zType == "1") {
        cType = "error";
    }
    dhtmlx.message({
        type: cType,
        text: zTxt,
        expire: zExpire
    })
}

/**
* atslib_dx - Alert teade
* 
* @method atsAlert
* @param zType   {String} Tüüp (0,1))
* @param zTxt    {String} Tekst)
* @param zOk {integer} Nupu tekst
*/
function atsAlert(zType, zTitle, zTxt, zOk) {
    var cType = "";
    if (zType == "1") {
        cType = "alert-error";
    }
    dhtmlx.alert({
        title: zTitle,
        type: cType,
        ok: zOk,
        text: zTxt,
        callback: function () { }
    });
}

/**
* atslib_dx - Confirm teade
* 
* @method atsConfirm
*/
function atsConfirm(zType, zTitle, zTxt) {
    var cType = "";
    if (zType == "1") {
        cType = "confirm-warning";
    }
    dhtmlx.confirm({
        title: zTitle,
        type: cType,
        ok: "Jah", cancel: "Ei",
        text: zTxt,
        callback: function (dConfirmResult) { atsConfirmReturn(dConfirmResult) }
    });

}

/**
* atslib_dx - Salvestuskontrolli tegevused
* 
* @method atsReturn
*/
function atsConfirmReturn(result) {
    alert(result);
}

/**
* atslib_dx - History massiivi täitmine
* 
* @method atsHistoryAdd
* @param cMarksona {String} märksõna)
*/
function atsHistoryAdd(cMarksona) {
    //window.alert(aArray_History.length);
    if (aArray_History.length < 1) {
        aArray_History.push(cMarksona + PD + GetXSDDateTime(new Date()));
        //window.alert(aArray_History[0]);
        return;
    }
    for (ik = 0; ik < aArray_History.length; ik++) {
        var aSplitArrayX = aArray_History[ik].split(PD);
        if (aSplitArrayX[0] == cMarksona) {
            aSplitArrayX[1] = GetXSDDateTime(new Date());
            aArray_History[ik] = aSplitArrayX[0] + PD + aSplitArrayX[1];
            return;
        }
    }
    aArray_History.push(cMarksona + PD + GetXSDDateTime(new Date()));
}

/**
* ATS0 History kuvamine
* 
* @method atHistoryWin
*/
function atHistoryWin() {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    atsSaveContr();
    cDialogArg = "";
    //window.alert("OK!");
    if (!dhxWins.window("histview")) {
        var w = 900;
        var h = 900;
        var dhxWinParams = {
            id: "histview",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Ajalugu",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("histview").centerOnScreen();
        dhxWins.window("histview").denyResize();
        dhxWins.window("histview").keepInViewport(false);
        dhxWins.window("histview").setModal(false);
        if (dhxWins.window("histview").isParked()) {
            dhxWins.window("histview").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("histview").attachURL(atsCatal + "/atsArtHistory.html", false);

}

/**
* Käivitab otsingupäringu.
* 
* @method atOtsing
* @param ft {String} - mida otsitakse.
*/
function atOtsing(ft) {
    var withCase = 0;
    var ft, xft, attXmlPred = "", attSqlPred = "", mySqlAttCond = "", sNodeTest, seldQn, qt, qtMySql;
    var artRada, elemRada, evPath, srchPtrn, fakPtrn = "", mySqlPtrn = "", hlPtrn = "", pQrySql = "";
    var hasSeldText = false;

    var qM = "XML";
    var cTxtElem = ft;

    if (dSymbx) {
        cTxtElem = cTxtElem.replace(/[üõöäžŽÜÕÖÄ*]/g, '');
        if (/[^a-zA-Z]/.test(cTxtElem)) {
            //window.alert("Muutke reziimi, sest otsinguväli sisaldab mitte tähti!");
            //return;
        }
    }

    xft = ft

    sQryInfo = dhxBar.getItemText("volSelect") + ": " + dhxBar.getItemText("elemSelect") + " = '" + ft + "'";

    sNodeTest = default_query;
    seldQn = sNodeTest.substr(sNodeTest.lastIndexOf("/") + 1);
    hasSeldText = true;


    // ATS53
    seldQn = cMarkSona;

    //alert(cFindID);



    qt = "self::node()";
    if (qt == ".//text()") {
        qtMySql = "//text()";
    } else if (qt == "self::node()") {
        qtMySql = "//text()";
    } else if (qt == "text()") {
        qtMySql = "/text()";
    }

    artRada = qn_art;
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
        //window.alert(elpred);
        //window.alert("sNodeTest= " + sNodeTest + " artRada= " + artRada);


        if (sNodeTest != artRada) { //A;
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
        //xft = xft.replace("*", "");
        srchPtrn = "^" + xft;
        cQM = "xml";
    }
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
    StartOperation(cmdXmlDom);

} // atOtsing


/**
* atslib_dx - Subelemendi olemasolu kontroll contentmenyys
* @method atsSubElemCont
* @param  zzOpt - 1 = kustutamise kontroll, 2 = Elemendi lisamise (ette,taha) kontroll
* @param  zzValElem = valitud element
*/
function atsSubElemCont(zzOpt, zzValElem) {
    var nELenght = aElem.length;;
    var dYesx = false;
    if (zzOpt = "1") {
        for (let iv = 0; iv < nELenght; iv++) {
            var aSplit1 = aSubElem[iv].split("|");
            nSplitLenght = aSplit1.length;
            if (nSplitLenght > 0) {
                for (let is = 0; is < nSplitLenght; is++) {
                    if (aSplit1[is] == zzValElem) {
                        dYesx = true;
                    }
                }
            }
        }
    }
    if (zzOpt = "2") {
        for (let iv = 0; iv < nELenght; iv++) {
            if (aElem[iv] == zzValElem) {
                ccELEM = aElem[iv];
                ccSUBE = aSubElem[iv];
                ccSUBN = aSubName[iv];
                dYesx = true;
            }
        }
    }
    return dYesx;

} // atsSubElemCont



/**
* atslib_dx - Log-i kirje lisamine
* @method  atsMakeLog
* @param  zDict = sõnastik (ID)
* @param  zUser = kasutajanimi
*/
function atsMakeLog(zDict, zUser) {
    //window.alert(zDict + " " + zUser + " " + GetXSDDateTime(new Date()));
    var dRet = false;
    var xh;
    var TxtXlmDOM = "";
    var cStart = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
    var cShsLogS = "<shslogs>";
    var cShsLogE = "</shslogs>";
    var cNewLog = "<log lDic=\"" + zDict + "\" lUser=\"" + zUser + "\">" + GetXSDDateTime(new Date()) + "</log>";
    var xmlFile = "logs/" + "shslog.xml";
    TxtXlmDOM = cStart + cShsLogS + cNewLog;
    var oLogXlmDOM = IDD("File", xmlFile, false, false, null);
    if (oLogXlmDOM) {
        //alert("Puudub fail '" + xmlFile + "'!");
        //return;


        var ooElemNodes = oLogXlmDOM.getElementsByTagName('log');
        var nnLenght = ooElemNodes.length;
        if (nnLenght > 0) {
            for (let i = 0; i < nnLenght; i++) {
                var ooElemNode = ooElemNodes.item(i);
                TxtXlmDOM = TxtXlmDOM + getXmlString(ooElemNode);
            }
        }
    }

    TxtXlmDOM = TxtXlmDOM + cShsLogE;
    //alert(TxtXlmDOM);
    xh = exCGISync("tools.cgi", "atSaveLog" + PD + zDict + PD + zUser + PD + TxtXlmDOM);
    //alert("Status = " + xh.statusText);
    if (xh.statusText == "OK") {
        rspDOM = ParseHTTPResponse(xh);
        if (rspDOM) {
            var opStatus = getXmlSingleNodeValue(rspDOM, "rsp/sta");
            if (opStatus == "Success") {
                dRet = true;
                return dRet;
            } else {
                //window.alert("Error1:" + opStatus);
                return dRet;
            }
        }
    } else {
        //window.alert("Error2:" + xh.statusText);
        return dRet;
    }

} //  atsMakeLog

/**
* ATS0 Sisenemise logi kuvamine
* 
* @method atsViewLogs
*/
function atsViewLogs() {
    // sõnastiku suletuse kontroll
    if (atsKeyMessage()) {
        return;
    }
    cDialogArg = "";
    //window.alert("OK!");
    if (!dhxWins.window("listlogs")) {
        var w = 1200;
        var h = 1000;
        var dhxWinParams = {
            id: "listlogs",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Sisenemise logi",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("listlogs").centerOnScreen();
        dhxWins.window("listlogs").denyResize();
        dhxWins.window("listlogs").keepInViewport(false);
        dhxWins.window("listlogs").setModal(false);
        if (dhxWins.window("listlogs").isParked()) {
            dhxWins.window("listlogs").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("listlogs").attachURL(atsCatal + "/atsViewLogs.html", false);

}

/**
* ATS05 Trükki mineva andmekogumi ettevalmistamine
* 
* @method atsHelp
*/
function atsHelp() {

    //var myWindow = window.open("htmlnew/See on filmi demo.html", "Print", "scrollbars=yes,resizable=yes,top=100,left=100,width=900,height=700");
    var myWindow = window.open(atsCatal + "/EHelp.html", "_blank");

}

/**
* atslib_dx - kasutajate kuvamine ja õiguste määramine
* 
* @method atsDicUsers
* @param sRezm {String} - "0"-muuta ei saa, "1"-muutmine .
*/
function atsDicUsers(sRezm) {
    //window.alert(sRezm); 
    cDialogArg = dic_desc + PD + sUsrName + PD + sRezm;
    if (!dhxWins.window("setup")) {
        var w = 1500;
        var h = 900;
        if (sRezm == "0") {
            var dhxWinParams = {
                id: "duser",
                left: 700,
                top: 120,
                width: w / 2,
                height: h / 2,
                caption: "Kasutajate õigused (NB! puuduvad õigused muutmiseks.)",
                resize: true,
                move: true,
                park: false
            };
        } else {
            var dhxWinParams = {
                id: "duser",
                left: 700,
                top: 120,
                width: w / 2,
                height: h / 2,
                caption: "Kasutajate õiguste määramine",
                resize: true,
                move: true,
                park: false
            };
        }

        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("duser").centerOnScreen();
        dhxWins.window("duser").denyResize();
        dhxWins.window("duser").keepInViewport(false);
        dhxWins.window("duser").setModal(true);
        if (dhxWins.window("duser").isParked()) {
            dhxWins.window("duser").park();
        }
    }
    dhxWins.window("duser").attachURL(atsCatal + "/atsDicUsers.html", false);
}



/**
* atslib_dx - Elemendi ehk välja nimetuse leidmine.
* 
* @method atsFindElemName
* @param  zOtsElem = elemendi ehk välja nimi (näiteks x:m)
* @param  zStrucDom = struktuuri faili DOM
*/
function atsFindElemName(zOtsElem, zStrucDom) {
    //zOtsElem = "x:m";
    //window.alert("Alustame testimist...");
    //window.alert(zOtsElem);

    //window.alert(zOtsElem.length);
    //zOtsElem = "x:A";

    var cAttriName;

    // Leiame elemendi...
    var cElemDom = zStrucDom.getElementsByTagName(zOtsElem);

    //window.alert(cElemDom);

    // Leiame atribuutide arvu
    var nAttrCount = cElemDom.item(0).attributes.length;

    // Leiame atribuutide nimed

    for (var k = 0; k < nAttrCount; k++) {

        cAttriName = cElemDom.item(0).attributes[k].name;
        if (cAttriName.indexOf("pr_sd:nimi") > -1) {




            cNimetus = cElemDom.item(0).attributes[k].value;


            //window.alert(cAttriName);
        }
    }


    return (cNimetus)
}

















/**
* atslib_dx - Elemendi ehk välja atribuutide leidmine.
* 
* @method atsFindElemAttr
* @param  zOtsElem = elemendi ehk välja nimi (näiteks x:m)
* @param  zStrucDom = struktuuri faili DOM
*/
function atsFindElemAttr(zOtsElem, zStrucDom) {
    //zOtsElem = "x:m";
    //window.alert("Alustame testimist...");
    //window.alert(zOtsElem);
    aFindAttrName = [];
    var cAttriName, cArrayElemxxx;

    // Leiame elemendi...
    //window.alert(zOtsElem);
    var cElemDom = zStrucDom.getElementsByTagName(zOtsElem);

    // Leiame atribuutide arvu
    var nAttrCount = cElemDom.item(0).attributes.length;

    // Leiame atribuutide nimed

    for (var k = 0; k < nAttrCount; k++) {

        cAttriName = cElemDom.item(0).attributes[k].name;
        if (cAttriName.indexOf("pr_sd:") == -1) {




            cArrayElemxxx = ["#" + cAttriName, 'obj', cAttriName, null];
            aFindAttrName.push(cArrayElemxxx);


            //window.alert(cAttriName);
        }
    }

    var cVix = "#" + cDicpr + ":#";

    cArrayElemxxx = [cVix, 'obj', "Vali atribuut", null];
    aFindAttrName.push(cArrayElemxxx);
    cAtribx = cVix;

    return (aFindAttrName.length)

    //window.alert("Lõpetame testimise.");
}

/**
* atslib_dx - Käivitab uue otsingupäringu.
* 
* @method otsing
* @param {String} parQM Päringumeetod (XML või MySQL).
*/
function otsing(parQM) {
    atsSaveContr();
    var zVolTxt, zElemSelect, zElemSelectTxt, zElemValue, zAttrSelect, zAttrValue;
    //var currentVolId;
    var currentVolId, art_xpath, elm_xpath, withCase, withSymbols, evPath, seldQn, srchPtrn, fakPtrn, mySqlPtrn, hlPtrn, cQM, pQrySql;
    var dAttrOn;
    var cOVariant = "1";
    var hasSeldText = false;
    var dParagr = "0";
    parQM = "xml";

    // Algväärtused :
    // -------------------------------------------------------
    sCmdId = "ClientRead";
    // Artikli elemendi nimetus
    //zArtElem = "m:A";
    zArtElem = cDicpr + ":A";
    // köide ID
    currentVolId = dhxBar.getListOptionSelected("volSelect");
    // Atribuudi nimetus
    zAttrSelect = dhxBar.getItemText("attrSelect");
    // Atribuudi väärtus
    zAttrValue = dhxBar.getValue("txtAttrOtsitav");
    // Valitud kõite tekst
    zVolTxt = dhxBar.getItemText("volSelect");
    // Valitud elemendi tekst
    zElemSelectTxt = dhxBar.getItemText("elemSelect");
    zElemSelect = cFindID;
    // Valitud elemendi väärtus
    zElemValue = dhxBar.getValue("txtElemOtsitav");
    zElemValue = zElemValue.trim();
    // -------------------------------------------------------

    if (zElemValue == "") {
        window.alert("Sisestage otsingu väärtus!");
        return;
    }
    if (zAttrSelect != "Vali atribuut" && zAttrValue == "") {
        window.alert("Sisestage otsingu atribuudi väärtus!");
        return;
    }
    if (zAttrSelect == "Vali atribuut") {
        dAttrOn = false;
    } else {
        dAttrOn = true;
    }

    sQryInfo = dhxBar.getItemText("volSelect") + ": " + dhxBar.getItemText("elemSelect") + " = '" + dhxBar.getValue("txtElemOtsitav") + "'";

    // Tähed ainult või kõik märgid
    var ww00 = "-1";
    // Elemendi nimetus
    var ww01 = zElemSelect;
    // Elemendi väärtus
    var ww021 = zElemValue;
    // Elemendi srchPtrn väärtus 
    var ww022 = "";
    // Elemendi hlP väärtus
    var ww023 = "";

    if (zElemValue.indexOf("§") != -1) {
        var aArr, nLenx;
        aArr = zElemValue.split("§");
        nLenx = aArr.length;
        if (nLenx == 2 && aArr[0] == "" && aArr[1] != "") {
            dParagr = "1";
        }
    } else if (zElemSelect == zArtElem) {
        dParagr = "2";
    }


    if (dParagr == "0") {
        // *******************************
        // Tavaline otsing...       
        // *******************************

        if (zElemValue.indexOf("*") != -1) {
            var aArr, nLenx;
            aArr = zElemValue.split("*");
            nLenx = aArr.length;
            //window.alert("nLenx=" + nLenx);
            var zWal = "";
            var zHal = "";

            for (let ix = nLenx - 1; ix > -1; ix--) {

                if (aArr[ix] != "") {
                    if (ix != 0) {
                        zWal = ".*" + aArr[ix] + zWal;
                        zHal = ".*" + aArr[ix] + zHal;
                        if (ix == nLenx - 1) {
                            zWal = zWal + "$"
                            zHal = zHal + "%5Cb";
                        }
                    } else {
                        zWal = "^" + aArr[ix] + zWal;
                        zHal = "%5Cb" + aArr[ix] + zHal;
                    }
                }
                //window.alert(aArr[ix]);
            }
            ww022 = zWal;
            ww023 = zHal;
            //window.alert(zWal);
            //window.alert(zHal);
            //return;

        } else {
            ww022 = "^" + zElemValue + "$";
            ww023 = "%5Cb" + zElemValue + "%5Cb";
        }

        // Kas on valitud: otsitakse ainult tähti = true või otsitakse kõiki märke = false
        if (dSymbx) {
            //ww022 = ww022.replace(/[üõöäžŽÜÕÖÄ]/g, '');
            if (/[^a-zA-Z]/.test(ww022)) {
                //window.alert("Muutke reziimi, sest otsinguväli sisaldab mitte tähti!");
                //return;
                ww00 = "-1"
            }
        } else {
            ww00 = "1"

        }

        var aa01 = "";
        var aa02 = "";
        var aa03 = "";

        if (dAttrOn == true) {
            // On atribuut:

            if (zAttrValue.indexOf("*") != -1) {
                // Atribuudi väärtuses on tärn(*)
                var aArr, nLenx;
                aArr = zAttrValue.split("*");
                nLenx = aArr.length;
                if (nLenx != 2) {
                    window.alert("Atribuudi väärtuses saab kasutada ainult ühte tärni (*).");
                    return;
                }
                var nVarin = 0;
                // * 
                if ((aArr[0] == "") && (aArr[1] == "")) {
                    nVarin = 1;
                }
                // *ggg
                if ((aArr[0] == "") && (aArr[1] != "")) {
                    nVarin = 2;
                }
                // ggg*
                if ((aArr[0] != "") && (aArr[1] == "")) {
                    nVarin = 3;
                }
                // g*gg
                if ((aArr[0] != "") && (aArr[1] != "")) {
                    nVarin = 4;
                }

                if (nVarin == 1) {
                    aa01 = "[@" + zAttrSelect + ": '" + zAttrValue + "']";
                    aa02 = "[@" + zAttrSelect + "]";
                    aa03 = "[@" + zAttrSelect + "]";;
                }
                if (nVarin == 2) {
                    aa01 = "[@" + zAttrSelect + ": '" + zAttrValue + "']";
                    aa02 = "[al_p:srch2(@" + zAttrSelect + ", '(?i)" + aArr[1] + "$', '') &gt; 0]";
                    aa03 = "[@" + zAttrSelect + "contains(concat(.,'~~~'),'" + aArr[1] + "~~~')]";
                }
                if (nVarin == 3) {
                    aa01 = "[@" + zAttrSelect + ": '" + zAttrValue + "']";
                    aa02 = "[al_p:srch2(@" + zAttrSelect + ", '(?i)^" + aArr[0] + "', '') &gt; 0]";
                    aa03 = "[@" + zAttrSelect + "contains(concat(.,'~~~'),'~~~" + aArr[0] + ")]";
                }
                if (nVarin == 4) {
                    aa01 = "[@" + zAttrSelect + ": '" + zAttrValue + "']";
                    aa02 = "[al_p:srch2(@" + zAttrSelect + ", '(?i)^" + aArr[0] + ".*" + aArr[1] + "$', '') &gt; 0]";
                    aa03 = "[@" + zAttrSelect + "contains(concat('~~~',.),'~~~" + aArr[0] + "') AND contains(concat(.,'~~~'),'" + aArr[1] + "~~~')]";
                }

            } else {
                // Atribuudi väärtuses ei ole tärni(*) 
                aa01 = "[@" + zAttrSelect + ": '" + zAttrValue + "']";
                aa02 = "[al_p:srch2(@" + zAttrSelect + ", '(?i)^" + zAttrValue + "$', '') &gt; 0]";
                aa03 = "[@" + zAttrSelect + "[.='" + zAttrValue + "']]";
            }


            sQryInfo = "[märksõna (.//" + ww01 + ") [ '" + ww021 + "' (↔: 4)]" + aa01 + "], tt-tu, m-deta, glob.";
            art_xpath = cDicpr + ":A[.//" + ww01 + aa02 + "[self::node()[al_p:srch(.) &gt; 0]]]";
            elm_xpath = ".//" + ww01 + aa02 + "[self::node()[al_p:srch(.) &gt; 0]]";
            withCase = "0";
            withSymbols = ww00;
            evPath = ".//" + ww01 + aa03 + "/text()";
            seldQn = ww01;
            srchPtrn = ww022;
            fakPtrn = "()";
            hlPtrn = ww023;
            //hlPtrn = "";
            cQM = parQM;
            mySqlPtrn = "";
            pQrySql = "";
            hasSeldText = true

        } else {
            // Ei ole atribuuti :
            sQryInfo = "[märksõna (.//" + ww01 + ") [ '" + ww021 + "' (↔: 4)]], tt-tu, m-deta, glob.";
            art_xpath = cDicpr + ":A[.//" + ww01 + "[self::node()[al_p:srch(.) &gt; 0]]]";
            elm_xpath = ".//" + ww01 + "[self::node()[al_p:srch(.) &gt; 0]]";
            withCase = "0";
            withSymbols = ww00;
            evPath = ".//" + ww01 + "/text()";
            seldQn = ww01;
            srchPtrn = ww022;
            fakPtrn = "()";
            hlPtrn = ww023;
            //hlPtrn = "";
            cQM = parQM;
            mySqlPtrn = "";
            pQrySql = "";
            hasSeldText = true
        }

    }
    if (dParagr == "1") {
        // *******************************
        // Paragraafi(§) otsing...       
        // *******************************




        // Tähed ainult või kõik märgid
        ww00 = "-1";
        // Elemendi väärtus 
        ww021 = ww021.replace("§", "");

        var wwArt = zArtElem;
        var sOsa1 = ".//" + ww01 + "[" + ww021 + "]";



        // Kas on valitud: otsitakse ainult tähti = true või otsitakse kõiki märke = false
        if (dSymbx) {
            ww00 = "-1"
        } else {
            ww00 = "1"
        }

        if (wwArt != ww01) {
            sQryInfo = "[artikkel (" + ww01 + ") [ '§" + ww021 + "' (↔: 22)]], tt-tu, m-deta, glob.";
            art_xpath = wwArt + "[" + sOsa1 + "]";
            elm_xpath = sOsa1;
            withCase = "1";
            withSymbols = ww00;
            evPath = ww01 + "[" + ww021 + "]//text()";
            seldQn = ww01;
            srchPtrn = "";
            fakPtrn = "";
            hlPtrn = "";
            //hlPtrn = "";
            cQM = parQM;
            mySqlPtrn = "";
            pQrySql = "";
            hasSeldText = true
        } else {
            sQryInfo = "[artikkel (" + ww01 + ") [ '§" + ww021 + "' (↔: 22)]], tt-tu, m-deta, glob.";
            art_xpath = ww01 + "[" + ww021 + "]";
            elm_xpath = "self::node()";
            withCase = "1";
            withSymbols = ww00;
            evPath = ww01 + "[" + ww021 + "]//text()";
            seldQn = ww01;
            srchPtrn = "";
            fakPtrn = "";
            hlPtrn = "";
            //hlPtrn = "";
            cQM = parQM;
            mySqlPtrn = "";
            pQrySql = "";
            hasSeldText = true
        }

    }

    if (dParagr == "2") {

        var wwAttr00 = "";
        var wwAttr01 = "";
        var wwAttr02 = "";

        if (dAttrOn == true) {
            // Atribuudiga
            var cAttrV = zAttrValue.replace("*", "");
            wwAttr00 = "[@" + zAttrSelect + ": '" + zAttrValue + "']";
            cRet = atsYesSymb(zAttrValue, "*");

            if (cRet == "2") {
                wwAttr02 = "[@" + zAttrSelect + "]";
            } else if (cRet == "3") {
                wwAttr01 = "[al_p:srch2(@" + zAttrSelect + ", '(?i)^" + cAttrV + "', '') &gt; 0]";
                wwAttr02 = "[@" + zAttrSelect + "contains(concat('~~~',.),'~~~vm')]";
            } else if (cRet == "0" && zAttrValue != "") {
                wwAttr01 = "[al_p:srch2(@" + zAttrSelect + ", '(?i)^" + zAttrValue + "$', '') &gt; 0]";
                wwAttr02 = "[@" + zAttrSelect + "]";
            } else {
                window.alert("Vigane atribuudi otsinguväli.");
                return;
            }

        }
        var cRet = atsYesSymb(zElemValue, "*");
        var cEValumX = ww021.replace("*", "");
        sQryInfo = "[artikkel (" + ww01 + ") [ '" + ww021 + "' (↔: 1)]" + wwAttr00 + "], tt-tu, m-deta, glob.";
        // Atribuudita
        art_xpath = ww01;
        if (cRet == "2") {
            art_xpath = ww01 + wwAttr01;
            evPath = ww01 + wwAttr02 + "//text()";
            srchPtrn = "";
            hlPtrn = "";
        } else if (cRet == "3") {
            art_xpath = ww01 + wwAttr01 + "[self::node()[al_p:srch(.) &gt; 0]]";
            evPath = ww01 + wwAttr02 + "//text()";
            srchPtrn = "^" + cEValumX;
            hlPtrn = "%5Cb" + cEValumX;
        } else {
            window.alert("Vigane otsinguväli.");
            return;
        }
        elm_xpath = "self::node()";
        withCase = "1";
        withSymbols = ww00;
        seldQn = ww01;
        fakPtrn = "";
        cQM = parQM;
        mySqlPtrn = "";
        pQrySql = "";

    }

    // XML

    if (parQM == "xml") {
        sCmdId = "ClientRead";
        pQrySql = "";
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
        //window.alert(cmdXml);
        var cmdXmlDom = IDD("String", cmdXml, false, false, null);

        StartOperation(cmdXmlDom);

        dNoOts = false;
        cmdXmlPrint = "<prm>" +
            "<cmd>ClientPrint</cmd>" +
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
            "<qM>xml</qM>" +
            "<pQrySql>" + pQrySql + "</pQrySql>" +
            "</prm>";
    }
}

/**
* atslib_dx - Sümboli olemasolu elemendis ja asukoht
* 
* @method atsYesSymb
* @param  zValueX = elemendi väärtus
* @param  zSymbX = sümbol mida elemendist otsitakse
*/
function atsYesSymb(zValueX, zSymbX) {
    // 0 - sümbol puudub
    // 1 - sümbolit on rohkem kui kaks   
    // 2 - on ainult sümbol  
    // 3 - sümbol on lõpus
    // 4 - sümbol on alguses   
    // 5 - sümbol on keskel     
    var zKoht = "";
    var aArr, nLenx;
    aArr = zValueX.split(zSymbX);
    nLenx = aArr.length;

    if (zValueX.indexOf(zSymbX) == -1) {
        return "0";
    }
    if (nLenx == 2) {
        if (aArr[0] == "" && aArr[1] == "") {
            return "2";
        }
        if (aArr[0] != "" && aArr[1] == "") {
            return "3";
        }
        if (aArr[0] == "" && aArr[1] != "") {
            return "4";
        }
        if (aArr[0] != "" && aArr[1] != "") {
            return "5";
        }
    } else {
        return "1"
    }

}


/**
* ATS0 Otsingu tulemuste kuvamine.
* 
* @method atBrowsex
*/
function atBrowsex(zNewHtml, nW, nH) {
    //window.alert("atBrowsex");
    cDialogArg = dic_desc + PD + zNewHtml;
    //window.alert(cOpr);
    if (!dhxWins.window("browsex")) {
        var w = nW;
        var h = nH;
        var dhxWinParams = {
            id: "browsex",
            left: 1000,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Otsingu tulemus artiklina",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("browsex").centerOnScreen();
        //dhxWins.window("browsex").denyResize();
        dhxWins.window("browsex").keepInViewport(false);
        dhxWins.window("browsex").setModal(false);
        if (dhxWins.window("browsex").isParked()) {
            dhxWins.window("browsex").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("browsex").attachURL(atsCatal + "/atsBrowsex.html", false);

}

/**
* ATS0 Otsingu tulemuste kuvamine.
* 
* @method atBrowsey
*/
function atBrowsey(zNewHtml, nW, nH) {

    //window.alert("atBrowsey");
    cDialogArg = dic_desc + PD + zNewHtml;
    //window.alert(cOpr);
    if (!dhxWins.window("browsey")) {
        var w = nW;
        var h = nH;

        if (atsDispDim() == "1") {
            if (h > 900) {
                h = 900;
            }
        }

        var dhxWinParams = {
            id: "browsey",
            left: 700,
            top: 1200,
            width: w / 2,
            height: h / 2,
            caption: "Otsingu tulemus artiklitena",
            resize: true,
            move: true,
            park: true
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("browsey").centerOnScreen();
        //dhxWins.window("browsex").denyResize();
        dhxWins.window("browsey").keepInViewport(false);
        dhxWins.window("browsey").setModal(false);
        if (dhxWins.window("browsey").isParked()) {
            dhxWins.window("browsey").park();
        }
    }

    //        var href = oSrc.href;
    dhxWins.window("browsey").attachURL(atsCatal + "/atsBrowsex.html", false);

}

/**
* atslib_dx - Otsingu listi koostamine xml struktuuri alusel
* 
* @method atsLoadMenyyList
* @param  DPR = x,h jne.
*/
function atsLoadMenyyList(DPR) {

    var yStruDom = IDD("File", "xml/" + dic_desc + "/stru_" + dic_desc + ".xml", false, false, null);
    if (!yStruDom) {
        alert("Skeemi ja toimetamisala genereerimine tegemata!");
        return;
    }
    // The normalize method joins adjacent text nodes into a single text node and removes empty text nodes. 
    // Note: in Internet Explorer, the normalize method does not remove empty text nodes.
    yStruDom.normalize;
    var PT = "\uE001";
    var cMakett1 = "|" + PT + DPR + ":";
    var cMakett2 = PT + DPR;
    var cTxt = getXmlString(yStruDom);
    //cTxt = cTxt.replace(/&lt;x:/g, "|<x:");
    cTxt = cTxt.replace(/pr_sd:it/g, "|pr_sd:it");

    if (DPR == "x") {
        cTxt = cTxt.replace(/<x:/g, cMakett1);
    } else if (DPR == "h") {
        cTxt = cTxt.replace(/<h:/g, cMakett1);
    } else if (DPR == "s") {
        cTxt = cTxt.replace(/<s:/g, cMakett1);
    } else if (DPR == "k") {
        cTxt = cTxt.replace(/<k:/g, cMakett1);
    } else if (DPR == "m") {
        cTxt = cTxt.replace(/<m:/g, cMakett1);
    } else if (DPR == "n") {
        cTxt = cTxt.replace(/<n:/g, cMakett1);
    } else if (DPR == "g") {
        cTxt = cTxt.replace(/<g:/g, cMakett1);
    }

    var cOperText = "";
    var aArray_Code = [];
    var aArray_Name = [];
    var nRet;
    var cMRow;

    var aSplitArray = cTxt.split("|");
    var nLen = aSplitArray.length;

    for (iz = 0; iz < nLen; iz++) {
        nRet = aSplitArray[iz].indexOf(cMakett2);
        if (nRet > -1) {
            cOperText = aSplitArray[iz];
            cOperText = cOperText.replace(/\uE001/g, "");
            cOperText = cOperText.trim();

            if (aArray_Code.indexOf(cOperText) == -1) {
                aArray_Code.push(cOperText.trim());
                aArray_Name.push("");
            }
        }
    }

    nLen = aArray_Code.length;
    for (iz = 1; iz < nLen; iz++) {
        var vvv = aArray_Code[iz];
        var cElemNamm = atsFindElemName(vvv, yldStruDom);

        var aArray = cElemNamm.split(";");

        aArray_Name[iz] = aArray[0];

        if ((aArray_Code[iz] == DPR + ":m") || (aArray_Code[iz] == DPR + ":ter")) {
            cMRow = ['sp01', 'sep', '', ''];
            aFindArrayOp.push(cMRow);

            cMRow = [aArray_Code[iz], 'obj', "► " + aArray_Name[iz] + " (" + aArray_Code[iz] + ")", null];
            aFindArrayOp.push(cMRow);

            cMRow = ['sp02', 'sep', '', ''];
            aFindArrayOp.push(cMRow);
        } else {
            cMRow = [aArray_Code[iz], 'obj', "▷ " + aArray_Name[iz] + " (" + aArray_Code[iz] + ")", null];
            aFindArrayOp.push(cMRow);
        }
    }

}

function doMenuLoad() {
    // items;
    menu1 = new dhtmlXMenuObject();
    menu1.renderAsContextMenu();
    menu1.addContextZone("");
    menu1.setIconsPath("htmlnew/common/imgs/");
    menu1.addNewChild(menu1.topId, 0, "open", "Open", false, "open.gif");
    menu1.addNewChild(menu1.topId, 1, "save", "Save", false, "save.gif");
    menu1.addNewChild(menu1.topId, 3, "close", "Close", false, "close.gif");
}


function getCursorXY(e) {
    cX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    cY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

}

/**
* atslib_dx - Leiame struktuurist (+) elemendid, mille pr_sd:ct="3"
* 
* @method atsFindPlusElem
* @param  cDpr = x,h jne.
*/
function atsFindPlusElem(cDpr) {

    //window.alert("Startx 21.04.2023 ...");
    var DPR = cDpr;
    var cMakett1 = "#" + DPR + ":";


    var yStruDom = IDD("File", "xml/" + dic_desc + "/stru_" + dic_desc + ".xml", false, false, null);
    if (!yStruDom) {
        alert("Skeemi ja toimetamisala genereerimine tegemata!");
        return;
    }
    yStruDom.normalize;

    var aArray_Code = [];
    var aArray_Tab = [];

    var cTxt = getXmlString(yStruDom);
    cTxt = cTxt.replace(/pr_sd:tn/g, "|pr_sd:tn");

    if (DPR == "x") {
        cTxt = cTxt.replace(/<x:/g, cMakett1);
    } else if (DPR == "h") {
        cTxt = cTxt.replace(/<h:/g, cMakett1);
    } else if (DPR == "s") {
        cTxt = cTxt.replace(/<s:/g, cMakett1);
    } else if (DPR == "k") {
        cTxt = cTxt.replace(/<k:/g, cMakett1);
    } else if (DPR == "m") {
        cTxt = cTxt.replace(/<m:/g, cMakett1);
    } else if (DPR == "n") {
        cTxt = cTxt.replace(/<n:/g, cMakett1);
    } else if (DPR == "g") {
        cTxt = cTxt.replace(/<g:/g, cMakett1);
    }

    cTxt = cTxt.replace(/>/g, ">|");

    var aSplitArray = cTxt.split("|");
    var nLen = aSplitArray.length;
    for (iz = 2; iz < nLen; iz++) {
        nRet = aSplitArray[iz].indexOf('pr_sd:ct="3"');
        if (nRet > 0) {
            cTxt = aSplitArray[iz].replace(/pr_sd:it/g, "#pr_sd:it");
            if (DPR == "x") {
                cTxt = cTxt.replace(/<x:/g, cMakett1);
            } else if (DPR == "h") {
                cTxt = cTxt.replace(/<h:/g, cMakett1);
            } else if (DPR == "s") {
                cTxt = cTxt.replace(/<s:/g, cMakett1);
            } else if (DPR == "k") {
                cTxt = cTxt.replace(/<k:/g, cMakett1);
            } else if (DPR == "m") {
                cTxt = cTxt.replace(/<m:/g, cMakett1);
            } else if (DPR == "n") {
                cTxt = cTxt.replace(/<n:/g, cMakett1);
            } else if (DPR == "g") {
                cTxt = cTxt.replace(/<g:/g, cMakett1);
            }
            nRet = cTxt.indexOf(cMakett1);
            var cTabs = nRet - 1;
            var aSplitArraz = cTxt.split("#");
            var cElemN = aSplitArraz[1].trim();
            nRet = aArray_Code.indexOf(cElemN);
            if (nRet == -1) {
                aArray_Code.push(cElemN);
                aArray_Tab.push(cTabs);
            }
        }
    }

    return aArray_Code;
}


/**
* atslib_dx - Init plus elementide väljad
* 
* @method atsSubElemInit
* @param  cDpr = x,h jne.
*/
function atsSubElemInit(cDpr) {
    //window.alert(cDpr);
    //cDpr = "x";
    var DPR = cDpr;
    var cMakett1 = "#" + DPR + ":";

    var aElemPlus = atsFindPlusElem(cDpr);

    var yStruDom = IDD("File", "xml/" + dic_desc + "/stru_" + dic_desc + ".xml", false, false, null);
    if (!yStruDom) {
        alert("Skeemi ja toimetamisala genereerimine tegemata!");
        return;
    }
    // The normalize method joins adjacent text nodes into a single text node and removes empty text nodes. 
    // Note: in Internet Explorer, the normalize method does not remove empty text nodes.
    yStruDom.normalize;

    var cStringa = "_______________________________________________________________________________________________________"
    var cTxt = getXmlString(yStruDom);
    cTxt = cTxt.replace(/pr_sd:it/g, "|pr_sd:it");
    //cTxt = cTxt.replace(/<x:/g, "#x:");


    if (DPR == "x") {
        cTxt = cTxt.replace(/<x:/g, cMakett1);
    } else if (DPR == "h") {
        cTxt = cTxt.replace(/<h:/g, cMakett1);
    } else if (DPR == "s") {
        cTxt = cTxt.replace(/<s:/g, cMakett1);
    } else if (DPR == "k") {
        cTxt = cTxt.replace(/<k:/g, cMakett1);
    } else if (DPR == "m") {
        cTxt = cTxt.replace(/<m:/g, cMakett1);
    } else if (DPR == "n") {
        cTxt = cTxt.replace(/<n:/g, cMakett1);
    } else if (DPR == "g") {
        cTxt = cTxt.replace(/<g:/g, cMakett1);
    }


    cTxt = cTxt.replace(/>/g, ">|");

    //window.alert((cTxt));

    //return;
    var cOperText = "";

    var aArray_Code = [];
    var aArray_Name = [];
    var aArray_Tab = [];
    var nRet;
    var cMRow;

    var aSplitArray = cTxt.split("|");
    var nLen = aSplitArray.length;



    for (iz = 2; iz < nLen; iz++) {

        nRet = aSplitArray[iz].indexOf(cMakett1);

        if (nRet > 0) {

            var cTabs = nRet - 1;
            var aRowArray = aSplitArray[iz].split("#");
            cOperText = aRowArray[1];
            aArray_Code.push(cOperText.trim());
            aArray_Name.push("");
            aArray_Tab.push(cTabs);
        }

    }

    nLen = aArray_Code.length;

    for (iz = 0; iz < nLen; iz++) {
        var vvv = aArray_Code[iz];
        var cElemNamm = atsFindElemName(vvv, yldStruDom);
        var aArray = cElemNamm.split(";");

        aArray_Name[iz] = aArray[0];
    }

    var nLn = aElemPlus.length;
    if (nLn > 0) {

        for (iw = 0; iw < nLn; iw++) {
            var cOts = aElemPlus[iw];
            var nCnt = 0;
            var cSubElem = "";
            var cSubName = "";

            nRet = aArray_Code.indexOf(cOts);
            cMRow = aArray_Code[nRet];
            for (is = nRet + 1; is < nLen; is++) {
                if (aArray_Tab[is] == aArray_Tab[nRet] + 1) {
                    nCnt = nCnt + 1;
                    if (nCnt > 1) {
                        cSubElem = cSubElem + "|" + aArray_Code[is]
                        cSubName = cSubName + "|" + aArray_Name[is]
                    } else {
                        cSubElem = aArray_Code[is]
                        cSubName = aArray_Name[is]
                    }
                } else {

                    if (aArray_Tab[is] < aArray_Tab[nRet] + 1) {
                        is = nLen;
                    }

                }
            }
            aElem.push(cMRow);
            aSubElem.push(cSubElem);
            aSubName.push(cSubName);

        }

    } else {
        return;
    }
}

/**
* atslib_dx - Elemendi ehk välja nimetuse ja atribuutide leidmine.
* 
* @method atsFindAttr
* @param  zOtsElem = elemendi ehk välja nimi (näiteks x:m)
* @param  zStrucDom = struktuuri faili DOM
*/
function atsFindAttr(zOtsElem, zStrucDom) {
    var cAttriName;

    // Leiame elemendi...
    var cElemDom = zStrucDom.getElementsByTagName(zOtsElem);

    //window.alert(cElemDom);

    // Leiame atribuutide arvu
    var nAttrCount = cElemDom.item(0).attributes.length;

    // Leiame atribuutide nimed

    for (var k = 0; k < nAttrCount; k++) {

        cAttriName = cElemDom.item(0).attributes[k].name;
        if (cAttriName.indexOf("pr_sd:nimi") > -1) {


            cNimetus = cElemDom.item(0).attributes[k].value;

            //window.alert(cAttriName);
        }
    }

    return (cNimetus)
}

/**
* atslib_dx - Sõnastiku skeemi kuvamine
* 
* @method atsSchemaView
* @param sRezm {String} - "0"-muuta ei saa, "1"-muutmine .
*/
function atsSchemaView(sRezm) {
    //window.alert(sRezm); 
    cDialogArg = dic_desc + PD + sUsrName + PD + sRezm;
    if (!dhxWins.window("setup")) {
        var w = 1500;
        var h = 1200;
        if (atsDispDim() == "1") {
            h = 900;
        }

        var dhxWinParams = {
            id: "schem",
            left: 700,
            top: 120,
            width: w / 2,
            height: h / 2,
            caption: "Sõnastiku '" + dic_desc + "' XML-baasi skeem",
            resize: true,
            move: true,
            park: true
        };


        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("schem").centerOnScreen();
        dhxWins.window("schem").denyResize();
        dhxWins.window("schem").keepInViewport(false);
        dhxWins.window("schem").setModal(false);
        if (dhxWins.window("schem").isParked()) {
            dhxWins.window("schem").park();
        }
    }
    dhxWins.window("schem").attachURL(atsCatal + "/atsSchemaView.html", false);
}

/**
* atsStartEE
* 
* @method atsStartEE
* @param {String} cVers 
* @param {String} cKasut 
* @param {String} cDic 
*/
function atsStartEE(cVers, cKasut, cDic) {
    cDialogArg = dic_desc + PD + cVers + PD + cKasut + PD + cDic;
    if (!dhxWins.window("startee")) {
        //var w = 1000;
        //var h = 600;

        var w = atsWinMast("W", 1000, 2);
        var h = atsWinMast("H", 350, 0);

        var dhxWinParams = {
            id: "startee",
            //left: 700,
            //top: 120,
            width: w,
            height: h,
            caption: "EELex (CH)",
            resize: true,
            move: true,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("startee").centerOnScreen();
        //dhxWins.window("startee").center();
        dhxWins.window("startee").denyResize();
        dhxWins.window("startee").keepInViewport(false);
        dhxWins.window("startee").setModal(false);
        if (dhxWins.window("startee").isParked()) {
            dhxWins.window("startee").park();
        }
    }
    dhxWins.window("startee").attachURL(atsCatal + "/atsWinStart.html", false);
}

/**
* atsViewBaseInit
* 
* @method atsViewBaseInit
* @param {String} cDicNow = põhisõnastik (ID), mille all avatakse vaatamiseks uue sünastik
*/
function atsViewBaseInit(cDicNow) {
    let cVBIdx = "";
    let cVBName = "";

    let cDicIndx = "";
    let cLang = "";
    let cDicName = "";

    let aArrayBase = [];

    // Avame shsConfig.xml ja loeme <VBaasdx> väärtuse
    oConfDOM = IDD("File", "shsConfig.xml", false, false, null);
    if (!oConfDOM) {
        alert("Puudub sõnastiku konf. fail shsconfig.xml!");
        return;
    }
    try {
        cVBIdx = oConfDOM.documentElement.getElementsByTagName("VBaasdx")[0].textContent;
    }
    catch (e) {
        alert("Tekkis viga failist shsconfig.xml elemendi <VBaasdx> lugemisel!");
        return;
    }
    //window.alert(cVBIdx);

    // Avame lexlist.xml.xml
    oConfDOM = IDD("File", "../lexlist.xml", false, false, null);
    if (!oConfDOM) {
        alert("Puudub sõnastiku konf. fail lexlist.xml!");
        return;
    }
    try {
        cVBName = oConfDOM.documentElement.getElementsByTagName("lex")[0].textContent;
    }
    catch (e) {
        alert("Tekkis viga failist lexlist.xml elemendi <lex> lugemisel!");
        return;
    }
    //window.alert(cVBName);
    // Leiame kõik elemendid, millede nime on muutujas ccElemName.
    let ooElemNodes = oConfDOM.getElementsByTagName("lex");
    // Määrame leitud elementide arvu (integer).
    let nnLenght = ooElemNodes.length;

    if (nnLenght > 0) {
        for (let i = 0; i < nnLenght; i++) {
            let ooDNode = ooElemNodes.item(i);
            let ooNNode = ooDNode.getElementsByTagName("name");


            let nnLen = ooNNode.length;
            //window.alert(nnLen);

            if (nnLen > 0) {
                for (let n = 0; n < nnLen; n++) {
                    let ooXNode = ooNNode.item(n);
                    let ccDocValue = ooNNode.item(n).textContent;
                    let cAttrLang = ooXNode.attributes[0].value;

                    if (cAttrLang == "et") {
                        cLang = cAttrLang;
                        cDicName = ccDocValue
                        break;
                    }
                }
            }
            // Leiame atribuutide arvu
            var nAttrCount = ooElemNodes.item(i).attributes.length

            for (let k = 0; k < nAttrCount; k++) {

                //atribuudi nimetus
                let cAttriName = ooDNode.attributes[k].name;
                //atribuudi väärtus
                let cAttrValue = ooDNode.attributes[k].value;

                if (cAttriName == "id") {
                    cDicIndx = cAttrValue;
                    break;
                }
            }

            if (cVBIdx.indexOf(";" + cDicIndx + ";") != -1) {


                let cDicText = "(" + cDicIndx + ") " + cDicName
                aArrayBase.push("<item id='" + cDicIndx + "' text='" + cDicText + "' img='xmlb.png'/>");
                //aSortArray.push(cDicIndx);
                //let cRetx = "<item id='" + cDicIndx + "' text='" + cDicText + "' img='TableHS.png'/>"


                //aArray_Code.push(cOperText.trim());
                //aArray_Name.push("");
                //window.alert(cRetx);

            }

        }
        aArrayBase.sort();
        let nCount = aArrayBase.length;
        if (nCount > 0) {
            cMenuBaseXml = "<menu>" +
                "<item id='mnuSr1' text='' img='xmlbase.png'>"
            for (let m = 0; m < nCount; m++) {
                cMenuBaseXml = cMenuBaseXml + aArrayBase[m];
            }
        }
        cMenuBaseXml = cMenuBaseXml + "</item></menu>";
        //window.alert(cMenuBaseXml);
    }
}


/**
* atsWinMast
* 
* @method atsWinMast
* @param {Integer} cValueType - Kas laius (W) või kõrgus (H)
* @param {Integer} nWinValue - soovitav külje väärtus
* @param {Integer} nMinValue - min. väärtus
*/
function atsWinMastxxx(cValueType, nWinValue, nMinValue) {
    let nMaxW = 2500;
    let nMaxH = 1250;
    let nMaxX = 0;
    let nMaxY = 0;
    if (cValueType == "W") {
        nMaxX = nMaxW;
        nMaxY = window.innerWidth;
    } else {
        nMaxX = nMaxH;
        nMaxY = window.innerHeight;
    }

    let nRetvalue = Math.round((nMaxY / nMaxX) * nWinValue);

    if (nRetvalue < nMinValue) {
        nRetvalue = nMinValue;
    }

    return (nRetvalue);
}


/**
* atsWinMast
* 
* @method atsWinMast
* @param {Integer} cValueType - Kas laius (W) või kõrgus (H)
* @param {Integer} nWinValue - soovitav külje väärtus
* @param {Integer} nMinValue - min. laiuse jagaja
*/
function atsWinMast(cValueType, nWinValue, nMinValue) {
    let nMaxW = Math.round((window.innerWidth / nMinValue));
    let nMaxH = window.innerHeight - 2;
    let nMaxX = Math.round(nWinValue / 2);
    if (cValueType == "W") {
        if (nMaxX > nMaxW) {
            nMaxX = nMaxW;
        }
    } else {
        if (nMaxX > nMaxH) {
            nMaxX = nMaxH;
        }
    }
    return (nMaxX);
}

/**
* atsDispDim
* 
* @method atsDispDim
* @return {String} norm - 0 , little - 1
*/
function atsDispDim() {

    let cIndW = "1";
    let cIndH = "1";
    let cRetn = "1";
    let nMaxW = window.innerWidth;
    let nMaxH = window.innerHeight;

    if (nMaxW > 1400) {
        cIndW = "0";
    }
    if (nMaxH > 650) {
        cIndH = "0";
    }

    if (cIndW == "0" && cIndH == "0") {
        cRetn = "0";
    }
    return (cRetn);
}


/**
* atsPrintInfo
* 
* @method atsPastetInfo
*/
function atsPasteInfo(cSymbz) {
    cDialogArg = cSymbz;
    if (!dhxWins.window("PInfo")) {
        //var w = 1000;
        //var h = 600;

        var w = atsWinMast("W", 1000, 2);
        var h = atsWinMast("H", 400, 0);

        var dhxWinParams = {
            id: "PInfo",
            //left: 700,
            //top: 120,
            width: w,
            height: h,
            caption: "Taastamise info:",
            resize: false,
            move: false,
            park: false
        };
        tyybidWindow = dhxWins.createWindow(dhxWinParams);
        dhxWins.window("PInfo").centerOnScreen();
        //dhxWins.window("startee").center();
        dhxWins.window("PInfo").denyResize();
        dhxWins.window("PInfo").keepInViewport(false);
        dhxWins.window("PInfo").setModal(false);
        if (dhxWins.window("PInfo").isParked()) {
            dhxWins.window("PInfo").park();
        }
    }
    dhxWins.window("PInfo").attachURL(atsCatal + "/atsPasteInfo.html", false);
}
