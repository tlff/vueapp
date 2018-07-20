<template>
    <el-container >
        <el-aside width='200px' style="background-color: rgb(238, 241, 246)">
            <nav1></nav1>
        </el-aside>
        <el-container>
            <el-header style="text-align: right; font-size: 12px">
            </el-header>
        
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import nav1 from "./nav.vue";
export default {
  name: "hello",
  data: () => {
    return {
      msg: "adfasf"
    };
  },
  components:{
      nav1
  }
};
</script>

