var myChart = echarts.init(document.getElementById('main'));
function randomData() {
    return Math.round(Math.random()*1000);
}
$.get("http://192.168.1.199/sichuan.json",function(data){
    console.log('ddd'+data)
})
option = {
    title: {
        text: '全国邮局发件量',
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
        left: 'left',
        data:[,'中通','邮局']
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
            name: '',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {name: '新疆',value: "<br>邮政：1525件<br>"+"中通：8585" },
                {name: '内蒙古',value: "<br>邮政：510件<br>"+"中通：8585" },
                {name: '宁夏',value:"<br>邮政：0件<br>"+"中通：8585"  },
                {name: '青海',value: "<br>邮政：134件<br>"+"中通：8585"  },
                {name: '西藏',value: "<br>邮政：6549件<br>"+"中通：8585"  },
                {name: '四川',value: "<br>邮政：1525件<br>"+"中通：8585"  },
                {name: '北京',value: "<br>邮政：707件<br>"+"中通：8585"  },
                {name: '成都',value: "<br>邮政：936件<br>"+"中通：8585"  },
                {name: '山西',value: "<br>邮政：486件<br>"+"中通：8585" },
                {name: '山东',value: "<br>邮政：0件<br>"+"中通：8585"  },
                {name: '河北',value: "<br>邮政：125件<br>"+"中通：8585" },
                {name: '河南',value: "<br>邮政：825件<br>"+"中通：8585"  },
                {name: '吉林',value: "<br>邮政：825件<br>"+"中通：8585"  },
                {name: '辽宁',value: "<br>邮政：825件<br>"+"中通：8585"  },
                {name: '浙江',value: "<br>邮政：825件<br>"+"中通：8585"  },
                 {name: '天津',value: "<br>邮政：1525件<br>"+"中通：8585"  },
                {name: '安徽',value: "<br>邮政：852件<br>"+"中通：8585"  },
                {name: '湖南',value: "<br>邮政：4525件<br>"+"中通：8585"  },
                {name: '湖北',value: "<br>邮政：4525件<br>"+"中通：8585"  },
                {name: '黑龙江',value: "<br>邮政：1585件<br>"+"中通：8585"  },
                {name: '江西',value: "<br>邮政：1755件<br>"+"中通：8585"  },
                {name: '江苏',value: "<br>邮政：1755件<br>"+"中通：8585"  },
                {name: '广东',value: "<br>邮政：4525件<br>"+"中通：8585"  },
                {name: '澳门',value: "<br>邮政：758件<br>"+"中通：8585"  },
                 {name: '云南',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '贵州',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '广西',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '海南',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '山西',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '贵州',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '陕西',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '甘肃',value: "<br>邮政：7852件<br>"+"中通：8585"  },
                 {name: '福建',value: "<br>邮政：7852件<br>"+"中通：8585"  },
            ]
        },

    ]
};

myChart.setOption(option);