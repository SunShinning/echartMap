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
            {name: '成都市',value: '66511' },
                {name: '自贡市',value: '43' },
                {name: '攀枝花市',value: 0  },
                {name: '泸州市',value: '3' },
                {name: '德阳市',value: '35' },
                {name: '绵阳市',value: '362' },
                {name: '广元市',value: '0' },
                {name: '遂宁市',value: '40' },
                {name: '内江市',value: '22' },
                {name: '乐山市',value: '14' },
                {name: '南充市',value: '29' },
                {name: '眉山市',value: '14' },
                 {name: '宜宾市',value: '5' },
                {name: '广安市1',value: '5' },
                {name: '达州市',value: '0' },
                {name: '雅安市',value: '2' },
                {name: '巴中市',value: '3' },
                {name: '资阳市',value: '5' },
              {name: '阿坝藏族羌族自治州',value: '0' },
                {name: '甘孜藏族自治州',value:'0'},
                {name: '凉山彝族自治州',value: '4' }
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
               


                  {name: '成都市',value: '32307' },
                {name: '自贡市',value: '86' },
                {name: '攀枝花市',value: '9' },
                {name: '泸州市',value: '14' },
                {name: '德阳市',value: '1719' },
                {name: '绵阳市',value: '76' },
                {name: '广元市',value: '2' },
                {name: '遂宁市',value: '29' },
                {name: '内江市',value: '57'},
                {name: '乐山市',value: '77' },
                {name: '南充市',value: '22'},
                {name: '眉山市',value: '85' },

                {name: '宜宾市',value: '137' },
                {name: '广安市',value: '909' },
                {name: '达州市',value: '9' },
                {name: '雅安市',value: '3' },
                {name: '巴中市',value: '6' },
                {name: '资阳市',value: '5' },
                {name: '阿坝藏族羌族自治州',value: '0' },
                {name: '甘孜藏族自治州',value: '0' },

                {name: '凉山彝族自治州',value: '2' }
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
                {name: '成都市',value: '98818' },
                {name: '自贡市',value: '129'},
                {name: '攀枝花市',value: '9' },
                {name: '泸州市',value: '438' },
                {name: '德阳市',value: '2' },
                {name: '绵阳市',value: '438' },
                {name: '广元市',value: '2' },
                {name: '遂宁市',value: '69' },
                {name: '内江市',value: '36' },
                {name: '乐山市',value: '114' },
                {name: '南充市',value: '51' },
                {name: '眉山市',value: '914' },

                {name: '宜宾市',value: '3' },
                {name: '广安市',value: '8' },
                {name: '达州市',value: '914' },
                {name: '雅安市',value: '6' },
                {name: '巴中市',value: '9' },
                {name: '资阳市',value: '10' },
                {name: '阿坝藏族羌族自治州',value: '0' },
                {name: '甘孜藏族自治州',value: '0' },

                {name: '凉山彝族自治州',value: '6' }
            ]
        }
    ]
};

myChart.setOption(option);