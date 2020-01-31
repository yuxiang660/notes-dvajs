# 路由
## url中带＃号的原因
* DVA用的是`HashRouter`
* `BrowserRouter`和`HashRouter`的区别，[参考](https://reacttraining.com/react-router/web/guides/primary-components)
* 如果不喜欢，也可以改成`BrowserRouter`，[参考](https://blog.csdn.net/weixin_43223591/article/details/87453487)
## 路由匹配原则
* 默认是首部匹配原则，path `<Route path="/">`可以匹配所有路由
* 如果想全匹配，可以写成`<Route exact path="/">`

# Redux 关键概念
## Connect方法
* 目的：绑定State到View
* 实现方式：
    - 产生一个容器组件，用一层State包了一个原始UI组件
    - `mapStateToProps`用于建立State到Props的映射关系
    - 每个容器组件，都会自动在props中拥有dispatch方法，将其绑定到原始UI组件上，即可让用户动作发出一个action
