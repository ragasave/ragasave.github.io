(function(t){function a(a){for(var e,o,l=a[0],r=a[1],c=a[2],d=0,u=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);p&&p(a);while(u.length)u.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],e=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(e=!1)}e&&(i.splice(a--,1),t=o(o.s=s[0]))}return t}var e={},n={app:0},i=[];function o(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(s,e,function(a){return t[a]}.bind(null,e));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var p=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("85ec"),n=s.n(e);n.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Nav",{attrs:{invoices:t.invoices}}),s("div",{staticClass:"mx-auto pb-5 px-4 print-no-mt",staticStyle:{"margin-top":"100px"}},[s("CreateBil",{attrs:{invoices:t.invoices}})],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",{staticClass:"mx-auto table-v2",attrs:{border:"1",cellspacing:"0",width:"800"}},[s("thead",[t._m(0),s("tr",[s("th",{staticClass:"px-2",attrs:{rowspan:"5",width:"50",colspan:"5",align:"left"}},[s("h5",{staticClass:"font-weight-bold m-0"},[s("RcTextBox",{attrs:{value:t.invoiceBy.title,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceBy.title=a}}})],1),s("p",{staticClass:"m-0"},[s("RcTextBox",{attrs:{value:t.invoiceBy.address_line_1,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceBy.address_line_1=a}}})],1),s("p",{staticClass:"m-0"},[s("RcTextBox",{attrs:{value:t.invoiceBy.address_line_2,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceBy.address_line_2=a}}})],1)])]),s("tr",[s("th",{staticClass:"px-2",attrs:{colspan:"3",align:"left"}},[t._v("Invoice No. :")]),s("th",{staticClass:"px-2 text-center",attrs:{width:"50",colspan:"3"}},[s("RcTextBox",{attrs:{value:t.invoiceNo},on:{update:function(a){t.invoiceNo=a}}})],1)]),s("tr",[s("th",{staticClass:"px-2",attrs:{colspan:"3",align:"left"}},[t._v("Invoice Date :")]),s("th",{staticClass:"px-2 text-center",attrs:{width:"50",colspan:"3"}},[s("RcTextBox",{attrs:{value:t.invoiceDate},on:{update:function(a){t.invoiceDate=a}}})],1)]),s("tr",[s("th",{staticClass:"px-2",attrs:{colspan:"3",align:"left"}},[t._v("Work Order no. :")]),s("th",{staticClass:"px-2",attrs:{width:"50",colspan:"3"}},[s("RcTextBox",{attrs:{"class-name":"w-100 d-block"}})],1)]),s("tr",[s("th",{staticClass:"px-2",attrs:{width:"50",colspan:"3",align:"left"}},[t._v(" Work Order Date : ")]),s("th",{staticClass:"px-2",attrs:{width:"50",colspan:"3"}},[s("RcTextBox",{attrs:{"class-name":"w-100 d-block"}})],1)]),t._m(1),s("tr",[s("th",{staticClass:"px-2",attrs:{width:"50",height:"50",colspan:"5",align:"left"}},[s("h6",{staticClass:"font-weight-bold m-0"},[s("RcTextBox",{attrs:{value:t.invoiceTo.title,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceTo.title=a}}})],1),s("p",{staticClass:"m-0"},[s("RcTextBox",{attrs:{value:t.invoiceTo.address_line_1,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceTo.address_line_1=a}}})],1),s("p",{staticClass:"m-0"},[s("RcTextBox",{attrs:{value:t.invoiceTo.address_line_2,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceTo.address_line_2=a}}})],1)]),s("th",{staticClass:"px-2",attrs:{width:"50",height:"50",colspan:"6",align:"left"}},[s("h6",{staticClass:"font-weight-bold m-0"},[s("RcTextBox",{attrs:{value:t.invoiceBy.title,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceBy.title=a}}})],1),s("p",{staticClass:"m-0"},[s("RcTextBox",{attrs:{value:t.invoiceBy.address_line_1,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceBy.address_line_1=a}}})],1),s("p",{staticClass:"m-0"},[s("RcTextBox",{attrs:{value:t.invoiceBy.address_line_2,"class-name":"w-100 d-block"},on:{update:function(a){t.invoiceBy.address_line_2=a}}})],1)])]),s("tr",[s("th",{staticClass:"px-2",attrs:{width:"25",height:"25",colspan:"5",align:"left"}},[t._v(" Contact Person: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceTo.contact_number,"class-name":"d-inline-block ","style-attr":"min-width:100px"},on:{update:function(a){t.invoiceTo.contact_number=a}}})],1)]),s("th",{staticClass:"px-2",attrs:{width:"25",height:"25",colspan:"6",align:"left"}},[t._v(" Mobile Number: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceBy.contact_number,"class-name":"d-inline-block ","style-attr":"min-width:100px"},on:{update:function(a){t.invoiceBy.contact_number=a}}})],1)])]),s("tr",[s("th",{staticClass:"px-2",attrs:{width:"50",height:"50",colspan:"5",align:"left"}},[t._v(" GSTIN/UIN: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceTo.gst_in,"class-name":"d-inline-block ","style-attr":"min-width:100px"},on:{update:function(a){t.invoiceTo.gst_in=a}}})],1)]),s("th",{staticClass:"px-2",attrs:{width:"50",height:"50",colspan:"6",align:"left"}},[t._v(" GSTIN/UIN:"),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceBy.gst_in,"class-name":"d-inline-block ","style-attr":"min-width:100px"},on:{update:function(a){t.invoiceBy.gst_in=a}}})],1)])]),s("tr",[s("th",{staticClass:"px-2",attrs:{height:"25",width:"25",colspan:"3",align:"left"}},[t._v(" State: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceTo.state,"class-name":"d-inline-block","style-attr":"min-width:100px"},on:{update:function(a){t.invoiceTo.state=a}}})],1)]),s("th",{staticClass:"px-2",attrs:{colspan:"2"}},[t._v(" Code: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceTo.code,"class-name":"d-inline-block ","style-attr":"min-width:50px"},on:{update:function(a){t.invoiceTo.code=a}}})],1)]),s("th",{staticClass:"px-2",attrs:{height:"25",width:"25",colspan:"4",align:"left"}},[t._v(" State: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceBy.state,"class-name":"d-inline-block ","style-attr":"min-width:100px"},on:{update:function(a){t.invoiceBy.state=a}}})],1)]),s("th",{staticClass:"px-2",attrs:{colspan:"2"}},[t._v(" Code: "),s("span",{staticClass:"px-2"},[s("RcTextBox",{attrs:{value:t.invoiceBy.code,"class-name":"d-inline-block ","style-attr":"min-width:50px"},on:{update:function(a){t.invoiceBy.code=a}}})],1)])]),t._m(2),t._m(3)]),t._l(t.data,(function(a,e){return s("tr",{key:e,staticClass:"table-v2-main-rows",attrs:{align:"left","data-index":e}},[s("td",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(e+1)}})]),s("td",{staticClass:"px-2"},[s("RcTextBox",{staticStyle:{width:"200px"},attrs:{className:"d-block border p-1",value:a.desc},on:{update:function(t){a.desc=t}}})],1),s("td",{staticClass:"px-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.code,expression:"item.code"}],staticClass:"border",staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:a.code},on:{input:function(s){s.target.composing||t.$set(a,"code",s.target.value)}}})]),s("td",{staticClass:"px-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.rate,expression:"item.rate"}],staticClass:"border",attrs:{type:"number"},domProps:{value:a.rate},on:{input:[function(s){s.target.composing||t.$set(a,"rate",s.target.value)},function(s){return t.updateCalc(a)}]}})]),s("td",{staticClass:"px-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"item.quantity"}],staticClass:"border",staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:a.quantity},on:{input:[function(s){s.target.composing||t.$set(a,"quantity",s.target.value)},function(s){return t.updateCalc(a)}]}})]),s("td",{staticClass:"px-2"},[s("span",{staticClass:"d-block",staticStyle:{"min-width":"80px"},domProps:{textContent:t._s(a.total)}})]),s("td",{staticClass:"px-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.cgst.rate,expression:"item.cgst.rate"}],staticClass:"border",staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:a.cgst.rate},on:{input:[function(s){s.target.composing||t.$set(a.cgst,"rate",s.target.value)},function(s){return t.updateCalc(a)}]}})]),s("td",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(a.cgst.amount)}})]),s("td",{staticClass:"px-2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:a.sgst.rate,expression:"item.sgst.rate"}],staticClass:"border",staticStyle:{width:"60px"},attrs:{type:"number"},domProps:{value:a.sgst.rate},on:{input:[function(s){s.target.composing||t.$set(a.sgst,"rate",s.target.value)},function(s){return t.updateCalc(a)}]}})]),s("td",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(a.sgst.amount)}})]),s("td",{staticClass:"px-2 position-relative"},[s("span",{staticClass:"d-block",staticStyle:{width:"100px"},domProps:{textContent:t._s(a.lineTotal)}}),s("div",{staticClass:"add-row position-absolute h-100"},[s("div",{staticClass:"d-table h-100"},[s("div",{staticClass:"d-table-cell align-middle"},[s("i",{staticClass:"btn btn-primary d-block",on:{click:function(a){return t.addRowAfter(e)}}},[s("svg",{staticClass:"feather feather-plus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),s("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])]),t.data.length>1?s("div",{staticClass:"d-table-cell align-middle"},[s("i",{staticClass:"btn btn-danger d-block",on:{click:function(a){return t.removeRow(e)}}},[s("svg",{staticClass:"feather feather-plus",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})])])]):t._e()])])])])})),t.data.length<10?s("tr",{staticClass:"placeholder",attrs:{align:"left"}},t._l(11,(function(t){return s("td",{key:t,attrs:{height:"200"}})})),0):t._e(),s("tr",{attrs:{height:"25",width:"25",align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"9"}}),s("th",{staticClass:"px-2"},[t._v("Total")]),s("th",{staticClass:"px-2"},[s("span",{staticClass:"px-2  ",domProps:{textContent:t._s(t.total)}})])]),t._m(4),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2 text-center font-weight-bold",attrs:{colspan:"6",rowspan:"4"}},[s("span",{domProps:{textContent:t._s(t.amountToWord())}}),t._v(" Only ")]),s("th",{staticClass:"px-2",attrs:{colspan:"4"}},[t._v("ADD-CGST")]),s("th",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(t.cgst)}})])]),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"4"}},[t._v("ADD-SGST")]),s("th",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(t.sgst)}})])]),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"4"}},[t._v("Total Tax Amount")]),s("th",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(t.cgst+t.sgst)}})])]),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"4"}},[t._v("Total Amount After Tax")]),s("th",{staticClass:"px-2"},[s("span",{domProps:{textContent:t._s(t.total)}})])]),t._m(5),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"3",width:"25"}},[s("RcTextBox",{attrs:{value:"Bank Name","class-name":"d-inline-block w-100","style-attr":"min-width:100px"}})],1),s("th",{staticClass:"px-2",attrs:{colspan:"5",rowspan:"2"}})]),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"3"}},[t._v("ACCOUNT NO. "),s("span",[s("RcTextBox",{attrs:{value:"","class-name":"d-inline-block ","style-attr":"min-width:100px"}})],1)])]),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"3"}},[t._v("IFSC Code: "),s("span",[s("RcTextBox",{attrs:{value:"","class-name":"d-inline-block ","style-attr":"min-width:100px"}})],1)]),s("th",{staticClass:"px-2",attrs:{colspan:"5",rowspan:"2"}},[t._v(" For "),s("span",{domProps:{textContent:t._s(t.invoiceBy.title)}})])]),s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{height:"30",width:"40",colspan:"3"}},[t._v("Declaration: "),s("span",[s("RcTextBox",{attrs:{value:"","class-name":"d-inline-block ","style-attr":"min-width:100px"}})],1)])]),t._m(6)],2)},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",{staticClass:"px-2 text-center",attrs:{colspan:"11"}},[s("h4",{staticClass:"font-weight-bold m-0"},[t._v("TAX INVOICE")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("th",{staticClass:"px-2 text-center",attrs:{colspan:"5"}},[s("h6",{staticClass:"m-0 font-weight-bold"},[t._v("Invoice to Party")])]),s("th",{staticClass:"px-2  text-center",attrs:{colspan:"6"}},[s("h6",{staticClass:"m-0 font-weight-bold"},[t._v("Invoice by Party")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("Sr no.")]),s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("Description")]),s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("HSN/SAC")]),s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("Rate")]),s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("Qty")]),s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("Total")]),s("th",{staticClass:"px-2",attrs:{colspan:"2"}},[t._v("CGST")]),s("th",{staticClass:"px-2",attrs:{colspan:"2"}},[t._v("SGST")]),s("th",{staticClass:"px-2",attrs:{rowspan:"2"}},[t._v("Line Total")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2"},[t._v("Rate")]),s("th",{staticClass:"px-2"},[t._v("Amount")]),s("th",{staticClass:"px-2"},[t._v("Rate")]),s("th",{staticClass:"px-2"},[t._v("Amount")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"6"}},[t._v("Total Invoice Amount in words")]),s("th",{staticClass:"px-2",attrs:{colspan:"4"}},[t._v("Total Amount Before tax")]),s("td",{staticClass:"px-2"},[s("span")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2 text-center",attrs:{colspan:"3"}},[s("h5",{staticClass:"font-weight-bold m-0"},[t._v("Bank Details")])]),s("th",{staticClass:"px-2 text-center align-bottom",attrs:{colspan:"3",rowspan:"6"}},[t._v(" Common seal ")]),s("th",{staticClass:"px-2",attrs:{colspan:"4"}},[t._v("GST Revers Charge")]),s("th",{staticClass:"px-2"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",{attrs:{align:"left"}},[s("th",{staticClass:"px-2",attrs:{colspan:"3"}},[t._v("Note:")]),s("th",{staticClass:"px-2 text-right align-bottom",attrs:{colspan:"5",height:"100",width:"30"}},[t._v(" Authorized Signatory ")])])}],r=(s("4160"),s("a434"),s("a9e3"),s("b680"),s("07ac"),s("159b"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{ref:"text",class:t.className,style:t.styleAttr,attrs:{spellcheck:"false",contenteditable:""},on:{blur:t.updateValue,paste:t.pasteOnlyText,input:t.updateValue}})}),c=[],p={created:function(){this.$emit("update",this.value)},mounted:function(){this.$refs.text.textContent=this.value||""},props:{value:String,className:String,styleAttr:String},watch:{value:function(t){this.$refs.text.textContent=t}},data:function(){return{classes:""}},methods:{updateValue:function(t){this.$emit("update",t.target.textContent)},pasteOnlyText:function(t){t.preventDefault();var a=(t.originalEvent||t).clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,a),this.updateValue(t)}}},d=p,u=s("2877"),h=Object(u["a"])(d,r,c,!1,null,null,null),v=h.exports,x=s("7a72");function m(){return{desc:null,code:null,rate:0,quantity:1,total:0,cgst:{rate:0,amount:0},sgst:{rate:0,amount:0},lineTotal:0}}s("999d");var f={created:function(){var t=this;this.data.push(m()),window.$("body").on("click",".print-btn",(function(){t.printPage()})),window.$("body").on("click",".download-btn",(function(){t.exportCsv()})),this.date=window.moment().format("DD-MM-YYYY h:m A"),window.setInterval((function(){t.date=window.moment().format("DD-MM-YYYY h:m A")}),60),this.invoiceDate=this.date},data:function(){return{data:[],total:0,cgst:0,sgst:0,totalWithoutTax:0,totalWithTax:0,totalTax:0,invoiceDate:null,invoiceNo:"".concat(window.moment.now()),invoiceBy:{title:"STAR REFRIGERATION SALES AND SERVICE",address_line_1:"C-05, Behind Hanuman Mandir, Azad Nagar,",address_line_2:"Chitalsar Manpada, Thane 400607",contact_number:"+91 9322742211",gst_in:"27AQZPK2988C1Z6",state:"MAHARASHTRA"},invoiceTo:{title:"Customer Name",address_line_1:"",address_line_2:"",contact_number:"",gst_in:"",state:"MAHARASHTRA"}}},methods:{amountToWord:function(){return x.convertToText(this.total)},updateCalc:function(t){var a=this;return t.total=Number((t.rate*t.quantity).toFixed(2)),t.cgst.amount=Number((t.total*t.cgst.rate/100).toFixed(2)),t.sgst.amount=Number((t.total*t.sgst.rate/100).toFixed(2)),t.lineTotal=Number((t.cgst.amount+t.cgst.amount+t.total).toFixed(2)),this.total=0,this.cgst=0,this.sgst=0,this.data.forEach((function(t){a.sgst+=t.sgst.amount,a.cgst+=t.cgst.amount,a.total+=t.lineTotal})),t},addRowAfter:function(t){this.data.splice(t+1,0,m())},removeRow:function(t){this.data.splice(t,1)},grandTotal:function(){if(1==this.formData.items.length)return this.formData.items[0].subTotal;var t=0;return this.formData.items.forEach((function(a){t=a.subTotal+t})),Number((Math.round(100*t)/100).toFixed(2))},exportCsv:function(){var t=this,a=[];a.push(["sr.no","desc","code","rate","quantity","total","cgst rate","cgst amount","sgst rate","sgst amount","line total"]),this.data.forEach((function(s,e){a.push(t.csvRow(Object.values(s),e))})),window.exportToCsv("".concat((new Date).getTime(),"-invoice.csv"),a)},csvRow:function(t,a){var s=[];for(var e in s.push(a),t){var n=t[e];if(n instanceof Object)for(var i in n){var o=n[i];s.push(o)}else s.push(n)}return console.log(s),s},printPage:function(){window.print()}},components:{RcTextBox:v}},C=f,g=Object(u["a"])(C,o,l,!1,null,null,null),w=g.exports,_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"position-fixed w-100",staticStyle:{"z-index":"999",top:"0px"}},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark primary-color"},[t._m(0),t._m(1),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"basicExampleNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("button",{staticClass:"print-btn btn btn-primary px-2 shadow-none"},[s("i",{staticClass:"fas fa-magic ml-1"},[s("svg",{staticClass:"feather feather-printer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"6 9 6 2 18 2 18 9"}}),s("path",{attrs:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}}),s("rect",{attrs:{x:"6",y:"14",width:"12",height:"8"}})])])]),s("button",{staticClass:"download-btn btn btn-primary px-2 shadow-none"},[s("i",{staticClass:"fas fa-magic ml-1"},[s("svg",{staticClass:"feather feather-download",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}}),s("polyline",{attrs:{points:"7 10 12 15 17 10"}}),s("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"3"}})])])])])])])])])},b=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Virustech SysBilling")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],y={},T=y,B=Object(u["a"])(T,_,b,!1,null,null,null),k=B.exports,R={name:"App",created:function(){var t=window.localStorage.getItem("invoices");t&&(this.invoices=t,t=void 0)},data:function(){return{invoices:[]}},components:{CreateBil:w,Nav:k}},S=R,N=(s("034f"),Object(u["a"])(S,n,i,!1,null,null,null)),A=N.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,a,s){}});
//# sourceMappingURL=app.215bb110.js.map