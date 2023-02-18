<template>
  <div class="container">
    <t-row :gutter="24">
      <t-col v-for="(card, index) in cards" :key="index + 1" :span="3">
        <info-card :info="card"></info-card>
      </t-col>
    </t-row>
    <t-row>
      <t-col :span="12">
        <t-card class="chart-card">
          <div class="charts">
            <dv-charts :option="option"></dv-charts>
          </div>
        </t-card>
      </t-col>
    </t-row>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard/index.vue";

export default {
  name: "Dashboard",
  components: { InfoCard },
  data() {
    return {
      cards: [
        {
          icon: "user",
          label: "新增用户",
          color: "#40c9c6",
          number: 195,
          unit: "位",
        },
        {
          icon: "chat",
          label: "今日消息",
          color: "#36a3f7",
          number: 99,
          unit: "个",
        },
        {
          icon: "money-circle",
          label: "营业额",
          color: "#f4516c",
          number: 365454,
          unit: "元",
        },
        {
          icon: "cart",
          label: "订单数",
          color: "#34bfa3",
          number: 195,
          unit: "个",
        },
      ],
      option: {
        title: {
          text: "周销售额趋势",
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          name: "销售额",
          data: "value",
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar",
            backgroundBar: {
              show: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.t-row {
  margin-bottom: 24px;
}
.charts {
  width: 100%;
  height: 500px;
}
</style>
