const getters = {
  //
  UIDWithToken: (state) =>{
   return  state.UID + state.Authorization
}

};

export default getters


