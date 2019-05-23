http://echarts.baidu.com/echarts2/doc/doc.html#Title

xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data:[],
                  axisLine:{
                    lineStyle:{
                        color:'#C8CEDA',
                        width:2
                    }
                  },
                  axisLabel:{
                    show:true,
                    textStyle:{
                        fontSize:"12px",
                        color:"#D6D7E4",
                        align:"center"
                    },formatter:function(e){
                        return e;
                    }
                  },
                  splitLine: {//终于找到了，背景图的内置表格中“边框”的颜色线条  这个是x轴的竖线
                    show: true,
                    lineStyle:{
                      color:'rgba(255,255,255,0.15)',
                      type:"solid"
                    }
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  axisLine:{
                    lineStyle:{
                        color:'#C8CEDA',
                        width:2
                    }
                  },
                  // axisLabel:{
                  //   show:true,
                  //   textStyle:{
                  //       fontSize:"12px",
                  //       color:"D6D7E4",
                  //       align:"right"
                  //   },formatter:function(e){
                  //       return e;
                  //   }
                  // },
                  splitLine: {//终于找到了，背景图的内置表格中“边框”的颜色线条  这个是x轴的竖线
                    show: true,
                    lineStyle:{
                      color:'rgba(255,255,255,0.15)',
                      type:"solid"
                    }
                  }
                  
              }
          ],