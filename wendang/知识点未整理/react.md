1. 实际开发中用到的两个库 react.js 、react-dom.js 第一个是核心库  第二个是提供与dom 相关的功能
2. ReactDom.render() 是最基本的语法  是将模板转换为html 并添加到dom 中
   ReactDOM.render(
     <h1>Hello, world!</h1>,
     document.getElementById('example')
   );
   在转换的过程中 使用的是 React.createElement()   创建指定类型的React元素节点
   他接受三个参数 React.createElement(type,props,children)
    type 就是创建该类型的节点  props是个对象 里面是给该模板传的参数  children 是个数组 包括子元素
3. 创建组建有三种方式
    1.函数式定义的无状态组件
    2.es5原生方式React.createClass定义的组件
    3.es6形式的extends React.Component定义的组件

    无状态组建为了创建纯展示组建，只根据传入的props来展示数据 创建形式如下
    function HelloComponent(props, /* context */) {
      return <div>Hello {props.name}</div>
    }
    ReactDOM.render(<HelloComponent name="Sebastian" />, mountNode)
    他有几个显著的特点
    1 组建不会被实例化 ，不用分配内存 这样增加了性能
    2 组建不能访问this对象 他没有实例化过程 没办法访问this
    3 组建无法访问生命周期
    4 只能访问props

    React.createClass是react刚开始推荐的创建组件的方式，这是ES5的原生的JavaScript来实现的React组件，其形式如下：
    React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性。
    React.createClass的mixins不够自然、直观；React.Component形式非常适合高阶组件（Higher Order Components--HOC）,
    它以更直观的形式展示了比mixins更强大的功能，并且HOC是纯净的JavaScript，
    不用担心他们会被废弃。HOC可以参考无状态组件(Stateless Component) 与高阶组件。

    React.Component是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式
    class InputControlES6 extends React.Component {
        constructor(props) {
            super(props);

            // 设置 initial state
            this.state = {
                text: props.initialValue || 'placeholder'
            };

            // ES6 类中函数必须手动绑定 或者直接写为箭头函数的形式
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event) {
            this.setState({
                text: event.target.value
            });
        }

        render() {
            return (
                <div>
                    Type something:
                    <input onChange={this.handleChange}
                   value={this.state.text} />
                </div>
            );
        }
    }
    React.Component在创建组件时配置这两个对应信息时，他们是作为组件类的属性，不是组件实例的属性，
    也就是所谓的类的静态属性来配置的。对应上面配置如下：
    class TodoItem extends React.Component {
        static propTypes = {//类的静态属性
            name: React.PropTypes.string
        };
        static defaultProps = {//类的静态属性
            name: ''
        };
        ...
    }
    React.Component创建的组件，其状态state是在constructor中像初始化组件属性一样声明的。
    class TodoItem extends React.Component{
        constructor(props){
            super(props);
            this.state = { // define this.state in constructor
                isEditing: false
            }
        }
        render(){
            return <div></div>
        }
    }
    1、只要有可能，尽量使用无状态组件创建形式。
    2、否则（如需要state、生命周期方法等），使用`React.Component`这种es6形式创建组件

4. 组建的生命周期
   componentWillMount() 组建挂载之前
   componentDidMount()  组建挂载之后
   componentWillUpdate(object nextProps, object nextState) 组建更新之前
   componentDidUpdate(object prevProps, object prevState)  组建更新之后
   componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
   shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

5. 获取数据
   1.组件的数据来源，通常是通过 Ajax 请求从服务器获取，可以使用 componentDidMount 方法设置 Ajax 请求，
   等到请求成功，再用 this.setState 方法重新渲染 UI
   2.我们甚至可以把一个Promise对象传入组件，
       ReactDOM.render(
         <RepoList
           promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
         />,
         document.body
       );
    如果Promise对象正在抓取数据（pending状态），组件显示"正在加载"；如果Promise对象报错（rejected状态），
    组件显示报错信息；如果Promise对象抓取数据成功（fulfilled状态），组件显示获取的数据。
    var RepoList = React.createClass({
      getInitialState: function() {
        return { loading: true, error: null, data: null};
      },

      componentDidMount() {
        this.props.promise.then(
          value => this.setState({loading: false, data: value}),
          error => this.setState({loading: false, error: error}));
      },

      render: function() {
        if (this.state.loading) {
          return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
          return <span>Error: {this.state.error.message}</span>;
        }
        else {
          var repos = this.state.data.items;
          var repoList = repos.map(function (repo) {
            return (
              <li>
                <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
              </li>
            );
          });
          return (
            <main>
              <h1>Most Popular JavaScript Projects in Github</h1>
              <ol>{repoList}</ol>
            </main>
          );
        }
      }
    });
6. 组建之间传递参数
   1.（父组件）向（子组件）传递信息
     父组件向子组件传参数使用 props
     <span style="font-size:18px;">//父组件
     var MyContainer = React.createClass({
       getInitialState: function () {
         return {
           checked: false
         };
       },
       render: function() {
         return (
           <ToggleButton text="Toggle me" checked={this.state.checked} />
         );
       }
     });
     // 子组件
     var ToggleButton = React.createClass({
       render: function () {
         // 从（父组件）获取的值
         var checked = this.props.checked,
             text = this.props.text;
         return (
             <label>{text}: <input type="checkbox" checked={checked} /></label>
         );
       }
     });</span>
     那么当子组件要拿到祖父级组件的信息，也是可以通过prop进行逐层的获取。来看下下面的例子。
     <span style="font-size:18px;">var Button = React.createClass({
       render: function() {
         return (
           <button style={{background: this.props.color}}>
             {this.props.children}
           </button>
         );
       }
     });

     var Message = React.createClass({
       render: function() {
         return (
           <div>
             {this.props.text} <Button color={this.props.color}>Delete</Button>
           </div>
         );
       }
     });
     var MessageList = React.createClass({
       render: function() {
         var color = "purple";
         var children = this.props.messages.map(function(message) {
           return <Message text={message.text} color={color} />;
         });
         return <div>{children}</div>;
       }
     });</span>
     以上的例子中第一层组件（MessageList）想要将color值传递到第三层组件（Button），
     通过第二层组件（Message）进行了传递。进而实现了。但是这种方式，并不是很优雅，
     如果传递的层级更多时，中间的层级都需要来传递，数据的传递变的更加繁琐。
     所以我们就会想到，是否可以"越级"获取数据。
     这时候就需要使用context。能帮你 "越级" 传递数据到组件中你想传递到的深层次组件中。
   2.（父组件）向更深层的（子组件） 进行传递信息  >>利用（context）
    利用context，改进后的代码如下
    <span style="font-size:18px;">var Button = React.createClass({
      // 必须指定context的数据类型
      contextTypes: {
        color: React.PropTypes.string
      },
      render: function() {
        return (
          <button style={{background: this.context.color}}>
            {this.props.children}
          </button>
        );
      }
    });

    var Message = React.createClass({
      render: function() {
        return (
          <div>
            {this.props.text} <Button>Delete</Button>
          </div>
        );
      }
    });

    var MessageList = React.createClass({
      //父组件要定义 childContextTypes 和 getChildContext()
      childContextTypes: {
        color: React.PropTypes.string
      },
      getChildContext: function() {
        return {color: "purple"};
      },
      render: function() {
        var children = this.props.messages.map(function(message) {
          return <Message text={message.text} />;
        });
        return <div>{children}</div>;
      }
    });</span>
    以上代码中通过添加 childContextTypes 和 getChildContext() 到 第一层组件MessageList （ context 的提供者），
    React 自动向下传递数据然后在组件中的任意组件（也就是说任意子组件，在此示例代码中也就是 Button ）都能通过定义 contextTypes（必须指定context的数据类型）
     访问 context 中的数据。这样就不需要通过第二层组件进行传递了。
    指定数据并要将数据传递下去的父组件要定义 childContextTypes 和 getChildContext() ；
    想要接收到数据的子组件 必须定义 contextTypes 来使用传递过来的 context 。
   3.（子组件）向（父组件）传递信息
    <span style="font-size:18px;">// 父组件
    var MyContainer = React.createClass({
      getInitialState: function () {
        return {
          checked: false
        };
      },
      onChildChanged: function (newState) {
        this.setState({
          checked: newState
        });
      },
      render: function() {
        var isChecked = this.state.checked ? 'yes' : 'no';
        return (
          <div>
            <div>Are you checked: {isChecked}</div>
            <ToggleButton text="Toggle me"
              initialChecked={this.state.checked}
              callbackParent={this.onChildChanged}
              />
          </div>
        );
      }
    });

    // 子组件
    var ToggleButton = React.createClass({
      getInitialState: function () {
        return {
          checked: this.props.initialChecked
        };
      },
      onTextChange: function () {
        var newState = !this.state.checked;
        this.setState({
          checked: newState
        });
        //这里将子组件的信息传递给了父组件
        this.props.callbackParent(newState);
      },
      render: function () {
        // 从（父组件）获取的值
        var text = this.props.text;
        // 组件自身的状态数据
        var checked = this.state.checked;
            //onchange 事件用于单选框与复选框改变后触发的事件。
        return (
            <label>{text}: <input type="checkbox" checked={checked} onChange={this.onTextChange} /></label>
        );
      }
    });</span>
    以上例子中，在父组件绑定callbackParent={this.onChildChanged}，在子组件利用this.props.callbackParent(newState),触发了父级的的this.onChildChanged方法，进而将子组件的数据（newState）传递到了父组件。
    这样做其实是依赖 props 来传递事件的引用，并通过回调的方式来实现的。
   4.没有任何嵌套关系的组件之间传值（比如：兄弟组件之间传值）
    可以使用全局的事件  通过订阅模式来传值
   5.利用react-redux进行组件之间的状态信息共享

7. redux 和 react-redux 的使用
    一 从组件角度看，如果你的应用有以下场景，可以考虑使用 Redux。
       某个组件的状态，需要共享
       某个状态需要在任何地方都可以拿到
       一个组件需要改变全局状态
       一个组件需要改变另一个组件的状态
    二 Redux 的设计思路是 两句话描述
      1 web 应用是一个状态机 视图和状态是一一对应的
      2 所有状态都保存在一个对象里
    三 基本概念和API
      Store 是一个容器 是用来存储数据的 整个应用只能有一个Store
          Redux提供 createStore 这个函数用来生成 Store
          import { createStore } from 'redux';
          const store = createStore(fn);
       Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。
       当前时刻的 State，可以通过store.getState()拿到。
           import { createStore } from 'redux';
           const store = createStore(fn);
           const state = store.getState();
       Action State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置
       Action Creator
           View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
           const ADD_TODO = '添加 TODO';
           function addTodo(text) {
             return {
               type: ADD_TODO,
               text
             }
           }
           const action = addTodo('Learn Redux');
       store.dispatch()是 View 发出 Action 的唯一方法。
           import { createStore } from 'redux';
           const store = createStore(fn);
           store.dispatch({
             type: 'ADD_TODO',
             payload: 'Learn Redux'
           });
        Reducer
            Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
            Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
            const reducer = function (state, action) {
              // ...
              return new_state;
            };
            实际应用中，Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
            import { createStore } from 'redux';
            const store = createStore(reducer);
            上面代码中，createStore接受 Reducer 作为参数，生成一个新的 Store。以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
         纯函数 只要有同样的输入必定得到同样的输出
            不能调用 Date.now() 和 Math.random() 等不纯的函数
         store.subscribe()
            Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
            import { createStore } from 'redux';
            const store = createStore(reducer);
            store.subscribe(listener);
          store.subscribe方法返回一个函数，调用这个函数就可以解除监听。
          let unsubscribe = store.subscribe(() =>
            console.log(store.getState())
          );
          unsubscribe();
          Redux 涉及的基本概念，可以发现 Store 提供了三个方法
          store.getState()
          store.dispatch()
          store.subscribe()
          import { createStore } from 'redux';
          let { subscribe, dispatch, getState } = createStore(reducer);
          createStore方法还可以接受第二个参数，表示 State 的最初状态。这通常是服务器给出的。
     Reducer 的拆分
        Reducer 函数负责生成 State。由于整个应用只有一个 State 对象，包含所有数据，对于大型应用来说，这个 State 必然十分庞大，导致 Reducer 函数也十分庞大
          const chatReducer = (state = defaultState, action = {}) => {
            const { type, payload } = action;
            switch (type) {
              case ADD_CHAT:
                return Object.assign({}, state, {
                  chatLog: state.chatLog.concat(payload)
                });
              case CHANGE_STATUS:
                return Object.assign({}, state, {
                  statusMessage: payload
                });
              case CHANGE_USERNAME:
                return Object.assign({}, state, {
                  userName: payload
                });
              default: return state;
            }
          };
        Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
        import { combineReducers } from 'redux';
        const chatReducer = combineReducers({
          chatLog,
          statusMessage,
          userName
        })
        export default chatReducer;
        这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名。

      中间件 middleware 还有个问题是异步操作怎么办，在action 中现在是同步操作，所以异步操作需要用到中间件
            Reducer：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。
            View：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。
            Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。
        想来想去，只有发送 Action 的这个步骤，即store.dispatch()方法，可以添加功能。
        举例来说，要添加日志功能，把 Action 和 State 打印出来，可以对store.dispatch进行如下改造。
        let next = store.dispatch;
        store.dispatch = function dispatchAndLog(action) {
          console.log('dispatching', action);
          next(action);
          console.log('next state', store.getState());
        }
        中间件就是一个函数，对store.dispatch方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
        中间件的用法
        import { applyMiddleware, createStore } from 'redux';
        import createLogger from 'redux-logger';
        const logger = createLogger();
        const store = createStore(
          reducer,
          initial_state,
          applyMiddleware(logger)
        );
        上面代码中，redux-logger提供一个生成器createLogger，可以生成日志中间件logger。然后，
        将它放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。
        需要注意的是
          （1）createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware就是第三个参数了。
          （2）中间件的次序有讲究。
      applyMiddlewares()
      applyMiddlewares是 Redux 的原生方法，作用是将所有中间件组成一个数组，依次执行。下面是它的源码。
      export default function applyMiddleware(...middlewares) {
        return (createStore) => (reducer, preloadedState, enhancer) => {
          var store = createStore(reducer, preloadedState, enhancer);
          var dispatch = store.dispatch;
          var chain = [];
          var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
          };
          chain = middlewares.map(middleware => middleware(middlewareAPI));
          dispatch = compose(...chain)(store.dispatch);

          return {...store, dispatch}
        }
      }
8.React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）。
    UI 组件有以下几个特征。
        只负责 UI 的呈现，不带有任何业务逻辑
        没有状态（即不使用this.state这个变量）
        所有数据都由参数（this.props）提供
        不使用任何 Redux 的 API
    容器组件的特征恰恰相反。
        负责管理数据和业务逻辑，不负责 UI 的呈现
        带有内部状态
        使用 Redux 的 API
    React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
        import { connect } from 'react-redux'
        const VisibleTodoList = connect(
          mapStateToProps,
          mapDispatchToProps
        )(TodoList)
    mapStateToProps()是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
    作为函数，mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射
        function mapStateToProps(state) {
          return {
            value: state.count
          }
        }
        mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
        mapStateToProps的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象。
        const mapStateToProps = (state, ownProps) => {
          return {
            active: ownProps.filter === state.visibilityFilter
          }
        }
        使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。

    mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
    如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
        const mapDispatchToProps = (
          dispatch,
          ownProps
        ) => {
          return {
            onClick: () => {
              dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
              });
            }
          };
        }
    如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。举例来说，上面的mapDispatchToProps写成对象就是下面这样。
        const mapDispatchToProps = {
          onClick: (filter) => {
            type: 'SET_VISIBILITY_FILTER',
            filter: filter
          };
        }
    React-Redux 提供Provider组件，可以让容器组件拿到state。
        import { Provider } from 'react-redux'
        import { createStore } from 'redux'
        import todoApp from './reducers'
        import App from './components/App'
        let store = createStore(todoApp);
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('root')
        )
    Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了。
    它的原理是React组件的context属性，






