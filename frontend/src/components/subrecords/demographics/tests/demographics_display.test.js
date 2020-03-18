import { mount } from '@vue/test-utils'
import Display from './../Display.vue'
describe('Display', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Display, {
      propsData: {
        item: {
          first_name: 'Wilma',
          hospital_number: 'Flintstone',
          nhs_number: '12312323',
          date_of_birth: '19/12/2000',
          sex: 'Female'
        }
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
