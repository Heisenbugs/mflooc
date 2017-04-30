// dummy data for the endpoint
// api endpoint /places/Bangladesh
var countOrder = 'ASC';
var sortIconClass = 'fa fa-caret-square-o-down';
var elevArray = [];
var popdenArray = [];

var dummyData = {
    "country": "Bangladesh",
    "places": [{
            id: "1",
            "name": "#1231",
            "count": "0",
            "lat": "21.843876",
            "long": "90.16681",
            "radius": "24",
            "category": "1-10",
            "lowelev": "3",
            "popden": "450",
            "ecorisk": "10",
            "mortarisk": "55",
            "ffreq": "28",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "2",
            "name": "#1231",
            "count": "12",
            "lat": "21.743876",
            "long": "90.26681",
            "category": "1-10",
            "lowelev": "1",
            "popden": "490",
            "ecorisk": "80",
            "mortarisk": "51",
            "ffreq": "90",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "3",
            "name": "#2322",
            "count": "23",
            "lat": "22.843876",
            "long": "91.16681",
            "category": "1-10",
            "lowelev": "2",
            "popden": "500",
            "ecorisk": "100",
            "mortarisk": "60",
            "ffreq": "15",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "4",
            "name": "#2312",
            "count": "90",
            "lat": "29.843876",
            "long": "92.16681",
            "category": "1-11",
            "lowelev": "5",
            "popden": "600",
            "ecorisk": "10",
            "mortarisk": "66",
            "ffreq": "10",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#123",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#345",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#111",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#243",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#5667",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#345",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "#7897",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "4563",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        }, {
            id: "5",
            "name": "2342",
            "count": "91",
            "lat": "39.843876",
            "long": "87.16681",
            "category": "1-11",
            "lowelev": "4",
            "popden": "500",
            "ecorisk": "20",
            "mortarisk": "60",
            "ffreq": "11",
            "shortsum": "...",
            "morelink": "...",
            "future": []
        },

    ]
};

var tableData = [];

function sendHttpRequest(url) {
    const request = fetch(url);
    request
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err)
        })
}

function getAllData(url) {
    tableData = [];
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    tableRef.innerHTML = '';
    document.getElementById('heading').innerHTML = "Data for " + dummyData['country'];
    for (var i = 0; i < dummyData['places'].length; i++) {
        tableData.push(dummyData['places'][i]);
        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow(tableRef.rows.length);
        // Insert a cell in the row at index 0
        var nameCell = newRow.insertCell(0);
        var countCell = newRow.insertCell(1);
        var latCell = newRow.insertCell(2);
        var longCell = newRow.insertCell(3)
        var categoryCell = newRow.insertCell(4);
        var lowelevCell = newRow.insertCell(5);
        var popdenCell = newRow.insertCell(6);
        var ecoriskCell = newRow.insertCell(7);
        var mortariskCell = newRow.insertCell(8);
        var ffreqCell = newRow.insertCell(9);
        var shortsumCell = newRow.insertCell(10);
        var morelinkCell = newRow.insertCell(11);
        // Append a text node to the cell
        nameCell.appendChild(document.createTextNode(dummyData['places'][i].name));
        countCell.appendChild(document.createTextNode(dummyData['places'][i].count));
        latCell.appendChild(document.createTextNode(dummyData['places'][i].lat));
        longCell.appendChild(document.createTextNode(dummyData['places'][i].long));
        categoryCell.appendChild(document.createTextNode(dummyData['places'][i].category));
        lowelevCell.appendChild(document.createTextNode(dummyData['places'][i].lowelev));
        popdenCell.appendChild(document.createTextNode(dummyData['places'][i].popden));
        ecoriskCell.appendChild(document.createTextNode(dummyData['places'][i].ecorisk));
        mortariskCell.appendChild(document.createTextNode(dummyData['places'][i].mortarisk));
        ffreqCell.appendChild(document.createTextNode(dummyData['places'][i].ffreq));
        shortsumCell.appendChild(document.createTextNode(dummyData['places'][i].shortsum));
        morelinkCell.appendChild(document.createTextNode(dummyData['places'][i].morelink));
    }
}

function toggleSort(type) {
    if (countOrder == 'ASC') {
        countOrder = 'DESC';
        document.getElementById(type + '_icon').className = 'fa fa-caret-down';
    } else {
        countOrder = 'ASC';
        document.getElementById(type + '_icon').className = 'fa fa-caret-up';
    }
    dummyData['places'].sort(function(a, b) {
        if (countOrder == 'ASC') {
            return a[type] - b[type];
        } else {
            return b[type] - a[type];
        }
    });
    getAllData('');
}

function getLowelevHiLow() {
    dummyData['places'].map((item) => {
        elevArray.push(item['lowelev']);
    });
    var mx = Math.max(...elevArray);
    document.getElementById('hiElev').innerHTML = mx;
    var mn = Math.min(...elevArray);
    document.getElementById('lowElev').innerHTML = mn;
}

function getPopDenHiLow() {
    dummyData['places'].map((item) => {
        popdenArray.push(item['popden']);
    });
    var mx = Math.max(...popdenArray);
    document.getElementById('hiPop').innerHTML = mx;
    var mn = Math.min(...popdenArray);
    document.getElementById('lowPop').innerHTML = mn;
}

// get range for elev
function getElevRange(input) {
    var mx = document.getElementById('hiElev').innerHTML;
    var mn = document.getElementById('lowElev').innerHTML;
    var unit = (mx - mn) + 1;
    unit = 100 / unit;
    filterElevData(input / unit);
}

// filter data for lowelev
function filterElevData(num) {
    var filterNum = parseInt(num);
    console.log(filterNum);
    var newData = [];
    dummyData['places'].filter((obj) => {
        if (obj['lowelev'] <= filterNum) {
            newData.push(obj);
        }
    });

    // rearrange table data
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    tableRef.innerHTML = '';
    for (var i = 0; i < newData.length; i++) {
        tableData.push(newData[i]);
        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow(tableRef.rows.length);
        // Insert a cell in the row at index 0
        var nameCell = newRow.insertCell(0);
        var countCell = newRow.insertCell(1);
        var latCell = newRow.insertCell(2);
        var longCell = newRow.insertCell(3)
        var categoryCell = newRow.insertCell(4);
        var lowelevCell = newRow.insertCell(5);
        var popdenCell = newRow.insertCell(6);
        var ecoriskCell = newRow.insertCell(7);
        var mortariskCell = newRow.insertCell(8);
        var ffreqCell = newRow.insertCell(9);
        var shortsumCell = newRow.insertCell(10);
        var morelinkCell = newRow.insertCell(11);
        // Append a text node to the cell
        nameCell.appendChild(document.createTextNode(newData[i].name));
        countCell.appendChild(document.createTextNode(newData[i].count));
        latCell.appendChild(document.createTextNode(newData[i].lat));
        longCell.appendChild(document.createTextNode(newData[i].long));
        categoryCell.appendChild(document.createTextNode(newData[i].category));
        lowelevCell.appendChild(document.createTextNode(newData[i].lowelev));
        popdenCell.appendChild(document.createTextNode(newData[i].popden));
        ecoriskCell.appendChild(document.createTextNode(newData[i].ecorisk));
        mortariskCell.appendChild(document.createTextNode(newData[i].mortarisk));
        ffreqCell.appendChild(document.createTextNode(newData[i].ffreq));
        shortsumCell.appendChild(document.createTextNode(newData[i].shortsum));
        morelinkCell.appendChild(document.createTextNode(newData[i].morelink));
    }
}

// get range for pop density
function getPopRange(input) {
    var mx = document.getElementById('hiPop').innerHTML;
    document.getElementById('popden_range').max = mx;
    var mn = document.getElementById('lowPop').innerHTML;
    document.getElementById('popden_range').min = mn;
    var unit = (mx - mn) / 100;
    document.getElementById('popden_range').step = unit;
    filterPopData(input);
}


// filter data for popdensity
function filterPopData(num) {
    var filterNum = parseInt(num);
    var newData = [];
    dummyData['places'].filter((obj) => {
        if (obj['popden'] <= filterNum) {
            newData.push(obj);
        }
    });

    console.log(newData);

    // rearrange table data
    var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    tableRef.innerHTML = '';
    for (var i = 0; i < newData.length; i++) {
        tableData.push(newData[i]);
        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow(tableRef.rows.length);
        // Insert a cell in the row at index 0
        var nameCell = newRow.insertCell(0);
        var countCell = newRow.insertCell(1);
        var latCell = newRow.insertCell(2);
        var longCell = newRow.insertCell(3)
        var categoryCell = newRow.insertCell(4);
        var lowelevCell = newRow.insertCell(5);
        var popdenCell = newRow.insertCell(6);
        var ecoriskCell = newRow.insertCell(7);
        var mortariskCell = newRow.insertCell(8);
        var ffreqCell = newRow.insertCell(9);
        var shortsumCell = newRow.insertCell(10);
        var morelinkCell = newRow.insertCell(11);
        // Append a text node to the cell
        nameCell.appendChild(document.createTextNode(newData[i].name));
        countCell.appendChild(document.createTextNode(newData[i].count));
        latCell.appendChild(document.createTextNode(newData[i].lat));
        longCell.appendChild(document.createTextNode(newData[i].long));
        categoryCell.appendChild(document.createTextNode(newData[i].category));
        lowelevCell.appendChild(document.createTextNode(newData[i].lowelev));
        popdenCell.appendChild(document.createTextNode(newData[i].popden));
        ecoriskCell.appendChild(document.createTextNode(newData[i].ecorisk));
        mortariskCell.appendChild(document.createTextNode(newData[i].mortarisk));
        ffreqCell.appendChild(document.createTextNode(newData[i].ffreq));
        shortsumCell.appendChild(document.createTextNode(newData[i].shortsum));
        morelinkCell.appendChild(document.createTextNode(newData[i].morelink));
    }
}
