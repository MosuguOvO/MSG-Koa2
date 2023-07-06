"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      span: 6
    }),
    b: common_vendor.p({
      span: 6
    }),
    c: common_vendor.p({
      span: 6
    }),
    d: common_vendor.p({
      span: 6
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c2ebfa5"], ["__file", "C:/Users/Mosugu/Documents/HBuilderProjects/KB-Manage/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
