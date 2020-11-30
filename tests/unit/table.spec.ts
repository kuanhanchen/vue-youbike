import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  let title: string
  let wrapper: any
  beforeEach(() => {
    title = 'YouBike Station Information'
    wrapper = shallowMount(Table, {
      propsData: { title }
    })
  })
  it('renders props.title when passed', () => {
    expect(wrapper.text()).toMatch(title)
  })
  it('should contain a table element', () => {
    expect(wrapper.find('.table').exists()).toBe(true)
  })
})
