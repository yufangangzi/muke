将vue 的bus 重写
import Vue from 'vue'

class bus {
	constructor{
		this.bus=new Vue()
	}
	on(event,callback){
		this.bus.$on(event,callback)
	}
	emit(event,...args){
		this.bus.$emit(event,...args)
	}
}
const namespace={}
const _default='default'

function create(name){
	var name=name|| _default
	let busCase= namespace[name]
	if(!busCase){
		busCase=new bus()
		namespace[name]=busCase
	}
	return busCase
}

export {
	create,
	on(event,callback){
		const busCase=create()
		busCase.on(event,callback)
	}
	emit(event, ...args) {
	    const busCase = create()
	    busCase.emit(event, ...args)
  	},
}