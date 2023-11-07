//**********************************************************************
//* atslib_dx.js
//* Brauserisõltumatu versiooni js.
//*
//* Autor: Ain Teesalu
//* Loodud   - 01.03.2022
//* Muudatus - 27.04.2023  
//**********************************************************************
/**
* atsdat_dx - Subelementide nimekiri sõnastike lõikes
* @method atsSubElemInit
* @param  zzDicIDE = sõnastiku ID
*/
function atsSubElemInittt(zzDicID) {
    switch (zzDicID) {
        case "ets":
            // seisukoht + (sk)
            aElem.push(DICPR + ":sk");
            aSubElem.push("x:w|x:gl|x:ld");
            aSubName.push("sõna|seletus|ladina termin");
            // ploki kommentaar + (com)
            aElem.push(DICPR + ":com");
            aSubElem.push("x:w|x:cx|x:gl|x:ld|x:cvt");
            aSubName.push("sõna|co-vaste|seletus|ladina termin|co-viide");
            // üldkommentaar + (co)
            aElem.push(DICPR + ":co");
            aSubElem.push("x:vk|x:s|x:w|x:cx|x:gl|x:ld|x:kp|x:lht|x:skl|x:cvt");
            aSubName.push("vormikood|stiil|sõna|co-vaste|seletus|ladina termin|keele plokk|lähitüvi|seotud laen|co-viide");
            break;
        case "ysl":
            // tekstiinfo + (txt)
            aElem.push(DICPR + ":txt");
            aSubElem.push("x:w|x:kla|x:x|x:d");
            aSubName.push("sõna|keeleala|vaste|seletus");
            break;
        case "ems":
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":tx");
            aSubName.push("täpsustus");
            // Variant + (var)
            aElem.push(DICPR + ":var");
            aSubElem.push(DICPR + ":var2");
            aSubName.push("variandi variant");
            break;
        case "mul":
            // Muutevorm + (mv)
            aElem.push(DICPR + ":mv");
            aSubElem.push(DICPR + ":khkm");
            aSubName.push("morfo levik");
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":tx");
            aSubName.push("täpsustus");
            break;
        case "sas":
            // Muutevorm + (mv)
            aElem.push(DICPR + ":mv");
            aSubElem.push(DICPR + ":khkm");
            aSubName.push("morfo levik");
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":tx");
            aSubName.push("täpsustus");
            break;
        case "sto":
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":tx");
            aSubName.push("täpsustus");
            break;
        case "kom":
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":r");
            aSubName.push("rektsioon");
            break;
        case "eli":
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":r");
            aSubName.push("rektsioon");
            break;
        case "eud":
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":r");
            aSubName.push("rektsioon");
            break;
        case "ykr":
            // alternatiiv + (a)
            aElem.push(DICPR + ":a");
            aSubElem.push(DICPR + ":vhom");
            aSubName.push("hom-numbri valik");
            // Vaste + (x)
            aElem.push(DICPR + ":x");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("rektsioon");
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":r");
            aSubName.push("rektsioon");
            // Näitetõlge + (qn)
            aElem.push(DICPR + ":qn");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("rektsioon");
            // Seletus + (d)
            aElem.push(DICPR + ":d");
            aSubElem.push(DICPR + ":ld");
            aSubName.push("ladina termin");
            break;
        case "ehu":
            // Seletus + (d)
            aElem.push(DICPR + ":d");
            aSubElem.push(DICPR + ":ld");
            aSubName.push("ladina termin");
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":r");
            aSubName.push("rektsioon");
            // Näitetõlge + (qn)
            aElem.push(DICPR + ":qn");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("rektsioon");
            // Vaste + (x)
            aElem.push(DICPR + ":x");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("rektsioon");
            break;
        case "efi":
            // Vaste + (x)
            aElem.push(DICPR + ":x");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("vaste rektsioon");
            // Muutevorm + (mv)
            aElem.push(DICPR + ":mv");
            aSubElem.push(DICPR + ":s");
            aSubName.push("stiil");
            break;
        case "ev2":
            // vaste + (x)
            aElem.push(DICPR + ":x");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("vaste rektsioon");
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":r");
            aSubName.push("eesti rektsioon");
            // Näitetõlge + (qn)
            aElem.push(DICPR + ":qn");
            aSubElem.push(DICPR + ":xr");
            aSubName.push("rektsioon");
            // fras väljend + (f)
            aElem.push(DICPR + ":f");
            aSubElem.push(DICPR + ":r");
            aSubName.push("eesti rektsioon");
            break;
        case "lug":
            // Muutevorm + (mv)
            aElem.push(DICPR + ":mv");
            aSubElem.push(DICPR + ":khkm");
            aSubName.push("morfo levik");
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":tx");
            aSubName.push("täpsustus");
            break;
        default:
            // Näide + (n)
            aElem.push(DICPR + ":n");
            aSubElem.push(DICPR + ":tx");
            aSubName.push("täpsustus");
    }
} // atsSubElemInit

/**
* ATS
* 
* @method atArtFixParm
* @param {Logic} dK (true,false)
* @param {Logic} dT (true,false)
* @param {Logic} dP (true,false)
*/
function atArtFixParm(dK, dT, dP) {
    var opz = "";
    if (dK) {
        opz = [cDicpr + ':K', 'obj', 'koostaja (K)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':KA', 'obj', 'koostamisaeg (KA)', null];
        aFindArrayOp.push(opz);
    }
    if (dT) {
        opz = [cDicpr + ':T', 'obj', 'toimetaja (T)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':TA', 'obj', 'toimetamisaeg (TA)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':TL', 'obj', 'toimetamise lõpp (TL)', null];
        aFindArrayOp.push(opz);
    }
    if (dP) {
        opz = [cDicpr + ':PT', 'obj', 'peatoimetaja (PT)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':PTA', 'obj', 'peatoimetamise aeg (PTA)', null];
        aFindArrayOp.push(opz);
    }
}

/**
* ATS
* 
* @method atArtLisaOtsValju
* @param {string} cDicID (sõnastiku ID)
*/
function atArtLisaOtsValju(cDicID) {
    var opz = "";
    if (cDicID == "eli") {
        opz = [cDicpr + ':d', 'obj', 'seletus (d)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':n', 'obj', 'näide (n)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':qn', 'obj', 'näitetõlge (qn)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':r', 'obj', 'rektsioon (r)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':KOM', 'obj', 'komentaar (KOM)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "ems") {
        opz = [cDicpr + ':d', 'obj', 'seletus (d)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':n', 'obj', 'näide (n)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "sto") {
        opz = [cDicpr + ':d', 'obj', 'seletus (d)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':n', 'obj', 'näide (n)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':KOM', 'obj', 'komentaar (KOM)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "efi") {
        opz = [cDicpr + ':KOM', 'obj', 'komentaar (KOM)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "ets") {
        opz = [cDicpr + ':po', 'obj', 'päritolu (po)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':x', 'obj', 'vaste (x)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':gl', 'obj', 'seletus (gl)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':aa', 'obj', 'teos: autor aasta (aa)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':KOM', 'obj', 'komentaar (KOM)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':kaut', 'obj', 'kommentaari autor  (kaut)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':kaeg', 'obj', 'kommenteerimisaeg  (kaeg)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "eoc") {
        opz = [cDicpr + ':S', 'obj', 'sisu (S)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':tg', 'obj', 'tähendusgrupp (tg)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':syn', 'obj', 'omakeelne sünonüüm (syn)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "pns") {
        opz = [cDicpr + ':P', 'obj', 'päis (P)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':var', 'obj', 'variant (var)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':ps', 'obj', 'viide emaartiklile (ps)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':freq', 'obj', 'sagedus2017 (freq)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':freq23', 'obj', 'sagedus2023 (freq23)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':levi', 'obj', 'leviandmed (levi)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':kbmg', 'obj', 'päritolugrupp (kbmg)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':mkg', 'obj', 'maakonna grupp (mkg)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':khkg', 'obj', 'kihelkonna grupp (khkg)', null];
        aFindArrayOp.push(opz);
        return;
    }
    if (cDicID == "teo") {
        opz = [cDicpr + ':def', 'obj', 'seletus (def)', null];
        aFindArrayOp.push(opz);
        opz = [cDicpr + ':lisa', 'obj', 'lisaselgitus (lisa)', null];
        aFindArrayOp.push(opz);
        return;
    }
}
