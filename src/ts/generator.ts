
export const gen = (qty: number) => {
    const arr = [];
    const name_first=["David","John","Paul","Mark","James","Andrew","Scott","Steven","Robert","Stephen","William","Craig","Michael","Stuart","Christopher","Alan","Colin","Brian","Kevin","Gary","Richard.Derek","Martin","Thomas","Neil","Barry","Ian","Jason","Iain","Gordon","Alexander","Graeme","Peter","Darren","Graham","George","Kenneth","Allan","Simon","Douglas","Keith","Lee","Anthony","Grant","Ross","Jonathan","Gavin","Nicholas","Joseph","Stewart","Daniel","Edward","Matthew","Donald","Fraser","Garry","Malcol","Charles","Duncan","Alistair","Raymond","Philip","Ronald","Ewan","Ryan","Francis","Bruce","Patrick","Alastair","Bryan","Marc","Jamie","Hugh","Euan","Gerard","Sean","Wayne","Adam","Calum","Alasdair","Robin","Greig","Angus","Russell","Cameron","Roderick","Norman","Murray","Gareth","Dean","Eric","Adrian","Gregor","Samuel","Gerald","Henry","Justin","Benjamin","Shaun","Foster","Frost"];;"use strict";
    const name_last=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey.Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes","Lacy"];;"use strict";
    const number = (num: number) => Math.floor(Math.random() * num) + 1;
    const postcode=["NP4 9DY","NP4 9DY","SM4 9BT","TS16 9DT","BL1 3QT","WF3 1HX","TN6 2BF","IP13 7SE","SA15 4BA","SL2 5DE","G34 0BU","NP4 9AT","SS7 5PB","GU24 0BF","LL68 0UB","SK6 2EY","B36 8NE","YO26 8AS","PO15 6ED","TN34 3HD","KY11 9TU","SS6 0BN","TF4 3BH","FK2 9DE","CF46 5LW","SG7 6AQ","BN2 9QJ","WV5 0NU","EC4A 3AT","WR10 1HF","BN5 9TA","SK22 4PA","S63 9AF","ST17 0TX","CF64 3DH","LS11 5JE","CF14 2HR","SM2 5JZ","IM4 4EP","LE7 7DR","HA0 3SD","W12 7QP","LS19 7EL","WS2 8QG","BT38 9BH","PE13 4NT","L24 1XN","BA6 8TX","PR7 5JH","PE25 2DE","TA4 3NJ","S60 2JA","DA3 7LJ","AB10 6AY","DL5 7PY","LL53 7PL","NN13 5LT","B74 2TJ","TN6 2BF","HU19 2AA","LA14 1NY","SO16 8LU","CM2 8TH","LL18 5AE","LS8 1PH","PL14 3PJ","BT24 7DJ","YO62 6EQ","NG13 8UA",,"IP13 7SE","SA15 4BA","SL2 5DE","G34 0BU","NP4 9AT","SS7 5PB","GU24 0BF","LL68 0UB","SK6 2EY","B36 8NE","YO26 8AS","PO15 6ED","TN34 3HD","KY11 9TU","SS6 0BN","TF4 3BH","FK2 9DE","CF46 5LW","SG7 6AQ","BN2 9QJ","WV5 0NU","EC4A 3AT","WR10 1HF","BN5 9TA","SK22 4PA","S63 9AF","ST17 0TX","CF64 3DH","LS11 5JE","CF14 2HR","SM2 5JZ","IM4 4EP"];;"use strict";
    const street_type=["Road","Way","street","Avenue","Gardens","Boulevard","Drive","Place","Terrance","Court","Plaza","Square"];;"use strict";
    const town_city=["Avon","Bedfordshire","Berkshire","Buckinghamshire","Cambridgeshire","Cheshire","Cleveland","Cornwall","Cumbria","Derbyshire","Devon","Dorset","Durham","East Sussex","Essex","Gloucestershire","Hampshire","Herefordshire","Hertfordshire","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","London","Merseyside","Middlesex","Norfolk","Northamptonshire","Northumberland","North Humberside","North Yorkshire","Nottinghamshire","Oxfordshire","Rutland","Shropshire","Somerset","South Humberside","South Yorkshire","Staffordshire","Suffolk","Surrey","Tyne and Wear","Warwickshire","West Midlands","West Sussex","West Yorkshire","Wiltshire","Worcestershire","Clwyd","Dyfed","Gwent","Gwynedd","Mid Glamorgan","Powys","South Glamorgan","West Glamorgan","Aberdeenshire","Angus","Argyll","Ayrshire","Banffshire","Berwickshire","Bute","Caithness","Clackmannanshire","Dumfriesshire","Dunbartonshire","East Lothian","Fife","Inverness-shire","Kincardineshire","Kinross-shire","Kirkcudbrightshire","Lanarkshire","Midlothian","Moray","Nairnshire","Orkney","Peeblesshire","Perthshire","Renfrewshire","Ross-shire","Roxburghshire","Selkirkshire","Shetland","Stirlingshire","Sutherland","West Lothian","Wigtownshire","Antrim","Armagh","Down","Fermanagh","Londonderry","Tyrone"];

    const min = 1234567890;
    const max = 9876543210;

    function randomNumber(min: number, max: number) { 
        return Math.random() * (max - min) + min;
    } 

    function getEmail() {
        const result = `${name_first[Math.floor(Math.random() * name_first.length)]}@${name_last[Math.floor(Math.random() * name_last.length)]}.com`
        return result.toLowerCase()
    }

    for ( let i = 1; i <= qty; i++ ) {
        arr.push({
            id: i,
            firstName: name_first[Math.floor(Math.random() * name_first.length)],
            lastName: name_last[Math.floor(Math.random() * name_last.length)],
            street: `${number(300)},${name_last[Math.floor(Math.random() * name_last.length)]} ${street_type[Math.floor(Math.random() * street_type.length)]}`,
            townCity:  town_city[Math.floor(Math.random() * town_city.length)],
            postcode:  postcode[Math.floor(Math.random() * postcode.length)],
            telephone: `0${Math.round(randomNumber(min, max))}`,
            email: getEmail()
        })
    }
    return arr;
}

// https://codesandbox.io/s/holy-firefly-b3ywmd?file=/src/App.js