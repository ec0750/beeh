/*!
 * @pixi/filter-kawase-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters=function(e,t,r){"use strict";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};Object.create;Object.create;var o=function(e){function t(t,i,o){void 0===t&&(t=4),void 0===i&&(i=3),void 0===o&&(o=!1);var n=e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",o?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return n._kernels=[],n._blur=4,n._quality=3,n.uniforms.uOffset=new Float32Array(2),n._pixelSize=new r.Point,n.pixelSize=1,n._clamp=o,Array.isArray(t)?n.kernels=t:(n._blur=t,n.quality=i),n}return function(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.apply=function(e,t,r,i){var o,n=this._pixelSize.x/t._frame.width,l=this._pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*n,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,r,i);else{for(var u=e.getFilterTexture(),a=t,f=u,s=void 0,p=this._quality-1,c=0;c<p;c++)o=this._kernels[c]+.5,this.uniforms.uOffset[0]=o*n,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,a,f,1),s=a,a=f,f=s;o=this._kernels[p]+.5,this.uniforms.uOffset[0]=o*n,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,a,r,i),e.returnFilterTexture(u)}},t.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce((function(e,t){return e+t+.5}),0))},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,r=[e];if(e>0)for(var i=e,o=e/t,n=1;n<t;n++)i-=o,r.push(i);this._kernels=r,this._updatePadding()},Object.defineProperty(t.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof r.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),t}(t.Filter);return e.KawaseBlurFilter=o,Object.defineProperty(e,"__esModule",{value:!0}),e}({},PIXI,PIXI);Object.assign(PIXI.filters,__filters);

