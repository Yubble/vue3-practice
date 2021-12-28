<template>
	<!-- 在这里我们使用的是 bootstrap 样式   需要在index.html 引入  <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
	 需要样式可以去 https://getbootstrap.com/docs/4.5/utilities/close-icon/ 这里查找 -->
	<div class="container" @mousedown="mouseDown">
		<h1>记事本</h1>
		<h3>共有<span class="text-primary">{{lists.length}}</span>任务,其中<span class="text-success">{{finished.length}}</span>已完成</h3>
		<h3>未完成事件</h3>
		<ul class="list-group">
			<template v-for="(item,index ) in lists" :key="index">
				<li class="list-group-item d-flex justify-content-between" v-if="!item.checked">
					<div class="form-group form-check mb-0">
						<!-- 为了区别她每个元素 不同的id  给它id进行一个数据绑定  也可以不绑定id-->
						<input type="checkbox" class="form-check-input" :id="'item-'+index" v-model="item.checked" @click="()=>(item.checked = !item.checked)">
						<label class="form-check-label" v-if="!item.isEdit" @dblclick="showEdit(item,index)">{{item.name}}</label>
						<label class="form-check-label" v-else>
							<input type="text" v-model="editValue" ref="myinput">
						</label>
					</div>
					<button type="button" class="close" aria-label="Close" @click="remove(index)">
						<span aria-hidden="true">&times;</span>
					</button>
				</li>
			</template>
		</ul>
		<h3>已完成事件</h3>
		<ul class="list-group">
			<!-- 为了key和上面有区分  我们要在key id 加一下前缀 -->
			<li v-for="(item,index) in finished" :key="'finished' +index" class="list-group-item">
				<div class="form-group form-check">
					<!--在这里 我们input 不用在选择了  给他加是disabled 如还要选择 可不加-->
					<input type="checkbox" class="form-check-input" :id="'finished'+index" v-model="item.checked" disabled>
					<label class="form-check-label">{{item.name}}</label>
				</div>
			</li>
		</ul>
		<h3>添加新的任务</h3>
		<div class="form-group">
			<!-- 在这里我们给input 添加了keydown 当我们按下回车后 会执行add方法 -->
			<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="添加新的任务" v-model="value"
			 @keydown.enter="add">
		</div>
		<button type="button" class="btn btn-primary btn-lg btn-block" @click="add">确定添加</button>
	</div>
</template>

<script>
	// 在这里我们使用了 reactive,toRefs,computed,ref
	// reactive  接收一个普通对象然后返回该普通对象的
	// ref 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value 如果传入 ref 的是一个对象，将调用 reactive 方法进行深层响应转换。
	// toRefs 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。
	// computed 就是cli2.x 的计算属性
	
	import {
		reactive,
		toRefs,
		computed,
		ref
	} from 'vue'
	export default {
		name: 'Home',
		setup() {
			// 此处是为了 判断它是否点击在此属性上面
			const myinput = ref(null)
			// 3.add添加item功能  确定item 数据结构  name ,checked, isEdit
			// 注意 我们定义好方法后 需要return 出去 
			const add = () => {
				state.lists.push({
					name: state.value,
					checked: false,
					isEdit: false,
				})
				state.value = ''
			}
			// 4.双击进行编辑 
			let editInedx = 0;
			const showEdit = (item, index) => {
				// 让它进入可编辑状态
				editInedx = index;
				item.isEdit = true;
				state.editValue = item.name
			}
			// 此函数是为了 当双击修改完毕 点击其他地方 后进行修改
			const mouseDown = (e) => {
				// e.target不等于  myinput.value 就认为它点击的是input 以外的位置
				if (myinput.value && e.target !== myinput.value) {
					state.lists[editInedx] = {
						name: state.editValue,
						checked: false,
						isEdit: false,
					}
				}
			}
			// 5.完成删除功能
			const remove = (index) => {
				state.lists.splice(index, 1)
			}
			const state = reactive({
				value: '',
				editValue: '',
				lists: [{
						'name': '1',
						'checked': false,
						'isEdit': false
					},
					{
						'name': '2',
						'checked': false,
						'isEdit': false
					},
					{
						'name': '3',
						'checked': false,
						'isEdit': false
					},
				],
				// 2.统计那些被 —>checked 放到finish 列表里面
				// 使用filter方法来过滤item.checked
				finished: computed(() =>
					state.lists.filter((item) => item.checked == true)
				),
				add,
				showEdit,
				myinput,
				mouseDown,
				remove,
			})

			return toRefs(state)
			// 也可以写成这样  这个是需要 使用 ... 操作符返回的对象，并不会丢失响应性：
			// return {...toRefs(state),add，showEdit}
		}
	}
</script>