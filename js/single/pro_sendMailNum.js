var myChart = echarts.init(document.getElementById('main'));
var geoCoordMap = {
    '成都':[104.045461,30.577228],
    '广元':[105.840978,32.442619],
    '阿坝州':[102.231186,31.908674],
    '绵阳':[104.67097,31.527592],
    '巴中':[106.749864,31.952111],
    '攀枝花':[101.690607,26.632995],
    '内江':[105.057313,29.601285],
    '自贡':[104.762956,29.375931],
    '宜宾':[104.615778,28.777929],
    '南充':[106.087561,30.879212],
    '德阳':[104.39501,31.148597],
    '达州':[107.467359,31.227681],
    '雅安':[103.052007,30.050466],
    '乐山':[103.732707,29.601285],
    '泸州':[105.443656,28.891333],
    '资阳':[104.634175,30.178428],
    '甘孜州':[101.727402,30.497599],
    '凉山州':[102.168937,27.718977],
    '遂宁':[105.55404,30.593145]

};

var BJData = [
    [{name:'成都'}, {name:'广元',value:95,Cpvalue:"<br>邮政：52852件<br>"+"￥中通：522件<br>"}],

    [{name:'成都'},{name:'绵阳',value:95,Cpvalue:"<br>邮政：52652件<br>"+"￥中通：522件<br>"}],
    [{name:'成都'},{name:'雅安',value:95,Cpvalue:"<br>邮政：52572件<br>"+"￥中通：552件<br>"}],
    [{name:'成都'},{name:'德阳',value:95,Cpvalue:"<br>邮政：52527件<br>"+"￥中通：452件<br>"}],

    [{name:'成都'}, {name:'阿坝州',value:95,Cpvalue:"<br>邮政：54252件<br>"+"中通：75252件<br>"}],
    [{name:'成都'},{name:'达州',value:95,Cpvalue:"<br>邮政：35252件<br>"+"中通：58252件<br>"}],

];

var SHData = [
    [{name:'成都'},{name:'攀枝花',value:95,Cpvalue:"<br>邮政：35252件<br>"+"中通：58252件<br>"}],
];

var GZData = [

    [{name:'成都'},{name:'泸州',value:95,Cpvalue:"<br>邮政:110<br>"+"中通：1254<br>"}],
    [{name:'成都'},{name:'巴中',value:95,Cpvalue:"<br>邮政：25252件<br>"+"中通：52852件<br>"}],


];


var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                Cpvalue:dataItem[1].Cpvalue,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['邮政领先', BJData], ['二者持平', SHData], ['邮政落后', GZData]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            coordinateSystem:'geo',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle:{
                        color:'#000'
                    }

                },
                emphasis:{
                    textStyle:{
                        color:'#000',
                        fontSize:12
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[1],
            type: 'lines',
            coordinateSystem:'geo',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle:{

                    }

                },
                emphasis:{
                    textStyle:{

                        fontSize:12
                    }
                }
            },
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    textStyle:{

                    }

                },
                emphasis:{
                    textStyle:{

                        fontSize:12
                    }
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
});

option = {
    backgroundColor: '#404a59',
    title : {
        text: '四川重点城市价格对比',
        subtext: '中通vs邮政',
        left: 'center',
        textStyle : {
            color: '#fff',
            fontSize:'40',
            fontWeight:'bolder'
        },
        subtextStyle:{
            fontSize:'30',
            color:'#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.data.fromName) {
                return params.data.fromName + " > " + params.data.toName + "  : " + params.data.Cpvalue;
            }else{
                return params.name + "<br/>邮政日处理件量：" + params.value[2];
            }

        }
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['邮政领先', '二者持平', '邮政落后'],
        textStyle: {
            color: '#fff'
        },
        //selectedMode: 'single'
    },
    geo: {
        map: '四川',
        label: {
            normal: {
                show: true,


                textStyle:{
                    color:'#fff'
                }

            },
            emphasis:{
                textStyle:{
                    color:'#FFFFFF',
                    fontSize:12
                }
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};
myChart.setOption(option);