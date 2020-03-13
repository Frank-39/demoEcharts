$(document).ready(function(){
    // 基于准备好的dom，初始化echarts实例

    var myChart = echarts.init(document.getElementById('main'));//获取绘图位置对象
    //配置

    option = {
        title: {
            x: "left",
            text: '省份分布',
            textStyle: {
                fontSize: 14
                , fontWeight: 'normal'
                , color: '#565656'
            }
            , left: 20
            , top: 10
        },
        tooltip: {
            trigger: 'item'
            , formatter: '{b}<br>参与人数：{c}'
        },

        visualMap: {
            min: 0,
            max: 2500,
            left: 20,
            bottom: 10,
            text: ['高', '低'],// 文本，默认为数值文本
            color: ['#20a0ff', '#D2EDFF'],
            calculable: false
        },
        series: [
            {
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true, //显示省份标签
                        textStyle: {
                            color: "black"
                        } //省份标签字体颜色
                    },
                    emphasis: { //对应的鼠标悬浮效果
                        show: false,
                        textStyle: {
                            color: "#800080"
                        }
                    }
                },

                data: [
                    {name: '北京', value: 1},
                    {name: '天津', value: 1},
                    {name: '上海', value: 1},
                    {name: '重庆', value: 1},
                    {name: '河北', value: 1},
                    {name: '安徽', value: 1},
                    {name: '新疆', value: 1},
                    {name: '浙江', value: 1},
                    {name: '江西', value: 1},
                    {name: '山西', value: 1},
                    {name: '内蒙古', value: 1},
                    {name: '吉林', value: 1},
                    {name: '福建', value: 1},
                    {name: '广东', value: 1},
                    {name: '西藏', value: 72},
                    {name: '四川', value: 1},
                    {name: '宁夏', value: 1},
                    {name: '香港', value: 0},
                    {name: '辽宁', value: 8347},
                    {name: '江苏', value: 1},
                    {name: '山东', value: 1},
                    {name: '河南', value: 1},
                    {name: '湖北', value: 1},
                    {name: '湖南', value: 1},
                    {name: '广西', value: 1},
                    {name: '贵州', value: 1},
                    {name: '陕西', value: 1},
                    {name: '甘肃', value: 1},
                    {name: '云南', value: 1},
                    {name: '青海', value: 517},
                    {name: '黑龙江', value: 1},
                    {name: '海南', value: 237}
                ]

            }
        ]
    }
    //为echarts对象加载数据
    myChart.setOption(option);

//获取数据
    $.getJSON("data/people.json",function(data11){
        var d=data11.people;

// fetchData(function (data11) {
        myChart.setOption({
            series: [{
                data:d
            },
            ]
        });
    });
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
