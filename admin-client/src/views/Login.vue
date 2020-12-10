<template>
  <div class="login">
    <form class="p-4" @submit.prevent="login">
      <el-input class="mb-4" placeholder="Email" ></el-input>
      <el-input class="mb-4" placeholder="Password" ></el-input>
      <el-button class="m-4 w-full" type="primary">Login</el-button>
    </form>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.login{
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>