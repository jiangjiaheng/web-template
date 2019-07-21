import Mock from 'mockjs' // 引入mockjs

import tableData from './mockData/tableData'
import testData from './mockData/testData'

Mock.mock('/data/tableData', 'get', tableData) // tableData

Mock.mock('/data/testData', 'get', testData) // testData