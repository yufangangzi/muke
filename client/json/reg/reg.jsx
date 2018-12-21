import '../work.less'
export default {
  data () {
    return {
      author: 'hejing',
      hakz: '{',
      haky: '}'
    }
  },
  render () {
    return (
      <div class="main-box">
        <div>正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。</div>
        <h3>正则表达式的语法</h3>
        <img src='/assets/images/reg/reg-1' alt=''></img>
        <h3>二、修饰符</h3>
        <img src='/assets/images/reg/reg-2' alt=''></img>
        <h3>三、RegExp对象方法</h3>
        <div>（1）exec()</div>
        <div>语法：RegExpObject.exec(string)</div>
        <div>作用：检索字符串中指定的值，并以数组的形式返回找到的值</div>
        <div>/\s*([0-9]+)\s*/.exec(' 1 ');//返回[" 1 ","1"</div>
        <div>返回数组的第一项是\s*([0-9]+)\s*匹配到的字符串" 1 "，第二项是捕获组([0-9]+)捕获到的分组字符串"1"。</div>
        <div>（2）compile()</div>
        <div>语法：RegExpObject.compile(regexp, modifier)</div>
        <div>作用：既可用于脚本执行过程中编译正则表达式，也可用于改变和重新编译正则表达式</div>
        <div>（3）test()</div>
        <div> 语法：RegExpObject.test(string)</div>
        <div>作用：检测一个字符串是否包含匹配指定的模式的子串，如果有返回true，否则返回false</div>
        <div>/hello/g.test("hello world");//true</div>
        <div>/Hello/g.test("hello world");//false</div>
        <h3>四、String对象支持正则表达式的方法</h3>
        <div>（1）search()</div>
        <div>语法：String.search(regexp|string)</div>
        <div>作用：当参数为字符串时，与indexOf()方法一样，返回子串在字符串中的起始位置；当参数为正则表达式时，检索与正则表达式相匹配的子串，返回子串在字符串中的起始位置。如果没有找到，则返回-1。</div>
        <div>
          "hello world".search(/world/g);//6
          "hello world".search(/word/g);//-1
        </div>
        <div>（2）match()</div>
        <div>语法：String.match(regexp)</div>
        <div>作用：在字符串内检索指定的值，找到一个或多个匹配模式的子串</div>
        <div>
        'CAT bat MaT'.match(/at/gi);//返回["AT", "at", "aT"]
        </div>
        <div>（3）replace()</div>
        <div>语法：String.replace(searchValue, newValue)</div>
        <div>作用：替换字符串中与searchValue相匹配的子串或者模式为newValue</div>
        <div>PS：该方法不会改变原始字符串</div>
        <div>
          let str = "hello world";
          console.log(str.replace("world", "WORLD"));//hello WORLD
          console.log(str);//hello world
          console.log(str.replace(/hello/g, "HELLO"));//HRLLO world
          console.log(str);//hello world
        </div>
        <div>（4）split()</div>
        <div>语法：String.split(seperator, limit)</div>
        <div>作用：根据seperator将字符串分割成字符串数组</div>
        <div>参数说明：seperator为分割符，是字符串或者正则表达式，不在返回值中；limit为指定返回数组的长度</div>
        <div>

          PS：I. 若seperator为空字符串("")，则将string被分割为单个字符的数组；

              II. 此方法不改变原始字符串。
        </div>
        <div>
          let str = "abbbbbcbbbd";
          console.log(str.split(/b+/));//["a","c","d"]
          console.log(str);//abbbbbcbbbd

        </div>
        <h3>五、常用正则表达式(模式)</h3>
        <div>（1）验证是否小数的模式</div>
        <div>let pattern= /^\d+\.\d+$/;</div>

        <div>（2）验证是否中文名称的模式</div>
        <div>let pattern=/^[\u4E00-\u9FA5]'{'2 , 4'}'$/;</div>

        <div>（3）验证是否电话号码格式的模式</div>
        <div>let pattern= /^((0\d'{'2 ,3'}'-\d'{'7,8'}'')|(1[3584]\d{9}))$/;</div>

        <div>（4）验证是否邮箱地址的模式</div>
        <div>le pattern=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+$/;</div>
        https://blog.csdn.net/sinat_36521655/article/details/80090502
        <div>http://caibaojian.com/javascript-regexp-2.html</div>
      </div>
    )
  }
}
