export default store =>{
//
  if (localStorage.state){store.replaceState(JSON.parse(localStorage.state))}
  console.log('插件初始化了');
  store.subscribe((mutation,state) =>{
  //
    console.log('提交mutation');
    localStorage.state = JSON.stringify(state)
  })
}
