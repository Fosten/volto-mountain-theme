/*! For license information please see 4768.2e78ec81.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[4768],{"../../../node_modules/.pnpm/filesize@6.4.0/node_modules/filesize/lib/filesize.min.js":function(module){module.exports=function(){"use strict";var e=/^(b|B)$/,i={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},t={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]},o={floor:Math.floor,ceil:Math.ceil};function n(n){var r,a,b,l,s,c,d,f,p,u,B,h,g,y,M,m,v,x,N,j,T,E=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},w=[],P=0;if(isNaN(n))throw new TypeError("Invalid number");if(b=!0===E.bits,M=!0===E.unix,h=!0===E.pad,a=E.base||2,g=void 0!==E.round?E.round:M?1:2,d=void 0!==E.locale?E.locale:"",f=E.localeOptions||{},m=void 0!==E.separator?E.separator:"",v=void 0!==E.spacer?E.spacer:M?"":" ",N=E.symbols||{},x=2===a&&E.standard||"jedec",B=E.output||"string",s=!0===E.fullform,c=E.fullforms instanceof Array?E.fullforms:[],r=void 0!==E.exponent?E.exponent:-1,j=o[E.roundingMethod]||Math.round,p=(u=Number(n))<0,l=a>2?1e3:1024,T=!1===isNaN(E.precision)?parseInt(E.precision,10):0,p&&(u=-u),(-1===r||isNaN(r))&&(r=Math.floor(Math.log(u)/Math.log(l)))<0&&(r=0),r>8&&(T>0&&(T+=8-r),r=8),"exponent"===B)return r;if(0===u)w[0]=0,y=w[1]=M?"":i[x][b?"bits":"bytes"][r];else{P=u/(2===a?Math.pow(2,10*r):Math.pow(1e3,r)),b&&(P*=8)>=l&&r<8&&(P/=l,r++);var k=Math.pow(10,r>0?g:0);w[0]=j(P*k)/k,w[0]===l&&r<8&&void 0===E.exponent&&(w[0]=1,r++),y=w[1]=10===a&&1===r?b?"kb":"kB":i[x][b?"bits":"bytes"][r],M&&(w[1]="jedec"===x?w[1].charAt(0):r>0?w[1].replace(/B$/,""):w[1],e.test(w[1])&&(w[0]=Math.floor(w[0]),w[1]=""))}if(p&&(w[0]=-w[0]),T>0&&(w[0]=w[0].toPrecision(T)),w[1]=N[w[1]]||w[1],!0===d?w[0]=w[0].toLocaleString():d.length>0?w[0]=w[0].toLocaleString(d,f):m.length>0&&(w[0]=w[0].toString().replace(".",m)),h&&!1===Number.isInteger(w[0])&&g>0){var G=m||".",K=w[0].toString().split(G),S=K[1]||"",Y=S.length,Z=g-Y;w[0]="".concat(K[0]).concat(G).concat(S.padEnd(Y+Z,"0"))}return s&&(w[1]=c[r]?c[r]:t[x][r]+(b?"bit":"byte")+(1===w[0]?"":"s")),"array"===B?w:"object"===B?{value:w[0],symbol:w[1],exponent:r,unit:y}:w.join(v)}return n.partial=function(e){return function(i){return n(i,e)}},n}()},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOfWith.js":function(module){module.exports=function baseIndexOfWith(array,value,fromIndex,comparator){for(var index=fromIndex-1,length=array.length;++index<length;)if(comparator(array[index],value))return index;return-1}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePullAll.js":function(module,__unused_webpack_exports,__webpack_require__){var arrayMap=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js"),baseIndexOf=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js"),baseIndexOfWith=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOfWith.js"),baseUnary=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"),copyArray=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"),splice=Array.prototype.splice;module.exports=function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;for(array===values&&(values=copyArray(values)),iteratee&&(seen=arrayMap(array,baseUnary(iteratee)));++index<length;)for(var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;(fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1;)seen!==array&&splice.call(seen,fromIndex,1),splice.call(array,fromIndex,1);return array}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createRound.js":function(module,__unused_webpack_exports,__webpack_require__){var root=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js"),toInteger=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toInteger.js"),toNumber=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js"),toString=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js"),nativeIsFinite=root.isFinite,nativeMin=Math.min;module.exports=function createRound(methodName){var func=Math[methodName];return function(number,precision){if(number=toNumber(number),(precision=null==precision?0:nativeMin(toInteger(precision),292))&&nativeIsFinite(number)){var pair=(toString(number)+"e").split("e"),value=func(pair[0]+"e"+(+pair[1]+precision));return+((pair=(toString(value)+"e").split("e"))[0]+"e"+(+pair[1]-precision))}return func(number)}}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clamp.js":function(module,__unused_webpack_exports,__webpack_require__){var baseClamp=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClamp.js"),toNumber=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js");module.exports=function clamp(number,lower,upper){return void 0===upper&&(upper=lower,lower=void 0),void 0!==upper&&(upper=(upper=toNumber(upper))==upper?upper:0),void 0!==lower&&(lower=(lower=toNumber(lower))==lower?lower:0),baseClamp(toNumber(number),lower,upper)}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/indexOf.js":function(module,__unused_webpack_exports,__webpack_require__){var baseIndexOf=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js"),toInteger=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toInteger.js"),nativeMax=Math.max;module.exports=function indexOf(array,value,fromIndex){var length=null==array?0:array.length;if(!length)return-1;var index=null==fromIndex?0:toInteger(fromIndex);return index<0&&(index=nativeMax(length+index,0)),baseIndexOf(array,value,index)}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/mapValues.js":function(module,__unused_webpack_exports,__webpack_require__){var baseAssignValue=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"),baseForOwn=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseForOwn.js"),baseIteratee=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js");module.exports=function mapValues(object,iteratee){var result={};return iteratee=baseIteratee(iteratee,3),baseForOwn(object,(function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object))})),result}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pull.js":function(module,__unused_webpack_exports,__webpack_require__){var pull=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseRest.js")(__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pullAll.js"));module.exports=pull},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pullAll.js":function(module,__unused_webpack_exports,__webpack_require__){var basePullAll=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePullAll.js");module.exports=function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array}},"../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/round.js":function(module,__unused_webpack_exports,__webpack_require__){var round=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createRound.js")("round");module.exports=round},"../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Confirm/Confirm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),lodash_es_has__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/has.js"),lodash_es_has__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_es_has__WEBPACK_IMPORTED_MODULE_0__),lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/invoke.js"),lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js"),__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_elements_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),_modules_Modal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js"),Confirm=function(_Component){function Confirm(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleCancel=function(e){lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1___default()(_this.props,"onCancel",e,_this.props)},_this.handleCancelOverrides=function(predefinedProps){return{onClick:function onClick(e,buttonProps){lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1___default()(predefinedProps,"onClick",e,buttonProps),_this.handleCancel(e)}}},_this.handleConfirmOverrides=function(predefinedProps){return{onClick:function onClick(e,buttonProps){lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1___default()(predefinedProps,"onClick",e,buttonProps),lodash_es_invoke__WEBPACK_IMPORTED_MODULE_1___default()(_this.props,"onConfirm",e,_this.props)}}},_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__.c)(Confirm,_Component),Confirm.prototype.render=function render(){var _this$props=this.props,cancelButton=_this$props.cancelButton,confirmButton=_this$props.confirmButton,content=_this$props.content,header=_this$props.header,open=_this$props.open,size=_this$props.size,rest=(0,_lib__WEBPACK_IMPORTED_MODULE_5__.c)(Confirm,this.props),openProp={};return lodash_es_has__WEBPACK_IMPORTED_MODULE_0___default()(this.props,"open")&&(openProp.open=open),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_modules_Modal__WEBPACK_IMPORTED_MODULE_6__.c,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.c)({},rest,openProp,{size:size,onClose:this.handleCancel}),_modules_Modal__WEBPACK_IMPORTED_MODULE_6__.c.Header.create(header,{autoGenerateKey:!1}),_modules_Modal__WEBPACK_IMPORTED_MODULE_6__.c.Content.create(content,{autoGenerateKey:!1}),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_modules_Modal__WEBPACK_IMPORTED_MODULE_6__.c.Actions,null,_elements_Button__WEBPACK_IMPORTED_MODULE_8__.c.create(cancelButton,{autoGenerateKey:!1,overrideProps:this.handleCancelOverrides}),_elements_Button__WEBPACK_IMPORTED_MODULE_8__.c.create(confirmButton,{autoGenerateKey:!1,defaultProps:{primary:!0},overrideProps:this.handleConfirmOverrides})))},Confirm}(react__WEBPACK_IMPORTED_MODULE_3__.Component);Confirm.handledProps=["cancelButton","confirmButton","content","header","onCancel","onConfirm","open","size"],Confirm.propTypes={},Confirm.defaultProps={cancelButton:"Cancel",confirmButton:"OK",content:"Are you sure?",size:"small"},__webpack_exports__.c=Confirm},"../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js"),__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function Divider(props){var children=props.children,className=props.className,clearing=props.clearing,content=props.content,fitted=props.fitted,hidden=props.hidden,horizontal=props.horizontal,inverted=props.inverted,section=props.section,vertical=props.vertical,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)("ui",(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(clearing,"clearing"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(fitted,"fitted"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(hidden,"hidden"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(horizontal,"horizontal"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(inverted,"inverted"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(section,"section"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(vertical,"vertical"),"divider",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.c)(Divider,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_5__.c)(Divider,props);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.c)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_7__.Ar(children)?content:children)}Divider.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],Divider.propTypes={},__webpack_exports__.c=Divider},"../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Progress/Progress.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),lodash_es_round__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/without.js"),__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/round.js")),lodash_es_round__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_es_round__WEBPACK_IMPORTED_MODULE_1__),lodash_es_clamp__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clamp.js"),lodash_es_clamp__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_es_clamp__WEBPACK_IMPORTED_MODULE_2__),lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isUndefined.js"),lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3__),clsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js"),__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),_lib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),_lib__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/factories.js"),_lib__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),Progress=function(_Component){function Progress(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).calculatePercent=function(){var _this$props=_this.props,percent=_this$props.percent,total=_this$props.total,value=_this$props.value;return lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(percent)?lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(total)||lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(value)?void 0:value/total*100:percent},_this.computeValueText=function(percent){var _this$props2=_this.props,progress=_this$props2.progress,total=_this$props2.total,value=_this$props2.value;return"value"===progress?value:"ratio"===progress?value+"/"+total:percent+"%"},_this.getPercent=function(){var _this$props3=_this.props,precision=_this$props3.precision,progress=_this$props3.progress,total=_this$props3.total,value=_this$props3.value,percent=lodash_es_clamp__WEBPACK_IMPORTED_MODULE_2___default()(_this.calculatePercent(),0,100);return lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(total)||lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(value)||"value"!==progress?"value"===progress?value:lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(precision)?percent:lodash_es_round__WEBPACK_IMPORTED_MODULE_1___default()(percent,precision):value/total*100},_this.isAutoSuccess=function(){var _this$props4=_this.props,autoSuccess=_this$props4.autoSuccess,percent=_this$props4.percent,total=_this$props4.total,value=_this$props4.value;return autoSuccess&&(percent>=100||value>=total)},_this.renderLabel=function(){var _this$props5=_this.props,children=_this$props5.children,content=_this$props5.content,label=_this$props5.label;return _lib__WEBPACK_IMPORTED_MODULE_7__.Ar(children)?_lib__WEBPACK_IMPORTED_MODULE_7__.Ar(content)?(0,_lib__WEBPACK_IMPORTED_MODULE_8__.Cc)(label,{autoGenerateKey:!1,defaultProps:{className:"label"}}):react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"label"},content):react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"label"},children)},_this.renderProgress=function(percent){var _this$props6=_this.props,precision=_this$props6.precision;if(_this$props6.progress||!lodash_es_isUndefined__WEBPACK_IMPORTED_MODULE_3___default()(precision))return react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"progress"},_this.computeValueText(percent))},_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_6__.c)(Progress,_Component),Progress.prototype.render=function render(){var _this$props7=this.props,active=_this$props7.active,attached=_this$props7.attached,className=_this$props7.className,color=_this$props7.color,disabled=_this$props7.disabled,error=_this$props7.error,indicating=_this$props7.indicating,inverted=_this$props7.inverted,size=_this$props7.size,success=_this$props7.success,warning=_this$props7.warning,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_9__.default)("ui",color,size,(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(active||indicating,"active"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(disabled,"disabled"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(error,"error"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(indicating,"indicating"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(inverted,"inverted"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(success||this.isAutoSuccess(),"success"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.gj)(warning,"warning"),(0,_lib__WEBPACK_IMPORTED_MODULE_10__.oL)(attached,"attached"),"progress",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_11__.c)(Progress,this.props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_12__.c)(Progress,this.props),percent=this.getPercent()||0;return react__WEBPACK_IMPORTED_MODULE_5__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_13__.c)({},rest,{className:classes,"data-percent":Math.floor(percent)}),react__WEBPACK_IMPORTED_MODULE_5__.createElement("div",{className:"bar",style:{width:percent+"%"}},this.renderProgress(percent)),this.renderLabel())},Progress}(react__WEBPACK_IMPORTED_MODULE_5__.Component);Progress.handledProps=["active","as","attached","autoSuccess","children","className","color","content","disabled","error","indicating","inverted","label","percent","precision","progress","size","success","total","value","warning"],Progress.propTypes={},__webpack_exports__.c=Progress}}]);