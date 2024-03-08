!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=Array(e);s<e;s++)i[s]=t[s];return i}var e=new(function(){var e;function s(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,s),this.initialState=t,this.initialStateRestart=t?t.map(function(t){return t.map(function(t){return t})}):[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.state=t||[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0,this.status="idle",this.isMerged=[[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1],[!1,!1,!1,!1]]}return e=[{key:"moveLeft",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<this.state.length;e++)for(var s=1;s<this.state[e].length;s++)if(0!==this.state[e][s])for(var i=s;i>0&&(0===this.state[e][i-1]||this.state[e][i-1]===this.state[e][i]);)if(0===this.state[e][i-1])this.state[e][i-1]=this.state[e][i],this.state[e][i]=0,t=!0,i--;else if(this.state[e][i-1]!==this.state[e][i]||this.isMerged[e][i-1])break;else this.state[e][i-1]*=2,this.state[e][i]=0,this.score+=this.state[e][i-1],this.isMerged[e][i-1]=!0,t=!0;t&&(this.isMerged.forEach(function(t){return t.fill(!1)}),this.generateNewTiles())}}},{key:"moveRight",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<this.state.length;e++)for(var s=this.state[e].length-2;s>=0;s--)if(0!==this.state[e][s])for(var i=s;i<this.state[e].length-1&&(0===this.state[e][i+1]||this.state[e][i+1]===this.state[e][i]);)if(0===this.state[e][i+1])this.state[e][i+1]=this.state[e][i],this.state[e][i]=0,t=!0,i++;else if(this.state[e][i+1]!==this.state[e][i]||this.isMerged[e][i+1])break;else this.state[e][i+1]*=2,this.score+=this.state[e][i+1],this.state[e][i]=0,t=!0,this.isMerged[e][i+1]=!0;t&&(this.isMerged.forEach(function(t){return t.fill(!1)}),this.generateNewTiles())}}},{key:"moveUp",value:function(){if("playing"===this.status){for(var t=!1,e=1;e<this.state.length;e++)for(var s=0;s<this.state[e].length;s++)if(0!==this.state[e][s])for(var i=e;i>0&&(0===this.state[i-1][s]||this.state[i-1][s]===this.state[i][s]);)if(0===this.state[i-1][s])this.state[i-1][s]=this.state[i][s],this.state[i][s]=0,t=!0,i--;else if(this.state[i-1][s]!==this.state[i][s]||this.isMerged[i-1][s])break;else this.state[i-1][s]*=2,this.score+=this.state[i-1][s],this.state[i][s]=0,t=!0,this.isMerged[i-1][s]=!0;t&&(this.isMerged.forEach(function(t){return t.fill(!1)}),this.generateNewTiles())}}},{key:"moveDown",value:function(){if("playing"===this.status){for(var t=!1,e=this.state.length-2;e>=0;e--)for(var s=0;s<this.state[e].length;s++)if(0!==this.state[e][s])for(var i=e;i<this.state.length-1&&(0===this.state[i+1][s]||this.state[i+1][s]===this.state[i][s]);)if(0===this.state[i+1][s])this.state[i+1][s]=this.state[i][s],this.state[i][s]=0,t=!0,i++;else if(this.state[i+1][s]!==this.state[i][s]||this.isMerged[i+1][s])break;else this.state[i+1][s]*=2,this.score+=this.state[i+1][s],this.state[i][s]=0,t=!0,this.isMerged[i+1][s]=!0;t&&(this.isMerged.forEach(function(t){return t.fill(!1)}),this.generateNewTiles())}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.getStatus(),this.state}},{key:"getStatus",value:function(){return this.state.some(function(t){return t.includes(2048)})&&(this.status="win"),this.canMove()||(this.status="lose"),this.status}},{key:"start",value:function(){this.status="playing",this.generateNewTiles(),this.generateNewTiles()}},{key:"restart",value:function(){this.score=0,this.status="idle",this.state=this.initialStateRestart.map(function(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,s){if(e){if("string"==typeof e)return t(e,void 0);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})}},{key:"generateNewTiles",value:function(){if("win"!==this.status&&"lose"!==this.status){for(var t=[],e=0;e<this.state.length;e++)for(var s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push({row:e,col:s});if(t.length>0){var i=Math.floor(Math.random()*t.length),a=t[i],r=a.row,n=a.col;this.state[r][n]=.9>Math.random()?2:4}}}},{key:"canMove",value:function(){for(var t=0;t<this.state.length;t++)for(var e=0;e<this.state[t].length;e++)if(0===this.state[t][e]||e<this.state[t].length-1&&this.state[t][e]===this.state[t][e+1]||t<this.state.length-1&&this.state[t][e]===this.state[t+1][e])return!0;return!1}}],function(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(s.prototype,e),s}());function s(){document.querySelector(".game-score").textContent=e.getScore();for(var t=e.getState(),s=document.querySelectorAll(".field-cell"),i=0,a=0;a<t.length;a++)for(var r=0;r<t[a].length;r++)s[i].textContent=0!==t[a][r]?t[a][r]:"",s[i].className="field-cell",0!==t[a][r]&&s[i].classList.add("field-cell--".concat(t[a][r])),i++;var n=e.getStatus(),h=document.querySelector(".message-start"),o=document.querySelector(".message-win"),l=document.querySelector(".message-lose");"playing"===n?h.classList.add("hidden"):"win"===n?o.classList.remove("hidden"):"lose"===n?l.classList.remove("hidden"):(h.classList.remove("hidden"),o.classList.add("hidden"),l.classList.add("hidden"))}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".start");t.addEventListener("click",function(){t.classList.contains("start")?(e.start(),t.classList.remove("start"),t.classList.add("restart"),t.textContent="Restart"):(e.restart(),t.classList.remove("restart"),t.classList.add("start"),t.textContent="Start"),s()}),document.addEventListener("keydown",function(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.key)&&t.preventDefault(),"playing"===e.getStatus()){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown()}s(),e.getStatus()}})})}();
//# sourceMappingURL=index.03d150a6.js.map
