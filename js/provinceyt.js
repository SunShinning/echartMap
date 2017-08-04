var myChart = echarts.init(document.getElementById('main'));
function randomData() {
    return Math.round(Math.random()*1000);
}
$.get("http://192.168.1.199/sichuan.json",function(data){
    console.log('ddd'+data)
})
option = {
    title: {
        text: '省内圆通发件量',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
         formatter: function(params) {  
                var res = params.name+'<br/>';  
                var myseries = option.series;  
                for (var i = 0; i < myseries.length; i++) {  
                    for(var j=0;j<myseries[i].data.length;j++){  
                        if(myseries[i].data[j].name==params.name){  
                            res+=myseries[i].name +' : '+myseries[i].data[j].value+'</br>';  
                        }  
                    }  
                }  
                return res;  
            }  
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['第一批','第二批','总计']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '第一批',
            type: 'map',
            mapType: '四川',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                    {name: '成都市',value: '286464' },
                {name: '自贡市',value: '1686' },
                {name: '攀枝花市',value: 0  },
                {name: '泸州市',value: randomData()  },
                {name: '德阳市',value: '5599' },
                {name: '绵阳市',value: '4939' },
                {name: '广元市',value: '2816' },
                {name: '遂宁市',value: '8083' },
                {name: '内江市',value: '0' },
                {name: '乐山市',value: '2282' },
                {name: '南充市',value: '0' },
                {name: '眉山市',value: '1740' },
                 {name: '宜宾市',value: '1825' },
                {name: '广安市1',value: '4283' },
                {name: '达州市',value: '790' },
                {name: '雅安市',value: '0' },
                {name: '巴中市',value: '15064' },
                {name: '资阳市',value: '0' },
                {name: '阿坝藏族羌族自治州',value: '3814' },
                {name: '甘孜藏族自治州',value: randomData() },
                {name: '凉山彝族自治州',value: randomData() }
            ]
        },
        {
            name: '第二批',
            type: 'map',
            mapType: '四川',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                  {name: '成都市',value: '44310' },
                {name: '自贡市',value: '510' },
                {name: '攀枝花市',value: 0 },
                {name: '泸州市',value: '134' },
                {name: '德阳市',value: '6549' },
                {name: '绵阳市',value: randomData() },
                {name: '广元市',value: '707' },
                {name: '遂宁市',value: '936' },
                {name: '内江市',value: '486'},
                {name: '乐山市',value: randomData() },
                {name: '南充市',value: randomData() },
                {name: '眉山市',value: randomData() },

                {name: '宜宾市',value: '1' },
                {name: '广安市',value: randomData() },
                {name: '达州市',value: randomData() },
                {name: '雅安市',value: randomData() },
                {name: '巴中市',value: '650' },
                {name: '资阳市',value: randomData() },
                {name: '阿坝藏族羌族自治州',value: randomData() },
                {name: '甘孜藏族自治州',value: randomData() },

                {name: '凉山彝族自治州',value: randomData() }
            ]
        },
        {
            name: '总计',
            type: 'map',
            mapType: '四川',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
            
                {name: '成都市',value: '330774' },
                {name: '自贡市',value: '2196'},
                {name: '攀枝花市',value: '0' },
                {name: '泸州市',value: '12148' },
                {name: '德阳市',value: '4939' },
                {name: '绵阳市',value: '3523' },
                {name: '广元市',value: '9019' },
                {name: '遂宁市',value: '486' },
                {name: '内江市',value: '2282' },
                {name: '乐山市',value: '0' },
                {name: '南充市',value: '1740' },
                {name: '眉山市',value: '1' },

                {name: '宜宾市',value: '1825' },
                {name: '广安市',value: '4283' },
                {name: '达州市',value: '790' },
                {name: '雅安市',value: '605' },
                {name: '巴中市',value: '15064' },
                {name: '资阳市',value: '0' },
                {name: '阿坝藏族羌族自治州',value: '0' },
                {name: '甘孜藏族自治州',value: '3814' },

                {name: '凉山彝族自治州',value: randomData() }
            ]
        }
    ]
};

myChart.setOption(option);