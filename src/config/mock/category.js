import Mock from 'mockjs'
const Random = Mock.Random

const categories = [
  {
    id: 1,
    name: '阳台',
    logo: Random.image('200x200', '#50B347', '#FFF', Mock.mock('@cword()'))
  }, {
    id: 2,
    name: '浴室',
    logo: Random.image('200x200', '#50B347', '#FFF', Mock.mock('@cword()'))
  }, {
    id: 3,
    name: '门窗',
    logo: Random.image('200x200', '#50B347', '#FFF', Mock.mock('@cword()'))
  }, {
    id: 4,
    name: '橱柜',
    logo: Random.image('200x200', '#50B347', '#FFF', Mock.mock('@cword()'))
  }, {
    id: 5,
    name: '花园',
    logo: Random.image('200x200', '#50B347', '#FFF', Mock.mock('@cword()'))
  }, {
    id: 6,
    name: '厨房',
    logo: Random.image('200x200', '#50B347', '#FFF', Mock.mock('@cword()'))
  }
]

function getCategories(config) {
  return {code: 200, categories: categories}
}

export default {
  getCategories
}
