var originData = {
    "data": {
        "sale": [{
            "from_region_name": "\u524d\u95e8",
            "from_region_longitde": "116.41473",
            "from_region_latitude": "39.910824",
            "to_region_name": "\u9752\u5854",
            "to_region_longitde": "116.25656",
            "to_region_latitude": "39.885857",
            "change_count": "100"
        }],
        "buy": [{
            "from_region_name": "\u5e7f\u6e20\u95e8",
            "from_region_longitde": "116.44684",
            "from_region_latitude": "39.893852",
            "to_region_name": "\u524d\u95e8",
            "to_region_longitde": "116.41473",
            "to_region_latitude": "39.910824",
            "change_count": "1000"
        }]
    }
};


var originData2 = {
    "errno": 0,
    "errmsg": "success",
    "data": {
        "sale": [{
            "from_region_name": "\u4e0a\u5730",
            "from_region_longitde": "116.31788",
            "from_region_latitude": "40.042",
            "to_region_name": "\u4e2d\u5173\u6751",
            "to_region_longitde": "116.33488",
            "to_region_latitude": "39.986702",
            "change_count": "1"
        }],
        "buy": [{
            "from_region_name": "\u4e2d\u5173\u6751",
            "from_region_longitde": "116.33488",
            "from_region_latitude": "39.986702",
            "to_region_name": "\u4e0a\u5730",
            "to_region_longitde": "116.31788",
            "to_region_latitude": "40.042",
            "change_count": "1"
        }]
    }
};

var geoCoordMap = {
};


var datas = [];


var Count = 5;


function formalizeData(data) {
    var da = [
        ['1', [], '1'],
        ['2', [], '2']
    ];
    var coordData = {};


    data.data.sale.forEach(function(va, ke) {
        coordData[va.from_region_name] = [va.from_region_longitde, va.from_region_latitude];
        coordData[va.to_region_name] = [va.to_region_longitde, va.to_region_latitude];
    });

    data.data.buy.forEach(function(va, ke) {

        coordData[va.from_region_name] = [va.from_region_longitde, va.from_region_latitude];
        coordData[va.to_region_name] = [va.to_region_longitde, va.to_region_latitude];
    });

    originData2.data.sale.forEach(function(va, ke) {
        coordData[va.from_region_name] = [va.from_region_longitde, va.from_region_latitude];
        coordData[va.to_region_name] = [va.to_region_longitde, va.to_region_latitude];
    });

    originData2.data.buy.forEach(function(va, ke) {

        coordData[va.from_region_name] = [va.from_region_longitde, va.from_region_latitude];
        coordData[va.to_region_name] = [va.to_region_longitde, va.to_region_latitude];
    });




    data.data.sale.sort(function(per, nxt) {
        return nxt.change_count - nxt.change_count;
    });

    data.data.buy.sort(function(per, nxt) {
        return nxt.change_count - per.change_count;
    });

    originData2.data.sale.sort(function(per, nxt) {
        return nxt.change_count - nxt.change_count;
    });

    originData2.data.buy.sort(function(per, nxt) {
        return nxt.change_count - per.change_count;
    });


    data.data.sale = data.data.sale.slice(0, Count).concat(originData2.data.sale.slice(0, Count));
    data.data.buy = data.data.buy.slice(0, Count).concat(originData2.data.buy.slice(0, Count));


    data.data.sale.forEach(function(va, ke) {
        da[1][1].push([{
            name: va.from_region_name,
            value: va.change_count
        }, {
            name: va.to_region_name,
            value: va.change_count,
            begin: 1
        }]);
    });

    data.data.buy.forEach(function(va, ke) {

        da[0][1].push([{
            name: va.from_region_name,
            value: va.change_count,
            begin: 1
        }, {
            name: va.to_region_name,
            value: va.change_count
        }]);
    });



    return {
        data: da,
        coord: coordData
    }

}

datas = formalizeData(originData).data;
geoCoordMap = formalizeData(originData).coord;

var color = ['red', 'orange', 'yellow', 'green', 'blue'];



function getColor(obj) {
    // 10 -> color[4]
    // 50 -> color[3]
    // 100 -> color[2]
    // 500 -> color[1]
    // ->color[0]

    var count = parseInt(Math.random() * 1000, 10);
    var colors = 'white';

    /*if(!obj.begin) {
        return 'rgba(128, 128, 128, 0)';
    }*/

    switch (true) {
        case (count <= 10):
            colors = color[4];
            break;

        case (count <= 50):
            colors = color[3];
            break;

        case (count <= 100):
            colors = color[2];
            break;

        case (count <= 500):
            colors = color[1];
            break;

        case (count > 500):
            colors = color[0];
            break;
    }

    return colors;
}