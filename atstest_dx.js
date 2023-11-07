//**********************************************************************
//* atstest_dx.js
//* 
//* TESTFUNKTSIOONID (Brauserisõltumatu versioon)
//* 
//* Autor: Ain Teesalu
//* Loodud   - 03.04.2023
//* Muudatus - 03.05.2023  
//**********************************************************************

/**
* atslib_dx - Käivitatakse testfunktsioon
* 
* @method atsTestFunctx_y
*/
function atsTestFunctx_y() {

    window.alert("Start...");

    atsUsersParamList(dic_desc, sUsrName);


    window.alert("End Test");
}



/** * atslib_dx - Käivitatakse testfunktsioon * * @method atsTestFunctx */
function atsTestFunctxzz() {

    window.alert("Test Start...");


    var yStruDom = IDD("File", "xml/" + dic_desc + "/stru_" + dic_desc + ".xml", false, false, null);
    if (!yStruDom) {
        alert("Skeemi ja toimetamisala genereerimine tegemata!");
        return;
    }
    // The normalize method joins adjacent text nodes into a single text node and removes empty text nodes. 
    // Note: in Internet Explorer, the normalize method does not remove empty text nodes.
    yStruDom.normalize;
    var cTxt = getXmlString(yStruDom);
    //cTxt = cTxt.replace(/&lt;x:/g, "|<x:");
    cTxt = cTxt.replace(/pr_sd:it/g, "|pr_sd:it");
    //cTxt = cTxt.replace(/<x:/g, "|#x:");
    cTxt = cTxt.replace(/<x:/g, "#x:");
    cTxt = cTxt.replace(/>/g, ">|");


    window.alert((cTxt));

    //return;
    var cOperText = "";

    var aArray_Kode = [];
    var aArray_Code = [];
    var aArray_Name = [];
    var nRet;
    var cMRow;

    var aSplitArray = cTxt.split("|");
    var nLen = aSplitArray.length;

    for (iz = 0; iz < nLen; iz++) {
        nRet = aSplitArray[iz].indexOf("#x");
        if (nRet > -1) {

            window.alert(aSplitArray[iz] + " - " + (nRet - 1));

            if (iz > 1000) {
                return;
            }


            cOperText = aSplitArray[iz];
            cOperText = cOperText.replace(/#/g, "");
            cOperText = cOperText.trim();

            if (aArray_Code.indexOf(cOperText) == -1) {
                aArray_Code.push(cOperText.trim());
                aArray_Name.push("");
            }
        }

    }

    nLen = aArray_Code.length;
    //window.alert(nLen - 1);
    for (iz = 1; iz < nLen; iz++) {

        //window.alert(aArray_Code[iz]);
        var vvv = aArray_Code[iz];
        //window.alert(vvv) 
        //window.alert(vvv.length);

        var cElemNamm = atsFindElemName(vvv, yldStruDom);

        var aArray = cElemNamm.split(";");

        aArray_Name[iz] = aArray[0];


        cMRow = [aArray_Code[iz], 'obj', " " + aArray_Code[iz] + " - " + aArray_Name[iz], null];

        aArray_Kode.push(cMRow);


        window.alert(cMRow);

        if (iz == 10) {
            return;
        }

        //window.alert(aArray_Code[iz] + " - " + aArray_Name[iz]);
    }

    window.alert("Test End.");

}

/**
* atslib_dx - Käivitatakse testfunktsioon
* 
* @method atsTestFuncty
*/
function atsTestFuncty() {

    window.alert("Alustame testimist...");
    var cAttriName;
    var xStruDom = IDD("File", "xml/" + dic_desc + "/stru_" + dic_desc + ".xml", false, false, null);
    if (!xStruDom) {
        alert("Skeemi ja toimetamisala genereerimine tegemata!");
        return;
    }
    // The normalize method joins adjacent text nodes into a single text node and removes empty text nodes. 
    // Note: in Internet Explorer, the normalize method does not remove empty text nodes.
    xStruDom.normalize();

    // Leiame elemendi...
    var yyy = xStruDom.getElementsByTagName('x:m');

    // Leiame atribuutide arvu
    var nAttrCount = yyy.item(0).attributes.length

    // Leiame atribuutide nimed

    for (let k = 0; k < nAttrCount; k++) {

        cAttriName = yyy.item(0).attributes[k].name;
        if (cAttriName.indexOf("pr_sd:") == -1) {
            window.alert(cAttriName);
        }

    }

    //window.alert(zzz);

    window.alert("Lõpetame testimise.");
}

/**
* atslib_dx - Käivitatakse testfunktsioonid
* 
* @method atsTestAlert
*/
function atsTestAlert() {


    window.alert("cDialogArg = " + cDialogArg);
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
* atslib_dx - Kasutajate jooksvad parameetrid
* 
* @method atsUsersParamList
* @param  cDicID = sõnastiku ID 
*/
function atsUsersParamList(cDicID, sUsrID) {
    var PD = "\uE001";
    window.alert("exsaSetField" + PD + cDicID + PD + sUsrID + PD + "usrconfig.xml" + PD + sUsrID + PD + "parameetrid1953");
    xh = exCGISync("tools.cgi", "exsaSetField" + PD + cDicID + PD + sUsrID + PD + "usrconfig.xml" + PD + sUsrID + PD + "parameetrid1954");
    if ((xh.statusText == "OK")) {
        oRespDom = ParseHTTPResponse(xh);
        if (oRespDom) {
            var opStatus = getXmlSingleNodeValue(oRespDom, "rsp/sta");
            if (opStatus != "Success") {
                window.alert("Viitekontrolli kasutamise väärtuse salvestamine ei õnnestunud!");
                return (-1);
            }
        }
    } else {
        window.alert("ERR-> " + xh.status + ": " + xh.statusText + '\r\n\r\n' + xh.responseText);
        return (-1);
    }

}

/**
* atslib_dx - Log-i kirje lisamine
* @method  atsMakeLog
* @param  zDict = sõnastik (ID)
* @param  zUser = kasutajanimi
*/
function atsTestFunctx_x(zDict, zUser) {

    window.alert("Start 03.04.2023 ...");
    return;
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

    window.alert("End Test");

} //  atsTestFunctx_x

/**
* atslib_dx - Leiame struktuurist (+) elemendid, mille pr_sd:ct="3"
* 
* @method atsFindPlusElemX
* @param  cDpr = x,h jne.
*/
function atsFindPlusElemX(cDpr) {

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


    var aSplitArray = cTxt.split("|");
    var nLen = aSplitArray.length;
    for (iz = 2; iz < nLen; iz++) {

        nRet = aSplitArray[iz].indexOf('pr_sd:ct="3"');
        if (nRet > 0) {

            cTxt = aSplitArray[iz].replace(/pr_sd:it/g, "#pr_sd:it");
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
    //var nLem = aArray_Code.length;
    //for (iz = 0; iz < nLem; iz++) {

    //    window.alert(aArray_Code[iz] + " (" + aArray_Tab[iz] + ")");


    //}

    // window.alert("End Test");


}

/**
* atslib_dx - Käivitatakse testfunktsioon
* 
* @method atsSubElemInitX
* @param  cDpr = x,h jne.
*/
function atsSubElemInitX(cDpr) {

    //window.alert("Starty 21.04.2023 ...");
    var DPR = "x";
    var cMakett1 = "#" + DPR + ":";

    var aElemPlus = atsFindPlusElemX(cDpr);

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

        //window.alert(aSplitArray[iz]);

        //nRet = aSplitArray[iz].indexOf("#x");
        nRet = aSplitArray[iz].indexOf(cMakett1);


        if (nRet > 0) {

            //var cTabs = cStringa.substring(0, (nRet - 1)*2);
            var cTabs = nRet - 1;
            //window.alert(aSplitArray[iz]+ " - " + (nRet - 1));            
            var aRowArray = aSplitArray[iz].split("#");
            cOperText = aRowArray[1];
            aArray_Code.push(cOperText.trim());
            aArray_Name.push("");
            aArray_Tab.push(cTabs);
        }

    }

    nLen = aArray_Code.length;
    //window.alert(nLen - 1);
    for (iz = 0; iz < nLen; iz++) {

        //window.alert(aArray_Code[iz]);
        var vvv = aArray_Code[iz];
        //window.alert(vvv) 
        //window.alert(vvv.length);

        var cElemNamm = atsFindElemName(vvv, yldStruDom);

        var aArray = cElemNamm.split(";");

        aArray_Name[iz] = aArray[0];


        //cMRow = aArray_Code[iz] + " (" + aArray_Tab[iz] + ") " + aArray_Name[iz];
        //cMRow = [aArray_Code[iz], 'obj', " " + aArray_Code[iz] + " - " +  aArray_Name[iz], null];

        //aFindArrayOp.push(cMRow);

        //if (iz == 10) {
        //    return;
        //}

        //window.alert(cMRow);


        //window.alert(aArray_Code[iz] + " - " + aArray_Name[iz]);
    }

    var nLn = aElemPlus.length;
    if (nLn > 0) {

        for (iw = 0; iw < nLn; iw++) {
            var cOts = aElemPlus[iw];
            var nCnt = 0;
            var cSubElem = "";
            var cSubName = "";

            nRet = aArray_Code.indexOf(cOts);
            //cMRow = aArray_Code[nRet] + " (" + aArray_Tab[nRet] + ") " + aArray_Name[nRet];
            cMRow = aArray_Code[nRet];
            //window.alert(cMRow);        
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
                    //var cMRW = "..... " + aArray_Code[is] + " (" + aArray_Tab[is] + ") " + aArray_Name[is];

                } else {

                    if (aArray_Tab[is] < aArray_Tab[nRet] + 1) {
                        is = nLen;
                    }

                }


            }

            aElem.push(cMRow);
            aSubElem.push(cSubElem);
            aSubName.push(cSubName);

            //window.alert(cMRow + " -> " + cSubElem); 

        }

    } else {
        return;
    }


    //window.alert("End Test");
}


//======================================================================
//======================================================================
//**********************************************************************
//* atstest_dx.js
//* 
//* T E S T I M I S E L
//* 
//* Autor: Ain Teesalu
//* Loodud   - 03.04.2023
//* Muudatus - 16.05.2023  
//* 
//* Otsing (dxf.js): Testimise start...
//**********************************************************************

/**
* atslib_dx - Sõnastiku skeemi kuvamine
* 
* @method atsSchemaViewTest
* @param sRezm {String} - "0"-muuta ei saa, "1"-muutmine .
*/
function atsSchemaViewTest(sRezm) {
    //window.alert(sRezm); 
    cDialogArg = dic_desc + PD + sUsrName + PD + sRezm;
    if (!dhxWins.window("setup")) {
        var w = 1500;
        var h = 1200;
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
* atslib_dx - Skeemi kuvamise andmete ettevalmistamine
* 
* @method atsSchemaInit
* @param  cDpr = x,h jne.
*/
function atsSchemaInit(cDpr) {

    window.alert("Starty 28.04.2023 ...");


    var DPR = cDpr;
    var cMakett1 = "#" + DPR + ":";

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

    var cOperText = "";

    var aArray_Code = [];
    var aArray_Name = [];
    var aArray_Tab = [];
    var aArray_Attr = [];
    var aArray_Min = [];
    var aArray_Max = [];
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
            aArray_Attr.push("");
            aArray_Min.push("");
            aArray_Max.push("");
        }

    }

    nLen = aArray_Code.length;
    for (iz = 0; iz < nLen; iz++) {

        var vvv = aArray_Code[iz];
        var sss = aArray_Tab[iz];
        var cATex = "";
        for (ib = 0; ib < sss; ib++) {
            cATex = cATex + "| ";
        }
        aArray_Tab[iz] = cATex

        var cElemNamm = atsFindAttributes(vvv, yldStruDom);
        cElemNamm = vvv + "|" + cElemNamm;
        var aSplitArraz = cElemNamm.split("|");

        var nLngt = aSplitArraz.length;

        var cTTex = "";
        var cRTex = "";
        for (ib = 0; ib < nLngt; ib++) {

            // Tühjadesse elementidesse lisatakse #
            if (aSplitArraz[ib] == "") {
                aSplitArraz[ib] = "#";
            }
            // Välja nimetusest eraldatakse eestikeelne osa
            if (ib == 4) {
                var aArray = aSplitArraz[ib].split(";");
                aArray_Name[iz] = aArray[0];
                aSplitArraz[ib] = aArray[0];
            }
            // Antud välja min arv
            if (ib == 5) {
                aArray_Min[iz] = aSplitArraz[ib];
            }
            // Antud välja max arv
            if (ib == 6) {
                if (aSplitArraz[ib] == "2000000000") {
                    aSplitArraz[ib] = "∞";
                }
                aArray_Max[iz] = aSplitArraz[ib];
            }
            // Antud välja atribuudid
            if (nLngt > 8) {
                if (ib > 7) {
                    if (aSplitArraz[ib].indexOf(DPR + ":") > -1) {
                        aSplitArraz[ib] = "@" + aSplitArraz[ib];
                        cRTex = cRTex + aSplitArraz[ib] + " ";
                    }
                }
            }
            cTTex = cTTex + aSplitArraz[ib] + " ";
        }
        // Antud välja atribuudid aArray_Attr
        aArray_Attr[iz] = cRTex;


        if (iz < 5) {

            //window.alert(aArray_Name[iz] + " " + aArray_Tab[iz] + " " + aArray_Code[iz] + " " + aArray_Attr[iz] + " " + aArray_Min[iz] + " " + aArray_Max[iz]);

        }

    }
    window.alert("End Test");
    return;
}

/**
* atslib_dx - Elemendi ehk välja nimetuse ja atribuutide leidmine.
* 
* @method atsFindAttributes
* @param  zOtsElem = elemendi ehk välja nimi (näiteks x:m)
* @param  zStrucDom = struktuuri faili DOM
*/
function atsFindAttributes(zOtsElem, zStrucDom) {
    var cAttriName, cRetValue, cAttrValue, cIt, cCt, cTn, cNimi, cMinOcc, cMaxOcc, cMajor;

    // Leiame elemendi...
    var cElemDom = zStrucDom.getElementsByTagName(zOtsElem);

    // Leiame atribuutide arvu
    var nAttrCount = cElemDom.item(0).attributes.length;


    cRetValue = "";
    // Leiame atribuutide väärtused
    for (var k = 0; k < nAttrCount; k++) {
        cAttrValue = "";
        cAttriName = cElemDom.item(0).attributes[k].name;
        if (cAttriName.indexOf("pr_sd:it") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:ct") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:tn") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:nimi") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:minOcc") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:maxOcc") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:major") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        } else if (cAttriName.indexOf("pr_sd:") == -1) {
            cAttrValue = cElemDom.item(0).attributes[k].name;
        } else if (cAttriName.indexOf("pr_sd:att_x_") > -1) {
            cAttrValue = cElemDom.item(0).attributes[k].value;
        }

        if (cRetValue == "") {
            cRetValue = cAttrValue;
        } else {
            cRetValue = cRetValue + "|" + cAttrValue;
        }

    }
    return (cRetValue)
}
