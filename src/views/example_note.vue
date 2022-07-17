<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-28 15:55:16
-->
<template>
  <h2>记事本</h2>
  <div class="container" @mousedown="mouseDown">
  <!-- <div class="container"> -->
    <h3>
      共有
      <span>{{ lists.length }}</span>
      任务，其中
      <span>{{ finished.length }}</span>已完成
    </h3>
    <ul>
      <template v-for="(item, index) in lists" :key="index">
        <li v-if="!item.checked">
          <div>
            <input type="checkbox" :id="'item-'+index" v-model="item.checked" @click="() => (item.checked =! item.checked)">
            <label class="form-check-label" v-if="!item.isEdit" @dblclick="showEdit(item, index)">{{ item.name }}</label>
            <label class="form-check-label" v-else>
              <input type="test" v-model="editValue" ref="myinput" />
            </label>
          </div>
          <button type="button" class="close" aria-label="Close" @click="remove(index)">
            <span>X</span>
          </button>
        </li>
      </template>
    </ul>

    <h3>已完成事件</h3>
    <ul class="list-group">
      <li v-for="(item, index) in finished" :key="'finished' +index">
        <div>
          <input type="checkbox" :id="'finished' + index" />
          <label>{{ item.name }}</label>
        </div>
      </li>
    </ul>

    <h3>添加新的任务</h3>
    <div>
      <input type="text" id="exampleFormControlInput1" placeholder="添加新的任务" v-model="value" @keydown.enter="add" />
    </div>
    <button type="button" @click="add">确定添加</button>
  </div>
</template>
<script>
  import {
    reactive,
    toRefs,
    computed,
    ref
  } from 'vue'
  export default {
    name: 'note',
    setup() {
      // 为了判断它是否点击在此属性上面
      const myinput = ref(null)
      // add添加item功能，并确定item数据结构
      const add = () => {
        state.lists.push({
          name: state.value,
          check: false,
          isEdit: false
        })
        state.value = ''
      }
      // 4.双击进行编辑
      let editIndex = 0
      const showEdit = (item, index) => {
        editIndex = index
        item.isEdit = true
        state.editValue = item.name
      }
      // 此函数为了当双击修改完毕，点击其他地方后进行修改
      const mouseDown = e => {
        // e.target不等于 myinput.value 就认为它点击的是input以外的位置
        if (myinput.value && e.target !== myinput.value) {
          state.lists[editIndex] = {
            name: state.editValue,
            checked: false,
            isEdit: false
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
        lists: [
          {
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
          }
        ],
        finished: computed(() => state.lists.filter((item) => item.checked == true)),
        add,
        showEdit,
        myinput,
        mouseDown,
        remove
      })

      return toRefs(state)
    }
  }
</script>
