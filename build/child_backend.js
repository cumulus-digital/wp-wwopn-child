!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.React},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,n.apply(this,arguments)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e),n(4);var r,o=n(2),c=n.n(o),l=n(0),a=n(1);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}if(wp&&wp.blockEditor){var s=wp.hooks.addFilter,u=wp.compose.createHigherOrderComponent,d=wp.element.Fragment,p=wp.blockEditor.InspectorControls,b=wp.components,f=b.SelectControl,m=(b.ColorPicker,b.ColorPalette),g=b.PanelBody,h=b.ToggleControl,C=["core/paragraph","core/heading","kadence/advancedheading"],v={direction:["left","right"],length:["short","medium","long"]};s("blocks.registerBlockType","wwopn/t3d/registerBlockType",(function(t,e){return C.includes(e)?(t.supports=Object.assign({},t.supports,{customClassName:!0}),t.attributes=Object.assign({},t.attributes,{t3dEnabled:{type:"boolean",default:!1},t3dDirection:{type:"string",default:v.direction[0]},t3dLength:{type:"string",default:v.length[0]},t3dCustomColor:{type:"string",default:"#000000"},t3dStroke:{type:"boolean",default:!1}}),t):t})),s("editor.BlockEdit","wwopn/t3d/blockedit",u((function(t){return function(e){if(!C.includes(e.name))return Object(l.createElement)(t,e);var n=e.setAttributes;function o(t){var r=Object.assign({},e.attributes,t);n(r)}var c=a.createElement("svg",i({viewBox:"0 0 614.4 304.9",xmlns:"http://www.w3.org/2000/svg"},void 0),r||(r=a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M453.5 80.9c-16.4-12.4-39.6-11.8-44.8-11.8h-37.4V186h39.9c4.3 0 9-.3 13.6-.9 26.9-3.4 36.5-15.5 41.8-26.6 6.8-13.9 7.1-25.7 7.1-31.5-.1-6.8-1-31.3-20.2-46.1z"}),a.createElement("path",{d:"M592.2 100.1c-3.6-5.3-8.1-11.1-13.9-16.9l.2-.1L529.3 34v.2C513.4 19 488.5 4.6 446.1 1c-9-.6-18.2-1-27.2-1H277.7v55.2c-5.4-13.9-15.7-27.6-32.8-36.8-21.7-11.6-47.6-13.6-72.3-14.7-7.7-.3-15.2-.6-22.4-.6C92.3 3.1 54 15.4 33.5 40.4 22.2 53.8 19.1 64.9 16.2 78.1L11.8 98 59 145.2l7.9 7.9-67 3 3.8 19.5c1.5 7.9 2.4 12.4 4.5 17.8 2.7 7.6 6.5 14.5 11.7 21.7 2 2.8 4.1 5.4 6.4 7.9l.1.1c1.9 2 3.8 4 5.9 5.9l41.4 41.4c19.2 21.1 48.5 31.6 93.5 33.9 8.3.3 17.7.6 26.9.6 44.7 0 77.6-6.2 100.7-18.8 3.5-1.9 6.8-4.1 9.9-6.3l20.2 20.2h155.7c24.1 0 33.6-1.9 45.4-4.9 15.4-3.9 26.8-10 31.7-12.6l.4-.2c16-9.1 25.1-18.7 29.1-23.7 23.6-27.7 27.2-63.5 27.2-82.4 0-11 0-44.2-22.2-76.1zM239.3 223.8c-26 14.2-63.4 16.7-92.5 16.7-8.7 0-17.6-.3-26.3-.6-49.2-2.5-72.7-15.2-86.6-34.6-4.3-5.9-7.4-11.4-9.6-17.6-1.5-4-2.2-7.1-3.7-15.2l69.6-3.1c3.4 10.5 15.2 17 17 17.9 13.3 6.2 35.6 6.2 37.4 6.2 0 0 25.7.6 37.4-7.4 7.7-5.3 8.7-13.3 8.7-17 0-2.2-.6-6.8-3.4-11.1-5.6-7.7-15.2-9.9-32.8-9.9h-46.4v-39.9h17.3c9.6 0 19.2 0 28.5-.6 6.5-.3 13.6-.3 19.5-2.8 4.3-1.9 12.7-5.9 12.7-17.6 0-2.2-.3-8.7-5.3-13.3C174 67.3 161 66 152.4 66c-22.9 0-37.7 4.9-44.5 12.4-1.9 2.2-2.2 2.5-4 6.8L33 81.8c2.8-12.7 5.3-20.4 13.6-30.3C69.2 24 118 20.3 150.2 20.3c7.1 0 14.5.3 21.6.6 21 .9 45.8 2.5 64.9 12.7 24.1 13 28.5 35.9 28.5 46.4 0 11.1-3.7 20.1-11.8 27.8-13.6 12.7-34 15.5-38 16.4 2.8.3 13.3 1.9 22.6 5.3 9 3.1 32.5 13.3 32.5 42.4 0 12.3-3.1 36.4-31.2 51.9zm287.5-23.5c-3.7 4.6-11.4 12.4-24.4 19.8-4.6 2.5-14.5 7.7-27.8 11.1-11.1 2.8-19.2 4.3-41.1 4.3H294.9V17.2h124c8.7 0 17.3.3 26 .9 50.7 4.3 73 25.7 86 44.5 18.6 26.6 19.2 54.4 19.2 66.2-.1 9.9-1 45.5-23.3 71.5z"}))));return c.props.style={width:"1.5em"},Object(l.createElement)(d,null,Object(l.createElement)(p,null,Object(l.createElement)(g,{title:"3D Text",icon:c,initialOpen:!1},Object(l.createElement)(h,{label:"Enable 3D Text",checked:e.attributes.t3dEnabled,onChange:function(){o({t3dEnabled:!e.attributes.t3dEnabled})}}),e.attributes.t3dEnabled&&Object(l.createElement)(d,null,Object(l.createElement)(m,{colors:wp.data.select("core/editor").getEditorSettings().colors,value:e.attributes.t3dCustomColor,onChange:function(t){return o({t3dCustomColor:t})}}),Object(l.createElement)(f,{label:"Extrude Direction",value:e.attributes.t3dDirection,onChange:function(t){o({t3dDirection:t})},options:v.direction.map((function(t){return{label:t.charAt(0).toUpperCase()+t.slice(1),value:t}}))}),Object(l.createElement)(f,{label:"Length",help:"Length correlates to type size.",value:e.attributes.t3dLength,onChange:function(t){o({t3dLength:t})},options:v.length.map((function(t){return{label:t.charAt(0).toUpperCase()+t.slice(1),value:t}}))}),Object(l.createElement)(h,{label:"Enable Stroke",checked:e.attributes.t3dStroke,onChange:function(){o({t3dStroke:!e.attributes.t3dStroke})}})))),Object(l.createElement)(t,e))}}),"injectControl")),s("editor.BlockListBlock","wwopn/t3d/blocklistblock",u((function(t){return function(e){if(!C.includes(e.name))return Object(l.createElement)(t,e);e.setAttributes;var n=e.attributes,r=n.t3dEnabled,o=n.t3dStroke,a=n.t3dDirection,i=n.t3dLength,s=n.t3dCustomColor,u={},d="";return r&&(d=["t3d-direction-".concat(a),"t3d-length-".concat(i)],o&&d.push("t3d-stroke"),d=d.join(" "),s&&(u.style={"--t3d-color":s})),Object(l.createElement)(t,c()({},e,{className:d,wrapperProps:u}))}}),"displayControl")),s("blocks.getSaveContent.extraProps","wwopn/t3d/extraprops",(function(t,e,n){if(!C.includes(e.name))return t;if(n.t3dEnabled){var r=["t3d-direction-".concat(n.t3dDirection),"t3d-length-".concat(n.t3dLength)];function o(t){var e=r;return t&&t.className&&(t.className=t.className.replace(/t3d\-[\-a-zA-Z]+/g,""),e=t.className+" "+e),Object.assign(t,{className:e})}function c(t){return t||(t={}),Object.assign(t,{"--t3d-color":n.t3dCustomColor})}n&&n.t3dStroke&&newClassses.push("t3d-stroke"),r=r.join(" "),t=o(t),n&&n.t3dCustomColor&&(t.style=c(t.style)),t&&t.children&&React.Children.map(t.children,(function(t){return t&&t.props&&(t.props=o(t.props),n&&n.t3dCustomColor&&(t.props.style=c(t.props.style))),t}))}return t}))}}]);