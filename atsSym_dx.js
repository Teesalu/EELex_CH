/**
* ATS0
* 
* @method atsSymbDef
* @param {String} cOper 
*/
function atsSymbDef(cOper) {

    //Märgid
    var CIRCUMFLEX = "&#x005e;";
    var GRAVE = "&#x0060;";
    var NO_BREAK_SPACE = "&#x00a0;";
    var INVERTED_EXCLAMATION = "&#x00a1;";
    var CENT_SIGN = "&#x00a2;";
    var YEN_SIGN = "&#x00a5;";
    var BROKEN_BAR = "&#x00a6;";
    var DIAERESIS = "&#x00a8;";
    var COPYRIGHT_SIGN = "&#x00a9;";
    var NOT_SIGN = "&#x00ac;";
    var REGISTERED_SIGN = "&#x00ae;";
    var MACRON = "&#x00af;";
    var DEGREE_SIGN = "&#x00b0;";
    var PLUS_MINUS_SIGN = "&#x00b1;";
    var ACUTE = "&#x00b4;";
    var MICRO_SIGN = "&#x00b5;";
    var PILCROW_SIGN = "&#x00b6;";
    var MIDDLE_DOT = "&#x00b7;";
    var CEDILLA = "&#x00b8;";
    var INVERTED_QUESTION = "&#x00bf;";
    var MULTIPLICATION_SIGN = "&#x00d7;";
    var DIVISION_SIGN = "&#x00f7;"

    var EN_DASH = "&#x2013;";
    var LEFT_SINGLE_QUOTATION_MARK = "&#x2018;";
    var RIGHT_SINGLE_QUOTATION_MARK = "&#x2019;";
    var RIGHT_DOUBLE_QUOTATION_MARK = "&#x201d;";
    var DOUBLE_LOW9_QUOTATION_MARK = "&#x201e;";
    var BULLET = "&#x2022;";
    var TRIANGULAR_BULLET = "&#x2023;";
    var PRIME = "&#x2032;";
    var DOUBLE_PRIME = "&#x2033;";
    var FRACTION_SLASH = "&#x2044;";
    var OHM_SIGN = "&#x2126;";
    var ANGSTROM_SIGN = "&#x212b;"; //'Arial Unicode MS;
    var LEFTWARDS_ARROW = "&#x2190;";
    var UPWARDS_ARROW = "&#x2191;";
    var RIGHTWARDS_ARROW = "&#x2192;";
    var DOWNWARDS_ARROW = "&#x2193;"

    var EMPTY_SET = "&#x2205;";
    var DIVISION_SLASH = "&#x2215;";
    var eeLex_INFINITY = "&#x221e;";
    var LOGICAL_OR = "&#x2228;"; //'Arial Unicode MS;
    var INTEGRAL = "&#x222b;"

    var BLACK_RIGHT_POINTING_POINTER = "&#x25ba;"

    var MUSIC_FLAT_SIGN = "&#x266d;"; //'Arial Unicode MS, bemoll;
    var MUSIC_NATURAL_SIGN = "&#x266e;"; //'Arial Unicode MS, bekaar;
    var MUSIC_SHARP_SIGN = "&#x266f;"; //'Arial Unicode MS, diees

    var COMBINING_GRAVE = "&#x0300;";
    var COMBINING_ACUTE = "&#x0301;";
    var COMBINING_CIRCUMFLEX = "&#x0302;";
    var COMBINING_TILDE = "&#x0303;";
    var COMBINING_MACRON = "&#x0304;";
    var COMBINING_OVERLINE = "&#x0305;";
    var COMBINING_BREVE = "&#x0306;";
    var COMBINING_DOT_ABOVE = "&#x0307;";
    var COMBINING_DIAERESIS = "&#x0308;"

    var inssym = "";
    switch (cOper) {
        case "mnu01":

            inssym = inssym + "<span class='btn' title='Kursiivis ehk: &ehk;" + "&#34;)' onclick='mySym(&#34;" + "&Hrl;" + "&#34;)' style='font-style:italic'>ehk</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis Hrl: &Hrl;" + "&#34;)' onclick='mySym(&#34;" + "&Hrl;" + "&#34;)' style='font-style:italic'>Hrl</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis hrl: &hrl;" + "&#34;)' onclick='mySym(&#34;" + "&hrl;" + "&#34;)' style='font-style:italic'>hrl</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis ja: &ja;" + "&#34;)' onclick='mySym(&#34;" + "&ja;" + "&#34;)' style='font-style:italic'>ja</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis jne: &jne;" + "&#34;)' onclick='mySym(&#34;" + "&jne;" + "&#34;)' style='font-style:italic'>jne</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis jt: &jt;" + "&#34;)' onclick='mySym(&#34;" + "&jt;" + "&#34;)' style='font-style:italic'>jt</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis ka: &ka;" + "&#34;)' onclick='mySym(&#34;" + "&ka;" + "&#34;)'  style='font-style:italic'>ka</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis nt: &nt;" + "&#34;)' onclick='mySym(&#34;" + "&nt;" + "&#34;)' style='font-style:italic'>nt</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis puudub: &puudub;" + "&#34;)' onclick='mySym(&#34;" + "&puudub;" + "&#34;)' style='font-style:italic'>puudub</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis v: &v;" + "&#34;)' onclick='mySym(&#34;" + "&v;" + "&#34;)' style='font-style:italic'>v</span>";

            inssym = inssym + "<span class='btn' title='Kursiivis vm: &vm;" + "&#34;)' onclick='mySym(&#34;" + "&vm;" + "&#34;)' style='font-style:italic'>vm</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis vms: &vms;" + "&#34;)' onclick='mySym(&#34;" + "&vms;" + "&#34;)' style='font-style:italic'>vms</span>";
            // Lisatud Vene õpilase ÕSi tarbeks
            inssym = inssym + "<span class='btn' title='Kursiivis напр.: +напр.;" + "&#34;)' onclick='mySym(&#34;" + "+напр.;" + "&#34;)' style='font-style:italic'>напр.</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis и др.: +и др.;" + "&#34;)' onclick='mySym(&#34;" + "+и др.;" + "&#34;)' style='font-style:italic'>и&nbsp;др.</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis и т. п.: +и т. п.;" + "&#34;)' onclick='mySym(&#34;" + "+и т. п.;" + "&#34;)' style='font-style:italic'>и&nbsp;т.&nbsp;п.</span>";
            inssym = inssym + "<span class='btn' title='Kursiivis г.: +г.;" + "&#34;)' onclick='mySym(&#34;" + "+г.;" + "&#34;)' style='font-style:italic'>г.</span>";
            inssym = inssym + "<span class='btn' title='Väiksem kui <' onclick='mySym(&#34;" + "&lt;" + "&#34;)'>&lt;</span>";
            inssym = inssym + "<span class='btn' title='Suurem kui >' onclick='mySym(&#34;" + "&gt;" + "&#34;)'>&gt;</span>";
            inssym = inssym + "<span class='btn' title='Kirjastiili muutuse algus: &ema;" + "&#34;)' onclick='mySym(&#34;" + "&ema;" + "&#34;)'>&ema;</span>";
            inssym = inssym + "<span class='btn' title='Kirjastiili muutuse lõpp: &eml;" + "&#34;)' onclick='mySym(&#34;" + "&eml;" + "&#34;)'>&eml;</span>";
            inssym = inssym + "<span class='btn' title='Alaindeksi algus: &suba;" + "&#34;)' onclick='mySym(&#34;" + "&suba;" + "&#34;)'>&suba;</span>";
            inssym = inssym + "<span class='btn' title='Alaindeksi lõpp: &subl;" + "&#34;)' onclick='mySym(&#34;" + "&subl;" + "&#34;)'>&subl;</span>";
            inssym = inssym + "<span class='btn' title='Ülaindeksi algus: &supa;" + "&#34;)' onclick='mySym(&#34;" + "&supa;" + "&#34;)'>&supa;</span>";
            inssym = inssym + "<span class='btn' title='Ülaindeksi lõpp: &supl;" + "&#34;)' onclick='mySym(&#34;" + "&supl;" + "&#34;)'>&supl;</span>";
            inssym = inssym + "<span class='btn' title='Poolpaks algus: &ba;" + "&#34;)' onclick='mySym(&#34;" + "&ba;" + "&#34;)'>&ba;</span>";
            inssym = inssym + "<span class='btn' title='Poolpaks lõpp: &bl;" + "&#34;)' onclick='mySym(&#34;" + "&bl;" + "&#34;)'>&bl;</span>";
            //inssym = inssym + "<span class='btn' title='Allajoonitud algus: &la;" + "&#34;)' onclick='mySym(&#34;" + "&la;" + "&#34;)'>&la;</span>";
            //inssym = inssym + "<span class='btn' title='Allajoonitud lõpp: &ll;" + "&#34;)' onclick='mySym(&#34;" + "&ll;" + "&#34;)'>&ll;</span>";
            break;
        case "mnu02":

            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0041;" + "&#34;)' title='U+0041'>&#x0041;</span>"; //'A
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0061;" + "&#34;)' title='U+0061'>&#x0061;</span>"; //'a
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C0;" + "&#34;)' title='U+00C0'>&#x00C0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E0;" + "&#34;)' title='U+00E0'>&#x00E0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C1;" + "&#34;)' title='U+00C1'>&#x00C1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E1;" + "&#34;)' title='U+00E1'>&#x00E1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C2;" + "&#34;)' title='U+00C2'>&#x00C2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E2;" + "&#34;)' title='U+00E2'>&#x00E2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C3;" + "&#34;)' title='U+00C3'>&#x00C3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E3;" + "&#34;)' title='U+00E3'>&#x00E3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C5;" + "&#34;)' title='U+00C5'>&#x00C5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E5;" + "&#34;)' title='U+00E5'>&#x00E5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0100;" + "&#34;)' title='U+0100'>&#x0100;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0101;" + "&#34;)' title='U+0101'>&#x0101;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0102;" + "&#34;)' title='U+0102'>&#x0102;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0103;" + "&#34;)' title='U+0103'>&#x0103;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0104;" + "&#34;)' title='U+0104'>&#x0104;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0105;" + "&#34;)' title='U+0105'>&#x0105;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01CD;" + "&#34;)' title='U+01CD'>&#x01CD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01CE;" + "&#34;)' title='U+01CE'>&#x01CE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E0;" + "&#34;)' title='U+01E0'>&#x01E0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E1;" + "&#34;)' title='U+01E1'>&#x01E1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01FA;" + "&#34;)' title='U+01FA'>&#x01FA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01FB;" + "&#34;)' title='U+01FB'>&#x01FB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0200;" + "&#34;)' title='U+0200'>&#x0200;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0201;" + "&#34;)' title='U+0201'>&#x0201;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0202;" + "&#34;)' title='U+0202'>&#x0202;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0203;" + "&#34;)' title='U+0203'>&#x0203;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E00;" + "&#34;)' title='U+1E00'>&#x1E00;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E01;" + "&#34;)' title='U+1E01'>&#x1E01;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA0;" + "&#34;)' title='U+1EA0'>&#x1EA0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA1;" + "&#34;)' title='U+1EA1'>&#x1EA1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA2;" + "&#34;)' title='U+1EA2'>&#x1EA2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA3;" + "&#34;)' title='U+1EA3'>&#x1EA3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA4;" + "&#34;)' title='U+1EA4'>&#x1EA4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA5;" + "&#34;)' title='U+1EA5'>&#x1EA5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA6;" + "&#34;)' title='U+1EA6'>&#x1EA6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA7;" + "&#34;)' title='U+1EA7'>&#x1EA7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA8;" + "&#34;)' title='U+1EA8'>&#x1EA8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EA9;" + "&#34;)' title='U+1EA9'>&#x1EA9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EAA;" + "&#34;)' title='U+1EAA'>&#x1EAA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EAB;" + "&#34;)' title='U+1EAB'>&#x1EAB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EAC;" + "&#34;)' title='U+1EAC'>&#x1EAC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EAD;" + "&#34;)' title='U+1EAD'>&#x1EAD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EAE;" + "&#34;)' title='U+1EAE'>&#x1EAE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EAF;" + "&#34;)' title='U+1EAF'>&#x1EAF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB0;" + "&#34;)' title='U+1EB0'>&#x1EB0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB1;" + "&#34;)' title='U+1EB1'>&#x1EB1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB2;" + "&#34;)' title='U+1EB2'>&#x1EB2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB3;" + "&#34;)' title='U+1EB3'>&#x1EB3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB4;" + "&#34;)' title='U+1EB4'>&#x1EB4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB5;" + "&#34;)' title='U+1EB5'>&#x1EB5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB6;" + "&#34;)' title='U+1EB6'>&#x1EB6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB7;" + "&#34;)' title='U+1EB7'>&#x1EB7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C4;" + "&#34;)' title='U+00C4'>&#x00C4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E4;" + "&#34;)' title='U+00E4'>&#x00E4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01DE;" + "&#34;)' title='U+01DE'>&#x01DE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01DF;" + "&#34;)' title='U+01DF'>&#x01DF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0042;" + "&#34;)' title='U+0042'>&#x0042;</span>"; //'B
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0062;" + "&#34;)' title='U+0062'>&#x0062;</span>"; //'b
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0182;" + "&#34;)' title='U+0182'>&#x0182;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0183;" + "&#34;)' title='U+0183'>&#x0183;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0184;" + "&#34;)' title='U+0184'>&#x0184;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0185;" + "&#34;)' title='U+0185'>&#x0185;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E02;" + "&#34;)' title='U+1E02'>&#x1E02;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E03;" + "&#34;)' title='U+1E03'>&#x1E03;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E04;" + "&#34;)' title='U+1E04'>&#x1E04;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E05;" + "&#34;)' title='U+1E05'>&#x1E05;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E06;" + "&#34;)' title='U+1E06'>&#x1E06;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E07;" + "&#34;)' title='U+1E07'>&#x1E07;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0043;" + "&#34;)' title='U+0043'>&#x0043;</span>"; //'C
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0063;" + "&#34;)' title='U+0063'>&#x0063;</span>"; //'c
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C7;" + "&#34;)' title='U+00C7'>&#x00C7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E7;" + "&#34;)' title='U+00E7'>&#x00E7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0106;" + "&#34;)' title='U+0106'>&#x0106;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0107;" + "&#34;)' title='U+0107'>&#x0107;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0108;" + "&#34;)' title='U+0108'>&#x0108;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0109;" + "&#34;)' title='U+0109'>&#x0109;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x010A;" + "&#34;)' title='U+010A'>&#x010A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x010B;" + "&#34;)' title='U+010B'>&#x010B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x010C;" + "&#34;)' title='U+010C'>&#x010C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x010D;" + "&#34;)' title='U+010D'>&#x010D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0187;" + "&#34;)' title='U+0187'>&#x0187;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0188;" + "&#34;)' title='U+0188'>&#x0188;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E08;" + "&#34;)' title='U+1E08'>&#x1E08;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E09;" + "&#34;)' title='U+1E09'>&#x1E09;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0044;" + "&#34;)' title='U+0044'>&#x0044;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0064;" + "&#34;)' title='U+0064'>&#x0064;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D0;" + "&#34;)' title='U+00D0'>&#x00D0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F0;" + "&#34;)' title='U+00F0'>&#x00F0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x010E;" + "&#34;)' title='U+010E'>&#x010E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x010F;" + "&#34;)' title='U+010F'>&#x010F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0110;" + "&#34;)' title='U+0110'>&#x0110;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0111;" + "&#34;)' title='U+0111'>&#x0111;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x018B;" + "&#34;)' title='U+018B'>&#x018B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x018C;" + "&#34;)' title='U+018C'>&#x018C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E0A;" + "&#34;)' title='U+1E0A'>&#x1E0A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E0B;" + "&#34;)' title='U+1E0B'>&#x1E0B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E0C;" + "&#34;)' title='U+1E0C'>&#x1E0C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E0D;" + "&#34;)' title='U+1E0D'>&#x1E0D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E0E;" + "&#34;)' title='U+1E0E'>&#x1E0E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E0F;" + "&#34;)' title='U+1E0F'>&#x1E0F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E10;" + "&#34;)' title='U+1E10'>&#x1E10;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E11;" + "&#34;)' title='U+1E11'>&#x1E11;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E12;" + "&#34;)' title='U+1E12'>&#x1E12;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E13;" + "&#34;)' title='U+1E13'>&#x1E13;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0045;" + "&#34;)' title='U+0045'>&#x0045;</span>"; //'E
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0065;" + "&#34;)' title='U+0065'>&#x0065;</span>"; //'e
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C8;" + "&#34;)' title='U+00C8'>&#x00C8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E8;" + "&#34;)' title='U+00E8'>&#x00E8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C9;" + "&#34;)' title='U+00C9'>&#x00C9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E9;" + "&#34;)' title='U+00E9'>&#x00E9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00CA;" + "&#34;)' title='U+00CA'>&#x00CA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00EA;" + "&#34;)' title='U+00EA'>&#x00EA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00CB;" + "&#34;)' title='U+00CB'>&#x00CB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00EB;" + "&#34;)' title='U+00EB'>&#x00EB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0112;" + "&#34;)' title='U+0112'>&#x0112;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0113;" + "&#34;)' title='U+0113'>&#x0113;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0114;" + "&#34;)' title='U+0114'>&#x0114;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0115;" + "&#34;)' title='U+0115'>&#x0115;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0116;" + "&#34;)' title='U+0116'>&#x0116;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0117;" + "&#34;)' title='U+0117'>&#x0117;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0118;" + "&#34;)' title='U+0118'>&#x0118;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0119;" + "&#34;)' title='U+0119'>&#x0119;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x011A;" + "&#34;)' title='U+011A'>&#x011A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x011B;" + "&#34;)' title='U+011B'>&#x011B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0204;" + "&#34;)' title='U+0204'>&#x0204;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0205;" + "&#34;)' title='U+0205'>&#x0205;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0206;" + "&#34;)' title='U+0206'>&#x0206;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0207;" + "&#34;)' title='U+0207'>&#x0207;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E14;" + "&#34;)' title='U+1E14'>&#x1E14;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E15;" + "&#34;)' title='U+1E15'>&#x1E15;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E16;" + "&#34;)' title='U+1E16'>&#x1E16;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E17;" + "&#34;)' title='U+1E17'>&#x1E17;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E18;" + "&#34;)' title='U+1E18'>&#x1E18;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E19;" + "&#34;)' title='U+1E19'>&#x1E19;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E1A;" + "&#34;)' title='U+1E1A'>&#x1E1A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E1B;" + "&#34;)' title='U+1E1B'>&#x1E1B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E1C;" + "&#34;)' title='U+1E1C'>&#x1E1C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E1D;" + "&#34;)' title='U+1E1D'>&#x1E1D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB8;" + "&#34;)' title='U+1EB8'>&#x1EB8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EB9;" + "&#34;)' title='U+1EB9'>&#x1EB9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EBA;" + "&#34;)' title='U+1EBA'>&#x1EBA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EBB;" + "&#34;)' title='U+1EBB'>&#x1EBB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EBC;" + "&#34;)' title='U+1EBC'>&#x1EBC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EBD;" + "&#34;)' title='U+1EBD'>&#x1EBD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EBE;" + "&#34;)' title='U+1EBE'>&#x1EBE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EBF;" + "&#34;)' title='U+1EBF'>&#x1EBF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC0;" + "&#34;)' title='U+1EC0'>&#x1EC0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC1;" + "&#34;)' title='U+1EC1'>&#x1EC1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC2;" + "&#34;)' title='U+1EC2'>&#x1EC2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC3;" + "&#34;)' title='U+1EC3'>&#x1EC3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC4;" + "&#34;)' title='U+1EC4'>&#x1EC4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC5;" + "&#34;)' title='U+1EC5'>&#x1EC5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC6;" + "&#34;)' title='U+1EC6'>&#x1EC6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC7;" + "&#34;)' title='U+1EC7'>&#x1EC7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0046;" + "&#34;)' title='U+0046'>&#x0046;</span>"; //'F
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0066;" + "&#34;)' title='U+0066'>&#x0066;</span>"; //'f
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0191;" + "&#34;)' title='U+0191'>&#x0191;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0192;" + "&#34;)' title='U+0192'>&#x0192;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E1E;" + "&#34;)' title='U+1E1E'>&#x1E1E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E1F;" + "&#34;)' title='U+1E1F'>&#x1E1F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0047;" + "&#34;)' title='U+0047'>&#x0047;</span>"; //'G
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0067;" + "&#34;)' title='U+0067'>&#x0067;</span>"; //'g
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x011C;" + "&#34;)' title='U+011C'>&#x011C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x011D;" + "&#34;)' title='U+011D'>&#x011D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x011E;" + "&#34;)' title='U+011E'>&#x011E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x011F;" + "&#34;)' title='U+011F'>&#x011F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0120;" + "&#34;)' title='U+0120'>&#x0120;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0121;" + "&#34;)' title='U+0121'>&#x0121;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0122;" + "&#34;)' title='U+0122'>&#x0122;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0123;" + "&#34;)' title='U+0123'>&#x0123;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E4;" + "&#34;)' title='U+01E4'>&#x01E4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E5;" + "&#34;)' title='U+01E5'>&#x01E5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E6;" + "&#34;)' title='U+01E6'>&#x01E6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E7;" + "&#34;)' title='U+01E7'>&#x01E7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01F4;" + "&#34;)' title='U+01F4'>&#x01F4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01F5;" + "&#34;)' title='U+01F5'>&#x01F5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E20;" + "&#34;)' title='U+1E20'>&#x1E20;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E21;" + "&#34;)' title='U+1E21'>&#x1E21;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0048;" + "&#34;)' title='U+0048'>&#x0048;</span>"; //'H
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0068;" + "&#34;)' title='U+0068'>&#x0068;</span>"; //'h
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0124;" + "&#34;)' title='U+0124'>&#x0124;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0125;" + "&#34;)' title='U+0125'>&#x0125;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0126;" + "&#34;)' title='U+0126'>&#x0126;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0127;" + "&#34;)' title='U+0127'>&#x0127;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E22;" + "&#34;)' title='U+1E22'>&#x1E22;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E23;" + "&#34;)' title='U+1E23'>&#x1E23;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E24;" + "&#34;)' title='U+1E24'>&#x1E24;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E25;" + "&#34;)' title='U+1E25'>&#x1E25;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E26;" + "&#34;)' title='U+1E26'>&#x1E26;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E27;" + "&#34;)' title='U+1E27'>&#x1E27;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E28;" + "&#34;)' title='U+1E28'>&#x1E28;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E29;" + "&#34;)' title='U+1E29'>&#x1E29;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E2A;" + "&#34;)' title='U+1E2A'>&#x1E2A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E2B;" + "&#34;)' title='U+1E2B'>&#x1E2B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0049;" + "&#34;)' title='U+0049'>&#x0049;</span>"; //'I
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0069;" + "&#34;)' title='U+0069'>&#x0069;</span>"; //'i
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00CC;" + "&#34;)' title='U+00CC'>&#x00CC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00EC;" + "&#34;)' title='U+00EC'>&#x00EC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00CD;" + "&#34;)' title='U+00CD'>&#x00CD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00ED;" + "&#34;)' title='U+00ED'>&#x00ED;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00CE;" + "&#34;)' title='U+00CE'>&#x00CE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00EE;" + "&#34;)' title='U+00EE'>&#x00EE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00CF;" + "&#34;)' title='U+00CF'>&#x00CF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00EF;" + "&#34;)' title='U+00EF'>&#x00EF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0128;" + "&#34;)' title='U+0128'>&#x0128;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0129;" + "&#34;)' title='U+0129'>&#x0129;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x012A;" + "&#34;)' title='U+012A'>&#x012A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x012B;" + "&#34;)' title='U+012B'>&#x012B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x012C;" + "&#34;)' title='U+012C'>&#x012C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x012D;" + "&#34;)' title='U+012D'>&#x012D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x012E;" + "&#34;)' title='U+012E'>&#x012E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x012F;" + "&#34;)' title='U+012F'>&#x012F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0130;" + "&#34;)' title='U+0130'>&#x0130;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0131;" + "&#34;)' title='U+0131'>&#x0131;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01CF;" + "&#34;)' title='U+01CF'>&#x01CF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D0;" + "&#34;)' title='U+01D0'>&#x01D0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0208;" + "&#34;)' title='U+0208'>&#x0208;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0209;" + "&#34;)' title='U+0209'>&#x0209;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x020A;" + "&#34;)' title='U+020A'>&#x020A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x020B;" + "&#34;)' title='U+020B'>&#x020B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E2C;" + "&#34;)' title='U+1E2C'>&#x1E2C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E2D;" + "&#34;)' title='U+1E2D'>&#x1E2D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E2E;" + "&#34;)' title='U+1E2E'>&#x1E2E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E2F;" + "&#34;)' title='U+1E2F'>&#x1E2F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC8;" + "&#34;)' title='U+1EC8'>&#x1EC8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EC9;" + "&#34;)' title='U+1EC9'>&#x1EC9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ECA;" + "&#34;)' title='U+1ECA'>&#x1ECA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ECB;" + "&#34;)' title='U+1ECB'>&#x1ECB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x004A;" + "&#34;)' title='U+004A'>&#x004A;</span>"; //'J
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x006A;" + "&#34;)' title='U+006A'>&#x006A;</span>"; //'j
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0134;" + "&#34;)' title='U+0134'>&#x0134;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0135;" + "&#34;)' title='U+0135'>&#x0135;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x004B;" + "&#34;)' title='U+004B'>&#x004B;</span>"; //'K
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x006B;" + "&#34;)' title='U+006B'>&#x006B;</span>"; //'k
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0136;" + "&#34;)' title='U+0136'>&#x0136;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0137;" + "&#34;)' title='U+0137'>&#x0137;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0198;" + "&#34;)' title='U+0198'>&#x0198;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0199;" + "&#34;)' title='U+0199'>&#x0199;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E8;" + "&#34;)' title='U+01E8'>&#x01E8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E9;" + "&#34;)' title='U+01E9'>&#x01E9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E30;" + "&#34;)' title='U+1E30'>&#x1E30;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E31;" + "&#34;)' title='U+1E31'>&#x1E31;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E32;" + "&#34;)' title='U+1E32'>&#x1E32;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E33;" + "&#34;)' title='U+1E33'>&#x1E33;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E34;" + "&#34;)' title='U+1E34'>&#x1E34;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E35;" + "&#34;)' title='U+1E35'>&#x1E35;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x004C;" + "&#34;)' title='U+004C'>&#x004C;</span>"; //'L
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x006C;" + "&#34;)' title='U+006C'>&#x006C;</span>"; //'l
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0139;" + "&#34;)' title='U+0139'>&#x0139;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x013A;" + "&#34;)' title='U+013A'>&#x013A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x013B;" + "&#34;)' title='U+013B'>&#x013B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x013C;" + "&#34;)' title='U+013C'>&#x013C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x013D;" + "&#34;)' title='U+013D'>&#x013D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x013E;" + "&#34;)' title='U+013E'>&#x013E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x013F;" + "&#34;)' title='U+013F'>&#x013F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0140;" + "&#34;)' title='U+0140'>&#x0140;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0141;" + "&#34;)' title='U+0141'>&#x0141;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0142;" + "&#34;)' title='U+0142'>&#x0142;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E36;" + "&#34;)' title='U+1E36'>&#x1E36;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E37;" + "&#34;)' title='U+1E37'>&#x1E37;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E38;" + "&#34;)' title='U+1E38'>&#x1E38;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E39;" + "&#34;)' title='U+1E39'>&#x1E39;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E3A;" + "&#34;)' title='U+1E3A'>&#x1E3A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E3B;" + "&#34;)' title='U+1E3B'>&#x1E3B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E3C;" + "&#34;)' title='U+1E3C'>&#x1E3C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E3D;" + "&#34;)' title='U+1E3D'>&#x1E3D;</span>";
            break;
        case "mnu03":

            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x004D;" + "&#34;)' title='U+004D'>&#x004D;</span>"; //'M
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x006D;" + "&#34;)' title='U+006D'>&#x006D;</span>"; //'m
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E3E;" + "&#34;)' title='U+1E3E'>&#x1E3E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E3F;" + "&#34;)' title='U+1E3F'>&#x1E3F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E40;" + "&#34;)' title='U+1E40'>&#x1E40;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E41;" + "&#34;)' title='U+1E41'>&#x1E41;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E42;" + "&#34;)' title='U+1E42'>&#x1E42;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E43;" + "&#34;)' title='U+1E43'>&#x1E43;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x004E;" + "&#34;)' title='U+004E'>&#x004E;</span>"; //'N
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x006E;" + "&#34;)' title='U+006E'>&#x006E;</span>"; //'n
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D1;" + "&#34;)' title='U+00D1'>&#x00D1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F1;" + "&#34;)' title='U+00F1'>&#x00F1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0143;" + "&#34;)' title='U+0143'>&#x0143;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0144;" + "&#34;)' title='U+0144'>&#x0144;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0145;" + "&#34;)' title='U+0145'>&#x0145;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0146;" + "&#34;)' title='U+0146'>&#x0146;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0147;" + "&#34;)' title='U+0147'>&#x0147;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0148;" + "&#34;)' title='U+0148'>&#x0148;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014A;" + "&#34;)' title='U+014A'>&#x014A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014B;" + "&#34;)' title='U+014B'>&#x014B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E44;" + "&#34;)' title='U+1E44'>&#x1E44;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E45;" + "&#34;)' title='U+1E45'>&#x1E45;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E46;" + "&#34;)' title='U+1E46'>&#x1E46;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E47;" + "&#34;)' title='U+1E47'>&#x1E47;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E48;" + "&#34;)' title='U+1E48'>&#x1E48;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E49;" + "&#34;)' title='U+1E49'>&#x1E49;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E4A;" + "&#34;)' title='U+1E4A'>&#x1E4A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E4B;" + "&#34;)' title='U+1E4B'>&#x1E4B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x004F;" + "&#34;)' title='U+004F'>&#x004F;</span>"; //'O
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x006F;" + "&#34;)' title='U+006F'>&#x006F;</span>"; //'o
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D2;" + "&#34;)' title='U+00D2'>&#x00D2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F2;" + "&#34;)' title='U+00F2'>&#x00F2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D3;" + "&#34;)' title='U+00D3'>&#x00D3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F3;" + "&#34;)' title='U+00F3'>&#x00F3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D4;" + "&#34;)' title='U+00D4'>&#x00D4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F4;" + "&#34;)' title='U+00F4'>&#x00F4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D8;" + "&#34;)' title='U+00D8'>&#x00D8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F8;" + "&#34;)' title='U+00F8'>&#x00F8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014C;" + "&#34;)' title='U+014C'>&#x014C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014D;" + "&#34;)' title='U+014D'>&#x014D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014E;" + "&#34;)' title='U+014E'>&#x014E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014F;" + "&#34;)' title='U+014F'>&#x014F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0150;" + "&#34;)' title='U+0150'>&#x0150;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0151;" + "&#34;)' title='U+0151'>&#x0151;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01A0;" + "&#34;)' title='U+01A0'>&#x01A0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01A1;" + "&#34;)' title='U+01A1'>&#x01A1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D1;" + "&#34;)' title='U+01D1'>&#x01D1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D2;" + "&#34;)' title='U+01D2'>&#x01D2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01EA;" + "&#34;)' title='U+01EA'>&#x01EA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01EB;" + "&#34;)' title='U+01EB'>&#x01EB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01EC;" + "&#34;)' title='U+01EC'>&#x01EC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01ED;" + "&#34;)' title='U+01ED'>&#x01ED;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01FE;" + "&#34;)' title='U+01FE'>&#x01FE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01FF;" + "&#34;)' title='U+01FF'>&#x01FF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x020C;" + "&#34;)' title='U+020C'>&#x020C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x020D;" + "&#34;)' title='U+020D'>&#x020D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x020E;" + "&#34;)' title='U+020E'>&#x020E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x020F;" + "&#34;)' title='U+020F'>&#x020F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E50;" + "&#34;)' title='U+1E50'>&#x1E50;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E51;" + "&#34;)' title='U+1E51'>&#x1E51;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E52;" + "&#34;)' title='U+1E52'>&#x1E52;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E53;" + "&#34;)' title='U+1E53'>&#x1E53;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ECC;" + "&#34;)' title='U+1ECC'>&#x1ECC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ECD;" + "&#34;)' title='U+1ECD'>&#x1ECD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ECE;" + "&#34;)' title='U+1ECE'>&#x1ECE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ECF;" + "&#34;)' title='U+1ECF'>&#x1ECF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED0;" + "&#34;)' title='U+1ED0'>&#x1ED0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED1;" + "&#34;)' title='U+1ED1'>&#x1ED1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED2;" + "&#34;)' title='U+1ED2'>&#x1ED2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED3;" + "&#34;)' title='U+1ED3'>&#x1ED3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED4;" + "&#34;)' title='U+1ED4'>&#x1ED4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED5;" + "&#34;)' title='U+1ED5'>&#x1ED5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED6;" + "&#34;)' title='U+1ED6'>&#x1ED6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED7;" + "&#34;)' title='U+1ED7'>&#x1ED7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED8;" + "&#34;)' title='U+1ED8'>&#x1ED8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1ED9;" + "&#34;)' title='U+1ED9'>&#x1ED9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EDA;" + "&#34;)' title='U+1EDA'>&#x1EDA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EDB;" + "&#34;)' title='U+1EDB'>&#x1EDB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EDC;" + "&#34;)' title='U+1EDC'>&#x1EDC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EDD;" + "&#34;)' title='U+1EDD'>&#x1EDD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EDE;" + "&#34;)' title='U+1EDE'>&#x1EDE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EDF;" + "&#34;)' title='U+1EDF'>&#x1EDF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE0;" + "&#34;)' title='U+1EE0'>&#x1EE0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE1;" + "&#34;)' title='U+1EE1'>&#x1EE1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE2;" + "&#34;)' title='U+1EE2'>&#x1EE2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE3;" + "&#34;)' title='U+1EE3'>&#x1EE3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D5;" + "&#34;)' title='U+00D5'>&#x00D5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F5;" + "&#34;)' title='U+00F5'>&#x00F5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E4C;" + "&#34;)' title='U+1E4C'>&#x1E4C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E4D;" + "&#34;)' title='U+1E4D'>&#x1E4D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E4E;" + "&#34;)' title='U+1E4E'>&#x1E4E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E4F;" + "&#34;)' title='U+1E4F'>&#x1E4F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D6;" + "&#34;)' title='U+00D6'>&#x00D6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F6;" + "&#34;)' title='U+00F6'>&#x00F6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0050;" + "&#34;)' title='U+0050'>&#x0050;</span>"; //'P
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0070;" + "&#34;)' title='U+0070'>&#x0070;</span>"; //'p
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01A4;" + "&#34;)' title='U+01A4'>&#x01A4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01A5;" + "&#34;)' title='U+01A5'>&#x01A5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E54;" + "&#34;)' title='U+1E54'>&#x1E54;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E55;" + "&#34;)' title='U+1E55'>&#x1E55;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E56;" + "&#34;)' title='U+1E56'>&#x1E56;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E57;" + "&#34;)' title='U+1E57'>&#x1E57;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0051;" + "&#34;)' title='U+0051'>&#x0051;</span>"; //'Q
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0071;" + "&#34;)' title='U+0071'>&#x0071;</span>"; //'q
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0052;" + "&#34;)' title='U+0052'>&#x0052;</span>"; //'R
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0072;" + "&#34;)' title='U+0072'>&#x0072;</span>"; //'r
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0154;" + "&#34;)' title='U+0154'>&#x0154;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0155;" + "&#34;)' title='U+0155'>&#x0155;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0156;" + "&#34;)' title='U+0156'>&#x0156;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0157;" + "&#34;)' title='U+0157'>&#x0157;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0158;" + "&#34;)' title='U+0158'>&#x0158;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0159;" + "&#34;)' title='U+0159'>&#x0159;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0210;" + "&#34;)' title='U+0210'>&#x0210;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0211;" + "&#34;)' title='U+0211'>&#x0211;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0212;" + "&#34;)' title='U+0212'>&#x0212;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0213;" + "&#34;)' title='U+0213'>&#x0213;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E58;" + "&#34;)' title='U+1E58'>&#x1E58;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E59;" + "&#34;)' title='U+1E59'>&#x1E59;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E5A;" + "&#34;)' title='U+1E5A'>&#x1E5A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E5B;" + "&#34;)' title='U+1E5B'>&#x1E5B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E5C;" + "&#34;)' title='U+1E5C'>&#x1E5C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E5D;" + "&#34;)' title='U+1E5D'>&#x1E5D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E5E;" + "&#34;)' title='U+1E5E'>&#x1E5E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E5F;" + "&#34;)' title='U+1E5F'>&#x1E5F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0053;" + "&#34;)' title='U+0053'>&#x0053;</span>"; //'S
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0073;" + "&#34;)' title='U+0073'>&#x0073;</span>"; //'s
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x015A;" + "&#34;)' title='U+015A'>&#x015A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x015B;" + "&#34;)' title='U+015B'>&#x015B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x015C;" + "&#34;)' title='U+015C'>&#x015C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x015D;" + "&#34;)' title='U+015D'>&#x015D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x015E;" + "&#34;)' title='U+015E'>&#x015E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x015F;" + "&#34;)' title='U+015F'>&#x015F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E60;" + "&#34;)' title='U+1E60'>&#x1E60;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E61;" + "&#34;)' title='U+1E61'>&#x1E61;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E62;" + "&#34;)' title='U+1E62'>&#x1E62;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E63;" + "&#34;)' title='U+1E63'>&#x1E63;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E64;" + "&#34;)' title='U+1E64'>&#x1E64;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E65;" + "&#34;)' title='U+1E65'>&#x1E65;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E68;" + "&#34;)' title='U+1E68'>&#x1E68;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E69;" + "&#34;)' title='U+1E69'>&#x1E69;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0160;" + "&#34;)' title='U+0160'>&#x0160;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0161;" + "&#34;)' title='U+0161'>&#x0161;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E66;" + "&#34;)' title='U+1E66'>&#x1E66;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E67;" + "&#34;)' title='U+1E67'>&#x1E67;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0054;" + "&#34;)' title='U+0054'>&#x0054;</span>"; //'T
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0074;" + "&#34;)' title='U+0074'>&#x0074;</span>"; //'t
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0162;" + "&#34;)' title='U+0162'>&#x0162;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0163;" + "&#34;)' title='U+0163'>&#x0163;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0164;" + "&#34;)' title='U+0164'>&#x0164;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0165;" + "&#34;)' title='U+0165'>&#x0165;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0166;" + "&#34;)' title='U+0166'>&#x0166;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0167;" + "&#34;)' title='U+0167'>&#x0167;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01AC;" + "&#34;)' title='U+01AC'>&#x01AC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01AD;" + "&#34;)' title='U+01AD'>&#x01AD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E6A;" + "&#34;)' title='U+1E6A'>&#x1E6A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E6B;" + "&#34;)' title='U+1E6B'>&#x1E6B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E6C;" + "&#34;)' title='U+1E6C'>&#x1E6C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E6D;" + "&#34;)' title='U+1E6D'>&#x1E6D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E6E;" + "&#34;)' title='U+1E6E'>&#x1E6E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E6F;" + "&#34;)' title='U+1E6F'>&#x1E6F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E70;" + "&#34;)' title='U+1E70'>&#x1E70;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E71;" + "&#34;)' title='U+1E71'>&#x1E71;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0055;" + "&#34;)' title='U+0055'>&#x0055;</span>"; //'U
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0075;" + "&#34;)' title='U+0075'>&#x0075;</span>"; //'u
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00D9;" + "&#34;)' title='U+00D9'>&#x00D9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F9;" + "&#34;)' title='U+00F9'>&#x00F9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00DA;" + "&#34;)' title='U+00DA'>&#x00DA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00FA;" + "&#34;)' title='U+00FA'>&#x00FA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00DB;" + "&#34;)' title='U+00DB'>&#x00DB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00FB;" + "&#34;)' title='U+00FB'>&#x00FB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0168;" + "&#34;)' title='U+0168'>&#x0168;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0169;" + "&#34;)' title='U+0169'>&#x0169;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x016A;" + "&#34;)' title='U+016A'>&#x016A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x016B;" + "&#34;)' title='U+016B'>&#x016B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x016C;" + "&#34;)' title='U+016C'>&#x016C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x016D;" + "&#34;)' title='U+016D'>&#x016D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x016E;" + "&#34;)' title='U+016E'>&#x016E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x016F;" + "&#34;)' title='U+016F'>&#x016F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0170;" + "&#34;)' title='U+0170'>&#x0170;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0171;" + "&#34;)' title='U+0171'>&#x0171;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0172;" + "&#34;)' title='U+0172'>&#x0172;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0173;" + "&#34;)' title='U+0173'>&#x0173;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01AF;" + "&#34;)' title='U+01AF'>&#x01AF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01B0;" + "&#34;)' title='U+01B0'>&#x01B0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D3;" + "&#34;)' title='U+01D3'>&#x01D3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D4;" + "&#34;)' title='U+01D4'>&#x01D4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0214;" + "&#34;)' title='U+0214'>&#x0214;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0215;" + "&#34;)' title='U+0215'>&#x0215;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0216;" + "&#34;)' title='U+0216'>&#x0216;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0217;" + "&#34;)' title='U+0217'>&#x0217;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E72;" + "&#34;)' title='U+1E72'>&#x1E72;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E73;" + "&#34;)' title='U+1E73'>&#x1E73;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E74;" + "&#34;)' title='U+1E74'>&#x1E74;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E75;" + "&#34;)' title='U+1E75'>&#x1E75;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E76;" + "&#34;)' title='U+1E76'>&#x1E76;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E77;" + "&#34;)' title='U+1E77'>&#x1E77;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E78;" + "&#34;)' title='U+1E78'>&#x1E78;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E79;" + "&#34;)' title='U+1E79'>&#x1E79;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E7A;" + "&#34;)' title='U+1E7A'>&#x1E7A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E7B;" + "&#34;)' title='U+1E7B'>&#x1E7B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE4;" + "&#34;)' title='U+1EE4'>&#x1EE4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE5;" + "&#34;)' title='U+1EE5'>&#x1EE5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE6;" + "&#34;)' title='U+1EE6'>&#x1EE6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE7;" + "&#34;)' title='U+1EE7'>&#x1EE7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE8;" + "&#34;)' title='U+1EE8'>&#x1EE8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EE9;" + "&#34;)' title='U+1EE9'>&#x1EE9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EEA;" + "&#34;)' title='U+1EEA'>&#x1EEA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EEB;" + "&#34;)' title='U+1EEB'>&#x1EEB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EEC;" + "&#34;)' title='U+1EEC'>&#x1EEC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EED;" + "&#34;)' title='U+1EED'>&#x1EED;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EEE;" + "&#34;)' title='U+1EEE'>&#x1EEE;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EEF;" + "&#34;)' title='U+1EEF'>&#x1EEF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF0;" + "&#34;)' title='U+1EF0'>&#x1EF0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF1;" + "&#34;)' title='U+1EF1'>&#x1EF1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00DC;" + "&#34;)' title='U+00DC'>&#x00DC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00FC;" + "&#34;)' title='U+00FC'>&#x00FC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D5;" + "&#34;)' title='U+01D5'>&#x01D5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D6;" + "&#34;)' title='U+01D6'>&#x01D6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D7;" + "&#34;)' title='U+01D7'>&#x01D7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D8;" + "&#34;)' title='U+01D8'>&#x01D8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01D9;" + "&#34;)' title='U+01D9'>&#x01D9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01DA;" + "&#34;)' title='U+01DA'>&#x01DA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01DB;" + "&#34;)' title='U+01DB'>&#x01DB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01DC;" + "&#34;)' title='U+01DC'>&#x01DC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0056;" + "&#34;)' title='U+0056'>&#x0056;</span>"; //'V
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0076;" + "&#34;)' title='U+0076'>&#x0076;</span>"; //'v
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E7C;" + "&#34;)' title='U+1E7C'>&#x1E7C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E7D;" + "&#34;)' title='U+1E7D'>&#x1E7D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E7E;" + "&#34;)' title='U+1E7E'>&#x1E7E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E7F;" + "&#34;)' title='U+1E7F'>&#x1E7F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0057;" + "&#34;)' title='U+0057'>&#x0057;</span>"; //'W
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0077;" + "&#34;)' title='U+0077'>&#x0077;</span>"; //'w
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0174;" + "&#34;)' title='U+0174'>&#x0174;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0175;" + "&#34;)' title='U+0175'>&#x0175;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E80;" + "&#34;)' title='U+1E80'>&#x1E80;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E81;" + "&#34;)' title='U+1E81'>&#x1E81;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E82;" + "&#34;)' title='U+1E82'>&#x1E82;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E83;" + "&#34;)' title='U+1E83'>&#x1E83;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E84;" + "&#34;)' title='U+1E84'>&#x1E84;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E85;" + "&#34;)' title='U+1E85'>&#x1E85;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E86;" + "&#34;)' title='U+1E86'>&#x1E86;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E87;" + "&#34;)' title='U+1E87'>&#x1E87;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E88;" + "&#34;)' title='U+1E88'>&#x1E88;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E89;" + "&#34;)' title='U+1E89'>&#x1E89;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0058;" + "&#34;)' title='U+0058'>&#x0058;</span>"; //'X
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0078;" + "&#34;)' title='U+0078'>&#x0078;</span>"; //'x
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E8A;" + "&#34;)' title='U+1E8A'>&#x1E8A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E8B;" + "&#34;)' title='U+1E8B'>&#x1E8B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E8C;" + "&#34;)' title='U+1E8C'>&#x1E8C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E8D;" + "&#34;)' title='U+1E8D'>&#x1E8D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0059;" + "&#34;)' title='U+0059'>&#x0059;</span>"; //'Y
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0079;" + "&#34;)' title='U+0079'>&#x0079;</span>"; //'y
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00DD;" + "&#34;)' title='U+00DD'>&#x00DD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00FD;" + "&#34;)' title='U+00FD'>&#x00FD;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0176;" + "&#34;)' title='U+0176'>&#x0176;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0177;" + "&#34;)' title='U+0177'>&#x0177;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0178;" + "&#34;)' title='U+0178'>&#x0178;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00FF;" + "&#34;)' title='U+00FF'>&#x00FF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01B3;" + "&#34;)' title='U+01B3'>&#x01B3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01B4;" + "&#34;)' title='U+01B4'>&#x01B4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E8E;" + "&#34;)' title='U+1E8E'>&#x1E8E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E8F;" + "&#34;)' title='U+1E8F'>&#x1E8F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF2;" + "&#34;)' title='U+1EF2'>&#x1EF2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF3;" + "&#34;)' title='U+1EF3'>&#x1EF3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF4;" + "&#34;)' title='U+1EF4'>&#x1EF4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF5;" + "&#34;)' title='U+1EF5'>&#x1EF5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF6;" + "&#34;)' title='U+1EF6'>&#x1EF6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF7;" + "&#34;)' title='U+1EF7'>&#x1EF7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF8;" + "&#34;)' title='U+1EF8'>&#x1EF8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1EF9;" + "&#34;)' title='U+1EF9'>&#x1EF9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x005A;" + "&#34;)' title='U+005A'>&#x005A;</span>"; //'Z
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x007A;" + "&#34;)' title='U+007A'>&#x007A;</span>"; //'z
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0179;" + "&#34;)' title='U+0179'>&#x0179;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x017A;" + "&#34;)' title='U+017A'>&#x017A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x017B;" + "&#34;)' title='U+017B'>&#x017B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x017C;" + "&#34;)' title='U+017C'>&#x017C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01B5;" + "&#34;)' title='U+01B5'>&#x01B5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01B6;" + "&#34;)' title='U+01B6'>&#x01B6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E90;" + "&#34;)' title='U+1E90'>&#x1E90;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E91;" + "&#34;)' title='U+1E91'>&#x1E91;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E92;" + "&#34;)' title='U+1E92'>&#x1E92;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E93;" + "&#34;)' title='U+1E93'>&#x1E93;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E94;" + "&#34;)' title='U+1E94'>&#x1E94;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1E95;" + "&#34;)' title='U+1E95'>&#x1E95;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x017D;" + "&#34;)' title='U+017D'>&#x017D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x017E;" + "&#34;)' title='U+017E'>&#x017E;</span>";
            //M - Z
            break;
        case "mnu04":

            //LIGATUURID
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00C6;" + "&#34;)'>&#x00C6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00E6;" + "&#34;)'>&#x00E6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0132;" + "&#34;)'>&#x0132;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0133;" + "&#34;)'>&#x0133;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0152;" + "&#34;)'>&#x0152;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0153;" + "&#34;)'>&#x0153;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01C4;" + "&#34;)'>&#x01C4;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01C5;" + "&#34;)'>&#x01C5;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01C6;" + "&#34;)'>&#x01C6;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01C7;" + "&#34;)'>&#x01C7;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01C8;" + "&#34;)'>&#x01C8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01C9;" + "&#34;)'>&#x01C9;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01CA;" + "&#34;)'>&#x01CA;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01CB;" + "&#34;)'>&#x01CB;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01CC;" + "&#34;)'>&#x01CC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E2;" + "&#34;)'>&#x01E2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01E3;" + "&#34;)'>&#x01E3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01F1;" + "&#34;)'>&#x01F1;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01F2;" + "&#34;)'>&#x01F2;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01F3;" + "&#34;)'>&#x01F3;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01FC;" + "&#34;)'>&#x01FC;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x01FD;" + "&#34;)'>&#x01FD;</span>";

            //sümbolid
            inssym = inssym + "<span class='btn' title='katus U+005E' onclick='mySym(&#34;" + CIRCUMFLEX + "&#34;)'>" + CIRCUMFLEX + "</span>";
            inssym = inssym + "<span class='btn' title='graavis U+0060' onclick='mySym(&#34;" + GRAVE + "&#34;)'>" + GRAVE + "</span>";
            inssym = inssym + "<span class='btn' title='tagurpidi hüüumärk U+00A1' onclick='mySym(&#34;" + INVERTED_EXCLAMATION + "&#34;)'>" + INVERTED_EXCLAMATION + "</span>";
            inssym = inssym + "<span class='btn' title='sent U+00A2' onclick='mySym(&#34;" + CENT_SIGN + "&#34;)'>" + CENT_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='jeen U+00A5' onclick='mySym(&#34;" + YEN_SIGN + "&#34;)'>" + YEN_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='U+00A6' onclick='mySym(&#34;" + BROKEN_BAR + "&#34;)'>" + BROKEN_BAR + "</span>";
            inssym = inssym + "<span class='btn' title='treema U+00A8' onclick='mySym(&#34;" + DIAERESIS + "&#34;)'>" + DIAERESIS + "</span>";
            inssym = inssym + "<span class='btn' title='U+00A9' onclick='mySym(&#34;" + COPYRIGHT_SIGN + "&#34;)'>" + COPYRIGHT_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='eitus U+00AC' onclick='mySym(&#34;" + NOT_SIGN + "&#34;)'>" + NOT_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='U+00AE' onclick='mySym(&#34;" + REGISTERED_SIGN + "&#34;)'>" + REGISTERED_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='makron U+00AF' onclick='mySym(&#34;" + MACRON + "&#34;)'>" + MACRON + "</span>";
            inssym = inssym + "<span class='btn' title='kraad U+00B0' onclick='mySym(&#34;" + DEGREE_SIGN + "&#34;)'>" + DEGREE_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='akuut U+00B4' onclick='mySym(&#34;" + ACUTE + "&#34;)'>" + ACUTE + "</span>";
            inssym = inssym + "<span class='btn' title='mikro U+00B5' onclick='mySym(&#34;" + MICRO_SIGN + "&#34;)'>" + MICRO_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='U+00B6' onclick='mySym(&#34;" + PILCROW_SIGN + "&#34;)'>" + PILCROW_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='punkt keskel U+00B7' onclick='mySym(&#34;" + MIDDLE_DOT + "&#34;)'>" + MIDDLE_DOT + "</span>";
            inssym = inssym + "<span class='btn' title='sedilla U+00B8' onclick='mySym(&#34;" + CEDILLA + "&#34;)'>" + CEDILLA + "</span>";
            inssym = inssym + "<span class='btn' title='tagurpidi küsimärk U+00BF' onclick='mySym(&#34;" + INVERTED_QUESTION + "&#34;)'>" + INVERTED_QUESTION + "</span>";
            inssym = inssym + "<span class='btn' title='korrutamismärk U+00D7' onclick='mySym(&#34;" + MULTIPLICATION_SIGN + "&#34;)'>" + MULTIPLICATION_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='jagamismärk U+00F7' onclick='mySym(&#34;" + DIVISION_SIGN + "&#34;)'>" + DIVISION_SIGN + "</span>"

            //veel sümboleid ...
            inssym = inssym + "<span class='btn' title='mõttekriips U+2013' onclick='mySym(&#34;" + EN_DASH + "&#34;)'>" + EN_DASH + "</span>";
            inssym = inssym + "<span class='btn' title='mõttekriips akuudiga U+2013 U+0301' onclick='mySym(&#34;" + "&#x2013;&#x0301;" + "&#34;)'>&#x2013;&#x0301;</span>";
            inssym = inssym + "<span class='btn' title='vasakpoolne ülakoma U+2018' onclick='mySym(&#34;" + LEFT_SINGLE_QUOTATION_MARK + "&#34;)'>" + LEFT_SINGLE_QUOTATION_MARK + "</span>";
            inssym = inssym + "<span class='btn' title='parempoolne ülakoma U+2019' onclick='mySym(&#34;" + RIGHT_SINGLE_QUOTATION_MARK + "&#34;)'>" + RIGHT_SINGLE_QUOTATION_MARK + "</span>";
            inssym = inssym + "<span class='btn' title='pistoda U+2020' onclick='mySym(&#34;" + "&#x2020;" + "&#34;)'>&#x2020;</span>";
            inssym = inssym + "<span class='btn' title='topeltpistoda U+2021' onclick='mySym(&#34;" + "&#x2021;" + "&#34;)'>&#x2021;</span>";
            inssym = inssym + "<span class='btn' title='vasakpoolne alumine jutumärk U+201E' onclick='mySym(&#34;" + DOUBLE_LOW9_QUOTATION_MARK + "&#34;)'>" + DOUBLE_LOW9_QUOTATION_MARK + "</span>";
            inssym = inssym + "<span class='btn' title='parempoolne jutumärk U+201D' onclick='mySym(&#34;" + RIGHT_DOUBLE_QUOTATION_MARK + "&#34;)'>" + RIGHT_DOUBLE_QUOTATION_MARK + "</span>";
            inssym = inssym + "<span class='btn' title='priim (minutid, jalad) U+2032' onclick='mySym(&#34;" + PRIME + "&#34;)'>" + PRIME + "</span>";
            inssym = inssym + "<span class='btn' title='topeltpriim (sekundid, tollid) U+2033' onclick='mySym(&#34;" + DOUBLE_PRIME + "&#34;)'>" + DOUBLE_PRIME + "</span>"

            inssym = inssym + "<span class='btn' title='Oom U+2126' onclick='mySym(&#34;" + OHM_SIGN + "&#34;)'>" + OHM_SIGN + "</span>";
            inssym = inssym + "<span class='btn' title='Ongström U+212B' onclick='mySym(&#34;" + ANGSTROM_SIGN + "&#34;)'>" + ANGSTROM_SIGN + "</span>"

            inssym = inssym + "<span class='btn' title='vasakule nool U+2190' onclick='mySym(&#34;" + LEFTWARDS_ARROW + "&#34;)'>" + LEFTWARDS_ARROW + "</span>";
            inssym = inssym + "<span class='btn' title='üles nool U+2191' onclick='mySym(&#34;" + UPWARDS_ARROW + "&#34;)'>" + UPWARDS_ARROW + "</span>";
            inssym = inssym + "<span class='btn' title='paremale nool U+2192' onclick='mySym(&#34;" + RIGHTWARDS_ARROW + "&#34;)'>" + RIGHTWARDS_ARROW + "</span>";
            inssym = inssym + "<span class='btn' title='alla nool U+2193' onclick='mySym(&#34;" + DOWNWARDS_ARROW + "&#34;)'>" + DOWNWARDS_ARROW + "</span>";
            inssym = inssym + "<span class='btn' title='väike suurtäht U U+1D1C' onclick='mySym(&#34;" + "&#x1D1C;" + "&#34;)'>&#x1D1C;</span>";
            inssym = inssym + "<span class='btn' title='modif väike suurtäht U U+1D41' onclick='mySym(&#34;" + "&#x1D41;" + "&#34;)'>&#x1D41;</span>";
            inssym = inssym + "<span class='btn' title='poolik o alumine U+1D17' onclick='mySym(&#34;" + "&#x1D17;" + "&#34;)'>&#x1D17;</span>";
            inssym = inssym + "<span class='btn' title='modif poolik o alumine U+1D55' onclick='mySym(&#34;" + "&#x1D55;" + "&#34;)'>&#x1D55;</span>";
            inssym = inssym + "<span class='btn' title='alakaar U+203F' onclick='mySym(&#34;" + "&#x203F;" + "&#34;)'>&#x203F;</span>";
            inssym = inssym + "<span class='btn' title='naeratus U+2323' onclick='mySym(&#34;" + "&#x2323;" + "&#34;)'>&#x2323;</span>";
            inssym = inssym + "<span class='btn' title='alumine pool ringist U+25E1' onclick='mySym(&#34;" + "&#x25E1;" + "&#34;)'>&#x25E1;</span>";
            inssym = inssym + "<span class='btn' title='täpp U+2022' onclick='mySym(&#34;" + BULLET + "&#34;)'>" + BULLET + "</span>";
            inssym = inssym + "<span class='btn' title='kolmnurkne täpp U+2023' onclick='mySym(&#34;" + TRIANGULAR_BULLET + "&#34;)'>" + TRIANGULAR_BULLET + "</span>"

            inssym = inssym + "<span class='btn' title='must ruuduke U+25A0' onclick='mySym(&#34;" + "&#x25A0;" + "&#34;)'>&#x25A0;</span>";
            inssym = inssym + "<span class='btn' title='valge ruuduke U+25A1' onclick='mySym(&#34;" + "&#x25A1;" + "&#34;)'>&#x25A1;</span>";
            inssym = inssym + "<span class='btn' title='valge ruuduke ümarate nurkadega U+25A2' onclick='mySym(&#34;" + "&#x25A2;" + "&#34;)'>&#x25A2;</span>";
            inssym = inssym + "<span class='btn' title='valge ruuduke väikese musta ruudukesega U+25A3' onclick='mySym(&#34;" + "&#x25A3;" + "&#34;)'>&#x25A3;</span>";
            inssym = inssym + "<span class='btn' title='väike must ruuduke U+25AA' onclick='mySym(&#34;" + "&#x25AA;" + "&#34;)'>&#x25AA;</span>";
            inssym = inssym + "<span class='btn' title='väike valge ruuduke U+25AB' onclick='mySym(&#34;" + "&#x25AB;" + "&#34;)'>&#x25AB;</span>";
            inssym = inssym + "<span class='btn' title='must ristkülik U+25AC' onclick='mySym(&#34;" + "&#x25AC;" + "&#34;)'>&#x25AC;</span>";
            inssym = inssym + "<span class='btn' title='valge ristkülik U+25AD' onclick='mySym(&#34;" + "&#x25AD;" + "&#34;)'>&#x25AD;</span>";
            inssym = inssym + "<span class='btn' title='must vertikaalne ristkülik U+25AE' onclick='mySym(&#34;" + "&#x25AE;" + "&#34;)'>&#x25AE;</span>";
            inssym = inssym + "<span class='btn' title='valge vertikaalne ristkülik U+25AF' onclick='mySym(&#34;" + "&#x25AF;" + "&#34;)'>&#x25AF;</span>";
            inssym = inssym + "<span class='btn' title='must rööpkülik U+25B0' onclick='mySym(&#34;" + "&#x25B0;" + "&#34;)'>&#x25B0;</span>";
            inssym = inssym + "<span class='btn' title='valge rööpkülik U+25B1' onclick='mySym(&#34;" + "&#x25B1;" + "&#34;)'>&#x25B1;</span>";
            inssym = inssym + "<span class='btn' title='must tipuga üles kolmnurk U+25B2' onclick='mySym(&#34;" + "&#x25B2;" + "&#34;)'>&#x25B2;</span>";
            inssym = inssym + "<span class='btn' title='valge tipuga üles kolmnurk U+25B3' onclick='mySym(&#34;" + "&#x25B3;" + "&#34;)'>&#x25B3;</span>";
            inssym = inssym + "<span class='btn' title='valge tipuga paremale kolmnurk U+25B7' onclick='mySym(&#34;" + "&#x25B7;" + "&#34;)'>&#x25B7;</span>";
            inssym = inssym + "<span class='btn' title='must tipuga paremale kolmnurk U+25BA' onclick='mySym(&#34;" + "&#x25BA;" + "&#34;)'>&#x25BA;</span>";
            inssym = inssym + "<span class='btn' title='must tipuga alla kolmnurk U+25BC' onclick='mySym(&#34;" + "&#x25BC;" + "&#34;)'>&#x25BC;</span>";
            inssym = inssym + "<span class='btn' title='valge tipuga alla kolmnurk U+25BD' onclick='mySym(&#34;" + "&#x25BD;" + "&#34;)'>&#x25BD;</span>";
            inssym = inssym + "<span class='btn' title='valge tipuga vasakule kolmnurk U+25C1' onclick='mySym(&#34;" + "&#x25C1;" + "&#34;)'>&#x25C1;</span>";
            inssym = inssym + "<span class='btn' title='must tipuga vasakule kolmnurk U+25C4' onclick='mySym(&#34;" + "&#x25C4;" + "&#34;)'>&#x25C4;</span>";
            inssym = inssym + "<span class='btn' title='must ruutu U+25C6' onclick='mySym(&#34;" + "&#x25C6;" + "&#34;)'>&#x25C6;</span>";
            inssym = inssym + "<span class='btn' title='valge ruutu U+25C7' onclick='mySym(&#34;" + "&#x25C7;" + "&#34;)'>&#x25C7;</span>";
            inssym = inssym + "<span class='btn' title='seest tühi romb (Lozenge) U+25CA' onclick='mySym(&#34;" + "&#x25CA;" + "&#34;)'>&#x25CA;</span>";
            inssym = inssym + "<span class='btn' title='seest tühi ring (White Circle) U+25CB' onclick='mySym(&#34;" + "&#x25CB;" + "&#34;)'>&#x25CB;</span>";
            inssym = inssym + "<span class='btn' title='seest täis ring (Black Circle) U+25CF' onclick='mySym(&#34;" + "&#x25CF;" + "&#34;)'>&#x25CF;</span>"

            inssym = inssym + "<span class='btn' title='pluss-miinus U+00B1' onclick='mySym(&#34;" + "&#x00B1;" + "&#34;)'>&#x00B1;</span>";
            inssym = inssym + "<span class='btn' title='murrukriips U+2044' onclick='mySym(&#34;" + "&#x2044;" + "&#34;)'>&#x2044;</span>";
            inssym = inssym + "<span class='btn' title='jagamiskriips U+2215' onclick='mySym(&#34;" + "&#x2215;" + "&#34;)'>&#x2215;</span>";
            inssym = inssym + "<span class='btn' title='lõpmatus U+221E' onclick='mySym(&#34;" + "&#x221E;" + "&#34;)'>&#x221E;</span>";
            inssym = inssym + "<span class='btn' title='kuulub U+2208' onclick='mySym(&#34;" + "&#x2208;" + "&#34;)'>&#x2208;</span>";
            inssym = inssym + "<span class='btn' title='ei kuulu U+2209' onclick='mySym(&#34;" + "&#x2209;" + "&#34;)'>&#x2209;</span>";
            inssym = inssym + "<span class='btn' title='MOTT U+220E' onclick='mySym(&#34;" + "&#x220E;" + "&#34;)'>&#x220E;</span>";
            inssym = inssym + "<span class='btn' title='loogiline JA U+2227' onclick='mySym(&#34;" + "&#x2227;" + "&#34;)'>&#x2227;</span>";
            inssym = inssym + "<span class='btn' title='loogiline VÕI U+2228' onclick='mySym(&#34;" + "&#x2228;" + "&#34;)'>&#x2228;</span>";
            inssym = inssym + "<span class='btn' title='ühisosa U+2229' onclick='mySym(&#34;" + "&#x2229;" + "&#34;)'>&#x2229;</span>";
            inssym = inssym + "<span class='btn' title='ühend U+222A' onclick='mySym(&#34;" + "&#x222A;" + "&#34;)'>&#x222A;</span>";
            inssym = inssym + "<span class='btn' title='integraal U+222B' onclick='mySym(&#34;" + "&#x222B;" + "&#34;)'>&#x222B;</span>";
            inssym = inssym + "<span class='btn' title='unaarne ühend U+22C3' onclick='mySym(&#34;" + "&#x22C3;" + "&#34;)'>&#x22C3;</span>";
            inssym = inssym + "<span class='btn' title='suletud ühend U+2A4C' onclick='mySym(&#34;" + "&#x2A4C;" + "&#34;)'>&#x2A4C;</span>";
            inssym = inssym + "<span class='btn' title='meetriline lühenduskaar U+23D1' onclick='mySym(&#34;" + "&#x23D1;" + "&#34;)'>&#x23D1;</span>"

            inssym = inssym + "<span class='btn' title='radioaktiivne U+2622' onclick='mySym(&#34;" + "&#x2622;" + "&#34;)'>&#x2622;</span>";
            inssym = inssym + "<span class='btn' title='sirp ja vasar U+262D' onclick='mySym(&#34;" + "&#x262D;" + "&#34;)'>&#x262D;</span>";
            inssym = inssym + "<span class='btn' title='rahu U+262E' onclick='mySym(&#34;" + "&#x262E;" + "&#34;)'>&#x262E;</span>";
            inssym = inssym + "<span class='btn' title='yin yang U+262F' onclick='mySym(&#34;" + "&#x262F;" + "&#34;)'>&#x262F;</span>";
            inssym = inssym + "<span class='btn' title='Veenus U+2640' onclick='mySym(&#34;" + "&#x2640;" + "&#34;)'>&#x2640;</span>";
            inssym = inssym + "<span class='btn' title='Marss U+2642' onclick='mySym(&#34;" + "&#x2642;" + "&#34;)'>&#x2642;</span>";

            inssym = inssym + "<span class='btn' title='must poti mast U+2660' onclick='mySym(&#34;" + "&#x2660;" + "&#34;)'>&#x2660;</span>";
            inssym = inssym + "<span class='btn' title='valge ärtu mast U+2661' onclick='mySym(&#34;" + "&#x2661;" + "&#34;)'>&#x2661;</span>";
            inssym = inssym + "<span class='btn' title='valge ruutu mast U+2662' onclick='mySym(&#34;" + "&#x2662;" + "&#34;)'>&#x2662;</span>";
            inssym = inssym + "<span class='btn' title='must risti mast U+2663' onclick='mySym(&#34;" + "&#x2663;" + "&#34;)'>&#x2663;</span>"

            inssym = inssym + "<span class='btn' title='veerandnoot U+2669' onclick='mySym(&#34;" + "&#x2669;" + "&#34;)'>&#x2669;</span>";
            inssym = inssym + "<span class='btn' title='kaheksandiknoot U+266A' onclick='mySym(&#34;" + "&#x266A;" + "&#34;)'>&#x266A;</span>";
            inssym = inssym + "<span class='btn' title='kaheksandikud U+266B' onclick='mySym(&#34;" + "&#x266B;" + "&#34;)'>&#x266B;</span>";
            inssym = inssym + "<span class='btn' title='kuueteistkümnendikud U+266C' onclick='mySym(&#34;" + "&#x266C;" + "&#34;)'>&#x266C;</span>";
            inssym = inssym + "<span class='btn' title='bemoll U+266D' onclick='mySym(&#34;" + "&#x266D;" + "&#34;)'>&#x266D;</span>";
            inssym = inssym + "<span class='btn' title='bekaar U+266E' onclick='mySym(&#34;" + "&#x266E;" + "&#34;)'>&#x266E;</span>";
            inssym = inssym + "<span class='btn' title='diees U+266F' onclick='mySym(&#34;" + "&#x266F;" + "&#34;)'>&#x266F;</span>"


            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] g clef' onclick='mySym(&#34;" + "&gclef;" + "&#34;)' style='font-family:symbola'>&#x1D11E;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] g clef ottava alta' onclick='mySym(&#34;" + "&gclefottavaalta;" + "&#34;)' style='font-family:symbola'>&#x1D11F;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] g clef ottava bassa' onclick='mySym(&#34;" + "&gclefottavabassa;" + "&#34;)' style='font-family:symbola'>&#x1D120;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] c clef' onclick='mySym(&#34;" + "&cclef;" + "&#34;)' style='font-family:symbola'>&#x1D121;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] f clef' onclick='mySym(&#34;" + "&fclef;" + "&#34;)' style='font-family:symbola'>&#x1D122;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] f clef ottava alta' onclick='mySym(&#34;" + "&fclefottavaalta;" + "&#34;)' style='font-family:symbola'>&#x1D123;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] f clef ottava bassa' onclick='mySym(&#34;" + "&fclefottavabassa;" + "&#34;)' style='font-family:symbola'>&#x1D124;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] drum clef 1' onclick='mySym(&#34;" + "+drumclef1;" + "&#34;)' style='font-family:symbola'>&#x1D125;</span>"
            inssym = inssym + "<span class='btn' title='U+1D11F [font-family:symbola] drum clef 2' onclick='mySym(&#34;" + "+drumclef2;" + "&#34;)' style='font-family:symbola'>&#x1D126;</span>"
            inssym = inssym + "<span class='btn' title='fermaat U+1D110 [font-family:symbola] fermata' onclick='mySym(&#34;" + "&fermata;" + "&#34;)' style='font-family:symbola'>&#x1D110;</span>";
            inssym = inssym + "<span class='btn' title='segno U+1D10B [font-family:symbola] segno' onclick='mySym(&#34;" + "&segno;" + "&#34;)' style='font-family:symbola'>&#x1D10B;</span>"

            //Margiti soovitud WingDings fondi asjad (lähendatud Unicode-le) 05. juuni 2011
            inssym = inssym + "<span class='btn' title='üles paremale suunatud pliiats U+2710' onclick='mySym(&#34;" + "&#x2710;" + "&#34;)'>&#x2710;</span>";
            inssym = inssym + "<span class='btn' title='valged käärid U+2704' onclick='mySym(&#34;" + "&#x2704;" + "&#34;)'>&#x2704;</span>";
            inssym = inssym + "<span class='btn' title='ümbrik U+2709' onclick='mySym(&#34;" + "&#x2709;" + "&#34;)'>&#x2709;</span>";
            inssym = inssym + "<span class='btn' title='liivakell U+231B' onclick='mySym(&#34;" + "&#x231B;" + "&#34;)'>&#x231B;</span>";
            inssym = inssym + "<span class='btn' title='kirjutav käsi U+270D' onclick='mySym(&#34;" + "&#x270D;" + "&#34;)'>&#x270D;</span>";
            inssym = inssym + "<span class='btn' title='valge paremale suunatud nimetissõrm U+261E' onclick='mySym(&#34;" + "&#x261E;" + "&#34;)'>&#x261E;</span>";
            inssym = inssym + "<span class='btn' title='valge hapu nägu U+2639' onclick='mySym(&#34;" + "&#x2639;" + "&#34;)'>&#x2639;</span>";
            inssym = inssym + "<span class='btn' title='valge naeratav nägu U+263A' onclick='mySym(&#34;" + "&#x263A;" + "&#34;)'>&#x263A;</span>";
            inssym = inssym + "<span class='btn' title='valge kiirtega päike U+263C' onclick='mySym(&#34;" + "&#x263C;" + "&#34;)'>&#x263C;</span>";
            inssym = inssym + "<span class='btn' title='lumehelves U+2744' onclick='mySym(&#34;" + "&#x2744;" + "&#34;)'>&#x2744;</span>";
            inssym = inssym + "<span class='btn' title='huviväärsus U+2318' onclick='mySym(&#34;" + "&#x2318;" + "&#34;)'>&#x2318;</span>";
            inssym = inssym + "<span class='btn' title='ringikujuline mustal taustal paremale nool U+27B2' onclick='mySym(&#34;" + "&#x27B2;" + "&#34;)'>&#x27B2;</span>";
            inssym = inssym + "<span class='btn' title='topeltnool vasakule U+21D0' onclick='mySym(&#34;" + "&#x21D0;" + "&#34;)'>&#x21D0;</span>";
            inssym = inssym + "<span class='btn' title='topeltnool üles U+21D1' onclick='mySym(&#34;" + "&#x21D1;" + "&#34;)'>&#x21D1;</span>";
            inssym = inssym + "<span class='btn' title='topeltnool paremale U+21D2' onclick='mySym(&#34;" + "&#x21D2;" + "&#34;)'>&#x21D2;</span>";
            inssym = inssym + "<span class='btn' title='topeltnool alla U+21D3' onclick='mySym(&#34;" + "&#x21D3;" + "&#34;)'>&#x21D3;</span>";
            inssym = inssym + "<span class='btn' title='topeltnool vasakule, paremale U+21D4' onclick='mySym(&#34;" + "&#x21D4;" + "&#34;)'>&#x21D4;</span>";
            inssym = inssym + "<span class='btn' title='linnukesega märkeruut U+2611' onclick='mySym(&#34;" + "&#x2611;" + "&#34;)'>&#x2611;</span>";
            inssym = inssym + "<span class='btn' title='tagurpidi väike v U+028C' onclick='mySym(&#34;" + "&#x028C;" + "&#34;)'>&#x028C;</span>";
            inssym = inssym + "<span class='btn' title='väike kreeka lambda suurtäht U+1D27' onclick='mySym(&#34;" + "&#x1D27;" + "&#34;)'>&#x1D27;</span>";
            break;

        case "mnu05":

            inssym = inssym + "<span class='btn' title='Alfa' onclick='mySym(&#34;" + "&Alpha;" + "&#34;)'>&Alpha;</span>";
            inssym = inssym + "<span class='btn' title='alfa' onclick='mySym(&#34;" + "&alpha;" + "&#34;)'>&alpha;</span>";
            inssym = inssym + "<span class='btn' title='Beeta' onclick='mySym(&#34;" + "&Beta;" + "&#34;)'>&Beta;</span>";
            inssym = inssym + "<span class='btn' title='beeta' onclick='mySym(&#34;" + "&beta;" + "&#34;)'>&beta;</span>";
            inssym = inssym + "<span class='btn' title='Gamma' onclick='mySym(&#34;" + "&Gamma;" + "&#34;)'>&Gamma;</span>";
            inssym = inssym + "<span class='btn' title='gamma' onclick='mySym(&#34;" + "&gamma;" + "&#34;)'>&gamma;</span>";
            inssym = inssym + "<span class='btn' title='Delta' onclick='mySym(&#34;" + "&Delta;" + "&#34;)'>&Delta;</span>";
            inssym = inssym + "<span class='btn' title='delta' onclick='mySym(&#34;" + "&delta;" + "&#34;)'>&delta;</span>";
            inssym = inssym + "<span class='btn' title='Epsilon' onclick='mySym(&#34;" + "&Epsilon;" + "&#34;)'>&Epsilon;</span>";
            inssym = inssym + "<span class='btn' title='epsilon' onclick='mySym(&#34;" + "&epsilon;" + "&#34;)'>&epsilon;</span>";
            inssym = inssym + "<span class='btn' title='Dzeeta' onclick='mySym(&#34;" + "&Zeta;" + "&#34;)'>&Zeta;</span>";
            inssym = inssym + "<span class='btn' title='dzeeta' onclick='mySym(&#34;" + "&zeta;" + "&#34;)'>&zeta;</span>";
            inssym = inssym + "<span class='btn' title='Eeta' onclick='mySym(&#34;" + "&Eta;" + "&#34;)'>&Eta;</span>";
            inssym = inssym + "<span class='btn' title='eeta' onclick='mySym(&#34;" + "&eta;" + "&#34;)'>&eta;</span>";
            inssym = inssym + "<span class='btn' title='Teeta' onclick='mySym(&#34;" + "&Theta;" + "&#34;)'>&Theta;</span>";
            inssym = inssym + "<span class='btn' title='teeta' onclick='mySym(&#34;" + "&theta;" + "&#34;)'>&theta;</span>";
            inssym = inssym + "<span class='btn' title='Ioota' onclick='mySym(&#34;" + "&Iota;" + "&#34;)'>&Iota;</span>";
            inssym = inssym + "<span class='btn' title='ioota' onclick='mySym(&#34;" + "&iota;" + "&#34;)'>&iota;</span>";
            inssym = inssym + "<span class='btn' title='Kapa' onclick='mySym(&#34;" + "&Kappa;" + "&#34;)'>&Kappa;</span>";
            inssym = inssym + "<span class='btn' title='kapa' onclick='mySym(&#34;" + "&kappa;" + "&#34;)'>&kappa;</span>";
            inssym = inssym + "<span class='btn' title='Lambda' onclick='mySym(&#34;" + "&Lambda;" + "&#34;)'>&Lambda;</span>";
            inssym = inssym + "<span class='btn' title='lambda' onclick='mySym(&#34;" + "&lambda;" + "&#34;)'>&lambda;</span>";
            inssym = inssym + "<span class='btn' title='Müü' onclick='mySym(&#34;" + "&Mu;" + "&#34;)'>&Mu;</span>";
            inssym = inssym + "<span class='btn' title='müü' onclick='mySym(&#34;" + "&mu;" + "&#34;)'>&mu;</span>";
            inssym = inssym + "<span class='btn' title='Nüü' onclick='mySym(&#34;" + "&Nu;" + "&#34;)'>&Nu;</span>";
            inssym = inssym + "<span class='btn' title='nüü' onclick='mySym(&#34;" + "&nu;" + "&#34;)'>&nu;</span>";
            inssym = inssym + "<span class='btn' title='Ksii' onclick='mySym(&#34;" + "&Xi;" + "&#34;)'>&Xi;</span>";
            inssym = inssym + "<span class='btn' title='ksii' onclick='mySym(&#34;" + "&xi;" + "&#34;)'>&xi;</span>";
            inssym = inssym + "<span class='btn' title='Omikron' onclick='mySym(&#34;" + "&Omicron;" + "&#34;)'>&Omicron;</span>";
            inssym = inssym + "<span class='btn' title='omikron' onclick='mySym(&#34;" + "&omicron;" + "&#34;)'>&omicron;</span>";
            inssym = inssym + "<span class='btn' title='Pii' onclick='mySym(&#34;" + "&Pi;" + "&#34;)'>&Pi;</span>";
            inssym = inssym + "<span class='btn' title='pii' onclick='mySym(&#34;" + "&pi;" + "&#34;)'>&pi;</span>";
            inssym = inssym + "<span class='btn' title='Roo' onclick='mySym(&#34;" + "&Rho;" + "&#34;)'>&Rho;</span>";
            inssym = inssym + "<span class='btn' title='roo' onclick='mySym(&#34;" + "&rho;" + "&#34;)'>&rho;</span>";
            inssym = inssym + "<span class='btn' title='Sigma' onclick='mySym(&#34;" + "&Sigma;" + "&#34;)'>&Sigma;</span>";
            inssym = inssym + "<span class='btn' title='sigma' onclick='mySym(&#34;" + "&sigma;" + "&#34;)'>&sigma;</span>";
            inssym = inssym + "<span class='btn' title='Tau' onclick='mySym(&#34;" + "&Tau;" + "&#34;)'>&Tau;</span>";
            inssym = inssym + "<span class='btn' title='tau' onclick='mySym(&#34;" + "&tau;" + "&#34;)'>&tau;</span>";
            inssym = inssym + "<span class='btn' title='Üpsilon' onclick='mySym(&#34;" + "&Upsilon;" + "&#34;)'>&Upsilon;</span>";
            inssym = inssym + "<span class='btn' title='üpsilon' onclick='mySym(&#34;" + "&upsilon;" + "&#34;)'>&upsilon;</span>";
            inssym = inssym + "<span class='btn' title='Fii' onclick='mySym(&#34;" + "&Phi;" + "&#34;)'>&Phi;</span>";
            inssym = inssym + "<span class='btn' title='fii' onclick='mySym(&#34;" + "&phi;" + "&#34;)'>&phi;</span>";
            inssym = inssym + "<span class='btn' title='Hii' onclick='mySym(&#34;" + "&Chi;" + "&#34;)'>&Chi;</span>";
            inssym = inssym + "<span class='btn' title='hii' onclick='mySym(&#34;" + "&chi;" + "&#34;)'>&chi;</span>";
            inssym = inssym + "<span class='btn' title='Psii' onclick='mySym(&#34;" + "&Psi;" + "&#34;)'>&Psi;</span>";
            inssym = inssym + "<span class='btn' title='psii' onclick='mySym(&#34;" + "&psi;" + "&#34;)'>&psi;</span>";
            inssym = inssym + "<span class='btn' title='Oomega' onclick='mySym(&#34;" + "&Omega;" + "&#34;)'>&Omega;</span>";
            inssym = inssym + "<span class='btn' title='oomega' onclick='mySym(&#34;" + "&omega;" + "&#34;)'>&omega;</span>";
            break;

        case "mnu06":

            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0410;" + "&#34;)' title='U+0410'>&#x0410;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0430;" + "&#34;)' title='U+0430'>&#x0430;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0411;" + "&#34;)' title='U+0411'>&#x0411;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0431;" + "&#34;)' title='U+0431'>&#x0431;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0412;" + "&#34;)' title='U+0412'>&#x0412;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0432;" + "&#34;)' title='U+0432'>&#x0432;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0413;" + "&#34;)' title='U+0413'>&#x0413;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0433;" + "&#34;)' title='U+0433'>&#x0433;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0414;" + "&#34;)' title='U+0414'>&#x0414;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0434;" + "&#34;)' title='U+0434'>&#x0434;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0415;" + "&#34;)' title='U+0415'>&#x0415;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0435;" + "&#34;)' title='U+0435'>&#x0435;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0401;" + "&#34;)' title='U+0401'>&#x0401;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0451;" + "&#34;)' title='U+0451'>&#x0451;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0416;" + "&#34;)' title='U+0416'>&#x0416;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0436;" + "&#34;)' title='U+0436'>&#x0436;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0417;" + "&#34;)' title='U+0417'>&#x0417;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0437;" + "&#34;)' title='U+0437'>&#x0437;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0418;" + "&#34;)' title='U+0418'>&#x0418;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0438;" + "&#34;)' title='U+0438'>&#x0438;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0419;" + "&#34;)' title='U+0419'>&#x0419;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0439;" + "&#34;)' title='U+0439'>&#x0439;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x041A;" + "&#34;)' title='U+041A'>&#x041A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x043A;" + "&#34;)' title='U+043A'>&#x043A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x041B;" + "&#34;)' title='U+041B'>&#x041B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x043B;" + "&#34;)' title='U+043B'>&#x043B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x041C;" + "&#34;)' title='U+041C'>&#x041C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x043C;" + "&#34;)' title='U+043C'>&#x043C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x041D;" + "&#34;)' title='U+041D'>&#x041D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x043D;" + "&#34;)' title='U+043D'>&#x043D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x041E;" + "&#34;)' title='U+041E'>&#x041E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x043E;" + "&#34;)' title='U+043E'>&#x043E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x041F;" + "&#34;)' title='U+041F'>&#x041F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x043F;" + "&#34;)' title='U+043F'>&#x043F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0420;" + "&#34;)' title='U+0420'>&#x0420;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0440;" + "&#34;)' title='U+0440'>&#x0440;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0421;" + "&#34;)' title='U+0421'>&#x0421;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0441;" + "&#34;)' title='U+0441'>&#x0441;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0422;" + "&#34;)' title='U+0422'>&#x0422;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0442;" + "&#34;)' title='U+0442'>&#x0442;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0423;" + "&#34;)' title='U+0423'>&#x0423;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0443;" + "&#34;)' title='U+0443'>&#x0443;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0424;" + "&#34;)' title='U+0424'>&#x0424;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0444;" + "&#34;)' title='U+0444'>&#x0444;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0425;" + "&#34;)' title='U+0425'>&#x0425;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0445;" + "&#34;)' title='U+0445'>&#x0445;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0426;" + "&#34;)' title='U+0426'>&#x0426;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0446;" + "&#34;)' title='U+0446'>&#x0446;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0427;" + "&#34;)' title='U+0427'>&#x0427;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0447;" + "&#34;)' title='U+0447'>&#x0447;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0428;" + "&#34;)' title='U+0428'>&#x0428;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0448;" + "&#34;)' title='U+0448'>&#x0448;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0429;" + "&#34;)' title='U+0429'>&#x0429;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0449;" + "&#34;)' title='U+0449'>&#x0449;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x042A;" + "&#34;)' title='U+042A'>&#x042A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x044A;" + "&#34;)' title='U+044A'>&#x044A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x042B;" + "&#34;)' title='U+042B'>&#x042B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x044B;" + "&#34;)' title='U+044B'>&#x044B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x042C;" + "&#34;)' title='U+042C'>&#x042C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x044C;" + "&#34;)' title='U+044C'>&#x044C;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x042D;" + "&#34;)' title='U+042D'>&#x042D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x044D;" + "&#34;)' title='U+044D'>&#x044D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x042E;" + "&#34;)' title='U+042E'>&#x042E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x044E;" + "&#34;)' title='U+044E'>&#x044E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x042F;" + "&#34;)' title='U+042F'>&#x042F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x044F;" + "&#34;)' title='U+044F'>&#x044F;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0462;" + "&#34;)' title='suur jätt U+0462'>&#x0462;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0463;" + "&#34;)' title='väike jätt U+0463'>&#x0463;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0406;" + "&#34;)' title='suur I U+0406'>&#x0406;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0456;" + "&#34;)' title='väike I U+0456'>&#x0456;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0472;" + "&#34;)' title='suur fita U+0472'>&#x0472;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0473;" + "&#34;)' title='väike fita U+0473'>&#x0473;</span>";
            break;
        case "mnu07":
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D9E;" + "&#34;)' title='modif väike eeta U+1D9E'>&#x1D9E;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x00F0;" + "&#34;)' title='väike eeta U+00F0'>&#x00F0;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D4A;" + "&#34;)' title='modif väike šva U+1D4A'>&#x1D4A;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0259;" + "&#34;)' title='väike šva U+0259'>&#x0259;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D51;" + "&#34;)' title='modif väike ng U+1D51'>&#x1D51;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x014B;" + "&#34;)' title='väike ng U+014B'>&#x014B;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0275;" + "&#34;)' title='väike pulgaga o U+0275'>&#x0275;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1DBF;" + "&#34;)' title='modif väike teeta U+1DBF'>&#x1DBF;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x03B8;" + "&#34;)' title='väike teeta U+03B8'>&#x03B8;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "(n)" + "&#34;)' title='eelneva täishääliku ninahääldus'>(n)</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "(r)" + "&#34;)' title='nõrgalt häälduv r (pms ingl)'>(r)</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0299;" + "&#34;)' title='kapiteel-B U+0299'>&#x0299;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D05;" + "&#34;)' title='kapiteel-D U+1D05'>&#x1D05;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0262;" + "&#34;)' title='kapiteel-G U+0262'>&#x0262;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D0D;" + "&#34;)' title='kapiteel-M U+1D0D'>&#x1D0D;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0274;" + "&#34;)' title='kapiteel-N U+0274'>&#x0274;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0280;" + "&#34;)' title='kapiteel-R U+0280'>&#x0280;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D22;" + "&#34;)' title='kapiteel-Z U+1D22'>&#x1D22;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0254;" + "&#34;)' title='lahtine o U+0254'>&#x0254;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x0250;" + "&#34;)' title='kummuli a U+0250'>&#x0250;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x1D43;" + "&#34;)' title='üla-a U+1D43'>&#x1D43;</span>";
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "&#x02DB;" + "&#34;)' title='ogonek U+02DB'>&#x02DB;</span>";
            break;
        case "mnu08":
            inssym = inssym + "<span class='btn' title='a ringi ja makroniga' onclick='mySym(&#34;" + "&#x00E5;&#x0304;" + "&#34;)'>&#x00E5;&#x0304;</span>";
            inssym = inssym + "<span class='btn' title='pööratud e U+01DD' onclick='mySym(&#34;" + "&#x01DD;" + "&#34;)'>&#x01DD;</span>";
            inssym = inssym + "<span class='btn' title='pööratud e ülakaarega' onclick='mySym(&#34;" + "ə̑'>ə̑</span>";
            inssym = inssym + "<span class='btn' title='e alakaarega' onclick='mySym(&#34;" + "e̮'>e̮</span>";
            inssym = inssym + "<span class='btn' title='i alakaarega' onclick='mySym(&#34;" + "i̮'>i̮</span>";
            inssym = inssym + "<span class='btn' title='ezh karoniga' onclick='mySym(&#34;" + String.fromCharCode(0x01EF) + "&#34;)'>" + String.fromCharCode(0x01EF) + "</span>"; //'väike ezh;
            inssym = inssym + "<span class='btn' title='ezh' onclick='mySym(&#34;" + String.fromCharCode(0x0292) + "&#34;)'>" + String.fromCharCode(0x0292) + "</span>"; //'väike ezh;
            inssym = inssym + "<span class='btn' title='ezh karoni ja akuudiga' onclick='mySym(&#34;" + String.fromCharCode(0x01EF) + String.fromCharCode(0x0301) + "&#34;)' style='width:48px;'>" + String.fromCharCode(0x01EF) + String.fromCharCode(0x0301) + "</span>"; //'väike ezh + kombineeruv;
            inssym = inssym + "<span class='btn' title='ezh akuudiga' onclick='mySym(&#34;" + String.fromCharCode(0x0292) + String.fromCharCode(0x0301) + "&#34;)' style='width:48px;'>" + String.fromCharCode(0x0292) + String.fromCharCode(0x0301) + "</span>";
            inssym = inssym + "<span class='btn' title='e vasakule poole nooleotsaga all' onclick='mySym(&#34;" + "e" + String.fromCharCode(0x0354) + "&#34;)'>e" + String.fromCharCode(0x0354) + "</span>";
            inssym = inssym + "<span class='btn' title='i vasakule poole nooleotsaga all' onclick='mySym(&#34;" + "i" + String.fromCharCode(0x0354) + "&#34;)'>i" + String.fromCharCode(0x0354) + "</span>";
            inssym = inssym + "<span class='btn' title='e paremale poole nooleotsaga all' onclick='mySym(&#34;" + "e" + String.fromCharCode(0x0355) + "&#34;)'>e" + String.fromCharCode(0x0355) + "</span>";
            inssym = inssym + "<span class='btn' title='i paremale poole nooleotsaga all' onclick='mySym(&#34;" + "i" + String.fromCharCode(0x0355) + "&#34;)'>i" + String.fromCharCode(0x0355) + "</span>";
            inssym = inssym + "<span class='btn' title='kõrisulghäälik  U+0294' onclick='mySym(&#34;" + "&#x0294;" + "&#34;)'>&#x0294;</span>";
            inssym = inssym + "<span class='btn' title='õ tsirkumfleksiga all' onclick='mySym(&#34;" + "õ" + String.fromCharCode(0x032D) + "&#34;)'>õ" + String.fromCharCode(0x032D) + "</span>";
            inssym = inssym + "<span class='btn' title='þ' onclick='mySym(&#34;" + "þ" + "&#34;)'>þ</span>";
            inssym = inssym + "<span class='btn' title='ß' onclick='mySym(&#34;" + "ß" + "&#34;)'>ß</span>";
            inssym = inssym + "<span class='btn' title='Latin capital letter B with stroke' onclick='mySym(&#34;" + "&#x0243;" + "&#34;)'>&#x0243;</span>";
            inssym = inssym + "<span class='btn' title='Latin small letter B with stroke' onclick='mySym(&#34;" + "&#x0180;" + "&#x0243;" + "&#34;)'>&#x0180;</span>";
            inssym = inssym + "<span class='btn' title='' onclick='mySym(&#34;" + "d́" + "&#34;)'>d́</span>";
            inssym = inssym + "<span class='btn' title='' onclick='mySym(&#34;" + "ĺ" + "&#34;)'>ĺ</span>";
            inssym = inssym + "<span class='btn' title='' onclick='mySym(&#34;" + "t́" + "&#34;)'>t́</span>";
            break;
        case "mnu09":
            inssym = inssym + "<span class='btn' onclick='mySym(&#34;" + "Alt+0173" + "&#34;)' title='POOLITUSVIHJE - Alt+0173'>Alt+0173</span>";
            break;

        case "mnu10":
            inssym = inssym + "<span class='dia' title='komb. graavis U+0300' onclick='mySym(&#34;" + COMBINING_GRAVE + "&#34;)'>" + COMBINING_GRAVE + "</span>";
            inssym = inssym + "<span class='dia' title='komb. akuut U+0301' onclick='mySym(&#34;" + COMBINING_ACUTE + "&#34;)'>" + COMBINING_ACUTE + "</span>";
            inssym = inssym + "<span class='dia' title='komb. katus U+0302' onclick='mySym(&#34;" + COMBINING_CIRCUMFLEX + "&#34;)'>" + COMBINING_CIRCUMFLEX + "</span>";
            inssym = inssym + "<span class='dia' title='komb. tilde U+0303' onclick='mySym(&#34;" + COMBINING_TILDE + "&#34;)'>" + COMBINING_TILDE + "</span>";
            inssym = inssym + "<span class='dia' title='komb. makron U+0304' onclick='mySym(&#34;" + COMBINING_MACRON + "&#34;)'>" + COMBINING_MACRON + "</span>";
            inssym = inssym + "<span class='dia' title='komb. ülajoon U+0305' onclick='mySym(&#34;" + COMBINING_OVERLINE + "&#34;)'>" + COMBINING_OVERLINE + "</span>";
            inssym = inssym + "<span class='dia' title='komb. kaar U+0306' onclick='mySym(&#34;" + COMBINING_BREVE + "&#34;)'>" + COMBINING_BREVE + "</span>";
            inssym = inssym + "<span class='dia' title='komb. ülapunkt U+0307' onclick='mySym(&#34;" + COMBINING_DOT_ABOVE + "&#34;)'>" + COMBINING_DOT_ABOVE + "</span>";
            inssym = inssym + "<span class='dia' title='komb. treema U+0308' onclick='mySym(&#34;" + COMBINING_DIAERESIS + "&#34;)'>" + COMBINING_DIAERESIS + "</span>";
            inssym = inssym + "<span class='dia' title='komb. kolmveerandpikkus U+1DFE' onclick='mySym(&#34;" + "&#x1DFE;" + "&#34;)'>&#x1DFE;</span>";
            for (ixCode = 777; ixCode <= 879; ixCode++) {
                hex4Nr = jsStrRepeat(4 - hex(ixCode, true).constructor, "0") + hex(ixCode, true);
                inssym = inssym + "<span class='dia' title=' U+" + hex4Nr + "' onclick='mySym(&#34;" + "&#x" + hex4Nr + ";&#34;)'>&#x" + hex4Nr + ";</span>";
            }

            break;

    }

    return (inssym);
}

/**
* Korrutab sisendstringi n korda.
*
* @method jsStrRepeat
* @param {String} n Niimitu korda kordab stringi s.
* @param {String} s Sisendstring, mida korrutatakse n korda.
* @return {String} n korda korrutatud s-i.
*/
function jsStrRepeat(n, s) {
    var r = "";
    for (var a = 0; a < n; a++) {
        r += s;
    }
    return r;
}

/**
* Teisendab numbri 16-süsteemi.
*
* @method hex
* @param {Int} nmb Sisendnumber.
* @param {Boolean} uCase TRUE puhul on väljundis suured tähed.
* @return {String} 16-süsteemis väljund.
*/
function hex(nmb, uCase) {
    var hexNmb;
    if (nmb > 0)
        hexNmb = nmb.toString(16);
    else
        hexNmb = (nmb + 0x100000000).toString(16);
    if (uCase)
        return hexNmb.toUpperCase();
    else
        return hexNmb;
} // hex
