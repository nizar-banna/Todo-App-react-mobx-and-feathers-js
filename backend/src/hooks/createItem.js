// // import {observable, computed, reaction, action} from 'mobx';
// // import TodoModel from '../models/TodoModel'
// // import * as Utils from '../utils';


// export default class TodoStore {
// 	@observable todos = [];


// 	@action
// 	addTodo (title) {
// 		this.todos.push(new TodoModel(this, Utils.uuid(), title, false));
// 	}


// 	toJS() {
// 		return this.todos.map(todo => todo.toJS());
// 	}

// 	static fromJS(array) {
// 		const todoStore = new TodoStore();
// 		todoStore.todos = array.map(item => TodoModel.fromJS(todoStore, item));
// 		return todoStore;
// 	}
// }
