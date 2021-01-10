<template>
  <div>
    <h1 style="margin: 0 auto">LeetCode Rank</h1>
    <small style="margin: 0 auto">优先级: 7日ac > 今日ac > 总ac > 随缘</small>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="name" label="用户" width="180"> </el-table-column>
      <el-table-column prop="num" label="今日ac" width="180"> </el-table-column>
      <el-table-column prop="total_ac_7_day" label="7日ac" width="180">
      </el-table-column>
      <el-table-column prop="total_ac" label="总ac" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Axios from "axios";

export default {
  name: "Rank",
  data() {
    return {
      list: [],
    };
  },
  created() {
    Axios.get("/rank_api/list").then((res) => {
      this.list = res.data;
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].num =
          this.list[i].easy + this.list[i].medium + this.list[i].hard;
      }
      this.list.sort((a, b) => {
        if (b.total_ac_7_day != a.total_ac_7_day)
          return b.total_ac_7_day - a.total_ac_7_day;
        if (b.num != a.num) return b.num - a.num;
        if (b.total_ac != a.total_ac) return b.total_ac - a.total_ac;
        return 1;
      });
    });
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: simsun;
  margin: 0;
  padding: 0;
}

body {
  font-size: 12px;
  text-align: center;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #3381bf;
}

a:hover {
  text-decoration: underline;
}

#movie_rank {
  height: 260px;
}

.box2 {
  border: 1px solid #addff2;
  text-align: left;
  overflow: hidden;
  color: #9c9c9c;
}

.box2 {
  margin-bottom: 7px;
}

.box2 h2 {
  background: #eef7fe;
  height: 22px;
  line-height: 21px;
  overflow-y: hidden;
  border-bottom: 1px solid #addff2;
  color: #1974c8;
  font-size: 20px;
  padding: 0 8px;
  text-align: center;
}

.box2 h2 a.more {
  float: right;
  text-decoration: underline;
  /*background: url() no-repeat 100% -123px;*/
  padding-right: 8px;
  font-weight: normal;
}

.box2 h2 span {
  margin-left: 5px;
  font-weight: normal;
  color: #b9b7b8;
}

.box2 .inner {
  padding: 8px;
  line-height: 18px;
  overflow: hidden;
  color: #3083c7;
}

.box2 a {
  color: #3083c7;
  white-space: nowrap;
}

.rank_list {
  line-height: 14px;
  margin: auto;
  padding-top: 5px;
}

.rank_list li {
  height: 22px;
  width: 290px;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 0 auto;
}

.rank_list li.top3 em {
  background: #ffe4b7;
  border: 1px solid #ffbb8b;
  color: #ff6800;
}

.rank_list em {
  position: absolute;
  left: 0;
  top: 0;
  width: 128px;
  height: 24px;
  border: 1px solid #b1e0f4;
  color: #6298cc;
  font-style: normal;
  font-size: 20px;
  font-family: Arial;
  background: #e6f0fd;
  text-align: center;
  line-height: 20px;
  overflow: hidden;
}

.rank_list span {
  position: absolute;
  width: 40px;
  color: #b7b7b7;
  text-align: right;
  height: 14px;
  background: #fff;
  left: 110px;
  font-size: 18px;
}

#movie_rank span {
  position: absolute;
  width: 40px;
  color: #b7b7b7;
  text-align: right;
  height: 14px;
  background: #fff;
  left: 260px;
}
</style>
