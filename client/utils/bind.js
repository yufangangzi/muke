// if (!Function.prototype.bind) {
//   Function.prototype.bind = function () {
//     var _this = this
//     var content = [].shift.call(arguments)
//     var args = [].slice.call(arguments)
//     return function () {
//       _this.apply(content, [].concat.call(args, [].slice.call(arguments)))
//     }
//   }
// }

// function deepcopy (obj) {
//   let objClone = Array.isArray(obj) ? [] : {}
//   if (obj && typeof obj === 'object') {
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         // 先判断是不是继承的属性
//         // 判断ojb子元素是否为对象，如果是，递归复制
//         if (obj[key] && typeof obj[key] === 'object') {
//           objClone[key] = deepcopy(obj[key])
//         } else {
//           objClone[key] = obj[key]
//         }
//       }
//     }
//   }
//   return objClone
// }
