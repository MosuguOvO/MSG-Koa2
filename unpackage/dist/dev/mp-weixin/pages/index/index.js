"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_col + _easycom_uni_row)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const iconsArray = common_vendor.reactive([
      {
        tag: "实时状态",
        icon: "icon-svg-"
      },
      {
        tag: "小时产量",
        icon: "icon-shengchanliangtongji"
      },
      {
        tag: "OEE分析",
        icon: "icon-shujufenxi-liuliangfenxi"
      },
      {
        tag: "异常分析",
        icon: "icon-yuexianyichangfenxi"
      },
      {
        tag: "安灯考核",
        icon: "icon-kaohe"
      },
      {
        tag: "上班打卡",
        icon: "icon-kaoqindaqia"
      },
      {
        tag: "人效考核",
        icon: "icon-wodekaohe"
      },
      {
        tag: "班次管理",
        icon: "icon-a-Calendarshift"
      },
      {
        tag: "微信提醒",
        icon: "icon-weixin"
      },
      {
        tag: "扫互联灯",
        icon: "icon-huandengpao"
      }
    ]);
    const goOne = (item) => {
      common_vendor.index.navigateTo({ url: "/pages/kaohe/kaohe" });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(iconsArray, (item, index, i0) => {
          return {
            a: "1cf27b2a-2-" + i0 + "," + ("1cf27b2a-1-" + i0),
            b: common_vendor.p({
              ["custom-prefix"]: "iconfont",
              type: item.icon,
              size: 20,
              color: "#777"
            }),
            c: common_vendor.t(item.tag),
            d: index,
            e: common_vendor.o(($event) => goOne(), index),
            f: "1cf27b2a-1-" + i0 + ",1cf27b2a-0"
          };
        }),
        b: common_vendor.p({
          column: 5,
          highlight: false,
          showBorder: false,
          square: false
        }),
        c: common_vendor.p({
          span: 5
        }),
        d: common_vendor.p({
          span: 6
        }),
        e: common_vendor.p({
          span: 6
        }),
        f: common_vendor.p({
          span: 6
        }),
        g: common_vendor.p({
          span: 6
        }),
        h: common_vendor.p({
          span: 10
        }),
        i: common_vendor.p({
          span: 8
        }),
        j: common_vendor.p({
          span: 6
        }),
        k: common_vendor.p({
          span: 10
        }),
        l: common_vendor.p({
          span: 8
        }),
        m: common_vendor.p({
          span: 6
        }),
        n: common_vendor.p({
          span: 10
        }),
        o: common_vendor.p({
          span: 8
        }),
        p: common_vendor.p({
          span: 6
        }),
        q: common_vendor.p({
          span: 10
        }),
        r: common_vendor.p({
          span: 8
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/Mosugu/Documents/HBuilderProjects/KB-Manage/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
