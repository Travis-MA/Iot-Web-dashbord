

$(function () {


    init1();

})

var dataPressure;
var dataTempIn;
var dataTempOut;
var dataState;

var stateAnalysis = [];

var zeroOffset = 7;
var offsetDate = new Date();
offsetDate.setTime(offsetDate.getTime() - zeroOffset * 60 * 60 * 1000);


function dateString(now) {

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();

    var yearStr = year;
    var monthStr;
    var dateStr;
    if (month.toString().length == 1) {
        monthStr = '0' + month.toString();
    } else {
        monthStr = month.toString();
    }

    if (date.toString().length == 1) {
        dateStr = '0' + date.toString();
    } else {
        dateStr = date.toString();
    }

    var todayStr = yearStr + '-' + monthStr + '-' + dateStr;

    return todayStr;
}

function timeString(now, start) {

    var month = now.getMonth() + 1;
    var hour = now.getHours();
    var date = now.getDate();

    if (month > 0) {

        var min = now.getMinutes();
        var minStr;
        if (min.toString().length == 1) {
            minStr = '0' + min.toString();
        } else {
            minStr = min.toString();
        }
        if (hour >= 0 && hour <= 6) {
            return month + '月' + date + '号凌晨' + hour + '点' + minStr + '分';
        } else if (hour > 6 && hour < 13) {
            return month + '月' + date + '号上午' + hour + '点' + minStr + '分';
        } else if (hour >= 13 && hour <= 18) {
            return month + '月' + date + '号下午' + (hour - 12) + '点' + minStr + '分';
        } else {
            return month + '月' + date + '号晚上' + (hour - 12) + '点' + minStr + '分';
        }

    } else {
        return '等待出釜';
    }

}

function diffTime(EndTime, StartTime, mode) {

    var today = new Date().getTime();
    if (!(EndTime > 0)) {
        EndTime = today;
    }
    var time = (EndTime - StartTime) / 1000
    var hour = Math.floor(time / 3600);
    var min = Math.floor(time / 60);

    if (mode === 1 && EndTime === today){
        return '--';
    }else if(mode === 0) {
        return hour +'小时'+ Math.floor((time-hour*3600) / 60) +'分钟';
    }else{
        return min + '分钟';
    }
}

function generateData(jsdata, scale) {


    var categoryData = [];
    var valueData = [];
    var rec;

    for (var i in jsdata) {
        rec = jsdata[i];
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', new Date(parseInt(rec.t) * 1000)));
        valueData.push(rec.v*scale);
    }

    return {
        categoryData: categoryData,
        valueData: valueData
    };
}



function addNew(rec){

    var tb = document.getElementById('stateTable');

    //添加行
    var newTR = tb.insertRow(tb.rows.length);
    newTR.id = "HH";

    //添加列:阶段名称
    var stateName = newTR.insertCell(0);
    //添加列内容
    stateName.innerHTML = rec.name;

    //添加列:时长
    var timeLength = newTR.insertCell(1);
    //添加列内容
    timeLength.innerHTML = diffTime(parseInt(rec.endTime)*1000, parseInt(rec.startTime)*1000, 1);

    //压力差
    var pressureDiff = newTR.insertCell(2);
    pressureDiff.innerHTML = rec.deltaInPress;
    if (rec.deltaInPress > 0){
        pressureDiff.style.cssText="background-color: #FF6347;"+
            "border-radius: 8px; color: #fdfdfd; font-weight:bold;";

    }else if(rec.deltaInPress < 0){
        pressureDiff.style.cssText="background-color: #228B22;"+
            "border-radius: 8px; color: #fdfdfd; font-weight:bold;";
    }else{
        pressureDiff.style.cssText="background-color: #AFEEEE;"+
            "border-radius: 8px;font-weight:bold;";
    }


    //本釜月平均
    var pressureDiff1 = newTR.insertCell(3);
    pressureDiff1.innerHTML = "--";


    //月平均
    var pressureDiff2 = newTR.insertCell(4);
    pressureDiff2.innerHTML = "--";


    //内温差
    var inTempDiff = newTR.insertCell(5);
    inTempDiff.innerHTML = rec.deltaInTemp;
    if (rec.deltaInTemp > 0){
        inTempDiff.style.cssText="background-color: #FF6347;"+
            "border-radius: 8px; color: #fdfdfd; font-weight:bold;";

    }else if(rec.deltaInTemp < 0){
        inTempDiff.style.cssText="background-color: #228B22;"+
            "border-radius: 8px; color: #fdfdfd; font-weight:bold;";
    }else{
        inTempDiff.style.cssText="background-color: #AFEEEE;"+
            "border-radius: 8px;font-weight:bold;";
    }

    //本釜月平均
    var inTempDiff1 = newTR.insertCell(6);
    inTempDiff1.innerHTML = "--";

    //月平均
    var inTempDiff2 = newTR.insertCell(7);
    inTempDiff2.innerHTML = "--";



    //外温差
    var outTempDiff = newTR.insertCell(8);
    outTempDiff.innerHTML = rec.deltaOutTemp;
    if (rec.deltaOutTemp > 0){
        outTempDiff.style.cssText="background-color: #FF6347;"+
            "border-radius: 8px; color: #fdfdfd; font-weight:bold;";

    }else if(rec.deltaOutTemp < 0){
        outTempDiff.style.cssText="background-color: #228B22;"+
            "border-radius: 8px; color: #fdfdfd; font-weight:bold;";
    }else{
        outTempDiff.style.cssText="background-color: #AFEEEE;"+
            "border-radius: 8px;font-weight:bold;";
    }

    //本釜月平均
    var outTempDiff1 = newTR.insertCell(9);
    outTempDiff1.innerHTML = "--";

    //月平均
    var outTempDiff2 = newTR.insertCell(10);
    outTempDiff2.innerHTML = "--";

}


function init1() {

    var dateCtrl = 0;
    var now = new Date();
    now.setTime(now.getTime() + dateCtrl * 24 * 60 * 60 * 1000);
    console.log(dateString(now));

    fetch("/zyrc/zyevData", {
        method: "GET"
    }).then(function (res) {
        return res.json();
    }).then(function (data) {


        $('#name_head').text(data.FuId + "号釜");
        var startTimeStr = timeString(new Date(parseInt(data.startTime)), 0);
        var endTimeStr = timeString(new Date(parseInt(data.endTime)), new Date(parseInt(data.startTime)));
        var diffTimeStr = diffTime(parseInt(data.endTime), parseInt(data.startTime), 0);
        $('#startTime').text("记录开始时间:       " + startTimeStr);
        if (endTimeStr.length > 6) {
            $('#endTime').text("记录结束时间:       " + endTimeStr);
        } else {
            $('#endTime').text(endTimeStr);
        }
        var recordData = data.data;
        $('#text3').text("记录时长:   " + diffTimeStr);
        $('#text4').text("采样点数：   "+ recordData.pressure.length);


        dataPressure = generateData(recordData.pressure,1);
        dataTempIn = generateData(recordData.tempIn,1);
        dataTempOut = generateData(recordData.tempOut,1);
        dataState = generateData(recordData.state, 1/2500);

        init2();

    });

    fetch("/zyrc/zyevAnalysis", {
        method: "GET"
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data)
        console.log(data.devInput)
        $('#text5').text("终端输入：  " + data.devInput);
        $('#text6').text("传感器输入：  " + data.sensorInput);

        var stateInfo = data.stateInfo;
        if (stateInfo.type === 1){
            var stateList = stateInfo.state;
            var categoryData = [];
            var valueData = [];
            console.log("stateList:    "+stateList)
            for (var i in stateList){
                var state = stateList[i]
                var startIndex = state.startIndex
                var time = echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', new Date(parseInt(state.startTime) * 1000));

                stateAnalysis.push({name: state.name,xAxis:startIndex, value:time});
            }
            console.log("stateAnalysis:    "+stateAnalysis)

            for (var i in stateList){
                var state = stateList[i];
                addNew(state)
            }
        }

    });
}


function init2() {

    var lcs = echarts.init(document.getElementById('lineChart1'));

    lcs.setOption({
        toolbox: {
            show: true,
            feature: {
                dataView: {readOnly: false},
                restore: {},
                brush: {
                    type: ['lineX', 'clear']
                },
                saveAsImage: {}
            },


        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        legend: {
            data: ['釜内压力', '釜内温度', '釜表温度', '阶段阶梯曲线'],
            y: 'top',
            x: 'center',
            textStyle: {
                color: '#000000',
                fontSize: 20
            },
            itemGap: 50
        },

        brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            brushmode: 'multiple',
            throttleDelay: 1,
            outOfBrush: {
                colorAlpha: 1
            },
            inBrush: {
                colorAlpha: 1
            }
        },

        xAxis: {
            data: dataPressure.categoryData,
            axisLine: {
                lineStyle: {
                    color: '#000000'
                },
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#000000',
                    fontSize: 18
                },
            },
        },

        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLine: {
                    lineStyle: {
                        color: '#000000'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000000',
                        fontSize: 18
                    },
                    formatter: function (value) {
                        return value + "Mpa"
                    },
                },
            },
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#000000'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000000',
                        fontSize: 18
                    },
                    formatter: function (value) {
                        return value + "C"
                    },
                },
            }
        ],


        dataZoom: [

            {   // 这个dataZoom组件，也控制x轴。
                type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
                start: 0,      // 左边在 10% 的位置。
                end: 100         // 右边在 60% 的位置。
            }
        ],

        series: [

            {
                name: '釜表温度',
                color: 'rgb(0,145,255)',
                type: 'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling: 'average',
                smooth: 'false',
                yAxisIndex: 1,
                data: dataTempOut.valueData
            },
            {
                name: '釜内温度',
                color: 'rgb(14,219,4)',
                type: 'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling: 'average',
                smooth: 'false',
                yAxisIndex: 1,
                data: dataTempIn.valueData,
            },
            {
                name: '釜内压力',
                color: 'rgb(248,10,0)',
                type: 'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling: 'average',
                smooth: 'false',
                data: dataPressure.valueData,
            },
            {
                name: '阶段阶梯曲线',
                color: 'rgb(191,191,191)',
                type: 'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling: 'average',
                smooth: 'false',
                show: false,
                data: dataState.valueData,
                markLine: {
                    data: stateAnalysis,
                    symbolSize:0,
                    lineStyle:{
                        color:'rgb(1,25,248)',
                        type:'solid',
                        opacity:1
                    },
                    label:{
                        show:true,
                        position: 'end',
                        formatter: '{b}'

                    },
                    emphasis: {
                        label:{
                            show:true,
                            position: 'end',
                            formatter: '{b}\n{c}'

                        },
                        lineStyle: {
                            color:'rgb(248,10,0)',
                            type:'solid',
                            opacity:1
                        }
                    },
                    animation: true,
                    silent:false
                }
            }

        ],
    });



}



