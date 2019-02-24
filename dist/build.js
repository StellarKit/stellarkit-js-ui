!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue"),require("stellar-sdk"),require("axios")):"function"==typeof define&&define.amd?define(["vue","stellar-sdk","axios"],e):"object"==typeof exports?exports["stellar-js-utils"]=e(require("vue"),require("stellar-sdk"),require("axios")):t["stellar-js-utils"]=e(t.vue,t["stellar-sdk"],t.axios)}(window,function(__WEBPACK_EXTERNAL_MODULE__0__,__WEBPACK_EXTERNAL_MODULE__87__,__WEBPACK_EXTERNAL_MODULE__88__){return function(t){var e={}
function n(r){if(e[r])return e[r].exports
var i=e[r]={i:r,l:!1,exports:{}}
return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=211)}([function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__0__},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){var r=n(5),i=r.Buffer
function o(t,e){for(var n in t)e[n]=t[n]}function a(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=a),o(i,a),a.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number")
return i(t,e,n)},a.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number")
var r=i(t)
return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return i(t)},a.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return r.SlowBuffer(t)}},function(t,e,n){(function(e,r){var i,o
t.exports=(i=n(87),o=n(88),function(t){var e={}
function n(r){if(e[r])return e[r].exports
var i=e[r]={i:r,l:!1,exports:{}}
return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t
if(4&e&&"object"==typeof t&&t&&t.__esModule)return t
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i))
return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t}
return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e,n){var r=n(19),i=r.Buffer
function o(t,e){for(var n in t)e[n]=t[n]}function a(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=a),o(i,a),a.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number")
return i(t,e,n)},a.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number")
var r=i(t)
return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return i(t)},a.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number")
return r.SlowBuffer(t)}},function(t,e,n){try{var r=n(17)
if("function"!=typeof r.inherits)throw""
t.exports=r.inherits}catch(e){t.exports=n(18)}},function(t,e,n){var r=n(0).Buffer
function i(t,e){this._block=r.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=r.from(t,e))
for(var n=this._block,i=this._blockSize,o=t.length,a=this._len,s=0;s<o;){for(var c=a%i,f=Math.min(o-s,i-c),u=0;u<f;u++)n[c+u]=t[s+u]
s+=f,(a+=f)%i==0&&this._update(n)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize
this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var n=8*this._len
if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4)
else{var r=(4294967295&n)>>>0,i=(n-r)/4294967296
this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block)
var o=this._hash()
return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},function(t,e){t.exports=i},function(t,e){t.exports=n(24)},function(t,e,n){var r=n(1),i=n(2),o=n(0).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64)
function c(){this.init(),this._w=s,i.call(this,64,56)}function f(t,e,n){return n^t&(e^n)}function u(t,e,n){return t&e|n&(t|e)}function h(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function d(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}r(c,i),c.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,c=0|this._e,p=0|this._f,b=0|this._g,v=0|this._h,g=0;g<16;++g)n[g]=t.readInt32BE(4*g)
for(;g<64;++g)n[g]=0|(((e=n[g-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+n[g-7]+d(n[g-15])+n[g-16]
for(var m=0;m<64;++m){var y=v+l(c)+f(c,p,b)+a[m]+n[m]|0,_=h(r)+u(r,i,o)|0
v=b,b=p,p=c,c=s+y|0,s=o,o=i,i=r,r=y+_|0}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=v+this._h|0},c.prototype._hash=function(){var t=o.allocUnsafe(32)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=c},function(t,e,n){var r=n(1),i=n(2),o=n(0).Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160)
function c(){this.init(),this._w=s,i.call(this,128,112)}function f(t,e,n){return n^t&(e^n)}function u(t,e,n){return t&e|n&(t|e)}function h(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function l(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function b(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function v(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function g(t,e){return t>>>0<e>>>0?1:0}r(c,i),c.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},c.prototype._update=function(t){for(var e=this._w,n=0|this._ah,r=0|this._bh,i=0|this._ch,o=0|this._dh,s=0|this._eh,c=0|this._fh,m=0|this._gh,y=0|this._hh,_=0|this._al,w=0|this._bl,x=0|this._cl,S=0|this._dl,k=0|this._el,E=0|this._fl,A=0|this._gl,M=0|this._hl,C=0;C<32;C+=2)e[C]=t.readInt32BE(4*C),e[C+1]=t.readInt32BE(4*C+4)
for(;C<160;C+=2){var I=e[C-30],B=e[C-30+1],T=d(I,B),O=p(B,I),P=b(I=e[C-4],B=e[C-4+1]),R=v(B,I),D=e[C-14],N=e[C-14+1],L=e[C-32],j=e[C-32+1],U=O+N|0,z=T+D+g(U,O)|0
z=(z=z+P+g(U=U+R|0,R)|0)+L+g(U=U+j|0,j)|0,e[C]=z,e[C+1]=U}for(var q=0;q<160;q+=2){z=e[q],U=e[q+1]
var F=u(n,r,i),K=u(_,w,x),$=h(n,_),H=h(_,n),W=l(s,k),V=l(k,s),Y=a[q],X=a[q+1],G=f(s,c,m),J=f(k,E,A),Z=M+V|0,Q=y+W+g(Z,M)|0
Q=(Q=(Q=Q+G+g(Z=Z+J|0,J)|0)+Y+g(Z=Z+X|0,X)|0)+z+g(Z=Z+U|0,U)|0
var tt=H+K|0,et=$+F+g(tt,H)|0
y=m,M=A,m=c,A=E,c=s,E=k,s=o+Q+g(k=S+Z|0,S)|0,o=i,S=x,i=r,x=w,r=n,w=_,n=Q+et+g(_=Z+tt|0,Z)|0}this._al=this._al+_|0,this._bl=this._bl+w|0,this._cl=this._cl+x|0,this._dl=this._dl+S|0,this._el=this._el+k|0,this._fl=this._fl+E|0,this._gl=this._gl+A|0,this._hl=this._hl+M|0,this._ah=this._ah+n+g(this._al,_)|0,this._bh=this._bh+r+g(this._bl,w)|0,this._ch=this._ch+i+g(this._cl,x)|0,this._dh=this._dh+o+g(this._dl,S)|0,this._eh=this._eh+s+g(this._el,k)|0,this._fh=this._fh+c+g(this._fl,E)|0,this._gh=this._gh+m+g(this._gl,A)|0,this._hh=this._hh+y+g(this._hl,M)|0},c.prototype._hash=function(){var t=o.allocUnsafe(64)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=c},function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.StatusCodes=e.DBNotReset=e.DBWrongPassword=e.NoDBPathGiven=e.GenuineCheckFailed=e.PairingFailed=e.SyncError=e.FeeRequired=e.FeeNotLoaded=e.CantScanQRCode=e.ETHAddressNonEIP=e.WrongDeviceForAccount=e.WebsocketConnectionFailed=e.WebsocketConnectionError=e.UserRefusedOnDevice=e.UserRefusedFirmwareUpdate=e.UserRefusedAddress=e.UpdateYourApp=e.UnexpectedBootloader=e.TimeoutTagged=e.PasswordIncorrectError=e.PasswordsDontMatchError=e.NotEnoughBalanceBecauseDestinationNotCreated=e.NotEnoughBalance=e.NoAddressesFound=e.NetworkDown=e.ManagerUninstallBTCDep=e.ManagerNotEnoughSpaceError=e.ManagerDeviceLockedError=e.ManagerAppRelyOnBTCError=e.ManagerAppAlreadyInstalledError=e.LedgerAPINotAvailable=e.LedgerAPIErrorWithMessage=e.LedgerAPIError=e.UnknownMCU=e.LatestMCUInstalledError=e.InvalidAddressBecauseDestinationIsAlsoSource=e.InvalidAddress=e.HardResetFail=e.FeeEstimationFailed=e.EnpointConfigError=e.DisconnectedDeviceDuringOperation=e.DisconnectedDevice=e.DeviceSocketNoBulkStatus=e.DeviceSocketFail=e.DeviceOnDashboardExpected=e.DeviceNotGenuineError=e.DeviceGenuineSocketEarlyClose=e.DeviceAppVerifyNotSupported=e.CantOpenDevice=e.BtcUnmatchedApp=e.BluetoothRequired=e.AccountNameRequiredError=void 0,e.TransportError=i,e.getAltStatusMessage=a,e.TransportStatusError=s
var r=n(28)
function i(t,e){this.name="TransportError",this.message=t,this.stack=(new Error).stack,this.id=e}e.AccountNameRequiredError=(0,r.createCustomErrorClass)("AccountNameRequired"),e.BluetoothRequired=(0,r.createCustomErrorClass)("BluetoothRequired"),e.BtcUnmatchedApp=(0,r.createCustomErrorClass)("BtcUnmatchedApp"),e.CantOpenDevice=(0,r.createCustomErrorClass)("CantOpenDevice"),e.DeviceAppVerifyNotSupported=(0,r.createCustomErrorClass)("DeviceAppVerifyNotSupported"),e.DeviceGenuineSocketEarlyClose=(0,r.createCustomErrorClass)("DeviceGenuineSocketEarlyClose"),e.DeviceNotGenuineError=(0,r.createCustomErrorClass)("DeviceNotGenuine"),e.DeviceOnDashboardExpected=(0,r.createCustomErrorClass)("DeviceOnDashboardExpected"),e.DeviceSocketFail=(0,r.createCustomErrorClass)("DeviceSocketFail"),e.DeviceSocketNoBulkStatus=(0,r.createCustomErrorClass)("DeviceSocketNoBulkStatus"),e.DisconnectedDevice=(0,r.createCustomErrorClass)("DisconnectedDevice"),e.DisconnectedDeviceDuringOperation=(0,r.createCustomErrorClass)("DisconnectedDeviceDuringOperation"),e.EnpointConfigError=(0,r.createCustomErrorClass)("EnpointConfig"),e.FeeEstimationFailed=(0,r.createCustomErrorClass)("FeeEstimationFailed"),e.HardResetFail=(0,r.createCustomErrorClass)("HardResetFail"),e.InvalidAddress=(0,r.createCustomErrorClass)("InvalidAddress"),e.InvalidAddressBecauseDestinationIsAlsoSource=(0,r.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource"),e.LatestMCUInstalledError=(0,r.createCustomErrorClass)("LatestMCUInstalledError"),e.UnknownMCU=(0,r.createCustomErrorClass)("UnknownMCU"),e.LedgerAPIError=(0,r.createCustomErrorClass)("LedgerAPIError"),e.LedgerAPIErrorWithMessage=(0,r.createCustomErrorClass)("LedgerAPIErrorWithMessage"),e.LedgerAPINotAvailable=(0,r.createCustomErrorClass)("LedgerAPINotAvailable"),e.ManagerAppAlreadyInstalledError=(0,r.createCustomErrorClass)("ManagerAppAlreadyInstalled"),e.ManagerAppRelyOnBTCError=(0,r.createCustomErrorClass)("ManagerAppRelyOnBTC"),e.ManagerDeviceLockedError=(0,r.createCustomErrorClass)("ManagerDeviceLocked"),e.ManagerNotEnoughSpaceError=(0,r.createCustomErrorClass)("ManagerNotEnoughSpace"),e.ManagerUninstallBTCDep=(0,r.createCustomErrorClass)("ManagerUninstallBTCDep"),e.NetworkDown=(0,r.createCustomErrorClass)("NetworkDown"),e.NoAddressesFound=(0,r.createCustomErrorClass)("NoAddressesFound"),e.NotEnoughBalance=(0,r.createCustomErrorClass)("NotEnoughBalance"),e.NotEnoughBalanceBecauseDestinationNotCreated=(0,r.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated"),e.PasswordsDontMatchError=(0,r.createCustomErrorClass)("PasswordsDontMatch"),e.PasswordIncorrectError=(0,r.createCustomErrorClass)("PasswordIncorrect"),e.TimeoutTagged=(0,r.createCustomErrorClass)("TimeoutTagged"),e.UnexpectedBootloader=(0,r.createCustomErrorClass)("UnexpectedBootloader"),e.UpdateYourApp=(0,r.createCustomErrorClass)("UpdateYourApp"),e.UserRefusedAddress=(0,r.createCustomErrorClass)("UserRefusedAddress"),e.UserRefusedFirmwareUpdate=(0,r.createCustomErrorClass)("UserRefusedFirmwareUpdate"),e.UserRefusedOnDevice=(0,r.createCustomErrorClass)("UserRefusedOnDevice"),e.WebsocketConnectionError=(0,r.createCustomErrorClass)("WebsocketConnectionError"),e.WebsocketConnectionFailed=(0,r.createCustomErrorClass)("WebsocketConnectionFailed"),e.WrongDeviceForAccount=(0,r.createCustomErrorClass)("WrongDeviceForAccount"),e.ETHAddressNonEIP=(0,r.createCustomErrorClass)("ETHAddressNonEIP"),e.CantScanQRCode=(0,r.createCustomErrorClass)("CantScanQRCode"),e.FeeNotLoaded=(0,r.createCustomErrorClass)("FeeNotLoaded"),e.FeeRequired=(0,r.createCustomErrorClass)("FeeRequired"),e.SyncError=(0,r.createCustomErrorClass)("SyncError"),e.PairingFailed=(0,r.createCustomErrorClass)("PairingFailed"),e.GenuineCheckFailed=(0,r.createCustomErrorClass)("GenuineCheckFailed"),e.NoDBPathGiven=(0,r.createCustomErrorClass)("NoDBPathGiven"),e.DBWrongPassword=(0,r.createCustomErrorClass)("DBWrongPassword"),e.DBNotReset=(0,r.createCustomErrorClass)("DBNotReset"),i.prototype=new Error
var o=e.StatusCodes={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586}
function a(t){switch(t){case 26368:return"Incorrect length"
case 27010:return"Security not satisfied (dongle locked or have invalid access rights)"
case 27013:return"Condition of use not satisfied (denied by the user?)"
case 27264:return"Invalid data received"
case 27392:return"Invalid parameter received"}if(28416<=t&&t<=28671)return"Internal error, please report"}function s(t){this.name="TransportStatusError"
var e=Object.keys(o).find(function(e){return o[e]===t})||"UNKNOWN_ERROR",n=a(t)||e,r=t.toString(16)
this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=t,this.statusText=e}s.prototype=new Error},function(t,e){t.exports=o},function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(10),a=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"l0v"
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.transport=e,e.decorateAppAPIMethods(this,["getAppConfiguration","getPublicKey","signTransaction","signHash"],n)}return i(t,[{key:"getAppConfiguration",value:function(){return this.transport.send(224,6,0,0).then(function(t){var e=1===t[0]||t[1]<2
return{version:t[1]+"."+t[2]+"."+t[3],multiOpsEnabled:e}})}},{key:"getPublicKey",value:function(t,e,n){var i=this;(0,o.checkStellarBip32Path)(t)
var a=[],s=void 0,c=(0,o.splitPath)(t),f=new r(1+4*c.length)
f[0]=c.length,c.forEach(function(t,e){f.writeUInt32BE(t,1+4*e)})
var u=r.from("via lumina","ascii")
a.push(r.concat([f,u]))
var h=!1
return(0,o.foreach)(a,function(t){return i.transport.send(224,h?16:2,e?1:0,n?1:0,t,[36864,28162]).then(function(t){28162===r.from(t.slice(t.length-2)).readUInt16BE(0)&&(h=!0,a.push(r.alloc(0))),s=t})}).then(function(){var t=0,n=s.slice(t,t+32)
t+=32
var r=(0,o.encodeEd25519PublicKey)(n)
if(e){var i=s.slice(t,t+64)
if(!(0,o.verifyEd25519Signature)(u,i,n))throw new Error("Bad signature. Keypair is invalid. Please report this.")}return{publicKey:r}})}},{key:"signTransaction",value:function(t,e){var n=this
if((0,o.checkStellarBip32Path)(t),e.length>1540)throw new Error("Transaction too large: max = 1540; actual = "+e.length)
var i=[],a=void 0,s=(0,o.splitPath)(t),c=1+4*s.length,f=r.alloc(c)
f[0]=s.length,s.forEach(function(t,e){f.writeUInt32BE(t,1+4*e)})
var u=150-c
if(e.length<=u)i.push(r.concat([f,e]))
else{var h=r.alloc(u),l=0
for(e.copy(h,0,l,u),i.push(r.concat([f,h])),l+=u;l<e.length;){var d=e.length-l
u=d<150?d:150,h=r.alloc(u),e.copy(h,0,l,l+u),l+=u,i.push(h)}}var p=!1
return(0,o.foreach)(i,function(t,e){return n.transport.send(224,p?16:4,0===e?0:128,e===i.length-1?0:128,t,[36864,27013,27684,27685,28162]).then(function(t){28162===r.from(t.slice(t.length-2)).readUInt16BE(0)&&(p=!0,i.push(r.alloc(0))),a=t})}).then(function(){var i=r.from(a.slice(a.length-2)).readUInt16BE(0)
if(36864===i)return{signature:r.from(a.slice(0,a.length-2))}
if(27684===i)return n.signHash_private(t,(0,o.hash)(e))
if(27685===i)return n.signHash_private(t,(0,o.hash)(e))
throw new Error("Transaction approval request was rejected")})}},{key:"signHash",value:function(t,e){return(0,o.checkStellarBip32Path)(t),this.signHash_private(t,e)}},{key:"signHash_private",value:function(t,e){var n=this,i=[],a=void 0,s=(0,o.splitPath)(t),c=r.alloc(1+4*s.length)
c[0]=s.length,s.forEach(function(t,e){c.writeUInt32BE(t,1+4*e)}),i.push(r.concat([c,e]))
var f=!1
return(0,o.foreach)(i,function(t){return n.transport.send(224,f?16:8,0,0,t,[36864,27013,27750,27904,28162]).then(function(t){28162===r.from(t.slice(t.length-2)).readUInt16BE(0)&&(f=!0,i.push(r.alloc(0))),a=t})}).then(function(){var t=r.from(a.slice(a.length-2)).readUInt16BE(0)
if(36864===t)return{signature:r.from(a.slice(0,a.length-2))}
throw 27013===t?new Error("Transaction approval request was rejected"):27904===t?new Error("Hash signing is not supported"):new Error("Hash signing not allowed. Have you enabled it in the app settings?")})}}]),t}()
e.default=a},function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.splitPath=function(t){var e=[]
return t.split("/").forEach(function(t){var n=parseInt(t,10)
isNaN(n)||(t.length>1&&"'"===t[t.length-1]&&(n+=2147483648),e.push(n))}),e},e.foreach=function(t,e){return Promise.resolve().then(function(){return function t(n,r,i){return n>=r.length?i:e(r[n],n).then(function(e){return i.push(e),t(n+1,r,i)})}(0,t,[])})},e.crc16xmodem=c,e.encodeEd25519PublicKey=function(t){var e=r.from(t),n=r.from([48]),o=r.concat([n,e]),a=r.alloc(2)
a.writeUInt16LE(c(o),0)
var s=r.concat([o,a])
return i.default.encode(s)},e.verifyEd25519Signature=function(t,e,n){return o.default.sign.detached.verify(new Uint8Array(t.toJSON().data),new Uint8Array(e.toJSON().data),new Uint8Array(n.toJSON().data))},e.hash=function(t){var e=new a.sha256
return e.update(t,"utf8"),e.digest()},e.checkStellarBip32Path=function(t){t.split("/").forEach(function(t){if(!t.toString().endsWith("'"))throw new Error("Detected a non-hardened path element in requested BIP32 path. Non-hardended paths are not supported at this time. Please use an all-hardened path. Example: 44'/148'/0'")})}
var i=s(n(11)),o=s(n(13)),a=n(15)
function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){for(var n=void 0!==e?~~e:0,r=0;r<t.length;r++){var i=n>>>8&255
i^=255&t[r],n=n<<8&65535,n^=i^=i>>>4,n^=i=i<<5&65535,n^=i=i<<7&65535}return n}},function(t,e,n){"use strict"
var i=n(12),o=i.Decoder.prototype.finalize
i.Decoder.prototype.finalize=function(t){var e=o.call(this,t)
return new r(e)},t.exports=i},function(t,e,n){"use strict"
var r=function(t,e){return e||(e={}),t.split("").forEach(function(t,n){t in e||(e[t]=n)}),e},i={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",charmap:{0:14,1:8}}
i.charmap=r(i.alphabet,i.charmap)
var o={alphabet:"0123456789ABCDEFGHJKMNPQRSTVWXYZ",charmap:{O:0,I:1,L:1}}
o.charmap=r(o.alphabet,o.charmap)
var a={alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",charmap:{}}
function s(t){if(this.buf=[],this.shift=8,this.carry=0,t){switch(t.type){case"rfc4648":this.charmap=e.rfc4648.charmap
break
case"crockford":this.charmap=e.crockford.charmap
break
case"base32hex":this.charmap=e.base32hex.charmap
break
default:throw new Error("invalid type")}t.charmap&&(this.charmap=t.charmap)}}function c(t){if(this.buf="",this.shift=3,this.carry=0,t){switch(t.type){case"rfc4648":this.alphabet=e.rfc4648.alphabet
break
case"crockford":this.alphabet=e.crockford.alphabet
break
case"base32hex":this.alphabet=e.base32hex.alphabet
break
default:throw new Error("invalid type")}t.alphabet?this.alphabet=t.alphabet:t.lc&&(this.alphabet=this.alphabet.toLowerCase())}}a.charmap=r(a.alphabet,a.charmap),s.prototype.charmap=i.charmap,s.prototype.write=function(t){var e=this.charmap,n=this.buf,r=this.shift,i=this.carry
return t.toUpperCase().split("").forEach(function(t){if("="!=t){var o=255&e[t];(r-=5)>0?i|=o<<r:r<0?(n.push(i|o>>-r),i=o<<(r+=8)&255):(n.push(i|o),r=8,i=0)}}),this.shift=r,this.carry=i,this},s.prototype.finalize=function(t){return t&&this.write(t),8!==this.shift&&0!==this.carry&&(this.buf.push(this.carry),this.shift=8,this.carry=0),this.buf},c.prototype.alphabet=i.alphabet,c.prototype.write=function(t){var e,n,r,i=this.shift,o=this.carry
for(r=0;r<t.length;r++)e=o|(n=t[r])>>i,this.buf+=this.alphabet[31&e],i>5&&(e=n>>(i-=5),this.buf+=this.alphabet[31&e]),o=n<<(i=5-i),i=8-i
return this.shift=i,this.carry=o,this},c.prototype.finalize=function(t){return t&&this.write(t),3!==this.shift&&(this.buf+=this.alphabet[31&this.carry],this.shift=3,this.carry=0),this.buf},e.encode=function(t,e){return new c(e).finalize(t)},e.decode=function(t,e){return new s(e).finalize(t)},e.Decoder=s,e.Encoder=c,e.charmap=r,e.crockford=o,e.rfc4648=i,e.base32hex=a},function(t,e,n){!function(t){"use strict"
var e=function(t){var e,n=new Float64Array(16)
if(t)for(e=0;e<t.length;e++)n[e]=t[e]
return n},r=function(){throw new Error("no PRNG")},i=new Uint8Array(16),o=new Uint8Array(32)
o[0]=9
var a=e(),s=e([1]),c=e([56129,1]),f=e([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),u=e([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),h=e([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),l=e([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),d=e([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139])
function p(t,e,n,r){t[e]=n>>24&255,t[e+1]=n>>16&255,t[e+2]=n>>8&255,t[e+3]=255&n,t[e+4]=r>>24&255,t[e+5]=r>>16&255,t[e+6]=r>>8&255,t[e+7]=255&r}function b(t,e,n,r,i){var o,a=0
for(o=0;o<i;o++)a|=t[e+o]^n[r+o]
return(1&a-1>>>8)-1}function v(t,e,n,r){return b(t,e,n,r,16)}function g(t,e,n,r){return b(t,e,n,r,32)}function m(t,e,n,r){!function(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,f=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,h=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,l=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,d=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,b=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,m=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,w=o,x=a,S=s,k=c,E=f,A=u,M=h,C=l,I=d,B=p,T=b,O=v,P=g,R=m,D=y,N=_,L=0;L<20;L+=2)w^=(i=(P^=(i=(I^=(i=(E^=(i=w+P|0)<<7|i>>>25)+w|0)<<9|i>>>23)+E|0)<<13|i>>>19)+I|0)<<18|i>>>14,A^=(i=(x^=(i=(R^=(i=(B^=(i=A+x|0)<<7|i>>>25)+A|0)<<9|i>>>23)+B|0)<<13|i>>>19)+R|0)<<18|i>>>14,T^=(i=(M^=(i=(S^=(i=(D^=(i=T+M|0)<<7|i>>>25)+T|0)<<9|i>>>23)+D|0)<<13|i>>>19)+S|0)<<18|i>>>14,N^=(i=(O^=(i=(C^=(i=(k^=(i=N+O|0)<<7|i>>>25)+N|0)<<9|i>>>23)+k|0)<<13|i>>>19)+C|0)<<18|i>>>14,w^=(i=(k^=(i=(S^=(i=(x^=(i=w+k|0)<<7|i>>>25)+w|0)<<9|i>>>23)+x|0)<<13|i>>>19)+S|0)<<18|i>>>14,A^=(i=(E^=(i=(C^=(i=(M^=(i=A+E|0)<<7|i>>>25)+A|0)<<9|i>>>23)+M|0)<<13|i>>>19)+C|0)<<18|i>>>14,T^=(i=(B^=(i=(I^=(i=(O^=(i=T+B|0)<<7|i>>>25)+T|0)<<9|i>>>23)+O|0)<<13|i>>>19)+I|0)<<18|i>>>14,N^=(i=(D^=(i=(R^=(i=(P^=(i=N+D|0)<<7|i>>>25)+N|0)<<9|i>>>23)+P|0)<<13|i>>>19)+R|0)<<18|i>>>14
w=w+o|0,x=x+a|0,S=S+s|0,k=k+c|0,E=E+f|0,A=A+u|0,M=M+h|0,C=C+l|0,I=I+d|0,B=B+p|0,T=T+b|0,O=O+v|0,P=P+g|0,R=R+m|0,D=D+y|0,N=N+_|0,t[0]=w>>>0&255,t[1]=w>>>8&255,t[2]=w>>>16&255,t[3]=w>>>24&255,t[4]=x>>>0&255,t[5]=x>>>8&255,t[6]=x>>>16&255,t[7]=x>>>24&255,t[8]=S>>>0&255,t[9]=S>>>8&255,t[10]=S>>>16&255,t[11]=S>>>24&255,t[12]=k>>>0&255,t[13]=k>>>8&255,t[14]=k>>>16&255,t[15]=k>>>24&255,t[16]=E>>>0&255,t[17]=E>>>8&255,t[18]=E>>>16&255,t[19]=E>>>24&255,t[20]=A>>>0&255,t[21]=A>>>8&255,t[22]=A>>>16&255,t[23]=A>>>24&255,t[24]=M>>>0&255,t[25]=M>>>8&255,t[26]=M>>>16&255,t[27]=M>>>24&255,t[28]=C>>>0&255,t[29]=C>>>8&255,t[30]=C>>>16&255,t[31]=C>>>24&255,t[32]=I>>>0&255,t[33]=I>>>8&255,t[34]=I>>>16&255,t[35]=I>>>24&255,t[36]=B>>>0&255,t[37]=B>>>8&255,t[38]=B>>>16&255,t[39]=B>>>24&255,t[40]=T>>>0&255,t[41]=T>>>8&255,t[42]=T>>>16&255,t[43]=T>>>24&255,t[44]=O>>>0&255,t[45]=O>>>8&255,t[46]=O>>>16&255,t[47]=O>>>24&255,t[48]=P>>>0&255,t[49]=P>>>8&255,t[50]=P>>>16&255,t[51]=P>>>24&255,t[52]=R>>>0&255,t[53]=R>>>8&255,t[54]=R>>>16&255,t[55]=R>>>24&255,t[56]=D>>>0&255,t[57]=D>>>8&255,t[58]=D>>>16&255,t[59]=D>>>24&255,t[60]=N>>>0&255,t[61]=N>>>8&255,t[62]=N>>>16&255,t[63]=N>>>24&255}(t,e,n,r)}function y(t,e,n,r){!function(t,e,n,r){for(var i,o=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,a=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,f=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,h=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,l=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,d=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,b=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,v=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,g=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,m=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,y=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,w=0;w<20;w+=2)o^=(i=(g^=(i=(d^=(i=(f^=(i=o+g|0)<<7|i>>>25)+o|0)<<9|i>>>23)+f|0)<<13|i>>>19)+d|0)<<18|i>>>14,u^=(i=(a^=(i=(m^=(i=(p^=(i=u+a|0)<<7|i>>>25)+u|0)<<9|i>>>23)+p|0)<<13|i>>>19)+m|0)<<18|i>>>14,b^=(i=(h^=(i=(s^=(i=(y^=(i=b+h|0)<<7|i>>>25)+b|0)<<9|i>>>23)+y|0)<<13|i>>>19)+s|0)<<18|i>>>14,_^=(i=(v^=(i=(l^=(i=(c^=(i=_+v|0)<<7|i>>>25)+_|0)<<9|i>>>23)+c|0)<<13|i>>>19)+l|0)<<18|i>>>14,o^=(i=(c^=(i=(s^=(i=(a^=(i=o+c|0)<<7|i>>>25)+o|0)<<9|i>>>23)+a|0)<<13|i>>>19)+s|0)<<18|i>>>14,u^=(i=(f^=(i=(l^=(i=(h^=(i=u+f|0)<<7|i>>>25)+u|0)<<9|i>>>23)+h|0)<<13|i>>>19)+l|0)<<18|i>>>14,b^=(i=(p^=(i=(d^=(i=(v^=(i=b+p|0)<<7|i>>>25)+b|0)<<9|i>>>23)+v|0)<<13|i>>>19)+d|0)<<18|i>>>14,_^=(i=(y^=(i=(m^=(i=(g^=(i=_+y|0)<<7|i>>>25)+_|0)<<9|i>>>23)+g|0)<<13|i>>>19)+m|0)<<18|i>>>14
t[0]=o>>>0&255,t[1]=o>>>8&255,t[2]=o>>>16&255,t[3]=o>>>24&255,t[4]=u>>>0&255,t[5]=u>>>8&255,t[6]=u>>>16&255,t[7]=u>>>24&255,t[8]=b>>>0&255,t[9]=b>>>8&255,t[10]=b>>>16&255,t[11]=b>>>24&255,t[12]=_>>>0&255,t[13]=_>>>8&255,t[14]=_>>>16&255,t[15]=_>>>24&255,t[16]=h>>>0&255,t[17]=h>>>8&255,t[18]=h>>>16&255,t[19]=h>>>24&255,t[20]=l>>>0&255,t[21]=l>>>8&255,t[22]=l>>>16&255,t[23]=l>>>24&255,t[24]=d>>>0&255,t[25]=d>>>8&255,t[26]=d>>>16&255,t[27]=d>>>24&255,t[28]=p>>>0&255,t[29]=p>>>8&255,t[30]=p>>>16&255,t[31]=p>>>24&255}(t,e,n,r)}var _=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107])
function w(t,e,n,r,i,o,a){var s,c,f=new Uint8Array(16),u=new Uint8Array(64)
for(c=0;c<16;c++)f[c]=0
for(c=0;c<8;c++)f[c]=o[c]
for(;i>=64;){for(m(u,f,a,_),c=0;c<64;c++)t[e+c]=n[r+c]^u[c]
for(s=1,c=8;c<16;c++)s=s+(255&f[c])|0,f[c]=255&s,s>>>=8
i-=64,e+=64,r+=64}if(i>0)for(m(u,f,a,_),c=0;c<i;c++)t[e+c]=n[r+c]^u[c]
return 0}function x(t,e,n,r,i){var o,a,s=new Uint8Array(16),c=new Uint8Array(64)
for(a=0;a<16;a++)s[a]=0
for(a=0;a<8;a++)s[a]=r[a]
for(;n>=64;){for(m(c,s,i,_),a=0;a<64;a++)t[e+a]=c[a]
for(o=1,a=8;a<16;a++)o=o+(255&s[a])|0,s[a]=255&o,o>>>=8
n-=64,e+=64}if(n>0)for(m(c,s,i,_),a=0;a<n;a++)t[e+a]=c[a]
return 0}function S(t,e,n,r,i){var o=new Uint8Array(32)
y(o,r,i,_)
for(var a=new Uint8Array(8),s=0;s<8;s++)a[s]=r[s+16]
return x(t,e,n,a,o)}function k(t,e,n,r,i,o,a){var s=new Uint8Array(32)
y(s,o,a,_)
for(var c=new Uint8Array(8),f=0;f<8;f++)c[f]=o[f+16]
return w(t,e,n,r,i,c,s)}var E=function(t){var e,n,r,i,o,a,s,c
this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,e=255&t[0]|(255&t[1])<<8,this.r[0]=8191&e,n=255&t[2]|(255&t[3])<<8,this.r[1]=8191&(e>>>13|n<<3),r=255&t[4]|(255&t[5])<<8,this.r[2]=7939&(n>>>10|r<<6),i=255&t[6]|(255&t[7])<<8,this.r[3]=8191&(r>>>7|i<<9),o=255&t[8]|(255&t[9])<<8,this.r[4]=255&(i>>>4|o<<12),this.r[5]=o>>>1&8190,a=255&t[10]|(255&t[11])<<8,this.r[6]=8191&(o>>>14|a<<2),s=255&t[12]|(255&t[13])<<8,this.r[7]=8065&(a>>>11|s<<5),c=255&t[14]|(255&t[15])<<8,this.r[8]=8191&(s>>>8|c<<8),this.r[9]=c>>>5&127,this.pad[0]=255&t[16]|(255&t[17])<<8,this.pad[1]=255&t[18]|(255&t[19])<<8,this.pad[2]=255&t[20]|(255&t[21])<<8,this.pad[3]=255&t[22]|(255&t[23])<<8,this.pad[4]=255&t[24]|(255&t[25])<<8,this.pad[5]=255&t[26]|(255&t[27])<<8,this.pad[6]=255&t[28]|(255&t[29])<<8,this.pad[7]=255&t[30]|(255&t[31])<<8}
function A(t,e,n,r,i,o){var a=new E(o)
return a.update(n,r,i),a.finish(t,e),0}function M(t,e,n,r,i,o){var a=new Uint8Array(16)
return A(a,0,n,r,i,o),v(t,e,a,0)}function C(t,e,n,r,i){var o
if(n<32)return-1
for(k(t,0,e,0,n,r,i),A(t,16,t,32,n-32,t),o=0;o<16;o++)t[o]=0
return 0}function I(t,e,n,r,i){var o,a=new Uint8Array(32)
if(n<32)return-1
if(S(a,0,32,r,i),0!==M(e,16,e,32,n-32,a))return-1
for(k(t,0,e,0,n,r,i),o=0;o<32;o++)t[o]=0
return 0}function B(t,e){var n
for(n=0;n<16;n++)t[n]=0|e[n]}function T(t){var e,n,r=1
for(e=0;e<16;e++)n=t[e]+r+65535,r=Math.floor(n/65536),t[e]=n-65536*r
t[0]+=r-1+37*(r-1)}function O(t,e,n){for(var r,i=~(n-1),o=0;o<16;o++)r=i&(t[o]^e[o]),t[o]^=r,e[o]^=r}function P(t,n){var r,i,o,a=e(),s=e()
for(r=0;r<16;r++)s[r]=n[r]
for(T(s),T(s),T(s),i=0;i<2;i++){for(a[0]=s[0]-65517,r=1;r<15;r++)a[r]=s[r]-65535-(a[r-1]>>16&1),a[r-1]&=65535
a[15]=s[15]-32767-(a[14]>>16&1),o=a[15]>>16&1,a[14]&=65535,O(s,a,1-o)}for(r=0;r<16;r++)t[2*r]=255&s[r],t[2*r+1]=s[r]>>8}function R(t,e){var n=new Uint8Array(32),r=new Uint8Array(32)
return P(n,t),P(r,e),g(n,0,r,0)}function D(t){var e=new Uint8Array(32)
return P(e,t),1&e[0]}function N(t,e){var n
for(n=0;n<16;n++)t[n]=e[2*n]+(e[2*n+1]<<8)
t[15]&=32767}function L(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]+n[r]}function j(t,e,n){for(var r=0;r<16;r++)t[r]=e[r]-n[r]}function U(t,e,n){var r,i,o=0,a=0,s=0,c=0,f=0,u=0,h=0,l=0,d=0,p=0,b=0,v=0,g=0,m=0,y=0,_=0,w=0,x=0,S=0,k=0,E=0,A=0,M=0,C=0,I=0,B=0,T=0,O=0,P=0,R=0,D=0,N=n[0],L=n[1],j=n[2],U=n[3],z=n[4],q=n[5],F=n[6],K=n[7],$=n[8],H=n[9],W=n[10],V=n[11],Y=n[12],X=n[13],G=n[14],J=n[15]
o+=(r=e[0])*N,a+=r*L,s+=r*j,c+=r*U,f+=r*z,u+=r*q,h+=r*F,l+=r*K,d+=r*$,p+=r*H,b+=r*W,v+=r*V,g+=r*Y,m+=r*X,y+=r*G,_+=r*J,a+=(r=e[1])*N,s+=r*L,c+=r*j,f+=r*U,u+=r*z,h+=r*q,l+=r*F,d+=r*K,p+=r*$,b+=r*H,v+=r*W,g+=r*V,m+=r*Y,y+=r*X,_+=r*G,w+=r*J,s+=(r=e[2])*N,c+=r*L,f+=r*j,u+=r*U,h+=r*z,l+=r*q,d+=r*F,p+=r*K,b+=r*$,v+=r*H,g+=r*W,m+=r*V,y+=r*Y,_+=r*X,w+=r*G,x+=r*J,c+=(r=e[3])*N,f+=r*L,u+=r*j,h+=r*U,l+=r*z,d+=r*q,p+=r*F,b+=r*K,v+=r*$,g+=r*H,m+=r*W,y+=r*V,_+=r*Y,w+=r*X,x+=r*G,S+=r*J,f+=(r=e[4])*N,u+=r*L,h+=r*j,l+=r*U,d+=r*z,p+=r*q,b+=r*F,v+=r*K,g+=r*$,m+=r*H,y+=r*W,_+=r*V,w+=r*Y,x+=r*X,S+=r*G,k+=r*J,u+=(r=e[5])*N,h+=r*L,l+=r*j,d+=r*U,p+=r*z,b+=r*q,v+=r*F,g+=r*K,m+=r*$,y+=r*H,_+=r*W,w+=r*V,x+=r*Y,S+=r*X,k+=r*G,E+=r*J,h+=(r=e[6])*N,l+=r*L,d+=r*j,p+=r*U,b+=r*z,v+=r*q,g+=r*F,m+=r*K,y+=r*$,_+=r*H,w+=r*W,x+=r*V,S+=r*Y,k+=r*X,E+=r*G,A+=r*J,l+=(r=e[7])*N,d+=r*L,p+=r*j,b+=r*U,v+=r*z,g+=r*q,m+=r*F,y+=r*K,_+=r*$,w+=r*H,x+=r*W,S+=r*V,k+=r*Y,E+=r*X,A+=r*G,M+=r*J,d+=(r=e[8])*N,p+=r*L,b+=r*j,v+=r*U,g+=r*z,m+=r*q,y+=r*F,_+=r*K,w+=r*$,x+=r*H,S+=r*W,k+=r*V,E+=r*Y,A+=r*X,M+=r*G,C+=r*J,p+=(r=e[9])*N,b+=r*L,v+=r*j,g+=r*U,m+=r*z,y+=r*q,_+=r*F,w+=r*K,x+=r*$,S+=r*H,k+=r*W,E+=r*V,A+=r*Y,M+=r*X,C+=r*G,I+=r*J,b+=(r=e[10])*N,v+=r*L,g+=r*j,m+=r*U,y+=r*z,_+=r*q,w+=r*F,x+=r*K,S+=r*$,k+=r*H,E+=r*W,A+=r*V,M+=r*Y,C+=r*X,I+=r*G,B+=r*J,v+=(r=e[11])*N,g+=r*L,m+=r*j,y+=r*U,_+=r*z,w+=r*q,x+=r*F,S+=r*K,k+=r*$,E+=r*H,A+=r*W,M+=r*V,C+=r*Y,I+=r*X,B+=r*G,T+=r*J,g+=(r=e[12])*N,m+=r*L,y+=r*j,_+=r*U,w+=r*z,x+=r*q,S+=r*F,k+=r*K,E+=r*$,A+=r*H,M+=r*W,C+=r*V,I+=r*Y,B+=r*X,T+=r*G,O+=r*J,m+=(r=e[13])*N,y+=r*L,_+=r*j,w+=r*U,x+=r*z,S+=r*q,k+=r*F,E+=r*K,A+=r*$,M+=r*H,C+=r*W,I+=r*V,B+=r*Y,T+=r*X,O+=r*G,P+=r*J,y+=(r=e[14])*N,_+=r*L,w+=r*j,x+=r*U,S+=r*z,k+=r*q,E+=r*F,A+=r*K,M+=r*$,C+=r*H,I+=r*W,B+=r*V,T+=r*Y,O+=r*X,P+=r*G,R+=r*J,_+=(r=e[15])*N,a+=38*(x+=r*j),s+=38*(S+=r*U),c+=38*(k+=r*z),f+=38*(E+=r*q),u+=38*(A+=r*F),h+=38*(M+=r*K),l+=38*(C+=r*$),d+=38*(I+=r*H),p+=38*(B+=r*W),b+=38*(T+=r*V),v+=38*(O+=r*Y),g+=38*(P+=r*X),m+=38*(R+=r*G),y+=38*(D+=r*J),o=(r=(o+=38*(w+=r*L))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),o=(r=(o+=i-1+37*(i-1))+(i=1)+65535)-65536*(i=Math.floor(r/65536)),a=(r=a+i+65535)-65536*(i=Math.floor(r/65536)),s=(r=s+i+65535)-65536*(i=Math.floor(r/65536)),c=(r=c+i+65535)-65536*(i=Math.floor(r/65536)),f=(r=f+i+65535)-65536*(i=Math.floor(r/65536)),u=(r=u+i+65535)-65536*(i=Math.floor(r/65536)),h=(r=h+i+65535)-65536*(i=Math.floor(r/65536)),l=(r=l+i+65535)-65536*(i=Math.floor(r/65536)),d=(r=d+i+65535)-65536*(i=Math.floor(r/65536)),p=(r=p+i+65535)-65536*(i=Math.floor(r/65536)),b=(r=b+i+65535)-65536*(i=Math.floor(r/65536)),v=(r=v+i+65535)-65536*(i=Math.floor(r/65536)),g=(r=g+i+65535)-65536*(i=Math.floor(r/65536)),m=(r=m+i+65535)-65536*(i=Math.floor(r/65536)),y=(r=y+i+65535)-65536*(i=Math.floor(r/65536)),_=(r=_+i+65535)-65536*(i=Math.floor(r/65536)),o+=i-1+37*(i-1),t[0]=o,t[1]=a,t[2]=s,t[3]=c,t[4]=f,t[5]=u,t[6]=h,t[7]=l,t[8]=d,t[9]=p,t[10]=b,t[11]=v,t[12]=g,t[13]=m,t[14]=y,t[15]=_}function z(t,e){U(t,e,e)}function q(t,n){var r,i=e()
for(r=0;r<16;r++)i[r]=n[r]
for(r=253;r>=0;r--)z(i,i),2!==r&&4!==r&&U(i,i,n)
for(r=0;r<16;r++)t[r]=i[r]}function F(t,n,r){var i,o,a=new Uint8Array(32),s=new Float64Array(80),f=e(),u=e(),h=e(),l=e(),d=e(),p=e()
for(o=0;o<31;o++)a[o]=n[o]
for(a[31]=127&n[31]|64,a[0]&=248,N(s,r),o=0;o<16;o++)u[o]=s[o],l[o]=f[o]=h[o]=0
for(f[0]=l[0]=1,o=254;o>=0;--o)O(f,u,i=a[o>>>3]>>>(7&o)&1),O(h,l,i),L(d,f,h),j(f,f,h),L(h,u,l),j(u,u,l),z(l,d),z(p,f),U(f,h,f),U(h,u,d),L(d,f,h),j(f,f,h),z(u,f),j(h,l,p),U(f,h,c),L(f,f,l),U(h,h,f),U(f,l,p),U(l,u,s),z(u,d),O(f,u,i),O(h,l,i)
for(o=0;o<16;o++)s[o+16]=f[o],s[o+32]=h[o],s[o+48]=u[o],s[o+64]=l[o]
var b=s.subarray(32),v=s.subarray(16)
return q(b,b),U(v,v,b),P(t,v),0}function K(t,e){return F(t,e,o)}function $(t,e){return r(e,32),K(t,e)}function H(t,e,n){var r=new Uint8Array(32)
return F(r,n,e),y(t,i,r,_)}E.prototype.blocks=function(t,e,n){for(var r,i,o,a,s,c,f,u,h,l,d,p,b,v,g,m,y,_,w,x=this.fin?0:2048,S=this.h[0],k=this.h[1],E=this.h[2],A=this.h[3],M=this.h[4],C=this.h[5],I=this.h[6],B=this.h[7],T=this.h[8],O=this.h[9],P=this.r[0],R=this.r[1],D=this.r[2],N=this.r[3],L=this.r[4],j=this.r[5],U=this.r[6],z=this.r[7],q=this.r[8],F=this.r[9];n>=16;)l=h=0,l+=(S+=8191&(r=255&t[e+0]|(255&t[e+1])<<8))*P,l+=(k+=8191&(r>>>13|(i=255&t[e+2]|(255&t[e+3])<<8)<<3))*(5*F),l+=(E+=8191&(i>>>10|(o=255&t[e+4]|(255&t[e+5])<<8)<<6))*(5*q),l+=(A+=8191&(o>>>7|(a=255&t[e+6]|(255&t[e+7])<<8)<<9))*(5*z),h=(l+=(M+=8191&(a>>>4|(s=255&t[e+8]|(255&t[e+9])<<8)<<12))*(5*U))>>>13,l&=8191,l+=(C+=s>>>1&8191)*(5*j),l+=(I+=8191&(s>>>14|(c=255&t[e+10]|(255&t[e+11])<<8)<<2))*(5*L),l+=(B+=8191&(c>>>11|(f=255&t[e+12]|(255&t[e+13])<<8)<<5))*(5*N),l+=(T+=8191&(f>>>8|(u=255&t[e+14]|(255&t[e+15])<<8)<<8))*(5*D),d=h+=(l+=(O+=u>>>5|x)*(5*R))>>>13,d+=S*R,d+=k*P,d+=E*(5*F),d+=A*(5*q),h=(d+=M*(5*z))>>>13,d&=8191,d+=C*(5*U),d+=I*(5*j),d+=B*(5*L),d+=T*(5*N),h+=(d+=O*(5*D))>>>13,d&=8191,p=h,p+=S*D,p+=k*R,p+=E*P,p+=A*(5*F),h=(p+=M*(5*q))>>>13,p&=8191,p+=C*(5*z),p+=I*(5*U),p+=B*(5*j),p+=T*(5*L),b=h+=(p+=O*(5*N))>>>13,b+=S*N,b+=k*D,b+=E*R,b+=A*P,h=(b+=M*(5*F))>>>13,b&=8191,b+=C*(5*q),b+=I*(5*z),b+=B*(5*U),b+=T*(5*j),v=h+=(b+=O*(5*L))>>>13,v+=S*L,v+=k*N,v+=E*D,v+=A*R,h=(v+=M*P)>>>13,v&=8191,v+=C*(5*F),v+=I*(5*q),v+=B*(5*z),v+=T*(5*U),g=h+=(v+=O*(5*j))>>>13,g+=S*j,g+=k*L,g+=E*N,g+=A*D,h=(g+=M*R)>>>13,g&=8191,g+=C*P,g+=I*(5*F),g+=B*(5*q),g+=T*(5*z),m=h+=(g+=O*(5*U))>>>13,m+=S*U,m+=k*j,m+=E*L,m+=A*N,h=(m+=M*D)>>>13,m&=8191,m+=C*R,m+=I*P,m+=B*(5*F),m+=T*(5*q),y=h+=(m+=O*(5*z))>>>13,y+=S*z,y+=k*U,y+=E*j,y+=A*L,h=(y+=M*N)>>>13,y&=8191,y+=C*D,y+=I*R,y+=B*P,y+=T*(5*F),_=h+=(y+=O*(5*q))>>>13,_+=S*q,_+=k*z,_+=E*U,_+=A*j,h=(_+=M*L)>>>13,_&=8191,_+=C*N,_+=I*D,_+=B*R,_+=T*P,w=h+=(_+=O*(5*F))>>>13,w+=S*F,w+=k*q,w+=E*z,w+=A*U,h=(w+=M*j)>>>13,w&=8191,w+=C*L,w+=I*N,w+=B*D,w+=T*R,S=l=8191&(h=(h=((h+=(w+=O*P)>>>13)<<2)+h|0)+(l&=8191)|0),k=d+=h>>>=13,E=p&=8191,A=b&=8191,M=v&=8191,C=g&=8191,I=m&=8191,B=y&=8191,T=_&=8191,O=w&=8191,e+=16,n-=16
this.h[0]=S,this.h[1]=k,this.h[2]=E,this.h[3]=A,this.h[4]=M,this.h[5]=C,this.h[6]=I,this.h[7]=B,this.h[8]=T,this.h[9]=O},E.prototype.finish=function(t,e){var n,r,i,o,a=new Uint16Array(10)
if(this.leftover){for(o=this.leftover,this.buffer[o++]=1;o<16;o++)this.buffer[o]=0
this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,o=2;o<10;o++)this.h[o]+=n,n=this.h[o]>>>13,this.h[o]&=8191
for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,a[0]=this.h[0]+5,n=a[0]>>>13,a[0]&=8191,o=1;o<10;o++)a[o]=this.h[o]+n,n=a[o]>>>13,a[o]&=8191
for(a[9]-=8192,r=(1^n)-1,o=0;o<10;o++)a[o]&=r
for(r=~r,o=0;o<10;o++)this.h[o]=this.h[o]&r|a[o]
for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,o=1;o<8;o++)i=(this.h[o]+this.pad[o]|0)+(i>>>16)|0,this.h[o]=65535&i
t[e+0]=this.h[0]>>>0&255,t[e+1]=this.h[0]>>>8&255,t[e+2]=this.h[1]>>>0&255,t[e+3]=this.h[1]>>>8&255,t[e+4]=this.h[2]>>>0&255,t[e+5]=this.h[2]>>>8&255,t[e+6]=this.h[3]>>>0&255,t[e+7]=this.h[3]>>>8&255,t[e+8]=this.h[4]>>>0&255,t[e+9]=this.h[4]>>>8&255,t[e+10]=this.h[5]>>>0&255,t[e+11]=this.h[5]>>>8&255,t[e+12]=this.h[6]>>>0&255,t[e+13]=this.h[6]>>>8&255,t[e+14]=this.h[7]>>>0&255,t[e+15]=this.h[7]>>>8&255},E.prototype.update=function(t,e,n){var r,i
if(this.leftover){for((i=16-this.leftover)>n&&(i=n),r=0;r<i;r++)this.buffer[this.leftover+r]=t[e+r]
if(n-=i,e+=i,this.leftover+=i,this.leftover<16)return
this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(i=n-n%16,this.blocks(t,e,i),e+=i,n-=i),n){for(r=0;r<n;r++)this.buffer[this.leftover+r]=t[e+r]
this.leftover+=n}}
var W=C,V=I,Y=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function X(t,e,n,r){for(var i,o,a,s,c,f,u,h,l,d,p,b,v,g,m,y,_,w,x,S,k,E,A,M,C,I,B=new Int32Array(16),T=new Int32Array(16),O=t[0],P=t[1],R=t[2],D=t[3],N=t[4],L=t[5],j=t[6],U=t[7],z=e[0],q=e[1],F=e[2],K=e[3],$=e[4],H=e[5],W=e[6],V=e[7],X=0;r>=128;){for(x=0;x<16;x++)S=8*x+X,B[x]=n[S+0]<<24|n[S+1]<<16|n[S+2]<<8|n[S+3],T[x]=n[S+4]<<24|n[S+5]<<16|n[S+6]<<8|n[S+7]
for(x=0;x<80;x++)if(i=O,o=P,a=R,s=D,c=N,f=L,u=j,l=z,d=q,p=F,b=K,v=$,g=H,m=W,A=65535&(E=V),M=E>>>16,C=65535&(k=U),I=k>>>16,A+=65535&(E=($>>>14|N<<18)^($>>>18|N<<14)^(N>>>9|$<<23)),M+=E>>>16,C+=65535&(k=(N>>>14|$<<18)^(N>>>18|$<<14)^($>>>9|N<<23)),I+=k>>>16,A+=65535&(E=$&H^~$&W),M+=E>>>16,C+=65535&(k=N&L^~N&j),I+=k>>>16,k=Y[2*x],A+=65535&(E=Y[2*x+1]),M+=E>>>16,C+=65535&k,I+=k>>>16,k=B[x%16],M+=(E=T[x%16])>>>16,C+=65535&k,I+=k>>>16,C+=(M+=(A+=65535&E)>>>16)>>>16,A=65535&(E=w=65535&A|M<<16),M=E>>>16,C=65535&(k=_=65535&C|(I+=C>>>16)<<16),I=k>>>16,A+=65535&(E=(z>>>28|O<<4)^(O>>>2|z<<30)^(O>>>7|z<<25)),M+=E>>>16,C+=65535&(k=(O>>>28|z<<4)^(z>>>2|O<<30)^(z>>>7|O<<25)),I+=k>>>16,M+=(E=z&q^z&F^q&F)>>>16,C+=65535&(k=O&P^O&R^P&R),I+=k>>>16,h=65535&(C+=(M+=(A+=65535&E)>>>16)>>>16)|(I+=C>>>16)<<16,y=65535&A|M<<16,A=65535&(E=b),M=E>>>16,C=65535&(k=s),I=k>>>16,M+=(E=w)>>>16,C+=65535&(k=_),I+=k>>>16,P=i,R=o,D=a,N=s=65535&(C+=(M+=(A+=65535&E)>>>16)>>>16)|(I+=C>>>16)<<16,L=c,j=f,U=u,O=h,q=l,F=d,K=p,$=b=65535&A|M<<16,H=v,W=g,V=m,z=y,x%16==15)for(S=0;S<16;S++)k=B[S],A=65535&(E=T[S]),M=E>>>16,C=65535&k,I=k>>>16,k=B[(S+9)%16],A+=65535&(E=T[(S+9)%16]),M+=E>>>16,C+=65535&k,I+=k>>>16,_=B[(S+1)%16],A+=65535&(E=((w=T[(S+1)%16])>>>1|_<<31)^(w>>>8|_<<24)^(w>>>7|_<<25)),M+=E>>>16,C+=65535&(k=(_>>>1|w<<31)^(_>>>8|w<<24)^_>>>7),I+=k>>>16,_=B[(S+14)%16],M+=(E=((w=T[(S+14)%16])>>>19|_<<13)^(_>>>29|w<<3)^(w>>>6|_<<26))>>>16,C+=65535&(k=(_>>>19|w<<13)^(w>>>29|_<<3)^_>>>6),I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,B[S]=65535&C|I<<16,T[S]=65535&A|M<<16
A=65535&(E=z),M=E>>>16,C=65535&(k=O),I=k>>>16,k=t[0],M+=(E=e[0])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[0]=O=65535&C|I<<16,e[0]=z=65535&A|M<<16,A=65535&(E=q),M=E>>>16,C=65535&(k=P),I=k>>>16,k=t[1],M+=(E=e[1])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[1]=P=65535&C|I<<16,e[1]=q=65535&A|M<<16,A=65535&(E=F),M=E>>>16,C=65535&(k=R),I=k>>>16,k=t[2],M+=(E=e[2])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[2]=R=65535&C|I<<16,e[2]=F=65535&A|M<<16,A=65535&(E=K),M=E>>>16,C=65535&(k=D),I=k>>>16,k=t[3],M+=(E=e[3])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[3]=D=65535&C|I<<16,e[3]=K=65535&A|M<<16,A=65535&(E=$),M=E>>>16,C=65535&(k=N),I=k>>>16,k=t[4],M+=(E=e[4])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[4]=N=65535&C|I<<16,e[4]=$=65535&A|M<<16,A=65535&(E=H),M=E>>>16,C=65535&(k=L),I=k>>>16,k=t[5],M+=(E=e[5])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[5]=L=65535&C|I<<16,e[5]=H=65535&A|M<<16,A=65535&(E=W),M=E>>>16,C=65535&(k=j),I=k>>>16,k=t[6],M+=(E=e[6])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[6]=j=65535&C|I<<16,e[6]=W=65535&A|M<<16,A=65535&(E=V),M=E>>>16,C=65535&(k=U),I=k>>>16,k=t[7],M+=(E=e[7])>>>16,C+=65535&k,I+=k>>>16,I+=(C+=(M+=(A+=65535&E)>>>16)>>>16)>>>16,t[7]=U=65535&C|I<<16,e[7]=V=65535&A|M<<16,X+=128,r-=128}return r}function G(t,e,n){var r,i=new Int32Array(8),o=new Int32Array(8),a=new Uint8Array(256),s=n
for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,o[0]=4089235720,o[1]=2227873595,o[2]=4271175723,o[3]=1595750129,o[4]=2917565137,o[5]=725511199,o[6]=4215389547,o[7]=327033209,X(i,o,e,n),n%=128,r=0;r<n;r++)a[r]=e[s-n+r]
for(a[n]=128,a[(n=256-128*(n<112?1:0))-9]=0,p(a,n-8,s/536870912|0,s<<3),X(i,o,a,n),r=0;r<8;r++)p(t,8*r,i[r],o[r])
return 0}function J(t,n){var r=e(),i=e(),o=e(),a=e(),s=e(),c=e(),f=e(),h=e(),l=e()
j(r,t[1],t[0]),j(l,n[1],n[0]),U(r,r,l),L(i,t[0],t[1]),L(l,n[0],n[1]),U(i,i,l),U(o,t[3],n[3]),U(o,o,u),U(a,t[2],n[2]),L(a,a,a),j(s,i,r),j(c,a,o),L(f,a,o),L(h,i,r),U(t[0],s,c),U(t[1],h,f),U(t[2],f,c),U(t[3],s,h)}function Z(t,e,n){var r
for(r=0;r<4;r++)O(t[r],e[r],n)}function Q(t,n){var r=e(),i=e(),o=e()
q(o,n[2]),U(r,n[0],o),U(i,n[1],o),P(t,i),t[31]^=D(r)<<7}function tt(t,e,n){var r,i
for(B(t[0],a),B(t[1],s),B(t[2],s),B(t[3],a),i=255;i>=0;--i)Z(t,e,r=n[i/8|0]>>(7&i)&1),J(e,t),J(t,t),Z(t,e,r)}function et(t,n){var r=[e(),e(),e(),e()]
B(r[0],h),B(r[1],l),B(r[2],s),U(r[3],h,l),tt(t,r,n)}function nt(t,n,i){var o,a=new Uint8Array(64),s=[e(),e(),e(),e()]
for(i||r(n,32),G(a,n,32),a[0]&=248,a[31]&=127,a[31]|=64,et(s,a),Q(t,s),o=0;o<32;o++)n[o+32]=t[o]
return 0}var rt=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16])
function it(t,e){var n,r,i,o
for(r=63;r>=32;--r){for(n=0,i=r-32,o=r-12;i<o;++i)e[i]+=n-16*e[r]*rt[i-(r-32)],n=e[i]+128>>8,e[i]-=256*n
e[i]+=n,e[r]=0}for(n=0,i=0;i<32;i++)e[i]+=n-(e[31]>>4)*rt[i],n=e[i]>>8,e[i]&=255
for(i=0;i<32;i++)e[i]-=n*rt[i]
for(r=0;r<32;r++)e[r+1]+=e[r]>>8,t[r]=255&e[r]}function ot(t){var e,n=new Float64Array(64)
for(e=0;e<64;e++)n[e]=t[e]
for(e=0;e<64;e++)t[e]=0
it(t,n)}function at(t,n,r,i){var o,a,s=new Uint8Array(64),c=new Uint8Array(64),f=new Uint8Array(64),u=new Float64Array(64),h=[e(),e(),e(),e()]
G(s,i,32),s[0]&=248,s[31]&=127,s[31]|=64
var l=r+64
for(o=0;o<r;o++)t[64+o]=n[o]
for(o=0;o<32;o++)t[32+o]=s[32+o]
for(G(f,t.subarray(32),r+32),ot(f),et(h,f),Q(t,h),o=32;o<64;o++)t[o]=i[o]
for(G(c,t,r+64),ot(c),o=0;o<64;o++)u[o]=0
for(o=0;o<32;o++)u[o]=f[o]
for(o=0;o<32;o++)for(a=0;a<32;a++)u[o+a]+=c[o]*s[a]
return it(t.subarray(32),u),l}function st(t,n){var r=e(),i=e(),o=e(),c=e(),u=e(),h=e(),l=e()
return B(t[2],s),N(t[1],n),z(o,t[1]),U(c,o,f),j(o,o,t[2]),L(c,t[2],c),z(u,c),z(h,u),U(l,h,u),U(r,l,o),U(r,r,c),function(t,n){var r,i=e()
for(r=0;r<16;r++)i[r]=n[r]
for(r=250;r>=0;r--)z(i,i),1!==r&&U(i,i,n)
for(r=0;r<16;r++)t[r]=i[r]}(r,r),U(r,r,o),U(r,r,c),U(r,r,c),U(t[0],r,c),z(i,t[0]),U(i,i,c),R(i,o)&&U(t[0],t[0],d),z(i,t[0]),U(i,i,c),R(i,o)?-1:(D(t[0])===n[31]>>7&&j(t[0],a,t[0]),U(t[3],t[0],t[1]),0)}function ct(t,n,r,i){var o,a=new Uint8Array(32),s=new Uint8Array(64),c=[e(),e(),e(),e()],f=[e(),e(),e(),e()]
if(r<64)return-1
if(st(f,i))return-1
for(o=0;o<r;o++)t[o]=n[o]
for(o=0;o<32;o++)t[o+32]=i[o]
if(G(s,t,r),ot(s),tt(c,f,s),et(f,n.subarray(32)),J(c,f),Q(a,c),r-=64,g(n,0,a,0)){for(o=0;o<r;o++)t[o]=0
return-1}for(o=0;o<r;o++)t[o]=n[o+64]
return r}var ft=32,ut=24,ht=ut
function lt(t,e){if(t.length!==ft)throw new Error("bad key size")
if(e.length!==ut)throw new Error("bad nonce size")}function dt(){for(var t=0;t<arguments.length;t++)if(!(arguments[t]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function pt(t){for(var e=0;e<t.length;e++)t[e]=0}t.lowlevel={crypto_core_hsalsa20:y,crypto_stream_xor:k,crypto_stream:S,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:x,crypto_onetimeauth:A,crypto_onetimeauth_verify:M,crypto_verify_16:v,crypto_verify_32:g,crypto_secretbox:C,crypto_secretbox_open:I,crypto_scalarmult:F,crypto_scalarmult_base:K,crypto_box_beforenm:H,crypto_box_afternm:W,crypto_box:function(t,e,n,r,i,o){var a=new Uint8Array(32)
return H(a,i,o),W(t,e,n,r,a)},crypto_box_open:function(t,e,n,r,i,o){var a=new Uint8Array(32)
return H(a,i,o),V(t,e,n,r,a)},crypto_box_keypair:$,crypto_hash:G,crypto_sign:at,crypto_sign_keypair:nt,crypto_sign_open:ct,crypto_secretbox_KEYBYTES:ft,crypto_secretbox_NONCEBYTES:ut,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:32,crypto_box_SECRETKEYBYTES:32,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:ht,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},t.randomBytes=function(t){var e=new Uint8Array(t)
return r(e,t),e},t.secretbox=function(t,e,n){dt(t,e,n),lt(n,e)
for(var r=new Uint8Array(32+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+32]=t[o]
return C(i,r,r.length,e,n),i.subarray(16)},t.secretbox.open=function(t,e,n){dt(t,e,n),lt(n,e)
for(var r=new Uint8Array(16+t.length),i=new Uint8Array(r.length),o=0;o<t.length;o++)r[o+16]=t[o]
return r.length<32?null:0!==I(i,r,r.length,e,n)?null:i.subarray(32)},t.secretbox.keyLength=ft,t.secretbox.nonceLength=ut,t.secretbox.overheadLength=16,t.scalarMult=function(t,e){if(dt(t,e),32!==t.length)throw new Error("bad n size")
if(32!==e.length)throw new Error("bad p size")
var n=new Uint8Array(32)
return F(n,t,e),n},t.scalarMult.base=function(t){if(dt(t),32!==t.length)throw new Error("bad n size")
var e=new Uint8Array(32)
return K(e,t),e},t.scalarMult.scalarLength=32,t.scalarMult.groupElementLength=32,t.box=function(e,n,r,i){var o=t.box.before(r,i)
return t.secretbox(e,n,o)},t.box.before=function(t,e){dt(t,e),function(t,e){if(32!==t.length)throw new Error("bad public key size")
if(32!==e.length)throw new Error("bad secret key size")}(t,e)
var n=new Uint8Array(32)
return H(n,t,e),n},t.box.after=t.secretbox,t.box.open=function(e,n,r,i){var o=t.box.before(r,i)
return t.secretbox.open(e,n,o)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var t=new Uint8Array(32),e=new Uint8Array(32)
return $(t,e),{publicKey:t,secretKey:e}},t.box.keyPair.fromSecretKey=function(t){if(dt(t),32!==t.length)throw new Error("bad secret key size")
var e=new Uint8Array(32)
return K(e,t),{publicKey:e,secretKey:new Uint8Array(t)}},t.box.publicKeyLength=32,t.box.secretKeyLength=32,t.box.sharedKeyLength=32,t.box.nonceLength=ht,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(t,e){if(dt(t,e),64!==e.length)throw new Error("bad secret key size")
var n=new Uint8Array(64+t.length)
return at(n,t,t.length,e),n},t.sign.open=function(t,e){if(dt(t,e),32!==e.length)throw new Error("bad public key size")
var n=new Uint8Array(t.length),r=ct(n,t,t.length,e)
if(r<0)return null
for(var i=new Uint8Array(r),o=0;o<i.length;o++)i[o]=n[o]
return i},t.sign.detached=function(e,n){for(var r=t.sign(e,n),i=new Uint8Array(64),o=0;o<i.length;o++)i[o]=r[o]
return i},t.sign.detached.verify=function(t,e,n){if(dt(t,e,n),64!==e.length)throw new Error("bad signature size")
if(32!==n.length)throw new Error("bad public key size")
var r,i=new Uint8Array(64+t.length),o=new Uint8Array(64+t.length)
for(r=0;r<64;r++)i[r]=e[r]
for(r=0;r<t.length;r++)i[r+64]=t[r]
return ct(o,i,i.length,n)>=0},t.sign.keyPair=function(){var t=new Uint8Array(32),e=new Uint8Array(64)
return nt(t,e),{publicKey:t,secretKey:e}},t.sign.keyPair.fromSecretKey=function(t){if(dt(t),64!==t.length)throw new Error("bad secret key size")
for(var e=new Uint8Array(32),n=0;n<e.length;n++)e[n]=t[32+n]
return{publicKey:e,secretKey:new Uint8Array(t)}},t.sign.keyPair.fromSeed=function(t){if(dt(t),32!==t.length)throw new Error("bad seed size")
for(var e=new Uint8Array(32),n=new Uint8Array(64),r=0;r<32;r++)n[r]=t[r]
return nt(e,n,!0),{publicKey:e,secretKey:n}},t.sign.publicKeyLength=32,t.sign.secretKeyLength=64,t.sign.seedLength=32,t.sign.signatureLength=64,t.hash=function(t){dt(t)
var e=new Uint8Array(64)
return G(e,t,t.length),e},t.hash.hashLength=64,t.verify=function(t,e){return dt(t,e),0!==t.length&&0!==e.length&&t.length===e.length&&0===b(t,0,e,0,t.length)},t.setPRNG=function(t){r=t},function(){var e="undefined"!=typeof self?self.crypto||self.msCrypto:null
e&&e.getRandomValues?t.setPRNG(function(t,n){var r,i=new Uint8Array(n)
for(r=0;r<n;r+=65536)e.getRandomValues(i.subarray(r,r+Math.min(n-r,65536)))
for(r=0;r<n;r++)t[r]=i[r]
pt(i)}):(e=n(14))&&e.randomBytes&&t.setPRNG(function(t,n){var r,i=e.randomBytes(n)
for(r=0;r<n;r++)t[r]=i[r]
pt(i)})}()}(t.exports?t.exports:self.nacl=self.nacl||{})},function(t,e){t.exports=n(89)},function(t,e,n){(e=t.exports=function(t){t=t.toLowerCase()
var n=e[t]
if(!n)throw new Error(t+" is not supported (we accept pull requests)")
return new n}).sha=n(16),e.sha1=n(20),e.sha224=n(21),e.sha256=n(5),e.sha384=n(22),e.sha512=n(6)},function(t,e,n){var r=n(1),i=n(2),o=n(0).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function c(){this.init(),this._w=s,i.call(this,64,56)}function f(t){return t<<30|t>>>2}function u(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(c,i),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,c=0|this._e,h=0;h<16;++h)n[h]=t.readInt32BE(4*h)
for(;h<80;++h)n[h]=n[h-3]^n[h-8]^n[h-14]^n[h-16]
for(var l=0;l<80;++l){var d=~~(l/20),p=0|((e=r)<<5|e>>>27)+u(d,i,o,s)+c+n[l]+a[d]
c=s,s=o,o=f(i),i=r,r=p}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=c},function(t,e){t.exports=n(174)},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){t.exports=n(5)},function(t,e,n){var r=n(1),i=n(2),o=n(0).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function c(){this.init(),this._w=s,i.call(this,64,56)}function f(t){return t<<5|t>>>27}function u(t){return t<<30|t>>>2}function h(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(c,i),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,c=0|this._e,l=0;l<16;++l)n[l]=t.readInt32BE(4*l)
for(;l<80;++l)n[l]=(e=n[l-3]^n[l-8]^n[l-14]^n[l-16])<<1|e>>>31
for(var d=0;d<80;++d){var p=~~(d/20),b=f(r)+h(p,i,o,s)+c+n[d]+a[p]|0
c=s,s=o,o=u(i),i=r,r=b}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=c},function(t,e,n){var r=n(1),i=n(5),o=n(2),a=n(0).Buffer,s=new Array(64)
function c(){this.init(),this._w=s,o.call(this,64,56)}r(c,i),c.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},c.prototype._hash=function(){var t=a.allocUnsafe(28)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=c},function(t,e,n){var r=n(1),i=n(6),o=n(2),a=n(0).Buffer,s=new Array(160)
function c(){this.init(),this._w=s,o.call(this,128,112)}r(c,i),c.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},c.prototype._hash=function(){var t=a.allocUnsafe(48)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=c},function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(24),c=n(27),f=(i=c)&&i.__esModule?i:{default:i},u=n(7)
function h(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)})
t(s)}("next")})}}var l=function(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},d=function(t){return t.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*t.length%4)}
function p(t,e,n,i,o){var a=function(t,e){for(var n=r.alloc(t.length),i=0;i<t.length;i++)n[i]=t[i]^e[i%e.length]
return n}(t,i),c=r.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),f={version:"U2F_V2",keyHandle:l(a.toString("base64")),challenge:l(c.toString("base64")),appId:location.origin}
return n&&n("=> "+t.toString("hex")),(0,s.sign)(f,e/1e3).then(function(t){var e=t.signatureData
if("string"==typeof e){var i=r.from(d(e),"base64"),a=void 0
return a=o?i.slice(5):i,n&&n("<= "+a.toString("hex")),a}throw t})}var b=[],v=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)
var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))
return t.unwrap=!0,b.push(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,f.default),a(e,null,[{key:"open",value:function(){var t=h(regeneratorRuntime.mark(function t(n){return arguments.length>1&&void 0!==arguments[1]&&arguments[1],regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new e)
case 1:case"end":return t.stop()}},t,this)}))
return function(e){return t.apply(this,arguments)}}()}]),a(e,[{key:"exchange",value:function(){var t=h(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p(e,this.exchangeTimeout,this.debug,this.scrambleKey,this.unwrap)
case 3:return t.abrupt("return",t.sent)
case 6:if(t.prev=6,t.t0=t.catch(0),"object"!==o(t.t0.metaData)){t.next=14
break}throw 5===t.t0.metaData.code&&(b.forEach(function(t){return t.emit("disconnect")}),b=[]),n=t.t0,r="Failed to sign with Ledger device: U2F "+t.t0.metaData.type,i="U2F_"+t.t0.metaData.code,a=void 0,(a=new u.TransportError(r,i)).originalError=n,a
case 14:throw t.t0
case 15:case"end":return t.stop()}var n,r,i,a},t,this,[[0,6]])}))
return function(e){return t.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(t){this.scrambleKey=r.from(t,"ascii")}},{key:"setUnwrap",value:function(t){this.unwrap=t}},{key:"close",value:function(){return Promise.resolve()}}]),e}()
v.isSupported=s.isSupported,v.list=function(){return(0,s.isSupported)().then(function(t){return t?[null]:[]})},v.listen=function(t){var e=!1
return(0,s.isSupported)().then(function(n){e||(n?(t.next({type:"add",descriptor:null}),t.complete()):t.error(new u.TransportError("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))}),{unsubscribe:function(){e=!0}}},e.default=v},function(t,e,n){"use strict"
t.exports=n(25)},function(t,n,r){"use strict"
t.exports=u
var i=r(26),o="undefined"!=typeof navigator&&!!navigator.userAgent,a=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),s=o&&navigator.userAgent.match(/Edge\/1[2345]/),c=null
function f(t){return c||(c=new t(function(t,e){function n(){t({u2f:null,native:!0})}return o?a?n():(void 0!==window.u2f&&"function"==typeof window.u2f.sign&&t({u2f:window.u2f,native:!0}),s?n():"http:"===location.protocol?n():"undefined"==typeof MessageChannel?n():void i.isSupported(function(e){e?t({u2f:i,native:!1}):n()})):n()})),c}function u(t){return{isSupported:d.bind(t),ensureSupport:b.bind(t),register:v.bind(t),sign:g.bind(t),ErrorCodes:u.ErrorCodes,ErrorNames:u.ErrorNames}}function h(t,e){var n=null!=e?e.errorCode:1,r=u.ErrorNames[""+n],i=new Error(t)
return i.metaData={type:r,code:n},i}function l(t,e){var n={}
return n.promise=new t(function(t,r){n.resolve=t,n.reject=r,e.then(t,r)}),n.promise.cancel=function(e,r){f(t).then(function(t){r&&!t.native&&t.u2f.disconnect(),n.reject(h(e,{errorCode:-1}))})},n}function d(){return f(this).then(function(t){return!!t.u2f})}function p(t){if(!t.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https")
throw new Error("U2F not supported")}}function b(){return f(this).then(p)}function v(t,e,n){var r=this
return Array.isArray(t)||(t=[t]),"number"==typeof e&&void 0===n&&(n=e,e=null),e||(e=[]),l(r,f(r).then(function(i){p(i)
var o=i.native,a=i.u2f
return new r(function(r,i){if(o){var s=t[0].appId
a.register(s,t,e,function(t){t.errorCode?i(h("Registration failed",t)):(delete t.errorCode,r(t))},n)}else a.register(t,e,function(t,e){t?i(t):e.errorCode?i(h("Registration failed",e)):r(e)},n)})})).promise}function g(t,e){var n=this
return Array.isArray(t)||(t=[t]),l(n,f(n).then(function(r){p(r)
var i=r.native,o=r.u2f
return new n(function(n,r){if(i){var a=t[0].appId,s=t[0].challenge
o.sign(a,s,t,function(t){t.errorCode?r(h("Sign failed",t)):(delete t.errorCode,n(t))},e)}else o.sign(t,function(t,e){t?r(t):e.errorCode?r(h("Sign failed",e)):n(e)},e)})})).promise}function m(t){u[t]=function(){if(!e.Promise)throw new Error("The platform doesn't natively support promises")
var n=[].slice.call(arguments)
return u(e.Promise)[t].apply(null,n)}}u.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},u.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},m("isSupported"),m("ensureSupport"),m("register"),m("sign")},function(t,e,n){"use strict"
var r=r||{}
t.exports=r,r.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",r.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},r.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},r.Request,r.Response,r.Error,r.SignRequest,r.SignResponse,r.RegisterRequest,r.RegisterResponse,r.disconnect=function(){r.port_&&r.port_.port_&&(r.port_.port_.disconnect(),r.port_=null)},r.getMessagePort=function(t){if("undefined"!=typeof chrome&&chrome.runtime){var e={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]}
chrome.runtime.sendMessage(r.EXTENSION_ID,e,function(){chrome.runtime.lastError?r.getIframePort_(t):r.getChromeRuntimePort_(t)})}else r.getIframePort_(t)},r.getChromeRuntimePort_=function(t){var e=chrome.runtime.connect(r.EXTENSION_ID,{includeTlsChannelId:!0})
setTimeout(function(){t(null,new r.WrappedChromeRuntimePort_(e))},0)},r.WrappedChromeRuntimePort_=function(t){this.port_=t},r.WrappedChromeRuntimePort_.prototype.postMessage=function(t){this.port_.postMessage(t)},r.WrappedChromeRuntimePort_.prototype.addEventListener=function(t,e){var n=t.toLowerCase()
"message"==n||"onmessage"==n?this.port_.onMessage.addListener(function(t){e({data:t})}):console.error("WrappedChromeRuntimePort only supports onMessage")},r.getIframePort_=function(t){var e="chrome-extension://"+r.EXTENSION_ID,n=document.createElement("iframe")
n.src=e+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n)
var i=!1,o=new MessageChannel,a=function(e){"ready"==e.data?(o.port1.removeEventListener("message",a),i||(i=!0,t(null,o.port1))):console.error('First event on iframe port was not "ready"')}
o.port1.addEventListener("message",a),o.port1.start(),n.addEventListener("load",function(){n.contentWindow.postMessage("init",e,[o.port2])}),setTimeout(function(){i||(i=!0,t(new Error("IFrame extension not supported")))},200)},r.EXTENSION_TIMEOUT_SEC=30,r.port_=null,r.waitingForPort_=[],r.reqCounter_=0,r.callbackMap_={},r.getPortSingleton_=function(t){r.port_?t(null,r.port_):(0==r.waitingForPort_.length&&r.getMessagePort(function(t,e){for(t||(r.port_=e,r.port_.addEventListener("message",r.responseHandler_));r.waitingForPort_.length;)r.waitingForPort_.shift()(t,e)}),r.waitingForPort_.push(t))},r.responseHandler_=function(t){var e=t.data,n=e.requestId
if(n&&r.callbackMap_[n]){var i=r.callbackMap_[n]
delete r.callbackMap_[n],i(null,e.responseData)}else console.error("Unknown or missing requestId in response.")},r.isSupported=function(t){r.getPortSingleton_(function(e,n){t(!e)})},r.sign=function(t,e,n){r.getPortSingleton_(function(i,o){if(i)return e(i)
var a=++r.reqCounter_
r.callbackMap_[a]=e
var s={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:t,timeoutSeconds:void 0!==n?n:r.EXTENSION_TIMEOUT_SEC,requestId:a}
o.postMessage(s)})},r.register=function(t,e,n,i){r.getPortSingleton_(function(o,a){if(o)return n(o)
var s=++r.reqCounter_
r.callbackMap_[s]=n
var c={type:r.MessageTypes.U2F_REGISTER_REQUEST,signRequests:e,registerRequests:t,timeoutSeconds:void 0!==i?i:r.EXTENSION_TIMEOUT_SEC,requestId:s}
a.postMessage(c)})}},function(t,n,i){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.getAltStatusMessage=n.StatusCodes=n.TransportStatusError=n.TransportError=void 0
var o,a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=i(4),c=(o=s)&&o.__esModule?o:{default:o},f=i(7)
function u(t){return function(){var e=t.apply(this,arguments)
return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)})
t(s)}("next")})}}n.TransportError=f.TransportError,n.TransportStatusError=f.TransportStatusError,n.StatusCodes=f.StatusCodes,n.getAltStatusMessage=f.getAltStatusMessage
var h=function(){function t(){var n,i,o=this
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=e.__ledgerDebug||null,this.exchangeTimeout=3e4,this._events=new c.default,this.send=(n=u(regeneratorRuntime.mark(function t(e,n,i,a){var s,c,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.alloc(0),h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[f.StatusCodes.OK]
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(u.length>=256)){t.next=2
break}throw new f.TransportError("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig")
case 2:return t.next=4,o.exchange(r.concat([r.from([e,n,i,a]),r.from([u.length]),u]))
case 4:if(s=t.sent,c=s.readUInt16BE(s.length-2),h.some(function(t){return t===c})){t.next=8
break}throw new f.TransportStatusError(c)
case 8:return t.abrupt("return",s)
case 9:case"end":return t.stop()}},t,o)})),function(t,e,r,i){return n.apply(this,arguments)}),this.exchangeAtomicImpl=(i=u(regeneratorRuntime.mark(function t(e){var n,r,i
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.exchangeBusyPromise){t.next=2
break}throw new f.TransportError("Transport race condition","RaceCondition")
case 2:return n=void 0,r=new Promise(function(t){n=t}),o.exchangeBusyPromise=r,t.prev=5,t.next=8,e()
case 8:return i=t.sent,t.abrupt("return",i)
case 10:return t.prev=10,n&&n(),o.exchangeBusyPromise=null,t.finish(10)
case 14:case"end":return t.stop()}},t,o,[[5,,10,14]])})),function(t){return i.apply(this,arguments)}),this._appAPIlock=null}return a(t,[{key:"on",value:function(t,e){this._events.on(t,e)}},{key:"off",value:function(t,e){this._events.removeListener(t,e)}},{key:"emit",value:function(t){for(var e,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];(e=this._events).emit.apply(e,[t].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}(r)))}},{key:"setDebugMode",value:function(t){this.debug="function"==typeof t?t:t?function(t){return console.log(t)}:null}},{key:"setExchangeTimeout",value:function(t){this.exchangeTimeout=t}},{key:"decorateAppAPIMethods",value:function(t,e,n){var r=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value
t[c]=this.decorateAppAPIMethod(c,t[c],t,n)}}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}},{key:"decorateAppAPIMethod",value:function(t,e,n,r){var i,o=this
return i=u(regeneratorRuntime.mark(function i(){for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c]
var u
return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(u=o._appAPIlock)){i.next=3
break}return i.abrupt("return",Promise.reject(new f.TransportError("Ledger Device is busy (lock "+u+")","TransportLocked")))
case 3:return i.prev=3,o._appAPIlock=t,o.setScrambleKey(r),i.next=8,e.apply(n,s)
case 8:return i.abrupt("return",i.sent)
case 9:return i.prev=9,o._appAPIlock=null,i.finish(9)
case 12:case"end":return i.stop()}},i,o,[[3,,9,12]])})),function(){return i.apply(this,arguments)}}}],[{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments[1]
return new Promise(function(r,i){var o=!1,a=t.listen({next:function(n){o=!0,a&&a.unsubscribe(),s&&clearTimeout(s),t.open(n.descriptor,e).then(r,i)},error:function(t){s&&clearTimeout(s),i(t)},complete:function(){s&&clearTimeout(s),o||i(new f.TransportError(t.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),s=n?setTimeout(function(){a.unsubscribe(),i(new f.TransportError(t.ErrorMessage_ListenTimeout,"ListenTimeout"))},n):null})}}]),t}()
h.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",h.ErrorMessage_NoDeviceFound="No Ledger device found",n.default=h},function(t,e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i={},o=e.createCustomErrorClass=function(t){var e=function(e,n){Object.assign(this,n),this.name=t,this.message=e||t,this.stack=(new Error).stack}
return e.prototype=new Error,i[t]=e,e}
e.deserializeError=function t(e){if("object"===(void 0===e?"undefined":r(e))&&e){try{var n=JSON.parse(e.message)
n.message&&n.name&&(e=n)}catch(t){}var a="Error"===e.name?Error:"string"==typeof e.name?i[e.name]||o(e.name):Error,s=Object.create(a.prototype)
for(var c in e)e.hasOwnProperty(c)&&(s[c]=e[c])
return!s.stack&&Error.captureStackTrace&&Error.captureStackTrace(s,t),s}return new Error(String(e))},e.serializeError=function(t){return t?"object"===(void 0===t?"undefined":r(t))?function t(e,n){var i={}
n.push(e)
var o=!0,a=!1,s=void 0
try{for(var c,f=Object.keys(e)[Symbol.iterator]();!(o=(c=f.next()).done);o=!0){var u=c.value,h=e[u]
"function"!=typeof h&&(h&&"object"===(void 0===h?"undefined":r(h))?-1!==n.indexOf(e[u])?i[u]="[Circular]":i[u]=t(e[u],n.slice(0)):i[u]=h)}}catch(t){a=!0,s=t}finally{try{!o&&f.return&&f.return()}finally{if(a)throw s}}return"string"==typeof e.name&&(i.name=e.name),"string"==typeof e.message&&(i.message=e.message),"string"==typeof e.stack&&(i.stack=e.stack),i}(t,[]):"function"==typeof t?"[Function: "+(t.name||"anonymous")+"]":t:t}},function(t,e,n){"use strict"
n.r(e)
var r=n(8),i=n.n(r)
function o(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n
return e=t,(n=[{key:"strlen",value:function(t){return t?t.length:0}},{key:"strOK",value:function(t){return!!t&&t.length>0}}])&&o(e,n),t}()
function s(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=n(3),f=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n
return e=t,(n=[{key:"paymentOperation",value:function(t,e,n,r){var i={destination:t,asset:n,amount:e,source:r}
return c.Operation.payment(i)}},{key:"manageOfferOperation",value:function(t,e,n,r){var i={selling:e,buying:t,amount:n,price:r,offerId:arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return c.Operation.manageOffer(i)}},{key:"setOptionsOperation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t
return n.source=e,c.Operation.setOptions(n)}},{key:"manageDataOperation",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={name:t,value:a.strOK(e)?e:null,source:n}
return c.Operation.manageData(r)}},{key:"changeTrustOperation",value:function(t,e){var n={asset:t,limit:e,source:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}
return c.Operation.changeTrust(n)}},{key:"allowTrustOperation",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={trustor:t,assetCode:e.getCode(),authorize:n,source:r}
return c.Operation.allowTrust(i)}},{key:"pathPaymentOperation",value:function(t,e,n,r,i){var o={destination:t,sendAsset:e,sendMax:n,destAsset:r,destAmount:i,path:[],source:arguments.length>5&&void 0!==arguments[5]?arguments[5]:null}
return c.Operation.pathPayment(o)}},{key:"multisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=[],a={source:i,signer:{ed25519PublicKey:t,weight:e}}
return o.push(c.Operation.setOptions(a)),a={source:i,medThreshold:n,highThreshold:r},o.push(c.Operation.setOptions(a)),o}},{key:"removeMultisigOperations",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=[],o={source:r,medThreshold:e,highThreshold:n}
return i.push(c.Operation.setOptions(o)),o={source:r,signer:{ed25519PublicKey:t,weight:0}},i.push(c.Operation.setOptions(o)),i}}])&&s(e,n),t}()
function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=n(4),b=new(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}(t):e}(this,l(e).apply(this,arguments))}var n,r
return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,p),n=e,(r=[{key:"log",value:function(t,e){this.emit("transaction",t,e)}}])&&h(n.prototype,r),e}())
Object.freeze(b)
var v=b
function g(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=n(3),y=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e||console.log("StellarAPI constructor missing parameter"),this._horizonServer=e}var e,n
return e=t,(n=[{key:"server",value:function(){return this._horizonServer.server()}},{key:"serverURL",value:function(){return this._horizonServer.serverURL()}},{key:"horizonMetrics",value:function(){var t=this.serverURL()+"/metrics"
return i.a.get(t)}},{key:"accountInfo",value:function(t){return this.server().loadAccount(t)}},{key:"balances",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=[]
return t.balances.forEach(function(t){"native"===t.asset_type?e.push({symbol:"XLM",amount:t.balance,issuer:""}):e.push({symbol:t.asset_code,amount:t.balance,issuer:t.asset_issuer})}),e})}},{key:"balanceForAsset",value:function(t,e){var n=this
return t.publicKey().then(function(t){return n.server().loadAccount(t)}).then(function(t){var n=!0,r=!1,i=void 0
try{for(var o,a=t.balances[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value
if("native"===s.asset_type){if(e.isNative())return s.balance}else if(s.asset_code===e.getCode()&&s.asset_issuer===e.getIssuer())return s.balance}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return"0"})}},{key:"paths",value:function(t,e,n,r){return this.server().paths(t,e,n,r)}},{key:"mergeAccount",value:function(t,e){var n=this,r="",i=""
return t.publicKey().then(function(t){return r=t,e.publicKey()}).then(function(t){return i=t,n.server().loadAccount(t)}).then(function(t){var n=new m.TransactionBuilder(t).setTimeout(m.TimeoutInfinite).addOperation(m.Operation.accountMerge({destination:i,source:r})).build()
return e.signTransaction(n)}).then(function(e){return t.signTransaction(e)}).then(function(t){return n.submitTransaction(t,"merge account")})}},{key:"manageOffer",value:function(t,e,n,r,i,o){var a=this,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null
return this._processAccounts(t,e).then(function(u){var h=f.manageOfferOperation(n,r,i,o,s,u.sourcePublicKey)
return a._submitOperations(u.account,"manage offer",t,e,[h],null,c)})}},{key:"changeTrust",value:function(t,e,n,r){var i=this
return this._processAccounts(t,e).then(function(o){var a=f.changeTrustOperation(n,r,o.sourcePublicKey)
return i._submitOperations(o.account,"change trust",t,e,[a])})}},{key:"allowTrust",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=null
return e.publicKey().then(function(e){return a=e,i._processAccounts(t,o)}).then(function(e){var s=f.allowTrustOperation(a,n,r,e.sourcePublicKey)
return i._submitOperations(e.account,"allow trust",t,o,[s])})}},{key:"makeMultiSig",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=null
return e.publicKey().then(function(e){return o=e,n._processAccounts(t,r)}).then(function(e){var a=f.multisigOperations(o,1,i,i,e.sourcePublicKey)
return n._submitOperations(e.account,"make multisig",t,r,a)})}},{key:"removeMultiSig",value:function(t,e,n){var r=this
return this.removeMultiSigTransaction(t,e,n).then(function(t){return r.submitTransaction(t,"remove multisig")})}},{key:"submitTransaction",value:function(t,e){return this.server().submitTransaction(t).then(function(t){return v.log(t,e),t})}},{key:"removeMultiSigTransaction",value:function(t,e,n){var r=this,i=null
return t.publicKey().then(function(t){return r.server().loadAccount(t)}).then(function(t){return i=t,e.publicKey()}).then(function(e){var r=new m.TransactionBuilder(i,n).setTimeout(m.TimeoutInfinite),o=f.removeMultisigOperations(e,1,1,null),a=!0,s=!1,c=void 0
try{for(var u,h=o[Symbol.iterator]();!(a=(u=h.next()).done);a=!0){var l=u.value
r.addOperation(l)}}catch(t){s=!0,c=t}finally{try{a||null==h.return||h.return()}finally{if(s)throw c}}var d=r.build()
return t.signTransaction(d)}).then(function(t){return e.signTransaction(t)})}},{key:"sendAssetBatch",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=null===o?m.Asset.native():o,u=null,h=[]
return this._processAccounts(t,e).then(function(o){var l=Promise.resolve(),d=!0,p=!1,b=void 0
try{for(var v,g=function(){var t=v.value
l=l.then(function(){return t.publicKey()}).then(function(t){return u=t,i.server().loadAccount(u)}).then(function(t){if(!i._hasAssetTrustline(t,c))throw new Error("No trustline from destination to asset")
return null}).then(function(){var t=f.paymentOperation(u,r,c,o.sourcePublicKey)
return h.push(t),null})},m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0)g()}catch(t){p=!0,b=t}finally{try{d||null==m.return||m.return()}finally{if(p)throw b}}return l.then(function(){return i._submitOperations(o.account,"send asset batch",t,e,h,a,s)})})}},{key:"sendAsset",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=null===o?m.Asset.native():o,u=null
return n.publicKey().then(function(t){return u=t,i.server().loadAccount(u)}).then(function(n){if(!i._hasAssetTrustline(n,c))throw new Error("No trustline from destination to asset")
return i._processAccounts(t,e)}).then(function(n){var o=f.paymentOperation(u,r,c,n.sourcePublicKey)
return i._submitOperations(n.account,"send asset",t,e,[o],a,s)})}},{key:"buyTokens",value:function(t,e,n,r,i){var o=this,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=null
return t.publicKey().then(function(t){return c=t,o.server().loadAccount(t)}).then(function(e){if(!o._hasAssetTrustline(e,n))throw new Error("No trustline from buyer to asset")
return o._processAccounts(t,a)}).then(function(u){var h=f.pathPaymentOperation(c,e,r,n,i,u.sourcePublicKey)
return o._submitOperations(u.account,"buy asset",t,a,[h],null,s)})}},{key:"manageData",value:function(t,e,n,r){var i=this,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
return this._processAccounts(t,e).then(function(a){var s=f.manageDataOperation(n,r,a.sourcePublicKey)
return i._submitOperations(a.account,"manage data",t,e,[s],null,o)})}},{key:"atomicSwap",value:function(t,e,n,r,i,o){var a,s,c=this,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null
return t.publicKey().then(function(t){return a=t,n.publicKey()}).then(function(e){return s=e,c._processAccounts(t,i)}).then(function(h){var l=f.paymentOperation(s,o,e,a),d=f.paymentOperation(a,o,r,s),p=[n]
return u&&(p=p.concat(u)),c._submitOperations(h.account,"atomic swap",t,i,[l,d],null,p)})}},{key:"getFlags",value:function(t){var e=this
return t.publicKey().then(function(t){return e.server().loadAccount(t)}).then(function(t){var e=0
return t.flags.auth_required&&(e|=m.AuthRequiredFlag),t.flags.auth_revocable&&(e|=m.AuthRevocableFlag),e})}},{key:"createAccount",value:function(t,e,n){var r,i=this
return e.publicKey().then(function(e){return r=e,t.publicKey()}).then(function(t){return i.server().loadAccount(t)}).then(function(e){var i={destination:r,startingBalance:n},o=new m.TransactionBuilder(e).setTimeout(m.TimeoutInfinite).addOperation(m.Operation.createAccount(i)).build()
return t.signTransaction(o)}).then(function(t){return i.submitTransaction(t,"create account")}).then(function(t){return i.server().loadAccount(r)})}},{key:"lockAccount",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"invalid",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=null
switch(e){case"low":i={masterWeight:1,lowThreshold:0,medThreshold:2,highThreshold:2}
break
case"lock":i={masterWeight:0,lowThreshold:0,medThreshold:0,highThreshold:0}
break
default:console.log("preset invalid: "+e)}if(!i)throw new Error("lockAccount preset invalid")
return this.setOptions(t,i,n,r)}},{key:"setDomain",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={homeDomain:e}
return this.setOptions(t,i,n,r)}},{key:"setFlags",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={setFlags:e}
return this.setOptions(t,i,n,r)}},{key:"clearFlags",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={clearFlags:e}
return this.setOptions(t,i,n,r)}},{key:"setInflationDestination",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i={inflationDest:e}
return this.setOptions(t,i,n,r)}},{key:"setOptions",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return this._processAccounts(t,r).then(function(o){var a=f.setOptionsOperation(e,o.sourcePublicKey)
return n._submitOperations(o.account,"set options",t,r,[a],null,i)})}},{key:"multiOperation",value:function(t,e,n){var r=this,i=null,o=[]
return t.publicKey().then(function(t){return i=t,e.publicKey()}).then(function(t){return r.server().loadAccount(t)}).then(function(a){var s=Promise.resolve(),c=!0,u=!1,h=void 0
try{for(var l,d=function(){var t=l.value
s=s.then(function(){switch(t.type){case"change-trust":var e=f.changeTrustOperation(t.asset,t.limit,i)
return o.push(e),null
case"multisig":return t.secondWallet.publicKey().then(function(t){var e=f.multisigOperations(t,1,2,2,i)
return o=o.concat(e),null})
case"create-account":return t.newWallet.publicKey().then(function(e){var n={destination:e,startingBalance:t.startingBalance},r=m.Operation.createAccount(n)
return o.push(r),null})
default:return console.log("not handled: "+t.type),null}})},p=n[Symbol.iterator]();!(c=(l=p.next()).done);c=!0)d()}catch(t){u=!0,h=t}finally{try{c||null==p.return||p.return()}finally{if(u)throw h}}return s.then(function(){if(0===o.length)throw new Error("multi operation failed")
return r._submitOperations(a,"multi-operation",t,e,o)})})}},{key:"_hasAssetTrustline",value:function(t,e){return!!e.isNative()||t.balances.some(function(t){return t.asset_code===e.getCode()&&t.asset_issuer===e.getIssuer()})}},{key:"_processAccounts",value:function(t,e){var n=this
return t.publicKey().then(function(t){return e?e.publicKey().then(function(e){return{sourcePublicKey:t,fundingPublicKey:e}}):{sourcePublicKey:t}}).then(function(t){var e=t.sourcePublicKey
return t.fundingPublicKey&&(e=t.fundingPublicKey),n.server().loadAccount(e).then(function(e){return t.account=e,t})})}},{key:"_submitOperations",value:function(t,e,n,r,i){var o=this,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,f=new m.TransactionBuilder(t).setTimeout(m.TimeoutInfinite),u=!0,h=!1,l=void 0
try{for(var d,p=i[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var b=d.value
f.addOperation(b)}}catch(t){h=!0,l=t}finally{try{u||null==p.return||p.return()}finally{if(h)throw l}}a.strOK(s)&&f.addMemo(m.Memo.text(s))
var v=f.build()
return n.signTransaction(v).then(function(t){return r&&!r.equalTo(n)?r.signTransaction(t):t}).then(function(t){if(c&&c.length>0){var i=[]
i.push(n),r&&i.push(r)
var a=o._filteredSigners(c,i)
if(a.length>0){var s=Promise.resolve(),f=!0,u=!1,h=void 0
try{for(var l,d=function(){var e=l.value
s=s.then(function(){return e.signTransaction(t)})},p=a[Symbol.iterator]();!(f=(l=p.next()).done);f=!0)d()}catch(t){u=!0,h=t}finally{try{f||null==p.return||p.return()}finally{if(u)throw h}}return s.then(function(t){return o.submitTransaction(t,e)})}}return o.submitTransaction(t,e)})}},{key:"_filteredSigners",value:function(t,e){var n=t
if(t&&t.length>0&&e&&e.length>0){n=[]
var r=!0,i=!1,o=void 0
try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value
if(c){var f=!1,u=!0,h=!1,l=void 0
try{for(var d,p=e[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){var b=d.value
if(c.equalTo(b)){f=!0
break}}}catch(t){h=!0,l=t}finally{try{u||null==p.return||p.return()}finally{if(h)throw l}}f||n.push(c)}}}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}return n}}])&&g(e.prototype,n),t}()
function _(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=n(3),x=function(){function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2?arguments[2]:void 0
!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._serverURL=e,this._testnet=n,this._testnet?w.Network.useTestNetwork():w.Network.usePublicNetwork(),this._server=new w.Server(e,r)}var e,n
return e=t,(n=[{key:"server",value:function(){return this._testnet?w.Network.useTestNetwork():w.Network.usePublicNetwork(),this._server}},{key:"isTestnet",value:function(){return this._testnet}},{key:"serverURL",value:function(){return this._serverURL}}])&&_(e.prototype,n),t}()
function S(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var k=n(3),E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r
return e=t,r=[{key:"secret",value:function(e){var n=new t
return n._secret=e,n._publicKey=k.Keypair.fromSecret(e).publicKey(),n}},{key:"ledger",value:function(e,n){var r=new t
return r._ledgerAPI=e,r._confirmCallback=n,r}},{key:"public",value:function(e){var n=new t
return n._publicKey=e,n}}],(n=[{key:"publicKey",value:function(){var t=this
return this._publicKey?Promise.resolve(this._publicKey):this._ledgerAPI.getPublicKey().then(function(e){return t._publicKey=e,t._publicKey})}},{key:"equalTo",value:function(t){return!(!this.usingLedger()||!t.usingLedger())||this._publicKey===t._publicKey||this._secret===t._secret}},{key:"usingLedger",value:function(){return void 0!==this._ledgerAPI}},{key:"signTransaction",value:function(t){var e=this
return this.publicKey().then(function(n){if(e.usingLedger())return e._confirmCallback&&e._confirmCallback(),e._ledgerAPI.signTransaction(n,t)
if(a.strOK(e._secret)){var r=k.Keypair.fromSecret(e._secret)
return t.sign(r),t}throw new Error("This wallet does not contain a secret key.")}).then(function(t){return t})}}])&&S(e.prototype,n),r&&S(e,r),t}()
function A(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=n(23).default,C=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n
return e=t,(n=[{key:"setupForNode",value:function(t){this.nodeTransport=t}},{key:"isNodeTransport",value:function(t){return!!this.nodeTransport}},{key:"create",value:function(){return this.nodeTransport?this.nodeTransport.create(2e3,2e3):M.create(2e3,2e3)}}])&&A(e,n),t}()
function I(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var B=n(3),T=n(9).default,O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.transport=null,this.str=null}var e,n
return e=t,(n=[{key:"createTransport",value:function(){var t=this
return this.str?Promise.resolve():C.create().then(function(e){return t.transport=e,t.str=new T(t.transport),null}).catch(function(t){throw console.log(JSON.stringify(t)),t})}},{key:"verifyConnect",value:function(){var t=this
return this.str.getAppConfiguration().then(function(){return null}).catch(function(){throw t.transport.close(),t.str=null,t.transport=null,new Error("connection to ledger failed")})}},{key:"connect",value:function(){var t=this
return this.createTransport().then(function(){return t.verifyConnect().catch(function(e){return t.createTransport().then(function(){return t.verifyConnect()})})}).catch(function(t){throw console.log("Error: connect: "+JSON.stringify(t)),new Error("connection failed")})}},{key:"getPublicKey",value:function(){var t=this
return this.connect().then(function(){return t.str.getPublicKey("44'/148'/0'")}).then(function(t){return t.publicKey}).catch(function(t){throw console.log("Error: getPublicKey: "+JSON.stringify(t)),t})}},{key:"signTransaction",value:function(t,e){var n=this
return this.connect().then(function(){return n.str.signTransaction("44'/148'/0'",e.signatureBase())}).then(function(n){var r=n.signature,i=B.Keypair.fromPublicKey(t)
if(i.verify(e.hash(),r)){var o=i.signatureHint(),a=new B.xdr.DecoratedSignature({hint:o,signature:r})
return e.signatures.push(a),e}throw console.log("Failure: Bad signature"),new Error("Verify signature failed")}).catch(function(t){throw console.log("Error: signTransaction: "+JSON.stringify(t)),t})}}])&&I(e.prototype,n),t}()
function P(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var R=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=n,this.horizon=e,this.order=i,this.records=[],this.index=-1,this.pagingToken=0,this.publicKey=r,this.reachedEnd=!1,this.loading=!1}var e,n
return e=t,(n=[{key:"recordForIndex",value:function(t){if(t>=0&&t<this.records.length?this.index=t:this.index=t>0?this.records.length-1:0,this.records.length>0){var e=this.records[this.index]
return{index:this.index,record:e}}return{}}},{key:"getCurrentPage",value:function(t){var e=this
return new Promise(function(n,r){if(t){var i=e.index+1
if(i>=e.records.length){if(!e.reachedEnd)return e.loadNextPage().then(function(){n(e.recordForIndex(i))})
n(e.recordForIndex(i))}else n(e.recordForIndex(i))}else{var o=e.index-1
n(e.recordForIndex(o))}})}},{key:"next",value:function(){return this.getCurrentPage(!0)}},{key:"previous",value:function(){return this.getCurrentPage(!1)}},{key:"loadNextPage",value:function(){var t=this
return new Promise(function(e,n){if(!t.loading){var r
switch(t.loading=!0,t.type){case"payments":r=t.horizon.server().payments()
break
case"transactions":r=t.horizon.server().transactions()
break
case"operations":r=t.horizon.server().operations()
break
case"effects":r=t.horizon.server().effects()}return r.limit(4).order(t.order),0!==t.pagingToken&&r.cursor(t.pagingToken),r.forAccount(t.publicKey),r.call().then(function(n){if(n.records.length>0){t.records=t.records.concat(n.records)
var r=n.records.length-1
t.pagingToken=n.records[r].paging_token}else console.log("reached end"),t.reachedEnd=!0
t.loading=!1,e(null)}).catch(function(e){t.loading=!1,console.log(e,"Error"),n(null)})}console.log("loading"),e(null)})}}])&&P(e.prototype,n),t}()
n.d(e,"StellarAPI",function(){return y}),n.d(e,"HorizonServer",function(){return x}),n.d(e,"StellarWallet",function(){return E}),n.d(e,"LedgerAPI",function(){return O}),n.d(e,"LedgerAPITransport",function(){return C}),n.d(e,"TransactionLogger",function(){return v}),n.d(e,"StreamCache",function(){return R}),n.d(e,"Utils",function(){return a})}]))}).call(this,n(10),n(5).Buffer)},function(t,e,n){(function(t){!function(t,e){"use strict"
function r(t,e){if(!t)throw new Error(e||"Assertion failed")}function i(t,e){t.super_=e
var n=function(){}
n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}function o(t,e,n){if(o.isBN(t))return t
this.negative=0,this.words=null,this.length=0,this.red=null,null!==t&&("le"!==e&&"be"!==e||(n=e,e=10),this._init(t||0,e||10,n||"be"))}var a
"object"==typeof t?t.exports=o:e.BN=o,o.BN=o,o.wordSize=26
try{a=n(127).Buffer}catch(t){}function s(t,e,n){for(var r=0,i=Math.min(t.length,n),o=e;o<i;o++){var a=t.charCodeAt(o)-48
r<<=4,r|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return r}function c(t,e,n,r){for(var i=0,o=Math.min(t.length,n),a=e;a<o;a++){var s=t.charCodeAt(a)-48
i*=r,i+=s>=49?s-49+10:s>=17?s-17+10:s}return i}o.isBN=function(t){return t instanceof o||null!==t&&"object"==typeof t&&t.constructor.wordSize===o.wordSize&&Array.isArray(t.words)},o.max=function(t,e){return t.cmp(e)>0?t:e},o.min=function(t,e){return t.cmp(e)<0?t:e},o.prototype._init=function(t,e,n){if("number"==typeof t)return this._initNumber(t,e,n)
if("object"==typeof t)return this._initArray(t,e,n)
"hex"===e&&(e=16),r(e===(0|e)&&e>=2&&e<=36)
var i=0
"-"===(t=t.toString().replace(/\s+/g,""))[0]&&i++,16===e?this._parseHex(t,i):this._parseBase(t,e,i),"-"===t[0]&&(this.negative=1),this.strip(),"le"===n&&this._initArray(this.toArray(),e,n)},o.prototype._initNumber=function(t,e,n){t<0&&(this.negative=1,t=-t),t<67108864?(this.words=[67108863&t],this.length=1):t<4503599627370496?(this.words=[67108863&t,t/67108864&67108863],this.length=2):(r(t<9007199254740992),this.words=[67108863&t,t/67108864&67108863,1],this.length=3),"le"===n&&this._initArray(this.toArray(),e,n)},o.prototype._initArray=function(t,e,n){if(r("number"==typeof t.length),t.length<=0)return this.words=[0],this.length=1,this
this.length=Math.ceil(t.length/3),this.words=new Array(this.length)
for(var i=0;i<this.length;i++)this.words[i]=0
var o,a,s=0
if("be"===n)for(i=t.length-1,o=0;i>=0;i-=3)a=t[i]|t[i-1]<<8|t[i-2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
else if("le"===n)for(i=0,o=0;i<t.length;i+=3)a=t[i]|t[i+1]<<8|t[i+2]<<16,this.words[o]|=a<<s&67108863,this.words[o+1]=a>>>26-s&67108863,(s+=24)>=26&&(s-=26,o++)
return this.strip()},o.prototype._parseHex=function(t,e){this.length=Math.ceil((t.length-e)/6),this.words=new Array(this.length)
for(var n=0;n<this.length;n++)this.words[n]=0
var r,i,o=0
for(n=t.length-6,r=0;n>=e;n-=6)i=s(t,n,n+6),this.words[r]|=i<<o&67108863,this.words[r+1]|=i>>>26-o&4194303,(o+=24)>=26&&(o-=26,r++)
n+6!==e&&(i=s(t,e,n+6),this.words[r]|=i<<o&67108863,this.words[r+1]|=i>>>26-o&4194303),this.strip()},o.prototype._parseBase=function(t,e,n){this.words=[0],this.length=1
for(var r=0,i=1;i<=67108863;i*=e)r++
r--,i=i/e|0
for(var o=t.length-n,a=o%r,s=Math.min(o,o-a)+n,f=0,u=n;u<s;u+=r)f=c(t,u,u+r,e),this.imuln(i),this.words[0]+f<67108864?this.words[0]+=f:this._iaddn(f)
if(0!==a){var h=1
for(f=c(t,u,t.length,e),u=0;u<a;u++)h*=e
this.imuln(h),this.words[0]+f<67108864?this.words[0]+=f:this._iaddn(f)}},o.prototype.copy=function(t){t.words=new Array(this.length)
for(var e=0;e<this.length;e++)t.words[e]=this.words[e]
t.length=this.length,t.negative=this.negative,t.red=this.red},o.prototype.clone=function(){var t=new o(null)
return this.copy(t),t},o.prototype._expand=function(t){for(;this.length<t;)this.words[this.length++]=0
return this},o.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--
return this._normSign()},o.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},o.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}
var f=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],u=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],h=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176]
function l(t,e,n){n.negative=e.negative^t.negative
var r=t.length+e.length|0
n.length=r,r=r-1|0
var i=0|t.words[0],o=0|e.words[0],a=i*o,s=67108863&a,c=a/67108864|0
n.words[0]=s
for(var f=1;f<r;f++){for(var u=c>>>26,h=67108863&c,l=Math.min(f,e.length-1),d=Math.max(0,f-t.length+1);d<=l;d++){var p=f-d|0
u+=(a=(i=0|t.words[p])*(o=0|e.words[d])+h)/67108864|0,h=67108863&a}n.words[f]=0|h,c=0|u}return 0!==c?n.words[f]=0|c:n.length--,n.strip()}o.prototype.toString=function(t,e){var n
if(e=0|e||1,16===(t=t||10)||"hex"===t){n=""
for(var i=0,o=0,a=0;a<this.length;a++){var s=this.words[a],c=(16777215&(s<<i|o)).toString(16)
n=0!==(o=s>>>24-i&16777215)||a!==this.length-1?f[6-c.length]+c+n:c+n,(i+=2)>=26&&(i-=26,a--)}for(0!==o&&(n=o.toString(16)+n);n.length%e!=0;)n="0"+n
return 0!==this.negative&&(n="-"+n),n}if(t===(0|t)&&t>=2&&t<=36){var l=u[t],d=h[t]
n=""
var p=this.clone()
for(p.negative=0;!p.isZero();){var b=p.modn(d).toString(t)
n=(p=p.idivn(d)).isZero()?b+n:f[l-b.length]+b+n}for(this.isZero()&&(n="0"+n);n.length%e!=0;)n="0"+n
return 0!==this.negative&&(n="-"+n),n}r(!1,"Base should be between 2 and 36")},o.prototype.toNumber=function(){var t=this.words[0]
return 2===this.length?t+=67108864*this.words[1]:3===this.length&&1===this.words[2]?t+=4503599627370496+67108864*this.words[1]:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-t:t},o.prototype.toJSON=function(){return this.toString(16)},o.prototype.toBuffer=function(t,e){return r(void 0!==a),this.toArrayLike(a,t,e)},o.prototype.toArray=function(t,e){return this.toArrayLike(Array,t,e)},o.prototype.toArrayLike=function(t,e,n){var i=this.byteLength(),o=n||Math.max(1,i)
r(i<=o,"byte array longer than desired length"),r(o>0,"Requested array length <= 0"),this.strip()
var a,s,c="le"===e,f=new t(o),u=this.clone()
if(c){for(s=0;!u.isZero();s++)a=u.andln(255),u.iushrn(8),f[s]=a
for(;s<o;s++)f[s]=0}else{for(s=0;s<o-i;s++)f[s]=0
for(s=0;!u.isZero();s++)a=u.andln(255),u.iushrn(8),f[o-s-1]=a}return f},Math.clz32?o.prototype._countBits=function(t){return 32-Math.clz32(t)}:o.prototype._countBits=function(t){var e=t,n=0
return e>=4096&&(n+=13,e>>>=13),e>=64&&(n+=7,e>>>=7),e>=8&&(n+=4,e>>>=4),e>=2&&(n+=2,e>>>=2),n+e},o.prototype._zeroBits=function(t){if(0===t)return 26
var e=t,n=0
return 0==(8191&e)&&(n+=13,e>>>=13),0==(127&e)&&(n+=7,e>>>=7),0==(15&e)&&(n+=4,e>>>=4),0==(3&e)&&(n+=2,e>>>=2),0==(1&e)&&n++,n},o.prototype.bitLength=function(){var t=this.words[this.length-1],e=this._countBits(t)
return 26*(this.length-1)+e},o.prototype.zeroBits=function(){if(this.isZero())return 0
for(var t=0,e=0;e<this.length;e++){var n=this._zeroBits(this.words[e])
if(t+=n,26!==n)break}return t},o.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},o.prototype.toTwos=function(t){return 0!==this.negative?this.abs().inotn(t).iaddn(1):this.clone()},o.prototype.fromTwos=function(t){return this.testn(t-1)?this.notn(t).iaddn(1).ineg():this.clone()},o.prototype.isNeg=function(){return 0!==this.negative},o.prototype.neg=function(){return this.clone().ineg()},o.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},o.prototype.iuor=function(t){for(;this.length<t.length;)this.words[this.length++]=0
for(var e=0;e<t.length;e++)this.words[e]=this.words[e]|t.words[e]
return this.strip()},o.prototype.ior=function(t){return r(0==(this.negative|t.negative)),this.iuor(t)},o.prototype.or=function(t){return this.length>t.length?this.clone().ior(t):t.clone().ior(this)},o.prototype.uor=function(t){return this.length>t.length?this.clone().iuor(t):t.clone().iuor(this)},o.prototype.iuand=function(t){var e
e=this.length>t.length?t:this
for(var n=0;n<e.length;n++)this.words[n]=this.words[n]&t.words[n]
return this.length=e.length,this.strip()},o.prototype.iand=function(t){return r(0==(this.negative|t.negative)),this.iuand(t)},o.prototype.and=function(t){return this.length>t.length?this.clone().iand(t):t.clone().iand(this)},o.prototype.uand=function(t){return this.length>t.length?this.clone().iuand(t):t.clone().iuand(this)},o.prototype.iuxor=function(t){var e,n
this.length>t.length?(e=this,n=t):(e=t,n=this)
for(var r=0;r<n.length;r++)this.words[r]=e.words[r]^n.words[r]
if(this!==e)for(;r<e.length;r++)this.words[r]=e.words[r]
return this.length=e.length,this.strip()},o.prototype.ixor=function(t){return r(0==(this.negative|t.negative)),this.iuxor(t)},o.prototype.xor=function(t){return this.length>t.length?this.clone().ixor(t):t.clone().ixor(this)},o.prototype.uxor=function(t){return this.length>t.length?this.clone().iuxor(t):t.clone().iuxor(this)},o.prototype.inotn=function(t){r("number"==typeof t&&t>=0)
var e=0|Math.ceil(t/26),n=t%26
this._expand(e),n>0&&e--
for(var i=0;i<e;i++)this.words[i]=67108863&~this.words[i]
return n>0&&(this.words[i]=~this.words[i]&67108863>>26-n),this.strip()},o.prototype.notn=function(t){return this.clone().inotn(t)},o.prototype.setn=function(t,e){r("number"==typeof t&&t>=0)
var n=t/26|0,i=t%26
return this._expand(n+1),this.words[n]=e?this.words[n]|1<<i:this.words[n]&~(1<<i),this.strip()},o.prototype.iadd=function(t){var e,n,r
if(0!==this.negative&&0===t.negative)return this.negative=0,e=this.isub(t),this.negative^=1,this._normSign()
if(0===this.negative&&0!==t.negative)return t.negative=0,e=this.isub(t),t.negative=1,e._normSign()
this.length>t.length?(n=this,r=t):(n=t,r=this)
for(var i=0,o=0;o<r.length;o++)e=(0|n.words[o])+(0|r.words[o])+i,this.words[o]=67108863&e,i=e>>>26
for(;0!==i&&o<n.length;o++)e=(0|n.words[o])+i,this.words[o]=67108863&e,i=e>>>26
if(this.length=n.length,0!==i)this.words[this.length]=i,this.length++
else if(n!==this)for(;o<n.length;o++)this.words[o]=n.words[o]
return this},o.prototype.add=function(t){var e
return 0!==t.negative&&0===this.negative?(t.negative=0,e=this.sub(t),t.negative^=1,e):0===t.negative&&0!==this.negative?(this.negative=0,e=t.sub(this),this.negative=1,e):this.length>t.length?this.clone().iadd(t):t.clone().iadd(this)},o.prototype.isub=function(t){if(0!==t.negative){t.negative=0
var e=this.iadd(t)
return t.negative=1,e._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(t),this.negative=1,this._normSign()
var n,r,i=this.cmp(t)
if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this
i>0?(n=this,r=t):(n=t,r=this)
for(var o=0,a=0;a<r.length;a++)o=(e=(0|n.words[a])-(0|r.words[a])+o)>>26,this.words[a]=67108863&e
for(;0!==o&&a<n.length;a++)o=(e=(0|n.words[a])+o)>>26,this.words[a]=67108863&e
if(0===o&&a<n.length&&n!==this)for(;a<n.length;a++)this.words[a]=n.words[a]
return this.length=Math.max(this.length,a),n!==this&&(this.negative=1),this.strip()},o.prototype.sub=function(t){return this.clone().isub(t)}
var d=function(t,e,n){var r,i,o,a=t.words,s=e.words,c=n.words,f=0,u=0|a[0],h=8191&u,l=u>>>13,d=0|a[1],p=8191&d,b=d>>>13,v=0|a[2],g=8191&v,m=v>>>13,y=0|a[3],_=8191&y,w=y>>>13,x=0|a[4],S=8191&x,k=x>>>13,E=0|a[5],A=8191&E,M=E>>>13,C=0|a[6],I=8191&C,B=C>>>13,T=0|a[7],O=8191&T,P=T>>>13,R=0|a[8],D=8191&R,N=R>>>13,L=0|a[9],j=8191&L,U=L>>>13,z=0|s[0],q=8191&z,F=z>>>13,K=0|s[1],$=8191&K,H=K>>>13,W=0|s[2],V=8191&W,Y=W>>>13,X=0|s[3],G=8191&X,J=X>>>13,Z=0|s[4],Q=8191&Z,tt=Z>>>13,et=0|s[5],nt=8191&et,rt=et>>>13,it=0|s[6],ot=8191&it,at=it>>>13,st=0|s[7],ct=8191&st,ft=st>>>13,ut=0|s[8],ht=8191&ut,lt=ut>>>13,dt=0|s[9],pt=8191&dt,bt=dt>>>13
n.negative=t.negative^e.negative,n.length=19
var vt=(f+(r=Math.imul(h,q))|0)+((8191&(i=(i=Math.imul(h,F))+Math.imul(l,q)|0))<<13)|0
f=((o=Math.imul(l,F))+(i>>>13)|0)+(vt>>>26)|0,vt&=67108863,r=Math.imul(p,q),i=(i=Math.imul(p,F))+Math.imul(b,q)|0,o=Math.imul(b,F)
var gt=(f+(r=r+Math.imul(h,$)|0)|0)+((8191&(i=(i=i+Math.imul(h,H)|0)+Math.imul(l,$)|0))<<13)|0
f=((o=o+Math.imul(l,H)|0)+(i>>>13)|0)+(gt>>>26)|0,gt&=67108863,r=Math.imul(g,q),i=(i=Math.imul(g,F))+Math.imul(m,q)|0,o=Math.imul(m,F),r=r+Math.imul(p,$)|0,i=(i=i+Math.imul(p,H)|0)+Math.imul(b,$)|0,o=o+Math.imul(b,H)|0
var mt=(f+(r=r+Math.imul(h,V)|0)|0)+((8191&(i=(i=i+Math.imul(h,Y)|0)+Math.imul(l,V)|0))<<13)|0
f=((o=o+Math.imul(l,Y)|0)+(i>>>13)|0)+(mt>>>26)|0,mt&=67108863,r=Math.imul(_,q),i=(i=Math.imul(_,F))+Math.imul(w,q)|0,o=Math.imul(w,F),r=r+Math.imul(g,$)|0,i=(i=i+Math.imul(g,H)|0)+Math.imul(m,$)|0,o=o+Math.imul(m,H)|0,r=r+Math.imul(p,V)|0,i=(i=i+Math.imul(p,Y)|0)+Math.imul(b,V)|0,o=o+Math.imul(b,Y)|0
var yt=(f+(r=r+Math.imul(h,G)|0)|0)+((8191&(i=(i=i+Math.imul(h,J)|0)+Math.imul(l,G)|0))<<13)|0
f=((o=o+Math.imul(l,J)|0)+(i>>>13)|0)+(yt>>>26)|0,yt&=67108863,r=Math.imul(S,q),i=(i=Math.imul(S,F))+Math.imul(k,q)|0,o=Math.imul(k,F),r=r+Math.imul(_,$)|0,i=(i=i+Math.imul(_,H)|0)+Math.imul(w,$)|0,o=o+Math.imul(w,H)|0,r=r+Math.imul(g,V)|0,i=(i=i+Math.imul(g,Y)|0)+Math.imul(m,V)|0,o=o+Math.imul(m,Y)|0,r=r+Math.imul(p,G)|0,i=(i=i+Math.imul(p,J)|0)+Math.imul(b,G)|0,o=o+Math.imul(b,J)|0
var _t=(f+(r=r+Math.imul(h,Q)|0)|0)+((8191&(i=(i=i+Math.imul(h,tt)|0)+Math.imul(l,Q)|0))<<13)|0
f=((o=o+Math.imul(l,tt)|0)+(i>>>13)|0)+(_t>>>26)|0,_t&=67108863,r=Math.imul(A,q),i=(i=Math.imul(A,F))+Math.imul(M,q)|0,o=Math.imul(M,F),r=r+Math.imul(S,$)|0,i=(i=i+Math.imul(S,H)|0)+Math.imul(k,$)|0,o=o+Math.imul(k,H)|0,r=r+Math.imul(_,V)|0,i=(i=i+Math.imul(_,Y)|0)+Math.imul(w,V)|0,o=o+Math.imul(w,Y)|0,r=r+Math.imul(g,G)|0,i=(i=i+Math.imul(g,J)|0)+Math.imul(m,G)|0,o=o+Math.imul(m,J)|0,r=r+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,tt)|0)+Math.imul(b,Q)|0,o=o+Math.imul(b,tt)|0
var wt=(f+(r=r+Math.imul(h,nt)|0)|0)+((8191&(i=(i=i+Math.imul(h,rt)|0)+Math.imul(l,nt)|0))<<13)|0
f=((o=o+Math.imul(l,rt)|0)+(i>>>13)|0)+(wt>>>26)|0,wt&=67108863,r=Math.imul(I,q),i=(i=Math.imul(I,F))+Math.imul(B,q)|0,o=Math.imul(B,F),r=r+Math.imul(A,$)|0,i=(i=i+Math.imul(A,H)|0)+Math.imul(M,$)|0,o=o+Math.imul(M,H)|0,r=r+Math.imul(S,V)|0,i=(i=i+Math.imul(S,Y)|0)+Math.imul(k,V)|0,o=o+Math.imul(k,Y)|0,r=r+Math.imul(_,G)|0,i=(i=i+Math.imul(_,J)|0)+Math.imul(w,G)|0,o=o+Math.imul(w,J)|0,r=r+Math.imul(g,Q)|0,i=(i=i+Math.imul(g,tt)|0)+Math.imul(m,Q)|0,o=o+Math.imul(m,tt)|0,r=r+Math.imul(p,nt)|0,i=(i=i+Math.imul(p,rt)|0)+Math.imul(b,nt)|0,o=o+Math.imul(b,rt)|0
var xt=(f+(r=r+Math.imul(h,ot)|0)|0)+((8191&(i=(i=i+Math.imul(h,at)|0)+Math.imul(l,ot)|0))<<13)|0
f=((o=o+Math.imul(l,at)|0)+(i>>>13)|0)+(xt>>>26)|0,xt&=67108863,r=Math.imul(O,q),i=(i=Math.imul(O,F))+Math.imul(P,q)|0,o=Math.imul(P,F),r=r+Math.imul(I,$)|0,i=(i=i+Math.imul(I,H)|0)+Math.imul(B,$)|0,o=o+Math.imul(B,H)|0,r=r+Math.imul(A,V)|0,i=(i=i+Math.imul(A,Y)|0)+Math.imul(M,V)|0,o=o+Math.imul(M,Y)|0,r=r+Math.imul(S,G)|0,i=(i=i+Math.imul(S,J)|0)+Math.imul(k,G)|0,o=o+Math.imul(k,J)|0,r=r+Math.imul(_,Q)|0,i=(i=i+Math.imul(_,tt)|0)+Math.imul(w,Q)|0,o=o+Math.imul(w,tt)|0,r=r+Math.imul(g,nt)|0,i=(i=i+Math.imul(g,rt)|0)+Math.imul(m,nt)|0,o=o+Math.imul(m,rt)|0,r=r+Math.imul(p,ot)|0,i=(i=i+Math.imul(p,at)|0)+Math.imul(b,ot)|0,o=o+Math.imul(b,at)|0
var St=(f+(r=r+Math.imul(h,ct)|0)|0)+((8191&(i=(i=i+Math.imul(h,ft)|0)+Math.imul(l,ct)|0))<<13)|0
f=((o=o+Math.imul(l,ft)|0)+(i>>>13)|0)+(St>>>26)|0,St&=67108863,r=Math.imul(D,q),i=(i=Math.imul(D,F))+Math.imul(N,q)|0,o=Math.imul(N,F),r=r+Math.imul(O,$)|0,i=(i=i+Math.imul(O,H)|0)+Math.imul(P,$)|0,o=o+Math.imul(P,H)|0,r=r+Math.imul(I,V)|0,i=(i=i+Math.imul(I,Y)|0)+Math.imul(B,V)|0,o=o+Math.imul(B,Y)|0,r=r+Math.imul(A,G)|0,i=(i=i+Math.imul(A,J)|0)+Math.imul(M,G)|0,o=o+Math.imul(M,J)|0,r=r+Math.imul(S,Q)|0,i=(i=i+Math.imul(S,tt)|0)+Math.imul(k,Q)|0,o=o+Math.imul(k,tt)|0,r=r+Math.imul(_,nt)|0,i=(i=i+Math.imul(_,rt)|0)+Math.imul(w,nt)|0,o=o+Math.imul(w,rt)|0,r=r+Math.imul(g,ot)|0,i=(i=i+Math.imul(g,at)|0)+Math.imul(m,ot)|0,o=o+Math.imul(m,at)|0,r=r+Math.imul(p,ct)|0,i=(i=i+Math.imul(p,ft)|0)+Math.imul(b,ct)|0,o=o+Math.imul(b,ft)|0
var kt=(f+(r=r+Math.imul(h,ht)|0)|0)+((8191&(i=(i=i+Math.imul(h,lt)|0)+Math.imul(l,ht)|0))<<13)|0
f=((o=o+Math.imul(l,lt)|0)+(i>>>13)|0)+(kt>>>26)|0,kt&=67108863,r=Math.imul(j,q),i=(i=Math.imul(j,F))+Math.imul(U,q)|0,o=Math.imul(U,F),r=r+Math.imul(D,$)|0,i=(i=i+Math.imul(D,H)|0)+Math.imul(N,$)|0,o=o+Math.imul(N,H)|0,r=r+Math.imul(O,V)|0,i=(i=i+Math.imul(O,Y)|0)+Math.imul(P,V)|0,o=o+Math.imul(P,Y)|0,r=r+Math.imul(I,G)|0,i=(i=i+Math.imul(I,J)|0)+Math.imul(B,G)|0,o=o+Math.imul(B,J)|0,r=r+Math.imul(A,Q)|0,i=(i=i+Math.imul(A,tt)|0)+Math.imul(M,Q)|0,o=o+Math.imul(M,tt)|0,r=r+Math.imul(S,nt)|0,i=(i=i+Math.imul(S,rt)|0)+Math.imul(k,nt)|0,o=o+Math.imul(k,rt)|0,r=r+Math.imul(_,ot)|0,i=(i=i+Math.imul(_,at)|0)+Math.imul(w,ot)|0,o=o+Math.imul(w,at)|0,r=r+Math.imul(g,ct)|0,i=(i=i+Math.imul(g,ft)|0)+Math.imul(m,ct)|0,o=o+Math.imul(m,ft)|0,r=r+Math.imul(p,ht)|0,i=(i=i+Math.imul(p,lt)|0)+Math.imul(b,ht)|0,o=o+Math.imul(b,lt)|0
var Et=(f+(r=r+Math.imul(h,pt)|0)|0)+((8191&(i=(i=i+Math.imul(h,bt)|0)+Math.imul(l,pt)|0))<<13)|0
f=((o=o+Math.imul(l,bt)|0)+(i>>>13)|0)+(Et>>>26)|0,Et&=67108863,r=Math.imul(j,$),i=(i=Math.imul(j,H))+Math.imul(U,$)|0,o=Math.imul(U,H),r=r+Math.imul(D,V)|0,i=(i=i+Math.imul(D,Y)|0)+Math.imul(N,V)|0,o=o+Math.imul(N,Y)|0,r=r+Math.imul(O,G)|0,i=(i=i+Math.imul(O,J)|0)+Math.imul(P,G)|0,o=o+Math.imul(P,J)|0,r=r+Math.imul(I,Q)|0,i=(i=i+Math.imul(I,tt)|0)+Math.imul(B,Q)|0,o=o+Math.imul(B,tt)|0,r=r+Math.imul(A,nt)|0,i=(i=i+Math.imul(A,rt)|0)+Math.imul(M,nt)|0,o=o+Math.imul(M,rt)|0,r=r+Math.imul(S,ot)|0,i=(i=i+Math.imul(S,at)|0)+Math.imul(k,ot)|0,o=o+Math.imul(k,at)|0,r=r+Math.imul(_,ct)|0,i=(i=i+Math.imul(_,ft)|0)+Math.imul(w,ct)|0,o=o+Math.imul(w,ft)|0,r=r+Math.imul(g,ht)|0,i=(i=i+Math.imul(g,lt)|0)+Math.imul(m,ht)|0,o=o+Math.imul(m,lt)|0
var At=(f+(r=r+Math.imul(p,pt)|0)|0)+((8191&(i=(i=i+Math.imul(p,bt)|0)+Math.imul(b,pt)|0))<<13)|0
f=((o=o+Math.imul(b,bt)|0)+(i>>>13)|0)+(At>>>26)|0,At&=67108863,r=Math.imul(j,V),i=(i=Math.imul(j,Y))+Math.imul(U,V)|0,o=Math.imul(U,Y),r=r+Math.imul(D,G)|0,i=(i=i+Math.imul(D,J)|0)+Math.imul(N,G)|0,o=o+Math.imul(N,J)|0,r=r+Math.imul(O,Q)|0,i=(i=i+Math.imul(O,tt)|0)+Math.imul(P,Q)|0,o=o+Math.imul(P,tt)|0,r=r+Math.imul(I,nt)|0,i=(i=i+Math.imul(I,rt)|0)+Math.imul(B,nt)|0,o=o+Math.imul(B,rt)|0,r=r+Math.imul(A,ot)|0,i=(i=i+Math.imul(A,at)|0)+Math.imul(M,ot)|0,o=o+Math.imul(M,at)|0,r=r+Math.imul(S,ct)|0,i=(i=i+Math.imul(S,ft)|0)+Math.imul(k,ct)|0,o=o+Math.imul(k,ft)|0,r=r+Math.imul(_,ht)|0,i=(i=i+Math.imul(_,lt)|0)+Math.imul(w,ht)|0,o=o+Math.imul(w,lt)|0
var Mt=(f+(r=r+Math.imul(g,pt)|0)|0)+((8191&(i=(i=i+Math.imul(g,bt)|0)+Math.imul(m,pt)|0))<<13)|0
f=((o=o+Math.imul(m,bt)|0)+(i>>>13)|0)+(Mt>>>26)|0,Mt&=67108863,r=Math.imul(j,G),i=(i=Math.imul(j,J))+Math.imul(U,G)|0,o=Math.imul(U,J),r=r+Math.imul(D,Q)|0,i=(i=i+Math.imul(D,tt)|0)+Math.imul(N,Q)|0,o=o+Math.imul(N,tt)|0,r=r+Math.imul(O,nt)|0,i=(i=i+Math.imul(O,rt)|0)+Math.imul(P,nt)|0,o=o+Math.imul(P,rt)|0,r=r+Math.imul(I,ot)|0,i=(i=i+Math.imul(I,at)|0)+Math.imul(B,ot)|0,o=o+Math.imul(B,at)|0,r=r+Math.imul(A,ct)|0,i=(i=i+Math.imul(A,ft)|0)+Math.imul(M,ct)|0,o=o+Math.imul(M,ft)|0,r=r+Math.imul(S,ht)|0,i=(i=i+Math.imul(S,lt)|0)+Math.imul(k,ht)|0,o=o+Math.imul(k,lt)|0
var Ct=(f+(r=r+Math.imul(_,pt)|0)|0)+((8191&(i=(i=i+Math.imul(_,bt)|0)+Math.imul(w,pt)|0))<<13)|0
f=((o=o+Math.imul(w,bt)|0)+(i>>>13)|0)+(Ct>>>26)|0,Ct&=67108863,r=Math.imul(j,Q),i=(i=Math.imul(j,tt))+Math.imul(U,Q)|0,o=Math.imul(U,tt),r=r+Math.imul(D,nt)|0,i=(i=i+Math.imul(D,rt)|0)+Math.imul(N,nt)|0,o=o+Math.imul(N,rt)|0,r=r+Math.imul(O,ot)|0,i=(i=i+Math.imul(O,at)|0)+Math.imul(P,ot)|0,o=o+Math.imul(P,at)|0,r=r+Math.imul(I,ct)|0,i=(i=i+Math.imul(I,ft)|0)+Math.imul(B,ct)|0,o=o+Math.imul(B,ft)|0,r=r+Math.imul(A,ht)|0,i=(i=i+Math.imul(A,lt)|0)+Math.imul(M,ht)|0,o=o+Math.imul(M,lt)|0
var It=(f+(r=r+Math.imul(S,pt)|0)|0)+((8191&(i=(i=i+Math.imul(S,bt)|0)+Math.imul(k,pt)|0))<<13)|0
f=((o=o+Math.imul(k,bt)|0)+(i>>>13)|0)+(It>>>26)|0,It&=67108863,r=Math.imul(j,nt),i=(i=Math.imul(j,rt))+Math.imul(U,nt)|0,o=Math.imul(U,rt),r=r+Math.imul(D,ot)|0,i=(i=i+Math.imul(D,at)|0)+Math.imul(N,ot)|0,o=o+Math.imul(N,at)|0,r=r+Math.imul(O,ct)|0,i=(i=i+Math.imul(O,ft)|0)+Math.imul(P,ct)|0,o=o+Math.imul(P,ft)|0,r=r+Math.imul(I,ht)|0,i=(i=i+Math.imul(I,lt)|0)+Math.imul(B,ht)|0,o=o+Math.imul(B,lt)|0
var Bt=(f+(r=r+Math.imul(A,pt)|0)|0)+((8191&(i=(i=i+Math.imul(A,bt)|0)+Math.imul(M,pt)|0))<<13)|0
f=((o=o+Math.imul(M,bt)|0)+(i>>>13)|0)+(Bt>>>26)|0,Bt&=67108863,r=Math.imul(j,ot),i=(i=Math.imul(j,at))+Math.imul(U,ot)|0,o=Math.imul(U,at),r=r+Math.imul(D,ct)|0,i=(i=i+Math.imul(D,ft)|0)+Math.imul(N,ct)|0,o=o+Math.imul(N,ft)|0,r=r+Math.imul(O,ht)|0,i=(i=i+Math.imul(O,lt)|0)+Math.imul(P,ht)|0,o=o+Math.imul(P,lt)|0
var Tt=(f+(r=r+Math.imul(I,pt)|0)|0)+((8191&(i=(i=i+Math.imul(I,bt)|0)+Math.imul(B,pt)|0))<<13)|0
f=((o=o+Math.imul(B,bt)|0)+(i>>>13)|0)+(Tt>>>26)|0,Tt&=67108863,r=Math.imul(j,ct),i=(i=Math.imul(j,ft))+Math.imul(U,ct)|0,o=Math.imul(U,ft),r=r+Math.imul(D,ht)|0,i=(i=i+Math.imul(D,lt)|0)+Math.imul(N,ht)|0,o=o+Math.imul(N,lt)|0
var Ot=(f+(r=r+Math.imul(O,pt)|0)|0)+((8191&(i=(i=i+Math.imul(O,bt)|0)+Math.imul(P,pt)|0))<<13)|0
f=((o=o+Math.imul(P,bt)|0)+(i>>>13)|0)+(Ot>>>26)|0,Ot&=67108863,r=Math.imul(j,ht),i=(i=Math.imul(j,lt))+Math.imul(U,ht)|0,o=Math.imul(U,lt)
var Pt=(f+(r=r+Math.imul(D,pt)|0)|0)+((8191&(i=(i=i+Math.imul(D,bt)|0)+Math.imul(N,pt)|0))<<13)|0
f=((o=o+Math.imul(N,bt)|0)+(i>>>13)|0)+(Pt>>>26)|0,Pt&=67108863
var Rt=(f+(r=Math.imul(j,pt))|0)+((8191&(i=(i=Math.imul(j,bt))+Math.imul(U,pt)|0))<<13)|0
return f=((o=Math.imul(U,bt))+(i>>>13)|0)+(Rt>>>26)|0,Rt&=67108863,c[0]=vt,c[1]=gt,c[2]=mt,c[3]=yt,c[4]=_t,c[5]=wt,c[6]=xt,c[7]=St,c[8]=kt,c[9]=Et,c[10]=At,c[11]=Mt,c[12]=Ct,c[13]=It,c[14]=Bt,c[15]=Tt,c[16]=Ot,c[17]=Pt,c[18]=Rt,0!==f&&(c[19]=f,n.length++),n}
function p(t,e,n){return(new b).mulp(t,e,n)}function b(t,e){this.x=t,this.y=e}Math.imul||(d=l),o.prototype.mulTo=function(t,e){var n=this.length+t.length
return 10===this.length&&10===t.length?d(this,t,e):n<63?l(this,t,e):n<1024?function(t,e,n){n.negative=e.negative^t.negative,n.length=t.length+e.length
for(var r=0,i=0,o=0;o<n.length-1;o++){var a=i
i=0
for(var s=67108863&r,c=Math.min(o,e.length-1),f=Math.max(0,o-t.length+1);f<=c;f++){var u=o-f,h=(0|t.words[u])*(0|e.words[f]),l=67108863&h
s=67108863&(l=l+s|0),i+=(a=(a=a+(h/67108864|0)|0)+(l>>>26)|0)>>>26,a&=67108863}n.words[o]=s,r=a,a=i}return 0!==r?n.words[o]=r:n.length--,n.strip()}(this,t,e):p(this,t,e)},b.prototype.makeRBT=function(t){for(var e=new Array(t),n=o.prototype._countBits(t)-1,r=0;r<t;r++)e[r]=this.revBin(r,n,t)
return e},b.prototype.revBin=function(t,e,n){if(0===t||t===n-1)return t
for(var r=0,i=0;i<e;i++)r|=(1&t)<<e-i-1,t>>=1
return r},b.prototype.permute=function(t,e,n,r,i,o){for(var a=0;a<o;a++)r[a]=e[t[a]],i[a]=n[t[a]]},b.prototype.transform=function(t,e,n,r,i,o){this.permute(o,t,e,n,r,i)
for(var a=1;a<i;a<<=1)for(var s=a<<1,c=Math.cos(2*Math.PI/s),f=Math.sin(2*Math.PI/s),u=0;u<i;u+=s)for(var h=c,l=f,d=0;d<a;d++){var p=n[u+d],b=r[u+d],v=n[u+d+a],g=r[u+d+a],m=h*v-l*g
g=h*g+l*v,v=m,n[u+d]=p+v,r[u+d]=b+g,n[u+d+a]=p-v,r[u+d+a]=b-g,d!==s&&(m=c*h-f*l,l=c*l+f*h,h=m)}},b.prototype.guessLen13b=function(t,e){var n=1|Math.max(e,t),r=1&n,i=0
for(n=n/2|0;n;n>>>=1)i++
return 1<<i+1+r},b.prototype.conjugate=function(t,e,n){if(!(n<=1))for(var r=0;r<n/2;r++){var i=t[r]
t[r]=t[n-r-1],t[n-r-1]=i,i=e[r],e[r]=-e[n-r-1],e[n-r-1]=-i}},b.prototype.normalize13b=function(t,e){for(var n=0,r=0;r<e/2;r++){var i=8192*Math.round(t[2*r+1]/e)+Math.round(t[2*r]/e)+n
t[r]=67108863&i,n=i<67108864?0:i/67108864|0}return t},b.prototype.convert13b=function(t,e,n,i){for(var o=0,a=0;a<e;a++)o+=0|t[a],n[2*a]=8191&o,o>>>=13,n[2*a+1]=8191&o,o>>>=13
for(a=2*e;a<i;++a)n[a]=0
r(0===o),r(0==(-8192&o))},b.prototype.stub=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=0
return e},b.prototype.mulp=function(t,e,n){var r=2*this.guessLen13b(t.length,e.length),i=this.makeRBT(r),o=this.stub(r),a=new Array(r),s=new Array(r),c=new Array(r),f=new Array(r),u=new Array(r),h=new Array(r),l=n.words
l.length=r,this.convert13b(t.words,t.length,a,r),this.convert13b(e.words,e.length,f,r),this.transform(a,o,s,c,r,i),this.transform(f,o,u,h,r,i)
for(var d=0;d<r;d++){var p=s[d]*u[d]-c[d]*h[d]
c[d]=s[d]*h[d]+c[d]*u[d],s[d]=p}return this.conjugate(s,c,r),this.transform(s,c,l,o,r,i),this.conjugate(l,o,r),this.normalize13b(l,r),n.negative=t.negative^e.negative,n.length=t.length+e.length,n.strip()},o.prototype.mul=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),this.mulTo(t,e)},o.prototype.mulf=function(t){var e=new o(null)
return e.words=new Array(this.length+t.length),p(this,t,e)},o.prototype.imul=function(t){return this.clone().mulTo(t,this)},o.prototype.imuln=function(t){r("number"==typeof t),r(t<67108864)
for(var e=0,n=0;n<this.length;n++){var i=(0|this.words[n])*t,o=(67108863&i)+(67108863&e)
e>>=26,e+=i/67108864|0,e+=o>>>26,this.words[n]=67108863&o}return 0!==e&&(this.words[n]=e,this.length++),this},o.prototype.muln=function(t){return this.clone().imuln(t)},o.prototype.sqr=function(){return this.mul(this)},o.prototype.isqr=function(){return this.imul(this.clone())},o.prototype.pow=function(t){var e=function(t){for(var e=new Array(t.bitLength()),n=0;n<e.length;n++){var r=n/26|0,i=n%26
e[n]=(t.words[r]&1<<i)>>>i}return e}(t)
if(0===e.length)return new o(1)
for(var n=this,r=0;r<e.length&&0===e[r];r++,n=n.sqr());if(++r<e.length)for(var i=n.sqr();r<e.length;r++,i=i.sqr())0!==e[r]&&(n=n.mul(i))
return n},o.prototype.iushln=function(t){r("number"==typeof t&&t>=0)
var e,n=t%26,i=(t-n)/26,o=67108863>>>26-n<<26-n
if(0!==n){var a=0
for(e=0;e<this.length;e++){var s=this.words[e]&o,c=(0|this.words[e])-s<<n
this.words[e]=c|a,a=s>>>26-n}a&&(this.words[e]=a,this.length++)}if(0!==i){for(e=this.length-1;e>=0;e--)this.words[e+i]=this.words[e]
for(e=0;e<i;e++)this.words[e]=0
this.length+=i}return this.strip()},o.prototype.ishln=function(t){return r(0===this.negative),this.iushln(t)},o.prototype.iushrn=function(t,e,n){var i
r("number"==typeof t&&t>=0),i=e?(e-e%26)/26:0
var o=t%26,a=Math.min((t-o)/26,this.length),s=67108863^67108863>>>o<<o,c=n
if(i-=a,i=Math.max(0,i),c){for(var f=0;f<a;f++)c.words[f]=this.words[f]
c.length=a}if(0===a);else if(this.length>a)for(this.length-=a,f=0;f<this.length;f++)this.words[f]=this.words[f+a]
else this.words[0]=0,this.length=1
var u=0
for(f=this.length-1;f>=0&&(0!==u||f>=i);f--){var h=0|this.words[f]
this.words[f]=u<<26-o|h>>>o,u=h&s}return c&&0!==u&&(c.words[c.length++]=u),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},o.prototype.ishrn=function(t,e,n){return r(0===this.negative),this.iushrn(t,e,n)},o.prototype.shln=function(t){return this.clone().ishln(t)},o.prototype.ushln=function(t){return this.clone().iushln(t)},o.prototype.shrn=function(t){return this.clone().ishrn(t)},o.prototype.ushrn=function(t){return this.clone().iushrn(t)},o.prototype.testn=function(t){r("number"==typeof t&&t>=0)
var e=t%26,n=(t-e)/26,i=1<<e
return!(this.length<=n)&&!!(this.words[n]&i)},o.prototype.imaskn=function(t){r("number"==typeof t&&t>=0)
var e=t%26,n=(t-e)/26
if(r(0===this.negative,"imaskn works only with positive numbers"),this.length<=n)return this
if(0!==e&&n++,this.length=Math.min(n,this.length),0!==e){var i=67108863^67108863>>>e<<e
this.words[this.length-1]&=i}return this.strip()},o.prototype.maskn=function(t){return this.clone().imaskn(t)},o.prototype.iaddn=function(t){return r("number"==typeof t),r(t<67108864),t<0?this.isubn(-t):0!==this.negative?1===this.length&&(0|this.words[0])<t?(this.words[0]=t-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(t),this.negative=1,this):this._iaddn(t)},o.prototype._iaddn=function(t){this.words[0]+=t
for(var e=0;e<this.length&&this.words[e]>=67108864;e++)this.words[e]-=67108864,e===this.length-1?this.words[e+1]=1:this.words[e+1]++
return this.length=Math.max(this.length,e+1),this},o.prototype.isubn=function(t){if(r("number"==typeof t),r(t<67108864),t<0)return this.iaddn(-t)
if(0!==this.negative)return this.negative=0,this.iaddn(t),this.negative=1,this
if(this.words[0]-=t,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1
else for(var e=0;e<this.length&&this.words[e]<0;e++)this.words[e]+=67108864,this.words[e+1]-=1
return this.strip()},o.prototype.addn=function(t){return this.clone().iaddn(t)},o.prototype.subn=function(t){return this.clone().isubn(t)},o.prototype.iabs=function(){return this.negative=0,this},o.prototype.abs=function(){return this.clone().iabs()},o.prototype._ishlnsubmul=function(t,e,n){var i,o,a=t.length+n
this._expand(a)
var s=0
for(i=0;i<t.length;i++){o=(0|this.words[i+n])+s
var c=(0|t.words[i])*e
s=((o-=67108863&c)>>26)-(c/67108864|0),this.words[i+n]=67108863&o}for(;i<this.length-n;i++)s=(o=(0|this.words[i+n])+s)>>26,this.words[i+n]=67108863&o
if(0===s)return this.strip()
for(r(-1===s),s=0,i=0;i<this.length;i++)s=(o=-(0|this.words[i])+s)>>26,this.words[i]=67108863&o
return this.negative=1,this.strip()},o.prototype._wordDiv=function(t,e){var n=(this.length,t.length),r=this.clone(),i=t,a=0|i.words[i.length-1]
0!==(n=26-this._countBits(a))&&(i=i.ushln(n),r.iushln(n),a=0|i.words[i.length-1])
var s,c=r.length-i.length
if("mod"!==e){(s=new o(null)).length=c+1,s.words=new Array(s.length)
for(var f=0;f<s.length;f++)s.words[f]=0}var u=r.clone()._ishlnsubmul(i,1,c)
0===u.negative&&(r=u,s&&(s.words[c]=1))
for(var h=c-1;h>=0;h--){var l=67108864*(0|r.words[i.length+h])+(0|r.words[i.length+h-1])
for(l=Math.min(l/a|0,67108863),r._ishlnsubmul(i,l,h);0!==r.negative;)l--,r.negative=0,r._ishlnsubmul(i,1,h),r.isZero()||(r.negative^=1)
s&&(s.words[h]=l)}return s&&s.strip(),r.strip(),"div"!==e&&0!==n&&r.iushrn(n),{div:s||null,mod:r}},o.prototype.divmod=function(t,e,n){return r(!t.isZero()),this.isZero()?{div:new o(0),mod:new o(0)}:0!==this.negative&&0===t.negative?(s=this.neg().divmod(t,e),"mod"!==e&&(i=s.div.neg()),"div"!==e&&(a=s.mod.neg(),n&&0!==a.negative&&a.iadd(t)),{div:i,mod:a}):0===this.negative&&0!==t.negative?(s=this.divmod(t.neg(),e),"mod"!==e&&(i=s.div.neg()),{div:i,mod:s.mod}):0!=(this.negative&t.negative)?(s=this.neg().divmod(t.neg(),e),"div"!==e&&(a=s.mod.neg(),n&&0!==a.negative&&a.isub(t)),{div:s.div,mod:a}):t.length>this.length||this.cmp(t)<0?{div:new o(0),mod:this}:1===t.length?"div"===e?{div:this.divn(t.words[0]),mod:null}:"mod"===e?{div:null,mod:new o(this.modn(t.words[0]))}:{div:this.divn(t.words[0]),mod:new o(this.modn(t.words[0]))}:this._wordDiv(t,e)
var i,a,s},o.prototype.div=function(t){return this.divmod(t,"div",!1).div},o.prototype.mod=function(t){return this.divmod(t,"mod",!1).mod},o.prototype.umod=function(t){return this.divmod(t,"mod",!0).mod},o.prototype.divRound=function(t){var e=this.divmod(t)
if(e.mod.isZero())return e.div
var n=0!==e.div.negative?e.mod.isub(t):e.mod,r=t.ushrn(1),i=t.andln(1),o=n.cmp(r)
return o<0||1===i&&0===o?e.div:0!==e.div.negative?e.div.isubn(1):e.div.iaddn(1)},o.prototype.modn=function(t){r(t<=67108863)
for(var e=(1<<26)%t,n=0,i=this.length-1;i>=0;i--)n=(e*n+(0|this.words[i]))%t
return n},o.prototype.idivn=function(t){r(t<=67108863)
for(var e=0,n=this.length-1;n>=0;n--){var i=(0|this.words[n])+67108864*e
this.words[n]=i/t|0,e=i%t}return this.strip()},o.prototype.divn=function(t){return this.clone().idivn(t)},o.prototype.egcd=function(t){r(0===t.negative),r(!t.isZero())
var e=this,n=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i=new o(1),a=new o(0),s=new o(0),c=new o(1),f=0;e.isEven()&&n.isEven();)e.iushrn(1),n.iushrn(1),++f
for(var u=n.clone(),h=e.clone();!e.isZero();){for(var l=0,d=1;0==(e.words[0]&d)&&l<26;++l,d<<=1);if(l>0)for(e.iushrn(l);l-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(u),a.isub(h)),i.iushrn(1),a.iushrn(1)
for(var p=0,b=1;0==(n.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(n.iushrn(p);p-- >0;)(s.isOdd()||c.isOdd())&&(s.iadd(u),c.isub(h)),s.iushrn(1),c.iushrn(1)
e.cmp(n)>=0?(e.isub(n),i.isub(s),a.isub(c)):(n.isub(e),s.isub(i),c.isub(a))}return{a:s,b:c,gcd:n.iushln(f)}},o.prototype._invmp=function(t){r(0===t.negative),r(!t.isZero())
var e=this,n=t.clone()
e=0!==e.negative?e.umod(t):e.clone()
for(var i,a=new o(1),s=new o(0),c=n.clone();e.cmpn(1)>0&&n.cmpn(1)>0;){for(var f=0,u=1;0==(e.words[0]&u)&&f<26;++f,u<<=1);if(f>0)for(e.iushrn(f);f-- >0;)a.isOdd()&&a.iadd(c),a.iushrn(1)
for(var h=0,l=1;0==(n.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(n.iushrn(h);h-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1)
e.cmp(n)>=0?(e.isub(n),a.isub(s)):(n.isub(e),s.isub(a))}return(i=0===e.cmpn(1)?a:s).cmpn(0)<0&&i.iadd(t),i},o.prototype.gcd=function(t){if(this.isZero())return t.abs()
if(t.isZero())return this.abs()
var e=this.clone(),n=t.clone()
e.negative=0,n.negative=0
for(var r=0;e.isEven()&&n.isEven();r++)e.iushrn(1),n.iushrn(1)
for(;;){for(;e.isEven();)e.iushrn(1)
for(;n.isEven();)n.iushrn(1)
var i=e.cmp(n)
if(i<0){var o=e
e=n,n=o}else if(0===i||0===n.cmpn(1))break
e.isub(n)}return n.iushln(r)},o.prototype.invm=function(t){return this.egcd(t).a.umod(t)},o.prototype.isEven=function(){return 0==(1&this.words[0])},o.prototype.isOdd=function(){return 1==(1&this.words[0])},o.prototype.andln=function(t){return this.words[0]&t},o.prototype.bincn=function(t){r("number"==typeof t)
var e=t%26,n=(t-e)/26,i=1<<e
if(this.length<=n)return this._expand(n+1),this.words[n]|=i,this
for(var o=i,a=n;0!==o&&a<this.length;a++){var s=0|this.words[a]
o=(s+=o)>>>26,s&=67108863,this.words[a]=s}return 0!==o&&(this.words[a]=o,this.length++),this},o.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},o.prototype.cmpn=function(t){var e,n=t<0
if(0!==this.negative&&!n)return-1
if(0===this.negative&&n)return 1
if(this.strip(),this.length>1)e=1
else{n&&(t=-t),r(t<=67108863,"Number is too big")
var i=0|this.words[0]
e=i===t?0:i<t?-1:1}return 0!==this.negative?0|-e:e},o.prototype.cmp=function(t){if(0!==this.negative&&0===t.negative)return-1
if(0===this.negative&&0!==t.negative)return 1
var e=this.ucmp(t)
return 0!==this.negative?0|-e:e},o.prototype.ucmp=function(t){if(this.length>t.length)return 1
if(this.length<t.length)return-1
for(var e=0,n=this.length-1;n>=0;n--){var r=0|this.words[n],i=0|t.words[n]
if(r!==i){r<i?e=-1:r>i&&(e=1)
break}}return e},o.prototype.gtn=function(t){return 1===this.cmpn(t)},o.prototype.gt=function(t){return 1===this.cmp(t)},o.prototype.gten=function(t){return this.cmpn(t)>=0},o.prototype.gte=function(t){return this.cmp(t)>=0},o.prototype.ltn=function(t){return-1===this.cmpn(t)},o.prototype.lt=function(t){return-1===this.cmp(t)},o.prototype.lten=function(t){return this.cmpn(t)<=0},o.prototype.lte=function(t){return this.cmp(t)<=0},o.prototype.eqn=function(t){return 0===this.cmpn(t)},o.prototype.eq=function(t){return 0===this.cmp(t)},o.red=function(t){return new x(t)},o.prototype.toRed=function(t){return r(!this.red,"Already a number in reduction context"),r(0===this.negative,"red works only with positives"),t.convertTo(this)._forceRed(t)},o.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},o.prototype._forceRed=function(t){return this.red=t,this},o.prototype.forceRed=function(t){return r(!this.red,"Already a number in reduction context"),this._forceRed(t)},o.prototype.redAdd=function(t){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,t)},o.prototype.redIAdd=function(t){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,t)},o.prototype.redSub=function(t){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,t)},o.prototype.redISub=function(t){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,t)},o.prototype.redShl=function(t){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,t)},o.prototype.redMul=function(t){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.mul(this,t)},o.prototype.redIMul=function(t){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,t),this.red.imul(this,t)},o.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},o.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},o.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},o.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},o.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},o.prototype.redPow=function(t){return r(this.red&&!t.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,t)}
var v={k256:null,p224:null,p192:null,p25519:null}
function g(t,e){this.name=t,this.p=new o(e,16),this.n=this.p.bitLength(),this.k=new o(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function m(){g.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function y(){g.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function _(){g.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function w(){g.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function x(t){if("string"==typeof t){var e=o._prime(t)
this.m=e.p,this.prime=e}else r(t.gtn(1),"modulus must be greater than 1"),this.m=t,this.prime=null}function S(t){x.call(this,t),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new o(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}g.prototype._tmp=function(){var t=new o(null)
return t.words=new Array(Math.ceil(this.n/13)),t},g.prototype.ireduce=function(t){var e,n=t
do{this.split(n,this.tmp),e=(n=(n=this.imulK(n)).iadd(this.tmp)).bitLength()}while(e>this.n)
var r=e<this.n?-1:n.ucmp(this.p)
return 0===r?(n.words[0]=0,n.length=1):r>0?n.isub(this.p):n.strip(),n},g.prototype.split=function(t,e){t.iushrn(this.n,0,e)},g.prototype.imulK=function(t){return t.imul(this.k)},i(m,g),m.prototype.split=function(t,e){for(var n=Math.min(t.length,9),r=0;r<n;r++)e.words[r]=t.words[r]
if(e.length=n,t.length<=9)return t.words[0]=0,void(t.length=1)
var i=t.words[9]
for(e.words[e.length++]=4194303&i,r=10;r<t.length;r++){var o=0|t.words[r]
t.words[r-10]=(4194303&o)<<4|i>>>22,i=o}i>>>=22,t.words[r-10]=i,0===i&&t.length>10?t.length-=10:t.length-=9},m.prototype.imulK=function(t){t.words[t.length]=0,t.words[t.length+1]=0,t.length+=2
for(var e=0,n=0;n<t.length;n++){var r=0|t.words[n]
e+=977*r,t.words[n]=67108863&e,e=64*r+(e/67108864|0)}return 0===t.words[t.length-1]&&(t.length--,0===t.words[t.length-1]&&t.length--),t},i(y,g),i(_,g),i(w,g),w.prototype.imulK=function(t){for(var e=0,n=0;n<t.length;n++){var r=19*(0|t.words[n])+e,i=67108863&r
r>>>=26,t.words[n]=i,e=r}return 0!==e&&(t.words[t.length++]=e),t},o._prime=function(t){if(v[t])return v[t]
var e
if("k256"===t)e=new m
else if("p224"===t)e=new y
else if("p192"===t)e=new _
else{if("p25519"!==t)throw new Error("Unknown prime "+t)
e=new w}return v[t]=e,e},x.prototype._verify1=function(t){r(0===t.negative,"red works only with positives"),r(t.red,"red works only with red numbers")},x.prototype._verify2=function(t,e){r(0==(t.negative|e.negative),"red works only with positives"),r(t.red&&t.red===e.red,"red works only with red numbers")},x.prototype.imod=function(t){return this.prime?this.prime.ireduce(t)._forceRed(this):t.umod(this.m)._forceRed(this)},x.prototype.neg=function(t){return t.isZero()?t.clone():this.m.sub(t)._forceRed(this)},x.prototype.add=function(t,e){this._verify2(t,e)
var n=t.add(e)
return n.cmp(this.m)>=0&&n.isub(this.m),n._forceRed(this)},x.prototype.iadd=function(t,e){this._verify2(t,e)
var n=t.iadd(e)
return n.cmp(this.m)>=0&&n.isub(this.m),n},x.prototype.sub=function(t,e){this._verify2(t,e)
var n=t.sub(e)
return n.cmpn(0)<0&&n.iadd(this.m),n._forceRed(this)},x.prototype.isub=function(t,e){this._verify2(t,e)
var n=t.isub(e)
return n.cmpn(0)<0&&n.iadd(this.m),n},x.prototype.shl=function(t,e){return this._verify1(t),this.imod(t.ushln(e))},x.prototype.imul=function(t,e){return this._verify2(t,e),this.imod(t.imul(e))},x.prototype.mul=function(t,e){return this._verify2(t,e),this.imod(t.mul(e))},x.prototype.isqr=function(t){return this.imul(t,t.clone())},x.prototype.sqr=function(t){return this.mul(t,t)},x.prototype.sqrt=function(t){if(t.isZero())return t.clone()
var e=this.m.andln(3)
if(r(e%2==1),3===e){var n=this.m.add(new o(1)).iushrn(2)
return this.pow(t,n)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1)
r(!i.isZero())
var s=new o(1).toRed(this),c=s.redNeg(),f=this.m.subn(1).iushrn(1),u=this.m.bitLength()
for(u=new o(2*u*u).toRed(this);0!==this.pow(u,f).cmp(c);)u.redIAdd(c)
for(var h=this.pow(u,i),l=this.pow(t,i.addn(1).iushrn(1)),d=this.pow(t,i),p=a;0!==d.cmp(s);){for(var b=d,v=0;0!==b.cmp(s);v++)b=b.redSqr()
r(v<p)
var g=this.pow(h,new o(1).iushln(p-v-1))
l=l.redMul(g),h=g.redSqr(),d=d.redMul(h),p=v}return l},x.prototype.invm=function(t){var e=t._invmp(this.m)
return 0!==e.negative?(e.negative=0,this.imod(e).redNeg()):this.imod(e)},x.prototype.pow=function(t,e){if(e.isZero())return new o(1).toRed(this)
if(0===e.cmpn(1))return t.clone()
var n=new Array(16)
n[0]=new o(1).toRed(this),n[1]=t
for(var r=2;r<n.length;r++)n[r]=this.mul(n[r-1],t)
var i=n[0],a=0,s=0,c=e.bitLength()%26
for(0===c&&(c=26),r=e.length-1;r>=0;r--){for(var f=e.words[r],u=c-1;u>=0;u--){var h=f>>u&1
i!==n[0]&&(i=this.sqr(i)),0!==h||0!==a?(a<<=1,a|=h,(4===++s||0===r&&0===u)&&(i=this.mul(i,n[a]),s=0,a=0)):s=0}c=26}return i},x.prototype.convertTo=function(t){var e=t.umod(this.m)
return e===t?e.clone():e},x.prototype.convertFrom=function(t){var e=t.clone()
return e.red=null,e},o.mont=function(t){return new S(t)},i(S,x),S.prototype.convertTo=function(t){return this.imod(t.ushln(this.shift))},S.prototype.convertFrom=function(t){var e=this.imod(t.mul(this.rinv))
return e.red=null,e},S.prototype.imul=function(t,e){if(t.isZero()||e.isZero())return t.words[0]=0,t.length=1,t
var n=t.imul(e),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),o=i
return i.cmp(this.m)>=0?o=i.isub(this.m):i.cmpn(0)<0&&(o=i.iadd(this.m)),o._forceRed(this)},S.prototype.mul=function(t,e){if(t.isZero()||e.isZero())return new o(0)._forceRed(this)
var n=t.mul(e),r=n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=n.isub(r).iushrn(this.shift),a=i
return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},S.prototype.invm=function(t){return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)}}(t,this)}).call(this,n(126)(t))},function(t,e,n){"use strict";(function(t){var r=n(85),i=n(86),o=n(47)
function a(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,e){if(a()<e)throw new RangeError("Invalid typed array length")
return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=c.prototype:(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(t,e,n)
if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string")
return h(this,t)}return f(this,t,e,n)}function f(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds")
if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds")
e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r)
c.TYPED_ARRAY_SUPPORT?(t=e).__proto__=c.prototype:t=l(t,e)
return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8")
if(!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding')
var r=0|p(e,n),i=(t=s(t,r)).write(e,n)
i!==r&&(t=t.slice(0,i))
return t}(t,e,n):function(t,e){if(c.isBuffer(e)){var n=0|d(e.length)
return 0===(t=s(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?s(t,0):l(t,e)
if("Buffer"===e.type&&o(e.data))return l(t,e.data)}var r
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')
if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e){if(u(e),t=s(t,e<0?0:0|d(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0
return t}function l(t,e){var n=e.length<0?0:0|d(e.length)
t=s(t,n)
for(var r=0;r<n;r+=1)t[r]=255&e[r]
return t}function d(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes")
return 0|t}function p(t,e){if(c.isBuffer(t))return t.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength
"string"!=typeof t&&(t=""+t)
var n=t.length
if(0===n)return 0
for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n
case"utf8":case"utf-8":case void 0:return z(t).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n
case"hex":return n>>>1
case"base64":return q(t).length
default:if(r)return z(t).length
e=(""+e).toLowerCase(),r=!0}}function b(t,e,n){var r=t[e]
t[e]=t[n],t[n]=r}function v(t,e,n,r,i){if(0===t.length)return-1
if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1
n=t.length-1}else if(n<0){if(!i)return-1
n=0}if("string"==typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:g(t,e,n,r,i)
if("number"==typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):g(t,[e],n,r,i)
throw new TypeError("val must be string, number or Buffer")}function g(t,e,n,r,i){var o,a=1,s=t.length,c=e.length
if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1
a=2,s/=2,c/=2,n/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(i){var u=-1
for(o=n;o<s;o++)if(f(t,o)===f(e,-1===u?0:o-u)){if(-1===u&&(u=o),o-u+1===c)return u*a}else-1!==u&&(o-=o-u),u=-1}else for(n+c>s&&(n=s-c),o=n;o>=0;o--){for(var h=!0,l=0;l<c;l++)if(f(t,o+l)!==f(e,l)){h=!1
break}if(h)return o}return-1}function m(t,e,n,r){n=Number(n)||0
var i=t.length-n
r?(r=Number(r))>i&&(r=i):r=i
var o=e.length
if(o%2!=0)throw new TypeError("Invalid hex string")
r>o/2&&(r=o/2)
for(var a=0;a<r;++a){var s=parseInt(e.substr(2*a,2),16)
if(isNaN(s))return a
t[n+a]=s}return a}function y(t,e,n,r){return F(z(e,t.length-n),t,n,r)}function _(t,e,n,r){return F(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n))
return e}(e),t,n,r)}function w(t,e,n,r){return _(t,e,n,r)}function x(t,e,n,r){return F(q(e),t,n,r)}function S(t,e,n,r){return F(function(t,e){for(var n,r,i,o=[],a=0;a<t.length&&!((e-=2)<0);++a)n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r)
return o}(e,t.length-n),t,n,r)}function k(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function E(t,e,n){n=Math.min(t.length,n)
for(var r=[],i=e;i<n;){var o,a,s,c,f=t[i],u=null,h=f>239?4:f>223?3:f>191?2:1
if(i+h<=n)switch(h){case 1:f<128&&(u=f)
break
case 2:128==(192&(o=t[i+1]))&&(c=(31&f)<<6|63&o)>127&&(u=c)
break
case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(c=(15&f)<<12|(63&o)<<6|63&a)>2047&&(c<55296||c>57343)&&(u=c)
break
case 4:o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(c=(15&f)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&c<1114112&&(u=c)}null===u?(u=65533,h=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),i+=h}return function(t){var e=t.length
if(e<=A)return String.fromCharCode.apply(String,t)
var n="",r=0
for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=A))
return n}(r)}e.Buffer=c,e.SlowBuffer=function(t){+t!=t&&(t=0)
return c.alloc(+t)},e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1)
return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=a(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return f(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return function(t,e,n,r){return u(e),e<=0?s(t,e):void 0!==n?"string"==typeof r?s(t,e).fill(n,r):s(t,e).fill(n):s(t,e)}(null,t,e,n)},c.allocUnsafe=function(t){return h(null,t)},c.allocUnsafeSlow=function(t){return h(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers")
if(t===e)return 0
for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i]
break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},c.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===t.length)return c.alloc(0)
var n
if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length
var r=c.allocUnsafe(e),i=0
for(n=0;n<t.length;++n){var a=t[n]
if(!c.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers')
a.copy(r,i),i+=a.length}return r},c.byteLength=p,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length
if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var e=0;e<t;e+=2)b(this,e,e+1)
return this},c.prototype.swap32=function(){var t=this.length
if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2)
return this},c.prototype.swap64=function(){var t=this.length
if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4)
return this},c.prototype.toString=function(){var t=0|this.length
return 0===t?"":0===arguments.length?E(this,0,t):function(t,e,n){var r=!1
if((void 0===e||e<0)&&(e=0),e>this.length)return""
if((void 0===n||n>this.length)&&(n=this.length),n<=0)return""
if((n>>>=0)<=(e>>>=0))return""
for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,n)
case"utf8":case"utf-8":return E(this,e,n)
case"ascii":return M(this,e,n)
case"latin1":case"binary":return C(this,e,n)
case"base64":return k(this,e,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,e,n)
default:if(r)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,i){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer")
if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index")
if(r>=i&&e>=n)return 0
if(r>=i)return-1
if(e>=n)return 1
if(this===t)return 0
for(var o=(i>>>=0)-(r>>>=0),a=(n>>>=0)-(e>>>=0),s=Math.min(o,a),f=this.slice(r,i),u=t.slice(e,n),h=0;h<s;++h)if(f[h]!==u[h]){o=f[h],a=u[h]
break}return o<a?-1:a<o?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return v(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return v(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0
else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0
else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e
if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds")
r||(r="utf8")
for(var o=!1;;)switch(r){case"hex":return m(this,t,e,n)
case"utf8":case"utf-8":return y(this,t,e,n)
case"ascii":return _(this,t,e,n)
case"latin1":case"binary":return w(this,t,e,n)
case"base64":return x(this,t,e,n)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,t,e,n)
default:if(o)throw new TypeError("Unknown encoding: "+r)
r=(""+r).toLowerCase(),o=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
var A=4096
function M(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i])
return r}function C(t,e,n){var r=""
n=Math.min(t.length,n)
for(var i=e;i<n;++i)r+=String.fromCharCode(t[i])
return r}function I(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r)
for(var i="",o=e;o<n;++o)i+=U(t[o])
return i}function B(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1])
return i}function T(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint")
if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function O(t,e,n,r,i,o){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance')
if(e>i||e<o)throw new RangeError('"value" argument is out of bounds')
if(n+r>t.length)throw new RangeError("Index out of range")}function P(t,e,n,r){e<0&&(e=65535+e+1)
for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function R(t,e,n,r){e<0&&(e=4294967295+e+1)
for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function D(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range")
if(n<0)throw new RangeError("Index out of range")}function N(t,e,n,r,o){return o||D(t,0,n,4),i.write(t,e,n,r,23,4),n+4}function L(t,e,n,r,o){return o||D(t,0,n,8),i.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length
if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=c.prototype
else{var i=e-t
n=new c(i,void 0)
for(var o=0;o<i;++o)n[o]=this[o+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length)
for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i
return r},c.prototype.readUInt8=function(t,e){return e||T(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||T(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||T(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||T(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||T(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length)
for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i
return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||T(t,e,this.length)
for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i
return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},c.prototype.readInt8=function(t,e){return e||T(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||T(t,2,this.length)
var n=this[t]|this[t+1]<<8
return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||T(t,2,this.length)
var n=this[t+1]|this[t]<<8
return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||T(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||T(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||T(t,4,this.length),i.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||T(t,4,this.length),i.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||T(t,8,this.length),i.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||T(t,8,this.length),i.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||O(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=1,o=0
for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255
return e+n},c.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||O(this,t,e,n,Math.pow(2,8*n)-1,0)
var i=n-1,o=1
for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255
return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):R(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):R(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
O(this,t,e,n,i-1,-i)}var o=0,a=1,s=0
for(this[e]=255&t;++o<n&&(a*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/a>>0)-s&255
return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1)
O(this,t,e,n,i-1,-i)}var o=n-1,a=1,s=0
for(this[e+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/a>>0)-s&255
return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):P(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):P(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):R(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||O(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):R(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return N(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return N(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return L(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return L(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0
if(0===t.length||0===this.length)return 0
if(e<0)throw new RangeError("targetStart out of bounds")
if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds")
if(r<0)throw new RangeError("sourceEnd out of bounds")
r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n)
var i,o=r-n
if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n]
else if(o<1e3||!c.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n]
else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e)
return o},c.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0)
i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string")
if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255)
if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index")
if(n<=e)return this
var o
if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t
else{var a=c.isBuffer(t)?t:z(new c(t,r).toString()),s=a.length
for(o=0;o<n-e;++o)this[o+e]=a[o%s]}return this}
var j=/[^+\/0-9A-Za-z-_]/g
function U(t){return t<16?"0"+t.toString(16):t.toString(16)}function z(t,e){var n
e=e||1/0
for(var r=t.length,i=null,o=[],a=0;a<r;++a){if((n=t.charCodeAt(a))>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189)
continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189)
continue}i=n
continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n
continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189)
if(i=null,n<128){if((e-=1)<0)break
o.push(n)}else if(n<2048){if((e-=2)<0)break
o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break
o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point")
if((e-=4)<0)break
o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function q(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(j,"")).length<2)return""
for(;t.length%4!=0;)t+="="
return t}(t))}function F(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i]
return i}}).call(this,n(10))},function(t,e,n){"use strict"
t.exports=function(t){var e=[]
return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3]
if(!r)return n
if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})
return[n].concat(o).concat([i]).join("\n")}var a
return[n].join("\n")}(e,t)
return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]])
for(var r={},i=0;i<this.length;i++){var o=this[i][0]
null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i]
null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict"
var r=e
r.version=n(133).version,r.utils=n(134),r.rand=n(69),r.curve=n(28),r.curves=n(139),r.ec=n(147),r.eddsa=n(151)},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){var e={}
return function(t,n){if("function"==typeof t)return t()
if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n)
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,f=0,u=[],h=n(180)
function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id]
if(i){i.refs++
for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a])
for(;a<r.parts.length;a++)i.parts.push(m(r.parts[a],e))}else{var s=[]
for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],e))
o[r.id]={id:r.id,refs:1,parts:s}}}}function d(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]}
r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto)
if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var r=u[u.length-1]
if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e)
else if("bottom"===t.insertAt)n.appendChild(e)
else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var i=s(t.insertAt.before,n)
n.insertBefore(e,i)}}function b(t){if(null===t.parentNode)return!1
t.parentNode.removeChild(t)
var e=u.indexOf(t)
e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style")
if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0
return n.nc}()
r&&(t.attrs.nonce=r)}return g(e,t.attrs),p(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,i,o
if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){}
t.css=o}if(e.singleton){var a=f++
n=c||(c=v(e)),r=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link")
return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=h(r))
i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
var a=new Blob([r],{type:"text/css"}),s=t.href
t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media
r&&t.setAttribute("media",r)
if(t.styleSheet)t.styleSheet.cssText=n
else{for(;t.firstChild;)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){b(n)})
return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return
r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom")
var n=d(t,e)
return l(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&l(d(t,e),e)
for(i=0;i<r.length;i++){var s
if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]()
delete o[s.id]}}}}
var y,_=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")})
function w(t,e,n,r){var i=n?"":r.css
if(t.styleSheet)t.styleSheet.cssText=_(e,i)
else{var o=document.createTextNode(i),a=t.childNodes
a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){function n(t,e){if(!t)throw new Error(e||"Assertion failed")}t.exports=n,n.equal=function(t,e,n){if(t!=e)throw new Error(n||"Assertion failed: "+t+" != "+e)}},function(t,e){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict"
var r=n(9),i=n(1)
function o(t,e){return 55296==(64512&t.charCodeAt(e))&&(!(e<0||e+1>=t.length)&&56320==(64512&t.charCodeAt(e+1)))}function a(t){return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}function s(t){return 1===t.length?"0"+t:t}function c(t){return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?"00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}e.inherits=i,e.toArray=function(t,e){if(Array.isArray(t))return t.slice()
if(!t)return[]
var n=[]
if("string"==typeof t)if(e){if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),i=0;i<t.length;i+=2)n.push(parseInt(t[i]+t[i+1],16))}else for(var r=0,i=0;i<t.length;i++){var a=t.charCodeAt(i)
a<128?n[r++]=a:a<2048?(n[r++]=a>>6|192,n[r++]=63&a|128):o(t,i)?(a=65536+((1023&a)<<10)+(1023&t.charCodeAt(++i)),n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=63&a|128):(n[r++]=a>>12|224,n[r++]=a>>6&63|128,n[r++]=63&a|128)}else for(i=0;i<t.length;i++)n[i]=0|t[i]
return n},e.toHex=function(t){for(var e="",n=0;n<t.length;n++)e+=s(t[n].toString(16))
return e},e.htonl=a,e.toHex32=function(t,e){for(var n="",r=0;r<t.length;r++){var i=t[r]
"little"===e&&(i=a(i)),n+=c(i.toString(16))}return n},e.zero2=s,e.zero8=c,e.join32=function(t,e,n,i){var o=n-e
r(o%4==0)
for(var a=new Array(o/4),s=0,c=e;s<a.length;s++,c+=4){var f
f="big"===i?t[c]<<24|t[c+1]<<16|t[c+2]<<8|t[c+3]:t[c+3]<<24|t[c+2]<<16|t[c+1]<<8|t[c],a[s]=f>>>0}return a},e.split32=function(t,e){for(var n=new Array(4*t.length),r=0,i=0;r<t.length;r++,i+=4){var o=t[r]
"big"===e?(n[i]=o>>>24,n[i+1]=o>>>16&255,n[i+2]=o>>>8&255,n[i+3]=255&o):(n[i+3]=o>>>24,n[i+2]=o>>>16&255,n[i+1]=o>>>8&255,n[i]=255&o)}return n},e.rotr32=function(t,e){return t>>>e|t<<32-e},e.rotl32=function(t,e){return t<<e|t>>>32-e},e.sum32=function(t,e){return t+e>>>0},e.sum32_3=function(t,e,n){return t+e+n>>>0},e.sum32_4=function(t,e,n,r){return t+e+n+r>>>0},e.sum32_5=function(t,e,n,r,i){return t+e+n+r+i>>>0},e.sum64=function(t,e,n,r){var i=t[e],o=r+t[e+1]>>>0,a=(o<r?1:0)+n+i
t[e]=a>>>0,t[e+1]=o},e.sum64_hi=function(t,e,n,r){return(e+r>>>0<e?1:0)+t+n>>>0},e.sum64_lo=function(t,e,n,r){return e+r>>>0},e.sum64_4_hi=function(t,e,n,r,i,o,a,s){var c=0,f=e
return c+=(f=f+r>>>0)<e?1:0,c+=(f=f+o>>>0)<o?1:0,t+n+i+a+(c+=(f=f+s>>>0)<s?1:0)>>>0},e.sum64_4_lo=function(t,e,n,r,i,o,a,s){return e+r+o+s>>>0},e.sum64_5_hi=function(t,e,n,r,i,o,a,s,c,f){var u=0,h=e
return u+=(h=h+r>>>0)<e?1:0,u+=(h=h+o>>>0)<o?1:0,u+=(h=h+s>>>0)<s?1:0,t+n+i+a+c+(u+=(h=h+f>>>0)<f?1:0)>>>0},e.sum64_5_lo=function(t,e,n,r,i,o,a,s,c,f){return e+r+o+s+f>>>0},e.rotr64_hi=function(t,e,n){return(e<<32-n|t>>>n)>>>0},e.rotr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0},e.shr64_hi=function(t,e,n){return t>>>n},e.shr64_lo=function(t,e,n){return(t<<32-n|e>>>n)>>>0}},function(t,e){var n,r,i=t.exports={}
function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0)
if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0)
try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}()
var c,f=[],u=!1,h=-1
function l(){u&&c&&(u=!1,c.length?f=c.concat(f):h=-1,f.length&&d())}function d(){if(!u){var t=s(l)
u=!0
for(var e=f.length;e;){for(c=f,f=[];++h<e;)c&&c[h].run()
h=-1,e=f.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t)
if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t)
try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function b(){}i.nextTick=function(t){var e=new Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n]
f.push(new p(t,e)),1!==f.length||u||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){var r=n(2).Buffer,i=n(36).Transform,o=n(39).StringDecoder
function a(t){i.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}n(1)(a,i),a.prototype.update=function(t,e,n){"string"==typeof t&&(t=r.from(t,e))
var i=this._update(t)
return this.hashMode?this:(n&&(i=this._toString(i,n)),i)},a.prototype.setAutoPadding=function(){},a.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},a.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},a.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},a.prototype._transform=function(t,e,n){var r
try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){r=t}finally{n(r)}},a.prototype._flush=function(t){var e
try{this.push(this.__final())}catch(t){e=t}t(e)},a.prototype._finalOrDigest=function(t){var e=this.__final()||r.alloc(0)
return t&&(e=this._toString(e,t,!0)),e},a.prototype._toString=function(t,e,n){if(this._decoder||(this._decoder=new o(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings")
var r=this._decoder.write(t)
return n&&(r+=this._decoder.end()),r},t.exports=a},function(t,e){t.exports=function(t,e){var n="function"==typeof t.exports?t.exports.extendOptions:t.options
for(var r in"function"==typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[r]=n.components[r]||e[r]}},function(t,e,n){"use strict"
var r=n(25),i=Object.keys||function(t){var e=[]
for(var n in t)e.push(n)
return e}
t.exports=h
var o=n(19)
o.inherits=n(1)
var a=n(49),s=n(38)
o.inherits(h,a)
for(var c=i(s.prototype),f=0;f<c.length;f++){var u=c[f]
h.prototype[u]||(h.prototype[u]=s.prototype[u])}function h(t){if(!(this instanceof h))return new h(t)
a.call(this,t),s.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",l)}function l(){this.allowHalfOpen||this._writableState.ended||r.nextTick(d,this)}function d(t){t.end()}Object.defineProperty(h.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(h.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}),h.prototype._destroy=function(t,e){this.push(null),this.end(),r.nextTick(e,t)}},function(t,e,n){"use strict";(function(e,r){var i=65536,o=4294967295
var a=n(2).Buffer,s=e.crypto||e.msCrypto
s&&s.getRandomValues?t.exports=function(t,e){if(t>o)throw new RangeError("requested too many random bytes")
var n=a.allocUnsafe(t)
if(t>0)if(t>i)for(var c=0;c<t;c+=i)s.getRandomValues(n.slice(c,c+i))
else s.getRandomValues(n)
if("function"==typeof e)return r.nextTick(function(){e(null,n)})
return n}:t.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}}).call(this,n(10),n(12))},function(t,e,n){var r=n(2).Buffer
function i(t,e){this._block=r.alloc(t),this._finalSize=e,this._blockSize=t,this._len=0}i.prototype.update=function(t,e){"string"==typeof t&&(e=e||"utf8",t=r.from(t,e))
for(var n=this._block,i=this._blockSize,o=t.length,a=this._len,s=0;s<o;){for(var c=a%i,f=Math.min(o-s,i-c),u=0;u<f;u++)n[c+u]=t[s+u]
s+=f,(a+=f)%i==0&&this._update(n)}return this._len+=o,this},i.prototype.digest=function(t){var e=this._len%this._blockSize
this._block[e]=128,this._block.fill(0,e+1),e>=this._finalSize&&(this._update(this._block),this._block.fill(0))
var n=8*this._len
if(n<=4294967295)this._block.writeUInt32BE(n,this._blockSize-4)
else{var r=(4294967295&n)>>>0,i=(n-r)/4294967296
this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(r,this._blockSize-4)}this._update(this._block)
var o=this._hash()
return t?o.toString(t):o},i.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=i},function(t,e,n){"use strict"
var r=n(1),i=n(35),o=n(40),a=n(41),s=n(13)
function c(t){s.call(this,"digest"),this._hash=t}r(c,s),c.prototype._update=function(t){this._hash.update(t)},c.prototype._final=function(){return this._hash.digest()},t.exports=function(t){return"md5"===(t=t.toLowerCase())?new i:"rmd160"===t||"ripemd160"===t?new o:new c(a(t))}},function(t,e,n){(function(t){function n(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===n(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===n(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===n(t)},e.isError=function(t){return"[object Error]"===n(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=t.isBuffer}).call(this,n(5).Buffer)},function(t,e,n){(function(e){t.exports=function(t,n){for(var r=Math.min(t.length,n.length),i=new e(r),o=0;o<r;++o)i[o]=t[o]^n[o]
return i}}).call(this,n(5).Buffer)},function(t,e,n){"use strict"
var r=n(11),i=n(9)
function o(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}e.BlockHash=o,o.prototype.update=function(t,e){if(t=r.toArray(t,e),this.pending?this.pending=this.pending.concat(t):this.pending=t,this.pendingTotal+=t.length,this.pending.length>=this._delta8){var n=(t=this.pending).length%this._delta8
this.pending=t.slice(t.length-n,t.length),0===this.pending.length&&(this.pending=null),t=r.join32(t,0,t.length-n,this.endian)
for(var i=0;i<t.length;i+=this._delta32)this._update(t,i,i+this._delta32)}return this},o.prototype.digest=function(t){return this.update(this._pad()),i(null===this.pending),this._digest(t)},o.prototype._pad=function(){var t=this.pendingTotal,e=this._delta8,n=e-(t+this.padLength)%e,r=new Array(n+this.padLength)
r[0]=128
for(var i=1;i<n;i++)r[i]=0
if(t<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)r[i++]=0
r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=t>>>24&255,r[i++]=t>>>16&255,r[i++]=t>>>8&255,r[i++]=255&t}else for(r[i++]=255&t,r[i++]=t>>>8&255,r[i++]=t>>>16&255,r[i++]=t>>>24&255,r[i++]=0,r[i++]=0,r[i++]=0,r[i++]=0,o=8;o<this.padLength;o++)r[i++]=0
return r}},function(t,e,n){var r=e
r.bignum=n(4),r.define=n(155).define,r.base=n(23),r.constants=n(75),r.decoders=n(161),r.encoders=n(163)},function(t,e,n){var r=e
r.Reporter=n(158).Reporter,r.DecoderBuffer=n(74).DecoderBuffer,r.EncoderBuffer=n(74).EncoderBuffer,r.Node=n(159)},function(t,e,n){"use strict"
var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)}
r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)}
var a=Number.isNaN||function(t){return t!=t}
function s(){s.init.call(this)}t.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0
var c=10
function f(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function u(t,e,n,r){var i,o,a,s
if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)
if(void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),a=o[e]),void 0===a)a=o[e]=n,++t._eventsCount
else if("function"==typeof a?a=o[e]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=f(t))>0&&a.length>i&&!a.warned){a.warned=!0
var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit")
c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=a.length,s=c,console&&console.warn&&console.warn(s)}return t}function h(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=function(){for(var t=[],e=0;e<arguments.length;e++)t.push(arguments[e])
this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,t))}.bind(r)
return i.listener=n,r.wrapFn=i,i}function l(t,e,n){var r=t._events
if(void 0===r)return[]
var i=r[e]
return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n]
return e}(i):p(i,i.length)}function d(t){var e=this._events
if(void 0!==e){var n=e[t]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function p(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r]
return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".")
c=t}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||a(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".")
return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return f(this)},s.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n])
var r="error"===t,i=this._events
if(void 0!==i)r=r&&void 0===i.error
else if(!r)return!1
if(r){var a
if(e.length>0&&(a=e[0]),a instanceof Error)throw a
var s=new Error("Unhandled error."+(a?" ("+a.message+")":""))
throw s.context=a,s}var c=i[t]
if(void 0===c)return!1
if("function"==typeof c)o(c,this,e)
else{var f=c.length,u=p(c,f)
for(n=0;n<f;++n)o(u[n],this,e)}return!0},s.prototype.addListener=function(t,e){return u(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return u(this,t,e,!0)},s.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)
return this.on(t,h(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)
return this.prependListener(t,h(this,t,e)),this},s.prototype.removeListener=function(t,e){var n,r,i,o,a
if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)
if(void 0===(r=this._events))return this
if(void 0===(n=r[t]))return this
if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e))
else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){a=n[o].listener,i=o
break}if(i<0)return this
0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1]
t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,a||e)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(t){var e,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this
if(0===arguments.length){var i,o=Object.keys(n)
for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e)
else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r])
return this},s.prototype.listeners=function(t){return l(this,t,!0)},s.prototype.rawListeners=function(t){return l(this,t,!1)},s.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},s.prototype.listenerCount=d,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(t,e,n){"use strict";(function(e){!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports={nextTick:function(t,n,r,i){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function')
var o,a,s=arguments.length
switch(s){case 0:case 1:return e.nextTick(t)
case 2:return e.nextTick(function(){t.call(null,n)})
case 3:return e.nextTick(function(){t.call(null,n,r)})
case 4:return e.nextTick(function(){t.call(null,n,r,i)})
default:for(o=new Array(s-1),a=0;a<o.length;)o[a++]=arguments[a]
return e.nextTick(function(){t.apply(null,o)})}}}:t.exports=e}).call(this,n(12))},function(t,e,n){var r=n(2).Buffer
function i(t){r.isBuffer(t)||(t=r.from(t))
for(var e=t.length/4|0,n=new Array(e),i=0;i<e;i++)n[i]=t.readUInt32BE(4*i)
return n}function o(t){for(;0<t.length;t++)t[0]=0}function a(t,e,n,r,i){for(var o,a,s,c,f=n[0],u=n[1],h=n[2],l=n[3],d=t[0]^e[0],p=t[1]^e[1],b=t[2]^e[2],v=t[3]^e[3],g=4,m=1;m<i;m++)o=f[d>>>24]^u[p>>>16&255]^h[b>>>8&255]^l[255&v]^e[g++],a=f[p>>>24]^u[b>>>16&255]^h[v>>>8&255]^l[255&d]^e[g++],s=f[b>>>24]^u[v>>>16&255]^h[d>>>8&255]^l[255&p]^e[g++],c=f[v>>>24]^u[d>>>16&255]^h[p>>>8&255]^l[255&b]^e[g++],d=o,p=a,b=s,v=c
return o=(r[d>>>24]<<24|r[p>>>16&255]<<16|r[b>>>8&255]<<8|r[255&v])^e[g++],a=(r[p>>>24]<<24|r[b>>>16&255]<<16|r[v>>>8&255]<<8|r[255&d])^e[g++],s=(r[b>>>24]<<24|r[v>>>16&255]<<16|r[d>>>8&255]<<8|r[255&p])^e[g++],c=(r[v>>>24]<<24|r[d>>>16&255]<<16|r[p>>>8&255]<<8|r[255&b])^e[g++],[o>>>=0,a>>>=0,s>>>=0,c>>>=0]}var s=[0,1,2,4,8,16,32,64,128,27,54],c=function(){for(var t=new Array(256),e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283
for(var n=[],r=[],i=[[],[],[],[]],o=[[],[],[],[]],a=0,s=0,c=0;c<256;++c){var f=s^s<<1^s<<2^s<<3^s<<4
f=f>>>8^255&f^99,n[a]=f,r[f]=a
var u=t[a],h=t[u],l=t[h],d=257*t[f]^16843008*f
i[0][a]=d<<24|d>>>8,i[1][a]=d<<16|d>>>16,i[2][a]=d<<8|d>>>24,i[3][a]=d,d=16843009*l^65537*h^257*u^16843008*a,o[0][f]=d<<24|d>>>8,o[1][f]=d<<16|d>>>16,o[2][f]=d<<8|d>>>24,o[3][f]=d,0===a?a=s=1:(a=u^t[t[t[l^u]]],s^=t[t[s]])}return{SBOX:n,INV_SBOX:r,SUB_MIX:i,INV_SUB_MIX:o}}()
function f(t){this._key=i(t),this._reset()}f.blockSize=16,f.keySize=32,f.prototype.blockSize=f.blockSize,f.prototype.keySize=f.keySize,f.prototype._reset=function(){for(var t=this._key,e=t.length,n=e+6,r=4*(n+1),i=[],o=0;o<e;o++)i[o]=t[o]
for(o=e;o<r;o++){var a=i[o-1]
o%e==0?(a=a<<8|a>>>24,a=c.SBOX[a>>>24]<<24|c.SBOX[a>>>16&255]<<16|c.SBOX[a>>>8&255]<<8|c.SBOX[255&a],a^=s[o/e|0]<<24):e>6&&o%e==4&&(a=c.SBOX[a>>>24]<<24|c.SBOX[a>>>16&255]<<16|c.SBOX[a>>>8&255]<<8|c.SBOX[255&a]),i[o]=i[o-e]^a}for(var f=[],u=0;u<r;u++){var h=r-u,l=i[h-(u%4?0:4)]
f[u]=u<4||h<=4?l:c.INV_SUB_MIX[0][c.SBOX[l>>>24]]^c.INV_SUB_MIX[1][c.SBOX[l>>>16&255]]^c.INV_SUB_MIX[2][c.SBOX[l>>>8&255]]^c.INV_SUB_MIX[3][c.SBOX[255&l]]}this._nRounds=n,this._keySchedule=i,this._invKeySchedule=f},f.prototype.encryptBlockRaw=function(t){return a(t=i(t),this._keySchedule,c.SUB_MIX,c.SBOX,this._nRounds)},f.prototype.encryptBlock=function(t){var e=this.encryptBlockRaw(t),n=r.allocUnsafe(16)
return n.writeUInt32BE(e[0],0),n.writeUInt32BE(e[1],4),n.writeUInt32BE(e[2],8),n.writeUInt32BE(e[3],12),n},f.prototype.decryptBlock=function(t){var e=(t=i(t))[1]
t[1]=t[3],t[3]=e
var n=a(t,this._invKeySchedule,c.INV_SUB_MIX,c.INV_SBOX,this._nRounds),o=r.allocUnsafe(16)
return o.writeUInt32BE(n[0],0),o.writeUInt32BE(n[3],4),o.writeUInt32BE(n[2],8),o.writeUInt32BE(n[1],12),o},f.prototype.scrub=function(){o(this._keySchedule),o(this._invKeySchedule),o(this._key)},t.exports.AES=f},function(t,e,n){var r=n(2).Buffer,i=n(35)
t.exports=function(t,e,n,o){if(r.isBuffer(t)||(t=r.from(t,"binary")),e&&(r.isBuffer(e)||(e=r.from(e,"binary")),8!==e.length))throw new RangeError("salt should be Buffer with 8 byte length")
for(var a=n/8,s=r.alloc(a),c=r.alloc(o||0),f=r.alloc(0);a>0||o>0;){var u=new i
u.update(f),u.update(t),e&&u.update(e),f=u.digest()
var h=0
if(a>0){var l=s.length-a
h=Math.min(a,f.length),f.copy(s,l,0,h),a-=h}if(h<f.length&&o>0){var d=c.length-o,p=Math.min(o,f.length-h)
f.copy(c,d,h,h+p),o-=p}}return f.fill(0),{key:s,iv:c}}},function(t,e,n){"use strict"
var r=e
r.base=n(135),r.short=n(136),r.mont=n(137),r.edwards=n(138)},function(t,e,n){var r=n(154),i=n(166),o=n(167),a=n(43),s=n(58),c=n(2).Buffer
function f(t){var e
"object"!=typeof t||c.isBuffer(t)||(e=t.passphrase,t=t.key),"string"==typeof t&&(t=c.from(t))
var n,f,u=o(t,e),h=u.tag,l=u.data
switch(h){case"CERTIFICATE":f=r.certificate.decode(l,"der").tbsCertificate.subjectPublicKeyInfo
case"PUBLIC KEY":switch(f||(f=r.PublicKey.decode(l,"der")),n=f.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return r.RSAPublicKey.decode(f.subjectPublicKey.data,"der")
case"1.2.840.10045.2.1":return f.subjectPrivateKey=f.subjectPublicKey,{type:"ec",data:f}
case"1.2.840.10040.4.1":return f.algorithm.params.pub_key=r.DSAparam.decode(f.subjectPublicKey.data,"der"),{type:"dsa",data:f.algorithm.params}
default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+h)
case"ENCRYPTED PRIVATE KEY":l=function(t,e){var n=t.algorithm.decrypt.kde.kdeparams.salt,r=parseInt(t.algorithm.decrypt.kde.kdeparams.iters.toString(),10),o=i[t.algorithm.decrypt.cipher.algo.join(".")],f=t.algorithm.decrypt.cipher.iv,u=t.subjectPrivateKey,h=parseInt(o.split("-")[1],10)/8,l=s.pbkdf2Sync(e,n,r,h,"sha1"),d=a.createDecipheriv(o,l,f),p=[]
return p.push(d.update(u)),p.push(d.final()),c.concat(p)}(l=r.EncryptedPrivateKey.decode(l,"der"),e)
case"PRIVATE KEY":switch(n=(f=r.PrivateKey.decode(l,"der")).algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return r.RSAPrivateKey.decode(f.subjectPrivateKey,"der")
case"1.2.840.10045.2.1":return{curve:f.algorithm.curve,privateKey:r.ECPrivateKey.decode(f.subjectPrivateKey,"der").privateKey}
case"1.2.840.10040.4.1":return f.algorithm.params.priv_key=r.DSAparam.decode(f.subjectPrivateKey,"der"),{type:"dsa",params:f.algorithm.params}
default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+h)
case"RSA PUBLIC KEY":return r.RSAPublicKey.decode(l,"der")
case"RSA PRIVATE KEY":return r.RSAPrivateKey.decode(l,"der")
case"DSA PRIVATE KEY":return{type:"dsa",params:r.DSAPrivateKey.decode(l,"der")}
case"EC PRIVATE KEY":return{curve:(l=r.ECPrivateKey.decode(l,"der")).parameters.value,privateKey:l.privateKey}
default:throw new Error("unknown key type "+h)}}t.exports=f,f.signature=r.signature},function(t,e,n){"use strict"
function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]}
r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return p})
var i="undefined"!=typeof document
if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")
var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,f=!1,u=function(){},h=null,l="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
function p(t,e,n,i){f=n,h=i||{}
var a=r(t,e)
return b(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(c=o[s.id]).refs--,n.push(c)}e?b(a=r(t,e)):a=[]
for(i=0;i<n.length;i++){var c
if(0===(c=n[i]).refs){for(var f=0;f<c.parts.length;f++)c.parts[f]()
delete o[c.id]}}}}function b(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id]
if(r){r.refs++
for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i])
for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]))
r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[]
for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]))
o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style")
return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+l+'~="'+t.id+'"]')
if(r){if(f)return u
r.parentNode.removeChild(r)}if(d){var i=c++
r=s||(s=v()),e=_.bind(null,r,i,!1),n=_.bind(null,r,i,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap
r&&t.setAttribute("media",r)
h.ssrId&&t.setAttribute(l,e.id)
i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
if(t.styleSheet)t.styleSheet.cssText=n
else{for(;t.firstChild;)t.removeChild(t.firstChild)
t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)}
return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return
e(t=r)}else n()}}var m,y=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")})
function _(t,e,n,r){var i=n?"":r.css
if(t.styleSheet)t.styleSheet.cssText=y(e,i)
else{var o=document.createTextNode(i),a=t.childNodes
a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e,n){var r=n(177)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(30).default)("54f0728e",r,!1,{})},function(t,e,n){var r=n(200)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(30).default)("da9731b6",r,!1,{})},function(t,e,n){var r=n(206)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(30).default)("2cec2a14",r,!1,{})},function(t,e,n){var r=n(208)
"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(30).default)("6e41dd73",r,!1,{})},function(t,e,n){"use strict"
var r=n(1),i=n(48),o=n(2).Buffer,a=new Array(16)
function s(){i.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function c(t,e){return t<<e|t>>>32-e}function f(t,e,n,r,i,o,a){return c(t+(e&n|~e&r)+i+o|0,a)+e|0}function u(t,e,n,r,i,o,a){return c(t+(e&r|n&~r)+i+o|0,a)+e|0}function h(t,e,n,r,i,o,a){return c(t+(e^n^r)+i+o|0,a)+e|0}function l(t,e,n,r,i,o,a){return c(t+(n^(e|~r))+i+o|0,a)+e|0}r(s,i),s.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e)
var n=this._a,r=this._b,i=this._c,o=this._d
n=f(n,r,i,o,t[0],3614090360,7),o=f(o,n,r,i,t[1],3905402710,12),i=f(i,o,n,r,t[2],606105819,17),r=f(r,i,o,n,t[3],3250441966,22),n=f(n,r,i,o,t[4],4118548399,7),o=f(o,n,r,i,t[5],1200080426,12),i=f(i,o,n,r,t[6],2821735955,17),r=f(r,i,o,n,t[7],4249261313,22),n=f(n,r,i,o,t[8],1770035416,7),o=f(o,n,r,i,t[9],2336552879,12),i=f(i,o,n,r,t[10],4294925233,17),r=f(r,i,o,n,t[11],2304563134,22),n=f(n,r,i,o,t[12],1804603682,7),o=f(o,n,r,i,t[13],4254626195,12),i=f(i,o,n,r,t[14],2792965006,17),n=u(n,r=f(r,i,o,n,t[15],1236535329,22),i,o,t[1],4129170786,5),o=u(o,n,r,i,t[6],3225465664,9),i=u(i,o,n,r,t[11],643717713,14),r=u(r,i,o,n,t[0],3921069994,20),n=u(n,r,i,o,t[5],3593408605,5),o=u(o,n,r,i,t[10],38016083,9),i=u(i,o,n,r,t[15],3634488961,14),r=u(r,i,o,n,t[4],3889429448,20),n=u(n,r,i,o,t[9],568446438,5),o=u(o,n,r,i,t[14],3275163606,9),i=u(i,o,n,r,t[3],4107603335,14),r=u(r,i,o,n,t[8],1163531501,20),n=u(n,r,i,o,t[13],2850285829,5),o=u(o,n,r,i,t[2],4243563512,9),i=u(i,o,n,r,t[7],1735328473,14),n=h(n,r=u(r,i,o,n,t[12],2368359562,20),i,o,t[5],4294588738,4),o=h(o,n,r,i,t[8],2272392833,11),i=h(i,o,n,r,t[11],1839030562,16),r=h(r,i,o,n,t[14],4259657740,23),n=h(n,r,i,o,t[1],2763975236,4),o=h(o,n,r,i,t[4],1272893353,11),i=h(i,o,n,r,t[7],4139469664,16),r=h(r,i,o,n,t[10],3200236656,23),n=h(n,r,i,o,t[13],681279174,4),o=h(o,n,r,i,t[0],3936430074,11),i=h(i,o,n,r,t[3],3572445317,16),r=h(r,i,o,n,t[6],76029189,23),n=h(n,r,i,o,t[9],3654602809,4),o=h(o,n,r,i,t[12],3873151461,11),i=h(i,o,n,r,t[15],530742520,16),n=l(n,r=h(r,i,o,n,t[2],3299628645,23),i,o,t[0],4096336452,6),o=l(o,n,r,i,t[7],1126891415,10),i=l(i,o,n,r,t[14],2878612391,15),r=l(r,i,o,n,t[5],4237533241,21),n=l(n,r,i,o,t[12],1700485571,6),o=l(o,n,r,i,t[3],2399980690,10),i=l(i,o,n,r,t[10],4293915773,15),r=l(r,i,o,n,t[1],2240044497,21),n=l(n,r,i,o,t[8],1873313359,6),o=l(o,n,r,i,t[15],4264355552,10),i=l(i,o,n,r,t[6],2734768916,15),r=l(r,i,o,n,t[13],1309151649,21),n=l(n,r,i,o,t[4],4149444226,6),o=l(o,n,r,i,t[11],3174756917,10),i=l(i,o,n,r,t[2],718787259,15),r=l(r,i,o,n,t[9],3951481745,21),this._a=this._a+n|0,this._b=this._b+r|0,this._c=this._c+i|0,this._d=this._d+o|0},s.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update()
var t=o.allocUnsafe(16)
return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t},t.exports=s},function(t,e,n){t.exports=i
var r=n(24).EventEmitter
function i(){r.call(this)}n(1)(i,r),i.Readable=n(37),i.Writable=n(97),i.Duplex=n(98),i.Transform=n(99),i.PassThrough=n(100),i.Stream=i,i.prototype.pipe=function(t,e){var n=this
function i(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(n.on("end",s),n.on("close",c))
var a=!1
function s(){a||(a=!0,t.end())}function c(){a||(a=!0,"function"==typeof t.destroy&&t.destroy())}function f(t){if(u(),0===r.listenerCount(this,"error"))throw t}function u(){n.removeListener("data",i),t.removeListener("drain",o),n.removeListener("end",s),n.removeListener("close",c),n.removeListener("error",f),t.removeListener("error",f),n.removeListener("end",u),n.removeListener("close",u),t.removeListener("close",u)}return n.on("error",f),t.on("error",f),n.on("end",u),n.on("close",u),t.on("close",u),t.emit("pipe",n),t}},function(t,e,n){(e=t.exports=n(49)).Stream=e,e.Readable=e,e.Writable=n(38),e.Duplex=n(15),e.Transform=n(52),e.PassThrough=n(96)},function(t,e,n){"use strict";(function(e,r,i){var o=n(25)
function a(t){var e=this
this.next=null,this.entry=null,this.finish=function(){!function(t,e,n){var r=t.entry
t.entry=null
for(;r;){var i=r.callback
e.pendingcb--,i(n),r=r.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}(e,t)}}t.exports=m
var s,c=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?r:o.nextTick
m.WritableState=g
var f=n(19)
f.inherits=n(1)
var u={deprecate:n(95)},h=n(50),l=n(2).Buffer,d=i.Uint8Array||function(){}
var p,b=n(51)
function v(){}function g(t,e){s=s||n(15),t=t||{}
var r=e instanceof s
this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.writableObjectMode)
var i=t.highWaterMark,f=t.writableHighWaterMark,u=this.objectMode?16:16384
this.highWaterMark=i||0===i?i:r&&(f||0===f)?f:u,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1
var h=!1===t.decodeStrings
this.decodeStrings=!h,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var n=t._writableState,r=n.sync,i=n.writecb
if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(n),e)!function(t,e,n,r,i){--e.pendingcb,n?(o.nextTick(i,r),o.nextTick(k,t,e),t._writableState.errorEmitted=!0,t.emit("error",r)):(i(r),t._writableState.errorEmitted=!0,t.emit("error",r),k(t,e))}(t,n,r,e,i)
else{var a=x(n)
a||n.corked||n.bufferProcessing||!n.bufferedRequest||w(t,n),r?c(_,t,n,a,i):_(t,n,a,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new a(this)}function m(t){if(s=s||n(15),!(p.call(m,this)||this instanceof s))return new m(t)
this._writableState=new g(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),h.call(this)}function y(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function _(t,e,n,r){n||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,r(),k(t,e)}function w(t,e){e.bufferProcessing=!0
var n=e.bufferedRequest
if(t._writev&&n&&n.next){var r=e.bufferedRequestCount,i=new Array(r),o=e.corkedRequestsFree
o.entry=n
for(var s=0,c=!0;n;)i[s]=n,n.isBuf||(c=!1),n=n.next,s+=1
i.allBuffers=c,y(t,e,!0,e.length,i,"",o.finish),e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new a(e),e.bufferedRequestCount=0}else{for(;n;){var f=n.chunk,u=n.encoding,h=n.callback
if(y(t,e,!1,e.objectMode?1:f.length,f,u,h),n=n.next,e.bufferedRequestCount--,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequest=n,e.bufferProcessing=!1}function x(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function S(t,e){t._final(function(n){e.pendingcb--,n&&t.emit("error",n),e.prefinished=!0,t.emit("prefinish"),k(t,e)})}function k(t,e){var n=x(e)
return n&&(!function(t,e){e.prefinished||e.finalCalled||("function"==typeof t._final?(e.pendingcb++,e.finalCalled=!0,o.nextTick(S,t,e)):(e.prefinished=!0,t.emit("prefinish")))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),n}f.inherits(m,h),g.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next
return e},function(){try{Object.defineProperty(g.prototype,"buffer",{get:u.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(p=Function.prototype[Symbol.hasInstance],Object.defineProperty(m,Symbol.hasInstance,{value:function(t){return!!p.call(this,t)||this===m&&(t&&t._writableState instanceof g)}})):p=function(t){return t instanceof this},m.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},m.prototype.write=function(t,e,n){var r,i=this._writableState,a=!1,s=!i.objectMode&&(r=t,l.isBuffer(r)||r instanceof d)
return s&&!l.isBuffer(t)&&(t=function(t){return l.from(t)}(t)),"function"==typeof e&&(n=e,e=null),s?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof n&&(n=v),i.ended?function(t,e){var n=new Error("write after end")
t.emit("error",n),o.nextTick(e,n)}(this,n):(s||function(t,e,n,r){var i=!0,a=!1
return null===n?a=new TypeError("May not write null values to stream"):"string"==typeof n||void 0===n||e.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(t.emit("error",a),o.nextTick(r,a),i=!1),i}(this,i,t,n))&&(i.pendingcb++,a=function(t,e,n,r,i,o){if(!n){var a=function(t,e,n){t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=l.from(e,n))
return e}(e,r,i)
r!==a&&(n=!0,i="buffer",r=a)}var s=e.objectMode?1:r.length
e.length+=s
var c=e.length<e.highWaterMark
c||(e.needDrain=!0)
if(e.writing||e.corked){var f=e.lastBufferedRequest
e.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},f?f.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else y(t,e,!1,s,r,i,o)
return c}(this,i,s,t,e,n)),a},m.prototype.cork=function(){this._writableState.corked++},m.prototype.uncork=function(){var t=this._writableState
t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||w(this,t))},m.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t)
return this._writableState.defaultEncoding=t,this},Object.defineProperty(m.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),m.prototype._write=function(t,e,n){n(new Error("_write() is not implemented"))},m.prototype._writev=null,m.prototype.end=function(t,e,n){var r=this._writableState
"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),null!=t&&this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||function(t,e,n){e.ending=!0,k(t,e),n&&(e.finished?o.nextTick(n):t.once("finish",n))
e.ended=!0,t.writable=!1}(this,r,n)},Object.defineProperty(m.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),m.prototype.destroy=b.destroy,m.prototype._undestroy=b.undestroy,m.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,n(12),n(93).setImmediate,n(10))},function(t,e,n){"use strict"
var r=n(2).Buffer,i=r.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
function o(t){var e
switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8"
for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return t
default:if(e)return
t=(""+t).toLowerCase(),e=!0}}(t)
if("string"!=typeof e&&(r.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t)
return e||t}(t),this.encoding){case"utf16le":this.text=c,this.end=f,e=4
break
case"utf8":this.fillLast=s,e=4
break
case"base64":this.text=u,this.end=h,e=3
break
default:return this.write=l,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function a(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function s(t){var e=this.lastTotal-this.lastNeed,n=function(t,e,n){if(128!=(192&e[0]))return t.lastNeed=0,"�"
if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�"
if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t)
return void 0!==n?n:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function c(t,e){if((t.length-e)%2==0){var n=t.toString("utf16le",e)
if(n){var r=n.charCodeAt(n.length-1)
if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function f(t){var e=t&&t.length?this.write(t):""
if(this.lastNeed){var n=this.lastTotal-this.lastNeed
return e+this.lastChar.toString("utf16le",0,n)}return e}function u(t,e){var n=(t.length-e)%3
return 0===n?t.toString("base64",e):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-n))}function h(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function l(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}e.StringDecoder=o,o.prototype.write=function(t){if(0===t.length)return""
var e,n
if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return""
n=this.lastNeed,this.lastNeed=0}else n=0
return n<t.length?e?e+this.text(t,n):this.text(t,n):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):""
return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var n=function(t,e,n){var r=e.length-1
if(r<n)return 0
var i=a(e[r])
if(i>=0)return i>0&&(t.lastNeed=i-1),i
if(--r<n||-2===i)return 0
if((i=a(e[r]))>=0)return i>0&&(t.lastNeed=i-2),i
if(--r<n||-2===i)return 0
if((i=a(e[r]))>=0)return i>0&&(2===i?i=0:t.lastNeed=i-3),i
return 0}(this,t,e)
if(!this.lastNeed)return t.toString("utf8",e)
this.lastTotal=n
var r=t.length-(n-this.lastNeed)
return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)
t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},function(t,e,n){"use strict"
var r=n(5).Buffer,i=n(1),o=n(48),a=new Array(16),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],c=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],f=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],u=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],h=[0,1518500249,1859775393,2400959708,2840853838],l=[1352829926,1548603684,1836072691,2053994217,0]
function d(){o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function p(t,e){return t<<e|t>>>32-e}function b(t,e,n,r,i,o,a,s){return p(t+(e^n^r)+o+a|0,s)+i|0}function v(t,e,n,r,i,o,a,s){return p(t+(e&n|~e&r)+o+a|0,s)+i|0}function g(t,e,n,r,i,o,a,s){return p(t+((e|~n)^r)+o+a|0,s)+i|0}function m(t,e,n,r,i,o,a,s){return p(t+(e&r|n&~r)+o+a|0,s)+i|0}function y(t,e,n,r,i,o,a,s){return p(t+(e^(n|~r))+o+a|0,s)+i|0}i(d,o),d.prototype._update=function(){for(var t=a,e=0;e<16;++e)t[e]=this._block.readInt32LE(4*e)
for(var n=0|this._a,r=0|this._b,i=0|this._c,o=0|this._d,d=0|this._e,_=0|this._a,w=0|this._b,x=0|this._c,S=0|this._d,k=0|this._e,E=0;E<80;E+=1){var A,M
E<16?(A=b(n,r,i,o,d,t[s[E]],h[0],f[E]),M=y(_,w,x,S,k,t[c[E]],l[0],u[E])):E<32?(A=v(n,r,i,o,d,t[s[E]],h[1],f[E]),M=m(_,w,x,S,k,t[c[E]],l[1],u[E])):E<48?(A=g(n,r,i,o,d,t[s[E]],h[2],f[E]),M=g(_,w,x,S,k,t[c[E]],l[2],u[E])):E<64?(A=m(n,r,i,o,d,t[s[E]],h[3],f[E]),M=v(_,w,x,S,k,t[c[E]],l[3],u[E])):(A=y(n,r,i,o,d,t[s[E]],h[4],f[E]),M=b(_,w,x,S,k,t[c[E]],l[4],u[E])),n=d,d=o,o=p(i,10),i=r,r=A,_=k,k=S,S=p(x,10),x=w,w=M}var C=this._b+i+S|0
this._b=this._c+o+k|0,this._c=this._d+d+_|0,this._d=this._e+n+w|0,this._e=this._a+r+x|0,this._a=C},d.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update()
var t=r.alloc?r.alloc(20):new r(20)
return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,12),t.writeInt32LE(this._e,16),t},t.exports=d},function(t,e,n){(e=t.exports=function(t){t=t.toLowerCase()
var n=e[t]
if(!n)throw new Error(t+" is not supported (we accept pull requests)")
return new n}).sha=n(101),e.sha1=n(102),e.sha224=n(103),e.sha256=n(53),e.sha384=n(104),e.sha512=n(54)},function(t,e,n){"use strict"
e.utils=n(110),e.Cipher=n(111),e.DES=n(112),e.CBC=n(113),e.EDE=n(114)},function(t,e,n){var r=n(115),i=n(123),o=n(64)
e.createCipher=e.Cipher=r.createCipher,e.createCipheriv=e.Cipheriv=r.createCipheriv,e.createDecipher=e.Decipher=i.createDecipher,e.createDecipheriv=e.Decipheriv=i.createDecipheriv,e.listCiphers=e.getCiphers=function(){return Object.keys(o)}},function(t,e,n){var r={ECB:n(116),CBC:n(117),CFB:n(118),CFB8:n(119),CFB1:n(120),OFB:n(121),CTR:n(62),GCM:n(62)},i=n(64)
for(var o in i)i[o].module=r[i[o].mode]
t.exports=i},function(t,e,n){(function(e){var r=n(4),i=n(16)
function o(t,n){var i=function(t){var e=a(t)
return{blinder:e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed(),unblinder:e.invm(t.modulus)}}(n),o=n.modulus.byteLength(),s=(r.mont(n.modulus),new r(t).mul(i.blinder).umod(n.modulus)),c=s.toRed(r.mont(n.prime1)),f=s.toRed(r.mont(n.prime2)),u=n.coefficient,h=n.prime1,l=n.prime2,d=c.redPow(n.exponent1),p=f.redPow(n.exponent2)
d=d.fromRed(),p=p.fromRed()
var b=d.isub(p).imul(u).umod(h)
return b.imul(l),p.iadd(b),new e(p.imul(i.unblinder).umod(n.modulus).toArray(!1,o))}function a(t){for(var e=t.modulus.byteLength(),n=new r(i(e));n.cmp(t.modulus)>=0||!n.umod(t.prime1)||!n.umod(t.prime2);)n=new r(i(e))
return n}t.exports=o,o.getr=a}).call(this,n(5).Buffer)},function(t,e,n){var r=e
r.utils=n(11),r.common=n(21),r.sha=n(140),r.ripemd=n(144),r.hmac=n(145),r.sha1=r.sha.sha1,r.sha256=r.sha.sha256,r.sha224=r.sha.sha224,r.sha384=r.sha.sha384,r.sha512=r.sha.sha512,r.ripemd160=r.ripemd.ripemd160},function(t,e){var n={}.toString
t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict"
var r=n(2).Buffer,i=n(36).Transform
function o(t){i.call(this),this._block=r.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}n(1)(o,i),o.prototype._transform=function(t,e,n){var r=null
try{this.update(t,e)}catch(t){r=t}n(r)},o.prototype._flush=function(t){var e=null
try{this.push(this.digest())}catch(t){e=t}t(e)},o.prototype.update=function(t,e){if(function(t,e){if(!r.isBuffer(t)&&"string"!=typeof t)throw new TypeError(e+" must be a string or a buffer")}(t,"Data"),this._finalized)throw new Error("Digest already called")
r.isBuffer(t)||(t=r.from(t,e))
for(var n=this._block,i=0;this._blockOffset+t.length-i>=this._blockSize;){for(var o=this._blockOffset;o<this._blockSize;)n[o++]=t[i++]
this._update(),this._blockOffset=0}for(;i<t.length;)n[this._blockOffset++]=t[i++]
for(var a=0,s=8*t.length;s>0;++a)this._length[a]+=s,(s=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*s)
return this},o.prototype._update=function(){throw new Error("_update is not implemented")},o.prototype.digest=function(t){if(this._finalized)throw new Error("Digest already called")
this._finalized=!0
var e=this._digest()
void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0
for(var n=0;n<4;++n)this._length[n]=0
return e},o.prototype._digest=function(){throw new Error("_digest is not implemented")},t.exports=o},function(t,e,n){"use strict";(function(e,r){var i=n(25)
t.exports=y
var o,a=n(47)
y.ReadableState=m
n(24).EventEmitter
var s=function(t,e){return t.listeners(e).length},c=n(50),f=n(2).Buffer,u=e.Uint8Array||function(){}
var h=n(19)
h.inherits=n(1)
var l=n(90),d=void 0
d=l&&l.debuglog?l.debuglog("stream"):function(){}
var p,b=n(91),v=n(51)
h.inherits(y,c)
var g=["error","close","destroy","pause","resume"]
function m(t,e){t=t||{}
var r=e instanceof(o=o||n(15))
this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.readableObjectMode)
var i=t.highWaterMark,a=t.readableHighWaterMark,s=this.objectMode?16:16384
this.highWaterMark=i||0===i?i:r&&(a||0===a)?a:s,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new b,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(p||(p=n(39).StringDecoder),this.decoder=new p(t.encoding),this.encoding=t.encoding)}function y(t){if(o=o||n(15),!(this instanceof y))return new y(t)
this._readableState=new m(t,this),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),c.call(this)}function _(t,e,n,r,i){var o,a=t._readableState
null===e?(a.reading=!1,function(t,e){if(e.ended)return
if(e.decoder){var n=e.decoder.end()
n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,k(t)}(t,a)):(i||(o=function(t,e){var n
r=e,f.isBuffer(r)||r instanceof u||"string"==typeof e||void 0===e||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"))
var r
return n}(a,e)),o?t.emit("error",o):a.objectMode||e&&e.length>0?("string"==typeof e||a.objectMode||Object.getPrototypeOf(e)===f.prototype||(e=function(t){return f.from(t)}(e)),r?a.endEmitted?t.emit("error",new Error("stream.unshift() after end event")):w(t,a,e,!0):a.ended?t.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!n?(e=a.decoder.write(e),a.objectMode||0!==e.length?w(t,a,e,!1):A(t,a)):w(t,a,e,!1))):r||(a.reading=!1))
return function(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}(a)}function w(t,e,n,r){e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,r?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&k(t)),A(t,e)}Object.defineProperty(y.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),y.prototype.destroy=v.destroy,y.prototype._undestroy=v.undestroy,y.prototype._destroy=function(t,e){this.push(null),e(t)},y.prototype.push=function(t,e){var n,r=this._readableState
return r.objectMode?n=!0:"string"==typeof t&&((e=e||r.defaultEncoding)!==r.encoding&&(t=f.from(t,e),e=""),n=!0),_(this,t,e,!1,n)},y.prototype.unshift=function(t){return _(this,t,null,!0,!1)},y.prototype.isPaused=function(){return!1===this._readableState.flowing},y.prototype.setEncoding=function(t){return p||(p=n(39).StringDecoder),this._readableState.decoder=new p(t),this._readableState.encoding=t,this}
var x=8388608
function S(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=x?t=x:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function k(t){var e=t._readableState
e.needReadable=!1,e.emittedReadable||(d("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?i.nextTick(E,t):E(t))}function E(t){d("emit readable"),t.emit("readable"),B(t)}function A(t,e){e.readingMore||(e.readingMore=!0,i.nextTick(M,t,e))}function M(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(d("maybeReadMore read 0"),t.read(0),n!==e.length);)n=e.length
e.readingMore=!1}function C(t){d("readable nexttick read 0"),t.read(0)}function I(t,e){e.reading||(d("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),B(t),e.flowing&&!e.reading&&t.read(0)}function B(t){var e=t._readableState
for(d("flow",e.flowing);e.flowing&&null!==t.read(););}function T(t,e){return 0===e.length?null:(e.objectMode?n=e.buffer.shift():!t||t>=e.length?(n=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):n=function(t,e,n){var r
t<e.head.data.length?(r=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):r=t===e.head.data.length?e.shift():n?function(t,e){var n=e.head,r=1,i=n.data
t-=i.length
for(;n=n.next;){var o=n.data,a=t>o.length?o.length:t
if(a===o.length?i+=o:i+=o.slice(0,t),0===(t-=a)){a===o.length?(++r,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(a))
break}++r}return e.length-=r,i}(t,e):function(t,e){var n=f.allocUnsafe(t),r=e.head,i=1
r.data.copy(n),t-=r.data.length
for(;r=r.next;){var o=r.data,a=t>o.length?o.length:t
if(o.copy(n,n.length-t,0,a),0===(t-=a)){a===o.length?(++i,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(a))
break}++i}return e.length-=i,n}(t,e)
return r}(t,e.buffer,e.decoder),n)
var n}function O(t){var e=t._readableState
if(e.length>0)throw new Error('"endReadable()" called on non-empty stream')
e.endEmitted||(e.ended=!0,i.nextTick(P,e,t))}function P(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function R(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n
return-1}y.prototype.read=function(t){d("read",t),t=parseInt(t,10)
var e=this._readableState,n=t
if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return d("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?O(this):k(this),null
if(0===(t=S(t,e))&&e.ended)return 0===e.length&&O(this),null
var r,i=e.needReadable
return d("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&d("length less than watermark",i=!0),e.ended||e.reading?d("reading or ended",i=!1):i&&(d("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=S(n,e))),null===(r=t>0?T(t,e):null)?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),n!==t&&e.ended&&O(this)),null!==r&&this.emit("data",r),r},y.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},y.prototype.pipe=function(t,e){var n=this,o=this._readableState
switch(o.pipesCount){case 0:o.pipes=t
break
case 1:o.pipes=[o.pipes,t]
break
default:o.pipes.push(t)}o.pipesCount+=1,d("pipe count=%d opts=%j",o.pipesCount,e)
var c=(!e||!1!==e.end)&&t!==r.stdout&&t!==r.stderr?u:y
function f(e,r){d("onunpipe"),e===n&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,d("cleanup"),t.removeListener("close",g),t.removeListener("finish",m),t.removeListener("drain",h),t.removeListener("error",v),t.removeListener("unpipe",f),n.removeListener("end",u),n.removeListener("end",y),n.removeListener("data",b),l=!0,!o.awaitDrain||t._writableState&&!t._writableState.needDrain||h())}function u(){d("onend"),t.end()}o.endEmitted?i.nextTick(c):n.once("end",c),t.on("unpipe",f)
var h=function(t){return function(){var e=t._readableState
d("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&s(t,"data")&&(e.flowing=!0,B(t))}}(n)
t.on("drain",h)
var l=!1
var p=!1
function b(e){d("ondata"),p=!1,!1!==t.write(e)||p||((1===o.pipesCount&&o.pipes===t||o.pipesCount>1&&-1!==R(o.pipes,t))&&!l&&(d("false write response, pause",n._readableState.awaitDrain),n._readableState.awaitDrain++,p=!0),n.pause())}function v(e){d("onerror",e),y(),t.removeListener("error",v),0===s(t,"error")&&t.emit("error",e)}function g(){t.removeListener("finish",m),y()}function m(){d("onfinish"),t.removeListener("close",g),y()}function y(){d("unpipe"),n.unpipe(t)}return n.on("data",b),function(t,e,n){if("function"==typeof t.prependListener)return t.prependListener(e,n)
t._events&&t._events[e]?a(t._events[e])?t._events[e].unshift(n):t._events[e]=[n,t._events[e]]:t.on(e,n)}(t,"error",v),t.once("close",g),t.once("finish",m),t.emit("pipe",n),o.flowing||(d("pipe resume"),n.resume()),t},y.prototype.unpipe=function(t){var e=this._readableState,n={hasUnpiped:!1}
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,n),this)
if(!t){var r=e.pipes,i=e.pipesCount
e.pipes=null,e.pipesCount=0,e.flowing=!1
for(var o=0;o<i;o++)r[o].emit("unpipe",this,n)
return this}var a=R(e.pipes,t)
return-1===a?this:(e.pipes.splice(a,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,n),this)},y.prototype.on=function(t,e){var n=c.prototype.on.call(this,t,e)
if("data"===t)!1!==this._readableState.flowing&&this.resume()
else if("readable"===t){var r=this._readableState
r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&k(this):i.nextTick(C,this))}return n},y.prototype.addListener=y.prototype.on,y.prototype.resume=function(){var t=this._readableState
return t.flowing||(d("resume"),t.flowing=!0,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,i.nextTick(I,t,e))}(this,t)),this},y.prototype.pause=function(){return d("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(d("pause"),this._readableState.flowing=!1,this.emit("pause")),this},y.prototype.wrap=function(t){var e=this,n=this._readableState,r=!1
for(var i in t.on("end",function(){if(d("wrapped end"),n.decoder&&!n.ended){var t=n.decoder.end()
t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(i){(d("wrapped data"),n.decoder&&(i=n.decoder.write(i)),n.objectMode&&null==i)||(n.objectMode||i&&i.length)&&(e.push(i)||(r=!0,t.pause()))}),t)void 0===this[i]&&"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i))
for(var o=0;o<g.length;o++)t.on(g[o],this.emit.bind(this,g[o]))
return this._read=function(e){d("wrapped _read",e),r&&(r=!1,t.resume())},this},Object.defineProperty(y.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),y._fromList=T}).call(this,n(10),n(12))},function(t,e,n){t.exports=n(24).EventEmitter},function(t,e,n){"use strict"
var r=n(25)
function i(t,e){t.emit("error",e)}t.exports={destroy:function(t,e){var n=this,o=this._readableState&&this._readableState.destroyed,a=this._writableState&&this._writableState.destroyed
return o||a?(e?e(t):!t||this._writableState&&this._writableState.errorEmitted||r.nextTick(i,this,t),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!e&&t?(r.nextTick(i,n,t),n._writableState&&(n._writableState.errorEmitted=!0)):e&&e(t)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(t,e,n){"use strict"
t.exports=a
var r=n(15),i=n(19)
function o(t,e){var n=this._transformState
n.transforming=!1
var r=n.writecb
if(!r)return this.emit("error",new Error("write callback called multiple times"))
n.writechunk=null,n.writecb=null,null!=e&&this.push(e),r(t)
var i=this._readableState
i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}function a(t){if(!(this instanceof a))return new a(t)
r.call(this,t),this._transformState={afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",s)}function s(){var t=this
"function"==typeof this._flush?this._flush(function(e,n){c(t,e,n)}):c(this,null,null)}function c(t,e,n){if(e)return t.emit("error",e)
if(null!=n&&t.push(n),t._writableState.length)throw new Error("Calling transform done when ws.length != 0")
if(t._transformState.transforming)throw new Error("Calling transform done when still transforming")
return t.push(null)}i.inherits=n(1),i.inherits(a,r),a.prototype.push=function(t,e){return this._transformState.needTransform=!1,r.prototype.push.call(this,t,e)},a.prototype._transform=function(t,e,n){throw new Error("_transform() is not implemented")},a.prototype._write=function(t,e,n){var r=this._transformState
if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(t){var e=this._transformState
null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0},a.prototype._destroy=function(t,e){var n=this
r.prototype._destroy.call(this,t,function(t){e(t),n.emit("close")})}},function(t,e,n){var r=n(1),i=n(17),o=n(2).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=new Array(64)
function c(){this.init(),this._w=s,i.call(this,64,56)}function f(t,e,n){return n^t&(e^n)}function u(t,e,n){return t&e|n&(t|e)}function h(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function d(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}r(c,i),c.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,c=0|this._e,p=0|this._f,b=0|this._g,v=0|this._h,g=0;g<16;++g)n[g]=t.readInt32BE(4*g)
for(;g<64;++g)n[g]=0|(((e=n[g-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+n[g-7]+d(n[g-15])+n[g-16]
for(var m=0;m<64;++m){var y=v+l(c)+f(c,p,b)+a[m]+n[m]|0,_=h(r)+u(r,i,o)|0
v=b,b=p,p=c,c=s+y|0,s=o,o=i,i=r,r=y+_|0}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=v+this._h|0},c.prototype._hash=function(){var t=o.allocUnsafe(32)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=c},function(t,e,n){var r=n(1),i=n(17),o=n(2).Buffer,a=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],s=new Array(160)
function c(){this.init(),this._w=s,i.call(this,128,112)}function f(t,e,n){return n^t&(e^n)}function u(t,e,n){return t&e|n&(t|e)}function h(t,e){return(t>>>28|e<<4)^(e>>>2|t<<30)^(e>>>7|t<<25)}function l(t,e){return(t>>>14|e<<18)^(t>>>18|e<<14)^(e>>>9|t<<23)}function d(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^t>>>7}function p(t,e){return(t>>>1|e<<31)^(t>>>8|e<<24)^(t>>>7|e<<25)}function b(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^t>>>6}function v(t,e){return(t>>>19|e<<13)^(e>>>29|t<<3)^(t>>>6|e<<26)}function g(t,e){return t>>>0<e>>>0?1:0}r(c,i),c.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},c.prototype._update=function(t){for(var e=this._w,n=0|this._ah,r=0|this._bh,i=0|this._ch,o=0|this._dh,s=0|this._eh,c=0|this._fh,m=0|this._gh,y=0|this._hh,_=0|this._al,w=0|this._bl,x=0|this._cl,S=0|this._dl,k=0|this._el,E=0|this._fl,A=0|this._gl,M=0|this._hl,C=0;C<32;C+=2)e[C]=t.readInt32BE(4*C),e[C+1]=t.readInt32BE(4*C+4)
for(;C<160;C+=2){var I=e[C-30],B=e[C-30+1],T=d(I,B),O=p(B,I),P=b(I=e[C-4],B=e[C-4+1]),R=v(B,I),D=e[C-14],N=e[C-14+1],L=e[C-32],j=e[C-32+1],U=O+N|0,z=T+D+g(U,O)|0
z=(z=z+P+g(U=U+R|0,R)|0)+L+g(U=U+j|0,j)|0,e[C]=z,e[C+1]=U}for(var q=0;q<160;q+=2){z=e[q],U=e[q+1]
var F=u(n,r,i),K=u(_,w,x),$=h(n,_),H=h(_,n),W=l(s,k),V=l(k,s),Y=a[q],X=a[q+1],G=f(s,c,m),J=f(k,E,A),Z=M+V|0,Q=y+W+g(Z,M)|0
Q=(Q=(Q=Q+G+g(Z=Z+J|0,J)|0)+Y+g(Z=Z+X|0,X)|0)+z+g(Z=Z+U|0,U)|0
var tt=H+K|0,et=$+F+g(tt,H)|0
y=m,M=A,m=c,A=E,c=s,E=k,s=o+Q+g(k=S+Z|0,S)|0,o=i,S=x,i=r,x=w,r=n,w=_,n=Q+et+g(_=Z+tt|0,Z)|0}this._al=this._al+_|0,this._bl=this._bl+w|0,this._cl=this._cl+x|0,this._dl=this._dl+S|0,this._el=this._el+k|0,this._fl=this._fl+E|0,this._gl=this._gl+A|0,this._hl=this._hl+M|0,this._ah=this._ah+n+g(this._al,_)|0,this._bh=this._bh+r+g(this._bl,w)|0,this._ch=this._ch+i+g(this._cl,x)|0,this._dh=this._dh+o+g(this._dl,S)|0,this._eh=this._eh+s+g(this._el,k)|0,this._fh=this._fh+c+g(this._fl,E)|0,this._gh=this._gh+m+g(this._gl,A)|0,this._hh=this._hh+y+g(this._hl,M)|0},c.prototype._hash=function(){var t=o.allocUnsafe(64)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},t.exports=c},function(t,e,n){"use strict"
var r=n(1),i=n(105),o=n(13),a=n(2).Buffer,s=n(56),c=n(40),f=n(41),u=a.alloc(128)
function h(t,e){o.call(this,"digest"),"string"==typeof e&&(e=a.from(e))
var n="sha512"===t||"sha384"===t?128:64;(this._alg=t,this._key=e,e.length>n)?e=("rmd160"===t?new c:f(t)).update(e).digest():e.length<n&&(e=a.concat([e,u],n))
for(var r=this._ipad=a.allocUnsafe(n),i=this._opad=a.allocUnsafe(n),s=0;s<n;s++)r[s]=54^e[s],i[s]=92^e[s]
this._hash="rmd160"===t?new c:f(t),this._hash.update(r)}r(h,o),h.prototype._update=function(t){this._hash.update(t)},h.prototype._final=function(){var t=this._hash.digest()
return("rmd160"===this._alg?new c:f(this._alg)).update(this._opad).update(t).digest()},t.exports=function(t,e){return"rmd160"===(t=t.toLowerCase())||"ripemd160"===t?new h("rmd160",e):"md5"===t?new i(s,e):new h(t,e)}},function(t,e,n){var r=n(35)
t.exports=function(t){return(new r).update(t).digest()}},function(t){t.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},function(t,e,n){e.pbkdf2=n(107),e.pbkdf2Sync=n(61)},function(t,e,n){(function(e){var n=Math.pow(2,30)-1
function r(t,n){if("string"!=typeof t&&!e.isBuffer(t))throw new TypeError(n+" must be a buffer or string")}t.exports=function(t,e,i,o){if(r(t,"Password"),r(e,"Salt"),"number"!=typeof i)throw new TypeError("Iterations not a number")
if(i<0)throw new TypeError("Bad iterations")
if("number"!=typeof o)throw new TypeError("Key length not a number")
if(o<0||o>n||o!=o)throw new TypeError("Bad key length")}}).call(this,n(5).Buffer)},function(t,e,n){(function(e){var n
e.browser?n="utf-8":n=parseInt(e.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary"
t.exports=n}).call(this,n(12))},function(t,e,n){var r=n(56),i=n(40),o=n(41),a=n(59),s=n(60),c=n(2).Buffer,f=c.alloc(128),u={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20}
function h(t,e,n){var a=function(t){return"rmd160"===t||"ripemd160"===t?function(t){return(new i).update(t).digest()}:"md5"===t?r:function(e){return o(t).update(e).digest()}}(t),s="sha512"===t||"sha384"===t?128:64
e.length>s?e=a(e):e.length<s&&(e=c.concat([e,f],s))
for(var h=c.allocUnsafe(s+u[t]),l=c.allocUnsafe(s+u[t]),d=0;d<s;d++)h[d]=54^e[d],l[d]=92^e[d]
var p=c.allocUnsafe(s+n+4)
h.copy(p,0,0,s),this.ipad1=p,this.ipad2=h,this.opad=l,this.alg=t,this.blocksize=s,this.hash=a,this.size=u[t]}h.prototype.run=function(t,e){return t.copy(e,this.blocksize),this.hash(e).copy(this.opad,this.blocksize),this.hash(this.opad)},t.exports=function(t,e,n,r,i){a(t,e,n,r),c.isBuffer(t)||(t=c.from(t,s)),c.isBuffer(e)||(e=c.from(e,s))
var o=new h(i=i||"sha1",t,e.length),f=c.allocUnsafe(r),l=c.allocUnsafe(e.length+4)
e.copy(l,0,0,e.length)
for(var d=0,p=u[i],b=Math.ceil(r/p),v=1;v<=b;v++){l.writeUInt32BE(v,e.length)
for(var g=o.run(l,o.ipad1),m=g,y=1;y<n;y++){m=o.run(m,o.ipad2)
for(var _=0;_<p;_++)g[_]^=m[_]}g.copy(f,d),d+=p}return f}},function(t,e,n){var r=n(20),i=n(2).Buffer,o=n(63)
function a(t){var e=t._cipher.encryptBlockRaw(t._prev)
return o(t._prev),e}e.encrypt=function(t,e){var n=Math.ceil(e.length/16),o=t._cache.length
t._cache=i.concat([t._cache,i.allocUnsafe(16*n)])
for(var s=0;s<n;s++){var c=a(t),f=o+16*s
t._cache.writeUInt32BE(c[0],f+0),t._cache.writeUInt32BE(c[1],f+4),t._cache.writeUInt32BE(c[2],f+8),t._cache.writeUInt32BE(c[3],f+12)}var u=t._cache.slice(0,e.length)
return t._cache=t._cache.slice(e.length),r(e,u)}},function(t,e){t.exports=function(t){for(var e,n=t.length;n--;){if(255!==(e=t.readUInt8(n))){e++,t.writeUInt8(e,n)
break}t.writeUInt8(0,n)}}},function(t){t.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},function(t,e,n){var r=n(26),i=n(2).Buffer,o=n(13),a=n(1),s=n(122),c=n(20),f=n(63)
function u(t,e,n,a){o.call(this)
var c=i.alloc(4,0)
this._cipher=new r.AES(e)
var u=this._cipher.encryptBlock(c)
this._ghash=new s(u),n=function(t,e,n){if(12===e.length)return t._finID=i.concat([e,i.from([0,0,0,1])]),i.concat([e,i.from([0,0,0,2])])
var r=new s(n),o=e.length,a=o%16
r.update(e),a&&(a=16-a,r.update(i.alloc(a,0))),r.update(i.alloc(8,0))
var c=8*o,u=i.alloc(8)
u.writeUIntBE(c,0,8),r.update(u),t._finID=r.state
var h=i.from(t._finID)
return f(h),h}(this,n,u),this._prev=i.from(n),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,this._alen=0,this._len=0,this._mode=t,this._authTag=null,this._called=!1}a(u,o),u.prototype._update=function(t){if(!this._called&&this._alen){var e=16-this._alen%16
e<16&&(e=i.alloc(e,0),this._ghash.update(e))}this._called=!0
var n=this._mode.encrypt(this,t)
return this._decrypt?this._ghash.update(t):this._ghash.update(n),this._len+=t.length,n},u.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data")
var t=c(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID))
if(this._decrypt&&function(t,e){var n=0
t.length!==e.length&&n++
for(var r=Math.min(t.length,e.length),i=0;i<r;++i)n+=t[i]^e[i]
return n}(t,this._authTag))throw new Error("Unsupported state or unable to authenticate data")
this._authTag=t,this._cipher.scrub()},u.prototype.getAuthTag=function(){if(this._decrypt||!i.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state")
return this._authTag},u.prototype.setAuthTag=function(t){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state")
this._authTag=t},u.prototype.setAAD=function(t){if(this._called)throw new Error("Attempting to set AAD in unsupported state")
this._ghash.update(t),this._alen+=t.length},t.exports=u},function(t,e,n){var r=n(26),i=n(2).Buffer,o=n(13)
function a(t,e,n,a){o.call(this),this._cipher=new r.AES(e),this._prev=i.from(n),this._cache=i.allocUnsafe(0),this._secCache=i.allocUnsafe(0),this._decrypt=a,this._mode=t}n(1)(a,o),a.prototype._update=function(t){return this._mode.encrypt(this,t,this._decrypt)},a.prototype._final=function(){this._cipher.scrub()},t.exports=a},function(t,e,n){var r=n(16)
t.exports=m,m.simpleSieve=v,m.fermatTest=g
var i=n(4),o=new i(24),a=new(n(68)),s=new i(1),c=new i(2),f=new i(5),u=(new i(16),new i(8),new i(10)),h=new i(3),l=(new i(7),new i(11)),d=new i(4),p=(new i(12),null)
function b(){if(null!==p)return p
var t=[]
t[0]=2
for(var e=1,n=3;n<1048576;n+=2){for(var r=Math.ceil(Math.sqrt(n)),i=0;i<e&&t[i]<=r&&n%t[i]!=0;i++);e!==i&&t[i]<=r||(t[e++]=n)}return p=t,t}function v(t){for(var e=b(),n=0;n<e.length;n++)if(0===t.modn(e[n]))return 0===t.cmpn(e[n])
return!0}function g(t){var e=i.mont(t)
return 0===c.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1)}function m(t,e){if(t<16)return new i(2===e||5===e?[140,123]:[140,39])
var n,p
for(e=new i(e);;){for(n=new i(r(Math.ceil(t/8)));n.bitLength()>t;)n.ishrn(1)
if(n.isEven()&&n.iadd(s),n.testn(1)||n.iadd(c),e.cmp(c)){if(!e.cmp(f))for(;n.mod(u).cmp(h);)n.iadd(d)}else for(;n.mod(o).cmp(l);)n.iadd(d)
if(v(p=n.shrn(1))&&v(n)&&g(p)&&g(n)&&a.test(p)&&a.test(n))return n}}},function(t,e,n){var r=n(4),i=n(69)
function o(t){this.rand=t||new i.Rand}t.exports=o,o.create=function(t){return new o(t)},o.prototype._randbelow=function(t){var e=t.bitLength(),n=Math.ceil(e/8)
do{var i=new r(this.rand.generate(n))}while(i.cmp(t)>=0)
return i},o.prototype._randrange=function(t,e){var n=e.sub(t)
return t.add(this._randbelow(n))},o.prototype.test=function(t,e,n){var i=t.bitLength(),o=r.mont(t),a=new r(1).toRed(o)
e||(e=Math.max(1,i/48|0))
for(var s=t.subn(1),c=0;!s.testn(c);c++);for(var f=t.shrn(c),u=s.toRed(o);e>0;e--){var h=this._randrange(new r(2),s)
n&&n(h)
var l=h.toRed(o).redPow(f)
if(0!==l.cmp(a)&&0!==l.cmp(u)){for(var d=1;d<c;d++){if(0===(l=l.redSqr()).cmp(a))return!1
if(0===l.cmp(u))break}if(d===c)return!1}}return!0},o.prototype.getDivisor=function(t,e){var n=t.bitLength(),i=r.mont(t),o=new r(1).toRed(i)
e||(e=Math.max(1,n/48|0))
for(var a=t.subn(1),s=0;!a.testn(s);s++);for(var c=t.shrn(s),f=a.toRed(i);e>0;e--){var u=this._randrange(new r(2),a),h=t.gcd(u)
if(0!==h.cmpn(1))return h
var l=u.toRed(i).redPow(c)
if(0!==l.cmp(o)&&0!==l.cmp(f)){for(var d=1;d<s;d++){if(0===(l=l.redSqr()).cmp(o))return l.fromRed().subn(1).gcd(t)
if(0===l.cmp(f))break}if(d===s)return(l=l.redSqr()).fromRed().subn(1).gcd(t)}}return!1}},function(t,e,n){var r
function i(t){this.rand=t}if(t.exports=function(t){return r||(r=new i(null)),r.generate(t)},t.exports.Rand=i,i.prototype.generate=function(t){return this._rand(t)},i.prototype._rand=function(t){if(this.rand.getBytes)return this.rand.getBytes(t)
for(var e=new Uint8Array(t),n=0;n<e.length;n++)e[n]=this.rand.getByte()
return e},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?i.prototype._rand=function(t){var e=new Uint8Array(t)
return self.crypto.getRandomValues(e),e}:self.msCrypto&&self.msCrypto.getRandomValues?i.prototype._rand=function(t){var e=new Uint8Array(t)
return self.msCrypto.getRandomValues(e),e}:"object"==typeof window&&(i.prototype._rand=function(){throw new Error("Not implemented yet")})
else try{var o=n(128)
if("function"!=typeof o.randomBytes)throw new Error("Not supported")
i.prototype._rand=function(t){return o.randomBytes(t)}}catch(t){}},function(t,e,n){"use strict"
var r=e
function i(t){return 1===t.length?"0"+t:t}function o(t){for(var e="",n=0;n<t.length;n++)e+=i(t[n].toString(16))
return e}r.toArray=function(t,e){if(Array.isArray(t))return t.slice()
if(!t)return[]
var n=[]
if("string"!=typeof t){for(var r=0;r<t.length;r++)n[r]=0|t[r]
return n}if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),r=0;r<t.length;r+=2)n.push(parseInt(t[r]+t[r+1],16))
else for(r=0;r<t.length;r++){var i=t.charCodeAt(r),o=i>>8,a=255&i
o?n.push(o,a):n.push(a)}return n},r.zero2=i,r.toHex=o,r.encode=function(t,e){return"hex"===e?o(t):t}},function(t,e,n){"use strict"
var r=n(11).rotr32
function i(t,e,n){return t&e^~t&n}function o(t,e,n){return t&e^t&n^e&n}function a(t,e,n){return t^e^n}e.ft_1=function(t,e,n,r){return 0===t?i(e,n,r):1===t||3===t?a(e,n,r):2===t?o(e,n,r):void 0},e.ch32=i,e.maj32=o,e.p32=a,e.s0_256=function(t){return r(t,2)^r(t,13)^r(t,22)},e.s1_256=function(t){return r(t,6)^r(t,11)^r(t,25)},e.g0_256=function(t){return r(t,7)^r(t,18)^t>>>3},e.g1_256=function(t){return r(t,17)^r(t,19)^t>>>10}},function(t,e,n){"use strict"
var r=n(11),i=n(21),o=n(71),a=n(9),s=r.sum32,c=r.sum32_4,f=r.sum32_5,u=o.ch32,h=o.maj32,l=o.s0_256,d=o.s1_256,p=o.g0_256,b=o.g1_256,v=i.BlockHash,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function m(){if(!(this instanceof m))return new m
v.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=g,this.W=new Array(64)}r.inherits(m,v),t.exports=m,m.blockSize=512,m.outSize=256,m.hmacStrength=192,m.padLength=64,m.prototype._update=function(t,e){for(var n=this.W,r=0;r<16;r++)n[r]=t[e+r]
for(;r<n.length;r++)n[r]=c(b(n[r-2]),n[r-7],p(n[r-15]),n[r-16])
var i=this.h[0],o=this.h[1],v=this.h[2],g=this.h[3],m=this.h[4],y=this.h[5],_=this.h[6],w=this.h[7]
for(a(this.k.length===n.length),r=0;r<n.length;r++){var x=f(w,d(m),u(m,y,_),this.k[r],n[r]),S=s(l(i),h(i,o,v))
w=_,_=y,y=m,m=s(g,x),g=v,v=o,o=i,i=s(x,S)}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],v),this.h[3]=s(this.h[3],g),this.h[4]=s(this.h[4],m),this.h[5]=s(this.h[5],y),this.h[6]=s(this.h[6],_),this.h[7]=s(this.h[7],w)},m.prototype._digest=function(t){return"hex"===t?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(t,e,n){"use strict"
var r=n(11),i=n(21),o=n(9),a=r.rotr64_hi,s=r.rotr64_lo,c=r.shr64_hi,f=r.shr64_lo,u=r.sum64,h=r.sum64_hi,l=r.sum64_lo,d=r.sum64_4_hi,p=r.sum64_4_lo,b=r.sum64_5_hi,v=r.sum64_5_lo,g=i.BlockHash,m=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]
function y(){if(!(this instanceof y))return new y
g.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=m,this.W=new Array(160)}function _(t,e,n,r,i){var o=t&n^~t&i
return o<0&&(o+=4294967296),o}function w(t,e,n,r,i,o){var a=e&r^~e&o
return a<0&&(a+=4294967296),a}function x(t,e,n,r,i){var o=t&n^t&i^n&i
return o<0&&(o+=4294967296),o}function S(t,e,n,r,i,o){var a=e&r^e&o^r&o
return a<0&&(a+=4294967296),a}function k(t,e){var n=a(t,e,28)^a(e,t,2)^a(e,t,7)
return n<0&&(n+=4294967296),n}function E(t,e){var n=s(t,e,28)^s(e,t,2)^s(e,t,7)
return n<0&&(n+=4294967296),n}function A(t,e){var n=a(t,e,14)^a(t,e,18)^a(e,t,9)
return n<0&&(n+=4294967296),n}function M(t,e){var n=s(t,e,14)^s(t,e,18)^s(e,t,9)
return n<0&&(n+=4294967296),n}function C(t,e){var n=a(t,e,1)^a(t,e,8)^c(t,e,7)
return n<0&&(n+=4294967296),n}function I(t,e){var n=s(t,e,1)^s(t,e,8)^f(t,e,7)
return n<0&&(n+=4294967296),n}function B(t,e){var n=a(t,e,19)^a(e,t,29)^c(t,e,6)
return n<0&&(n+=4294967296),n}function T(t,e){var n=s(t,e,19)^s(e,t,29)^f(t,e,6)
return n<0&&(n+=4294967296),n}r.inherits(y,g),t.exports=y,y.blockSize=1024,y.outSize=512,y.hmacStrength=192,y.padLength=128,y.prototype._prepareBlock=function(t,e){for(var n=this.W,r=0;r<32;r++)n[r]=t[e+r]
for(;r<n.length;r+=2){var i=B(n[r-4],n[r-3]),o=T(n[r-4],n[r-3]),a=n[r-14],s=n[r-13],c=C(n[r-30],n[r-29]),f=I(n[r-30],n[r-29]),u=n[r-32],h=n[r-31]
n[r]=d(i,o,a,s,c,f,u,h),n[r+1]=p(i,o,a,s,c,f,u,h)}},y.prototype._update=function(t,e){this._prepareBlock(t,e)
var n=this.W,r=this.h[0],i=this.h[1],a=this.h[2],s=this.h[3],c=this.h[4],f=this.h[5],d=this.h[6],p=this.h[7],g=this.h[8],m=this.h[9],y=this.h[10],C=this.h[11],I=this.h[12],B=this.h[13],T=this.h[14],O=this.h[15]
o(this.k.length===n.length)
for(var P=0;P<n.length;P+=2){var R=T,D=O,N=A(g,m),L=M(g,m),j=_(g,m,y,C,I),U=w(g,m,y,C,I,B),z=this.k[P],q=this.k[P+1],F=n[P],K=n[P+1],$=b(R,D,N,L,j,U,z,q,F,K),H=v(R,D,N,L,j,U,z,q,F,K)
R=k(r,i),D=E(r,i),N=x(r,i,a,s,c),L=S(r,i,a,s,c,f)
var W=h(R,D,N,L),V=l(R,D,N,L)
T=I,O=B,I=y,B=C,y=g,C=m,g=h(d,p,$,H),m=l(p,p,$,H),d=c,p=f,c=a,f=s,a=r,s=i,r=h($,H,W,V),i=l($,H,W,V)}u(this.h,0,r,i),u(this.h,2,a,s),u(this.h,4,c,f),u(this.h,6,d,p),u(this.h,8,g,m),u(this.h,10,y,C),u(this.h,12,I,B),u(this.h,14,T,O)},y.prototype._digest=function(t){return"hex"===t?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(t,e,n){var r=n(1),i=n(23).Reporter,o=n(5).Buffer
function a(t,e){i.call(this,e),o.isBuffer(t)?(this.base=t,this.offset=0,this.length=t.length):this.error("Input not Buffer")}function s(t,e){if(Array.isArray(t))this.length=0,this.value=t.map(function(t){return t instanceof s||(t=new s(t,e)),this.length+=t.length,t},this)
else if("number"==typeof t){if(!(0<=t&&t<=255))return e.error("non-byte EncoderBuffer value")
this.value=t,this.length=1}else if("string"==typeof t)this.value=t,this.length=o.byteLength(t)
else{if(!o.isBuffer(t))return e.error("Unsupported type: "+typeof t)
this.value=t,this.length=t.length}}r(a,i),e.DecoderBuffer=a,a.prototype.save=function(){return{offset:this.offset,reporter:i.prototype.save.call(this)}},a.prototype.restore=function(t){var e=new a(this.base)
return e.offset=t.offset,e.length=this.offset,this.offset=t.offset,i.prototype.restore.call(this,t.reporter),e},a.prototype.isEmpty=function(){return this.offset===this.length},a.prototype.readUInt8=function(t){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(t||"DecoderBuffer overrun")},a.prototype.skip=function(t,e){if(!(this.offset+t<=this.length))return this.error(e||"DecoderBuffer overrun")
var n=new a(this.base)
return n._reporterState=this._reporterState,n.offset=this.offset,n.length=this.offset+t,this.offset+=t,n},a.prototype.raw=function(t){return this.base.slice(t?t.offset:this.offset,this.length)},e.EncoderBuffer=s,s.prototype.join=function(t,e){return t||(t=new o(this.length)),e||(e=0),0===this.length?t:(Array.isArray(this.value)?this.value.forEach(function(n){n.join(t,e),e+=n.length}):("number"==typeof this.value?t[e]=this.value:"string"==typeof this.value?t.write(this.value,e):o.isBuffer(this.value)&&this.value.copy(t,e),e+=this.length),t)}},function(t,e,n){var r=e
r._reverse=function(t){var e={}
return Object.keys(t).forEach(function(n){(0|n)==n&&(n|=0)
var r=t[n]
e[r]=n}),e},r.der=n(160)},function(t,e,n){var r=n(1),i=n(22),o=i.base,a=i.bignum,s=i.constants.der
function c(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new f,this.tree._init(t.body)}function f(t){o.Node.call(this,"der",t)}function u(t,e){var n=t.readUInt8(e)
if(t.isError(n))return n
var r=s.tagClass[n>>6],i=0==(32&n)
if(31==(31&n)){var o=n
for(n=0;128==(128&o);){if(o=t.readUInt8(e),t.isError(o))return o
n<<=7,n|=127&o}}else n&=31
return{cls:r,primitive:i,tag:n,tagStr:s.tag[n]}}function h(t,e,n){var r=t.readUInt8(n)
if(t.isError(r))return r
if(!e&&128===r)return null
if(0==(128&r))return r
var i=127&r
if(i>4)return t.error("length octect is too long")
r=0
for(var o=0;o<i;o++){r<<=8
var a=t.readUInt8(n)
if(t.isError(a))return a
r|=a}return r}t.exports=c,c.prototype.decode=function(t,e){return t instanceof o.DecoderBuffer||(t=new o.DecoderBuffer(t,e)),this.tree._decode(t,e)},r(f,o.Node),f.prototype._peekTag=function(t,e,n){if(t.isEmpty())return!1
var r=t.save(),i=u(t,'Failed to peek tag: "'+e+'"')
return t.isError(i)?i:(t.restore(r),i.tag===e||i.tagStr===e||i.tagStr+"of"===e||n)},f.prototype._decodeTag=function(t,e,n){var r=u(t,'Failed to decode tag of "'+e+'"')
if(t.isError(r))return r
var i=h(t,r.primitive,'Failed to get length of "'+e+'"')
if(t.isError(i))return i
if(!n&&r.tag!==e&&r.tagStr!==e&&r.tagStr+"of"!==e)return t.error('Failed to match tag: "'+e+'"')
if(r.primitive||null!==i)return t.skip(i,'Failed to match body of: "'+e+'"')
var o=t.save(),a=this._skipUntilEnd(t,'Failed to skip indefinite length body: "'+this.tag+'"')
return t.isError(a)?a:(i=t.offset-o.offset,t.restore(o),t.skip(i,'Failed to match body of: "'+e+'"'))},f.prototype._skipUntilEnd=function(t,e){for(;;){var n=u(t,e)
if(t.isError(n))return n
var r,i=h(t,n.primitive,e)
if(t.isError(i))return i
if(r=n.primitive||null!==i?t.skip(i):this._skipUntilEnd(t,e),t.isError(r))return r
if("end"===n.tagStr)break}},f.prototype._decodeList=function(t,e,n,r){for(var i=[];!t.isEmpty();){var o=this._peekTag(t,"end")
if(t.isError(o))return o
var a=n.decode(t,"der",r)
if(t.isError(a)&&o)break
i.push(a)}return i},f.prototype._decodeStr=function(t,e){if("bitstr"===e){var n=t.readUInt8()
return t.isError(n)?n:{unused:n,data:t.raw()}}if("bmpstr"===e){var r=t.raw()
if(r.length%2==1)return t.error("Decoding of string type: bmpstr length mismatch")
for(var i="",o=0;o<r.length/2;o++)i+=String.fromCharCode(r.readUInt16BE(2*o))
return i}if("numstr"===e){var a=t.raw().toString("ascii")
return this._isNumstr(a)?a:t.error("Decoding of string type: numstr unsupported characters")}if("octstr"===e)return t.raw()
if("objDesc"===e)return t.raw()
if("printstr"===e){var s=t.raw().toString("ascii")
return this._isPrintstr(s)?s:t.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(e)?t.raw().toString():t.error("Decoding of string type: "+e+" unsupported")},f.prototype._decodeObjid=function(t,e,n){for(var r,i=[],o=0;!t.isEmpty();){var a=t.readUInt8()
o<<=7,o|=127&a,0==(128&a)&&(i.push(o),o=0)}128&a&&i.push(o)
var s=i[0]/40|0,c=i[0]%40
if(r=n?i:[s,c].concat(i.slice(1)),e){var f=e[r.join(" ")]
void 0===f&&(f=e[r.join(".")]),void 0!==f&&(r=f)}return r},f.prototype._decodeTime=function(t,e){var n=t.raw().toString()
if("gentime"===e)var r=0|n.slice(0,4),i=0|n.slice(4,6),o=0|n.slice(6,8),a=0|n.slice(8,10),s=0|n.slice(10,12),c=0|n.slice(12,14)
else{if("utctime"!==e)return t.error("Decoding "+e+" time is not supported yet")
r=0|n.slice(0,2),i=0|n.slice(2,4),o=0|n.slice(4,6),a=0|n.slice(6,8),s=0|n.slice(8,10),c=0|n.slice(10,12)
r=r<70?2e3+r:1900+r}return Date.UTC(r,i-1,o,a,s,c,0)},f.prototype._decodeNull=function(t){return null},f.prototype._decodeBool=function(t){var e=t.readUInt8()
return t.isError(e)?e:0!==e},f.prototype._decodeInt=function(t,e){var n=t.raw(),r=new a(n)
return e&&(r=e[r.toString(10)]||r),r},f.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getDecoder("der").tree}},function(t,e,n){var r=n(1),i=n(5).Buffer,o=n(22),a=o.base,s=o.constants.der
function c(t){this.enc="der",this.name=t.name,this.entity=t,this.tree=new f,this.tree._init(t.body)}function f(t){a.Node.call(this,"der",t)}function u(t){return t<10?"0"+t:t}t.exports=c,c.prototype.encode=function(t,e){return this.tree._encode(t,e).join()},r(f,a.Node),f.prototype._encodeComposite=function(t,e,n,r){var o,a=function(t,e,n,r){var i
"seqof"===t?t="seq":"setof"===t&&(t="set")
if(s.tagByName.hasOwnProperty(t))i=s.tagByName[t]
else{if("number"!=typeof t||(0|t)!==t)return r.error("Unknown tag: "+t)
i=t}if(i>=31)return r.error("Multi-octet tag encoding unsupported")
e||(i|=32)
return i|=s.tagClassByName[n||"universal"]<<6}(t,e,n,this.reporter)
if(r.length<128)return(o=new i(2))[0]=a,o[1]=r.length,this._createEncoderBuffer([o,r])
for(var c=1,f=r.length;f>=256;f>>=8)c++;(o=new i(2+c))[0]=a,o[1]=128|c
f=1+c
for(var u=r.length;u>0;f--,u>>=8)o[f]=255&u
return this._createEncoderBuffer([o,r])},f.prototype._encodeStr=function(t,e){if("bitstr"===e)return this._createEncoderBuffer([0|t.unused,t.data])
if("bmpstr"===e){for(var n=new i(2*t.length),r=0;r<t.length;r++)n.writeUInt16BE(t.charCodeAt(r),2*r)
return this._createEncoderBuffer(n)}return"numstr"===e?this._isNumstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===e?this._isPrintstr(t)?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(e)?this._createEncoderBuffer(t):"objDesc"===e?this._createEncoderBuffer(t):this.reporter.error("Encoding of string type: "+e+" unsupported")},f.prototype._encodeObjid=function(t,e,n){if("string"==typeof t){if(!e)return this.reporter.error("string objid given, but no values map found")
if(!e.hasOwnProperty(t))return this.reporter.error("objid not found in values map")
t=e[t].split(/[\s\.]+/g)
for(var r=0;r<t.length;r++)t[r]|=0}else if(Array.isArray(t)){t=t.slice()
for(r=0;r<t.length;r++)t[r]|=0}if(!Array.isArray(t))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(t))
if(!n){if(t[1]>=40)return this.reporter.error("Second objid identifier OOB")
t.splice(0,2,40*t[0]+t[1])}var o=0
for(r=0;r<t.length;r++){var a=t[r]
for(o++;a>=128;a>>=7)o++}var s=new i(o),c=s.length-1
for(r=t.length-1;r>=0;r--){a=t[r]
for(s[c--]=127&a;(a>>=7)>0;)s[c--]=128|127&a}return this._createEncoderBuffer(s)},f.prototype._encodeTime=function(t,e){var n,r=new Date(t)
return"gentime"===e?n=[u(r.getFullYear()),u(r.getUTCMonth()+1),u(r.getUTCDate()),u(r.getUTCHours()),u(r.getUTCMinutes()),u(r.getUTCSeconds()),"Z"].join(""):"utctime"===e?n=[u(r.getFullYear()%100),u(r.getUTCMonth()+1),u(r.getUTCDate()),u(r.getUTCHours()),u(r.getUTCMinutes()),u(r.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+e+" time is not supported yet"),this._encodeStr(n,"octstr")},f.prototype._encodeNull=function(){return this._createEncoderBuffer("")},f.prototype._encodeInt=function(t,e){if("string"==typeof t){if(!e)return this.reporter.error("String int or enum given, but no values map")
if(!e.hasOwnProperty(t))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(t))
t=e[t]}if("number"!=typeof t&&!i.isBuffer(t)){var n=t.toArray()
!t.sign&&128&n[0]&&n.unshift(0),t=new i(n)}if(i.isBuffer(t)){var r=t.length
0===t.length&&r++
var o=new i(r)
return t.copy(o),0===t.length&&(o[0]=0),this._createEncoderBuffer(o)}if(t<128)return this._createEncoderBuffer(t)
if(t<256)return this._createEncoderBuffer([0,t])
r=1
for(var a=t;a>=256;a>>=8)r++
for(a=(o=new Array(r)).length-1;a>=0;a--)o[a]=255&t,t>>=8
return 128&o[0]&&o.unshift(0),this._createEncoderBuffer(new i(o))},f.prototype._encodeBool=function(t){return this._createEncoderBuffer(t?255:0)},f.prototype._use=function(t,e){return"function"==typeof t&&(t=t(e)),t._getEncoder("der").tree},f.prototype._skipDefault=function(t,e,n){var r,i=this._baseState
if(null===i.default)return!1
var o=t.join()
if(void 0===i.defaultBuffer&&(i.defaultBuffer=this._encodeValue(i.default,e,n).join()),o.length!==i.defaultBuffer.length)return!1
for(r=0;r<o.length;r++)if(o[r]!==i.defaultBuffer[r])return!1
return!0}},function(t){t.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},function(t,e,n){var r=n(18),i=n(2).Buffer
function o(t){var e=i.allocUnsafe(4)
return e.writeUInt32BE(t,0),e}t.exports=function(t,e){for(var n,a=i.alloc(0),s=0;a.length<e;)n=o(s++),a=i.concat([a,r("sha1").update(t).update(n).digest()])
return a.slice(0,e)}},function(t,e){t.exports=function(t,e){for(var n=t.length,r=-1;++r<n;)t[r]^=e[r]
return t}},function(t,e,n){var r=n(4),i=n(2).Buffer
t.exports=function(t,e){return i.from(t.toRed(r.mont(e.modulus)).redPow(new r(e.publicExponent)).fromRed().toArray())}},,,,function(t,e,n){"use strict"
e.byteLength=function(t){var e=f(t),n=e[0],r=e[1]
return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=f(t),r=n[0],a=n[1],s=new o(function(t,e,n){return 3*(e+n)/4-n}(0,r,a)),c=0,u=a>0?r-4:r,h=0;h<u;h+=4)e=i[t.charCodeAt(h)]<<18|i[t.charCodeAt(h+1)]<<12|i[t.charCodeAt(h+2)]<<6|i[t.charCodeAt(h+3)],s[c++]=e>>16&255,s[c++]=e>>8&255,s[c++]=255&e
2===a&&(e=i[t.charCodeAt(h)]<<2|i[t.charCodeAt(h+1)]>>4,s[c++]=255&e)
1===a&&(e=i[t.charCodeAt(h)]<<10|i[t.charCodeAt(h+1)]<<4|i[t.charCodeAt(h+2)]>>2,s[c++]=e>>8&255,s[c++]=255&e)
return s},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],a=0,s=n-i;a<s;a+=16383)o.push(u(t,a,a+16383>s?s:a+16383))
1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="))
return o.join("")}
for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=a.length;s<c;++s)r[s]=a[s],i[a.charCodeAt(s)]=s
function f(t){var e=t.length
if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var n=t.indexOf("=")
return-1===n&&(n=e),[n,n===e?0:4-n%4]}function u(t,e,n){for(var i,o,a=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),a.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o])
return a.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,c=(1<<s)-1,f=c>>1,u=-7,h=n?i-1:0,l=n?-1:1,d=t[e+h]
for(h+=l,o=d&(1<<-u)-1,d>>=-u,u+=s;u>0;o=256*o+t[e+h],h+=l,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=r;u>0;a=256*a+t[e+h],h+=l,u-=8);if(0===o)o=1-f
else{if(o===c)return a?NaN:1/0*(d?-1:1)
a+=Math.pow(2,r),o-=f}return(d?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,s,c,f=8*o-i-1,u=(1<<f)-1,h=u>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,b=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=u):(a=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-a))<1&&(a--,c*=2),(e+=a+h>=1?l/c:l*Math.pow(2,1-h))*c>=2&&(a++,c/=2),a+h>=u?(s=0,a=u):a+h>=1?(s=(e*c-1)*Math.pow(2,i),a+=h):(s=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[n+d]=255&a,d+=p,a/=256,f-=8);t[n+d-p]|=128*b}},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__87__},function(t,e){t.exports=__WEBPACK_EXTERNAL_MODULE__88__},function(t,e,n){"use strict"
e.randomBytes=e.rng=e.pseudoRandomBytes=e.prng=n(16),e.createHash=e.Hash=n(18),e.createHmac=e.Hmac=n(55)
var r=n(106),i=Object.keys(r),o=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(i)
e.getHashes=function(){return o}
var a=n(58)
e.pbkdf2=a.pbkdf2,e.pbkdf2Sync=a.pbkdf2Sync
var s=n(108)
e.Cipher=s.Cipher,e.createCipher=s.createCipher,e.Cipheriv=s.Cipheriv,e.createCipheriv=s.createCipheriv,e.Decipher=s.Decipher,e.createDecipher=s.createDecipher,e.Decipheriv=s.Decipheriv,e.createDecipheriv=s.createDecipheriv,e.getCiphers=s.getCiphers,e.listCiphers=s.listCiphers
var c=n(125)
e.DiffieHellmanGroup=c.DiffieHellmanGroup,e.createDiffieHellmanGroup=c.createDiffieHellmanGroup,e.getDiffieHellman=c.getDiffieHellman,e.createDiffieHellman=c.createDiffieHellman,e.DiffieHellman=c.DiffieHellman
var f=n(131)
e.createSign=f.createSign,e.Sign=f.Sign,e.createVerify=f.createVerify,e.Verify=f.Verify,e.createECDH=n(169)
var u=n(170)
e.publicEncrypt=u.publicEncrypt,e.privateEncrypt=u.privateEncrypt,e.publicDecrypt=u.publicDecrypt,e.privateDecrypt=u.privateDecrypt
var h=n(173)
e.randomFill=h.randomFill,e.randomFillSync=h.randomFillSync,e.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},e.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},function(t,e){},function(t,e,n){"use strict"
var r=n(2).Buffer,i=n(92)
t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null}
this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head}
0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data
return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return""
for(var e=this.head,n=""+e.data;e=e.next;)n+=t+e.data
return n},t.prototype.concat=function(t){if(0===this.length)return r.alloc(0)
if(1===this.length)return this.head.data
for(var e,n,i,o=r.allocUnsafe(t>>>0),a=this.head,s=0;a;)e=a.data,n=o,i=s,e.copy(n,i),s+=a.data.length,a=a.next
return o},t}(),i&&i.inspect&&i.inspect.custom&&(t.exports.prototype[i.inspect.custom]=function(){var t=i.inspect({length:this.length})
return this.constructor.name+" "+t})},function(t,e){},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply
function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId)
var e=t._idleTimeout
e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(94),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(10))},function(t,e,n){(function(t,e){!function(t,n){"use strict"
if(!t.setImmediate){var r,i,o,a,s,c=1,f={},u=!1,h=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t)
l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage
return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){o.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(i=h.documentElement,r=function(t){var e=h.createElement("script")
e.onreadystatechange=function(){p(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&p(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(a+e,"*")}),l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t))
for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1]
var i={callback:t,args:e}
return f[c]=i,r(c),c++},l.clearImmediate=d}function d(t){delete f[t]}function p(t){if(u)setTimeout(p,0,t)
else{var e=f[t]
if(e){u=!0
try{!function(t){var e=t.callback,r=t.args
switch(r.length){case 0:e()
break
case 1:e(r[0])
break
case 2:e(r[0],r[1])
break
case 3:e(r[0],r[1],r[2])
break
default:e.apply(n,r)}}(e)}finally{d(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(10),n(12))},function(t,e,n){(function(e){function n(t){try{if(!e.localStorage)return!1}catch(t){return!1}var n=e.localStorage[t]
return null!=n&&"true"===String(n).toLowerCase()}t.exports=function(t,e){if(n("noDeprecation"))return t
var r=!1
return function(){if(!r){if(n("throwDeprecation"))throw new Error(e)
n("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}}}).call(this,n(10))},function(t,e,n){"use strict"
t.exports=o
var r=n(52),i=n(19)
function o(t){if(!(this instanceof o))return new o(t)
r.call(this,t)}i.inherits=n(1),i.inherits(o,r),o.prototype._transform=function(t,e,n){n(null,t)}},function(t,e,n){t.exports=n(38)},function(t,e,n){t.exports=n(15)},function(t,e,n){t.exports=n(37).Transform},function(t,e,n){t.exports=n(37).PassThrough},function(t,e,n){var r=n(1),i=n(17),o=n(2).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function c(){this.init(),this._w=s,i.call(this,64,56)}function f(t){return t<<30|t>>>2}function u(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(c,i),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,c=0|this._e,h=0;h<16;++h)n[h]=t.readInt32BE(4*h)
for(;h<80;++h)n[h]=n[h-3]^n[h-8]^n[h-14]^n[h-16]
for(var l=0;l<80;++l){var d=~~(l/20),p=0|((e=r)<<5|e>>>27)+u(d,i,o,s)+c+n[l]+a[d]
c=s,s=o,o=f(i),i=r,r=p}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=c},function(t,e,n){var r=n(1),i=n(17),o=n(2).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80)
function c(){this.init(),this._w=s,i.call(this,64,56)}function f(t){return t<<5|t>>>27}function u(t){return t<<30|t>>>2}function h(t,e,n,r){return 0===t?e&n|~e&r:2===t?e&n|e&r|n&r:e^n^r}r(c,i),c.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},c.prototype._update=function(t){for(var e,n=this._w,r=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,c=0|this._e,l=0;l<16;++l)n[l]=t.readInt32BE(4*l)
for(;l<80;++l)n[l]=(e=n[l-3]^n[l-8]^n[l-14]^n[l-16])<<1|e>>>31
for(var d=0;d<80;++d){var p=~~(d/20),b=f(r)+h(p,i,o,s)+c+n[d]+a[p]|0
c=s,s=o,o=u(i),i=r,r=b}this._a=r+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=c+this._e|0},c.prototype._hash=function(){var t=o.allocUnsafe(20)
return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=c},function(t,e,n){var r=n(1),i=n(53),o=n(17),a=n(2).Buffer,s=new Array(64)
function c(){this.init(),this._w=s,o.call(this,64,56)}r(c,i),c.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},c.prototype._hash=function(){var t=a.allocUnsafe(28)
return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=c},function(t,e,n){var r=n(1),i=n(54),o=n(17),a=n(2).Buffer,s=new Array(160)
function c(){this.init(),this._w=s,o.call(this,128,112)}r(c,i),c.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},c.prototype._hash=function(){var t=a.allocUnsafe(48)
function e(e,n,r){t.writeInt32BE(e,r),t.writeInt32BE(n,r+4)}return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},t.exports=c},function(t,e,n){"use strict"
var r=n(1),i=n(2).Buffer,o=n(13),a=i.alloc(128),s=64
function c(t,e){o.call(this,"digest"),"string"==typeof e&&(e=i.from(e)),this._alg=t,this._key=e,e.length>s?e=t(e):e.length<s&&(e=i.concat([e,a],s))
for(var n=this._ipad=i.allocUnsafe(s),r=this._opad=i.allocUnsafe(s),c=0;c<s;c++)n[c]=54^e[c],r[c]=92^e[c]
this._hash=[n]}r(c,o),c.prototype._update=function(t){this._hash.push(t)},c.prototype._final=function(){var t=this._alg(i.concat(this._hash))
return this._alg(i.concat([this._opad,t]))},t.exports=c},function(t,e,n){t.exports=n(57)},function(t,e,n){(function(e,r){var i,o=n(59),a=n(60),s=n(61),c=n(2).Buffer,f=e.crypto&&e.crypto.subtle,u={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},h=[]
function l(t,e,n,r,i){return f.importKey("raw",t,{name:"PBKDF2"},!1,["deriveBits"]).then(function(t){return f.deriveBits({name:"PBKDF2",salt:e,iterations:n,hash:{name:i}},t,r<<3)}).then(function(t){return c.from(t)})}t.exports=function(t,n,d,p,b,v){"function"==typeof b&&(v=b,b=void 0)
var g=u[(b=b||"sha1").toLowerCase()]
if(!g||"function"!=typeof e.Promise)return r.nextTick(function(){var e
try{e=s(t,n,d,p,b)}catch(t){return v(t)}v(null,e)})
if(o(t,n,d,p),"function"!=typeof v)throw new Error("No callback provided to pbkdf2")
c.isBuffer(t)||(t=c.from(t,a)),c.isBuffer(n)||(n=c.from(n,a)),function(t,e){t.then(function(t){r.nextTick(function(){e(null,t)})},function(t){r.nextTick(function(){e(t)})})}(function(t){if(e.process&&!e.process.browser)return Promise.resolve(!1)
if(!f||!f.importKey||!f.deriveBits)return Promise.resolve(!1)
if(void 0!==h[t])return h[t]
var n=l(i=i||c.alloc(8),i,10,128,t).then(function(){return!0}).catch(function(){return!1})
return h[t]=n,n}(g).then(function(e){return e?l(t,n,d,p,g):s(t,n,d,p,b)}),v)}}).call(this,n(10),n(12))},function(t,e,n){var r=n(109),i=n(43),o=n(44),a=n(124),s=n(27)
function c(t,e,n){if(t=t.toLowerCase(),o[t])return i.createCipheriv(t,e,n)
if(a[t])return new r({key:e,iv:n,mode:t})
throw new TypeError("invalid suite type")}function f(t,e,n){if(t=t.toLowerCase(),o[t])return i.createDecipheriv(t,e,n)
if(a[t])return new r({key:e,iv:n,mode:t,decrypt:!0})
throw new TypeError("invalid suite type")}e.createCipher=e.Cipher=function(t,e){var n,r
if(t=t.toLowerCase(),o[t])n=o[t].key,r=o[t].iv
else{if(!a[t])throw new TypeError("invalid suite type")
n=8*a[t].key,r=a[t].iv}var i=s(e,!1,n,r)
return c(t,i.key,i.iv)},e.createCipheriv=e.Cipheriv=c,e.createDecipher=e.Decipher=function(t,e){var n,r
if(t=t.toLowerCase(),o[t])n=o[t].key,r=o[t].iv
else{if(!a[t])throw new TypeError("invalid suite type")
n=8*a[t].key,r=a[t].iv}var i=s(e,!1,n,r)
return f(t,i.key,i.iv)},e.createDecipheriv=e.Decipheriv=f,e.listCiphers=e.getCiphers=function(){return Object.keys(a).concat(i.getCiphers())}},function(t,e,n){var r=n(13),i=n(42),o=n(1),a=n(2).Buffer,s={"des-ede3-cbc":i.CBC.instantiate(i.EDE),"des-ede3":i.EDE,"des-ede-cbc":i.CBC.instantiate(i.EDE),"des-ede":i.EDE,"des-cbc":i.CBC.instantiate(i.DES),"des-ecb":i.DES}
function c(t){r.call(this)
var e,n=t.mode.toLowerCase(),i=s[n]
e=t.decrypt?"decrypt":"encrypt"
var o=t.key
a.isBuffer(o)||(o=a.from(o)),"des-ede"!==n&&"des-ede-cbc"!==n||(o=a.concat([o,o.slice(0,8)]))
var c=t.iv
a.isBuffer(c)||(c=a.from(c)),this._des=i.create({key:o,iv:c,type:e})}s.des=s["des-cbc"],s.des3=s["des-ede3-cbc"],t.exports=c,o(c,r),c.prototype._update=function(t){return a.from(this._des.update(t))},c.prototype._final=function(){return a.from(this._des.final())}},function(t,e,n){"use strict"
e.readUInt32BE=function(t,e){return(t[0+e]<<24|t[1+e]<<16|t[2+e]<<8|t[3+e])>>>0},e.writeUInt32BE=function(t,e,n){t[0+n]=e>>>24,t[1+n]=e>>>16&255,t[2+n]=e>>>8&255,t[3+n]=255&e},e.ip=function(t,e,n,r){for(var i=0,o=0,a=6;a>=0;a-=2){for(var s=0;s<=24;s+=8)i<<=1,i|=e>>>s+a&1
for(s=0;s<=24;s+=8)i<<=1,i|=t>>>s+a&1}for(a=6;a>=0;a-=2){for(s=1;s<=25;s+=8)o<<=1,o|=e>>>s+a&1
for(s=1;s<=25;s+=8)o<<=1,o|=t>>>s+a&1}n[r+0]=i>>>0,n[r+1]=o>>>0},e.rip=function(t,e,n,r){for(var i=0,o=0,a=0;a<4;a++)for(var s=24;s>=0;s-=8)i<<=1,i|=e>>>s+a&1,i<<=1,i|=t>>>s+a&1
for(a=4;a<8;a++)for(s=24;s>=0;s-=8)o<<=1,o|=e>>>s+a&1,o<<=1,o|=t>>>s+a&1
n[r+0]=i>>>0,n[r+1]=o>>>0},e.pc1=function(t,e,n,r){for(var i=0,o=0,a=7;a>=5;a--){for(var s=0;s<=24;s+=8)i<<=1,i|=e>>s+a&1
for(s=0;s<=24;s+=8)i<<=1,i|=t>>s+a&1}for(s=0;s<=24;s+=8)i<<=1,i|=e>>s+a&1
for(a=1;a<=3;a++){for(s=0;s<=24;s+=8)o<<=1,o|=e>>s+a&1
for(s=0;s<=24;s+=8)o<<=1,o|=t>>s+a&1}for(s=0;s<=24;s+=8)o<<=1,o|=t>>s+a&1
n[r+0]=i>>>0,n[r+1]=o>>>0},e.r28shl=function(t,e){return t<<e&268435455|t>>>28-e}
var r=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24]
e.pc2=function(t,e,n,i){for(var o=0,a=0,s=r.length>>>1,c=0;c<s;c++)o<<=1,o|=t>>>r[c]&1
for(c=s;c<r.length;c++)a<<=1,a|=e>>>r[c]&1
n[i+0]=o>>>0,n[i+1]=a>>>0},e.expand=function(t,e,n){var r=0,i=0
r=(1&t)<<5|t>>>27
for(var o=23;o>=15;o-=4)r<<=6,r|=t>>>o&63
for(o=11;o>=3;o-=4)i|=t>>>o&63,i<<=6
i|=(31&t)<<1|t>>>31,e[n+0]=r>>>0,e[n+1]=i>>>0}
var i=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11]
e.substitute=function(t,e){for(var n=0,r=0;r<4;r++){n<<=4,n|=i[64*r+(t>>>18-6*r&63)]}for(r=0;r<4;r++){n<<=4,n|=i[256+64*r+(e>>>18-6*r&63)]}return n>>>0}
var o=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7]
e.permute=function(t){for(var e=0,n=0;n<o.length;n++)e<<=1,e|=t>>>o[n]&1
return e>>>0},e.padSplit=function(t,e,n){for(var r=t.toString(2);r.length<e;)r="0"+r
for(var i=[],o=0;o<e;o+=n)i.push(r.slice(o,o+n))
return i.join(" ")}},function(t,e,n){"use strict"
var r=n(9)
function i(t){this.options=t,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}t.exports=i,i.prototype._init=function(){},i.prototype.update=function(t){return 0===t.length?[]:"decrypt"===this.type?this._updateDecrypt(t):this._updateEncrypt(t)},i.prototype._buffer=function(t,e){for(var n=Math.min(this.buffer.length-this.bufferOff,t.length-e),r=0;r<n;r++)this.buffer[this.bufferOff+r]=t[e+r]
return this.bufferOff+=n,n},i.prototype._flushBuffer=function(t,e){return this._update(this.buffer,0,t,e),this.bufferOff=0,this.blockSize},i.prototype._updateEncrypt=function(t){var e=0,n=0,r=(this.bufferOff+t.length)/this.blockSize|0,i=new Array(r*this.blockSize)
0!==this.bufferOff&&(e+=this._buffer(t,e),this.bufferOff===this.buffer.length&&(n+=this._flushBuffer(i,n)))
for(var o=t.length-(t.length-e)%this.blockSize;e<o;e+=this.blockSize)this._update(t,e,i,n),n+=this.blockSize
for(;e<t.length;e++,this.bufferOff++)this.buffer[this.bufferOff]=t[e]
return i},i.prototype._updateDecrypt=function(t){for(var e=0,n=0,r=Math.ceil((this.bufferOff+t.length)/this.blockSize)-1,i=new Array(r*this.blockSize);r>0;r--)e+=this._buffer(t,e),n+=this._flushBuffer(i,n)
return e+=this._buffer(t,e),i},i.prototype.final=function(t){var e,n
return t&&(e=this.update(t)),n="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),e?e.concat(n):n},i.prototype._pad=function(t,e){if(0===e)return!1
for(;e<t.length;)t[e++]=0
return!0},i.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[]
var t=new Array(this.blockSize)
return this._update(this.buffer,0,t,0),t},i.prototype._unpad=function(t){return t},i.prototype._finalDecrypt=function(){r.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt")
var t=new Array(this.blockSize)
return this._flushBuffer(t,0),this._unpad(t)}},function(t,e,n){"use strict"
var r=n(9),i=n(1),o=n(42),a=o.utils,s=o.Cipher
function c(){this.tmp=new Array(2),this.keys=null}function f(t){s.call(this,t)
var e=new c
this._desState=e,this.deriveKeys(e,t.key)}i(f,s),t.exports=f,f.create=function(t){return new f(t)}
var u=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1]
f.prototype.deriveKeys=function(t,e){t.keys=new Array(32),r.equal(e.length,this.blockSize,"Invalid key length")
var n=a.readUInt32BE(e,0),i=a.readUInt32BE(e,4)
a.pc1(n,i,t.tmp,0),n=t.tmp[0],i=t.tmp[1]
for(var o=0;o<t.keys.length;o+=2){var s=u[o>>>1]
n=a.r28shl(n,s),i=a.r28shl(i,s),a.pc2(n,i,t.keys,o)}},f.prototype._update=function(t,e,n,r){var i=this._desState,o=a.readUInt32BE(t,e),s=a.readUInt32BE(t,e+4)
a.ip(o,s,i.tmp,0),o=i.tmp[0],s=i.tmp[1],"encrypt"===this.type?this._encrypt(i,o,s,i.tmp,0):this._decrypt(i,o,s,i.tmp,0),o=i.tmp[0],s=i.tmp[1],a.writeUInt32BE(n,o,r),a.writeUInt32BE(n,s,r+4)},f.prototype._pad=function(t,e){for(var n=t.length-e,r=e;r<t.length;r++)t[r]=n
return!0},f.prototype._unpad=function(t){for(var e=t[t.length-1],n=t.length-e;n<t.length;n++)r.equal(t[n],e)
return t.slice(0,t.length-e)},f.prototype._encrypt=function(t,e,n,r,i){for(var o=e,s=n,c=0;c<t.keys.length;c+=2){var f=t.keys[c],u=t.keys[c+1]
a.expand(s,t.tmp,0),f^=t.tmp[0],u^=t.tmp[1]
var h=a.substitute(f,u),l=s
s=(o^a.permute(h))>>>0,o=l}a.rip(s,o,r,i)},f.prototype._decrypt=function(t,e,n,r,i){for(var o=n,s=e,c=t.keys.length-2;c>=0;c-=2){var f=t.keys[c],u=t.keys[c+1]
a.expand(o,t.tmp,0),f^=t.tmp[0],u^=t.tmp[1]
var h=a.substitute(f,u),l=o
o=(s^a.permute(h))>>>0,s=l}a.rip(o,s,r,i)}},function(t,e,n){"use strict"
var r=n(9),i=n(1),o={}
function a(t){r.equal(t.length,8,"Invalid IV length"),this.iv=new Array(8)
for(var e=0;e<this.iv.length;e++)this.iv[e]=t[e]}e.instantiate=function(t){function e(e){t.call(this,e),this._cbcInit()}i(e,t)
for(var n=Object.keys(o),r=0;r<n.length;r++){var a=n[r]
e.prototype[a]=o[a]}return e.create=function(t){return new e(t)},e},o._cbcInit=function(){var t=new a(this.options.iv)
this._cbcState=t},o._update=function(t,e,n,r){var i=this._cbcState,o=this.constructor.super_.prototype,a=i.iv
if("encrypt"===this.type){for(var s=0;s<this.blockSize;s++)a[s]^=t[e+s]
o._update.call(this,a,0,n,r)
for(s=0;s<this.blockSize;s++)a[s]=n[r+s]}else{o._update.call(this,t,e,n,r)
for(s=0;s<this.blockSize;s++)n[r+s]^=a[s]
for(s=0;s<this.blockSize;s++)a[s]=t[e+s]}}},function(t,e,n){"use strict"
var r=n(9),i=n(1),o=n(42),a=o.Cipher,s=o.DES
function c(t,e){r.equal(e.length,24,"Invalid key length")
var n=e.slice(0,8),i=e.slice(8,16),o=e.slice(16,24)
this.ciphers="encrypt"===t?[s.create({type:"encrypt",key:n}),s.create({type:"decrypt",key:i}),s.create({type:"encrypt",key:o})]:[s.create({type:"decrypt",key:o}),s.create({type:"encrypt",key:i}),s.create({type:"decrypt",key:n})]}function f(t){a.call(this,t)
var e=new c(this.type,this.options.key)
this._edeState=e}i(f,a),t.exports=f,f.create=function(t){return new f(t)},f.prototype._update=function(t,e,n,r){var i=this._edeState
i.ciphers[0]._update(t,e,n,r),i.ciphers[1]._update(n,r,n,r),i.ciphers[2]._update(n,r,n,r)},f.prototype._pad=s.prototype._pad,f.prototype._unpad=s.prototype._unpad},function(t,e,n){var r=n(44),i=n(65),o=n(2).Buffer,a=n(66),s=n(13),c=n(26),f=n(27)
function u(t,e,n){s.call(this),this._cache=new l,this._cipher=new c.AES(e),this._prev=o.from(n),this._mode=t,this._autopadding=!0}n(1)(u,s),u.prototype._update=function(t){var e,n
this._cache.add(t)
for(var r=[];e=this._cache.get();)n=this._mode.encrypt(this,e),r.push(n)
return o.concat(r)}
var h=o.alloc(16,16)
function l(){this.cache=o.allocUnsafe(0)}function d(t,e,n){var s=r[t.toLowerCase()]
if(!s)throw new TypeError("invalid suite type")
if("string"==typeof e&&(e=o.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length)
if("string"==typeof n&&(n=o.from(n)),"GCM"!==s.mode&&n.length!==s.iv)throw new TypeError("invalid iv length "+n.length)
return"stream"===s.type?new a(s.module,e,n):"auth"===s.type?new i(s.module,e,n):new u(s.module,e,n)}u.prototype._final=function(){var t=this._cache.flush()
if(this._autopadding)return t=this._mode.encrypt(this,t),this._cipher.scrub(),t
if(!t.equals(h))throw this._cipher.scrub(),new Error("data not multiple of block length")},u.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},l.prototype.add=function(t){this.cache=o.concat([this.cache,t])},l.prototype.get=function(){if(this.cache.length>15){var t=this.cache.slice(0,16)
return this.cache=this.cache.slice(16),t}return null},l.prototype.flush=function(){for(var t=16-this.cache.length,e=o.allocUnsafe(t),n=-1;++n<t;)e.writeUInt8(t,n)
return o.concat([this.cache,e])},e.createCipheriv=d,e.createCipher=function(t,e){var n=r[t.toLowerCase()]
if(!n)throw new TypeError("invalid suite type")
var i=f(e,!1,n.key,n.iv)
return d(t,i.key,i.iv)}},function(t,e){e.encrypt=function(t,e){return t._cipher.encryptBlock(e)},e.decrypt=function(t,e){return t._cipher.decryptBlock(e)}},function(t,e,n){var r=n(20)
e.encrypt=function(t,e){var n=r(e,t._prev)
return t._prev=t._cipher.encryptBlock(n),t._prev},e.decrypt=function(t,e){var n=t._prev
t._prev=e
var i=t._cipher.decryptBlock(e)
return r(i,n)}},function(t,e,n){var r=n(2).Buffer,i=n(20)
function o(t,e,n){var o=e.length,a=i(e,t._cache)
return t._cache=t._cache.slice(o),t._prev=r.concat([t._prev,n?e:a]),a}e.encrypt=function(t,e,n){for(var i,a=r.allocUnsafe(0);e.length;){if(0===t._cache.length&&(t._cache=t._cipher.encryptBlock(t._prev),t._prev=r.allocUnsafe(0)),!(t._cache.length<=e.length)){a=r.concat([a,o(t,e,n)])
break}i=t._cache.length,a=r.concat([a,o(t,e.slice(0,i),n)]),e=e.slice(i)}return a}},function(t,e,n){var r=n(2).Buffer
function i(t,e,n){var i=t._cipher.encryptBlock(t._prev)[0]^e
return t._prev=r.concat([t._prev.slice(1),r.from([n?e:i])]),i}e.encrypt=function(t,e,n){for(var o=e.length,a=r.allocUnsafe(o),s=-1;++s<o;)a[s]=i(t,e[s],n)
return a}},function(t,e,n){var r=n(2).Buffer
function i(t,e,n){for(var r,i,a=-1,s=0;++a<8;)r=e&1<<7-a?128:0,s+=(128&(i=t._cipher.encryptBlock(t._prev)[0]^r))>>a%8,t._prev=o(t._prev,n?r:i)
return s}function o(t,e){var n=t.length,i=-1,o=r.allocUnsafe(t.length)
for(t=r.concat([t,r.from([e])]);++i<n;)o[i]=t[i]<<1|t[i+1]>>7
return o}e.encrypt=function(t,e,n){for(var o=e.length,a=r.allocUnsafe(o),s=-1;++s<o;)a[s]=i(t,e[s],n)
return a}},function(t,e,n){(function(t){var r=n(20)
function i(t){return t._prev=t._cipher.encryptBlock(t._prev),t._prev}e.encrypt=function(e,n){for(;e._cache.length<n.length;)e._cache=t.concat([e._cache,i(e)])
var o=e._cache.slice(0,n.length)
return e._cache=e._cache.slice(n.length),r(n,o)}}).call(this,n(5).Buffer)},function(t,e,n){var r=n(2).Buffer,i=r.alloc(16,0)
function o(t){var e=r.allocUnsafe(16)
return e.writeUInt32BE(t[0]>>>0,0),e.writeUInt32BE(t[1]>>>0,4),e.writeUInt32BE(t[2]>>>0,8),e.writeUInt32BE(t[3]>>>0,12),e}function a(t){this.h=t,this.state=r.alloc(16,0),this.cache=r.allocUnsafe(0)}a.prototype.ghash=function(t){for(var e=-1;++e<t.length;)this.state[e]^=t[e]
this._multiply()},a.prototype._multiply=function(){for(var t,e,n,r=[(t=this.h).readUInt32BE(0),t.readUInt32BE(4),t.readUInt32BE(8),t.readUInt32BE(12)],i=[0,0,0,0],a=-1;++a<128;){for(0!=(this.state[~~(a/8)]&1<<7-a%8)&&(i[0]^=r[0],i[1]^=r[1],i[2]^=r[2],i[3]^=r[3]),n=0!=(1&r[3]),e=3;e>0;e--)r[e]=r[e]>>>1|(1&r[e-1])<<31
r[0]=r[0]>>>1,n&&(r[0]=r[0]^225<<24)}this.state=o(i)},a.prototype.update=function(t){var e
for(this.cache=r.concat([this.cache,t]);this.cache.length>=16;)e=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(e)},a.prototype.final=function(t,e){return this.cache.length&&this.ghash(r.concat([this.cache,i],16)),this.ghash(o([0,t,0,e])),this.state},t.exports=a},function(t,e,n){var r=n(65),i=n(2).Buffer,o=n(44),a=n(66),s=n(13),c=n(26),f=n(27)
function u(t,e,n){s.call(this),this._cache=new h,this._last=void 0,this._cipher=new c.AES(e),this._prev=i.from(n),this._mode=t,this._autopadding=!0}function h(){this.cache=i.allocUnsafe(0)}function l(t,e,n){var s=o[t.toLowerCase()]
if(!s)throw new TypeError("invalid suite type")
if("string"==typeof n&&(n=i.from(n)),"GCM"!==s.mode&&n.length!==s.iv)throw new TypeError("invalid iv length "+n.length)
if("string"==typeof e&&(e=i.from(e)),e.length!==s.key/8)throw new TypeError("invalid key length "+e.length)
return"stream"===s.type?new a(s.module,e,n,!0):"auth"===s.type?new r(s.module,e,n,!0):new u(s.module,e,n)}n(1)(u,s),u.prototype._update=function(t){var e,n
this._cache.add(t)
for(var r=[];e=this._cache.get(this._autopadding);)n=this._mode.decrypt(this,e),r.push(n)
return i.concat(r)},u.prototype._final=function(){var t=this._cache.flush()
if(this._autopadding)return function(t){var e=t[15]
if(e<1||e>16)throw new Error("unable to decrypt data")
var n=-1
for(;++n<e;)if(t[n+(16-e)]!==e)throw new Error("unable to decrypt data")
if(16===e)return
return t.slice(0,16-e)}(this._mode.decrypt(this,t))
if(t)throw new Error("data not multiple of block length")},u.prototype.setAutoPadding=function(t){return this._autopadding=!!t,this},h.prototype.add=function(t){this.cache=i.concat([this.cache,t])},h.prototype.get=function(t){var e
if(t){if(this.cache.length>16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e}else if(this.cache.length>=16)return e=this.cache.slice(0,16),this.cache=this.cache.slice(16),e
return null},h.prototype.flush=function(){if(this.cache.length)return this.cache},e.createDecipher=function(t,e){var n=o[t.toLowerCase()]
if(!n)throw new TypeError("invalid suite type")
var r=f(e,!1,n.key,n.iv)
return l(t,r.key,r.iv)},e.createDecipheriv=l},function(t,e){e["des-ecb"]={key:8,iv:0},e["des-cbc"]=e.des={key:8,iv:8},e["des-ede3-cbc"]=e.des3={key:24,iv:8},e["des-ede3"]={key:24,iv:0},e["des-ede-cbc"]={key:16,iv:8},e["des-ede"]={key:16,iv:0}},function(t,e,n){(function(t){var r=n(67),i=n(129),o=n(130)
var a={binary:!0,hex:!0,base64:!0}
e.DiffieHellmanGroup=e.createDiffieHellmanGroup=e.getDiffieHellman=function(e){var n=new t(i[e].prime,"hex"),r=new t(i[e].gen,"hex")
return new o(n,r)},e.createDiffieHellman=e.DiffieHellman=function e(n,i,s,c){return t.isBuffer(i)||void 0===a[i]?e(n,"binary",i,s):(i=i||"binary",c=c||"binary",s=s||new t([2]),t.isBuffer(s)||(s=new t(s,c)),"number"==typeof n?new o(r(n,s),s,!0):(t.isBuffer(n)||(n=new t(n,i)),new o(n,s,!0)))}}).call(this,n(5).Buffer)},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){},function(t,e){},function(t){t.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},function(t,e,n){(function(e){var r=n(4),i=new(n(68)),o=new r(24),a=new r(11),s=new r(10),c=new r(3),f=new r(7),u=n(67),h=n(16)
function l(t,n){return n=n||"utf8",e.isBuffer(t)||(t=new e(t,n)),this._pub=new r(t),this}function d(t,n){return n=n||"utf8",e.isBuffer(t)||(t=new e(t,n)),this._priv=new r(t),this}t.exports=b
var p={}
function b(t,e,n){this.setGenerator(e),this.__prime=new r(t),this._prime=r.mont(this.__prime),this._primeLen=t.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,n?(this.setPublicKey=l,this.setPrivateKey=d):this._primeCode=8}function v(t,n){var r=new e(t.toArray())
return n?r.toString(n):r}Object.defineProperty(b.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=function(t,e){var n=e.toString("hex"),r=[n,t.toString(16)].join("_")
if(r in p)return p[r]
var h,l=0
if(t.isEven()||!u.simpleSieve||!u.fermatTest(t)||!i.test(t))return l+=1,l+="02"===n||"05"===n?8:4,p[r]=l,l
switch(i.test(t.shrn(1))||(l+=2),n){case"02":t.mod(o).cmp(a)&&(l+=8)
break
case"05":(h=t.mod(s)).cmp(c)&&h.cmp(f)&&(l+=8)
break
default:l+=4}return p[r]=l,l}(this.__prime,this.__gen)),this._primeCode}}),b.prototype.generateKeys=function(){return this._priv||(this._priv=new r(h(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},b.prototype.computeSecret=function(t){var n=(t=(t=new r(t)).toRed(this._prime)).redPow(this._priv).fromRed(),i=new e(n.toArray()),o=this.getPrime()
if(i.length<o.length){var a=new e(o.length-i.length)
a.fill(0),i=e.concat([a,i])}return i},b.prototype.getPublicKey=function(t){return v(this._pub,t)},b.prototype.getPrivateKey=function(t){return v(this._priv,t)},b.prototype.getPrime=function(t){return v(this.__prime,t)},b.prototype.getGenerator=function(t){return v(this._gen,t)},b.prototype.setGenerator=function(t,n){return n=n||"utf8",e.isBuffer(t)||(t=new e(t,n)),this.__gen=t,this._gen=new r(t),this}}).call(this,n(5).Buffer)},function(t,e,n){(function(e){var r=n(18),i=n(36),o=n(1),a=n(132),s=n(168),c=n(57)
function f(t){i.Writable.call(this)
var e=c[t]
if(!e)throw new Error("Unknown message digest")
this._hashType=e.hash,this._hash=r(e.hash),this._tag=e.id,this._signType=e.sign}function u(t){i.Writable.call(this)
var e=c[t]
if(!e)throw new Error("Unknown message digest")
this._hash=r(e.hash),this._tag=e.id,this._signType=e.sign}function h(t){return new f(t)}function l(t){return new u(t)}Object.keys(c).forEach(function(t){c[t].id=new e(c[t].id,"hex"),c[t.toLowerCase()]=c[t]}),o(f,i.Writable),f.prototype._write=function(t,e,n){this._hash.update(t),n()},f.prototype.update=function(t,n){return"string"==typeof t&&(t=new e(t,n)),this._hash.update(t),this},f.prototype.sign=function(t,e){this.end()
var n=this._hash.digest(),r=a(n,t,this._hashType,this._signType,this._tag)
return e?r.toString(e):r},o(u,i.Writable),u.prototype._write=function(t,e,n){this._hash.update(t),n()},u.prototype.update=function(t,n){return"string"==typeof t&&(t=new e(t,n)),this._hash.update(t),this},u.prototype.verify=function(t,n,r){"string"==typeof n&&(n=new e(n,r)),this.end()
var i=this._hash.digest()
return s(n,i,t,this._signType,this._tag)},t.exports={Sign:h,Verify:l,createSign:h,createVerify:l}}).call(this,n(5).Buffer)},function(t,e,n){(function(e){var r=n(55),i=n(45),o=n(7).ec,a=n(4),s=n(29),c=n(78)
function f(t,n,i,o){if((t=new e(t.toArray())).length<n.byteLength()){var a=new e(n.byteLength()-t.length)
a.fill(0),t=e.concat([a,t])}var s=i.length,c=function(t,n){t=(t=u(t,n)).mod(n)
var r=new e(t.toArray())
if(r.length<n.byteLength()){var i=new e(n.byteLength()-r.length)
i.fill(0),r=e.concat([i,r])}return r}(i,n),f=new e(s)
f.fill(1)
var h=new e(s)
return h.fill(0),h=r(o,h).update(f).update(new e([0])).update(t).update(c).digest(),f=r(o,h).update(f).digest(),{k:h=r(o,h).update(f).update(new e([1])).update(t).update(c).digest(),v:f=r(o,h).update(f).digest()}}function u(t,e){var n=new a(t),r=(t.length<<3)-e.bitLength()
return r>0&&n.ishrn(r),n}function h(t,n,i){var o,a
do{for(o=new e(0);8*o.length<t.bitLength();)n.v=r(i,n.k).update(n.v).digest(),o=e.concat([o,n.v])
a=u(o,t),n.k=r(i,n.k).update(n.v).update(new e([0])).digest(),n.v=r(i,n.k).update(n.v).digest()}while(-1!==a.cmp(t))
return a}function l(t,e,n,r){return t.toRed(a.mont(n)).redPow(e).fromRed().mod(r)}t.exports=function(t,n,r,d,p){var b=s(n)
if(b.curve){if("ecdsa"!==d&&"ecdsa/rsa"!==d)throw new Error("wrong private key type")
return function(t,n){var r=c[n.curve.join(".")]
if(!r)throw new Error("unknown curve "+n.curve.join("."))
var i=new o(r).keyFromPrivate(n.privateKey).sign(t)
return new e(i.toDER())}(t,b)}if("dsa"===b.type){if("dsa"!==d)throw new Error("wrong private key type")
return function(t,n,r){for(var i,o=n.params.priv_key,s=n.params.p,c=n.params.q,d=n.params.g,p=new a(0),b=u(t,c).mod(c),v=!1,g=f(o,c,t,r);!1===v;)i=h(c,g,r),p=l(d,i,s,c),0===(v=i.invm(c).imul(b.add(o.mul(p))).mod(c)).cmpn(0)&&(v=!1,p=new a(0))
return function(t,n){t=t.toArray(),n=n.toArray(),128&t[0]&&(t=[0].concat(t)),128&n[0]&&(n=[0].concat(n))
var r=[48,t.length+n.length+4,2,t.length]
return r=r.concat(t,[2,n.length],n),new e(r)}(p,v)}(t,b,r)}if("rsa"!==d&&"ecdsa/rsa"!==d)throw new Error("wrong private key type")
t=e.concat([p,t])
for(var v=b.modulus.byteLength(),g=[0,1];t.length+g.length+1<v;)g.push(255)
g.push(0)
for(var m=-1;++m<t.length;)g.push(t[m])
return i(g,b)},t.exports.getKey=f,t.exports.makeKey=h}).call(this,n(5).Buffer)},function(t){t.exports={_from:"elliptic@^6.0.0",_id:"elliptic@6.4.1",_inBundle:!1,_integrity:"sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.0.0",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.0.0",saveSpec:null,fetchSpec:"^6.0.0"},_requiredBy:["/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz",_shasum:"c2d0b7776911b86722c632c3c06c60f2f819939a",_spec:"elliptic@^6.0.0",_where:"/home/steve/Documents/GitHub/stellarkit-js-ui/node_modules/browserify-sign",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.1"}},function(t,e,n){"use strict"
var r=e,i=n(4),o=n(9),a=n(70)
r.assert=o,r.toArray=a.toArray,r.zero2=a.zero2,r.toHex=a.toHex,r.encode=a.encode,r.getNAF=function(t,e){for(var n=[],r=1<<e+1,i=t.clone();i.cmpn(1)>=0;){var o
if(i.isOdd()){var a=i.andln(r-1)
o=a>(r>>1)-1?(r>>1)-a:a,i.isubn(o)}else o=0
n.push(o)
for(var s=0!==i.cmpn(0)&&0===i.andln(r-1)?e+1:1,c=1;c<s;c++)n.push(0)
i.iushrn(s)}return n},r.getJSF=function(t,e){var n=[[],[]]
t=t.clone(),e=e.clone()
for(var r=0,i=0;t.cmpn(-r)>0||e.cmpn(-i)>0;){var o,a,s,c=t.andln(3)+r&3,f=e.andln(3)+i&3
3===c&&(c=-1),3===f&&(f=-1),o=0==(1&c)?0:3!=(s=t.andln(7)+r&7)&&5!==s||2!==f?c:-c,n[0].push(o),a=0==(1&f)?0:3!=(s=e.andln(7)+i&7)&&5!==s||2!==c?f:-f,n[1].push(a),2*r===o+1&&(r=1-r),2*i===a+1&&(i=1-i),t.iushrn(1),e.iushrn(1)}return n},r.cachedProperty=function(t,e,n){var r="_"+e
t.prototype[e]=function(){return void 0!==this[r]?this[r]:this[r]=n.call(this)}},r.parseBytes=function(t){return"string"==typeof t?r.toArray(t,"hex"):t},r.intFromLE=function(t){return new i(t,"hex","le")}},function(t,e,n){"use strict"
var r=n(4),i=n(7).utils,o=i.getNAF,a=i.getJSF,s=i.assert
function c(t,e){this.type=t,this.p=new r(e.p,16),this.red=e.prime?r.red(e.prime):r.mont(this.p),this.zero=new r(0).toRed(this.red),this.one=new r(1).toRed(this.red),this.two=new r(2).toRed(this.red),this.n=e.n&&new r(e.n,16),this.g=e.g&&this.pointFromJSON(e.g,e.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4)
var n=this.n&&this.p.div(this.n)
!n||n.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function f(t,e){this.curve=t,this.type=e,this.precomputed=null}t.exports=c,c.prototype.point=function(){throw new Error("Not implemented")},c.prototype.validate=function(){throw new Error("Not implemented")},c.prototype._fixedNafMul=function(t,e){s(t.precomputed)
var n=t._getDoubles(),r=o(e,1),i=(1<<n.step+1)-(n.step%2==0?2:1)
i/=3
for(var a=[],c=0;c<r.length;c+=n.step){var f=0
for(e=c+n.step-1;e>=c;e--)f=(f<<1)+r[e]
a.push(f)}for(var u=this.jpoint(null,null,null),h=this.jpoint(null,null,null),l=i;l>0;l--){for(c=0;c<a.length;c++){(f=a[c])===l?h=h.mixedAdd(n.points[c]):f===-l&&(h=h.mixedAdd(n.points[c].neg()))}u=u.add(h)}return u.toP()},c.prototype._wnafMul=function(t,e){var n=4,r=t._getNAFPoints(n)
n=r.wnd
for(var i=r.points,a=o(e,n),c=this.jpoint(null,null,null),f=a.length-1;f>=0;f--){for(e=0;f>=0&&0===a[f];f--)e++
if(f>=0&&e++,c=c.dblp(e),f<0)break
var u=a[f]
s(0!==u),c="affine"===t.type?u>0?c.mixedAdd(i[u-1>>1]):c.mixedAdd(i[-u-1>>1].neg()):u>0?c.add(i[u-1>>1]):c.add(i[-u-1>>1].neg())}return"affine"===t.type?c.toP():c},c.prototype._wnafMulAdd=function(t,e,n,r,i){for(var s=this._wnafT1,c=this._wnafT2,f=this._wnafT3,u=0,h=0;h<r;h++){var l=(E=e[h])._getNAFPoints(t)
s[h]=l.wnd,c[h]=l.points}for(h=r-1;h>=1;h-=2){var d=h-1,p=h
if(1===s[d]&&1===s[p]){var b=[e[d],null,null,e[p]]
0===e[d].y.cmp(e[p].y)?(b[1]=e[d].add(e[p]),b[2]=e[d].toJ().mixedAdd(e[p].neg())):0===e[d].y.cmp(e[p].y.redNeg())?(b[1]=e[d].toJ().mixedAdd(e[p]),b[2]=e[d].add(e[p].neg())):(b[1]=e[d].toJ().mixedAdd(e[p]),b[2]=e[d].toJ().mixedAdd(e[p].neg()))
var v=[-3,-1,-5,-7,0,7,5,1,3],g=a(n[d],n[p])
u=Math.max(g[0].length,u),f[d]=new Array(u),f[p]=new Array(u)
for(var m=0;m<u;m++){var y=0|g[0][m],_=0|g[1][m]
f[d][m]=v[3*(y+1)+(_+1)],f[p][m]=0,c[d]=b}}else f[d]=o(n[d],s[d]),f[p]=o(n[p],s[p]),u=Math.max(f[d].length,u),u=Math.max(f[p].length,u)}var w=this.jpoint(null,null,null),x=this._wnafT4
for(h=u;h>=0;h--){for(var S=0;h>=0;){var k=!0
for(m=0;m<r;m++)x[m]=0|f[m][h],0!==x[m]&&(k=!1)
if(!k)break
S++,h--}if(h>=0&&S++,w=w.dblp(S),h<0)break
for(m=0;m<r;m++){var E,A=x[m]
0!==A&&(A>0?E=c[m][A-1>>1]:A<0&&(E=c[m][-A-1>>1].neg()),w="affine"===E.type?w.mixedAdd(E):w.add(E))}}for(h=0;h<r;h++)c[h]=null
return i?w:w.toP()},c.BasePoint=f,f.prototype.eq=function(){throw new Error("Not implemented")},f.prototype.validate=function(){return this.curve.validate(this)},c.prototype.decodePoint=function(t,e){t=i.toArray(t,e)
var n=this.p.byteLength()
if((4===t[0]||6===t[0]||7===t[0])&&t.length-1==2*n)return 6===t[0]?s(t[t.length-1]%2==0):7===t[0]&&s(t[t.length-1]%2==1),this.point(t.slice(1,1+n),t.slice(1+n,1+2*n))
if((2===t[0]||3===t[0])&&t.length-1===n)return this.pointFromX(t.slice(1,1+n),3===t[0])
throw new Error("Unknown point format")},f.prototype.encodeCompressed=function(t){return this.encode(t,!0)},f.prototype._encode=function(t){var e=this.curve.p.byteLength(),n=this.getX().toArray("be",e)
return t?[this.getY().isEven()?2:3].concat(n):[4].concat(n,this.getY().toArray("be",e))},f.prototype.encode=function(t,e){return i.encode(this._encode(e),t)},f.prototype.precompute=function(t){if(this.precomputed)return this
var e={doubles:null,naf:null,beta:null}
return e.naf=this._getNAFPoints(8),e.doubles=this._getDoubles(4,t),e.beta=this._getBeta(),this.precomputed=e,this},f.prototype._hasDoubles=function(t){if(!this.precomputed)return!1
var e=this.precomputed.doubles
return!!e&&e.points.length>=Math.ceil((t.bitLength()+1)/e.step)},f.prototype._getDoubles=function(t,e){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles
for(var n=[this],r=this,i=0;i<e;i+=t){for(var o=0;o<t;o++)r=r.dbl()
n.push(r)}return{step:t,points:n}},f.prototype._getNAFPoints=function(t){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf
for(var e=[this],n=(1<<t)-1,r=1===n?null:this.dbl(),i=1;i<n;i++)e[i]=e[i-1].add(r)
return{wnd:t,points:e}},f.prototype._getBeta=function(){return null},f.prototype.dblp=function(t){for(var e=this,n=0;n<t;n++)e=e.dbl()
return e}},function(t,e,n){"use strict"
var r=n(28),i=n(7),o=n(4),a=n(1),s=r.base,c=i.utils.assert
function f(t){s.call(this,"short",t),this.a=new o(t.a,16).toRed(this.red),this.b=new o(t.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(t),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function u(t,e,n,r){s.BasePoint.call(this,t,"affine"),null===e&&null===n?(this.x=null,this.y=null,this.inf=!0):(this.x=new o(e,16),this.y=new o(n,16),r&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function h(t,e,n,r){s.BasePoint.call(this,t,"jacobian"),null===e&&null===n&&null===r?(this.x=this.curve.one,this.y=this.curve.one,this.z=new o(0)):(this.x=new o(e,16),this.y=new o(n,16),this.z=new o(r,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}a(f,s),t.exports=f,f.prototype._getEndomorphism=function(t){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var e,n
if(t.beta)e=new o(t.beta,16).toRed(this.red)
else{var r=this._getEndoRoots(this.p)
e=(e=r[0].cmp(r[1])<0?r[0]:r[1]).toRed(this.red)}if(t.lambda)n=new o(t.lambda,16)
else{var i=this._getEndoRoots(this.n)
0===this.g.mul(i[0]).x.cmp(this.g.x.redMul(e))?n=i[0]:(n=i[1],c(0===this.g.mul(n).x.cmp(this.g.x.redMul(e))))}return{beta:e,lambda:n,basis:t.basis?t.basis.map(function(t){return{a:new o(t.a,16),b:new o(t.b,16)}}):this._getEndoBasis(n)}}},f.prototype._getEndoRoots=function(t){var e=t===this.p?this.red:o.mont(t),n=new o(2).toRed(e).redInvm(),r=n.redNeg(),i=new o(3).toRed(e).redNeg().redSqrt().redMul(n)
return[r.redAdd(i).fromRed(),r.redSub(i).fromRed()]},f.prototype._getEndoBasis=function(t){for(var e,n,r,i,a,s,c,f,u,h=this.n.ushrn(Math.floor(this.n.bitLength()/2)),l=t,d=this.n.clone(),p=new o(1),b=new o(0),v=new o(0),g=new o(1),m=0;0!==l.cmpn(0);){var y=d.div(l)
f=d.sub(y.mul(l)),u=v.sub(y.mul(p))
var _=g.sub(y.mul(b))
if(!r&&f.cmp(h)<0)e=c.neg(),n=p,r=f.neg(),i=u
else if(r&&2==++m)break
c=f,d=l,l=f,v=p,p=u,g=b,b=_}a=f.neg(),s=u
var w=r.sqr().add(i.sqr())
return a.sqr().add(s.sqr()).cmp(w)>=0&&(a=e,s=n),r.negative&&(r=r.neg(),i=i.neg()),a.negative&&(a=a.neg(),s=s.neg()),[{a:r,b:i},{a:a,b:s}]},f.prototype._endoSplit=function(t){var e=this.endo.basis,n=e[0],r=e[1],i=r.b.mul(t).divRound(this.n),o=n.b.neg().mul(t).divRound(this.n),a=i.mul(n.a),s=o.mul(r.a),c=i.mul(n.b),f=o.mul(r.b)
return{k1:t.sub(a).sub(s),k2:c.add(f).neg()}},f.prototype.pointFromX=function(t,e){(t=new o(t,16)).red||(t=t.toRed(this.red))
var n=t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),r=n.redSqrt()
if(0!==r.redSqr().redSub(n).cmp(this.zero))throw new Error("invalid point")
var i=r.fromRed().isOdd()
return(e&&!i||!e&&i)&&(r=r.redNeg()),this.point(t,r)},f.prototype.validate=function(t){if(t.inf)return!0
var e=t.x,n=t.y,r=this.a.redMul(e),i=e.redSqr().redMul(e).redIAdd(r).redIAdd(this.b)
return 0===n.redSqr().redISub(i).cmpn(0)},f.prototype._endoWnafMulAdd=function(t,e,n){for(var r=this._endoWnafT1,i=this._endoWnafT2,o=0;o<t.length;o++){var a=this._endoSplit(e[o]),s=t[o],c=s._getBeta()
a.k1.negative&&(a.k1.ineg(),s=s.neg(!0)),a.k2.negative&&(a.k2.ineg(),c=c.neg(!0)),r[2*o]=s,r[2*o+1]=c,i[2*o]=a.k1,i[2*o+1]=a.k2}for(var f=this._wnafMulAdd(1,r,i,2*o,n),u=0;u<2*o;u++)r[u]=null,i[u]=null
return f},a(u,s.BasePoint),f.prototype.point=function(t,e,n){return new u(this,t,e,n)},f.prototype.pointFromJSON=function(t,e){return u.fromJSON(this,t,e)},u.prototype._getBeta=function(){if(this.curve.endo){var t=this.precomputed
if(t&&t.beta)return t.beta
var e=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y)
if(t){var n=this.curve,r=function(t){return n.point(t.x.redMul(n.endo.beta),t.y)}
t.beta=e,e.precomputed={beta:null,naf:t.naf&&{wnd:t.naf.wnd,points:t.naf.points.map(r)},doubles:t.doubles&&{step:t.doubles.step,points:t.doubles.points.map(r)}}}return e}},u.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},u.fromJSON=function(t,e,n){"string"==typeof e&&(e=JSON.parse(e))
var r=t.point(e[0],e[1],n)
if(!e[2])return r
function i(e){return t.point(e[0],e[1],n)}var o=e[2]
return r.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[r].concat(o.doubles.points.map(i))},naf:o.naf&&{wnd:o.naf.wnd,points:[r].concat(o.naf.points.map(i))}},r},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return this.inf},u.prototype.add=function(t){if(this.inf)return t
if(t.inf)return this
if(this.eq(t))return this.dbl()
if(this.neg().eq(t))return this.curve.point(null,null)
if(0===this.x.cmp(t.x))return this.curve.point(null,null)
var e=this.y.redSub(t.y)
0!==e.cmpn(0)&&(e=e.redMul(this.x.redSub(t.x).redInvm()))
var n=e.redSqr().redISub(this.x).redISub(t.x),r=e.redMul(this.x.redSub(n)).redISub(this.y)
return this.curve.point(n,r)},u.prototype.dbl=function(){if(this.inf)return this
var t=this.y.redAdd(this.y)
if(0===t.cmpn(0))return this.curve.point(null,null)
var e=this.curve.a,n=this.x.redSqr(),r=t.redInvm(),i=n.redAdd(n).redIAdd(n).redIAdd(e).redMul(r),o=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(o)).redISub(this.y)
return this.curve.point(o,a)},u.prototype.getX=function(){return this.x.fromRed()},u.prototype.getY=function(){return this.y.fromRed()},u.prototype.mul=function(t){return t=new o(t,16),this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve.endo?this.curve._endoWnafMulAdd([this],[t]):this.curve._wnafMul(this,t)},u.prototype.mulAdd=function(t,e,n){var r=[this,e],i=[t,n]
return this.curve.endo?this.curve._endoWnafMulAdd(r,i):this.curve._wnafMulAdd(1,r,i,2)},u.prototype.jmulAdd=function(t,e,n){var r=[this,e],i=[t,n]
return this.curve.endo?this.curve._endoWnafMulAdd(r,i,!0):this.curve._wnafMulAdd(1,r,i,2,!0)},u.prototype.eq=function(t){return this===t||this.inf===t.inf&&(this.inf||0===this.x.cmp(t.x)&&0===this.y.cmp(t.y))},u.prototype.neg=function(t){if(this.inf)return this
var e=this.curve.point(this.x,this.y.redNeg())
if(t&&this.precomputed){var n=this.precomputed,r=function(t){return t.neg()}
e.precomputed={naf:n.naf&&{wnd:n.naf.wnd,points:n.naf.points.map(r)},doubles:n.doubles&&{step:n.doubles.step,points:n.doubles.points.map(r)}}}return e},u.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},a(h,s.BasePoint),f.prototype.jpoint=function(t,e,n){return new h(this,t,e,n)},h.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null)
var t=this.z.redInvm(),e=t.redSqr(),n=this.x.redMul(e),r=this.y.redMul(e).redMul(t)
return this.curve.point(n,r)},h.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},h.prototype.add=function(t){if(this.isInfinity())return t
if(t.isInfinity())return this
var e=t.z.redSqr(),n=this.z.redSqr(),r=this.x.redMul(e),i=t.x.redMul(n),o=this.y.redMul(e.redMul(t.z)),a=t.y.redMul(n.redMul(this.z)),s=r.redSub(i),c=o.redSub(a)
if(0===s.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl()
var f=s.redSqr(),u=f.redMul(s),h=r.redMul(f),l=c.redSqr().redIAdd(u).redISub(h).redISub(h),d=c.redMul(h.redISub(l)).redISub(o.redMul(u)),p=this.z.redMul(t.z).redMul(s)
return this.curve.jpoint(l,d,p)},h.prototype.mixedAdd=function(t){if(this.isInfinity())return t.toJ()
if(t.isInfinity())return this
var e=this.z.redSqr(),n=this.x,r=t.x.redMul(e),i=this.y,o=t.y.redMul(e).redMul(this.z),a=n.redSub(r),s=i.redSub(o)
if(0===a.cmpn(0))return 0!==s.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl()
var c=a.redSqr(),f=c.redMul(a),u=n.redMul(c),h=s.redSqr().redIAdd(f).redISub(u).redISub(u),l=s.redMul(u.redISub(h)).redISub(i.redMul(f)),d=this.z.redMul(a)
return this.curve.jpoint(h,l,d)},h.prototype.dblp=function(t){if(0===t)return this
if(this.isInfinity())return this
if(!t)return this.dbl()
if(this.curve.zeroA||this.curve.threeA){for(var e=this,n=0;n<t;n++)e=e.dbl()
return e}var r=this.curve.a,i=this.curve.tinv,o=this.x,a=this.y,s=this.z,c=s.redSqr().redSqr(),f=a.redAdd(a)
for(n=0;n<t;n++){var u=o.redSqr(),h=f.redSqr(),l=h.redSqr(),d=u.redAdd(u).redIAdd(u).redIAdd(r.redMul(c)),p=o.redMul(h),b=d.redSqr().redISub(p.redAdd(p)),v=p.redISub(b),g=d.redMul(v)
g=g.redIAdd(g).redISub(l)
var m=f.redMul(s)
n+1<t&&(c=c.redMul(l)),o=b,s=m,f=g}return this.curve.jpoint(o,f.redMul(i),s)},h.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},h.prototype._zeroDbl=function(){var t,e,n
if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(r).redISub(o)
a=a.redIAdd(a)
var s=r.redAdd(r).redIAdd(r),c=s.redSqr().redISub(a).redISub(a),f=o.redIAdd(o)
f=(f=f.redIAdd(f)).redIAdd(f),t=c,e=s.redMul(a.redISub(c)).redISub(f),n=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),h=this.y.redSqr(),l=h.redSqr(),d=this.x.redAdd(h).redSqr().redISub(u).redISub(l)
d=d.redIAdd(d)
var p=u.redAdd(u).redIAdd(u),b=p.redSqr(),v=l.redIAdd(l)
v=(v=v.redIAdd(v)).redIAdd(v),t=b.redISub(d).redISub(d),e=p.redMul(d.redISub(t)).redISub(v),n=(n=this.y.redMul(this.z)).redIAdd(n)}return this.curve.jpoint(t,e,n)},h.prototype._threeDbl=function(){var t,e,n
if(this.zOne){var r=this.x.redSqr(),i=this.y.redSqr(),o=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(r).redISub(o)
a=a.redIAdd(a)
var s=r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),c=s.redSqr().redISub(a).redISub(a)
t=c
var f=o.redIAdd(o)
f=(f=f.redIAdd(f)).redIAdd(f),e=s.redMul(a.redISub(c)).redISub(f),n=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),h=this.y.redSqr(),l=this.x.redMul(h),d=this.x.redSub(u).redMul(this.x.redAdd(u))
d=d.redAdd(d).redIAdd(d)
var p=l.redIAdd(l),b=(p=p.redIAdd(p)).redAdd(p)
t=d.redSqr().redISub(b),n=this.y.redAdd(this.z).redSqr().redISub(h).redISub(u)
var v=h.redSqr()
v=(v=(v=v.redIAdd(v)).redIAdd(v)).redIAdd(v),e=d.redMul(p.redISub(t)).redISub(v)}return this.curve.jpoint(t,e,n)},h.prototype._dbl=function(){var t=this.curve.a,e=this.x,n=this.y,r=this.z,i=r.redSqr().redSqr(),o=e.redSqr(),a=n.redSqr(),s=o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),c=e.redAdd(e),f=(c=c.redIAdd(c)).redMul(a),u=s.redSqr().redISub(f.redAdd(f)),h=f.redISub(u),l=a.redSqr()
l=(l=(l=l.redIAdd(l)).redIAdd(l)).redIAdd(l)
var d=s.redMul(h).redISub(l),p=n.redAdd(n).redMul(r)
return this.curve.jpoint(u,d,p)},h.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this)
var t=this.x.redSqr(),e=this.y.redSqr(),n=this.z.redSqr(),r=e.redSqr(),i=t.redAdd(t).redIAdd(t),o=i.redSqr(),a=this.x.redAdd(e).redSqr().redISub(t).redISub(r),s=(a=(a=(a=a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),c=r.redIAdd(r)
c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c)
var f=i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c),u=e.redMul(f)
u=(u=u.redIAdd(u)).redIAdd(u)
var h=this.x.redMul(s).redISub(u)
h=(h=h.redIAdd(h)).redIAdd(h)
var l=this.y.redMul(f.redMul(c.redISub(f)).redISub(a.redMul(s)))
l=(l=(l=l.redIAdd(l)).redIAdd(l)).redIAdd(l)
var d=this.z.redAdd(a).redSqr().redISub(n).redISub(s)
return this.curve.jpoint(h,l,d)},h.prototype.mul=function(t,e){return t=new o(t,e),this.curve._wnafMul(this,t)},h.prototype.eq=function(t){if("affine"===t.type)return this.eq(t.toJ())
if(this===t)return!0
var e=this.z.redSqr(),n=t.z.redSqr()
if(0!==this.x.redMul(n).redISub(t.x.redMul(e)).cmpn(0))return!1
var r=e.redMul(this.z),i=n.redMul(t.z)
return 0===this.y.redMul(i).redISub(t.y.redMul(r)).cmpn(0)},h.prototype.eqXToP=function(t){var e=this.z.redSqr(),n=t.toRed(this.curve.red).redMul(e)
if(0===this.x.cmp(n))return!0
for(var r=t.clone(),i=this.curve.redN.redMul(e);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1
if(n.redIAdd(i),0===this.x.cmp(n))return!0}},h.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},h.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(t,e,n){"use strict"
var r=n(28),i=n(4),o=n(1),a=r.base,s=n(7).utils
function c(t){a.call(this,"mont",t),this.a=new i(t.a,16).toRed(this.red),this.b=new i(t.b,16).toRed(this.red),this.i4=new i(4).toRed(this.red).redInvm(),this.two=new i(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function f(t,e,n){a.BasePoint.call(this,t,"projective"),null===e&&null===n?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new i(e,16),this.z=new i(n,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}o(c,a),t.exports=c,c.prototype.validate=function(t){var e=t.normalize().x,n=e.redSqr(),r=n.redMul(e).redAdd(n.redMul(this.a)).redAdd(e)
return 0===r.redSqrt().redSqr().cmp(r)},o(f,a.BasePoint),c.prototype.decodePoint=function(t,e){return this.point(s.toArray(t,e),1)},c.prototype.point=function(t,e){return new f(this,t,e)},c.prototype.pointFromJSON=function(t){return f.fromJSON(this,t)},f.prototype.precompute=function(){},f.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},f.fromJSON=function(t,e){return new f(t,e[0],e[1]||t.one)},f.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},f.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},f.prototype.dbl=function(){var t=this.x.redAdd(this.z).redSqr(),e=this.x.redSub(this.z).redSqr(),n=t.redSub(e),r=t.redMul(e),i=n.redMul(e.redAdd(this.curve.a24.redMul(n)))
return this.curve.point(r,i)},f.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},f.prototype.diffAdd=function(t,e){var n=this.x.redAdd(this.z),r=this.x.redSub(this.z),i=t.x.redAdd(t.z),o=t.x.redSub(t.z).redMul(n),a=i.redMul(r),s=e.z.redMul(o.redAdd(a).redSqr()),c=e.x.redMul(o.redISub(a).redSqr())
return this.curve.point(s,c)},f.prototype.mul=function(t){for(var e=t.clone(),n=this,r=this.curve.point(null,null),i=[];0!==e.cmpn(0);e.iushrn(1))i.push(e.andln(1))
for(var o=i.length-1;o>=0;o--)0===i[o]?(n=n.diffAdd(r,this),r=r.dbl()):(r=n.diffAdd(r,this),n=n.dbl())
return r},f.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},f.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},f.prototype.eq=function(t){return 0===this.getX().cmp(t.getX())},f.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},f.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(t,e,n){"use strict"
var r=n(28),i=n(7),o=n(4),a=n(1),s=r.base,c=i.utils.assert
function f(t){this.twisted=1!=(0|t.a),this.mOneA=this.twisted&&-1==(0|t.a),this.extended=this.mOneA,s.call(this,"edwards",t),this.a=new o(t.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new o(t.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new o(t.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),c(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|t.c)}function u(t,e,n,r,i){s.BasePoint.call(this,t,"projective"),null===e&&null===n&&null===r?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new o(e,16),this.y=new o(n,16),this.z=r?new o(r,16):this.curve.one,this.t=i&&new o(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}a(f,s),t.exports=f,f.prototype._mulA=function(t){return this.mOneA?t.redNeg():this.a.redMul(t)},f.prototype._mulC=function(t){return this.oneC?t:this.c.redMul(t)},f.prototype.jpoint=function(t,e,n,r){return this.point(t,e,n,r)},f.prototype.pointFromX=function(t,e){(t=new o(t,16)).red||(t=t.toRed(this.red))
var n=t.redSqr(),r=this.c2.redSub(this.a.redMul(n)),i=this.one.redSub(this.c2.redMul(this.d).redMul(n)),a=r.redMul(i.redInvm()),s=a.redSqrt()
if(0!==s.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point")
var c=s.fromRed().isOdd()
return(e&&!c||!e&&c)&&(s=s.redNeg()),this.point(t,s)},f.prototype.pointFromY=function(t,e){(t=new o(t,16)).red||(t=t.toRed(this.red))
var n=t.redSqr(),r=n.redSub(this.c2),i=n.redMul(this.d).redMul(this.c2).redSub(this.a),a=r.redMul(i.redInvm())
if(0===a.cmp(this.zero)){if(e)throw new Error("invalid point")
return this.point(this.zero,t)}var s=a.redSqrt()
if(0!==s.redSqr().redSub(a).cmp(this.zero))throw new Error("invalid point")
return s.fromRed().isOdd()!==e&&(s=s.redNeg()),this.point(s,t)},f.prototype.validate=function(t){if(t.isInfinity())return!0
t.normalize()
var e=t.x.redSqr(),n=t.y.redSqr(),r=e.redMul(this.a).redAdd(n),i=this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(n)))
return 0===r.cmp(i)},a(u,s.BasePoint),f.prototype.pointFromJSON=function(t){return u.fromJSON(this,t)},f.prototype.point=function(t,e,n,r){return new u(this,t,e,n,r)},u.fromJSON=function(t,e){return new u(t,e[0],e[1],e[2])},u.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},u.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&(0===this.y.cmp(this.z)||this.zOne&&0===this.y.cmp(this.curve.c))},u.prototype._extDbl=function(){var t=this.x.redSqr(),e=this.y.redSqr(),n=this.z.redSqr()
n=n.redIAdd(n)
var r=this.curve._mulA(t),i=this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),o=r.redAdd(e),a=o.redSub(n),s=r.redSub(e),c=i.redMul(a),f=o.redMul(s),u=i.redMul(s),h=a.redMul(o)
return this.curve.point(c,f,h,u)},u.prototype._projDbl=function(){var t,e,n,r=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),o=this.y.redSqr()
if(this.curve.twisted){var a=(f=this.curve._mulA(i)).redAdd(o)
if(this.zOne)t=r.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)),e=a.redMul(f.redSub(o)),n=a.redSqr().redSub(a).redSub(a)
else{var s=this.z.redSqr(),c=a.redSub(s).redISub(s)
t=r.redSub(i).redISub(o).redMul(c),e=a.redMul(f.redSub(o)),n=a.redMul(c)}}else{var f=i.redAdd(o)
s=this.curve._mulC(this.z).redSqr(),c=f.redSub(s).redSub(s)
t=this.curve._mulC(r.redISub(f)).redMul(c),e=this.curve._mulC(f).redMul(i.redISub(o)),n=f.redMul(c)}return this.curve.point(t,e,n)},u.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},u.prototype._extAdd=function(t){var e=this.y.redSub(this.x).redMul(t.y.redSub(t.x)),n=this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),r=this.t.redMul(this.curve.dd).redMul(t.t),i=this.z.redMul(t.z.redAdd(t.z)),o=n.redSub(e),a=i.redSub(r),s=i.redAdd(r),c=n.redAdd(e),f=o.redMul(a),u=s.redMul(c),h=o.redMul(c),l=a.redMul(s)
return this.curve.point(f,u,l,h)},u.prototype._projAdd=function(t){var e,n,r=this.z.redMul(t.z),i=r.redSqr(),o=this.x.redMul(t.x),a=this.y.redMul(t.y),s=this.curve.d.redMul(o).redMul(a),c=i.redSub(s),f=i.redAdd(s),u=this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(a),h=r.redMul(c).redMul(u)
return this.curve.twisted?(e=r.redMul(f).redMul(a.redSub(this.curve._mulA(o))),n=c.redMul(f)):(e=r.redMul(f).redMul(a.redSub(o)),n=this.curve._mulC(c).redMul(f)),this.curve.point(h,e,n)},u.prototype.add=function(t){return this.isInfinity()?t:t.isInfinity()?this:this.curve.extended?this._extAdd(t):this._projAdd(t)},u.prototype.mul=function(t){return this._hasDoubles(t)?this.curve._fixedNafMul(this,t):this.curve._wnafMul(this,t)},u.prototype.mulAdd=function(t,e,n){return this.curve._wnafMulAdd(1,[this,e],[t,n],2,!1)},u.prototype.jmulAdd=function(t,e,n){return this.curve._wnafMulAdd(1,[this,e],[t,n],2,!0)},u.prototype.normalize=function(){if(this.zOne)return this
var t=this.z.redInvm()
return this.x=this.x.redMul(t),this.y=this.y.redMul(t),this.t&&(this.t=this.t.redMul(t)),this.z=this.curve.one,this.zOne=!0,this},u.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},u.prototype.getX=function(){return this.normalize(),this.x.fromRed()},u.prototype.getY=function(){return this.normalize(),this.y.fromRed()},u.prototype.eq=function(t){return this===t||0===this.getX().cmp(t.getX())&&0===this.getY().cmp(t.getY())},u.prototype.eqXToP=function(t){var e=t.toRed(this.curve.red).redMul(this.z)
if(0===this.x.cmp(e))return!0
for(var n=t.clone(),r=this.curve.redN.redMul(this.z);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1
if(e.redIAdd(r),0===this.x.cmp(e))return!0}},u.prototype.toP=u.prototype.normalize,u.prototype.mixedAdd=u.prototype.add},function(t,e,n){"use strict"
var r,i=e,o=n(46),a=n(7),s=a.utils.assert
function c(t){"short"===t.type?this.curve=new a.curve.short(t):"edwards"===t.type?this.curve=new a.curve.edwards(t):this.curve=new a.curve.mont(t),this.g=this.curve.g,this.n=this.curve.n,this.hash=t.hash,s(this.g.validate(),"Invalid curve"),s(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function f(t,e){Object.defineProperty(i,t,{configurable:!0,enumerable:!0,get:function(){var n=new c(e)
return Object.defineProperty(i,t,{configurable:!0,enumerable:!0,value:n}),n}})}i.PresetCurve=c,f("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),f("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),f("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),f("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),f("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),f("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),f("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]})
try{r=n(146)}catch(t){r=void 0}f("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",r]})},function(t,e,n){"use strict"
e.sha1=n(141),e.sha224=n(142),e.sha256=n(72),e.sha384=n(143),e.sha512=n(73)},function(t,e,n){"use strict"
var r=n(11),i=n(21),o=n(71),a=r.rotl32,s=r.sum32,c=r.sum32_5,f=o.ft_1,u=i.BlockHash,h=[1518500249,1859775393,2400959708,3395469782]
function l(){if(!(this instanceof l))return new l
u.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}r.inherits(l,u),t.exports=l,l.blockSize=512,l.outSize=160,l.hmacStrength=80,l.padLength=64,l.prototype._update=function(t,e){for(var n=this.W,r=0;r<16;r++)n[r]=t[e+r]
for(;r<n.length;r++)n[r]=a(n[r-3]^n[r-8]^n[r-14]^n[r-16],1)
var i=this.h[0],o=this.h[1],u=this.h[2],l=this.h[3],d=this.h[4]
for(r=0;r<n.length;r++){var p=~~(r/20),b=c(a(i,5),f(p,o,u,l),d,n[r],h[p])
d=l,l=u,u=a(o,30),o=i,i=b}this.h[0]=s(this.h[0],i),this.h[1]=s(this.h[1],o),this.h[2]=s(this.h[2],u),this.h[3]=s(this.h[3],l),this.h[4]=s(this.h[4],d)},l.prototype._digest=function(t){return"hex"===t?r.toHex32(this.h,"big"):r.split32(this.h,"big")}},function(t,e,n){"use strict"
var r=n(11),i=n(72)
function o(){if(!(this instanceof o))return new o
i.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}r.inherits(o,i),t.exports=o,o.blockSize=512,o.outSize=224,o.hmacStrength=192,o.padLength=64,o.prototype._digest=function(t){return"hex"===t?r.toHex32(this.h.slice(0,7),"big"):r.split32(this.h.slice(0,7),"big")}},function(t,e,n){"use strict"
var r=n(11),i=n(73)
function o(){if(!(this instanceof o))return new o
i.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}r.inherits(o,i),t.exports=o,o.blockSize=1024,o.outSize=384,o.hmacStrength=192,o.padLength=128,o.prototype._digest=function(t){return"hex"===t?r.toHex32(this.h.slice(0,12),"big"):r.split32(this.h.slice(0,12),"big")}},function(t,e,n){"use strict"
var r=n(11),i=n(21),o=r.rotl32,a=r.sum32,s=r.sum32_3,c=r.sum32_4,f=i.BlockHash
function u(){if(!(this instanceof u))return new u
f.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function h(t,e,n,r){return t<=15?e^n^r:t<=31?e&n|~e&r:t<=47?(e|~n)^r:t<=63?e&r|n&~r:e^(n|~r)}function l(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function d(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}r.inherits(u,f),e.ripemd160=u,u.blockSize=512,u.outSize=160,u.hmacStrength=192,u.padLength=64,u.prototype._update=function(t,e){for(var n=this.h[0],r=this.h[1],i=this.h[2],f=this.h[3],u=this.h[4],m=n,y=r,_=i,w=f,x=u,S=0;S<80;S++){var k=a(o(c(n,h(S,r,i,f),t[p[S]+e],l(S)),v[S]),u)
n=u,u=f,f=o(i,10),i=r,r=k,k=a(o(c(m,h(79-S,y,_,w),t[b[S]+e],d(S)),g[S]),x),m=x,x=w,w=o(_,10),_=y,y=k}k=s(this.h[1],i,w),this.h[1]=s(this.h[2],f,x),this.h[2]=s(this.h[3],u,m),this.h[3]=s(this.h[4],n,y),this.h[4]=s(this.h[0],r,_),this.h[0]=k},u.prototype._digest=function(t){return"hex"===t?r.toHex32(this.h,"little"):r.split32(this.h,"little")}
var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],v=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],g=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(t,e,n){"use strict"
var r=n(11),i=n(9)
function o(t,e,n){if(!(this instanceof o))return new o(t,e,n)
this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(r.toArray(e,n))}t.exports=o,o.prototype._init=function(t){t.length>this.blockSize&&(t=(new this.Hash).update(t).digest()),i(t.length<=this.blockSize)
for(var e=t.length;e<this.blockSize;e++)t.push(0)
for(e=0;e<t.length;e++)t[e]^=54
for(this.inner=(new this.Hash).update(t),e=0;e<t.length;e++)t[e]^=106
this.outer=(new this.Hash).update(t)},o.prototype.update=function(t,e){return this.inner.update(t,e),this},o.prototype.digest=function(t){return this.outer.update(this.inner.digest()),this.outer.digest(t)}},function(t,e){t.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},function(t,e,n){"use strict"
var r=n(4),i=n(148),o=n(7),a=o.utils.assert,s=n(149),c=n(150)
function f(t){if(!(this instanceof f))return new f(t)
"string"==typeof t&&(a(o.curves.hasOwnProperty(t),"Unknown curve "+t),t=o.curves[t]),t instanceof o.curves.PresetCurve&&(t={curve:t}),this.curve=t.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=t.curve.g,this.g.precompute(t.curve.n.bitLength()+1),this.hash=t.hash||t.curve.hash}t.exports=f,f.prototype.keyPair=function(t){return new s(this,t)},f.prototype.keyFromPrivate=function(t,e){return s.fromPrivate(this,t,e)},f.prototype.keyFromPublic=function(t,e){return s.fromPublic(this,t,e)},f.prototype.genKeyPair=function(t){t||(t={})
for(var e=new i({hash:this.hash,pers:t.pers,persEnc:t.persEnc||"utf8",entropy:t.entropy||o.rand(this.hash.hmacStrength),entropyEnc:t.entropy&&t.entropyEnc||"utf8",nonce:this.n.toArray()}),n=this.n.byteLength(),a=this.n.sub(new r(2));;){var s=new r(e.generate(n))
if(!(s.cmp(a)>0))return s.iaddn(1),this.keyFromPrivate(s)}},f.prototype._truncateToN=function(t,e){var n=8*t.byteLength()-this.n.bitLength()
return n>0&&(t=t.ushrn(n)),!e&&t.cmp(this.n)>=0?t.sub(this.n):t},f.prototype.sign=function(t,e,n,o){"object"==typeof n&&(o=n,n=null),o||(o={}),e=this.keyFromPrivate(e,n),t=this._truncateToN(new r(t,16))
for(var a=this.n.byteLength(),s=e.getPrivate().toArray("be",a),f=t.toArray("be",a),u=new i({hash:this.hash,entropy:s,nonce:f,pers:o.pers,persEnc:o.persEnc||"utf8"}),h=this.n.sub(new r(1)),l=0;;l++){var d=o.k?o.k(l):new r(u.generate(this.n.byteLength()))
if(!((d=this._truncateToN(d,!0)).cmpn(1)<=0||d.cmp(h)>=0)){var p=this.g.mul(d)
if(!p.isInfinity()){var b=p.getX(),v=b.umod(this.n)
if(0!==v.cmpn(0)){var g=d.invm(this.n).mul(v.mul(e.getPrivate()).iadd(t))
if(0!==(g=g.umod(this.n)).cmpn(0)){var m=(p.getY().isOdd()?1:0)|(0!==b.cmp(v)?2:0)
return o.canonical&&g.cmp(this.nh)>0&&(g=this.n.sub(g),m^=1),new c({r:v,s:g,recoveryParam:m})}}}}}},f.prototype.verify=function(t,e,n,i){t=this._truncateToN(new r(t,16)),n=this.keyFromPublic(n,i)
var o=(e=new c(e,"hex")).r,a=e.s
if(o.cmpn(1)<0||o.cmp(this.n)>=0)return!1
if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1
var s,f=a.invm(this.n),u=f.mul(t).umod(this.n),h=f.mul(o).umod(this.n)
return this.curve._maxwellTrick?!(s=this.g.jmulAdd(u,n.getPublic(),h)).isInfinity()&&s.eqXToP(o):!(s=this.g.mulAdd(u,n.getPublic(),h)).isInfinity()&&0===s.getX().umod(this.n).cmp(o)},f.prototype.recoverPubKey=function(t,e,n,i){a((3&n)===n,"The recovery param is more than two bits"),e=new c(e,i)
var o=this.n,s=new r(t),f=e.r,u=e.s,h=1&n,l=n>>1
if(f.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate")
f=l?this.curve.pointFromX(f.add(this.curve.n),h):this.curve.pointFromX(f,h)
var d=e.r.invm(o),p=o.sub(s).mul(d).umod(o),b=u.mul(d).umod(o)
return this.g.mulAdd(p,f,b)},f.prototype.getKeyRecoveryParam=function(t,e,n,r){if(null!==(e=new c(e,r)).recoveryParam)return e.recoveryParam
for(var i=0;i<4;i++){var o
try{o=this.recoverPubKey(t,e,i)}catch(t){continue}if(o.eq(n))return i}throw new Error("Unable to find valid recovery factor")}},function(t,e,n){"use strict"
var r=n(46),i=n(70),o=n(9)
function a(t){if(!(this instanceof a))return new a(t)
this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null
var e=i.toArray(t.entropy,t.entropyEnc||"hex"),n=i.toArray(t.nonce,t.nonceEnc||"hex"),r=i.toArray(t.pers,t.persEnc||"hex")
o(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,n,r)}t.exports=a,a.prototype._init=function(t,e,n){var r=t.concat(e).concat(n)
this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8)
for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1
this._update(r),this._reseed=1,this.reseedInterval=281474976710656},a.prototype._hmac=function(){return new r.hmac(this.hash,this.K)},a.prototype._update=function(t){var e=this._hmac().update(this.V).update([0])
t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},a.prototype.reseed=function(t,e,n,r){"string"!=typeof e&&(r=n,n=e,e=null),t=i.toArray(t,e),n=i.toArray(n,r),o(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(n||[])),this._reseed=1},a.prototype.generate=function(t,e,n,r){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required")
"string"!=typeof e&&(r=n,n=e,e=null),n&&(n=i.toArray(n,r||"hex"),this._update(n))
for(var o=[];o.length<t;)this.V=this._hmac().update(this.V).digest(),o=o.concat(this.V)
var a=o.slice(0,t)
return this._update(n),this._reseed++,i.encode(a,e)}},function(t,e,n){"use strict"
var r=n(4),i=n(7).utils.assert
function o(t,e){this.ec=t,this.priv=null,this.pub=null,e.priv&&this._importPrivate(e.priv,e.privEnc),e.pub&&this._importPublic(e.pub,e.pubEnc)}t.exports=o,o.fromPublic=function(t,e,n){return e instanceof o?e:new o(t,{pub:e,pubEnc:n})},o.fromPrivate=function(t,e,n){return e instanceof o?e:new o(t,{priv:e,privEnc:n})},o.prototype.validate=function(){var t=this.getPublic()
return t.isInfinity()?{result:!1,reason:"Invalid public key"}:t.validate()?t.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},o.prototype.getPublic=function(t,e){return"string"==typeof t&&(e=t,t=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),e?this.pub.encode(e,t):this.pub},o.prototype.getPrivate=function(t){return"hex"===t?this.priv.toString(16,2):this.priv},o.prototype._importPrivate=function(t,e){this.priv=new r(t,e||16),this.priv=this.priv.umod(this.ec.curve.n)},o.prototype._importPublic=function(t,e){if(t.x||t.y)return"mont"===this.ec.curve.type?i(t.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||i(t.x&&t.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(t.x,t.y))
this.pub=this.ec.curve.decodePoint(t,e)},o.prototype.derive=function(t){return t.mul(this.priv).getX()},o.prototype.sign=function(t,e,n){return this.ec.sign(t,this,e,n)},o.prototype.verify=function(t,e){return this.ec.verify(t,e,this)},o.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(t,e,n){"use strict"
var r=n(4),i=n(7).utils,o=i.assert
function a(t,e){if(t instanceof a)return t
this._importDER(t,e)||(o(t.r&&t.s,"Signature without r or s"),this.r=new r(t.r,16),this.s=new r(t.s,16),void 0===t.recoveryParam?this.recoveryParam=null:this.recoveryParam=t.recoveryParam)}function s(){this.place=0}function c(t,e){var n=t[e.place++]
if(!(128&n))return n
for(var r=15&n,i=0,o=0,a=e.place;o<r;o++,a++)i<<=8,i|=t[a]
return e.place=a,i}function f(t){for(var e=0,n=t.length-1;!t[e]&&!(128&t[e+1])&&e<n;)e++
return 0===e?t:t.slice(e)}function u(t,e){if(e<128)t.push(e)
else{var n=1+(Math.log(e)/Math.LN2>>>3)
for(t.push(128|n);--n;)t.push(e>>>(n<<3)&255)
t.push(e)}}t.exports=a,a.prototype._importDER=function(t,e){t=i.toArray(t,e)
var n=new s
if(48!==t[n.place++])return!1
if(c(t,n)+n.place!==t.length)return!1
if(2!==t[n.place++])return!1
var o=c(t,n),a=t.slice(n.place,o+n.place)
if(n.place+=o,2!==t[n.place++])return!1
var f=c(t,n)
if(t.length!==f+n.place)return!1
var u=t.slice(n.place,f+n.place)
return 0===a[0]&&128&a[1]&&(a=a.slice(1)),0===u[0]&&128&u[1]&&(u=u.slice(1)),this.r=new r(a),this.s=new r(u),this.recoveryParam=null,!0},a.prototype.toDER=function(t){var e=this.r.toArray(),n=this.s.toArray()
for(128&e[0]&&(e=[0].concat(e)),128&n[0]&&(n=[0].concat(n)),e=f(e),n=f(n);!(n[0]||128&n[1]);)n=n.slice(1)
var r=[2]
u(r,e.length),(r=r.concat(e)).push(2),u(r,n.length)
var o=r.concat(n),a=[48]
return u(a,o.length),a=a.concat(o),i.encode(a,t)}},function(t,e,n){"use strict"
var r=n(46),i=n(7),o=i.utils,a=o.assert,s=o.parseBytes,c=n(152),f=n(153)
function u(t){if(a("ed25519"===t,"only tested with ed25519 so far"),!(this instanceof u))return new u(t)
t=i.curves[t].curve
this.curve=t,this.g=t.g,this.g.precompute(t.n.bitLength()+1),this.pointClass=t.point().constructor,this.encodingLength=Math.ceil(t.n.bitLength()/8),this.hash=r.sha512}t.exports=u,u.prototype.sign=function(t,e){t=s(t)
var n=this.keyFromSecret(e),r=this.hashInt(n.messagePrefix(),t),i=this.g.mul(r),o=this.encodePoint(i),a=this.hashInt(o,n.pubBytes(),t).mul(n.priv()),c=r.add(a).umod(this.curve.n)
return this.makeSignature({R:i,S:c,Rencoded:o})},u.prototype.verify=function(t,e,n){t=s(t),e=this.makeSignature(e)
var r=this.keyFromPublic(n),i=this.hashInt(e.Rencoded(),r.pubBytes(),t),o=this.g.mul(e.S())
return e.R().add(r.pub().mul(i)).eq(o)},u.prototype.hashInt=function(){for(var t=this.hash(),e=0;e<arguments.length;e++)t.update(arguments[e])
return o.intFromLE(t.digest()).umod(this.curve.n)},u.prototype.keyFromPublic=function(t){return c.fromPublic(this,t)},u.prototype.keyFromSecret=function(t){return c.fromSecret(this,t)},u.prototype.makeSignature=function(t){return t instanceof f?t:new f(this,t)},u.prototype.encodePoint=function(t){var e=t.getY().toArray("le",this.encodingLength)
return e[this.encodingLength-1]|=t.getX().isOdd()?128:0,e},u.prototype.decodePoint=function(t){var e=(t=o.parseBytes(t)).length-1,n=t.slice(0,e).concat(-129&t[e]),r=0!=(128&t[e]),i=o.intFromLE(n)
return this.curve.pointFromY(i,r)},u.prototype.encodeInt=function(t){return t.toArray("le",this.encodingLength)},u.prototype.decodeInt=function(t){return o.intFromLE(t)},u.prototype.isPoint=function(t){return t instanceof this.pointClass}},function(t,e,n){"use strict"
var r=n(7).utils,i=r.assert,o=r.parseBytes,a=r.cachedProperty
function s(t,e){this.eddsa=t,this._secret=o(e.secret),t.isPoint(e.pub)?this._pub=e.pub:this._pubBytes=o(e.pub)}s.fromPublic=function(t,e){return e instanceof s?e:new s(t,{pub:e})},s.fromSecret=function(t,e){return e instanceof s?e:new s(t,{secret:e})},s.prototype.secret=function(){return this._secret},a(s,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),a(s,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),a(s,"privBytes",function(){var t=this.eddsa,e=this.hash(),n=t.encodingLength-1,r=e.slice(0,t.encodingLength)
return r[0]&=248,r[n]&=127,r[n]|=64,r}),a(s,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),a(s,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),a(s,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),s.prototype.sign=function(t){return i(this._secret,"KeyPair can only verify"),this.eddsa.sign(t,this)},s.prototype.verify=function(t,e){return this.eddsa.verify(t,e,this)},s.prototype.getSecret=function(t){return i(this._secret,"KeyPair is public only"),r.encode(this.secret(),t)},s.prototype.getPublic=function(t){return r.encode(this.pubBytes(),t)},t.exports=s},function(t,e,n){"use strict"
var r=n(4),i=n(7).utils,o=i.assert,a=i.cachedProperty,s=i.parseBytes
function c(t,e){this.eddsa=t,"object"!=typeof e&&(e=s(e)),Array.isArray(e)&&(e={R:e.slice(0,t.encodingLength),S:e.slice(t.encodingLength)}),o(e.R&&e.S,"Signature without R or S"),t.isPoint(e.R)&&(this._R=e.R),e.S instanceof r&&(this._S=e.S),this._Rencoded=Array.isArray(e.R)?e.R:e.Rencoded,this._Sencoded=Array.isArray(e.S)?e.S:e.Sencoded}a(c,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),a(c,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),a(c,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),a(c,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),c.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},c.prototype.toHex=function(){return i.encode(this.toBytes(),"hex").toUpperCase()},t.exports=c},function(t,e,n){"use strict"
var r=n(22)
e.certificate=n(165)
var i=r.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())})
e.RSAPrivateKey=i
var o=r.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())})
e.RSAPublicKey=o
var a=r.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(s),this.key("subjectPublicKey").bitstr())})
e.PublicKey=a
var s=r.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),c=r.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(s),this.key("subjectPrivateKey").octstr())})
e.PrivateKey=c
var f=r.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())})
e.EncryptedPrivateKey=f
var u=r.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())})
e.DSAPrivateKey=u,e.DSAparam=r.define("DSAparam",function(){this.int()})
var h=r.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(l),this.key("publicKey").optional().explicit(1).bitstr())})
e.ECPrivateKey=h
var l=r.define("ECParameters",function(){this.choice({namedCurve:this.objid()})})
e.signature=r.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())})},function(t,e,n){var r=n(22),i=n(1)
function o(t,e){this.name=t,this.body=e,this.decoders={},this.encoders={}}e.define=function(t,e){return new o(t,e)},o.prototype._createNamed=function(t){var e
try{e=n(156).runInThisContext("(function "+this.name+"(entity) {\n  this._initNamed(entity);\n})")}catch(t){e=function(t){this._initNamed(t)}}return i(e,t),e.prototype._initNamed=function(e){t.call(this,e)},new e(this)},o.prototype._getDecoder=function(t){return t=t||"der",this.decoders.hasOwnProperty(t)||(this.decoders[t]=this._createNamed(r.decoders[t])),this.decoders[t]},o.prototype.decode=function(t,e,n){return this._getDecoder(e).decode(t,n)},o.prototype._getEncoder=function(t){return t=t||"der",this.encoders.hasOwnProperty(t)||(this.encoders[t]=this._createNamed(r.encoders[t])),this.encoders[t]},o.prototype.encode=function(t,e,n){return this._getEncoder(e).encode(t,n)}},function(module,exports,__webpack_require__){var indexOf=__webpack_require__(157),Object_keys=function(t){if(Object.keys)return Object.keys(t)
var e=[]
for(var n in t)e.push(n)
return e},forEach=function(t,e){if(t.forEach)return t.forEach(e)
for(var n=0;n<t.length;n++)e(t[n],n,t)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(t,e,n){Object.defineProperty(t,e,{writable:!0,enumerable:!1,configurable:!0,value:n})}}catch(t){return function(t,e,n){t[e]=n}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"]
function Context(){}Context.prototype={}
var Script=exports.Script=function(t){if(!(this instanceof Script))return new Script(t)
this.code=t}
Script.prototype.runInContext=function(t){if(!(t instanceof Context))throw new TypeError("needs a 'context' argument.")
var e=document.createElement("iframe")
e.style||(e.style={}),e.style.display="none",document.body.appendChild(e)
var n=e.contentWindow,r=n.eval,i=n.execScript
!r&&i&&(i.call(n,"null"),r=n.eval),forEach(Object_keys(t),function(e){n[e]=t[e]}),forEach(globals,function(e){t[e]&&(n[e]=t[e])})
var o=Object_keys(n),a=r.call(n,this.code)
return forEach(Object_keys(n),function(e){(e in t||-1===indexOf(o,e))&&(t[e]=n[e])}),forEach(globals,function(e){e in t||defineProp(t,e,n[e])}),document.body.removeChild(e),a},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(t){var e=Script.createContext(t),n=this.runInContext(e)
return forEach(Object_keys(e),function(n){t[n]=e[n]}),n},forEach(Object_keys(Script.prototype),function(t){exports[t]=Script[t]=function(e){var n=Script(e)
return n[t].apply(n,[].slice.call(arguments,1))}}),exports.createScript=function(t){return exports.Script(t)},exports.createContext=Script.createContext=function(t){var e=new Context
return"object"==typeof t&&forEach(Object_keys(t),function(n){e[n]=t[n]}),e}},function(t,e){var n=[].indexOf
t.exports=function(t,e){if(n)return t.indexOf(e)
for(var r=0;r<t.length;++r)if(t[r]===e)return r
return-1}},function(t,e,n){var r=n(1)
function i(t){this._reporterState={obj:null,path:[],options:t||{},errors:[]}}function o(t,e){this.path=t,this.rethrow(e)}e.Reporter=i,i.prototype.isError=function(t){return t instanceof o},i.prototype.save=function(){var t=this._reporterState
return{obj:t.obj,pathLen:t.path.length}},i.prototype.restore=function(t){var e=this._reporterState
e.obj=t.obj,e.path=e.path.slice(0,t.pathLen)},i.prototype.enterKey=function(t){return this._reporterState.path.push(t)},i.prototype.exitKey=function(t){var e=this._reporterState
e.path=e.path.slice(0,t-1)},i.prototype.leaveKey=function(t,e,n){var r=this._reporterState
this.exitKey(t),null!==r.obj&&(r.obj[e]=n)},i.prototype.path=function(){return this._reporterState.path.join("/")},i.prototype.enterObject=function(){var t=this._reporterState,e=t.obj
return t.obj={},e},i.prototype.leaveObject=function(t){var e=this._reporterState,n=e.obj
return e.obj=t,n},i.prototype.error=function(t){var e,n=this._reporterState,r=t instanceof o
if(e=r?t:new o(n.path.map(function(t){return"["+JSON.stringify(t)+"]"}).join(""),t.message||t,t.stack),!n.options.partial)throw e
return r||n.errors.push(e),e},i.prototype.wrapResult=function(t){var e=this._reporterState
return e.options.partial?{result:this.isError(t)?null:t,errors:e.errors}:t},r(o,Error),o.prototype.rethrow=function(t){if(this.message=t+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,o),!this.stack)try{throw new Error(this.message)}catch(t){this.stack=t.stack}return this}},function(t,e,n){var r=n(23).Reporter,i=n(23).EncoderBuffer,o=n(23).DecoderBuffer,a=n(9),s=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],c=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(s)
function f(t,e){var n={}
this._baseState=n,n.enc=t,n.parent=e||null,n.children=null,n.tag=null,n.args=null,n.reverseArgs=null,n.choice=null,n.optional=!1,n.any=!1,n.obj=!1,n.use=null,n.useDecoder=null,n.key=null,n.default=null,n.explicit=null,n.implicit=null,n.contains=null,n.parent||(n.children=[],this._wrap())}t.exports=f
var u=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"]
f.prototype.clone=function(){var t=this._baseState,e={}
u.forEach(function(n){e[n]=t[n]})
var n=new this.constructor(e.parent)
return n._baseState=e,n},f.prototype._wrap=function(){var t=this._baseState
c.forEach(function(e){this[e]=function(){var n=new this.constructor(this)
return t.children.push(n),n[e].apply(n,arguments)}},this)},f.prototype._init=function(t){var e=this._baseState
a(null===e.parent),t.call(this),e.children=e.children.filter(function(t){return t._baseState.parent===this},this),a.equal(e.children.length,1,"Root node can have only one child")},f.prototype._useArgs=function(t){var e=this._baseState,n=t.filter(function(t){return t instanceof this.constructor},this)
t=t.filter(function(t){return!(t instanceof this.constructor)},this),0!==n.length&&(a(null===e.children),e.children=n,n.forEach(function(t){t._baseState.parent=this},this)),0!==t.length&&(a(null===e.args),e.args=t,e.reverseArgs=t.map(function(t){if("object"!=typeof t||t.constructor!==Object)return t
var e={}
return Object.keys(t).forEach(function(n){n==(0|n)&&(n|=0)
var r=t[n]
e[r]=n}),e}))},["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"].forEach(function(t){f.prototype[t]=function(){var e=this._baseState
throw new Error(t+" not implemented for encoding: "+e.enc)}}),s.forEach(function(t){f.prototype[t]=function(){var e=this._baseState,n=Array.prototype.slice.call(arguments)
return a(null===e.tag),e.tag=t,this._useArgs(n),this}}),f.prototype.use=function(t){a(t)
var e=this._baseState
return a(null===e.use),e.use=t,this},f.prototype.optional=function(){return this._baseState.optional=!0,this},f.prototype.def=function(t){var e=this._baseState
return a(null===e.default),e.default=t,e.optional=!0,this},f.prototype.explicit=function(t){var e=this._baseState
return a(null===e.explicit&&null===e.implicit),e.explicit=t,this},f.prototype.implicit=function(t){var e=this._baseState
return a(null===e.explicit&&null===e.implicit),e.implicit=t,this},f.prototype.obj=function(){var t=this._baseState,e=Array.prototype.slice.call(arguments)
return t.obj=!0,0!==e.length&&this._useArgs(e),this},f.prototype.key=function(t){var e=this._baseState
return a(null===e.key),e.key=t,this},f.prototype.any=function(){return this._baseState.any=!0,this},f.prototype.choice=function(t){var e=this._baseState
return a(null===e.choice),e.choice=t,this._useArgs(Object.keys(t).map(function(e){return t[e]})),this},f.prototype.contains=function(t){var e=this._baseState
return a(null===e.use),e.contains=t,this},f.prototype._decode=function(t,e){var n=this._baseState
if(null===n.parent)return t.wrapResult(n.children[0]._decode(t,e))
var r,i=n.default,a=!0,s=null
if(null!==n.key&&(s=t.enterKey(n.key)),n.optional){var c=null
if(null!==n.explicit?c=n.explicit:null!==n.implicit?c=n.implicit:null!==n.tag&&(c=n.tag),null!==c||n.any){if(a=this._peekTag(t,c,n.any),t.isError(a))return a}else{var f=t.save()
try{null===n.choice?this._decodeGeneric(n.tag,t,e):this._decodeChoice(t,e),a=!0}catch(t){a=!1}t.restore(f)}}if(n.obj&&a&&(r=t.enterObject()),a){if(null!==n.explicit){var u=this._decodeTag(t,n.explicit)
if(t.isError(u))return u
t=u}var h=t.offset
if(null===n.use&&null===n.choice){if(n.any)f=t.save()
var l=this._decodeTag(t,null!==n.implicit?n.implicit:n.tag,n.any)
if(t.isError(l))return l
n.any?i=t.raw(f):t=l}if(e&&e.track&&null!==n.tag&&e.track(t.path(),h,t.length,"tagged"),e&&e.track&&null!==n.tag&&e.track(t.path(),t.offset,t.length,"content"),i=n.any?i:null===n.choice?this._decodeGeneric(n.tag,t,e):this._decodeChoice(t,e),t.isError(i))return i
if(n.any||null!==n.choice||null===n.children||n.children.forEach(function(n){n._decode(t,e)}),n.contains&&("octstr"===n.tag||"bitstr"===n.tag)){var d=new o(i)
i=this._getUse(n.contains,t._reporterState.obj)._decode(d,e)}}return n.obj&&a&&(i=t.leaveObject(r)),null===n.key||null===i&&!0!==a?null!==s&&t.exitKey(s):t.leaveKey(s,n.key,i),i},f.prototype._decodeGeneric=function(t,e,n){var r=this._baseState
return"seq"===t||"set"===t?null:"seqof"===t||"setof"===t?this._decodeList(e,t,r.args[0],n):/str$/.test(t)?this._decodeStr(e,t,n):"objid"===t&&r.args?this._decodeObjid(e,r.args[0],r.args[1],n):"objid"===t?this._decodeObjid(e,null,null,n):"gentime"===t||"utctime"===t?this._decodeTime(e,t,n):"null_"===t?this._decodeNull(e,n):"bool"===t?this._decodeBool(e,n):"objDesc"===t?this._decodeStr(e,t,n):"int"===t||"enum"===t?this._decodeInt(e,r.args&&r.args[0],n):null!==r.use?this._getUse(r.use,e._reporterState.obj)._decode(e,n):e.error("unknown tag: "+t)},f.prototype._getUse=function(t,e){var n=this._baseState
return n.useDecoder=this._use(t,e),a(null===n.useDecoder._baseState.parent),n.useDecoder=n.useDecoder._baseState.children[0],n.implicit!==n.useDecoder._baseState.implicit&&(n.useDecoder=n.useDecoder.clone(),n.useDecoder._baseState.implicit=n.implicit),n.useDecoder},f.prototype._decodeChoice=function(t,e){var n=this._baseState,r=null,i=!1
return Object.keys(n.choice).some(function(o){var a=t.save(),s=n.choice[o]
try{var c=s._decode(t,e)
if(t.isError(c))return!1
r={type:o,value:c},i=!0}catch(e){return t.restore(a),!1}return!0},this),i?r:t.error("Choice not matched")},f.prototype._createEncoderBuffer=function(t){return new i(t,this.reporter)},f.prototype._encode=function(t,e,n){var r=this._baseState
if(null===r.default||r.default!==t){var i=this._encodeValue(t,e,n)
if(void 0!==i&&!this._skipDefault(i,e,n))return i}},f.prototype._encodeValue=function(t,e,n){var i=this._baseState
if(null===i.parent)return i.children[0]._encode(t,e||new r)
var o=null
if(this.reporter=e,i.optional&&void 0===t){if(null===i.default)return
t=i.default}var a=null,s=!1
if(i.any)o=this._createEncoderBuffer(t)
else if(i.choice)o=this._encodeChoice(t,e)
else if(i.contains)a=this._getUse(i.contains,n)._encode(t,e),s=!0
else if(i.children)a=i.children.map(function(n){if("null_"===n._baseState.tag)return n._encode(null,e,t)
if(null===n._baseState.key)return e.error("Child should have a key")
var r=e.enterKey(n._baseState.key)
if("object"!=typeof t)return e.error("Child expected, but input is not object")
var i=n._encode(t[n._baseState.key],e,t)
return e.leaveKey(r),i},this).filter(function(t){return t}),a=this._createEncoderBuffer(a)
else if("seqof"===i.tag||"setof"===i.tag){if(!i.args||1!==i.args.length)return e.error("Too many args for : "+i.tag)
if(!Array.isArray(t))return e.error("seqof/setof, but data is not Array")
var c=this.clone()
c._baseState.implicit=null,a=this._createEncoderBuffer(t.map(function(n){var r=this._baseState
return this._getUse(r.args[0],t)._encode(n,e)},c))}else null!==i.use?o=this._getUse(i.use,n)._encode(t,e):(a=this._encodePrimitive(i.tag,t),s=!0)
if(!i.any&&null===i.choice){var f=null!==i.implicit?i.implicit:i.tag,u=null===i.implicit?"universal":"context"
null===f?null===i.use&&e.error("Tag could be omitted only for .use()"):null===i.use&&(o=this._encodeComposite(f,s,u,a))}return null!==i.explicit&&(o=this._encodeComposite(i.explicit,!1,"context",o)),o},f.prototype._encodeChoice=function(t,e){var n=this._baseState,r=n.choice[t.type]
return r||a(!1,t.type+" not found in "+JSON.stringify(Object.keys(n.choice))),r._encode(t.value,e)},f.prototype._encodePrimitive=function(t,e){var n=this._baseState
if(/str$/.test(t))return this._encodeStr(e,t)
if("objid"===t&&n.args)return this._encodeObjid(e,n.reverseArgs[0],n.args[1])
if("objid"===t)return this._encodeObjid(e,null,null)
if("gentime"===t||"utctime"===t)return this._encodeTime(e,t)
if("null_"===t)return this._encodeNull()
if("int"===t||"enum"===t)return this._encodeInt(e,n.args&&n.reverseArgs[0])
if("bool"===t)return this._encodeBool(e)
if("objDesc"===t)return this._encodeStr(e,t)
throw new Error("Unsupported tag: "+t)},f.prototype._isNumstr=function(t){return/^[0-9 ]*$/.test(t)},f.prototype._isPrintstr=function(t){return/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(t)}},function(t,e,n){var r=n(75)
e.tagClass={0:"universal",1:"application",2:"context",3:"private"},e.tagClassByName=r._reverse(e.tagClass),e.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},e.tagByName=r._reverse(e.tag)},function(t,e,n){var r=e
r.der=n(76),r.pem=n(162)},function(t,e,n){var r=n(1),i=n(5).Buffer,o=n(76)
function a(t){o.call(this,t),this.enc="pem"}r(a,o),t.exports=a,a.prototype.decode=function(t,e){for(var n=t.toString().split(/[\r\n]+/g),r=e.label.toUpperCase(),a=/^-----(BEGIN|END) ([^-]+)-----$/,s=-1,c=-1,f=0;f<n.length;f++){var u=n[f].match(a)
if(null!==u&&u[2]===r){if(-1!==s){if("END"!==u[1])break
c=f
break}if("BEGIN"!==u[1])break
s=f}}if(-1===s||-1===c)throw new Error("PEM section not found for: "+r)
var h=n.slice(s+1,c).join("")
h.replace(/[^a-z0-9\+\/=]+/gi,"")
var l=new i(h,"base64")
return o.prototype.decode.call(this,l,e)}},function(t,e,n){var r=e
r.der=n(77),r.pem=n(164)},function(t,e,n){var r=n(1),i=n(77)
function o(t){i.call(this,t),this.enc="pem"}r(o,i),t.exports=o,o.prototype.encode=function(t,e){for(var n=i.prototype.encode.call(this,t).toString("base64"),r=["-----BEGIN "+e.label+"-----"],o=0;o<n.length;o+=64)r.push(n.slice(o,o+64))
return r.push("-----END "+e.label+"-----"),r.join("\n")}},function(t,e,n){"use strict"
var r=n(22),i=r.define("Time",function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})}),o=r.define("AttributeTypeValue",function(){this.seq().obj(this.key("type").objid(),this.key("value").any())}),a=r.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional(),this.key("curve").objid().optional())}),s=r.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(a),this.key("subjectPublicKey").bitstr())}),c=r.define("RelativeDistinguishedName",function(){this.setof(o)}),f=r.define("RDNSequence",function(){this.seqof(c)}),u=r.define("Name",function(){this.choice({rdnSequence:this.use(f)})}),h=r.define("Validity",function(){this.seq().obj(this.key("notBefore").use(i),this.key("notAfter").use(i))}),l=r.define("Extension",function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())}),d=r.define("TBSCertificate",function(){this.seq().obj(this.key("version").explicit(0).int().optional(),this.key("serialNumber").int(),this.key("signature").use(a),this.key("issuer").use(u),this.key("validity").use(h),this.key("subject").use(u),this.key("subjectPublicKeyInfo").use(s),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(l).optional())}),p=r.define("X509Certificate",function(){this.seq().obj(this.key("tbsCertificate").use(d),this.key("signatureAlgorithm").use(a),this.key("signatureValue").bitstr())})
t.exports=p},function(t){t.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},function(t,e,n){var r=/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,i=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,o=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,a=n(27),s=n(43),c=n(2).Buffer
t.exports=function(t,e){var n,f=t.toString(),u=f.match(r)
if(u){var h="aes"+u[1],l=c.from(u[2],"hex"),d=c.from(u[3].replace(/[\r\n]/g,""),"base64"),p=a(e,l.slice(0,8),parseInt(u[1],10)).key,b=[],v=s.createDecipheriv(h,p,l)
b.push(v.update(d)),b.push(v.final()),n=c.concat(b)}else{var g=f.match(o)
n=new c(g[2].replace(/[\r\n]/g,""),"base64")}return{tag:f.match(i)[1],data:n}}},function(t,e,n){(function(e){var r=n(4),i=n(7).ec,o=n(29),a=n(78)
function s(t,e){if(t.cmpn(0)<=0)throw new Error("invalid sig")
if(t.cmp(e)>=e)throw new Error("invalid sig")}t.exports=function(t,n,c,f,u){var h=o(c)
if("ec"===h.type){if("ecdsa"!==f&&"ecdsa/rsa"!==f)throw new Error("wrong public key type")
return function(t,e,n){var r=a[n.data.algorithm.curve.join(".")]
if(!r)throw new Error("unknown curve "+n.data.algorithm.curve.join("."))
var o=new i(r),s=n.data.subjectPrivateKey.data
return o.verify(e,t,s)}(t,n,h)}if("dsa"===h.type){if("dsa"!==f)throw new Error("wrong public key type")
return function(t,e,n){var i=n.data.p,a=n.data.q,c=n.data.g,f=n.data.pub_key,u=o.signature.decode(t,"der"),h=u.s,l=u.r
s(h,a),s(l,a)
var d=r.mont(i),p=h.invm(a)
return 0===c.toRed(d).redPow(new r(e).mul(p).mod(a)).fromRed().mul(f.toRed(d).redPow(l.mul(p).mod(a)).fromRed()).mod(i).mod(a).cmp(l)}(t,n,h)}if("rsa"!==f&&"ecdsa/rsa"!==f)throw new Error("wrong public key type")
n=e.concat([u,n])
for(var l=h.modulus.byteLength(),d=[1],p=0;n.length+d.length+2<l;)d.push(255),p++
d.push(0)
for(var b=-1;++b<n.length;)d.push(n[b])
d=new e(d)
var v=r.mont(h.modulus)
t=(t=new r(t).toRed(v)).redPow(new r(h.publicExponent)),t=new e(t.fromRed().toArray())
var g=p<8?1:0
for(l=Math.min(t.length,d.length),t.length!==d.length&&(g=1),b=-1;++b<l;)g|=t[b]^d[b]
return 0===g}}).call(this,n(5).Buffer)},function(t,e,n){(function(e){var r=n(7),i=n(4)
t.exports=function(t){return new a(t)}
var o={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}}
function a(t){this.curveType=o[t],this.curveType||(this.curveType={name:t}),this.curve=new r.ec(this.curveType.name),this.keys=void 0}function s(t,n,r){Array.isArray(t)||(t=t.toArray())
var i=new e(t)
if(r&&i.length<r){var o=new e(r-i.length)
o.fill(0),i=e.concat([o,i])}return n?i.toString(n):i}o.p224=o.secp224r1,o.p256=o.secp256r1=o.prime256v1,o.p192=o.secp192r1=o.prime192v1,o.p384=o.secp384r1,o.p521=o.secp521r1,a.prototype.generateKeys=function(t,e){return this.keys=this.curve.genKeyPair(),this.getPublicKey(t,e)},a.prototype.computeSecret=function(t,n,r){return n=n||"utf8",e.isBuffer(t)||(t=new e(t,n)),s(this.curve.keyFromPublic(t).getPublic().mul(this.keys.getPrivate()).getX(),r,this.curveType.byteLength)},a.prototype.getPublicKey=function(t,e){var n=this.keys.getPublic("compressed"===e,!0)
return"hybrid"===e&&(n[n.length-1]%2?n[0]=7:n[0]=6),s(n,t)},a.prototype.getPrivateKey=function(t){return s(this.keys.getPrivate(),t)},a.prototype.setPublicKey=function(t,n){return n=n||"utf8",e.isBuffer(t)||(t=new e(t,n)),this.keys._importPublic(t),this},a.prototype.setPrivateKey=function(t,n){n=n||"utf8",e.isBuffer(t)||(t=new e(t,n))
var r=new i(t)
return r=r.toString(16),this.keys=this.curve.genKeyPair(),this.keys._importPrivate(r),this}}).call(this,n(5).Buffer)},function(t,e,n){e.publicEncrypt=n(171),e.privateDecrypt=n(172),e.privateEncrypt=function(t,n){return e.publicEncrypt(t,n,!0)},e.publicDecrypt=function(t,n){return e.privateDecrypt(t,n,!0)}},function(t,e,n){var r=n(29),i=n(16),o=n(18),a=n(79),s=n(80),c=n(4),f=n(81),u=n(45),h=n(2).Buffer
t.exports=function(t,e,n){var l
l=t.padding?t.padding:n?1:4
var d,p=r(t)
if(4===l)d=function(t,e){var n=t.modulus.byteLength(),r=e.length,f=o("sha1").update(h.alloc(0)).digest(),u=f.length,l=2*u
if(r>n-l-2)throw new Error("message too long")
var d=h.alloc(n-r-l-2),p=n-u-1,b=i(u),v=s(h.concat([f,d,h.alloc(1,1),e],p),a(b,p)),g=s(b,a(v,u))
return new c(h.concat([h.alloc(1),g,v],n))}(p,e)
else if(1===l)d=function(t,e,n){var r,o=e.length,a=t.modulus.byteLength()
if(o>a-11)throw new Error("message too long")
r=n?h.alloc(a-o-3,255):function(t){var e,n=h.allocUnsafe(t),r=0,o=i(2*t),a=0
for(;r<t;)a===o.length&&(o=i(2*t),a=0),(e=o[a++])&&(n[r++]=e)
return n}(a-o-3)
return new c(h.concat([h.from([0,n?1:2]),r,h.alloc(1),e],a))}(p,e,n)
else{if(3!==l)throw new Error("unknown padding")
if((d=new c(e)).cmp(p.modulus)>=0)throw new Error("data too long for modulus")}return n?u(d,p):f(d,p)}},function(t,e,n){var r=n(29),i=n(79),o=n(80),a=n(4),s=n(45),c=n(18),f=n(81),u=n(2).Buffer
t.exports=function(t,e,n){var h
h=t.padding?t.padding:n?1:4
var l,d=r(t),p=d.modulus.byteLength()
if(e.length>p||new a(e).cmp(d.modulus)>=0)throw new Error("decryption error")
l=n?f(new a(e),d):s(e,d)
var b=u.alloc(p-l.length)
if(l=u.concat([b,l],p),4===h)return function(t,e){var n=t.modulus.byteLength(),r=c("sha1").update(u.alloc(0)).digest(),a=r.length
if(0!==e[0])throw new Error("decryption error")
var s=e.slice(1,a+1),f=e.slice(a+1),h=o(s,i(f,a)),l=o(f,i(h,n-a-1))
if(function(t,e){t=u.from(t),e=u.from(e)
var n=0,r=t.length
t.length!==e.length&&(n++,r=Math.min(t.length,e.length))
var i=-1
for(;++i<r;)n+=t[i]^e[i]
return n}(r,l.slice(0,a)))throw new Error("decryption error")
var d=a
for(;0===l[d];)d++
if(1!==l[d++])throw new Error("decryption error")
return l.slice(d)}(d,l)
if(1===h)return function(t,e,n){var r=e.slice(0,2),i=2,o=0
for(;0!==e[i++];)if(i>=e.length){o++
break}var a=e.slice(2,i-1);("0002"!==r.toString("hex")&&!n||"0001"!==r.toString("hex")&&n)&&o++
a.length<8&&o++
if(o)throw new Error("decryption error")
return e.slice(i)}(0,l,n)
if(3===h)return l
throw new Error("unknown padding")}},function(t,e,n){"use strict";(function(t,r){function i(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var o=n(2),a=n(16),s=o.Buffer,c=o.kMaxLength,f=t.crypto||t.msCrypto,u=Math.pow(2,32)-1
function h(t,e){if("number"!=typeof t||t!=t)throw new TypeError("offset must be a number")
if(t>u||t<0)throw new TypeError("offset must be a uint32")
if(t>c||t>e)throw new RangeError("offset out of range")}function l(t,e,n){if("number"!=typeof t||t!=t)throw new TypeError("size must be a number")
if(t>u||t<0)throw new TypeError("size must be a uint32")
if(t+e>n||t>c)throw new RangeError("buffer too small")}function d(t,e,n,i){if(r.browser){var o=t.buffer,s=new Uint8Array(o,e,n)
return f.getRandomValues(s),i?void r.nextTick(function(){i(null,t)}):t}if(!i)return a(n).copy(t,e),t
a(n,function(n,r){if(n)return i(n)
r.copy(t,e),i(null,t)})}f&&f.getRandomValues||!r.browser?(e.randomFill=function(e,n,r,i){if(!(s.isBuffer(e)||e instanceof t.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
if("function"==typeof n)i=n,n=0,r=e.length
else if("function"==typeof r)i=r,r=e.length-n
else if("function"!=typeof i)throw new TypeError('"cb" argument must be a function')
return h(n,e.length),l(r,n,e.length),d(e,n,r,i)},e.randomFillSync=function(e,n,r){void 0===n&&(n=0)
if(!(s.isBuffer(e)||e instanceof t.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
h(n,e.length),void 0===r&&(r=e.length-n)
return l(r,n,e.length),d(e,n,r)}):(e.randomFill=i,e.randomFillSync=i)}).call(this,n(10),n(12))},function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r])
return n},i=/%[sdj%]/g
e.format=function(t){if(!g(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(s(arguments[n]))
return e.join(" ")}n=1
for(var r=arguments,o=r.length,a=String(t).replace(i,function(t){if("%%"===t)return"%"
if(n>=o)return t
switch(t){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),c=r[n];n<o;c=r[++n])b(c)||!_(c)?a+=" "+c:a+=" "+s(c)
return a},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n
if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)}
var i=!1
return function(){if(!i){if(t.throwDeprecation)throw new Error(r)
t.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}}
var o,a={}
function s(t,n){var r={seen:[],stylize:f}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),p(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=s.styles[e]
return n?"["+s.colors[n][0]+"m"+t+"["+s.colors[n][1]+"m":t}function f(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t)
return g(i)||(i=u(t,i,r)),i}var o=function(t,e){if(m(e))return t.stylize("undefined","undefined")
if(g(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(n,"string")}if(v(e))return t.stylize(""+e,"number")
if(p(e))return t.stylize(""+e,"boolean")
if(b(e))return t.stylize("null","null")}(t,n)
if(o)return o
var a=Object.keys(n),s=function(t){var e={}
return t.forEach(function(t,n){e[t]=!0}),e}(a)
if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return h(n)
if(0===a.length){if(S(n)){var c=n.name?": "+n.name:""
return t.stylize("[Function"+c+"]","special")}if(y(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp")
if(w(n))return t.stylize(Date.prototype.toString.call(n),"date")
if(x(n))return h(n)}var f,_="",k=!1,E=["{","}"];(d(n)&&(k=!0,E=["[","]"]),S(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]")
return y(n)&&(_=" "+RegExp.prototype.toString.call(n)),w(n)&&(_=" "+Date.prototype.toUTCString.call(n)),x(n)&&(_=" "+h(n)),0!==a.length||k&&0!=n.length?r<0?y(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),f=k?function(t,e,n,r,i){for(var o=[],a=0,s=e.length;a<s;++a)M(e,String(a))?o.push(l(t,e,n,r,String(a),!0)):o.push("")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(l(t,e,n,r,i,!0))}),o}(t,n,r,s,a):a.map(function(e){return l(t,n,r,s,e,k)}),t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]
return n[0]+e+" "+t.join(", ")+" "+n[1]}(f,_,E)):E[0]+_+E[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,e,n,r,i,o){var a,s,c
if((c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?s=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(s=t.stylize("[Setter]","special")),M(r,i)||(a="["+i+"]"),s||(t.seen.indexOf(c.value)<0?(s=b(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n")):s=t.stylize("[Circular]","special")),m(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function d(t){return Array.isArray(t)}function p(t){return"boolean"==typeof t}function b(t){return null===t}function v(t){return"number"==typeof t}function g(t){return"string"==typeof t}function m(t){return void 0===t}function y(t){return _(t)&&"[object RegExp]"===k(t)}function _(t){return"object"==typeof t&&null!==t}function w(t){return _(t)&&"[object Date]"===k(t)}function x(t){return _(t)&&("[object Error]"===k(t)||t instanceof Error)}function S(t){return"function"==typeof t}function k(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(m(o)&&(o=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=t.pid
a[n]=function(){var t=e.format.apply(e,arguments)
console.error("%s %d: %s",n,r,t)}}else a[n]=function(){}
return a[n]},e.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=p,e.isNull=b,e.isNullOrUndefined=function(t){return null==t},e.isNumber=v,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=y,e.isObject=_,e.isDate=w,e.isError=x,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(175)
var A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function M(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,n
console.log("%s - %s",(t=new Date,n=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":"),[t.getDate(),A[t.getMonth()],n].join(" ")),e.format.apply(e,arguments))},e.inherits=n(1),e._extend=function(t,e){if(!e||!_(e))return t
for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]]
return t}
var C="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0
function I(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value")
n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function')
if(C&&t[C]){var e
if("function"!=typeof(e=t[C]))throw new TypeError('The "util.promisify.custom" argument must be of type Function')
return Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise(function(t,r){e=t,n=r}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o])
i.push(function(t,r){t?n(t):e(r)})
try{t.apply(this,i)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),C&&Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=C,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function')
function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r])
var i=n.pop()
if("function"!=typeof i)throw new TypeError("The last argument must be of type Function")
var o=this,a=function(){return i.apply(o,arguments)}
e.apply(this,n).then(function(e){t.nextTick(a,null,e)},function(e){t.nextTick(I,e,a)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(12))},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e,n){"use strict"
var r=n(31)
n.n(r).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".payment-view[data-v-2d2f5a4e] {\n  display: flex;\n  flex-direction: column;\n}\n.payment-view .input-title[data-v-2d2f5a4e] {\n    position: relative;\n    background: steelblue;\n    color: white;\n    text-align: center;\n    padding: 10px;\n    font-size: 1.2em;\n}\n.payment-view .input-title .back-button[data-v-2d2f5a4e] {\n      position: absolute;\n      top: 5px;\n      left: 0;\n}\n.payment-view .payment-content[data-v-2d2f5a4e] {\n    margin: 10px;\n}\n.payment-view .payment-content .own-wallet[data-v-2d2f5a4e] {\n      margin-top: 20px;\n      text-align: center;\n}\n.payment-view .payment-content .own-wallet .xlm-address[data-v-2d2f5a4e] {\n        font-size: 0.9em;\n        font-weight: bold;\n}\n.payment-view .payment-content .payment-start[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-start .title-start[data-v-2d2f5a4e] {\n        font-size: 1.2em;\n        margin-bottom: 8px;\n}\n.payment-view .payment-content .payment-nano .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.payment-view .payment-content .payment-secret .sign-button-area[data-v-2d2f5a4e] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n",""])},function(t,e,n){var r=n(179)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".v-ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict;\n}\n.v-ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.v-ripple__animation--enter {\n  transition: none;\n}\n.v-ripple__animation--in {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-ripple__animation--out {\n  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.theme--light.v-btn {\n  color: rgba(0,0,0,0.87);\n}\n.theme--light.v-btn.v-btn--disabled {\n  color: rgba(0,0,0,0.26) !important;\n}\n.theme--light.v-btn.v-btn--disabled .v-icon,\n.theme--light.v-btn.v-btn--disabled .v-btn__loading {\n  color: rgba(0,0,0,0.26) !important;\n}\n.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: #f5f5f5;\n}\n.theme--dark.v-btn {\n  color: #fff;\n}\n.theme--dark.v-btn.v-btn--disabled {\n  color: rgba(255,255,255,0.3) !important;\n}\n.theme--dark.v-btn.v-btn--disabled .v-icon,\n.theme--dark.v-btn.v-btn--disabled .v-btn__loading {\n  color: rgba(255,255,255,0.3) !important;\n}\n.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\n  background-color: #212121;\n}\n/** Base Spec */\n.v-btn {\n  align-items: center;\n  border-radius: 2px;\n  display: inline-flex;\n  height: 36px;\n  flex: 0 0 auto;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n  margin: 6px 8px;\n  min-width: 88px;\n  outline: 0;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;\n  position: relative;\n  vertical-align: middle;\n  user-select: none;\n}\n/** Psuedo */\n.v-btn:before {\n  border-radius: inherit;\n  color: inherit;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  opacity: 0.12;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n/** Content */\n.v-btn {\n  padding: 0 16px;\n}\n.v-btn--active,\n.v-btn:hover,\n.v-btn:focus {\n  position: relative;\n}\n.v-btn--active:before,\n.v-btn:hover:before,\n.v-btn:focus:before {\n  background-color: currentColor;\n}\n@media (hover: none) {\n  .v-btn:hover::before {\n    background-color: transparent;\n  }\n}\n.v-btn__content {\n  align-items: center;\n  border-radius: inherit;\n  color: inherit;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  margin: 0 auto;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  white-space: nowrap;\n  width: inherit;\n}\n/** Sizes */\n.v-btn--small {\n  font-size: 13px;\n  height: 28px;\n  padding: 0 8px;\n}\n.v-btn--large {\n  font-size: 15px;\n  height: 44px;\n  padding: 0 32px;\n}\n/** Icons */\n.v-btn .v-btn__content .v-icon {\n  color: inherit;\n}\n/** Types */\n.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {\n  will-change: box-shadow;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active {\n  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);\n}\n.v-btn--icon {\n  background: transparent;\n  box-shadow: none !important;\n  border-radius: 50%;\n  justify-content: center;\n  min-width: 0;\n  width: 36px;\n}\n.v-btn--icon.v-btn--small {\n  width: 28px;\n}\n.v-btn--icon.v-btn--large {\n  width: 44px;\n}\n.v-btn--icon:before {\n  border-radius: 50%;\n}\n.v-btn--floating {\n  border-radius: 50%;\n  min-width: 0;\n  height: 56px;\n  width: 56px;\n  padding: 0;\n}\n.v-btn--floating.v-btn--fixed,\n.v-btn--floating.v-btn--absolute {\n  z-index: 4;\n}\n.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat) {\n  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);\n}\n.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat):active {\n  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12);\n}\n.v-btn--floating .v-btn__content {\n  flex: 1 1 auto;\n  margin: 0;\n  height: 100%;\n}\n.v-btn--floating:after {\n  border-radius: 50%;\n}\n.v-btn--floating .v-btn__content :not(:only-child) {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-btn--floating .v-btn__content :not(:only-child):first-child {\n  opacity: 1;\n}\n.v-btn--floating .v-btn__content :not(:only-child):last-child {\n  opacity: 0;\n  transform: rotate(-45deg);\n}\n.v-btn--floating .v-btn__content :not(:only-child):last-child,\n.v-btn--floating .v-btn__content :not(:only-child):first-child {\n  -webkit-backface-visibility: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):first-child {\n  opacity: 0;\n  transform: rotate(45deg);\n}\n.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):last-child {\n  opacity: 1;\n  transform: rotate(0);\n}\n.v-btn--floating .v-icon {\n  height: inherit;\n  width: inherit;\n}\n.v-btn--floating.v-btn--small {\n  height: 40px;\n  width: 40px;\n}\n.v-btn--floating.v-btn--small .v-icon {\n  font-size: 18px;\n}\n.v-btn--floating.v-btn--large {\n  height: 72px;\n  width: 72px;\n}\n.v-btn--floating.v-btn--large .v-icon {\n  font-size: 30px;\n}\n.v-btn--reverse .v-btn__content {\n  flex-direction: row-reverse;\n}\n.v-btn--reverse.v-btn--column .v-btn__content {\n  flex-direction: column-reverse;\n}\n.v-btn--fixed,\n.v-btn--absolute {\n  margin: 0;\n}\n.v-btn.v-btn--absolute {\n  position: absolute;\n}\n.v-btn.v-btn--fixed {\n  position: fixed;\n}\n.v-btn--top:not(.v-btn--absolute) {\n  top: 16px;\n}\n.v-btn--top.v-btn--absolute {\n  top: -28px;\n}\n.v-btn--top.v-btn--absolute.v-btn--small {\n  top: -20px;\n}\n.v-btn--top.v-btn--absolute.v-btn--large {\n  top: -36px;\n}\n.v-btn--bottom:not(.v-btn--absolute) {\n  bottom: 16px;\n}\n.v-btn--bottom.v-btn--absolute {\n  bottom: -28px;\n}\n.v-btn--bottom.v-btn--absolute.v-btn--small {\n  bottom: -20px;\n}\n.v-btn--bottom.v-btn--absolute.v-btn--large {\n  bottom: -36px;\n}\n.v-btn--left {\n  left: 16px;\n}\n.v-btn--right {\n  right: 16px;\n}\n/** Disabled */\n.v-btn.v-btn--disabled {\n  box-shadow: none !important;\n  pointer-events: none;\n}\n.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon) .v-btn__content .v-icon {\n  transition: none;\n}\n.v-btn--icon {\n  padding: 0;\n}\n/** Loader */\n.v-btn--loader {\n  pointer-events: none;\n}\n.v-btn--loader .v-btn__content {\n  opacity: 0;\n}\n.v-btn__loading {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.v-btn__loading .v-icon--left {\n  margin-right: 1rem;\n  line-height: inherit;\n}\n.v-btn__loading .v-icon--right {\n  margin-left: 1rem;\n  line-height: inherit;\n}\n/** Custom Buttons */\n.v-btn.v-btn--outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n  box-shadow: none;\n}\n.v-btn.v-btn--outline:hover {\n  box-shadow: none;\n}\n.v-btn--block {\n  display: flex;\n  flex: 1;\n  margin: 6px 0;\n  width: 100%;\n}\n.v-btn--round {\n  border-radius: 28px;\n}\n.v-btn--round:after {\n  border-radius: 28px;\n}\n/** Themes */\n.v-btn:not(.v-btn--outline).primary,\n.v-btn:not(.v-btn--outline).secondary,\n.v-btn:not(.v-btn--outline).accent,\n.v-btn:not(.v-btn--outline).success,\n.v-btn:not(.v-btn--outline).error,\n.v-btn:not(.v-btn--outline).warning,\n.v-btn:not(.v-btn--outline).info {\n  color: #fff;\n}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location
if(!e)throw new Error("fixUrls requires window.location")
if(!t||"string"!=typeof t)return t
var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/")
return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e})
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var r=n(182)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".v-progress-circular {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.v-progress-circular svg {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 0;\n}\n.v-progress-circular--indeterminate svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  transform-origin: center center;\n  transition: all 0.2s ease-in-out;\n}\n.v-progress-circular--indeterminate .v-progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 80, 200;\n  stroke-dashoffset: 0px;\n}\n.v-progress-circular__underlay {\n  stroke: rgba(0,0,0,0.1);\n  z-index: 1;\n}\n.v-progress-circular__overlay {\n  stroke: currentColor;\n  z-index: 2;\n  transition: all 0.6s ease-in-out;\n}\n.v-progress-circular__info {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n@-moz-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-webkit-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-o-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-moz-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""])},function(t,e,n){var r=n(184)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"/* Themes */\n.theme--light.v-icon {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-icon.v-icon--disabled {\n  color: rgba(0,0,0,0.38) !important;\n}\n.theme--dark.v-icon {\n  color: #fff;\n}\n.theme--dark.v-icon.v-icon--disabled {\n  color: rgba(255,255,255,0.5) !important;\n}\n.v-icon {\n  align-items: center;\n  display: inline-flex;\n  font-feature-settings: 'liga';\n  font-size: 24px;\n  justify-content: center;\n  line-height: 1;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  vertical-align: text-bottom;\n}\n.v-icon--right {\n  margin-left: 16px;\n}\n.v-icon--left {\n  margin-right: 16px;\n}\n.v-icon.v-icon.v-icon--link {\n  cursor: pointer;\n}\n.v-icon--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.v-icon--is-component {\n  height: 24px;\n}\n",""])},function(t,e,n){var r=n(186)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".theme--light.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: rgba(0,0,0,0.42);\n}\n.theme--light.v-text-field:not(.v-input--has-state) > .v-input__control > .v-input__slot:hover:before {\n  border-color: rgba(0,0,0,0.87);\n}\n.theme--light.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before {\n  border-image: repeating-linear-gradient(to right, rgba(0,0,0,0.38) 0px, rgba(0,0,0,0.38) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--light.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__prefix,\n.theme--light.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__suffix {\n  color: rgba(0,0,0,0.38);\n}\n.theme--light.v-text-field__prefix,\n.theme--light.v-text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {\n  border-radius: 2px;\n  background: #fff;\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo > .v-input__control > .v-input__slot {\n  background: rgba(0,0,0,0.16);\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot {\n  background: #424242;\n}\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot .v-label,\n.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot input {\n  color: #fff;\n}\n.theme--light.v-text-field--box > .v-input__control > .v-input__slot {\n  background: rgba(0,0,0,0.06);\n}\n.theme--light.v-text-field--box .v-text-field__prefix {\n  max-height: 32px;\n  margin-top: 22px;\n}\n.theme--light.v-text-field--box.v-input--is-dirty .v-text-field__prefix,\n.theme--light.v-text-field--box.v-input--is-focused .v-text-field__prefix,\n.theme--light.v-text-field--box.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.theme--light.v-text-field--box:not(.v-input--is-focused) > .v-input__control > .v-input__slot:hover {\n  background: rgba(0,0,0,0.12);\n}\n.theme--light.v-text-field--outline > .v-input__control > .v-input__slot {\n  border: 2px solid rgba(0,0,0,0.54);\n}\n.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {\n  border: 2px solid rgba(0,0,0,0.87);\n}\n.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {\n  border-color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field:not(.v-input--has-state) > .v-input__control > .v-input__slot:hover:before {\n  border-color: #fff;\n}\n.theme--dark.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before {\n  border-image: repeating-linear-gradient(to right, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 4px) 1 repeat;\n}\n.theme--dark.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__prefix,\n.theme--dark.v-text-field.v-input--is-disabled > .v-input__control > .v-input__slot:before .v-text-field__suffix {\n  color: rgba(255,255,255,0.5);\n}\n.theme--dark.v-text-field__prefix,\n.theme--dark.v-text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {\n  border-radius: 2px;\n  background: #424242;\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo > .v-input__control > .v-input__slot {\n  background: rgba(255,255,255,0.16);\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot {\n  background: #fff;\n}\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot .v-label,\n.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused > .v-input__control > .v-input__slot input {\n  color: rgba(0,0,0,0.87);\n}\n.theme--dark.v-text-field--box > .v-input__control > .v-input__slot {\n  background: rgba(0,0,0,0.1);\n}\n.theme--dark.v-text-field--box .v-text-field__prefix {\n  max-height: 32px;\n  margin-top: 22px;\n}\n.theme--dark.v-text-field--box.v-input--is-dirty .v-text-field__prefix,\n.theme--dark.v-text-field--box.v-input--is-focused .v-text-field__prefix,\n.theme--dark.v-text-field--box.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.theme--dark.v-text-field--box:not(.v-input--is-focused) > .v-input__control > .v-input__slot:hover {\n  background: rgba(0,0,0,0.2);\n}\n.theme--dark.v-text-field--outline > .v-input__control > .v-input__slot {\n  border: 2px solid rgba(255,255,255,0.7);\n}\n.theme--dark.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover {\n  border: 2px solid #fff;\n}\n.application--is-rtl .v-text-field .v-label {\n  transform-origin: top right;\n}\n.application--is-rtl .v-text-field .v-counter {\n  margin-left: 0;\n  margin-right: 8px;\n}\n.application--is-rtl .v-text-field--enclosed .v-input__append-outer {\n  margin-left: 0;\n  margin-right: 16px;\n}\n.application--is-rtl .v-text-field--enclosed .v-input__prepend-outer {\n  margin-left: 16px;\n  margin-right: 0;\n}\n.application--is-rtl .v-text-field--reverse input {\n  text-align: left;\n}\n.application--is-rtl .v-text-field--reverse .v-label {\n  transform-origin: top left;\n}\n.application--is-rtl .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.application--is-rtl .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.application--is-rtl .v-text-field--reverse .v-text-field__prefix {\n  text-align: right;\n  padding-left: 0;\n  padding-right: 4px;\n}\n.application--is-rtl .v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-text-field {\n  padding-top: 12px;\n  margin-top: 4px;\n}\n.v-text-field input {\n  flex: 1 1 auto;\n  line-height: 20px;\n  padding: 8px 0 8px;\n  max-width: 100%;\n  min-width: 0px;\n  width: 100%;\n}\n.v-text-field .v-input__prepend-inner,\n.v-text-field .v-input__append-inner {\n  align-self: flex-start;\n  display: inline-flex;\n  margin-top: 4px;\n  line-height: 1;\n  user-select: none;\n}\n.v-text-field .v-input__prepend-inner {\n  margin-right: auto;\n  padding-right: 4px;\n}\n.v-text-field .v-input__append-inner {\n  margin-left: auto;\n  padding-left: 4px;\n}\n.v-text-field .v-counter {\n  margin-left: 8px;\n  white-space: nowrap;\n}\n.v-text-field .v-label {\n  max-width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  top: 6px;\n  transform-origin: top left;\n  white-space: nowrap;\n  pointer-events: none;\n}\n.v-text-field .v-label--active {\n  max-width: 133%;\n  transform: translateY(-18px) scale(0.75);\n}\n.v-text-field > .v-input__control > .v-input__slot {\n  cursor: text;\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field > .v-input__control > .v-input__slot:before,\n.v-text-field > .v-input__control > .v-input__slot:after {\n  bottom: -1px;\n  content: '';\n  left: 0;\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-text-field > .v-input__control > .v-input__slot:before {\n  border-style: solid;\n  border-width: thin 0 0 0;\n}\n.v-text-field > .v-input__control > .v-input__slot:after {\n  border-color: currentColor;\n  border-style: solid;\n  border-width: thin 0 thin 0;\n  transform: scaleX(0);\n}\n.v-text-field__details {\n  display: flex;\n  flex: 1 0 auto;\n  max-width: 100%;\n  overflow: hidden;\n}\n.v-text-field__prefix,\n.v-text-field__suffix {\n  align-self: center;\n  cursor: default;\n}\n.v-text-field__prefix {\n  text-align: right;\n  padding-right: 4px;\n}\n.v-text-field__suffix {\n  padding-left: 4px;\n  white-space: nowrap;\n}\n.v-text-field--reverse .v-text-field__prefix {\n  text-align: left;\n  padding-right: 0;\n  padding-left: 4px;\n}\n.v-text-field--reverse .v-text-field__suffix {\n  padding-left: 0;\n  padding-right: 4px;\n}\n.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n}\n.v-text-field--box,\n.v-text-field--full-width,\n.v-text-field--outline {\n  position: relative;\n}\n.v-text-field--box > .v-input__control > .v-input__slot,\n.v-text-field--full-width > .v-input__control > .v-input__slot,\n.v-text-field--outline > .v-input__control > .v-input__slot {\n  align-items: stretch;\n  min-height: 56px;\n}\n.v-text-field--box input,\n.v-text-field--full-width input,\n.v-text-field--outline input {\n  margin-top: 22px;\n}\n.v-text-field--box.v-text-field--single-line input,\n.v-text-field--full-width.v-text-field--single-line input,\n.v-text-field--outline.v-text-field--single-line input {\n  margin-top: 12px;\n}\n.v-text-field--box .v-label,\n.v-text-field--full-width .v-label,\n.v-text-field--outline .v-label {\n  top: 18px;\n}\n.v-text-field--box .v-label--active,\n.v-text-field--full-width .v-label--active,\n.v-text-field--outline .v-label--active {\n  transform: translateY(-6px) scale(0.75);\n}\n.v-text-field--box > .v-input__control > .v-input__slot {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.v-text-field--box > .v-input__control > .v-input__slot:before {\n  border-style: solid;\n  border-width: thin 0 thin 0;\n}\n.v-text-field.v-text-field--enclosed {\n  margin: 0;\n  padding: 0;\n}\n.v-text-field.v-text-field--enclosed:not(.v-text-field--box) .v-progress-linear__background {\n  display: none;\n}\n.v-text-field.v-text-field--enclosed .v-input__prepend-outer,\n.v-text-field.v-text-field--enclosed .v-input__prepend-inner,\n.v-text-field.v-text-field--enclosed .v-input__append-inner,\n.v-text-field.v-text-field--enclosed .v-input__append-outer {\n  margin-top: 16px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\n.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {\n  padding: 0 12px;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details {\n  margin-bottom: 8px;\n}\n.v-text-field--reverse input {\n  text-align: right;\n}\n.v-text-field--reverse .v-label {\n  transform-origin: top right;\n}\n.v-text-field--reverse > .v-input__control > .v-input__slot,\n.v-text-field--reverse .v-text-field__slot {\n  flex-direction: row-reverse;\n}\n.v-text-field--solo > .v-input__control > .v-input__slot:before,\n.v-text-field--outline > .v-input__control > .v-input__slot:before,\n.v-text-field--full-width > .v-input__control > .v-input__slot:before,\n.v-text-field--solo > .v-input__control > .v-input__slot:after,\n.v-text-field--outline > .v-input__control > .v-input__slot:after,\n.v-text-field--full-width > .v-input__control > .v-input__slot:after {\n  display: none;\n}\n.v-text-field--outline {\n  margin-bottom: 16px;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outline > .v-input__control > .v-input__slot {\n  background: transparent !important;\n  border-radius: 4px;\n}\n.v-text-field--outline .v-text-field__prefix {\n  max-height: 32px;\n}\n.v-text-field--outline .v-input__prepend-outer,\n.v-text-field--outline .v-input__append-outer {\n  margin-top: 18px;\n}\n.v-text-field--outline.v-input--is-dirty .v-text-field__prefix,\n.v-text-field--outline.v-input--is-focused .v-text-field__prefix,\n.v-text-field--outline.v-text-field--placeholder .v-text-field__prefix {\n  margin-top: 22px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field--outline.v-input--is-focused > .v-input__control > .v-input__slot,\n.v-text-field--outline.v-input--has-state > .v-input__control > .v-input__slot {\n  border: 2px solid currentColor;\n  transition: border 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.v-text-field.v-text-field--solo .v-label {\n  top: calc(50% - 10px);\n}\n.v-text-field.v-text-field--solo .v-input__control {\n  min-height: 48px;\n  padding: 0;\n}\n.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot {\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-text-field.v-text-field--solo .v-text-field__slot {\n  align-items: center;\n}\n.v-text-field.v-text-field--solo .v-input__append-inner,\n.v-text-field.v-text-field--solo .v-input__prepend-inner {\n  align-self: center;\n  margin-top: 0;\n}\n.v-text-field.v-text-field--solo .v-input__prepend-outer,\n.v-text-field.v-text-field--solo .v-input__append-outer {\n  margin-top: 12px;\n}\n.v-text-field.v-input--is-focused > .v-input__control > .v-input__slot:after {\n  transform: scaleX(1);\n}\n.v-text-field.v-input--has-state > .v-input__control > .v-input__slot:before {\n  border-color: currentColor;\n}\n",""])},function(t,e,n){var r=n(188)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"/* Theme */\n.theme--light.v-input:not(.v-input--is-disabled) input,\n.theme--light.v-input:not(.v-input--is-disabled) textarea {\n  color: rgba(0,0,0,0.87);\n}\n.theme--light.v-input input::placeholder,\n.theme--light.v-input textarea::placeholder {\n  color: rgba(0,0,0,0.38);\n}\n.theme--light.v-input--is-disabled .v-label,\n.theme--light.v-input--is-disabled input,\n.theme--light.v-input--is-disabled textarea {\n  color: rgba(0,0,0,0.38);\n}\n.theme--dark.v-input:not(.v-input--is-disabled) input,\n.theme--dark.v-input:not(.v-input--is-disabled) textarea {\n  color: #fff;\n}\n.theme--dark.v-input input::placeholder,\n.theme--dark.v-input textarea::placeholder {\n  color: rgba(255,255,255,0.5);\n}\n.theme--dark.v-input--is-disabled .v-label,\n.theme--dark.v-input--is-disabled input,\n.theme--dark.v-input--is-disabled textarea {\n  color: rgba(255,255,255,0.5);\n}\n.v-input {\n  align-items: flex-start;\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 16px;\n  text-align: left;\n}\n.v-input .v-progress-linear {\n  top: calc(100% - 1px);\n  left: 0;\n  margin: 0;\n  position: absolute;\n}\n.v-input input {\n  max-height: 32px;\n}\n.v-input input:invalid,\n.v-input textarea:invalid {\n  box-shadow: none;\n}\n.v-input input:focus,\n.v-input textarea:focus,\n.v-input input:active,\n.v-input textarea:active {\n  outline: none;\n}\n.v-input .v-label {\n  height: 20px;\n  line-height: 20px;\n}\n.v-input__append-outer,\n.v-input__prepend-outer {\n  display: inline-flex;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  line-height: 1;\n}\n.v-input__append-outer .v-icon,\n.v-input__prepend-outer .v-icon {\n  user-select: none;\n}\n.v-input__append-outer {\n  margin-left: 9px;\n}\n.v-input__prepend-outer {\n  margin-right: 9px;\n}\n.v-input__control {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.v-input__icon {\n  align-items: center;\n  display: inline-flex;\n  height: 24px;\n  flex: 1 0 auto;\n  justify-content: center;\n  min-width: 24px;\n  width: 24px;\n}\n.v-input__icon--clear {\n  border-radius: 50%;\n}\n.v-input__slot {\n  align-items: center;\n  color: inherit;\n  display: flex;\n  margin-bottom: 8px;\n  min-height: inherit;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n}\n.v-input--is-disabled:not(.v-input--is-readonly) {\n  pointer-events: none;\n}\n.v-input--is-loading > .v-input__control > .v-input__slot:before,\n.v-input--is-loading > .v-input__control > .v-input__slot:after {\n  display: none;\n}\n.v-input--hide-details > .v-input__control > .v-input__slot {\n  margin-bottom: 0;\n}\n.v-input--has-state.error--text .v-label {\n  animation: shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n",""])},function(t,e,n){var r=n(190)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".theme--light.v-label {\n  color: rgba(0,0,0,0.54);\n}\n.theme--light.v-label--is-disabled {\n  color: rgba(0,0,0,0.38);\n}\n.theme--dark.v-label {\n  color: rgba(255,255,255,0.7);\n}\n.theme--dark.v-label--is-disabled {\n  color: rgba(255,255,255,0.5);\n}\n.v-label {\n  font-size: 16px;\n  line-height: 1;\n  min-height: 8px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n",""])},function(t,e,n){var r=n(192)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"/* Theme */\n.theme--light.v-messages {\n  color: rgba(0,0,0,0.54);\n}\n.theme--dark.v-messages {\n  color: rgba(255,255,255,0.7);\n}\n.application--is-rtl .v-messages {\n  text-align: right;\n}\n.v-messages {\n  flex: 1 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  min-width: 1px;\n  position: relative;\n}\n.v-messages__message {\n  line-height: 1;\n  word-break: break-word;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  hyphens: auto;\n}\n",""])},function(t,e,n){var r=n(194)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".v-progress-linear {\n  background: transparent;\n  margin: 1rem 0;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.v-progress-linear__bar {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  z-index: 1;\n}\n.v-progress-linear__bar__determinate {\n  height: inherit;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.v-progress-linear__bar__indeterminate .long,\n.v-progress-linear__bar__indeterminate .short {\n  height: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  will-change: left, right;\n  width: auto;\n  background-color: inherit;\n}\n.v-progress-linear__bar__indeterminate--active .long {\n  animation: indeterminate;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear__bar__indeterminate--active .short {\n  animation: indeterminate-short;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transition: 0.3s ease-in;\n}\n.v-progress-linear__content {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .long {\n  animation: query;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .short {\n  animation: query-short;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n@-moz-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-o-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-moz-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-o-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-moz-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-webkit-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-o-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-moz-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-webkit-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-o-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n",""])},function(t,e,n){var r=n(196)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"/* Theme */\n.theme--light.v-counter {\n  color: rgba(0,0,0,0.54);\n}\n.theme--dark.v-counter {\n  color: rgba(255,255,255,0.7);\n}\n.v-counter {\n  flex: 0 1 auto;\n  font-size: 12px;\n  min-height: 12px;\n  line-height: 1;\n}\n",""])},function(t,e,n){var r=n(198)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea {\n  color: #fff;\n}\n.theme--dark.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: 0;\n  margin-left: -12px;\n}\n.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 0;\n  padding-left: 12px;\n}\n.v-textarea textarea {\n  flex: 1 1 auto;\n  line-height: 18px;\n  max-width: 100%;\n  min-height: 32px;\n  outline: none;\n  padding: 7px 0 8px;\n  width: 100%;\n}\n.v-textarea .v-text-field__prefix {\n  padding-top: 4px;\n  align-self: start;\n}\n.v-textarea.v-text-field--full-width .v-text-field__slot textarea,\n.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__slot textarea {\n  margin-top: 0;\n}\n.v-textarea.v-text-field--full-width .v-text-field__details,\n.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__details {\n  bottom: 4px;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot {\n  margin-right: -12px;\n}\n.v-textarea.v-text-field--enclosed .v-text-field__slot textarea {\n  padding-right: 12px;\n}\n.v-textarea.v-text-field--box .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed .v-text-field__prefix,\n.v-textarea.v-text-field--box textarea,\n.v-textarea.v-text-field--enclosed textarea {\n  margin-top: 24px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line .v-text-field__prefix,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,\n.v-textarea.v-text-field--box.v-text-field--single-line textarea,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line textarea {\n  margin-top: 12px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line .v-label,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-label {\n  top: 18px;\n}\n.v-textarea.v-text-field--box.v-text-field--single-line.v-text-field--outline .v-input__control,\n.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-text-field--outline .v-input__control {\n  padding-top: 0;\n}\n.v-textarea.v-text-field--solo {\n  align-items: flex-start;\n}\n.v-textarea.v-text-field--solo .v-input__prepend-inner,\n.v-textarea.v-text-field--solo .v-input__prepend-outer,\n.v-textarea.v-text-field--solo .v-input__append-inner,\n.v-textarea.v-text-field--solo .v-input__append-outer {\n  align-self: flex-start;\n  margin-top: 16px;\n}\n.v-textarea--auto-grow textarea {\n  overflow: hidden;\n}\n.v-textarea--no-resize textarea {\n  resize: none;\n}\n",""])},function(t,e,n){"use strict"
var r=n(32)
n.n(r).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".main-container[data-v-e7f91608] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 10px;\n}\n.main-container .button-holder[data-v-e7f91608] {\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(t,e,n){var r=n(202)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".v-dialog {\n  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);\n  border-radius: 2px;\n  margin: 24px;\n  overflow-y: auto;\n  pointer-events: auto;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: inherit;\n}\n.v-dialog__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: 6;\n  outline: none;\n}\n.v-dialog:not(.v-dialog--fullscreen) {\n  max-height: 90%;\n}\n.v-dialog__activator {\n  cursor: pointer;\n}\n.v-dialog__activator * {\n  cursor: pointer;\n}\n.v-dialog__container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.v-dialog--animated {\n  animation-duration: 0.15s;\n  animation-name: animate-dialog;\n  animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.v-dialog--fullscreen {\n  border-radius: 0;\n  margin: 0;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.v-dialog--fullscreen > .v-card {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.v-dialog--scrollable,\n.v-dialog--scrollable > form {\n  display: flex;\n}\n.v-dialog--scrollable > .v-card,\n.v-dialog--scrollable > form > .v-card {\n  display: flex;\n  flex: 1 1 100%;\n  max-width: 100%;\n  flex-direction: column;\n}\n.v-dialog--scrollable > .v-card > .v-card__title,\n.v-dialog--scrollable > form > .v-card > .v-card__title,\n.v-dialog--scrollable > .v-card > .v-card__actions,\n.v-dialog--scrollable > form > .v-card > .v-card__actions {\n  flex: 1 0 auto;\n}\n.v-dialog--scrollable > .v-card > .v-card__text,\n.v-dialog--scrollable > form > .v-card > .v-card__text {\n  overflow-y: auto;\n  backface-visibility: hidden;\n}\n@-moz-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-o-keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animate-dialog {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.03);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n",""])},function(t,e,n){var r=n(204)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".v-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  z-index: 5;\n}\n.v-overlay--absolute {\n  position: absolute;\n}\n.v-overlay:before {\n  background-color: #212121;\n  bottom: 0;\n  content: '';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: inherit;\n  transition-delay: 150ms;\n  width: 100%;\n}\n.v-overlay--active {\n  pointer-events: auto;\n  touch-action: none;\n}\n.v-overlay--active:before {\n  opacity: 0.46;\n}\n",""])},function(t,e,n){"use strict"
var r=n(33)
n.n(r).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".main-container[data-v-0b55ff9d] {\n  width: 100%;\n  flex: 0 1 auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);\n  background: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.main-container .start-choice[data-v-0b55ff9d] {\n    font-size: 1.6em;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 50px;\n}\n.main-container .start-choice .button-holder[data-v-0b55ff9d] {\n      padding: 10px;\n      display: flex;\n      justify-content: center;\n}\n.main-container .purchase-container[data-v-0b55ff9d] {\n    background-color: #ffffff;\n    width: 600px;\n    text-align: center;\n    padding: 50px;\n}\n.main-container .button-holder[data-v-0b55ff9d] {\n    margin-top: 20px;\n    display: flex;\n    justify-content: flex-end;\n}\n",""])},function(t,e,n){"use strict"
var r=n(34)
n.n(r).a},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,".dialog-header[data-v-53219965] {\n  width: 100%;\n  display: flex;\n  position: relative;\n  background: #1976d2;\n  padding-right: 6px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n  flex: 0 0 36px;\n}\n.dialog-header button[data-v-53219965] {\n    margin: 2px;\n}\n.dialog-header .left-side-buttons[data-v-53219965] {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n}\n.dialog-header .right-side-buttons[data-v-53219965] {\n    flex: 1 1 auto;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n.dialog-header .dialog-header-text[data-v-53219965] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n.dialog-header .dialog-header-text p[data-v-53219965] {\n      color: white;\n      font-weight: 600;\n      font-size: 1.1em;\n      margin: 0;\n      user-select: none;\n}\n",""])},function(t,e,n){var r=n(210)
"string"==typeof r&&(r=[[t.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n(8)(r,i)
r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,'.v-tooltip__content {\n  background: #616161;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 12px;\n  display: inline-block;\n  padding: 5px 8px;\n  position: absolute;\n  text-transform: initial;\n  width: auto;\n  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);\n}\n.v-tooltip__content[class*="-active"] {\n  transition: 0.15s cubic-bezier(0.25, 0.8, 0.5, 1);\n  pointer-events: none;\n}\n@media only screen and (max-width: 959px) {\n  .v-tooltip .v-tooltip__content {\n    padding: 10px 16px;\n  }\n}\n',""])},function(t,e,n){"use strict"
n.r(e)
var r={}
n.r(r),n.d(r,"linear",function(){return W}),n.d(r,"easeInQuad",function(){return V}),n.d(r,"easeOutQuad",function(){return Y}),n.d(r,"easeInOutQuad",function(){return X}),n.d(r,"easeInCubic",function(){return G}),n.d(r,"easeOutCubic",function(){return J}),n.d(r,"easeInOutCubic",function(){return Z}),n.d(r,"easeInQuart",function(){return Q}),n.d(r,"easeOutQuart",function(){return tt}),n.d(r,"easeInOutQuart",function(){return et}),n.d(r,"easeInQuint",function(){return nt}),n.d(r,"easeOutQuint",function(){return rt}),n.d(r,"easeInOutQuint",function(){return it})
var i=n(0),o=n.n(i)
var a={bar:0,bottom:0,footer:0,insetFooter:0,left:0,right:0,top:0,components:{bar:{},bottom:{},footer:{},insetFooter:{},left:{},right:{},top:{}},bind:function(t,e,n){this.components[e]&&(this.components[e]=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},t,n),this.update(e))},unbind:function(t,e){null!=this.components[e][t]&&(delete this.components[e][t],this.update(e))},update:function(t){this[t]=Object.values(this.components[t]).reduce(function(t,e){return t+e},0)}},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c={thresholds:{xs:600,sm:960,md:1280,lg:1920},scrollbarWidth:16}
function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t||(t={}),o.a.extend({data:function(){return s({clientHeight:h(),clientWidth:u(),resizeTimeout:void 0},c,t)},computed:{breakpoint:function(){var t=this.clientWidth<this.thresholds.xs,e=this.clientWidth<this.thresholds.sm&&!t,n=this.clientWidth<this.thresholds.md-this.scrollbarWidth&&!(e||t),r=this.clientWidth<this.thresholds.lg-this.scrollbarWidth&&!(n||e||t),i=this.clientWidth>=this.thresholds.lg-this.scrollbarWidth,o=t,a=e,s=(t||e)&&!(n||r||i),c=!t&&(e||n||r||i),f=n,u=(t||e||n)&&!(r||i),h=!(t||e)&&(n||r||i),l=r,d=(t||e||n||r)&&!i,p=!(t||e||n)&&(r||i),b=i,v=void 0
switch(!0){case t:v="xs"
break
case e:v="sm"
break
case n:v="md"
break
case r:v="lg"
break
default:v="xl"}return{xs:t,sm:e,md:n,lg:r,xl:i,name:v,xsOnly:o,smOnly:a,smAndDown:s,smAndUp:c,mdOnly:f,mdAndDown:u,mdAndUp:h,lgOnly:l,lgAndDown:d,lgAndUp:p,xlOnly:b,width:this.clientWidth,height:this.clientHeight,thresholds:this.thresholds,scrollbarWidth:this.scrollbarWidth}}},created:function(){"undefined"!=typeof window&&window.addEventListener("resize",this.onResize,{passive:!0})},beforeDestroy:function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.setDimensions,200)},setDimensions:function(){this.clientHeight=h(),this.clientWidth=u()}}})}function u(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function h(){return"undefined"==typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},d={primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}
function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return!1!==t&&l({},d,t)}var b={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half"}
var v={md:{complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached"},mdi:{complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half"},fa:b,fa4:{complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o"},faSvg:function(t,e){var n={}
for(var r in e)n[r]={component:t,props:{icon:e[r].split(" fa-")}}
return n}("font-awesome-icon",b)}
function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"md",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Object.assign({},v[t]||v.md,e)}var m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y={minifyTheme:null,themeCache:null,customProperties:!1,cspNonce:null}
function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return m({},y,t)}var w={dataIterator:{rowsPerPageText:"Items per page:",rowsPerPageAll:"All",pageText:"{0}-{1} of {2}",noResultsText:"No matching records found",nextPage:"Next page",prevPage:"Previous page"},dataTable:{rowsPerPageText:"Rows per page:"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual"}},x=("function"==typeof Symbol&&Symbol.iterator,Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})
function S(t,e){return Array.isArray(t)?t.concat(e):(t&&e.push(t),e)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments[2]
return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var r="transition"+(n.props.group?"-group":"")
n.data=n.data||{},n.data.props={name:t,mode:n.props.mode},n.data.on=n.data.on||{},Object.isExtensible(n.data.on)||(n.data.on=x({},n.data.on))
var i=[],o=[]
i.push(function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}),n.props.leaveAbsolute&&o.push(function(t){return t.style.position="absolute"}),n.props.hideOnLeave&&o.push(function(t){return t.style.display="none"})
var a=n.data.on,s=a.beforeEnter,c=a.leave
return n.data.on.beforeEnter=function(){return S(s,i)},n.data.on.leave=S(c,o),e(r,n.data,n.children)}}}function E(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",{props:x({},r.props,{name:t}),on:e},r.children)}}}function A(t,e,n){var r=e.length-1
if(r<0)return void 0===t?n:t
for(var i=0;i<r;i++){if(null==t)return n
t=t[e[i]]}return null==t?n:void 0===t[e[r]]?n:t[e[r]]}function M(t,e,n){return e&&e.constructor===String?A(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function C(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0
var e=+window.getComputedStyle(t).getPropertyValue("z-index")
return isNaN(e)?C(t.parentNode):e}function I(t,e){for(var n={},r=0;r<e.length;r++){var i=e[r]
void 0!==t[i]&&(n[i]=t[i])}return n}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==t||""===t?void 0:isNaN(+t)?String(t):""+Number(t)+e}function T(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var O=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34}),P="$vuetify.icons."
function R(t){return t.charAt(0).toUpperCase()+t.slice(1)}function D(t,e,n){return t.$slots[e]&&t.$scopedSlots[e]&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots[e]?"normal":t.$scopedSlots[e]?"scoped":void 0}function N(t,e,n){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return
e.$_alreadyWarned.push(t)}return"[Vuetify] "+t+(e?function(t){if(t._isVue&&t.$parent){for(var e=[],n=0;t;){if(e.length>0){var r=e[e.length-1]
if(r.constructor===t.constructor){n++,t=t.$parent
continue}n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(function(t,e){return""+(0===e?"---\x3e ":" ".repeat(5+2*e))+(Array.isArray(t)?F(t[0])+"... ("+t[1]+" recursive calls)":F(t))}).join("\n")}return"\n\n(found in "+F(t)+")"}(e):"")}function L(t,e,n){var r=N(t,e,n)
null!=r&&console.warn(r)}function j(t,e,n){var r=N(t,e,n)
null!=r&&console.error(r)}function U(t,e,n,r){L("'"+t+"' is deprecated, use '"+e+"' instead",n,r)}var z=/(?:^|[-_])(\w)/g,q=function(t){return t.replace(z,function(t){return t.toUpperCase()}).replace(/[-_]/g,"")}
function F(t,e){if(t.$root===t)return"<Root>"
var n="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{},r=n.name||n._componentTag,i=n.__file
if(!r&&i){var o=i.match(/([^\/\\]+)\.vue$/)
r=o&&o[1]}return(r?"<"+q(r)+">":"<Anonymous>")+(i&&!1!==e?" at "+i:"")}var K="$vuetify.",$=Symbol("Lang fallback")
function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return{locales:Object.assign({en:w},t.locales),current:t.current||"en",t:function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
return e.startsWith(K)?t.t?t.t.apply(t,[e].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}(r))):function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n.replace(K,""),o=M(e,i,$)
return o===$&&(r?(j('Translation key "'+i+'" not found in fallback'),o=n):(L('Translation key "'+i+'" not found, falling back to default'),o=t(w,n,!0))),o}(this.locales[this.current],e).replace(/\{(\d+)\}/g,function(t,e){return String(r[+e])}):e}}}var W=function(t){return t},V=function(t){return t*t},Y=function(t){return t*(2-t)},X=function(t){return t<.5?2*t*t:(4-2*t)*t-1},G=function(t){return t*t*t},J=function(t){return--t*t*t+1},Z=function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},Q=function(t){return t*t*t*t},tt=function(t){return 1- --t*t*t*t},et=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},nt=function(t){return t*t*t*t*t},rt=function(t){return 1+--t*t*t*t*t},it=function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}
function ot(t){return null==t?t:t.constructor.name}function at(t){return"string"==typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}var st=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function ct(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=st({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},e),i=function(t){var e=at(t)
if(e)return e
throw"string"==typeof t?new Error('Container element "'+t+'" not found.'):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received "+ot(t)+" instead.")}(n.container)
if(n.appOffset){var a=i.classList.contains("v-navigation-drawer"),s=i.classList.contains("v-navigation-drawer--clipped")
n.offset+=o.a.prototype.$vuetify.application.bar,a&&!s||(n.offset+=o.a.prototype.$vuetify.application.top)}var c=performance.now(),f=function(t){if("number"==typeof t)return t
var e=at(t)
if(!e)throw"string"==typeof t?new Error('Target element "'+t+'" not found.'):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received "+ot(t)+" instead.")
for(var n=0;e;)n+=e.offsetTop,e=e.offsetParent
return n}(t)-n.offset,u=i.scrollTop
if(f===u)return Promise.resolve(f)
var h="function"==typeof n.easing?n.easing:r[n.easing]
if(!h)throw new TypeError('Easing function "'+n.easing+'" not found.')
return new Promise(function(t){return requestAnimationFrame(function e(r){var o=r-c,a=Math.abs(n.duration?Math.min(o/n.duration,1):1)
if(i.scrollTop=Math.floor(u+(f-u)*h(a)),1===a||i.clientHeight+i.scrollTop===i.scrollHeight)return t(f)
requestAnimationFrame(e)})})}var ft={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!this.installed){this.installed=!0,o.a!==t&&j("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"),function(t,e){var n=e||"^2.5.18",r=n.split(".",3).map(function(t){return t.replace(/\D/g,"")}).map(Number),i=t.version.split(".",3).map(function(t){return parseInt(t,10)})
i[0]===r[0]&&(i[1]>r[1]||i[1]===r[1]&&i[2]>=r[2])||L("Vuetify requires Vue version "+n)}(t)
var n=H(e.lang)
if(t.prototype.$vuetify=new t({mixins:[f(e.breakpoint)],data:{application:a,dark:!1,icons:g(e.iconfont,e.icons),lang:n,options:_(e.options),rtl:e.rtl,theme:p(e.theme)},methods:{goTo:ct,t:n.t.bind(n)}}),e.directives)for(var r in e.directives)t.directive(r,e.directives[r])
!function e(n){if(n){for(var r in n){var i=n[r]
i&&!e(i.$_vuetify_subcomponents)&&t.component(r,i)}return!0}return!1}(e.components)}},version:"1.5.2"},ut=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("v-dialog",{attrs:{lazy:"",scrollable:"","max-width":"600"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null
t.visible=!1}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?n("div",{staticClass:"main-container"},[n("donate-view",{attrs:{donationPublicKey:t.donationPublicKey}}),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()])}
ut._withStripped=!0
var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("div",{staticClass:"payment-view"},[n("div",{staticClass:"input-title"},["start"!==t.dialogMode?n("v-icon",{staticClass:"back-button",attrs:{dark:"",large:""},on:{click:function(e){t.dialogMode="start"}}},[t._v("chevron_left")]):t._e(),t._v("\n    "+t._s(t.headerMessage)+"\n  ")],1),t._v(" "),n("div",{staticClass:"payment-content"},["start"===t.dialogMode?n("div",{staticClass:"payment-start"},[n("div",{staticClass:"title-start"},[t._v("Choose Method")]),t._v(" "),n("div",[n("v-btn",{on:{click:function(e){return t.buttonClick("useNano")}}},[t._v("Use Ledger Nano")])],1),t._v(" "),n("div",[n("v-btn",{on:{click:function(e){return t.buttonClick("useKey")}}},[t._v("Use secret key")])],1),t._v(" "),t.donate?n("div",{staticClass:"own-wallet"},[t._v("\n        Or use your favorite wallet:"),n("br"),t._v("To: "),n("span",{staticClass:"xlm-address"},[t._v(t._s(t.destinationPublicKey))])]):t._e()]):"useNano"===t.dialogMode?n("div",{staticClass:"payment-nano"},[n("v-text-field",{attrs:{label:"Lumens",type:"number",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buttonClick("sendWithNano")}},model:{value:t.xlm,callback:function(e){t.xlm="string"==typeof e?e.trim():e},expression:"xlm"}}),t._v(" "),t.donate?t._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{spellcheck:"false",label:"Destination"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buttonClick("sendWithNano")}},model:{value:t.destinationPublicKey,callback:function(e){t.destinationPublicKey="string"==typeof e?e.trim():e},expression:"destinationPublicKey"}})],1),t._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:t.sendingPayment},on:{click:function(e){return t.buttonClick("sendWithNano")}}},[t._v("Send with Ledger Nano")]),t._v(" "),n("div",[t._v(t._s(t.status))])],1)],1):"useKey"===t.dialogMode?n("div",{staticClass:"payment-secret"},[n("v-text-field",{attrs:{label:"Amount",type:"number",autofocus:""},model:{value:t.xlm,callback:function(e){t.xlm="string"==typeof e?e.trim():e},expression:"xlm"}}),t._v(" "),t.donate?t._e():n("div",{staticClass:"own-wallet"},[n("v-text-field",{attrs:{label:"Destination"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buttonClick("sendWithSecret")}},model:{value:t.destinationPublicKey,callback:function(e){t.destinationPublicKey="string"==typeof e?e.trim():e},expression:"destinationPublicKey"}})],1),t._v(" "),n("v-text-field",{attrs:{spellcheck:"false",label:"Secret Key",counter:56,hint:"Starts with an 'S'","append-icon":t.showSecret?"visibility_off":"visibility","append-icon-cb":function(){return t.showSecret=!t.showSecret},type:t.showSecret?"text":"password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buttonClick("sendWithSecret")}},model:{value:t.secretKey,callback:function(e){t.secretKey="string"==typeof e?e.trim():e},expression:"secretKey"}}),t._v(" "),n("div",{staticClass:"sign-button-area"},[n("v-btn",{attrs:{disabled:t.disableSendLumens},on:{click:function(e){return t.buttonClick("sendWithSecret")}}},[t._v("Send Lumens")]),t._v(" "),n("div",[t._v(t._s(t.status))])],1)],1):t._e()])])}
ht._withStripped=!0
var lt=n(3),dt={props:["donationPublicKey"],data:function(){return{visible:!1,destinationPublicKey:"",donate:!1,dialogMode:"start",status:"",secretKey:"",sendingPayment:!1,xlm:10,showSecret:!1,browserSupportMessage:"",ledgerAPI:null,horizon:null}},computed:{disableSendLumens:function(){return lt.Utils.strlen(this.secretKey)<10||this.xlm<1},headerMessage:function(){return"Send a Payment"}},created:function(){this.horizon=new lt.HorizonServer("https://horizon.stellar.org",!1),lt.Utils.strOK(this.donationPublicKey)&&(this.donate=!0,this.destinationPublicKey=this.donationPublicKey),lt.LedgerAPITransport.isNodeTransport()?this.browserSupportMessage='Error: Make sure "Browser Support" is disabled':this.browserSupportMessage='Error: Make sure "Browser Support" is enabled',this.ledgerAPI=new lt.LedgerAPI},methods:{buttonClick:function(t){switch(t){case"useNano":this.dialogMode="useNano",this.status=""
break
case"useKey":this.dialogMode="useKey",this.status=""
break
case"sendWithNano":this.sendWithNano()
break
case"sendWithSecret":this.sendWithSecret()
break
default:console.log("not handled: "+t)}},sendWithNano:function(){var t=this,e=lt.StellarWallet.ledger(this.ledgerAPI,function(){t.status="Confirm transaction on Nano..."})
this.sendPayment(e)},sendWithSecret:function(){lt.Utils.strOK(this.secretKey)?this.status="Please enter your secret key":this.sendPayment(lt.StellarWallet.secret(this.secretKey))},verifyAccounts:function(t,e){var n=this
return this.horizon.server().loadAccount(e).then(function(e){return t.publicKey()}).then(function(t){return n.horizon.server().loadAccount(t)}).then(function(t){return t})},sendPayment:function(t){var e=this,n=this.destinationPublicKey
lt.Utils.strOK(n)?this.xlm<1?this.status="Lumens must be greater than 0":(this.status="Building transaction...",this.sendingPayment=!0,this.verifyAccounts(t,n).then(function(r){var i=new lt.StellarSdk.TransactionBuilder(r).addOperation(lt.StellarSdk.Operation.payment({destination:n,asset:lt.StellarSdk.Asset.native(),amount:String(e.xlm)})).build()
return t.signTransaction(i)}).then(function(t){return e.status="Submitting transaction...",e.horizon.server().submitTransaction(t)}).then(function(t){return e.status="Payment successful!",e.secretKey="",null}).catch(function(t){"connection failed"===t.message?e.status=e.browserSupportMessage:e.status="Error making payment: "+t.message}).finally(function(){e.sendingPayment=!1})):this.status="Destination is blank"}}}
n(176)
function pt(t,e,n,r,i,o,a,s){var c,f="function"==typeof t?t.options:t
if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(f.functional){f._injectStyles=c
var u=f.render
f.render=function(t,e){return c.call(e),u(t,e)}}else{var h=f.beforeCreate
f.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:f}}var bt=n(14),vt=n.n(bt)
n(178)
function gt(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
return o.a.extend({mixins:e})}n(181)
var mt=function(){return function(t,e){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0
try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(t,e)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),yt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(t){return!!t&&!!t.match(/^(#|(rgb|hsl)a?\()/)}var xt=o.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return wt(t)?e.style=yt({},e.style,{"background-color":""+t,"border-color":""+t}):t&&(e.class=yt({},e.class,_t({},t,!0))),e},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(wt(t))e.style=yt({},e.style,{color:""+t,"caret-color":""+t})
else if(t){var n=t.toString().trim().split(" ",2),r=mt(n,2),i=r[0],o=r[1]
e.class=yt({},e.class,_t({},i+"--text",!0)),o&&(e.class["text--"+o]=!0)}return e}}}),St=gt(xt).extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},radius:function(){return 20},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:this.calculatedSize+"px",width:this.calculatedSize+"px"}},svgStyles:function(){return{transform:"rotate("+Number(this.rotate)+"deg)"}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e,n){return t("circle",{class:"v-progress-circular__"+e,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":n}})},genSvg:function(t){var e=[this.indeterminate||this.genCircle(t,"underlay",0),this.genCircle(t,"overlay",this.strokeDashOffset)]
return t("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:this.viewBoxSize+" "+this.viewBoxSize+" "+2*this.viewBoxSize+" "+2*this.viewBoxSize}},e)}},render:function(t){var e=t("div",{staticClass:"v-progress-circular__info"},this.$slots.default),n=this.genSvg(t)
return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[n,e])}})
function kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Et(t,e){return function(){return L("The "+t+" component must be used inside a "+e)}}function At(t,e,n){var r=e&&n?{register:Et(e,n),unregister:Et(e,n)}:null
return o.a.extend({name:"registrable-inject",inject:kt({},t,{default:r})})}function Mt(t,e,n){return At(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?(t={},e=this.activeClass,n=this.isActive,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t):{}
var t,e,n}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}Mt("itemGroup")
var Ct={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean}
var It=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return o.a.extend({name:"positionable",props:t.length?I(Ct,t):Ct})}()
function Bt(t,e){t.style.transform=e,t.style.webkitTransform=e}function Tt(t,e){t.style.opacity=e.toString()}function Ot(t){return"TouchEvent"===t.constructor.name}var Pt={show:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(e._ripple&&e._ripple.enabled){var r=document.createElement("span"),i=document.createElement("span")
r.appendChild(i),r.className="v-ripple__container",n.class&&(r.className+=" "+n.class)
var o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.getBoundingClientRect(),i=Ot(t)?t.touches[t.touches.length-1]:t,o=i.clientX-r.left,a=i.clientY-r.top,s=0,c=.3
e._ripple&&e._ripple.circle?(c=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt(Math.pow(o-s,2)+Math.pow(a-s,2))/4):s=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2
var f=(e.clientWidth-2*s)/2+"px",u=(e.clientHeight-2*s)/2+"px"
return{radius:s,scale:c,x:n.center?f:o-s+"px",y:n.center?u:a-s+"px",centerX:f,centerY:u}}(t,e,n),a=o.radius,s=o.scale,c=o.x,f=o.y,u=o.centerX,h=o.centerY,l=2*a+"px"
i.className="v-ripple__animation",i.style.width=l,i.style.height=l,e.appendChild(r),"static"===window.getComputedStyle(e).position&&(e.style.position="relative",e.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Bt(i,"translate("+c+", "+f+") scale3d("+s+","+s+","+s+")"),Tt(i,0),i.dataset.activated=String(performance.now()),setTimeout(function(){i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Bt(i,"translate("+u+", "+h+") scale3d(1,1,1)"),Tt(i,.25)},0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation")
if(0!==e.length){var n=e[e.length-1]
if(!n.dataset.isHiding){n.dataset.isHiding="true"
var r=performance.now()-Number(n.dataset.activated),i=Math.max(250-r,0)
setTimeout(function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),Tt(n,0),setTimeout(function(){1===t.getElementsByClassName("v-ripple__animation").length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)},300)},i)}}}}}
function Rt(t){return void 0===t||!!t}function Dt(t){var e={},n=t.currentTarget
n&&!n._ripple.touched&&(Ot(t)&&(n._ripple.touched=!0),e.center=n._ripple.centered,n._ripple.class&&(e.class=n._ripple.class),Pt.show(t,n,e))}function Nt(t){var e=t.currentTarget
e&&(window.setTimeout(function(){e._ripple&&(e._ripple.touched=!1)}),Pt.hide(e))}function Lt(t,e,n){var r=Rt(e.value)
r||Pt.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=r
var i=e.value||{}
i.center&&(t._ripple.centered=!0),i.class&&(t._ripple.class=e.value.class),i.circle&&(t._ripple.circle=i.circle),r&&!n?(t.addEventListener("touchstart",Dt,{passive:!0}),t.addEventListener("touchend",Nt,{passive:!0}),t.addEventListener("touchcancel",Nt),t.addEventListener("mousedown",Dt),t.addEventListener("mouseup",Nt),t.addEventListener("mouseleave",Nt),t.addEventListener("dragstart",Nt,{passive:!0})):!r&&n&&jt(t)}function jt(t){t.removeEventListener("mousedown",Dt),t.removeEventListener("touchstart",Nt),t.removeEventListener("touchend",Nt),t.removeEventListener("touchcancel",Nt),t.removeEventListener("mouseup",Nt),t.removeEventListener("mouseleave",Nt),t.removeEventListener("dragstart",Nt)}var Ut={bind:function(t,e,n){Lt(t,e,!1),n.context&&n.context.$nextTick(function(){if("inline"===window.getComputedStyle(t).display){var e=n.fnOptions?[n.fnOptions,n.context]:[n.componentInstance]
L.apply(void 0,["v-ripple can only be used on block-level elements"].concat(e))}})},unbind:function(t){delete t._ripple,jt(t)},update:function(t,e){e.value!==e.oldValue&&Lt(t,e,Rt(e.oldValue))}},zt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
var qt=o.a.extend({name:"routable",directives:{Ripple:Ut},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:[Boolean,Object],tag:String,target:String},computed:{computedRipple:function(){return!(!this.ripple||this.disabled)&&this.ripple}},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(t){var e,n,r,i=this.exact,o=void 0,a=(e={attrs:{disabled:this.disabled},class:t,props:{},directives:[{name:"ripple",value:this.computedRipple}]},n=this.to?"nativeOn":"on",r=zt({},this.$listeners,{click:this.click}),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e)
if(void 0===this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var s=this.activeClass,c=this.exactActiveClass||s
this.proxyClass&&(s+=" "+this.proxyClass,c+=" "+this.proxyClass),o=this.nuxt?"nuxt-link":"router-link",Object.assign(a.props,{to:this.to,exact:i,activeClass:s,exactActiveClass:c,append:this.append,replace:this.replace})}else"a"===(o=(this.href?"a":this.tag)||"a")&&this.href&&(a.attrs.href=this.href)
return this.target&&(a.attrs.target=this.target),{tag:o,data:a}}}}),Ft=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function Kt(t){var e=Ft({},t.props,t.injections),n=$t.options.computed.isDark.call(e)
return $t.options.computed.themeClasses.call({isDark:n})}var $t=o.a.extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.$vuetify.dark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),Ht=$t
function Wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vt(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input"
return o.a.extend({name:"toggleable",model:{prop:e,event:n},props:Wt({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Wt(t,e,function(t){this.isActive=!!t}),Wt(t,"isActive",function(t){!!t!==this[e]&&this.$emit(n,t)}),t)})}var Yt=Vt(),Xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function Jt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Zt,Qt=gt(xt,qt,It,Ht,Mt("btnToggle"),Vt("inputValue")).extend().extend({name:"v-btn",props:{activeClass:{type:String,default:"v-btn--active"},block:Boolean,depressed:Boolean,fab:Boolean,flat:Boolean,icon:Boolean,large:Boolean,loading:Boolean,outline:Boolean,ripple:{type:[Boolean,Object],default:null},round:Boolean,small:Boolean,tag:{type:String,default:"button"},type:{type:String,default:"button"},value:null},computed:{classes:function(){var t
return Gt((Jt(t={"v-btn":!0},this.activeClass,this.isActive),Jt(t,"v-btn--absolute",this.absolute),Jt(t,"v-btn--block",this.block),Jt(t,"v-btn--bottom",this.bottom),Jt(t,"v-btn--disabled",this.disabled),Jt(t,"v-btn--flat",this.flat),Jt(t,"v-btn--floating",this.fab),Jt(t,"v-btn--fixed",this.fixed),Jt(t,"v-btn--icon",this.icon),Jt(t,"v-btn--large",this.large),Jt(t,"v-btn--left",this.left),Jt(t,"v-btn--loader",this.loading),Jt(t,"v-btn--outline",this.outline),Jt(t,"v-btn--depressed",this.depressed&&!this.flat||this.outline),Jt(t,"v-btn--right",this.right),Jt(t,"v-btn--round",this.round),Jt(t,"v-btn--router",this.to),Jt(t,"v-btn--small",this.small),Jt(t,"v-btn--top",this.top),t),this.themeClasses)},computedRipple:function(){var t=!this.icon&&!this.fab||{circle:!0}
return!this.disabled&&(null!==this.ripple?this.ripple:t)}},watch:{$route:"onRouteChange"},methods:{click:function(t){!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("div",{class:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loading"},this.$slots.loader||[this.$createElement(St,{props:{indeterminate:!0,size:23,width:2}})])},onRouteChange:function(){var t=this
if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass
this.$nextTick(function(){M(t.$refs.link,e)&&t.toggle()})}}},render:function(t){var e=this.outline||this.flat||this.disabled?this.setTextColor:this.setBackgroundColor,n=this.generateRouteLink(this.classes),r=n.tag,i=n.data,o=[this.genContent(),this.loading&&this.genLoader()]
return"button"===r&&(i.attrs.type=this.type),i.attrs.value=["string","number"].includes(Xt(this.value))?this.value:JSON.stringify(this.value),this.btnToggle&&(i.ref="link"),t(r,e(this.color,i),o)}}),te=(n(183),o.a.extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}})),ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
!function(t){t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(Zt||(Zt={}))
var ne=gt(xt,te,Ht).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},methods:{getIcon:function(){var t=""
return this.$slots.default&&(t=this.$slots.default[0].text.trim()),function(t,e){return e.startsWith(P)?M(t,e,e):e}(this,t)},getSize:function(){var t,e={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},n=(t=e,Object.keys(t)).find(function(t){return e[t]})
return n&&Zt[n]||B(this.size)},getDefaultData:function(){return{staticClass:"v-icon",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},attrs:ee({"aria-hidden":!0},this.$attrs),on:this.$listeners}},applyColors:function(t){t.class=ee({},t.class,this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],r=this.getDefaultData(),i="material-icons",o=t.indexOf("-"),a=o<=-1
a?n.push(t):function(t){return["fas","far","fal","fab"].some(function(e){return t.includes(e)})}(i=t.slice(0,o))&&(i=""),r.class[i]=!0,r.class[t]=!a
var s=this.getSize()
return s&&(r.style={fontSize:s}),this.applyColors(r),e("i",r,n)},renderSvgIcon:function(t,e){var n=this.getDefaultData()
n.class["v-icon--is-component"]=!0
var r=this.getSize()
r&&(n.style={fontSize:r,height:r}),this.applyColors(n)
var i=t.component
return n.props=t.props,n.nativeOn=n.on,e(i,n)}},render:function(t){var e=this.getIcon()
return"string"==typeof e?this.renderFontIcon(e,t):this.renderSvgIcon(e,t)}}),re=o.a.extend({name:"v-icon",$_wrapperFor:ne,functional:!0,render:function(t,e){var n=e.data,r=e.children,i=""
return n.domProps&&(i=n.domProps.textContent||n.domProps.innerHTML||i,delete n.domProps.textContent,delete n.domProps.innerHTML),t(ne,n,i?[i]:r)}}),ie=(n(185),n(187),re),oe=(n(189),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),ae=gt(Ht).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:[Boolean,String],default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var n=e.children,r=e.listeners,i=e.props,o={staticClass:"v-label",class:oe({"v-label--active":i.value,"v-label--is-disabled":i.disabled},Kt(e)),attrs:{for:i.for,"aria-hidden":!i.for},on:r,style:{left:B(i.left),right:B(i.right),position:i.absolute?"absolute":"relative"}}
return t("label",xt.options.methods.setTextColor(i.focused&&i.color,o),n)}}),se=(n(191),gt(xt,Ht).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e,domProps:{innerHTML:t}})}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe=gt(xt,At("form")).extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return this.hasSuccess||this.shouldValidate&&this.hasError},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.color:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages.length>0?this.internalSuccessMessages:this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){(function t(e,n){if(e===n)return!0
if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime())return!1
if(e!==Object(e)||n!==Object(n))return!1
var r=Object.keys(e)
return r.length===Object.keys(n).length&&r.every(function(r){return t(e[r],n[r])})})(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.disabled||this.readonly||(this.hasFocused=!0,this.validateOnBlur&&this.validate())},isResetting:function(){var t=this
setTimeout(function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()},0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1],n=[]
e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0)
for(var r=0;r<this.rules.length;r++){var i=this.rules[r],o="function"==typeof i?i(e):i
"string"==typeof o?n.push(o):"boolean"!=typeof o&&j("Rules should return a string or boolean, received '"+(void 0===o?"undefined":ce(o))+"' instead",this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),ue=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},he=gt(xt,Ht,fe).extend({name:"v-input",props:{appendIcon:String,appendIconCb:Function,backgroundColor:{type:String,default:""},height:[Number,String],hideDetails:Boolean,hint:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,prependIconCb:Function,value:{required:!1}},data:function(){return{attrsInput:{},lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return{}},classesInput:function(){return ue({},this.classes,{"v-input--has-state":this.hasState,"v-input--hide-details":this.hideDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.disabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&void 0!==this.loading,"v-input--is-readonly":this.readonly},this.themeClasses)},directivesInput:function(){return[]},hasHint:function(){return!this.hasMessages&&this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return Boolean(this.$slots.label||this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isDisabled:function(){return Boolean(this.disabled||this.readonly)},isLabelActive:function(){return this.isDirty}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var n=this,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this[t+"Icon"],o="click:"+T(t)
e=e||this[t+"IconCb"],r&&t&&e&&U(":"+t+"-icon-cb","@"+o,this)
var a={props:{color:this.validationState,dark:this.dark,disabled:this.disabled,light:this.light},on:this.$listeners[o]||e?{click:function(t){t.preventDefault(),t.stopPropagation(),n.$emit(o,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0}
return this.$createElement("div",{staticClass:"v-input__icon v-input__icon--"+T(t),key:""+t+i},[this.$createElement(ie,a,i)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:B(this.height)},directives:this.directivesInput,on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(ae,{props:{color:this.validationState,dark:this.dark,focused:this.hasState,for:this.$attrs.id,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){if(this.hideDetails)return null
var t=this.hasHint?[this.hint]:this.validations
return this.$createElement(se,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.hasMessages||this.hasHint?t:[]}})},genSlot:function(t,e,n){if(!n.length)return null
var r=t+"-"+e
return this.$createElement("div",{staticClass:"v-input__"+r,ref:r},n)},genPrependSlot:function(){var t=[]
return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot:function(){var t=[]
return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",attrs:this.attrsInput,class:this.classesInput}),this.genContent())}}),le=(n(195),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),de=gt(Ht).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var n=e.props,r=parseInt(n.max,10),i=parseInt(n.value,10),o=r?i+" / "+r:n.value
return t("div",{staticClass:"v-counter",class:le({"error--text":r&&i>r},Kt(e))},o)}}),pe=/[-!$%^&*()_+|~=`{}[\]:";'<>?,.\/\\ ]/,be=function(t){return!!t&&pe.test(t)},ve={"#":{test:function(t){return/[0-9]/.test(t)}},A:{test:function(t){return/[A-Z]/i.test(t)},convert:function(t){return t.toUpperCase()}},a:{test:function(t){return/[a-z]/i.test(t)},convert:function(t){return t.toLowerCase()}},N:{test:function(t){return/[0-9A-Z]/i.test(t)},convert:function(t){return t.toUpperCase()}},n:{test:function(t){return/[0-9a-z]/i.test(t)},convert:function(t){return t.toLowerCase()}},X:{test:be}},ge=function(t){return ve.hasOwnProperty(t)},me=function(t,e){return ve[t].convert?ve[t].convert(e):e},ye=function(t,e){return!(null==e||!ge(t))&&ve[t].test(e)},_e=function(t){return t?String(t).replace(new RegExp(pe,"g"),""):t},we={name:"maskable",props:{dontFillMaskBlanks:Boolean,mask:{type:[Object,String],default:null},returnMaskedValue:Boolean,value:{required:!1}},data:function(t){return{selection:0,lazySelection:0,lazyValue:t.value,preDefined:{"credit-card":"#### - #### - #### - ####",date:"##/##/####","date-with-time":"##/##/#### ##:##",phone:"(###) ### - ####",social:"###-##-####",time:"##:##","time-with-seconds":"##:##:##"}}},computed:{masked:function(){return(this.preDefined[this.mask]||this.mask||"").split("")}},watch:{mask:function(){var t=this
if(this.$refs.input){for(var e=this.$refs.input.value,n=this.maskText(_e(this.lazyValue)),r=0,i=this.selection,o=0;o<i;o++)be(e[o])||r++
if(i=0,n)for(var a=0;a<n.length&&(be(n[a])||r--,i++,!(r<=0));a++);this.$nextTick(function(){t.$refs.input.value=n,t.setCaretPosition(i)})}}},beforeMount:function(){if(this.mask&&null!=this.value&&this.returnMaskedValue){var t=this.maskText(this.value)
t!==this.value&&this.$emit("input",t)}},methods:{setCaretPosition:function(t){var e=this
this.selection=t,window.setTimeout(function(){e.$refs.input&&e.$refs.input.setSelectionRange(e.selection,e.selection)},0)},updateRange:function(){if(this.$refs.input){var t=this.maskText(this.lazyValue),e=0
if(this.$refs.input.value=t,t)for(var n=0;n<t.length&&!(this.lazySelection<=0);n++)be(t[n])||this.lazySelection--,e++
this.setCaretPosition(e),this.$emit("input",this.returnMaskedValue?this.$refs.input.value:this.lazyValue)}},maskText:function(t){return this.mask?function(t,e,n){if(null==t)return""
if(t=String(t),!e.length||!t.length)return t
Array.isArray(e)||(e=e.split(""))
for(var r=0,i=0,o="";i<e.length;){var a=e[i],s=t[r]
if(ge(a)||s!==a)if(ge(a)||n){if(!ye(a,s))return o
o+=me(a,s),r++}else o+=a
else o+=a,r++
i++}return o}(t,this.masked,this.dontFillMaskBlanks):t},unmaskText:function(t){return this.mask&&!this.returnMaskedValue?_e(t):t},setSelectionRange:function(){this.$nextTick(this.updateRange)},resetSelections:function(t){if(t.selectionEnd){this.selection=t.selectionEnd,this.lazySelection=0
for(var e=0;e<this.selection;e++)be(t.value[e])||this.lazySelection++}}}}
n(193)
function xe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Se=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height"
return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=xe({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},e,t.style[e])},enter:function(n){var r=n._initialStyle
n.style.setProperty("transition","none","important"),n.style.visibility="hidden"
var i=n["offset"+R(e)]+"px"
n.style.visibility=r.visibility,n.style.overflow="hidden",n.style[e]=0,n.offsetHeight,n.style.transition=r.transition,t&&n._parent&&n._parent.classList.add(t),requestAnimationFrame(function(){n.style[e]=i})},afterEnter:r,enterCancelled:r,leave:function(t){t._initialStyle=xe({overflow:t.style.overflow},e,t.style[e]),t.style.overflow="hidden",t.style[e]=t["offset"+R(e)]+"px",t.offsetHeight,requestAnimationFrame(function(){return t.style[e]=0})},afterLeave:n,leaveCancelled:n}
function n(e){t&&e._parent&&e._parent.classList.remove(t),r(e)}function r(t){t.style.overflow=t._initialStyle.overflow,t.style[e]=t._initialStyle[e],delete t._initialStyle}},ke=(k("bottom-sheet-transition"),k("carousel-transition"),k("carousel-reverse-transition"),k("tab-transition"),k("tab-reverse-transition"),k("menu-transition"),k("fab-transition","center center","out-in"),k("dialog-transition"),k("dialog-bottom-transition"),k("fade-transition")),Ee=(k("scale-transition"),k("scroll-x-transition"),k("scroll-x-reverse-transition"),k("scroll-y-transition"),k("scroll-y-reverse-transition"),k("slide-x-transition"))
k("slide-x-reverse-transition"),k("slide-y-transition"),k("slide-y-reverse-transition"),E("expand-transition",Se()),E("expand-x-transition",Se("",!0)),E("row-expand-transition",Se("datatable__expand-col--expanded"))
var Ae=gt(xt).extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:7},indeterminate:Boolean,query:Boolean,value:{type:[Number,String],default:0}},computed:{backgroundStyle:function(){var t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)
return{height:this.active?B(this.height):0,opacity:t,width:this.normalizedBufer+"%"}},effectiveWidth:function(){return this.normalizedBufer?100*+this.normalizedValue/+this.normalizedBufer:0},normalizedBufer:function(){return this.bufferValue<0?0:this.bufferValue>100?100:parseFloat(this.bufferValue)},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},styles:function(){var t={}
return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBufer)||(t.width=this.normalizedBufer+"%"),t}},methods:{genDeterminate:function(t){return t("div",this.setBackgroundColor(this.color,{ref:"front",staticClass:"v-progress-linear__bar__determinate",style:{width:this.effectiveWidth+"%"}}))},genBar:function(t,e){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__bar__indeterminate",class:(n={},r=e,i=!0,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)}))
var n,r,i},genIndeterminate:function(t){return t("div",{ref:"front",staticClass:"v-progress-linear__bar__indeterminate",class:{"v-progress-linear__bar__indeterminate--active":this.active}},[this.genBar(t,"long"),this.genBar(t,"short")])}},render:function(t){var e=t(ke,this.indeterminate?[this.genIndeterminate(t)]:[]),n=t(Ee,this.indeterminate?[]:[this.genDeterminate(t)]),r=t("div",{staticClass:"v-progress-linear__bar",style:this.styles},[e,n]),i=t("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle})),o=this.$slots.default&&t("div",{staticClass:"v-progress-linear__content"},this.$slots.default)
return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBufer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:{"v-progress-linear--query":this.query},style:{height:B(this.height)},on:this.$listeners},[i,r,o])}}),Me=Ae,Ce=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(Me,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:2,indeterminate:!0}})}}}),Ie=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Be=["color","file","time","date","datetime-local","week","month"],Te=he.extend({name:"v-text-field",directives:{Ripple:Ut},mixins:[we,Ce],inheritAttrs:!1,props:{appendOuterIcon:String,appendOuterIconCb:Function,autofocus:Boolean,box:Boolean,browserAutocomplete:String,clearable:Boolean,clearIcon:{type:String,default:"$vuetify.icons.clear"},clearIconCb:Function,color:{type:String,default:"primary"},counter:[Boolean,Number,String],flat:Boolean,fullWidth:Boolean,label:String,outline:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,prependInnerIconCb:Function,reverse:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,initialValue:null,internalChange:!1,isClearing:!1}},computed:{classes:function(){return{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--box":this.box,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outline":this.hasOutline,"v-text-field--placeholder":this.placeholder}},counterValue:function(){return(this.internalValue||"").toString().length},directivesInput:function(){return[]},hasOutline:function(){return this.outline||this.textarea},internalValue:{get:function(){return this.lazyValue},set:function(t){this.mask?(this.lazyValue=this.unmaskText(this.maskText(this.unmaskText(t))),this.setSelectionRange()):(this.lazyValue=t,this.$emit("input",this.lazyValue))}},isDirty:function(){return null!=this.lazyValue&&this.lazyValue.toString().length>0||this.badInput},isEnclosed:function(){return this.box||this.isSolo||this.hasOutline||this.fullWidth},isLabelActive:function(){return this.isDirty||Be.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0
return!this.$vuetify.rtl!=!this.reverse?{left:"auto",right:t}:{left:t,right:"auto"}},showLabel:function(){return this.hasLabel&&(!this.isSingle||!this.isLabelActive&&!this.placeholder&&!this.prefixLabel)},labelValue:function(){return!this.isSingle&&Boolean(this.isFocused||this.isLabelActive||this.placeholder||this.prefixLabel)},prefixWidth:function(){if(this.prefix||this.$refs.prefix)return this.$refs.prefix.offsetWidth},prefixLabel:function(){return this.prefix&&!this.value}},watch:{isFocused:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},value:function(t){var e=this
if(this.mask&&!this.internalChange){var n=this.maskText(this.unmaskText(t))
this.lazyValue=this.unmaskText(n),String(t)!==this.lazyValue&&this.$nextTick(function(){e.$refs.input.value=n,e.$emit("input",e.lazyValue)})}else this.lazyValue=t}},mounted:function(){this.autofocus&&this.onFocus()},methods:{focus:function(){this.onFocus()},blur:function(){this.$refs.input?this.$refs.input.blur():this.onBlur()},clearableCallback:function(){var t=this
this.internalValue=null,this.$nextTick(function(){return t.$refs.input.focus()})},genAppendSlot:function(){var t=[]
return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[]
return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[]
return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=he.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot()
return e&&t.children.unshift(e),t},genClearIcon:function(){if(!this.clearable)return null
var t=!!this.isDirty&&"clear"
return this.clearIconCb&&U(":clear-icon-cb","@click:clear",this),this.genSlot("append","inner",[this.genIcon(t,!this.$listeners["click:clear"]&&this.clearIconCb||this.clearableCallback,!1)])},genCounter:function(){if(!1===this.counter||null==this.counter)return null
var t=!0===this.counter?this.$attrs.maxlength:this.counter
return this.$createElement(de,{props:{dark:this.dark,light:this.light,max:t,value:this.counterValue}})},genDefaultSlot:function(){return[this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genLabel:function(){if(!this.showLabel)return null
var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.disabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}}
return this.$attrs.id&&(t.props.for=this.$attrs.id),this.$createElement(ae,t,this.$slots.label||this.label)},genInput:function(){var t=Object.assign({},this.$listeners)
delete t.change
var e={style:{},domProps:{value:this.maskText(this.lazyValue)},attrs:Ie({"aria-label":(!this.$attrs||!this.$attrs.id)&&this.label},this.$attrs,{autofocus:this.autofocus,disabled:this.disabled,readonly:this.readonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input"}
return this.placeholder&&(e.attrs.placeholder=this.placeholder),this.mask&&(e.attrs.maxlength=this.masked.length),this.browserAutocomplete&&(e.attrs.autocomplete=this.browserAutocomplete),this.$createElement("input",e)},genMessages:function(){return this.hideDetails?null:this.$createElement("div",{staticClass:"v-text-field__details"},[he.options.methods.genMessages.call(this),this.genCounter()])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__"+t,ref:t},this[t])},onBlur:function(t){this.isFocused=!1,this.internalChange=!1,this.$emit("blur",t)},onClick:function(){this.isFocused||this.disabled||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input)return document.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,this.$emit("focus",t)))},onInput:function(t){this.internalChange=!0,this.mask&&this.resetSelections(t.target),this.internalValue=t.target.value,this.badInput=t.target.validity&&t.target.validity.badInput},onKeyDown:function(t){this.internalChange=!0,t.keyCode===O.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),he.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),he.options.methods.onMouseUp.call(this,t)}}}),Oe=(n(197),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),Pe={name:"v-textarea",extends:Te,props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Oe({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},Te.options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||Te.options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t,e,n=this
setTimeout(function(){n.autoGrow&&n.calculateInputHeight()},0),this.autoGrow&&this.noResize&&null!=(e=N('"no-resize" is now implied when using "auto-grow", and can be removed',this,t))&&console.info(e)},methods:{calculateInputHeight:function(){var t=this.$refs.input
if(t){t.style.height=0
var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight)
t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=Te.options.methods.genInput.call(this)
return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){Te.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}
var Re={functional:!0,$_wrapperFor:Te,props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var n=e.props,r=e.data,i=e.slots,o=e.parent
!function(t){if(t.model&&t.on&&t.on.input)if(Array.isArray(t.on.input)){var e=t.on.input.indexOf(t.model.callback)
e>-1&&t.on.input.splice(e,1)}else delete t.on.input}(r)
var a=function(t,e){var n=[]
for(var r in t)t.hasOwnProperty(r)&&n.push(e("template",{slot:r},t[r]))
return n}(i(),t)
return n.textarea&&U("<v-text-field textarea>","<v-textarea outline>",Re,o),n.multiLine&&U("<v-text-field multi-line>","<v-textarea>",Re,o),n.textarea||n.multiLine?(r.attrs.outline=n.textarea,t(Pe,r,a)):t(Te,r,a)}},De=pt(dt,ht,[],!1,null,"2d2f5a4e",null)
vt()(De,{VBtn:Qt,VIcon:re,VTextField:Re}),De.options.__file="src/vue/PaymentView.vue"
var Ne=De.exports,Le={props:["ping","donationPublicKey"],components:{"donate-view":Ne},watch:{ping:function(){this.visible=!0}},data:function(){return{visible:!1}}}
n(199),n(201)
function je(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}var Ue=gt().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?function t(e){for(var n=[],r=0;r<e.length;r++){var i=e[r]
i.isActive&&i.isDependent?n.push(i):n.push.apply(n,je(t(i.$children)))}return n}(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),n=0;n<e.length;n++)t.push.apply(t,je(e[n].getClickableDependentElements()))
return t},getClickableDependentElements:function(){var t=[this.$el]
return this.$refs.content&&t.push(this.$refs.content),t.push.apply(t,je(this.getOpenDependentElements())),t}}}),ze=o.a.extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(t){return this.hasContent?t:void 0}}}),qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
var Fe={name:"detachable",mixins:[ze],props:{attach:{type:null,default:!1,validator:function(t){var e=void 0===t?"undefined":qe(t)
return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this
this.$nextTick(function(){t.activatorNode&&(Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode]).forEach(function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)})})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){if(this.$refs.content)try{this.$refs.content.parentNode.removeChild(this.$refs.content)}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t,e,n,r=this.$vnode&&this.$vnode.context.$options._scopeId
return r&&(n="",(e=r)in(t={})?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;(t=!1===this.attach?document.querySelector("[data-app]"):"string"==typeof this.attach?document.querySelector(this.attach):this.attach)?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):L("Unable to locate target "+(this.attach||"[data-app]"),this)}}}},Ke=(n(203),o.a.extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:void 0,overlayTransitionDuration:650}},watch:{hideOverlay:function(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this
if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active")
this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll()
var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]")
return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=String(t.activeZIndex-1)))}),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
if(!this.overlay)return e&&this.showScroll()
this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=window.setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,e&&t.showScroll()}catch(t){console.log(t)}clearTimeout(t.overlayTimeout),t.overlayTimeout=void 0},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return
var e=[O.up,O.pageup],n=[O.down,O.pagedown]
if(e.includes(t.keyCode))t.deltaY=-1
else{if(!n.includes(t.keyCode))return
t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1
var e=window.getComputedStyle(t)
return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),n=t.deltaY
if("keydown"===t.type&&e[0]===document.body){var r=this.$refs.dialog,i=window.getSelection().anchorNode
return!(r&&this.hasScrollbar(r)&&this.isInside(i,r))||this.shouldScroll(r,n)}for(var o=0;o<e.length;o++){var a=e[o]
if(a===document)return!0
if(a===document.documentElement)return!0
if(a===this.$refs.content)return!0
if(this.hasScrollbar(a))return this.shouldScroll(a,n)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath()
for(var e=[],n=t.target;n;){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e
n=n.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(window.addEventListener("wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})),$e=o.a.extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){this.originalValue=t,this.isActive=!1}}})
var He=o.a.extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"==typeof window)return 0
var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:C(t)
return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,C(e)],r=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}(document.getElementsByClassName(this.stackClass))),i=0;i<r.length;i++)t.includes(r[i])||n.push(C(r[i]))
return Math.max.apply(Math,n)}}})
function We(){return!1}function Ve(t,e,n){n.args=n.args||{}
var r=n.args.closeConditional||We
if(t&&!1!==r(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var i=(n.args.include||function(){return[]})()
i.push(e),!function(t,e){var n=t.clientX,r=t.clientY,i=!0,o=!1,a=void 0
try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var f=s.value
if(Ye(f,n,r))return!0}}catch(t){o=!0,a=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw a}}return!1}(t,i)&&setTimeout(function(){r(t)&&n.value&&n.value(t)},0)}}function Ye(t,e,n){var r=t.getBoundingClientRect()
return e>=r.left&&e<=r.right&&n>=r.top&&n<=r.bottom}var Xe={inserted:function(t,e){var n=function(n){return Ve(n,t,e)};(document.querySelector("[data-app]")||document.body).addEventListener("click",n,!0),t._clickOutside=n},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body
e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}},Ge=gt(Ht).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:Ht.options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}}),Je=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}
function Ze(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Qe={name:"v-dialog",directives:{ClickOutside:Xe},mixins:[Ue,Fe,Ke,$e,He,Yt],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t
return Ze(t={},("v-dialog "+this.contentClass).trim(),!0),Ze(t,"v-dialog--active",this.isActive),Ze(t,"v-dialog--persistent",this.persistent),Ze(t,"v-dialog--fullscreen",this.fullscreen),Ze(t,"v-dialog--scrollable",this.scrollable),Ze(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this
this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===D(this,"activator",!0)&&j("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this
this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(this.$refs.content.contains(t.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):C(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):Ke.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(t){this.$emit("keydown",t)},genActivator:function(){var t=this
if(!this.hasActivator)return null
var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.disabled||(t.isActive=!t.isActive)}}
if("scoped"===D(this,"activator")){var n=this.$scopedSlots.activator({on:e})
return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:e},this.$slots.activator)}},render:function(t){var e=this,n=[],r={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}}
this.fullscreen||(r.style={maxWidth:"none"===this.maxWidth?void 0:B(this.maxWidth),width:"auto"===this.width?void 0:B(this.width)}),n.push(this.genActivator())
var i=t("div",r,this.showLazyContent(this.$slots.default))
return this.transition&&(i=t("transition",{props:{name:this.transition,origin:this.origin}},[i])),n.push(t("div",{class:this.contentClasses,attrs:Je({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(Ge,{props:{root:!0,light:this.light,dark:this.dark}},[i])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}},tn=pt(Le,ut,[],!1,null,"e7f91608",null)
vt()(tn,{VBtn:Qt,VDialog:Qe}),tn.options.__file="src/vue/PaymentDialog.vue"
var en=tn.exports,nn=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("v-dialog",{attrs:{lazy:"",persistent:"",scrollable:"","max-width":"600"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null
t.visible=!1}},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"main-container"},[t.showPurchase?t._e():n("div",{staticClass:"start-choice"},[n("div",[t._v("What would you like to use to purchase LMB tokens")]),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{small:""},on:{click:function(e){return t.buttonClick("bitcoin")}}},[t._v("Bitcoin")]),t._v(" "),n("v-btn",{attrs:{small:""},on:{click:function(e){return t.buttonClick("ethereum")}}},[t._v("Ethereum")])],1)]),t._v(" "),t.showPurchase?n("div",{staticClass:"purchase-container"},[n("v-btn",{attrs:{small:""},on:{click:function(e){return t.buttonClick("back")}}},[t._v("Back")]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.sendMessage)}}),t._v(" "),n("div",[t._v("Address = "+t._s(t.address))]),t._v(" "),n("p",[n("strong",[t._v("Rinkeby testnet. Do not send real coins!")])]),t._v(" "),n("p",[t._v("Exchange rate: 1 ETH = 1 LMB token")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/stellar/go/pull/81 ",target:"_blank "}},[t._v("Instructions")])]),t._v(" "),n("div",{staticClass:"progress "},[n("v-progress-linear",{model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress "}})],1),t._v(" "),n("div",[t._v("Status = "+t._s(t.status))]),t._v(" "),n("div",[t._v("Public Key = "+t._s(t.publicKey))]),t._v(" "),n("div",[t._v("Secret Key = "+t._s(t.secretKey))])],1):t._e(),t._v(" "),n("div",{staticClass:"button-holder"},[n("v-btn",{attrs:{round:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("\n        Close\n      ")])],1)])])}
nn._withStripped=!0
var rn={props:["ping","params"],data:function(){return{showPurchase:!1,purchaseCoin:"",progress:0,session:null,status:"",address:"loading...",publicKey:"",secretKey:"",visible:!1}},watch:{ping:function(){this.visible=!0}},computed:{sendMessage:function(){return"btc"===this.purchaseCoin?'<div class="lead">Send Bitcoin <strong>testnet</strong> BTC to the following address:</div>':'<div class="lead">Send Ropsten <strong>testnet</strong> ETH to the following address:</div>'}},methods:{initBifrost:function(){this.session=new lt.Bifrost.Session(this.params)},startBitcoin:function(){var t=this
this.showPurchase=!0,this.purchaseCoin="btc",this.initBifrost(),this.session.startBitcoin(this.onEvent).then(function(e){t.setStatus("Waiting for a transaction...",10),t.address=e.address,t.publicKey=e.keypair.publicKey(),t.secretKey=e.keypair.secret()}).catch(function(t){console.log(JSON.stringify(t)),console.log(t)})},startEthereum:function(){var t=this
this.showPurchase=!0,this.purchaseCoin="eth",this.initBifrost(),this.session.startEthereum(this.onEvent).then(function(e){t.setStatus("Waiting for a transaction...",10),t.address=e.address,t.publicKey=e.keypair.publicKey(),t.secretKey=e.keypair.secret()}).catch(function(t){console.log(JSON.stringify(t)),console.log(t)})},setStatus:function(t,e){this.progress=e,this.status=t},onEvent:function(t,e){switch(t){case lt.Bifrost.TransactionReceivedEvent:this.setStatus("Transaction received, creating account...",20)
break
case lt.Bifrost.AccountCreatedEvent:this.setStatus("Account created, creating trust lines...",40)
break
case lt.Bifrost.AccountConfiguredEvent:this.setStatus("Account configured, waiting for tokens...",60)
break
case lt.Bifrost.ExchangedTimelockedEvent:this.setStatus("Congrats! TOKE purchased but will be locked.</pre>\nUnlock transaction: <pre>"+e.transaction+"</pre>",100)
break
case lt.Bifrost.ExchangedEvent:this.setStatus("Congrats! TOKE purchased.",100),this.$emit("new-account",this.secretKey)
break
case lt.Bifrost.ErrorEvent:this.setStatus("Error!",0),console.log(JSON.stringify(e))
break
default:this.setStatus("default swtich reached!",0)}},buttonClick:function(t){switch(t){case"test":this.test()
break
case"bitcoin":this.startBitcoin()
break
case"ethereum":this.startEthereum()
break
case"back":this.showPurchase=!1
break
default:console.log("no button with that name")}}}},on=(n(205),pt(rn,nn,[],!1,null,"0b55ff9d",null))
vt()(on,{VBtn:Qt,VDialog:Qe,VProgressLinear:Ae}),on.options.__file="src/vue/BuyTokenDialog.vue"
var an=on.exports,sn=function(){var t=this,e=t.$createElement,n=t._self._c||e
return n("div",{staticClass:"dialog-header"},[n("div",{staticClass:"dialog-header-text"},[n("p",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"left-side-buttons"},[t.showBack?n("v-btn",{staticClass:"dialog-back-button",attrs:{slot:"activator",icon:"",dark:""},on:{click:function(e){return t.buttonClick("back")}},slot:"activator"},[n("v-icon",[t._v("chevron_left")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"right-side-buttons"},[n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[t.showPrint?n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(e){return t.buttonClick("print")}},slot:"activator"},[n("v-icon",[t._v("print")])],1):t._e(),t._v(" "),n("span",[t._v("Print")])],1),t._v(" "),n("v-tooltip",{attrs:{"open-delay":"200",bottom:""}},[n("v-btn",{attrs:{slot:"activator",small:"",icon:"",dark:""},on:{click:function(e){return t.buttonClick("close")}},slot:"activator"},[n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.tooltip)}})],1)],1)])}
sn._withStripped=!0
var cn={props:["title","help","showPrint","showBack"],computed:{tooltip:function(){return this.help?"Help":"Close"},icon:function(){return this.help?"help_outline":"close"}},methods:{buttonClick:function(t){this.$emit(t)}}},fn=(n(207),n(209),o.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this
this.clearDelay()
var r=parseInt(this[t+"Delay"],10)
this[t+"Timeout"]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},r)}}})),un="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hn={activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0},hasWindow:!1},ln=o.a.extend({name:"menuable",mixins:[It,He],props:{activator:{default:null,validator:function(t){return["string","object"].includes(void 0===t?"undefined":un(t))}},allowOverflow:Boolean,inputActivator:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,dimensions:Object.assign({},hn),isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=(this.isAttached?t.offsetLeft:t.left)||0,r=Math.max(t.width,e.width),i=0
if(i+=this.left?n-(r-t.width):n,this.offsetX){var o=isNaN(this.maxWidth)?t.width:Math.min(t.width,this.maxWidth)
i+=this.left?-o:t.width}return this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),i},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,n=0
return this.top&&(n+=t.height-e.height),this.isAttached?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||this.activator||this.inputActivator},isAttached:function(){return!1!==this.attach}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.checkForWindow()},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return(this.isAttached?this.computedLeft:this.calcXOverflow(this.computedLeft,t))+"px"},calcTop:function(){return(this.isAttached?this.computedTop:this.calcYOverflow(this.computedTop))+"px"},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12
return(t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.pageYOffset+e,r=this.dimensions.activator,i=this.dimensions.content.height,o=n<t+i
return o&&this.offsetOverflow&&r.top>i?t=this.pageYOffset+(r.top-i):o&&!this.allowOverflow?t=n-i-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForWindow:function(){this.hasWindow||(this.hasWindow="undefined"!=typeof window)},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.getOffsetTop())},deactivate:function(){},getActivator:function(t){if(this.inputActivator)return this.$el.querySelector(".v-input__slot")
if(this.activator)return"string"==typeof this.activator?document.querySelector(this.activator):this.activator
if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator
if(t)return this.activatedBy=t.currentTarget||t.target,this.activatedBy
if(this.activatedBy)return this.activatedBy
if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,n=e&&e.elm
if(n)return n}j("No activator found")},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect()
return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null
var e=this.getRoundedBoundedClientRect(t)
if(this.isAttached){var n=window.getComputedStyle(t)
e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek:function(t){var e=this
requestAnimationFrame(function(){var n=e.$refs.content
if(!n||e.isShown(n))return t()
n.style.display="inline-block",t(),n.style.display="none"})},startTransition:function(){var t=this
return new Promise(function(e){return requestAnimationFrame(function(){t.isContentActive=t.hasJustFocused=t.isActive,e()})})},isShown:function(t){return"none"!==t.style.display},updateDimensions:function(){var t=this
this.checkForWindow(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth
var e={}
if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition()
else{var n=this.getActivator()
e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,this.isAttached?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek(function(){e.content=t.measure(t.$refs.content),t.dimensions=e})}}})
function dn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var pn={name:"v-tooltip",mixins:[xt,fn,Ue,Fe,ln,Yt],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,r=!(this.bottom||this.left||this.top||this.right),i=this.isAttached?e.offsetLeft:e.left,o=0
return this.top||this.bottom||r?o=i+e.width/2-n.width/2:(this.left||this.right)&&(o=i+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),this.calcXOverflow(o,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,r=this.isAttached?e.offsetTop:e.top,i=0
return this.top||this.bottom?i=r+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=r+e.height/2-n.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),this.calcYOverflow(i+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:B(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this
this.$nextTick(function(){t.value&&t.callActivate()})},mounted:function(){"v-slot"===D(this,"activator",!0)&&j("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,e=this.disabled?{}:{mouseenter:function(e){t.getActivator(e),t.runDelay("open")},mouseleave:function(e){t.getActivator(e),t.runDelay("close")}}
if("scoped"===D(this,"activator")){var n=this.$scopedSlots.activator({on:e})
return this.activatorNode=n,n}return this.$createElement("span",{on:e,ref:"activator"},this.$slots.activator)}},render:function(t){var e,n=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},dn(e,this.contentClass,!0),dn(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default))
return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[n]),this.genActivator()])}},bn=pt(cn,sn,[],!1,null,"53219965",null)
vt()(bn,{VBtn:Qt,VIcon:re,VTooltip:pn}),bn.options.__file="src/vue/DialogTitleBar.vue"
var vn=bn.exports
n.d(e,"PaymentDialog",function(){return en}),n.d(e,"PaymentView",function(){return Ne}),n.d(e,"DialogTitleBar",function(){return vn}),n.d(e,"BuyTokenDialog",function(){return an}),o.a.use(ft)}])})
