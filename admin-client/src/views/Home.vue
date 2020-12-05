<template>
  <div>
    <header class="header"><h1>Welcome to Zayy</h1></header>
    <el-container class="container">
      <Navigation />
      <el-container>
        <el-main>
          <h1>hi</h1>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navigation from "@/components/common/Navigation";
export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  & h1 {
    text-align: center;
  }
}
.container{
  height:calc(100vh - 50px);
}
</style>