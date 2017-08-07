import Mock from 'mockjs'
import category from './category'

const baseUrl = 'https://test.com'

Mock.mock(baseUrl + '/categories', 'get', category.getCategories)
