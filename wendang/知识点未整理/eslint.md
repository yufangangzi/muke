ESlint 被设计为完全可配置的，有两种主要的方式来配置 ESLint：
1.Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。
2.Configuration Files - 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。
可以配置一个独立的 .eslintrc.* 文件，或者直接在 package.json 文件里的 eslintConfig 字段指定配置，
ESLint 会查找和自动读取它们，再者，你可以在命令行运行时指定一个任意的配置文件。
有很多信息可以配置：

Environments - 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
Globals - 脚本在执行期间访问的额外的全局变量。
Rules - 启用的规则及其各自的错误级别。

请注意，对 JSX 语法的支持不用于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，我们推荐你使用 eslint-plugin-react。

同样的，支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）。
使用 { "parserOptions": { "ecmaVersion": 6 } } 来启用 ES6 语法支持；
要额外支持新的 ES6 全局变量，使用 { "env":{ "es6": true } }(这个设置会同时自动启用 ES6 语法支持)。

解析器选项可以在 .eslintrc.* 文件使用 parserOptions 属性设置。可用的选项有：
.eslintrc.json 文件示例：
{
    "parserOptions": {
        "ecmaVersion": 6, //指的是想用的ECMAscript 的版本 默认是3 和 5  可以指定 为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）
        "sourceType": "module", 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
        "ecmaFeatures": {   //指你想要的额外语言特性 globalReturn - 允许在全局作用域下使用 return 语句
                                          impliedStrict - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
                                          jsx - 启用 JSX
                                          experimentalObjectRestSpread - 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
    }
}

ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

它必须是本地安装的一个 npm 模块。
它必须有兼容 Esprima 的接口（它必须输出一个 parse() 方法）
它必须产出兼容 Esprima 的 AST 和 token 对象。
{
    "parser": "esprima",
    "rules": {
        "semi": "error"
    }
}
以下解析器与 ESLint 兼容：

Esprima
Babel-ESLint - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。
typescript-eslint-parser(实验) - 一个把 TypeScript 转换为 ESTree 兼容格式的解析器，这样它就可以在 ESLint 中使用了。这样做的目的是通过 ESLint 来解析 TypeScript 文件（尽管不一定必须通过所有的 ESLint 规则）。

一个环境定义了一组预定义的全局变量。可用的环境包括：

browser - 浏览器环境中的全局变量。
node - Node.js 全局变量和 Node.js 作用域。
commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
shared-node-browser - Node.js 和 Browser 通用全局变量。
es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
worker - Web Workers 全局变量。
amd - 将 require() 和 define() 定义为像 amd 一样的全局变量。
mocha - 添加所有的 Mocha 测试全局变量。
jasmine - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
jest - Jest 全局变量。
phantomjs - PhantomJS 全局变量。
protractor - Protractor 全局变量。
qunit - QUnit 全局变量。
jquery - jQuery 全局变量。
prototypejs - Prototype.js 全局变量。
shelljs - ShellJS 全局变量。
meteor - Meteor 全局变量。
mongo - MongoDB 全局变量。
applescript - AppleScript 全局变量。
nashorn - Java 8 Nashorn 全局变量。
serviceworker - Service Worker 全局变量。
atomtest - Atom 测试全局变量。
embertest - Ember 测试全局变量。
webextensions - WebExtensions 全局变量。
greasemonkey - GreaseMonkey 全局变量。
这些环境并不是互斥的，所以你可以同时定义多个。
要在配置文件里指定环境，使用 env 关键字指定你想启用的环境，并设置它们为 true。例如，以下示例启用了 browser 和 Node.js 的环境：
{
    "env": {
        "browser": true,
        "node": true
    }
}
或在 package.json 文件中：
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}
如果你想在一个特定的插件中使用一种环境，确保提前在 plugins 数组里指定了插件名，然后在 env 配置中不带前缀的插件名后跟一个 / ，紧随着环境名。例如：
{
    "plugins": ["example"],
    "env": {
        "example/custom": true
    }
}


Configuring Plugins
SLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。
在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
{
    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
    ]
}

Configuring Rules
ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
"off" 或 0 - 关闭规则
"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

这条注释为规则 quotes 指定了 “double”选项。数组的第一项总是规则的严重程度（数字或字符串）。
还可以使用 rules 连同错误级别和任何你想使用的选项，在配置文件中进行规则配置。例如：
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：
/* eslint-disable */

alert('foo');

/* eslint-enable */
如果在整个文件范围内禁止规则出现警告，将 /* eslint-disable */ 块注释放在文件顶部：

/* eslint-disable */

alert('foo');
你也可以对整个文件启用或禁用警告:

/* eslint-disable no-alert */

// Disables no-alert for the rest of the file
alert('foo');
在某一特定的行上禁用某个指定的规则：
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert('foo');

Adding Shared Settings
ESLint 支持在配置文件添加共享设置。你可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则。如果你想添加的自定义规则而且使它们可以访问到相同的信息，这将会很有用，并且很容易配置
{
    "settings": {
        "sharedData": "Hello"
    }
}
Using Configuration Files
有两种方式使用配置文件。

使用配置文件的第一种方式是通过 .eslintrc.* 和 package.json 文件。ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录（除非指定 root: true）。当你想对一个项目的不同部分的使用不同配置，或当你希望别人能够直接使用 ESLint，而无需记住要在配置文件中传递什么，这种方式就很有用。

第二种方式是使用 -c 选项传递命令行将文件保持到你喜欢的地方。

eslint -c myconfig.json myfiletotest.js
如果你使用一个配置文件，想要 ESLint 忽略任何 .eslintrc.* 文件，请确保使用 --no-eslintrc 的同时，加上 -c 标记。

每种情况，配置文件都会覆盖默认设置。

Configuration File Formats
ESLint 支持几种格式的配置文件：

JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。
JSON - 使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
(弃用) - 使用 .eslintrc，可以使 JSON 也可以是 YAML。
package.json - 在 package.json 里创建一个 eslintConfig属性，在那里定义你的配置。
如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

.eslintrc.js
.eslintrc.yaml
.eslintrc.yml
.eslintrc.json
.eslintrc
package.json

Configuration Cascading and Hierarchy
当使用 .eslintrc.* 和 package.json文件的配置时，你可以利用层叠配置。例如，假如你有以下结构：

your-project
├── .eslintrc
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
  层叠配置使用离要检测的文件最近的 .eslintrc文件作为最高优先级，然后才是父目录里的配置文件，等等。
  当你在这个项目中允许 ESLint 时，lib/ 下面的所有文件将使用项目根目录里的 .eslintrc 文件作为它的配置文件。
  当 ESLint 遍历到 test/ 目录，your-project/.eslintrc 之外，它还会用到 your-project/tests/.eslintrc。
  所以 your-project/tests/test.js 是基于它的目录层次结构中的两个.eslintrc 文件的组合，并且离的最近的一个优先。
  通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。
同样的，如果在根目录的 package.json 文件中有一个 eslintConfig 字段，其中的配置将使用于所有子目录，但是当 tests 目录下的
 .eslintrc 文件中的规则与之发生冲突时，就会覆盖它。

your-project
├── package.json
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用。
默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，
这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，
在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint
一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
{
    "root": true
}

完整的配置层次结构，从最高优先级最低的优先级，如下:

行内配置
/*eslint-disable*/ 和 /*eslint-enable*/
/*global*/
/*eslint*/
/*eslint-env*/
命令行选项（或 CLIEngine 等价物）：
--global
--rule
--env
-c、--config
项目级配置：
与要检测的文件在同一目录下的 .eslintrc.* 或 package.json 文件
继续在父级目录寻找 .eslintrc 或 package.json文件，直到根目录（包括根目录）或直到发现一个有"root": true的配置。
如果不是（1）到（3）中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置。

Ignoring Files and Directories
你可以通过在项目根目录创建一个 .eslintignore 文件告诉 ESLint 去忽略特定的文件和目录。.eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

**/*.js



























