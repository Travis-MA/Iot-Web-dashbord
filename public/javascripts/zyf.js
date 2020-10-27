
$(function(){


  init1(1);
$('#loading').modal('show'); 
});


var dataPressure = [];
var dataTempIn = [];
var dataTempOut = [];
var dataState = [];

function generateData(jsdata,id) {

    var categoryData = [];
    var tempInData = [];
    var tempOutData = [];
    var pressInData = [];
    var stateData = [];
    var refreshTime = 0;
    var refreshState = 0;

    //获取不同时间的数
    //console.log('jsd: '+JSON.stringify(jsdata))
    var records = jsdata.records;
    var rec;
    for(var i in records){       
        rec = records[i];
        refreshTime = echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', rec.time*1000)
        categoryData.push(refreshTime);
        tempInData.push(rec.inTemp);
        tempOutData.push(rec.outTemp);
        pressInData.push(rec.inPress);
        refreshState = rec.state
        stateData.push(rec.state);     
    }

    dataPressure[id] = {
        categoryData : categoryData,
        valueData : pressInData
    };
    dataTempIn[id] = {
        categoryData : categoryData,
        valueData : tempInData
    };
    dataTempOut[id] = {
        categoryData : categoryData,
        valueData : tempOutData
    }
    dataState[id] = {
        categoryData : categoryData,
        valueData : stateData,
        refreshTime : refreshTime,
        refreshState : refreshState
    }

    console.log(dataState[id].valueData.length)
}



function init1(i){

 
    fetch("/zyf/datafu?FuId="+i, {
        method: "GET"        
    }).then(function(res) {
        return res.json();
    }).then(function (data) {

      var p = new Promise(function (resolve, reject) {
          generateData(data,i);
          init2(i); 
          if(i<7){
            resolve(i);
          }else{
            reject();
          }
      });
          p.then(function (i) {
            init1(i+1);
          }).catch(function (error) {
            console.log('catch error');
            console.log(error);
      });
      
    }); 
}

function init2(i){
    $('#loading').modal('hide'); 
    console.log('init2 :' + i); 
    var lcs = echarts.init(document.getElementById('lineChart'+i));
    $('#name' + i).text(i+"号釜-----更新时间："+dataState[i].refreshTime+'---状态：'+dataState[i].refreshState);

    lcs.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      toolbox: {
          show: true,
          feature: {
              dataView: {readOnly: false},
              restore: {},
              brush: { type: ['lineX', 'clear']},
              saveAsImage: {}
          },
      },

      tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' }
      },

      legend: {
        data:['釜内压力','釜内温度','釜表温度',],
        y: 'top',
        x:'center',
        textStyle:{ color:'#000000', fontSize:20 },
        itemGap : 50
      },

      brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        brushmode:'multiple',
        throttleDelay:1,
        outOfBrush: {colorAlpha: 1},
        inBrush: { colorAlpha: 1}
      },

      xAxis: {
        data: dataPressure[i].categoryData,
        axisLine:{lineStyle:{color: '#000000'},},
        splitLine: {show: false},
        axisLabel: {textStyle: {color: '#000000',fontSize:18},},
      },

      yAxis : 
      [
        {
              type : 'value',
              scale : true,
              axisLine:{
                  lineStyle:{
                      color: '#000000'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#000000',
                      fontSize:18
                  },
                  formatter: function (value) {
                      return value + "Mpa"
                  },
              },
          },
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#000000'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#000000',
                      fontSize:18
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
                start: 70,      // 左边在 70% 的位置。
                end: 100,    // 右边在 60% 的位置。
                show: true,
                realtime: true
         
            }
        ],
    
      series : [
            {
                name:'釜表温度',
                type:'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling:'average',
                smooth:'false',
                yAxisIndex: 1,
                data:dataState[i].valueData
            },
            {
                name:'釜内温度',
                type:'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling:'average',
                smooth:'false',
                yAxisIndex: 1,
                data:dataTempIn[i].valueData,
            },
            {
                name:'釜内压力',
                type:'line',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                sampling:'average',
                smooth:'false',
                data:dataPressure[i].valueData,
            }

      ],
    });

}


  




