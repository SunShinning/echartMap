var myChart = echarts.init(document.getElementById('main'));
function randomData() {
    return Math.round(Math.random()*1000);
}
$.get("http://192.168.1.199/sichuan.json",function(data){
    console.log('ddd'+data)
})
option = {
    title: {
        text: '省内邮局发件量',
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (params.data.fromName) {
                return params.data.fromName + " > " + params.data.toName + "  : " + params.data.value;
            }else{
                return  params.data.name+" : " + params.data.value;
            }

        }

    },
    legend: {
        orient: 'vertical',
        left: 'right'
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
            name: '中通',
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
                {name: '成都市',value: "<br>邮政：1525件<br>"+"中通：8585" },
                {name: '自贡市',value: "<br>邮政：510件<br>"+"中通：8585" },
                {name: '攀枝花市',value:"<br>邮政：0件<br>"+"中通：8585"  },
                {name: '泸州市',value: "<br>邮政：134件<br>"+"中通：8585"  },
                {name: '德阳市',value: "<br>邮政：6549件<br>"+"中通：8585"  },
                {name: '绵阳市',value: "<br>邮政：1525件<br>"+"中通：8585"  },
                {name: '广元市',value: "<br>邮政：707件<br>"+"中通：8585"  },
                {name: '遂宁市',value: "<br>邮政：936件<br>"+"中通：8585"  },
                {name: '内江市',value: "<br>邮政：486件<br>"+"中通：8585" },
                {name: '乐山市',value: "<br>邮政：0件<br>"+"中通：8585"  },
                {name: '南充市',value: "<br>邮政：125件<br>"+"中通：8585" },
                {name: '眉山市',value: "<br>邮政：825件<br>"+"中通：8585"  },

                {name: '宜宾市',value: "<br>邮政：1525件<br>"+"中通：8585"  },
                {name: '广安市',value: "<br>邮政：852件<br>"+"中通：8585"  },
                {name: '达州市',value: "<br>邮政：4525件<br>"+"中通：8585"  },
                {name: '雅安市',value: "<br>邮政：4525件<br>"+"中通：8585"  },
                {name: '巴中市',value: "<br>邮政：1585件<br>"+"中通：8585"  },
                {name: '资阳市',value: "<br>邮政：1755件<br>"+"中通：8585"  },
                {name: '阿坝藏族羌族自治州',value: "<br>邮政：4525件<br>"+"中通：8585"  },
                {name: '甘孜藏族自治州',value: "<br>邮政：758件<br>"+"中通：8585"  },

                {name: '凉山彝族自治州',value: "<br>邮政：7852件<br>"+"中通：8585"  }
            ]
        },
        
    ]
};

myChart.setOption(option);