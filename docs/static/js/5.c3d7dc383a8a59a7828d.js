webpackJsonp([5],{MUXd:function(t,n){},MakU:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("Dd8w"),a=e.n(o),r=e("woOf"),i=e.n(r),c=e("NYxO"),l=e("VSB1"),u={name:"wallet",components:{transfer:function(){return e.e(11).then(e.bind(null,"C5Km"))},delegatebw:function(){return e.e(18).then(e.bind(null,"UEs/"))},undelegatebw:function(){return e.e(19).then(e.bind(null,"wUBy"))},"currency-balance":function(){return e.e(14).then(e.bind(null,"I8cB"))},buyram:function(){return e.e(16).then(e.bind(null,"0sQo"))},sellram:function(){return e.e(17).then(e.bind(null,"kTNm"))},bidname:function(){return e.e(15).then(e.bind(null,"eGj4"))}},data:function(){return{currentTabCompnent:"transfer",loading:null,dialogVisible:!1,accountName:"",eosmonitorTransaction:"https://eosmonitor.io/txn",eosmonitorAccount:"https://eosmonitor.io/account"}},methods:{showDialog:function(){this.dialogVisible=!0},network:function(){var t=i()({keyProvider:this.privateKey},this.eosConfig);return this.$eosjs(t)},refund:function(){var t=this;if(""===this.accountName)return this.$message.warning("请选择退款账号！"),!1;this.openFullScreenLoading(),this.network().refund({owner:this.accountName}).then(function(n){var e=n.transaction_id;t.loading.close(),t.$notify({title:"退款成功",message:'\n            <p>接下来可以</p>\n            <a href="'+t.eosmonitorTransaction+"/"+e+'" target="_blank">前往查看浏览器操作详情<a>\n            ',duration:4e3,type:"success",dangerouslyUseHTMLString:!0})}).catch(function(n){t.loading.close(),t.$message.error(Object(l.a)(n)),t.$notify({title:"退款失败",message:'\n            <p>可能的原因</p>\n            <ol>\n              <li>退款账户不存在</li>\n              <li>取消抵押时间间隔未到三天</li>\n            </ol>\n            <br>\n            前往查看账户详情： <a href="'+t.eosmonitorAccount+"/"+t.accountName+'" target="_blank">'+t.accountName+"<a>\n            <br>\n            ",duration:4e3,type:"error",dangerouslyUseHTMLString:!0})})},openFullScreenLoading:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}},computed:a()({},Object(c.c)({privateKey:function(t){return t.key.priKeys},accountNames:function(t){return t.accountNames},eosConfig:function(t){return t.eosConfig}}))},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("el-row",[e("el-col",{attrs:{span:22,push:1}},[e("el-card",[e("el-button",{attrs:{type:"text"},on:{click:function(n){t.currentTabCompnent="transfer"}}},[t._v("转账")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.currentTabCompnent="delegatebw"}}},[t._v("抵押EOS")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.currentTabCompnent="undelegatebw"}}},[t._v("取消抵押EOS")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:t.showDialog}},[t._v("退款")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.currentTabCompnent="buyram"}}},[t._v("购买ram")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.currentTabCompnent="sellram"}}},[t._v("出售ram")]),t._v(" "),e("el-button",{attrs:{type:"text"},on:{click:function(n){t.currentTabCompnent="bidname"}}},[t._v("竞价账户")]),t._v(" "),e("el-dialog",{attrs:{title:"退款（取消抵押的EOS退回到账户余额）",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(n){t.dialogVisible=n}}},[e("h4",{staticStyle:{"margin-top":"0"}},[t._v("请选择需退回的账号名")]),t._v(" "),e("el-select",{attrs:{filterable:"",placeholder:"请选择账户"},model:{value:t.accountName,callback:function(n){t.accountName=n},expression:"accountName"}},t._l(t.accountNames,function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.refund}},[t._v("确 定")])],1)],1)],1),t._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e(t.currentTabCompnent,{tag:"component"})],1)],1)],1)],1)},staticRenderFns:[]};var d=e("VU/8")(u,s,!1,function(t){e("MUXd")},"data-v-6388f92c",null);n.default=d.exports}});
//# sourceMappingURL=5.c3d7dc383a8a59a7828d.js.map