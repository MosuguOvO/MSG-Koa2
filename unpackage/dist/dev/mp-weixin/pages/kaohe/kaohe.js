"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [30, 15, 0, 5],
        enableScroll: false,
        legend: {},
        xAxis: { disableGrid: true },
        yAxis: { data: [{ min: 0 }] },
        dataLabel: false,
        extra: {
          column: {
            type: "stack",
            width: 30,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08
          }
        }
      },
      chartData1: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['bar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts1: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: [15, 30, 0, 5],
        enableScroll: false,
        legend: {},
        xAxis: {},
        yAxis: {},
        dataLabel: false,
        extra: {
          bar: {
            type: "stack",
            width: 30,
            meterBorde: 1,
            meterFillColor: "#FFFFFF",
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            categoryGap: 1
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
    this.getServerData1();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
          categories: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          series: [
            {
              name: "物料要求",
              textColor: "#FFFFFF",
              data: [35, 36, 31, 33, 13, 34, 20]
            },
            {
              name: "首件确认",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "测气抽检",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "生产异常",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "品质异常",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "维修请求-杨春丽",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "维修请求-武娇",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "维修请求-黄黎萍",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "维修请求-张清风",
              textColor: "#FFFFFF",
              data: [18, 27, 21, 24, 6, 28, 20]
            },
            {
              name: "维修请求-李喜莲",
              data: [18, 27, 21, 24, 6, 28, 20]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    },
    getServerData1() {
      setTimeout(() => {
        let res = {
          categories: [
            "物料要求",
            "首件确认",
            "测气抽检",
            "生产异常",
            "品质异常",
            "维修请求-杨春丽",
            "维修请求-武娇",
            "维修请求-黄黎萍",
            "维修请求-张清风",
            "维修请求-李喜莲"
          ],
          series: [
            {
              name: "物料要求",
              textColor: "#FFFFFF",
              data: [660, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              name: "首件确认",
              textColor: "#FFFFFF",
              data: [0, 533, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              name: "测气抽检",
              textColor: "#FFFFFF",
              data: [0, 0, 141, 0, 0, 0, 0, 0, 0, 0]
            },
            {
              name: "生产异常",
              textColor: "#FFFFFF",
              data: [0, 0, 0, 99, 0, 0, 0, 0, 0, 0]
            },
            {
              name: "品质异常",
              textColor: "#FFFFFF",
              data: [0, 0, 0, 0, 76, 0, 0, 0, 0, 0]
            },
            {
              name: "维修请求-杨春丽",
              textColor: "#FFFFFF",
              data: [0, 0, 0, 0, 0, 51, 0, 0, 0, 0]
            },
            {
              name: "维修请求-武娇",
              textColor: "#FFFFFF",
              data: [0, 0, 0, 0, 0, 0, 50, 0, 0, 0]
            },
            {
              name: "维修请求-黄黎萍",
              textColor: "#FFFFFF",
              data: [0, 0, 0, 0, 0, 0, 0, 46, 0, 0]
            },
            {
              name: "维修请求-张清风",
              textColor: "#FFFFFF",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 24, 0]
            },
            {
              name: "维修请求-李喜莲",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 23]
            }
          ]
        };
        this.chartData1 = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  }
};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _component_qiun_data_charts = common_vendor.resolveComponent("qiun-data-charts");
  (_easycom_uni_col2 + _easycom_uni_row2 + _component_qiun_data_charts)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      span: 4
    }),
    b: common_vendor.p({
      span: 4
    }),
    c: common_vendor.p({
      span: 4
    }),
    d: common_vendor.p({
      span: 4
    }),
    e: common_vendor.p({
      span: 4
    }),
    f: common_vendor.p({
      span: 4
    }),
    g: common_vendor.p({
      type: "column",
      opts: $data.opts,
      chartData: $data.chartData
    }),
    h: common_vendor.p({
      type: "bar",
      opts: $data.opts1,
      chartData: $data.chartData1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f30b608"], ["__file", "C:/Users/Mosugu/Documents/HBuilderProjects/KB-Manage/pages/kaohe/kaohe.vue"]]);
wx.createPage(MiniProgramPage);
