module.exports=__NEXT_REGISTER_PAGE("/controller",function(){var e=webpackJsonp([2],{193:function(e,t,a){e.exports=a(194)},194:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a);n&&e(t,n);return t}}();var s=a(17);var l=d(s);var o=a(4);var i=d(o);var r=a(103);var c=d(r);var u=a(106);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){g(t,e);function t(){f(this,t);var e=m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));e.layoutGeneratorConfig={divisionStep:6,cellDivide:.4,cellFill:.7,cellTwoDivisions:.5,showPartial:false,useW:1,useH:1};e.gravityConfigCircles={x:0,y:0,scale:.001};e.gravityConfigText={x:0,y:0,scale:.001};e.onSendMessage=function(t,a){e.mainWindow.postMessage({type:t,data:a},"*")};e.onReceiveMessage=function(t){var a=t.data;e.debugContainerRef.textContent=JSON.stringify(a.data)};return e}n(t,[{key:"componentDidMount",value:function e(){window.addEventListener("message",this.onReceiveMessage);this.mainWindow=window.opener}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("message",this.onReceiveMessage)}},{key:"render",value:function e(){var t=this;return i.default.createElement("div",{className:"jsx-3683973985"},i.default.createElement(c.default,null,i.default.createElement("title",{className:"jsx-3683973985"},"Controller")),i.default.createElement("div",{className:"jsx-3683973985 container installation"},i.default.createElement("h3",{className:"jsx-3683973985"},"Installation"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:0,loop:false})},className:"jsx-3683973985 button"},"start"),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},"loop",i.default.createElement("input",{type:"checkbox",ref:function e(a){t.loopRef=a},className:"jsx-3683973985"})),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:1,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 1: normal"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:2,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 2: quickfire"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:3,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 3: single color quickfire"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:4,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 4: restricted quickfire"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:5,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 5: drop"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:6,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 6: drop with compass gravity"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:7,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 7"),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.startInstallation,{mode:8,loop:t.loopRef.checked})},className:"jsx-3683973985 button"},"mode 8"),i.default.createElement("br",{className:"jsx-3683973985"}),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.stopInstallation)},className:"jsx-3683973985 button"},"stop"),i.default.createElement("div",{style:{fontWeight:"bold"},className:"jsx-3683973985 buttonContainer"},"ADVANCED",i.default.createElement("input",{type:"checkbox",onChange:function e(a){a.target.checked?t.advancedContainerRef.style.height="auto":t.advancedContainerRef.style.height="0"},className:"jsx-3683973985"}))),i.default.createElement("div",{style:{height:0},ref:function e(a){t.advancedContainerRef=a},className:"jsx-3683973985 container advanced"},i.default.createElement("hr",{className:"jsx-3683973985"}),i.default.createElement("h3",{className:"jsx-3683973985"},"General"),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},"background color",i.default.createElement("input",{type:"color",defaultValue:"#eb582f",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeBGColor,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},"circles color",i.default.createElement("input",{type:"color",defaultValue:"#ffffff",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeFGColor,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},"text stroke color",i.default.createElement("input",{type:"color",defaultValue:"#000000",onChange:function e(a){t.onSendMessage(u.MessageTypes.updateTextStrokeColor,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},"text fill color",i.default.createElement("input",{type:"color",defaultValue:"#000000",onChange:function e(a){t.onSendMessage(u.MessageTypes.updateTextFillColor,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},"text fill color",i.default.createElement("input",{type:"checkbox",onChange:function e(a){t.onSendMessage(u.MessageTypes.updateTextShowFill,a.target.checked)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"logo",i.default.createElement("input",{type:"checkbox",defaultChecked:true,onChange:function e(a){t.onSendMessage(u.MessageTypes.toggleLogoVisibility,a.target.checked)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"lines",i.default.createElement("input",{type:"checkbox",defaultChecked:true,onChange:function e(a){t.onSendMessage(u.MessageTypes.toggleLinesVisibility,a.target.checked)},className:"jsx-3683973985"}))),i.default.createElement("h3",{className:"jsx-3683973985"},"Generator"),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"divisionStep",i.default.createElement("input",{type:"number",min:"0",max:"26",step:"1",defaultValue:this.layoutGeneratorConfig.divisionStep.toFixed(0),onChange:function e(a){t.layoutGeneratorConfig.divisionStep=parseFloat(a.target.value);t.onSendMessage(u.MessageTypes.updateLayoutConfig,t.layoutGeneratorConfig)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"cellDivide",i.default.createElement("input",{type:"number",min:"0.0",max:"1.0",step:"0.01",defaultValue:this.layoutGeneratorConfig.cellDivide.toFixed(2),onChange:function e(a){t.layoutGeneratorConfig.cellDivide=parseFloat(a.target.value);t.onSendMessage(u.MessageTypes.updateLayoutConfig,t.layoutGeneratorConfig)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"cellFill",i.default.createElement("input",{type:"number",min:"0.0",max:"1.0",step:"0.01",defaultValue:this.layoutGeneratorConfig.cellFill.toFixed(2),onChange:function e(a){t.layoutGeneratorConfig.cellFill=parseFloat(a.target.value);t.onSendMessage(u.MessageTypes.updateLayoutConfig,t.layoutGeneratorConfig)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"cellTwoDivisions",i.default.createElement("input",{type:"number",min:"0.0",max:"1.0",step:"0.01",defaultValue:this.layoutGeneratorConfig.cellTwoDivisions.toFixed(2),onChange:function e(a){t.layoutGeneratorConfig.cellTwoDivisions=parseFloat(a.target.value);t.onSendMessage(u.MessageTypes.updateLayoutConfig,t.layoutGeneratorConfig)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"showPartial",i.default.createElement("input",{type:"checkbox",onChange:function e(a){t.layoutGeneratorConfig.showPartial=a.target.checked;t.onSendMessage(u.MessageTypes.updateLayoutConfig,t.layoutGeneratorConfig)},className:"jsx-3683973985"}))),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"growTime",i.default.createElement("input",{type:"number",min:"0.0",step:"0.5",defaultValue:"1.0",ref:function e(a){t.growTimeRef=a},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"shrinkTime",i.default.createElement("input",{type:"number",min:"0.0",step:"0.5",defaultValue:"1.0",ref:function e(a){t.shrinkTimeRef=a},className:"jsx-3683973985"}))),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.newLayout,{seed:t.seedInputRef.value,growTime:t.growTimeRef.value})},className:"jsx-3683973985 button"},"new circles"),i.default.createElement("input",{type:"number",style:{width:"30%"},ref:function e(a){t.seedInputRef=a},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 buttonContainer"},i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.removeCircles,t.shrinkTimeRef.value)},className:"jsx-3683973985 button"},"shrink circles")),i.default.createElement("h3",{className:"jsx-3683973985"},"Circles"),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"grain density",i.default.createElement("input",{type:"range",min:"-8",max:"-0.01",defaultValue:"-0.8",step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeGrainDensity,parseFloat(a.target.value))},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"grain scale",i.default.createElement("input",{type:"range",min:"0.20",max:"1.25",defaultValue:"1.0",step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeGrainScale,parseFloat(a.target.value))},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"grain angle",i.default.createElement("input",{type:"range",min:(-Math.PI).toString(),max:Math.PI.toString(),defaultValue:(0).toString(),step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeGrainAngle,a.target.value)},className:"jsx-3683973985"}))),i.default.createElement("h3",{className:"jsx-3683973985"},"Circle Physics"),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"friction",i.default.createElement("input",{type:"range",min:"0.0",max:"1.0",defaultValue:"0.1",step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeFrictionCircles,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"restitution",i.default.createElement("input",{type:"range",min:"0.0",max:"1.0",defaultValue:"0.0",step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeRestitutionCircles,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"bottom",i.default.createElement("input",{type:"checkbox",defaultChecked:true,onChange:function e(a){t.onSendMessage(u.MessageTypes.setBottomCircles,a.target.checked)},className:"jsx-3683973985"}))),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"gravity direction",i.default.createElement("input",{type:"range",min:(-1*Math.PI).toString(),max:Math.PI.toString(),defaultValue:(0).toString(),step:"0.01",onChange:function e(a){var n=a.target.value;t.gravityConfigCircles.x=Math.sin(parseFloat(n));t.gravityConfigCircles.y=Math.cos(parseFloat(n));t.onSendMessage(u.MessageTypes.changeGravityCircles,t.gravityConfigCircles)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"gravity scale",i.default.createElement("input",{type:"range",min:"0.0",max:"0.003",defaultValue:.001.toString(),step:"0.0001",onChange:function e(a){t.gravityConfigCircles.scale=parseFloat(a.target.value);t.onSendMessage(u.MessageTypes.changeGravityCircles,t.gravityConfigCircles)},className:"jsx-3683973985"}))),i.default.createElement("div",{onClick:function e(){t.onSendMessage(u.MessageTypes.makeNonStatic)},className:"jsx-3683973985 button"},"drop circles"),i.default.createElement("h3",{className:"jsx-3683973985"},"Text"),i.default.createElement("textarea",{contentEditable:true,cols:120,rows:4,ref:function e(a){t.textInputRef=a},defaultValue:"A City\nFull of\nDesign",className:"jsx-3683973985"}),i.default.createElement("div",{onClick:function e(){t.textInputRef.value.length>0&&t.onSendMessage(u.MessageTypes.newText,t.textInputRef.value)},className:"jsx-3683973985 button"},"new text"),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"size",i.default.createElement("input",{type:"number",defaultValue:"80",onChange:function e(a){Number.isInteger(parseInt(a.target.value,10))&&t.onSendMessage(u.MessageTypes.updateTextSize,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("h3",{className:"jsx-3683973985"},"Text Physics"),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"friction",i.default.createElement("input",{type:"range",min:"0.0",max:"1.0",defaultValue:"0.1",step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeFrictionText,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"restitution",i.default.createElement("input",{type:"range",min:"0.0",max:"1.0",defaultValue:"0.0",step:"0.01",onChange:function e(a){t.onSendMessage(u.MessageTypes.changeRestitutionText,a.target.value)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"bottom",i.default.createElement("input",{type:"checkbox",defaultChecked:true,onChange:function e(a){t.onSendMessage(u.MessageTypes.setBottomText,a.target.checked)},className:"jsx-3683973985"}))),i.default.createElement("div",{className:"jsx-3683973985 labelContainer"},i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"gravity direction",i.default.createElement("input",{type:"range",min:(-1*Math.PI).toString(),max:Math.PI.toString(),defaultValue:(0).toString(),step:"0.01",onChange:function e(a){var n=a.target.value;t.gravityConfigText.x=Math.sin(parseFloat(n));t.gravityConfigText.y=Math.cos(parseFloat(n));t.onSendMessage(u.MessageTypes.changeGravityText,t.gravityConfigText)},className:"jsx-3683973985"})),i.default.createElement("div",{className:"jsx-3683973985 labelInput"},"gravity scale",i.default.createElement("input",{type:"range",min:"0.0",max:"0.003",defaultValue:.001.toString(),step:"0.0001",onChange:function e(a){t.gravityConfigText.scale=parseFloat(a.target.value);t.onSendMessage(u.MessageTypes.changeGravityText,t.gravityConfigText)},className:"jsx-3683973985"}))),i.default.createElement("div",{ref:function e(a){t.debugContainerRef=a},className:"jsx-3683973985"})),i.default.createElement(l.default,{styleId:"2406321056",css:["body{background:white;font:11px system-ui,sans-serif;}"]}),i.default.createElement(l.default,{styleId:"1932413864",css:[".container.jsx-3683973985{margin:0 auto;margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#333;overflow:hidden;}",".container.jsx-3683973985 h3.jsx-3683973985:first-child{margin-top:0;}",".buttonContainer.jsx-3683973985,.labelContainer.jsx-3683973985{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin-bottom:10px;}",".buttonContainer.jsx-3683973985 input.jsx-3683973985,.labelContainer.jsx-3683973985 input.jsx-3683973985{border:0;margin:0;padding:0;width:30px;height:23px;background:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:black 1px solid;}",".buttonContainer.jsx-3683973985 input.jsx-3683973985:last-child,.labelContainer.jsx-3683973985 input.jsx-3683973985:last-child{margin-left:10px;padding:0px 10px;box-sizing:border-box;}",".buttonContainer.jsx-3683973985 input.jsx-3683973985:last-child[type=color],.labelContainer.jsx-3683973985 input.jsx-3683973985:last-child[type=color]{padding:0;}",".buttonContainer.jsx-3683973985 .button.jsx-3683973985,.labelContainer.jsx-3683973985 .button.jsx-3683973985{-webkit-box-flex:1.0;-webkit-flex-grow:1.0;-ms-flex-positive:1.0;flex-grow:1.0;margin-bottom:0;}",".labelContainer.jsx-3683973985{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:10px;}",".labelContainer.jsx-3683973985 input.jsx-3683973985{width:100px;}",".labelInput.jsx-3683973985{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin-bottom:10px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".labelInput.jsx-3683973985 input.jsx-3683973985{position:absolute;right:10px;}",".button.jsx-3683973985{background:black;color:white;padding:5px 10px;margin-bottom:10px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;}","hr.jsx-3683973985{border:0;height:1px;width:100%;background:#333;}"]}))}}]);return t}(o.Component);t.default=p}},[193]);return{page:e.default}});