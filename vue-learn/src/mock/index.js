import Mock from 'mockjs'; 
import dat from './dat';

Mock.mock('/getList','get',(req, res) => {
  return {
    success: true,
    data: dat,
    msg: '成功'
  }
});

