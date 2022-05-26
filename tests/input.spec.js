//jest不直接支持ant-design-vue，所以要转换一下标签
jest.mock("ant-design-vue");
 
const mockComponent = {
  template: "<div><slot></slot></div>",
};
const mockInputComponent = {
  template: "<input/>",
};
const mockBtnComponent = {
  template: "<button><slot></slot></button>",
};
const globalComponents = {
  "a-button": mockBtnComponent,
  "a-dropdown-button": mockComponent,
  "router-link": mockComponent,
  "a-menu": mockComponent,
  "a-menu-item": mockComponent,
  "a-input": mockInputComponent,
  "a-page-header": mockComponent,
  "a-form-item": mockComponent,
  "a-form": mockComponent,
};
import { mount } from '@vue/test-utils'
import Component from '../src/views/index.vue'

const wrapper = mount(Component, {
  global: {
    components: globalComponents,
  },
})
let nameValue = 'hello world';
const input = wrapper.find('[data-test="testForm.name"]')
 //需要在test上加async方法  比如，test('new customer checker', async () => {
 
describe('Component', () => {
 
  test('断言输入框的值为空', () => {
    expect(input.element.value).toBe('')
  })
   test('设置hello world', async () => {
    // 因为是setValue所以要加await
    await input.setValue(nameValue) 
    expect(input.element.value).toBe(nameValue)
    
  })
  test('断言输入框的值与 hello world 相等', () => {
    expect(input.element.value).toBe('hello world')
  })
})