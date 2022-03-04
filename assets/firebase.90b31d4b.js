/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Ma(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Va(){return $e().indexOf("Electron/")>=0}function Fa(){const e=$e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ua(){return $e().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="FirebaseError";class qe extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=$a,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?qa(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qe(i,a,s)}}function qa(e,t){return e.replace(ja,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const ja=/\{\$([^}]+)}/g;function Bn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Ri(r)&&Ri(o)){if(!Bn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ri(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new La;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ga(t))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vt){return this.instances.has(t)}getOptions(t=vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ka(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=vt){return this.component?this.component.multipleInstances?t:vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ka(e){return e===vt?void 0:e}function Ga(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ba(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const za={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Wa=k.INFO,Qa={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Xa=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Qa[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _i{constructor(t){this.name=t,this._logLevel=Wa,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?za[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ja(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ja(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kn="@firebase/app",Oi="0.7.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new _i("@firebase/app"),Za="@firebase/app-compat",tc="@firebase/analytics-compat",ec="@firebase/analytics",nc="@firebase/app-check-compat",sc="@firebase/app-check",ic="@firebase/auth",rc="@firebase/auth-compat",oc="@firebase/database",ac="@firebase/database-compat",cc="@firebase/functions",hc="@firebase/functions-compat",uc="@firebase/installations",lc="@firebase/installations-compat",dc="@firebase/messaging",fc="@firebase/messaging-compat",pc="@firebase/performance",gc="@firebase/performance-compat",mc="@firebase/remote-config",yc="@firebase/remote-config-compat",vc="@firebase/storage",wc="@firebase/storage-compat",Ec="@firebase/firestore",Tc="@firebase/firestore-compat",Ic="firebase",Sc="9.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="[DEFAULT]",Cc={[Kn]:"fire-core",[Za]:"fire-core-compat",[ec]:"fire-analytics",[tc]:"fire-analytics-compat",[sc]:"fire-app-check",[nc]:"fire-app-check-compat",[ic]:"fire-auth",[rc]:"fire-auth-compat",[oc]:"fire-rtdb",[ac]:"fire-rtdb-compat",[cc]:"fire-fn",[hc]:"fire-fn-compat",[uc]:"fire-iid",[lc]:"fire-iid-compat",[dc]:"fire-fcm",[fc]:"fire-fcm-compat",[pc]:"fire-perf",[gc]:"fire-perf-compat",[mc]:"fire-rc",[yc]:"fire-rc-compat",[vc]:"fire-gcs",[wc]:"fire-gcs-compat",[Ec]:"fire-fst",[Tc]:"fire-fst-compat","fire-js":"fire-js",[Ic]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Map,Hn=new Map;function Ac(e,t){try{e.container.addComponent(t)}catch(n){Gn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zn(e){const t=e.name;if(Hn.has(t))return Gn.debug(`There were multiple attempts to register component ${t}.`),!1;Hn.set(t,e);for(const n of Be.values())Ac(n,e);return!0}function Nc(e,t){return e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ke=new Di("app","Firebase",kc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=Sc;function Rc(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Li,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});const i=Be.get(s);if(i){if(Bn(e,i.options)&&Bn(n,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const r=new Ha(s);for(const a of Hn.values())r.addComponent(a);const o=new bc(e,n,r);return Be.set(s,o),o}function _c(e=Li){const t=Be.get(e);if(!t)throw Ke.create("no-app",{appName:e});return t}function Lt(e,t,n){var s;let i=(s=Cc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}zn(new je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e){zn(new je("platform-logger",t=>new Ya(t),"PRIVATE")),Lt(Kn,Oi,e),Lt(Kn,Oi,"esm2017"),Lt("fire-js","")}Oc("");var Lc="firebase",xc="9.6.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(Lc,xc,"app");var Mc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Wn=Wn||{},T=Mc||self;function Ge(){}function Qn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ie(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Pc(e){return Object.prototype.hasOwnProperty.call(e,Xn)&&e[Xn]||(e[Xn]=++Vc)}var Xn="closure_uid_"+(1e9*Math.random()>>>0),Vc=0;function Fc(e,t,n){return e.call.apply(e.bind,arguments)}function Uc(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=Fc:$=Uc,$.apply(null,arguments)}function He(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function q(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function lt(){this.s=this.s,this.o=this.o}var $c=0,qc={};lt.prototype.s=!1;lt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),$c!=0)){var e=Pc(this);delete qc[e]}};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Mi=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function jc(e){t:{var t=Lh;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Pi(e){return Array.prototype.concat.apply([],arguments)}function Yn(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ze(e){return/^[\s\xa0]*$/.test(e)}var Vi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function Jn(e,t){return e<t?-1:e>t?1:0}var Q;t:{var Fi=T.navigator;if(Fi){var Ui=Fi.userAgent;if(Ui){Q=Ui;break t}}Q=""}function Zn(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function $i(e){const t={};for(const n in e)t[n]=e[n];return t}var qi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ji(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<qi.length;r++)n=qi[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ts(e){return ts[" "](e),e}ts[" "]=Ge;function Bc(e){var t=Hc;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Kc=W(Q,"Opera"),xt=W(Q,"Trident")||W(Q,"MSIE"),Bi=W(Q,"Edge"),es=Bi||xt,Ki=W(Q,"Gecko")&&!(W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge"))&&!(W(Q,"Trident")||W(Q,"MSIE"))&&!W(Q,"Edge"),Gc=W(Q.toLowerCase(),"webkit")&&!W(Q,"Edge");function Gi(){var e=T.document;return e?e.documentMode:void 0}var We;t:{var ns="",ss=function(){var e=Q;if(Ki)return/rv:([^\);]+)(\)|;)/.exec(e);if(Bi)return/Edge\/([\d\.]+)/.exec(e);if(xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Gc)return/WebKit\/(\S+)/.exec(e);if(Kc)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ss&&(ns=ss?ss[1]:""),xt){var is=Gi();if(is!=null&&is>parseFloat(ns)){We=String(is);break t}}We=ns}var Hc={};function zc(){return Bc(function(){let e=0;const t=Vi(String(We)).split("."),n=Vi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Jn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Jn(i[2].length==0,r[2].length==0)||Jn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var rs;if(T.document&&xt){var Hi=Gi();rs=Hi||parseInt(We,10)||void 0}else rs=void 0;var Wc=rs,Qc=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{T.addEventListener("test",Ge,t),T.removeEventListener("test",Ge,t)}catch{}return e}();function H(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};function re(e,t){if(H.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ki){t:{try{ts(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Xc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&re.Z.h.call(this)}}q(re,H);var Xc={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),Yc=0;function Jc(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++Yc,this.ca=this.fa=!1}function Qe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Xe(e){this.src=e,this.g={},this.h=0}Xe.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=as(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Jc(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function os(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=xi(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Qe(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function as(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),hs={};function zi(e,t,n,s,i){if(s&&s.once)return Qi(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)zi(e,t[r],n,s,i);return null}return n=fs(n),e&&e[oe]?e.N(t,n,ie(s)?!!s.capture:!!s,i):Wi(e,t,n,!1,s,i)}function Wi(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ie(i)?!!i.capture:!!i,a=ls(e);if(a||(e[cs]=a=new Xe(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Zc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Qc||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Yi(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zc(){function e(n){return t.call(e.src,e.listener,n)}var t=th;return e}function Qi(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Qi(e,t[r],n,s,i);return null}return n=fs(n),e&&e[oe]?e.O(t,n,ie(s)?!!s.capture:!!s,i):Wi(e,t,n,!0,s,i)}function Xi(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Xi(e,t[r],n,s,i);else s=ie(s)?!!s.capture:!!s,n=fs(n),e&&e[oe]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=as(r,n,s,i),-1<n&&(Qe(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=as(t,n,s,i)),(n=-1<e?t[e]:null)&&us(n))}function us(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[oe])os(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Yi(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ls(t))?(os(n,e),n.h==0&&(n.src=null,t[cs]=null)):Qe(e)}}}function Yi(e){return e in hs?hs[e]:hs[e]="on"+e}function th(e,t){if(e.ca)e=!0;else{t=new re(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&us(e),e=n.call(s,t)}return e}function ls(e){return e=e[cs],e instanceof Xe?e:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function fs(e){return typeof e=="function"?e:(e[ds]||(e[ds]=function(t){return e.handleEvent(t)}),e[ds])}function V(){lt.call(this),this.i=new Xe(this),this.P=this,this.I=null}q(V,lt);V.prototype[oe]=!0;V.prototype.removeEventListener=function(e,t,n,s){Xi(this,e,t,n,s)};function j(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new H(t,e);else if(t instanceof H)t.target=t.target||e;else{var i=t;t=new H(s,e),ji(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ye(o,s,!0,t)&&i}if(o=t.g=e,i=Ye(o,s,!0,t)&&i,i=Ye(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ye(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Qe(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ye(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&os(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var ps=T.JSON.stringify;function eh(){var e=Zi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class nh{constructor(){this.h=this.g=null}add(t,n){const s=Ji.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ji=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new sh,e=>e.reset());class sh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ih(e){T.setTimeout(()=>{throw e},0)}function gs(e,t){ms||rh(),ys||(ms(),ys=!0),Zi.add(e,t)}var ms;function rh(){var e=T.Promise.resolve(void 0);ms=function(){e.then(oh)}}var ys=!1,Zi=new nh;function oh(){for(var e;e=eh();){try{e.h.call(e.g)}catch(n){ih(n)}var t=Ji;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ys=!1}function Je(e,t){V.call(this),this.h=e||1,this.g=t||T,this.j=$(this.kb,this),this.l=Date.now()}q(Je,V);g=Je.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),j(this,"tick"),this.da&&(vs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){Je.Z.M.call(this),vs(this),delete this.g};function ws(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(e,t||0)}function tr(e){e.g=ws(()=>{e.g=null,e.i&&(e.i=!1,tr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class ah extends lt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:tr(this)}M(){super.M(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){lt.call(this),this.h=e,this.g={}}q(ae,lt);var er=[];function nr(e,t,n,s){Array.isArray(n)||(n&&(er[0]=n.toString()),n=er);for(var i=0;i<n.length;i++){var r=zi(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function sr(e){Zn(e.g,function(t,n){this.g.hasOwnProperty(n)&&us(t)},e),e.g={}}ae.prototype.M=function(){ae.Z.M.call(this),sr(this)};ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ze(){this.g=!0}Ze.prototype.Aa=function(){this.g=!1};function ch(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function hh(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+lh(e,n)+(s?" "+s:"")})}function uh(e,t){e.info(function(){return"TIMEOUT: "+t})}Ze.prototype.info=function(){};function lh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ps(n)}catch{return t}}var wt={},ir=null;function tn(){return ir=ir||new V}wt.Ma="serverreachability";function rr(e){H.call(this,wt.Ma,e)}q(rr,H);function ce(e){const t=tn();j(t,new rr(t,e))}wt.STAT_EVENT="statevent";function or(e,t){H.call(this,wt.STAT_EVENT,e),this.stat=t}q(or,H);function X(e){const t=tn();j(t,new or(t,e))}wt.Na="timingevent";function ar(e,t){H.call(this,wt.Na,e),this.size=t}q(ar,H);function he(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){e()},t)}var en={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},cr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Es(){}Es.prototype.h=null;function hr(e){return e.h||(e.h=e.i())}function ur(){}var ue={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ts(){H.call(this,"d")}q(Ts,H);function Is(){H.call(this,"c")}q(Is,H);var Ss;function nn(){}q(nn,Es);nn.prototype.g=function(){return new XMLHttpRequest};nn.prototype.i=function(){return{}};Ss=new nn;function le(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ae(this),this.P=dh,e=es?125:void 0,this.W=new Je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new lr}function lr(){this.i=null,this.g="",this.h=!1}var dh=45e3,Cs={},sn={};g=le.prototype;g.setTimeout=function(e){this.P=e};function As(e,t,n){e.K=1,e.v=hn(ct(t)),e.s=n,e.U=!0,dr(e,null)}function dr(e,t){e.F=Date.now(),de(e),e.A=ct(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Tr(n.h,"t",s),e.C=0,n=e.l.H,e.h=new lr,e.g=Kr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ah($(e.Ia,e,e.g),e.O)),nr(e.V,e.g,"readystatechange",e.gb),t=e.H?$i(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ce(1),ch(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ht(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ht(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||es||this.g&&(this.h.h||this.g.ga()||Lr(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?ce(3):ce(2)),rn(this);var n=this.g.ba();this.N=n;e:if(fr(this)){var s=Lr(this.g);e="";var i=s.length,r=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Et(this),fe(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,hh(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var h=a;break e}}h=null}if(n=h)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ns(this,n);else{this.i=!1,this.o=3,X(12),Et(this),fe(this);break t}}this.U?(pr(this,u,o),es&&this.i&&u==3&&(nr(this.V,this.W,"tick",this.fb),this.W.start())):(Mt(this.j,this.m,o,null),Ns(this,o)),u==4&&Et(this),this.i&&!this.I&&(u==4?$r(this.l,this):(this.i=!1,de(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,X(12)):(this.o=0,X(13)),Et(this),fe(this)}}}catch{}finally{}};function fr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function pr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=fh(e,n),i==sn){t==4&&(e.o=4,X(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Cs){e.o=4,X(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,i,null),Ns(e,i);fr(e)&&i!=sn&&i!=Cs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,X(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vs(t),t.L=!0,X(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),fe(e))}g.fb=function(){if(this.g){var e=ht(this.g),t=this.g.ga();this.C<t.length&&(rn(this),pr(this,e,t),this.i&&e!=4&&de(this))}};function fh(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?sn:(n=Number(t.substring(n,s)),isNaN(n)?Cs:(s+=1,s+n>t.length?sn:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,Et(this)};function de(e){e.Y=Date.now()+e.P,gr(e,e.P)}function gr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=he($(e.eb,e),t)}function rn(e){e.B&&(T.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(uh(this.j,this.A),this.K!=2&&(ce(3),X(17)),Et(this),this.o=2,fe(this)):gr(this,this.Y-e)};function fe(e){e.l.G==0||e.I||$r(e.l,e)}function Et(e){rn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,vs(e.W),sr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ns(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ds(n.i,e))){if(n.I=e.N,!e.J&&Ds(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)gn(n),fn(n);else break t;Ps(n),X(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=he($(n.ab,n),6e3));if(1>=Cr(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else St(n,11)}else if((e.J||n.g==e)&&gn(n),!ze(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.U=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.J=h[1],n.la=h[2];const u=h[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=h[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const f=h[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.i;!r.g&&(W(v,"spdy")||W(v,"quic")||W(v,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Rs(r,r.h),r.h=null))}if(s.D){const N=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.sa=N,_(s.F,s.D,N))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=Br(s,s.H?s.la:null,s.W),o.J){Ar(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(rn(a),de(a)),s.g=o}else Fr(s);0<n.l.length&&pn(n)}else h[0]!="stop"&&h[0]!="close"||St(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?St(n,7):xs(n):h[0]!="noop"&&n.j&&n.j.wa(h),n.A=0)}}ce(4)}catch{}}function ph(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Qn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function ks(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Qn(e)||typeof e=="string")Mi(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Qn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=ph(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Pt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Pt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Pt.prototype;g.R=function(){bs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return bs(this),this.g.concat()};function bs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Tt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Tt(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Tt(this.h,e)?this.h[e]:t};g.set=function(e,t){Tt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Tt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var mr=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function gh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function It(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof It){this.g=t!==void 0?t:e.g,on(this,e.j),this.s=e.s,an(this,e.i),cn(this,e.m),this.l=e.l,t=e.h;var n=new me;n.i=t.i,t.g&&(n.g=new Pt(t.g),n.h=t.h),yr(this,n),this.o=e.o}else e&&(n=String(e).match(mr))?(this.g=!!t,on(this,n[1]||"",!0),this.s=pe(n[2]||""),an(this,n[3]||"",!0),cn(this,n[4]),this.l=pe(n[5]||"",!0),yr(this,n[6]||"",!0),this.o=pe(n[7]||"")):(this.g=!!t,this.h=new me(null,this.g))}It.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ge(t,vr,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ge(t,vr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ge(n,n.charAt(0)=="/"?Eh:wh,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ge(n,Ih)),e.join("")};function ct(e){return new It(e)}function on(e,t,n){e.j=n?pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function an(e,t,n){e.i=n?pe(t,!0):t}function cn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yr(e,t,n){t instanceof me?(e.h=t,Sh(e.h,e.g)):(n||(t=ge(t,Th)),e.h=new me(t,e.g))}function _(e,t,n){e.h.set(t,n)}function hn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function mh(e){return e instanceof It?ct(e):new It(e,void 0)}function yh(e,t,n,s){var i=new It(null,void 0);return e&&on(i,e),t&&an(i,t),n&&cn(i,n),s&&(i.l=s),i}function pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ge(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,vh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function vh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var vr=/[#\/\?@]/g,wh=/[#\?:]/g,Eh=/[#\?]/g,Th=/[#\?@]/g,Ih=/#/g;function me(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function dt(e){e.g||(e.g=new Pt,e.h=0,e.i&&gh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=me.prototype;g.add=function(e,t){dt(this),this.i=null,e=Vt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function wr(e,t){dt(e),t=Vt(e,t),Tt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Tt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&bs(e)))}function Er(e,t){return dt(e),t=Vt(e,t),Tt(e.g.h,t)}g.forEach=function(e,t){dt(this),this.g.forEach(function(n,s){Mi(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){dt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){dt(this);var t=[];if(typeof e=="string")Er(this,e)&&(t=Pi(t,this.g.get(Vt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Pi(t,e[n])}return t};g.set=function(e,t){return dt(this),this.i=null,e=Vt(this,e),Er(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Tr(e,t,n){wr(e,t),0<n.length&&(e.i=null,e.g.set(Vt(e,t),Yn(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Sh(e,t){t&&!e.j&&(dt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(wr(this,s),Tr(this,i,n))},e)),e.j=t}var Ch=class{constructor(e,t){this.h=e,this.g=t}};function Ir(e){this.l=e||Ah,T.PerformanceNavigationTiming?(e=T.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(T.g&&T.g.Ea&&T.g.Ea()&&T.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ah=10;function Sr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Cr(e){return e.h?1:e.g?e.g.size:0}function Ds(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Rs(e,t){e.g?e.g.add(t):e.h=t}function Ar(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ir.prototype.cancel=function(){if(this.i=Nr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Nr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Yn(e.i)}function _s(){}_s.prototype.stringify=function(e){return T.JSON.stringify(e,void 0)};_s.prototype.parse=function(e){return T.JSON.parse(e,void 0)};function Nh(){this.g=new _s}function kh(e,t,n){const s=n||"";try{ks(e,function(i,r){let o=i;ie(i)&&(o=ps(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function bh(e,t){const n=new Ze;if(T.Image){const s=new Image;s.onload=He(un,n,s,"TestLoadImage: loaded",!0,t),s.onerror=He(un,n,s,"TestLoadImage: error",!1,t),s.onabort=He(un,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=He(un,n,s,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function un(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function ye(e){this.l=e.$b||null,this.j=e.ib||!1}q(ye,Es);ye.prototype.g=function(){return new ln(this.l,this.j)};ye.prototype.i=function(e){return function(){return e}}({});function ln(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Os,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}q(ln,V);var Os=0;g=ln.prototype;g.open=function(e,t){if(this.readyState!=Os)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,we(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||T).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ve(this)),this.readyState=Os};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,we(this)),this.g&&(this.readyState=3,we(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof T.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kr(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function kr(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ve(this):we(this),this.readyState==3&&kr(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,ve(this))};g.Ta=function(e){this.g&&(this.response=e,ve(this))};g.ha=function(){this.g&&ve(this)};function ve(e){e.readyState=4,e.l=null,e.j=null,e.A=null,we(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function we(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Dh=T.JSON.parse;function x(e){V.call(this),this.headers=new Pt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=br,this.K=this.L=!1}q(x,V);var br="",Rh=/^https?$/i,_h=["POST","PUT"];g=x.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ss.g(),this.C=this.u?hr(this.u):hr(Ss),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Dr(this,r);return}e=n||"";const i=new Pt(this.headers);s&&ks(s,function(r,o){i.set(o,r)}),s=jc(i.T()),n=T.FormData&&e instanceof T.FormData,!(0<=xi(_h,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Or(this),0<this.B&&((this.K=Oh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=ws(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Dr(this,r)}};function Oh(e){return xt&&zc()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Lh(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Wn!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function Dr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Rr(e),dn(e)}function Rr(e){e.D||(e.D=!0,j(e,"complete"),j(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),dn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dn(this,!0)),x.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?_r(this):this.cb())};g.cb=function(){_r(this)};function _r(e){if(e.h&&typeof Wn!="undefined"&&(!e.C[1]||ht(e)!=4||e.ba()!=2)){if(e.v&&ht(e)==4)ws(e.Fa,0,e);else if(j(e,"readystatechange"),ht(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(mr)[1]||null;if(!i&&T.self&&T.self.location){var r=T.self.location.protocol;i=r.substr(0,r.length-1)}s=!Rh.test(i?i.toLowerCase():"")}n=s}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var o=2<ht(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Rr(e)}}finally{dn(e)}}}}function dn(e,t){if(e.g){Or(e);const n=e.g,s=e.C[0]?Ge:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=s}catch{}}}function Or(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(T.clearTimeout(e.A),e.A=null)}function ht(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Dh(t)}};function Lr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case br:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function xh(e){let t="";return Zn(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ls(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=xh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function Ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xr(e){this.za=0,this.l=[],this.h=new Ze,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ee("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ee("baseRetryDelayMs",5e3,e),this.$a=Ee("retryDelaySeedMs",1e4,e),this.Ya=Ee("forwardChannelMaxRetries",2,e),this.ra=Ee("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Ir(e&&e.concurrentRequestLimit),this.Ca=new Nh,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=xr.prototype;g.ma=8;g.G=1;function xs(e){if(Mr(e),e.G==3){var t=e.V++,n=ct(e.F);_(n,"SID",e.J),_(n,"RID",t),_(n,"TYPE","terminate"),Te(e,n),t=new le(e,e.h,t,void 0),t.K=2,t.v=hn(ct(n)),n=!1,T.navigator&&T.navigator.sendBeacon&&(n=T.navigator.sendBeacon(t.v.toString(),"")),!n&&T.Image&&(new Image().src=t.v,n=!0),n||(t.g=Kr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),de(t)}jr(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function fn(e){e.g&&(Vs(e),e.g.cancel(),e.g=null)}function Mr(e){fn(e),e.u&&(T.clearTimeout(e.u),e.u=null),gn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&T.clearTimeout(e.m),e.m=null)}function Ms(e,t){e.l.push(new Ch(e.Za++,t)),e.G==3&&pn(e)}function pn(e){Sr(e.i)||e.m||(e.m=!0,gs(e.Ha,e),e.C=0)}function Mh(e,t){return Cr(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=he($(e.Ha,e,t),qr(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new le(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=$i(r),ji(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Vr(this,i,t),n=ct(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Te(this,n),this.o&&r&&Ls(n,this.o,r),Rs(this.i,i),this.Ra&&_(n,"TYPE","init"),this.ja?(_(n,"$req",t),_(n,"SID","null"),i.$=!0,As(i,n,null)):As(i,n,t),this.G=2}}else this.G==3&&(e?Pr(this,e):this.l.length==0||Sr(this.i)||Pr(this))};function Pr(e,t){var n;t?n=t.m:n=e.V++;const s=ct(e.F);_(s,"SID",e.J),_(s,"RID",n),_(s,"AID",e.U),Te(e,s),e.o&&e.s&&Ls(s,e.o,e.s),n=new le(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Vr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Rs(e.i,n),As(n,s,t)}function Te(e,t){e.j&&ks({},function(n,s){_(t,s,n)})}function Vr(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let h=i[c].h;const u=i[c].g;if(h-=r,0>h)r=Math.max(0,i[c].h-100),a=!1;else try{kh(u,o,"req"+h+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Fr(e){e.g||e.u||(e.Y=1,gs(e.Ga,e),e.A=0)}function Ps(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=he($(e.Ga,e),qr(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Ur(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=he($(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,X(10),fn(this),Ur(this))};function Vs(e){e.B!=null&&(T.clearTimeout(e.B),e.B=null)}function Ur(e){e.g=new le(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=ct(e.oa);_(t,"RID","rpc"),_(t,"SID",e.J),_(t,"CI",e.N?"0":"1"),_(t,"AID",e.U),Te(e,t),_(t,"TYPE","xmlhttp"),e.o&&e.s&&Ls(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=hn(ct(t)),n.s=null,n.U=!0,dr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,fn(this),Ps(this),X(19))};function gn(e){e.v!=null&&(T.clearTimeout(e.v),e.v=null)}function $r(e,t){var n=null;if(e.g==t){gn(e),Vs(e),e.g=null;var s=2}else if(Ds(e.i,t))n=t.D,Ar(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=tn(),j(s,new ar(s,n,t,i)),pn(e)}else Fr(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&Mh(e,t)||s==2&&Ps(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:St(e,5);break;case 4:St(e,10);break;case 3:St(e,6);break;default:St(e,2)}}}function qr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function St(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new It("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||on(n,"https"),hn(n)),bh(n.toString(),s)}else X(2);e.G=0,e.j&&e.j.va(t),jr(e),Mr(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),X(2)):(this.h.info("Failed to ping google.com"),X(1))};function jr(e){e.G=0,e.I=-1,e.j&&((Nr(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Yn(e.l),e.l.length=0),e.j.ua())}function Br(e,t,n){let s=mh(n);if(s.i!="")t&&an(s,t+"."+s.i),cn(s,s.m);else{const i=T.location;s=yh(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Zn(e.aa,function(i,r){_(s,r,i)}),t=e.D,n=e.sa,t&&n&&_(s,t,n),_(s,"VER",e.ma),Te(e,s),s}function Kr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new x(new ye({ib:!0})):new x(e.qa),t.L=e.H,t}function Gr(){}g=Gr.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function mn(){if(xt&&!(10<=Number(Wc)))throw Error("Environmental error: no available transport.")}mn.prototype.g=function(e,t){return new tt(e,t)};function tt(e,t){V.call(this),this.g=new xr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ze(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ze(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ft(this)}q(tt,V);tt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),gs($(e.hb,e,t))),X(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Br(e,null,e.W),pn(e)};tt.prototype.close=function(){xs(this.g)};tt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Ms(this.g,t)}else this.v?(t={},t.__data__=ps(e),Ms(this.g,t)):Ms(this.g,e)};tt.prototype.M=function(){this.g.j=null,delete this.j,xs(this.g),delete this.g,tt.Z.M.call(this)};function Hr(e){Ts.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}q(Hr,Ts);function zr(){Is.call(this),this.status=1}q(zr,Is);function Ft(e){this.g=e}q(Ft,Gr);Ft.prototype.xa=function(){j(this.g,"a")};Ft.prototype.wa=function(e){j(this.g,new Hr(e))};Ft.prototype.va=function(e){j(this.g,new zr(e))};Ft.prototype.ua=function(){j(this.g,"b")};mn.prototype.createWebChannel=mn.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;en.NO_ERROR=0;en.TIMEOUT=8;en.HTTP_ERROR=6;cr.COMPLETE="complete";ur.EventType=ue;ue.OPEN="a";ue.CLOSE="b";ue.ERROR="c";ue.MESSAGE="d";V.prototype.listen=V.prototype.N;x.prototype.listenOnce=x.prototype.O;x.prototype.getLastError=x.prototype.La;x.prototype.getLastErrorCode=x.prototype.Da;x.prototype.getStatus=x.prototype.ba;x.prototype.getResponseJson=x.prototype.Qa;x.prototype.getResponseText=x.prototype.ga;x.prototype.send=x.prototype.ea;var Ph=function(){return new mn},Vh=function(){return tn()},Fs=en,Fh=cr,Uh=wt,Wr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},$h=ye,yn=ur,qh=x;const Qr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=new _i("@firebase/firestore");function Xr(){return Ct.logLevel}function y(e,...t){if(Ct.logLevel<=k.DEBUG){const n=t.map(Us);Ct.debug(`Firestore (${Ut}): ${e}`,...n)}}function ft(e,...t){if(Ct.logLevel<=k.ERROR){const n=t.map(Us);Ct.error(`Firestore (${Ut}): ${e}`,...n)}}function Yr(e,...t){if(Ct.logLevel<=k.WARN){const n=t.map(Us);Ct.warn(`Firestore (${Ut}): ${e}`,...n)}}function Us(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+e;throw ft(t),new Error(t)}function D(e,t){e||I()}function S(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends qe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Kh{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new At;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new At,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new At)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new jh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return D(t===null||typeof t=="string"),new Y(t)}}class Gh{constructor(t,n,s){this.type="FirstParty",this.user=Y.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Hh{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Gh(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wh{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(D(typeof n.token=="string"),this.p=n.token,new zh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$s.A=-1;class Jr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Qh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function b(e,t){return e<t?-1:e>t?1:0}function $t(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new et(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?b(this.nanoseconds,t.nanoseconds):b(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.timestamp=t}static fromTimestamp(t){return new C(t)}static min(){return new C(new et(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Nt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function to(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ie.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ie?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Ie{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Xh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Ie{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return Xh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.fields=t,t.sort(J.comparator)}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $t(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new B(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new B(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return b(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}B.EMPTY_BYTE_STRING=new B("");const Yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(e){if(D(!!e),typeof e=="string"){let t=0;const n=Yh.exec(e);if(D(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:M(e.seconds),nanos:M(e.nanos)}}function M(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function qt(e){return typeof e=="string"?B.fromBase64String(e):B.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function no(e){const t=e.mapValue.fields.__previous_value__;return eo(t)?no(t):t}function Ce(e){const t=pt(e.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class jt{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new jt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof jt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){return e==null}function vn(e){return e===0&&1/e==-1/0}function Zh(e){return typeof e=="number"&&Number.isInteger(e)&&!vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(O.fromString(t))}static fromName(t){return new E(O.fromString(t).popFirst(5))}static empty(){return new E(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new O(t.slice()))}}function kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eo(e)?4:10:I()}function it(e,t){if(e===t)return!0;const n=kt(e);if(n!==kt(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ce(e).isEqual(Ce(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=pt(s.timestampValue),o=pt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return qt(s.bytesValue).isEqual(qt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return M(s.geoPointValue.latitude)===M(i.geoPointValue.latitude)&&M(s.geoPointValue.longitude)===M(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return M(s.integerValue)===M(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=M(s.doubleValue),o=M(i.doubleValue);return r===o?vn(r)===vn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return $t(e.arrayValue.values||[],t.arrayValue.values||[],it);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Zr(r)!==Zr(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!it(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ae(e,t){return(e.values||[]).find(n=>it(n,t))!==void 0}function Kt(e,t){if(e===t)return 0;const n=kt(e),s=kt(t);if(n!==s)return b(n,s);switch(n){case 0:return 0;case 1:return b(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=M(i.integerValue||i.doubleValue),a=M(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return so(e.timestampValue,t.timestampValue);case 4:return so(Ce(e),Ce(t));case 5:return b(e.stringValue,t.stringValue);case 6:return function(i,r){const o=qt(i),a=qt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const h=b(o[c],a[c]);if(h!==0)return h}return b(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=b(M(i.latitude),M(r.latitude));return o!==0?o:b(M(i.longitude),M(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const h=Kt(o[c],a[c]);if(h)return h}return b(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),c=r.fields||{},h=Object.keys(c);a.sort(),h.sort();for(let u=0;u<a.length&&u<h.length;++u){const l=b(a[u],h[u]);if(l!==0)return l;const f=Kt(o[a[u]],c[h[u]]);if(f!==0)return f}return b(a.length,h.length)}(e.mapValue,t.mapValue);default:throw I()}}function so(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return b(e,t);const n=pt(e),s=pt(t),i=b(n.seconds,s.seconds);return i!==0?i:b(n.nanos,s.nanos)}function Gt(e){return qs(e)}function qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=pt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=qs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${qs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function js(e){return!!e&&"integerValue"in e}function Bs(e){return!!e&&"arrayValue"in e}function io(e){return!!e&&"nullValue"in e}function ro(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wn(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Nt(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ne(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.value=t}static empty(){return new nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!wn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ne(n)}setAll(t){let n=J.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ne(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());wn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return it(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Nt(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new nt(Ne(this.value))}}function oo(e){const t=[];return Nt(e.fields,(n,s)=>{const i=new J([n]);if(wn(s)){const r=oo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Se(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new z(t,0,C.min(),C.min(),nt.empty(),0)}static newFoundDocument(t,n,s){return new z(t,1,n,C.min(),s,0)}static newNoDocument(t,n){return new z(t,2,n,C.min(),nt.empty(),0)}static newUnknownDocument(t,n){return new z(t,3,n,C.min(),nt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function ao(e,t=null,n=[],s=[],i=null,r=null,o=null){return new tu(e,t,n,s,i,r,o)}function Ks(e){const t=S(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Gt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Bt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Gt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Gt(s)).join(",")),t.P=n}return t.P}function eu(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Gt(s.value)}`;var s}).join(", ")}]`),Bt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Gt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Gt(n)).join(",")),`Target(${t})`}function Gs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!hu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!it(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!uo(e.startAt,t.startAt)&&uo(e.endAt,t.endAt)}function Hs(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class Z extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.v(t,n,s):new nu(t,n,s):n==="array-contains"?new ru(t,s):n==="in"?new ou(t,s):n==="not-in"?new au(t,s):n==="array-contains-any"?new cu(t,s):new Z(t,n,s)}static v(t,n,s){return n==="in"?new su(t,s):new iu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.V(Kt(n,this.value)):n!==null&&kt(this.value)===kt(n)&&this.V(Kt(n,this.value))}V(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class nu extends Z{constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.V(n)}}class su extends Z{constructor(t,n){super(t,"in",n),this.keys=co("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class iu extends Z{constructor(t,n){super(t,"not-in",n),this.keys=co("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function co(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class ru extends Z{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bs(n)&&Ae(n.arrayValue,this.value)}}class ou extends Z{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ae(this.value.arrayValue,n)}}class au extends Z{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ae(this.value.arrayValue,n)}}class cu extends Z{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ae(this.value.arrayValue,s))}}class En{constructor(t,n){this.position=t,this.inclusive=n}}class Ht{constructor(t,n="asc"){this.field=t,this.dir=n}}function hu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ho(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=Kt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function uo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!it(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function uu(e,t,n,s,i,r,o,a){return new ke(e,t,n,s,i,r,o,a)}function zs(e){return new ke(e)}function Tn(e){return!Bt(e.limit)&&e.limitType==="F"}function In(e){return!Bt(e.limit)&&e.limitType==="L"}function lo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function fo(e){for(const t of e.filters)if(t.S())return t.field;return null}function lu(e){return e.collectionGroup!==null}function be(e){const t=S(e);if(t.D===null){t.D=[];const n=fo(t),s=lo(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new Ht(n)),t.D.push(new Ht(J.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Ht(J.keyField(),r))}}}return t.D}function bt(e){const t=S(e);if(!t.C)if(t.limitType==="F")t.C=ao(t.path,t.collectionGroup,be(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of be(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new Ht(r.field,o))}const s=t.endAt?new En(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new En(t.startAt.position,!t.startAt.inclusive):null;t.C=ao(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function du(e,t,n){return new ke(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Sn(e,t){return Gs(bt(e),bt(t))&&e.limitType===t.limitType}function po(e){return`${Ks(bt(e))}|lt:${e.limitType}`}function Ws(e){return`Query(target=${eu(bt(e))}; limitType=${e.limitType})`}function Qs(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=ho(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,be(n),s)||n.endAt&&!function(i,r,o){const a=ho(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,be(n),s))}(e,t)}function go(e){return(t,n)=>{let s=!1;for(const i of be(e)){const r=fu(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function fu(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Kt(a,c):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vn(t)?"-0":t}}function yo(e){return{integerValue:""+e}}function pu(e,t){return Zh(t)?yo(t):mo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this._=void 0}}function gu(e,t,n){return e instanceof De?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Re?wo(e,t):e instanceof _e?Eo(e,t):function(s,i){const r=vo(s,i),o=To(r)+To(s.k);return js(r)&&js(s.k)?yo(o):mo(s.O,o)}(e,t)}function mu(e,t,n){return e instanceof Re?wo(e,t):e instanceof _e?Eo(e,t):n}function vo(e,t){return e instanceof An?js(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class De extends Cn{}class Re extends Cn{constructor(t){super(),this.elements=t}}function wo(e,t){const n=Io(t);for(const s of e.elements)n.some(i=>it(i,s))||n.push(s);return{arrayValue:{values:n}}}class _e extends Cn{constructor(t){super(),this.elements=t}}function Eo(e,t){let n=Io(t);for(const s of e.elements)n=n.filter(i=>!it(i,s));return{arrayValue:{values:n}}}class An extends Cn{constructor(t,n){super(),this.O=t,this.k=n}}function To(e){return M(e.integerValue||e.doubleValue)}function Io(e){return Bs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,n){this.field=t,this.transform=n}}function vu(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Re&&s instanceof Re||n instanceof _e&&s instanceof _e?$t(n.elements,s.elements,it):n instanceof An&&s instanceof An?it(n.k,s.k):n instanceof De&&s instanceof De}(e.transform,t.transform)}class wu{constructor(t,n){this.version=t,this.transformResults=n}}class gt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gt}static exists(t){return new gt(void 0,t)}static updateTime(t){return new gt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class kn{}function Eu(e,t,n){e instanceof bn?function(s,i,r){const o=s.value.clone(),a=No(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof zt?function(s,i,r){if(!Nn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=No(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ao(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function Xs(e,t,n){e instanceof bn?function(s,i,r){if(!Nn(s.precondition,i))return;const o=s.value.clone(),a=ko(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Co(i),o).setHasLocalMutations()}(e,t,n):e instanceof zt?function(s,i,r){if(!Nn(s.precondition,i))return;const o=ko(s.fieldTransforms,r,i),a=i.data;a.setAll(Ao(s)),a.setAll(o),i.convertToFoundDocument(Co(i),a).setHasLocalMutations()}(e,t,n):function(s,i){Nn(s.precondition,i)&&i.convertToNoDocument(C.min())}(e,t)}function Tu(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=vo(s.transform,i||null);r!=null&&(n==null&&(n=nt.empty()),n.set(s.field,r))}return n||null}function So(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&$t(n,s,(i,r)=>vu(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Co(e){return e.isFoundDocument()?e.version:C.min()}class bn extends kn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class zt extends kn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Ao(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function No(e,t,n){const s=new Map;D(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,mu(o,a,n[i]))}return s}function ko(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,gu(r,o,t))}return s}class bo extends kn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Iu extends kn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P,A;function Cu(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Do(e){if(e===void 0)return ft("GRPC error has no .code"),d.UNKNOWN;switch(e){case P.OK:return d.OK;case P.CANCELLED:return d.CANCELLED;case P.UNKNOWN:return d.UNKNOWN;case P.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case P.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case P.INTERNAL:return d.INTERNAL;case P.UNAVAILABLE:return d.UNAVAILABLE;case P.UNAUTHENTICATED:return d.UNAUTHENTICATED;case P.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case P.NOT_FOUND:return d.NOT_FOUND;case P.ALREADY_EXISTS:return d.ALREADY_EXISTS;case P.PERMISSION_DENIED:return d.PERMISSION_DENIED;case P.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case P.ABORTED:return d.ABORTED;case P.OUT_OF_RANGE:return d.OUT_OF_RANGE;case P.UNIMPLEMENTED:return d.UNIMPLEMENTED;case P.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(A=P||(P={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new F(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new F(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dn(this.root,t,this.comparator,!0)}}class Dn{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:K.RED,this.left=i!=null?i:K.EMPTY,this.right=r!=null?r:K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new K(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.comparator=t,this.data=new F(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ro(this.data.getIterator())}getIteratorFrom(t){return new Ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new G(this.comparator);return n.data=t,n}}class Ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new F(E.comparator);function Dt(){return Au}const Nu=new F(E.comparator);function Ys(){return Nu}const ku=new F(E.comparator),bu=new G(E.comparator);function R(...e){let t=bu;for(const n of e)t=t.add(n);return t}const Du=new G(b);function _o(){return Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Oe.createSynthesizedTargetChangeForCurrentChange(t,n)),new Rn(C.min(),s,_o(),Dt(),R())}}class Oe{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Oe(B.EMPTY_BYTE_STRING,n,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n,s,i){this.M=t,this.removedTargetIds=n,this.key=s,this.$=i}}class Oo{constructor(t,n){this.targetId=t,this.F=n}}class Lo{constructor(t,n,s=B.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class xo{constructor(){this.B=0,this.L=Po(),this.U=B.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=R(),n=R(),s=R();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Oe(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=Po()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Ru{constructor(t){this.nt=t,this.st=new Map,this.it=Dt(),this.rt=Mo(),this.ot=new G(b)}ct(t){for(const n of t.M)t.$&&t.$.isFoundDocument()?this.ut(n,t.$):this.at(n,t.key,t.$);for(const n of t.removedTargetIds)this.at(n,t.key,t.$)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.F.count,i=this.wt(n);if(i){const r=i.target;if(Hs(r))if(s===0){const o=new E(r.path);this.at(n,o,z.newNoDocument(o,C.min()))}else D(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&Hs(a.target)){const c=new E(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.at(o,c,z.newNoDocument(c,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=R();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const h=this.wt(c);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Rn(t,n,this.ot,this.it,s);return this.it=Dt(),this.rt=Mo(),this.ot=new G(b),i}ut(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(t))}at(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new xo,this.st.set(t,n)),n}Et(t){let n=this.rt.get(t);return n||(n=new G(b),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||y("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Tt(t)}dt(t){this.st.set(t,new xo),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Mo(){return new F(E.comparator)}function Po(){return new F(E.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ou=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Lu{constructor(t,n){this.databaseId=t,this.N=n}}function On(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vo(e,t){return e.N?t.toBase64():t.toUint8Array()}function xu(e,t){return On(e,t.toTimestamp())}function ut(e){return D(!!e),C.fromTimestamp(function(t){const n=pt(t);return new et(n.seconds,n.nanos)}(e))}function Js(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Fo(e){const t=O.fromString(e);return D(jo(t)),t}function Zs(e,t){return Js(e.databaseId,t.path)}function ti(e,t){const n=Fo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Uo(n))}function ei(e,t){return Js(e.databaseId,t)}function Mu(e){const t=Fo(e);return t.length===4?O.emptyPath():Uo(t)}function ni(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Uo(e){return D(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function $o(e,t,n){return{name:Zs(e,t),fields:n.value.mapValue.fields}}function Pu(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,h){return c.N?(D(h===void 0||typeof h=="string"),B.fromBase64String(h||"")):(D(h===void 0||h instanceof Uint8Array),B.fromUint8Array(h||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?d.UNKNOWN:Do(c.code);return new w(h,c.message||"")}(o);n=new Lo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ti(e,s.document.name),r=ut(s.document.updateTime),o=new nt({mapValue:{fields:s.document.fields}}),a=z.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new _n(c,h,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ti(e,s.document),r=s.readTime?ut(s.readTime):C.min(),o=z.newNoDocument(i,r),a=s.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ti(e,s.document),r=s.removedTargetIds||[];n=new _n([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Su(i),o=s.targetId;n=new Oo(o,r)}}return n}function Vu(e,t){let n;if(t instanceof bn)n={update:$o(e,t.key,t.value)};else if(t instanceof bo)n={delete:Zs(e,t.key)};else if(t instanceof zt)n={update:$o(e,t.key,t.data),updateMask:zu(t.fieldMask)};else{if(!(t instanceof Iu))return I();n={verify:Zs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof De)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Re)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _e)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof An)return{fieldPath:r.field.canonicalString(),increment:o.k};throw I()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xu(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:I()}(e,t.precondition)),n}function Fu(e,t){return e&&e.length>0?(D(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ut(s.updateTime):ut(i);return r.isEqual(C.min())&&(r=ut(i)),new wu(r,s.transformResults||[])}(n,t))):[]}function Uu(e,t){return{documents:[ei(e,t.path)]}}function $u(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ei(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ei(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length===0)return;const h=c.map(u=>function(l){if(l.op==="=="){if(ro(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NAN"}};if(io(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(ro(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NOT_NAN"}};if(io(l.value))return{unaryFilter:{field:Wt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wt(l.field),op:Ku(l.op),value:l.value}}}(u));return h.length===1?h[0]:{compositeFilter:{op:"AND",filters:h}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(h=>function(u){return{field:Wt(u.field),direction:Bu(u.dir)}}(h))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,h){return c.N||Bt(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function qu(e){let t=Mu(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){D(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=qo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new Ht(Qt(l.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,Bt(l)?null:l}(n.limit));let c=null;n.startAt&&(c=function(u){const l=!!u.before,f=u.values||[];return new En(f,l)}(n.startAt));let h=null;return n.endAt&&(h=function(u){const l=!u.before,f=u.values||[];return new En(f,l)}(n.endAt)),uu(t,i,o,r,a,"F",c,h)}function ju(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function qo(e){return e?e.unaryFilter!==void 0?[Hu(e)]:e.fieldFilter!==void 0?[Gu(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>qo(t)).reduce((t,n)=>t.concat(n)):I():[]}function Bu(e){return _u[e]}function Ku(e){return Ou[e]}function Wt(e){return{fieldPath:e.canonicalString()}}function Qt(e){return J.fromServerFormat(e.fieldPath)}function Gu(e){return Z.create(Qt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function Hu(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Qt(e.unaryFilter.field);return Z.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Qt(e.unaryFilter.field);return Z.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qt(e.unaryFilter.field);return Z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qt(e.unaryFilter.field);return Z.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function zu(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function jo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,s)=>{n(t)})}static reject(t){return new p((n,s)=>{s(t)})}static waitFor(t){return new p((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=p.resolve(!1);for(const s of t)n=n.next(i=>i?p.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Le(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Eu(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Xs(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Xs(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&$t(this.mutations,t.mutations,(n,s)=>So(n,s))&&$t(this.baseMutations,t.baseMutations,(n,s)=>So(n,s))}}class si{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){D(t.mutations.length===s.length);let i=ku;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new si(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,n,s,i,r=C.min(),o=C.min(),a=B.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Rt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.Ht=t}}function Zu(e){const t=qu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?du(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.xe=new el}addToCollectionParentIndex(t,n){return this.xe.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.xe.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n,s){return p.resolve(R())}getFieldIndex(t,n){return p.resolve(null)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}updateCollectionGroup(t,n,s){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class el{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new G(O.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new G(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.ze=t}next(){return this.ze+=2,this.ze}static He(){return new Xt(0)}static Je(){return new Xt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Wu)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i!==void 0){for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),!0;return!1}forEach(t){Nt(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return to(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.changes=new Me(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,n,s){this.qn=t,this.gs=n,this.indexManager=s}ys(t,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.ps(t,n,s))}ps(t,n,s){return this.qn.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}Is(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Es(t,n){return this.qn.getEntries(t,n).next(s=>this.Ts(t,s).next(()=>s))}Ts(t,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.Is(n,s))}As(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(t,n.path):lu(n)?this.Ps(t,n,s):this.bs(t,n,s)}Rs(t,n){return this.ys(t,new E(n)).next(s=>{let i=Ys();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ps(t,n,s){const i=n.collectionGroup;let r=Ys();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(h,u){return new ke(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.bs(t,c,s).next(h=>{h.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}bs(t,n,s){let i;return this.qn.getAll(t,n.path,s).next(r=>(i=r,this.gs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const c=a.key;let h=i.get(c);h==null&&(h=z.newInvalidDocument(c),i=i.insert(c,h)),Xs(a,h,o.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}).next(()=>(i.forEach((r,o)=>{Qs(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.vs=s,this.Vs=i}static Ss(t,n){let s=R(),i=R();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ii(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{Ds(t){this.Cs=t}As(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(C.min())?this.Ns(t,n):this.Cs.Es(t,i).next(r=>{const o=this.xs(n,r);return(Tn(n)||In(n))&&this.ks(n.limitType,o,i,s)?this.Ns(t,n):(Xr()<=k.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.Cs.As(t,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}xs(t,n){let s=new G(go(t));return n.forEach((i,r)=>{Qs(t,r)&&(s=s.add(r))}),s}ks(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ns(t,n){return Xr()<=k.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Cs.As(t,n,C.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,n,s,i){this.persistence=t,this.Os=n,this.O=i,this.Ms=new F(b),this.$s=new Me(r=>Ks(r),Gs),this.Fs=C.min(),this.Bs=t.getRemoteDocumentCache(),this.Un=t.getTargetCache(),this.Kn=t.getBundleCache(),this.Ls(s)}Ls(t){this.indexManager=this.persistence.getIndexManager(t),this.gs=this.persistence.getMutationQueue(t,this.indexManager),this.Us=new sl(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function ol(e,t,n,s){return new rl(e,t,n,s)}async function Bo(e,t){const n=S(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.gs.getAllMutationBatches(s).next(r=>(i=r,n.Ls(t),n.gs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=R();for(const h of i){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of r){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return n.Us.Es(s,c).next(h=>({qs:h,removedBatchIds:o,addedBatchIds:a}))})})}function al(e,t){const n=S(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,c,h){const u=c.batch,l=u.keys();let f=p.resolve();return l.forEach(m=>{f=f.next(()=>h.getEntry(a,m)).next(v=>{const N=c.docVersions.get(m);D(N!==null),v.version.compareTo(N)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),h.addEntry(v)))})}),f.next(()=>o.gs.removeMutationBatch(a,u))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.gs.performConsistencyCheck(s)).next(()=>n.Us.Es(s,i))})}function Ko(e){const t=S(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Un.getLastRemoteSnapshotVersion(n))}function cl(e,t){const n=S(e),s=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];t.targetChanges.forEach((h,u)=>{const l=i.get(u);if(!l)return;a.push(n.Un.removeMatchingKeys(r,h.removedDocuments,u).next(()=>n.Un.addMatchingKeys(r,h.addedDocuments,u)));let f=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?f=f.withResumeToken(B.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(h.resumeToken,s)),i=i.insert(u,f),function(m,v,N){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(l,f,h)&&a.push(n.Un.updateTargetData(r,f))});let c=Dt();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(hl(r,o,t.documentUpdates).next(h=>{c=h})),!s.isEqual(C.min())){const h=n.Un.getLastRemoteSnapshotVersion(r).next(u=>n.Un.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>n.Us.Ts(r,c)).next(()=>c)}).then(r=>(n.Ms=i,r))}function hl(e,t,n){let s=R();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=Dt();return n.forEach((o,a)=>{const c=i.get(o);a.isNoDocument()&&a.version.isEqual(C.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):y("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),r})}function ul(e,t){const n=S(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.gs.getNextMutationBatchAfterBatchId(s,t)))}function ll(e,t){const n=S(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Un.getTargetData(s,t).next(r=>r?(i=r,p.resolve(i)):n.Un.allocateTargetId(s).next(o=>(i=new Rt(t,o,0,s.currentSequenceNumber),n.Un.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ms.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.$s.set(t,s.targetId)),s})}async function ri(e,t,n){const s=S(e),i=s.Ms.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Le(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ms=s.Ms.remove(t),s.$s.delete(i.target)}function Go(e,t,n){const s=S(e);let i=C.min(),r=R();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,h){const u=S(a),l=u.$s.get(h);return l!==void 0?p.resolve(u.Ms.get(l)):u.Un.getTargetData(c,h)}(s,o,bt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Un.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Os.As(o,t,n?i:C.min(),n?r:R())).next(a=>({documents:a,Ks:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this.O=t,this.Ws=new Map,this.zs=new Map}getBundleMetadata(t,n){return p.resolve(this.Ws.get(n))}saveBundleMetadata(t,n){var s;return this.Ws.set(n.id,{id:(s=n).id,version:s.version,createTime:ut(s.createTime)}),p.resolve()}getNamedQuery(t,n){return p.resolve(this.zs.get(n))}saveNamedQuery(t,n){return this.zs.set(n.name,function(s){return{name:s.name,query:Zu(s.bundledQuery),readTime:ut(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.overlays=new F(E.comparator),this.Hs=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach(i=>{this.Yt(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.Hs.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Hs.delete(s)),p.resolve()}getOverlaysForCollection(t,n,s){const i=new Map,r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new F((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let u=r.get(h.largestBatchId);u===null&&(u=new Map,r=r.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=new Map,c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(u,h)),!(a.size>=i)););return p.resolve(a)}Yt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);i!==null&&this.Hs.get(i.largestBatchId).delete(s.key),this.overlays=this.overlays.insert(s.key,new Yu(n,s));let r=this.Hs.get(n);r===void 0&&(r=new Set,this.Hs.set(n,r)),r.add(s.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.Js=new G(U.Ys),this.Xs=new G(U.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(t,n){const s=new U(t,n);this.Js=this.Js.add(s),this.Xs=this.Xs.add(s)}ti(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ei(new U(t,n))}ni(t,n){t.forEach(s=>this.removeReference(s,n))}si(t){const n=new E(new O([])),s=new U(n,t),i=new U(n,t+1),r=[];return this.Xs.forEachInRange([s,i],o=>{this.ei(o),r.push(o.key)}),r}ii(){this.Js.forEach(t=>this.ei(t))}ei(t){this.Js=this.Js.delete(t),this.Xs=this.Xs.delete(t)}ri(t){const n=new E(new O([])),s=new U(n,t),i=new U(n,t+1);let r=R();return this.Xs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new U(t,0),s=this.Js.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class U{constructor(t,n){this.key=t,this.oi=n}static Ys(t,n){return E.comparator(t.key,n.key)||b(t.oi,n.oi)}static Zs(t,n){return b(t.oi,n.oi)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new G(U.Ys)}checkEmpty(t){return p.resolve(this.gs.length===0)}addMutationBatch(t,n,s,i){const r=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new Xu(r,n,s,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new U(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.hi(s),r=i<0?0:i;return p.resolve(this.gs.length>r?this.gs[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(t){return p.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new U(n,0),i=new U(n,Number.POSITIVE_INFINITY),r=[];return this.ui.forEachInRange([s,i],o=>{const a=this.ai(o.oi);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new G(b);return n.forEach(i=>{const r=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([r,o],a=>{s=s.add(a.oi)})}),p.resolve(this.li(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new U(new E(r),0);let a=new G(b);return this.ui.forEachWhile(c=>{const h=c.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(a=a.add(c.oi)),!0)},o),p.resolve(this.li(a))}li(t){const n=[];return t.forEach(s=>{const i=this.ai(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){D(this.fi(n.batchId,"removed")===0),this.gs.shift();let s=this.ui;return p.forEach(n.mutations,i=>{const r=new U(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ui=s})}Qe(t){}containsKey(t,n){const s=new U(n,0),i=this.ui.firstAfterOrEqual(s);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.gs.length,p.resolve()}fi(t,n){return this.hi(t)}hi(t){return this.gs.length===0?0:t-this.gs[0].batchId}ai(t){const n=this.hi(t);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.di=t,this.docs=new F(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():z.newInvalidDocument(n))}getEntries(t,n){let s=Dt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():z.newInvalidDocument(i))}),p.resolve(s)}getAll(t,n,s){let i=Dt();const r=new E(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||c.readTime.compareTo(s)<=0||(i=i.insert(c.key,c.mutableCopy()))}return p.resolve(i)}_i(t,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new ml(this)}getSize(t){return p.resolve(this.size)}}class ml extends nl{constructor(t){super(),this.Tn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(t,i)):this.Tn.removeEntry(s)}),p.waitFor(n)}getFromCache(t,n){return this.Tn.getEntry(t,n)}getAllFromCache(t,n){return this.Tn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.persistence=t,this.wi=new Me(n=>Ks(n),Gs),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.mi=0,this.gi=new oi,this.targetCount=0,this.yi=Xt.He()}forEachTarget(t,n){return this.wi.forEach((s,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.mi)}allocateTargetId(t){return this.highestTargetId=this.yi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.mi&&(this.mi=n),p.resolve()}Ze(t){this.wi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.yi=new Xt(n),this.highestTargetId=n),t.sequenceNumber>this.mi&&(this.mi=t.sequenceNumber)}addTargetData(t,n){return this.Ze(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.Ze(n),p.resolve()}removeTargetData(t,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.wi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(r).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const s=this.wi.get(n)||null;return p.resolve(s)}addMatchingKeys(t,n,s){return this.gi.ti(n,s),p.resolve()}removeMatchingKeys(t,n,s){this.gi.ni(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.gi.si(n),p.resolve()}getMatchingKeysForTargetId(t,n){const s=this.gi.ri(n);return p.resolve(s)}containsKey(t,n){return p.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n){this.pi={},this.overlays={},this.Nn=new $s(0),this.xn=!1,this.xn=!0,this.referenceDelegate=t(this),this.Un=new yl(this),this.indexManager=new tl,this.qn=function(s){return new gl(s)}(s=>this.referenceDelegate.Ii(s)),this.O=new Ju(n),this.Kn=new dl(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new fl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.pi[t.toKey()];return s||(s=new pl(n,this.referenceDelegate),this.pi[t.toKey()]=s),s}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(t,n,s){y("MemoryPersistence","Starting transaction:",t);const i=new wl(this.Nn.next());return this.referenceDelegate.Ei(),s(i).next(r=>this.referenceDelegate.Ti(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ai(t,n){return p.or(Object.values(this.pi).map(s=>()=>s.containsKey(t,n)))}}class wl extends Qu{constructor(t){super(),this.currentSequenceNumber=t}}class ai{constructor(t){this.persistence=t,this.Ri=new oi,this.Pi=null}static bi(t){return new ai(t)}get vi(){if(this.Pi)return this.Pi;throw I()}addReference(t,n,s){return this.Ri.addReference(s,n),this.vi.delete(s.toString()),p.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.vi.add(s.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.vi.add(n.toString()),p.resolve()}removeTarget(t,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.vi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ei(){this.Pi=new Set}Ti(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.vi,s=>{const i=E.fromPath(s);return this.Vi(t,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.Pi=null,n.apply(t)))}updateLimboDocument(t,n){return this.Vi(t,n).next(s=>{s?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(t){return 0}Vi(t,n){return p.or([()=>p.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Ho{constructor(){this.activeTargetIds=_o()}Ci(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ni(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Di(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class El{constructor(){this._r=new Ho,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this._r.Ci(t),this.wr[t]||"not-current"}updateQueryState(t,n,s){this.wr[t]=n}removeLocalQueryTarget(t){this._r.Ni(t)}isLocalQueryTarget(t){return this._r.activeTargetIds.has(t)}clearQueryState(t){delete this.wr[t]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(t){return this._r.activeTargetIds.has(t)}start(){return this._r=new Ho,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{mr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(t){this.Er.push(t)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Er)t(0)}Ir(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Er)t(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.Ar=t.Ar,this.Rr=t.Rr}Pr(t){this.br=t}vr(t){this.Vr=t}onMessage(t){this.Sr=t}close(){this.Rr()}send(t){this.Ar(t)}Dr(){this.br()}Cr(t){this.Vr(t)}Nr(t){this.Sr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.kr=n+"://"+t.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(t,n,s,i,r){const o=this.$r(t,n);y("RestConnection","Sending: ",o,s);const a={};return this.Fr(a,i,r),this.Br(t,o,a,s).then(c=>(y("RestConnection","Received: ",c),c),c=>{throw Yr("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}Lr(t,n,s,i,r){return this.Mr(t,n,s,i,r)}Fr(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ut,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}$r(t,n){const s=Il[t];return`${this.kr}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Br(t,n,s,i){return new Promise((r,o)=>{const a=new qh;a.listenOnce(Fh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fs.NO_ERROR:const h=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(h)),r(h);break;case Fs.TIMEOUT:y("Connection",'RPC "'+t+'" timed out'),o(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const u=a.getStatus();if(y("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const f=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(v)>=0?v:d.UNKNOWN}(l.status);o(new w(f,l.message))}else o(new w(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{y("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}Ur(t,n,s){const i=[this.kr,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ph(),o=Vh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $h({})),this.Fr(a.initMessageHeaders,n,s),xa()||Pa()||Va()||Fa()||Ua()||Ma()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");y("Connection","Creating WebChannel: "+c,a);const h=r.createWebChannel(c,a);let u=!1,l=!1;const f=new Sl({Ar:v=>{l?y("Connection","Not sending because WebChannel is closed:",v):(u||(y("Connection","Opening WebChannel transport."),h.open(),u=!0),y("Connection","WebChannel sending:",v),h.send(v))},Rr:()=>h.close()}),m=(v,N,L)=>{v.listen(N,rt=>{try{L(rt)}catch(ot){setTimeout(()=>{throw ot},0)}})};return m(h,yn.EventType.OPEN,()=>{l||y("Connection","WebChannel transport opened.")}),m(h,yn.EventType.CLOSE,()=>{l||(l=!0,y("Connection","WebChannel transport closed"),f.Cr())}),m(h,yn.EventType.ERROR,v=>{l||(l=!0,Yr("Connection","WebChannel transport errored:",v),f.Cr(new w(d.UNAVAILABLE,"The operation could not be completed")))}),m(h,yn.EventType.MESSAGE,v=>{var N;if(!l){const L=v.data[0];D(!!L);const rt=L,ot=rt.error||((N=rt[0])===null||N===void 0?void 0:N.error);if(ot){y("Connection","WebChannel received error:",ot);const ne=ot.status;let se=function(Oa){const bi=P[Oa];if(bi!==void 0)return Do(bi)}(ne),ki=ot.message;se===void 0&&(se=d.INTERNAL,ki="Unknown error status: "+ne+" with message "+ot.message),l=!0,f.Cr(new w(se,ki)),h.close()}else y("Connection","WebChannel received:",L),f.Nr(L)}}),m(o,Uh.STAT_EVENT,v=>{v.stat===Wr.PROXY?y("Connection","Detected buffering proxy"):v.stat===Wr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Dr()},0),f}}function ci(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return new Lu(e,!0)}class Wo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Sn=t,this.timerId=n,this.qr=s,this.Kr=i,this.Gr=r,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(t){this.cancel();const n=Math.floor(this.jr+this.Jr()),s=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),t())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,n,s,i,r,o,a,c){this.Sn=t,this.Xr=s,this.Zr=i,this.eo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Wo(t,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(t){this._o(),this.stream.send(t)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(t,n){this._o(),this.wo(),this.ro.cancel(),this.no++,t!==4?this.ro.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.vr(n)}mo(){}auth(){this.state=1;const t=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.no===n&&this.po(s,i)},s=>{t(()=>{const i=new w(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Io(i)})})}po(t,n){const s=this.yo(this.no);this.stream=this.Eo(t,n),this.stream.Pr(()=>{s(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{s(()=>this.Io(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}yo(t){return n=>{this.Sn.enqueueAndForget(()=>this.no===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Al extends Qo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.O=r}Eo(t,n){return this.eo.Ur("Listen",t,n)}onMessage(t){this.ro.reset();const n=Pu(this.O,t),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?ut(r.readTime):C.min()}(t);return this.listener.To(n,s)}Ao(t){const n={};n.database=ni(this.O),n.addTarget=function(i,r){let o;const a=r.target;return o=Hs(a)?{documents:Uu(i,a)}:{query:$u(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Vo(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(o.readTime=On(i,r.snapshotVersion.toTimestamp())),o}(this.O,t);const s=ju(this.O,t);s&&(n.labels=s),this.fo(n)}Ro(t){const n={};n.database=ni(this.O),n.removeTarget=t,this.fo(n)}}class Nl extends Qo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.O=r,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(t,n){return this.eo.Ur("Write",t,n)}onMessage(t){if(D(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Po){this.ro.reset();const n=Fu(t.writeResults,t.commitTime),s=ut(t.commitTime);return this.listener.Vo(s,n)}return D(!t.writeResults||t.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const t={};t.database=ni(this.O),this.fo(t)}vo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Vu(this.O,s))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.eo=s,this.O=i,this.Co=!1}No(){if(this.Co)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(t,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Mr(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}Lr(t,n,s){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.eo.Lr(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class bl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(t){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.$o("Offline")))}set(t){this.Lo(),this.xo=0,t==="Online"&&(this.Oo=!1),this.$o(t)}$o(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Fo(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(ft(n),this.Oo=!1):y("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=r,this.jo.mr(o=>{s.enqueueAndForget(async()=>{_t(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.Ko.add(4),await Pe(c),c.Qo.set("Unknown"),c.Ko.delete(4),await xn(c)}(this))})}),this.Qo=new bl(s,i)}}async function xn(e){if(_t(e))for(const t of e.Go)await t(!0)}async function Pe(e){for(const t of e.Go)await t(!1)}function Xo(e,t){const n=S(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),li(n)?ui(n):Yt(n).co()&&hi(n,t))}function Yo(e,t){const n=S(e),s=Yt(n);n.qo.delete(t),s.co()&&Jo(n,t),n.qo.size===0&&(s.co()?s.ho():_t(n)&&n.Qo.set("Unknown"))}function hi(e,t){e.Wo.Z(t.targetId),Yt(e).Ao(t)}function Jo(e,t){e.Wo.Z(t),Yt(e).Ro(t)}function ui(e){e.Wo=new Ru({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),Yt(e).start(),e.Qo.Mo()}function li(e){return _t(e)&&!Yt(e).oo()&&e.qo.size>0}function _t(e){return S(e).Ko.size===0}function Zo(e){e.Wo=void 0}async function Rl(e){e.qo.forEach((t,n)=>{hi(e,t)})}async function _l(e,t){Zo(e),li(e)?(e.Qo.Bo(t),ui(e)):e.Qo.set("Unknown")}async function Ol(e,t,n){if(e.Qo.set("Online"),t instanceof Lo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.qo.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.qo.delete(o),s.Wo.removeTarget(o))}(e,t)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Mn(e,s)}else if(t instanceof _n?e.Wo.ct(t):t instanceof Oo?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(C.min()))try{const s=await Ko(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Wo.yt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const h=i.qo.get(c);h&&i.qo.set(c,h.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.qo.get(a);if(!c)return;i.qo.set(a,c.withResumeToken(B.EMPTY_BYTE_STRING,c.snapshotVersion)),Jo(i,a);const h=new Rt(c.target,a,1,c.sequenceNumber);hi(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await Mn(e,s)}}async function Mn(e,t,n){if(!Le(t))throw t;e.Ko.add(1),await Pe(e),e.Qo.set("Offline"),n||(n=()=>Ko(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await xn(e)})}function ta(e,t){return t().catch(n=>Mn(e,n,t))}async function Pn(e){const t=S(e),n=mt(t);let s=t.Uo.length>0?t.Uo[t.Uo.length-1].batchId:-1;for(;Ll(t);)try{const i=await ul(t.localStore,s);if(i===null){t.Uo.length===0&&n.ho();break}s=i.batchId,xl(t,i)}catch(i){await Mn(t,i)}ea(t)&&na(t)}function Ll(e){return _t(e)&&e.Uo.length<10}function xl(e,t){e.Uo.push(t);const n=mt(e);n.co()&&n.bo&&n.vo(t.mutations)}function ea(e){return _t(e)&&!mt(e).oo()&&e.Uo.length>0}function na(e){mt(e).start()}async function Ml(e){mt(e).Do()}async function Pl(e){const t=mt(e);for(const n of e.Uo)t.vo(n.mutations)}async function Vl(e,t,n){const s=e.Uo.shift(),i=si.from(s,t,n);await ta(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Pn(e)}async function Fl(e,t){t&&mt(e).bo&&await async function(n,s){if(i=s.code,Cu(i)&&i!==d.ABORTED){const r=n.Uo.shift();mt(n).ao(),await ta(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Pn(n)}var i}(e,t),ea(e)&&na(e)}async function sa(e,t){const n=S(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=_t(n);n.Ko.add(3),await Pe(n),s&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await xn(n)}async function Ul(e,t){const n=S(e);t?(n.Ko.delete(2),await xn(n)):t||(n.Ko.add(2),await Pe(n),n.Qo.set("Unknown"))}function Yt(e){return e.zo||(e.zo=function(t,n,s){const i=S(t);return i.No(),new Al(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(e.datastore,e.asyncQueue,{Pr:Rl.bind(null,e),vr:_l.bind(null,e),To:Ol.bind(null,e)}),e.Go.push(async t=>{t?(e.zo.ao(),li(e)?ui(e):e.Qo.set("Unknown")):(await e.zo.stop(),Zo(e))})),e.zo}function mt(e){return e.Ho||(e.Ho=function(t,n,s){const i=S(t);return i.No(),new Nl(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,s)}(e.datastore,e.asyncQueue,{Pr:Ml.bind(null,e),vr:Fl.bind(null,e),So:Pl.bind(null,e),Vo:Vl.bind(null,e)}),e.Go.push(async t=>{t?(e.Ho.ao(),await Pn(e)):(await e.Ho.stop(),e.Uo.length>0&&(y("RemoteStore",`Stopping write stream with ${e.Uo.length} pending writes`),e.Uo=[]))})),e.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new di(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fi(e,t){if(ft("AsyncQueue",`${t}: ${e}`),Le(e))return new w(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=Ys(),this.sortedSet=new F(this.comparator)}static emptySet(t){return new Jt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Jt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.Jo=new F(E.comparator)}track(t){const n=t.doc.key,s=this.Jo.get(n);s?t.type!==0&&s.type===3?this.Jo=this.Jo.insert(n,t):t.type===3&&s.type!==1?this.Jo=this.Jo.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Jo=this.Jo.remove(n):t.type===1&&s.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:t.doc}):I():this.Jo=this.Jo.insert(n,t)}Yo(){const t=[];return this.Jo.inorderTraversal((n,s)=>{t.push(s)}),t}}class Zt{constructor(t,n,s,i,r,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Zt(t,n,Jt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.Xo=void 0,this.listeners=[]}}class ql{constructor(){this.queries=new Me(t=>po(t),Sn),this.onlineState="Unknown",this.Zo=new Set}}async function jl(e,t){const n=S(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new $l),i)try{r.Xo=await n.onListen(s)}catch(o){const a=fi(o,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.tc(n.onlineState),r.Xo&&t.ec(r.Xo)&&pi(n)}async function Bl(e,t){const n=S(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Kl(e,t){const n=S(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.ec(i)&&(s=!0);o.Xo=i}}s&&pi(n)}function Gl(e,t,n){const s=S(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function pi(e){e.Zo.forEach(t=>{t.next()})}class Hl{constructor(t,n,s){this.query=t,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=s||{}}ec(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Zt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(t)&&(this.nc.next(t),n=!0):this.oc(t,this.onlineState)&&(this.cc(t),n=!0),this.ic=t,n}onError(t){this.nc.error(t)}tc(t){this.onlineState=t;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,t)&&(this.cc(this.ic),n=!0),n}oc(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.uc||!s)&&(!t.docs.isEmpty()||n==="Offline")}rc(t){if(t.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(t){t=Zt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.sc=!0,this.nc.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){this.key=t}}class oa{constructor(t){this.key=t}}class zl{constructor(t,n){this.query=t,this.dc=n,this._c=null,this.current=!1,this.wc=R(),this.mutatedKeys=R(),this.mc=go(t),this.gc=new Jt(this.mc)}get yc(){return this.dc}Ic(t,n){const s=n?n.Ec:new ia,i=n?n.gc:this.gc;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Tn(this.query)&&i.size===this.query.limit?i.last():null,h=In(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const f=i.get(u),m=Qs(this.query,l)?l:null,v=!!f&&this.mutatedKeys.has(f.key),N=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let L=!1;f&&m?f.data.isEqual(m.data)?v!==N&&(s.track({type:3,doc:m}),L=!0):this.Tc(f,m)||(s.track({type:2,doc:m}),L=!0,(c&&this.mc(m,c)>0||h&&this.mc(m,h)<0)&&(a=!0)):!f&&m?(s.track({type:0,doc:m}),L=!0):f&&!m&&(s.track({type:1,doc:f}),L=!0,(c||h)&&(a=!0)),L&&(m?(o=o.add(m),r=N?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),Tn(this.query)||In(this.query))for(;o.size>this.query.limit;){const u=Tn(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{gc:o,Ec:s,ks:a,mutatedKeys:r}}Tc(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.gc;this.gc=t.gc,this.mutatedKeys=t.mutatedKeys;const r=t.Ec.Yo();r.sort((h,u)=>function(l,f){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return m(l)-m(f)}(h.type,u.type)||this.mc(h.doc,u.doc)),this.Ac(s);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,c=a!==this._c;return this._c=a,r.length!==0||c?{snapshot:new Zt(this.query,t.gc,i,r,t.mutatedKeys,a===0,c,!1),Pc:o}:{Pc:o}}tc(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new ia,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(t){return!this.dc.has(t)&&!!this.gc.has(t)&&!this.gc.get(t).hasLocalMutations}Ac(t){t&&(t.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=t.current)}Rc(){if(!this.current)return[];const t=this.wc;this.wc=R(),this.gc.forEach(s=>{this.bc(s.key)&&(this.wc=this.wc.add(s.key))});const n=[];return t.forEach(s=>{this.wc.has(s)||n.push(new oa(s))}),this.wc.forEach(s=>{t.has(s)||n.push(new ra(s))}),n}vc(t){this.dc=t.Ks,this.wc=R();const n=this.Ic(t.documents);return this.applyChanges(n,!0)}Vc(){return Zt.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class Wl{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Ql{constructor(t){this.key=t,this.Sc=!1}}class Xl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new Me(a=>po(a),Sn),this.Nc=new Map,this.xc=new Set,this.kc=new F(E.comparator),this.Oc=new Map,this.Mc=new oi,this.$c={},this.Fc=new Map,this.Bc=Xt.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function Yl(e,t){const n=ad(e);let s,i;const r=n.Cc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Vc();else{const o=await ll(n.localStore,bt(t));n.isPrimaryClient&&Xo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Jl(n,t,s,a==="current")}return i}async function Jl(e,t,n,s){e.Uc=(u,l,f)=>async function(m,v,N,L){let rt=v.view.Ic(N);rt.ks&&(rt=await Go(m.localStore,v.query,!1).then(({documents:se})=>v.view.Ic(se,rt)));const ot=L&&L.targetChanges.get(v.targetId),ne=v.view.applyChanges(rt,m.isPrimaryClient,ot);return da(m,v.targetId,ne.Pc),ne.snapshot}(e,u,l,f);const i=await Go(e.localStore,t,!0),r=new zl(t,i.Ks),o=r.Ic(i.documents),a=Oe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=r.applyChanges(o,e.isPrimaryClient,a);da(e,n,c.Pc);const h=new Wl(t,n,r);return e.Cc.set(t,h),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}async function Zl(e,t){const n=S(e),s=n.Cc.get(t),i=n.Nc.get(s.targetId);if(i.length>1)return n.Nc.set(s.targetId,i.filter(r=>!Sn(r,t))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ri(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Yo(n.remoteStore,s.targetId),gi(n,s.targetId)}).catch(xe)):(gi(n,s.targetId),await ri(n.localStore,s.targetId,!0))}async function td(e,t,n){const s=cd(e);try{const i=await function(r,o){const a=S(r),c=et.now(),h=o.reduce((l,f)=>l.add(f.key),R());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",l=>a.Us.Es(l,h).next(f=>{u=f;const m=[];for(const v of o){const N=Tu(v,u.get(v.key));N!=null&&m.push(new zt(v.key,N,oo(N.value.mapValue),gt.exists(!0)))}return a.gs.addMutationBatch(l,c,m,o)})).then(l=>(l.applyToLocalDocumentSet(u),{batchId:l.batchId,changes:u}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.$c[r.currentUser.toKey()];c||(c=new F(b)),c=c.insert(o,a),r.$c[r.currentUser.toKey()]=c}(s,i.batchId,n),await Ve(s,i.changes),await Pn(s.remoteStore)}catch(i){const r=fi(i,"Failed to persist write");n.reject(r)}}async function aa(e,t){const n=S(e);try{const s=await cl(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.Oc.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?D(o.Sc):i.removedDocuments.size>0&&(D(o.Sc),o.Sc=!1))}),await Ve(n,s,t)}catch(s){await xe(s)}}function ca(e,t,n){const s=S(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Cc.forEach((r,o)=>{const a=o.view.tc(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=S(r);a.onlineState=o;let c=!1;a.queries.forEach((h,u)=>{for(const l of u.listeners)l.tc(o)&&(c=!0)}),c&&pi(a)}(s.eventManager,t),i.length&&s.Dc.To(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ed(e,t,n){const s=S(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.Oc.get(t),r=i&&i.key;if(r){let o=new F(E.comparator);o=o.insert(r,z.newNoDocument(r,C.min()));const a=R().add(r),c=new Rn(C.min(),new Map,new G(b),o,a);await aa(s,c),s.kc=s.kc.remove(r),s.Oc.delete(t),mi(s)}else await ri(s.localStore,t,!1).then(()=>gi(s,t,n)).catch(xe)}async function nd(e,t){const n=S(e),s=t.batch.batchId;try{const i=await al(n.localStore,t);ua(n,s,null),ha(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ve(n,i)}catch(i){await xe(i)}}async function sd(e,t,n){const s=S(e);try{const i=await function(r,o){const a=S(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return a.gs.lookupMutationBatch(c,o).next(u=>(D(u!==null),h=u.keys(),a.gs.removeMutationBatch(c,u))).next(()=>a.gs.performConsistencyCheck(c)).next(()=>a.Us.Es(c,h))})}(s.localStore,t);ua(s,t,n),ha(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ve(s,i)}catch(i){await xe(i)}}function ha(e,t){(e.Fc.get(t)||[]).forEach(n=>{n.resolve()}),e.Fc.delete(t)}function ua(e,t,n){const s=S(e);let i=s.$c[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.$c[s.currentUser.toKey()]=i}}function gi(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.Nc.get(t))e.Cc.delete(s),n&&e.Dc.qc(s,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach(s=>{e.Mc.containsKey(s)||la(e,s)})}function la(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);n!==null&&(Yo(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),mi(e))}function da(e,t,n){for(const s of n)s instanceof ra?(e.Mc.addReference(s.key,t),id(e,s)):s instanceof oa?(y("SyncEngine","Document no longer in limbo: "+s.key),e.Mc.removeReference(s.key,t),e.Mc.containsKey(s.key)||la(e,s.key)):I()}function id(e,t){const n=t.key,s=n.path.canonicalString();e.kc.get(n)||e.xc.has(s)||(y("SyncEngine","New document in limbo: "+n),e.xc.add(s),mi(e))}function mi(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new E(O.fromString(t)),s=e.Bc.next();e.Oc.set(s,new Ql(n)),e.kc=e.kc.insert(n,s),Xo(e.remoteStore,new Rt(bt(zs(n.path)),s,2,$s.A))}}async function Ve(e,t,n){const s=S(e),i=[],r=[],o=[];s.Cc.isEmpty()||(s.Cc.forEach((a,c)=>{o.push(s.Uc(c,t,n).then(h=>{if(h){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,h.fromCache?"not-current":"current"),i.push(h);const u=ii.Ss(c.targetId,h);r.push(u)}}))}),await Promise.all(o),s.Dc.To(i),await async function(a,c){const h=S(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>p.forEach(c,l=>p.forEach(l.vs,f=>h.persistence.referenceDelegate.addReference(u,l.targetId,f)).next(()=>p.forEach(l.Vs,f=>h.persistence.referenceDelegate.removeReference(u,l.targetId,f)))))}catch(u){if(!Le(u))throw u;y("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const l=u.targetId;if(!u.fromCache){const f=h.Ms.get(l),m=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(m);h.Ms=h.Ms.insert(l,v)}}}(s.localStore,r))}async function rd(e,t){const n=S(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const s=await Bo(n.localStore,t);n.currentUser=t,function(i,r){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,r))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ve(n,s.qs)}}function od(e,t){const n=S(e),s=n.Oc.get(t);if(s&&s.Sc)return R().add(s.key);{let i=R();const r=n.Nc.get(t);if(!r)return i;for(const o of r){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function ad(e){const t=S(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=aa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=od.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ed.bind(null,t),t.Dc.To=Kl.bind(null,t.eventManager),t.Dc.qc=Gl.bind(null,t.eventManager),t}function cd(e){const t=S(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=sd.bind(null,t),t}class hd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.O=Ln(t.databaseInfo.databaseId),this.sharedClientState=this.Gc(t),this.persistence=this.jc(t),await this.persistence.start(),this.gcScheduler=this.Qc(t),this.localStore=this.Wc(t)}Qc(t){return null}Wc(t){return ol(this.persistence,new il,t.initialUser,this.O)}jc(t){return new vl(ai.bi,this.O)}Gc(t){return new El}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ud{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ca(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rd.bind(null,this.syncEngine),await Ul(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ql}createDatastore(t){const n=Ln(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Cl(i));var i;return function(r,o,a,c){return new kl(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>ca(this.syncEngine,a,0),o=zo.Vt()?new zo:new Tl,new Dl(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,h){const u=new Xl(s,i,r,o,a,c);return h&&(u.Lc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=S(t);y("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await Pe(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Hc(this.observer.next,t)}error(t){this.observer.error?this.Hc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Jc(){this.muted=!0}Hc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Y.UNAUTHENTICATED,this.clientId=Jr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=fi(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function fd(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Bo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function pd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gd(e);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>sa(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>sa(t.remoteStore,r)),e.onlineComponents=t}async function gd(e){return e.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await fd(e,new hd)),e.offlineComponents}async function fa(e){return e.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await pd(e,new ud)),e.onlineComponents}function md(e){return fa(e).then(t=>t.syncEngine)}async function pa(e){const t=await fa(e),n=t.eventManager;return n.onListen=Yl.bind(null,t.syncEngine),n.onUnlisten=Zl.bind(null,t.syncEngine),n}const ga=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e,t,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yd(e,t,n,s){if(t===!0&&s===!0)throw new w(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ya(e){if(!E.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function va(e){if(E.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function yi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Ot(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yi(e);throw new w(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,yd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wa({}),this._settingsFrozen=!1,t instanceof jt?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jt(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wa(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bh;switch(n.type){case"gapi":const s=n.client;return D(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Hh(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ga.get(t);n&&(y("ComponentProvider","Removing Datastore"),ga.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class Fe{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Fe(this.firestore,t,this._query)}}class yt extends Fe{constructor(t,n,s){super(t,n,zs(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new E(t))}withConverter(t){return new yt(this.firestore,t,this._path)}}function $d(e,t,...n){if(e=at(e),ma("collection","path",t),e instanceof vi){const s=O.fromString(t,...n);return va(s),new yt(e,null,s)}{if(!(e instanceof st||e instanceof yt))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return va(s),new yt(e.firestore,null,s)}}function vd(e,t,...n){if(e=at(e),arguments.length===1&&(t=Jr.R()),ma("doc","path",t),e instanceof vi){const s=O.fromString(t,...n);return ya(s),new st(e,null,new E(s))}{if(!(e instanceof st||e instanceof yt))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return ya(s),new st(e.firestore,e instanceof yt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Wo(this,"async_queue_retry"),this.yu=()=>{const n=ci();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const t=ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.fu){this.fu=!0,this.mu=t||!1;const n=ci();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(t){if(this.pu(),this.fu)return new Promise(()=>{});const n=new At;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.lu.push(t),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(t){if(!Le(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(t){const n=this.hu.then(()=>(this.wu=!0,t().catch(s=>{this._u=s,this.wu=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.wu=!1,s))));return this.hu=n,n}enqueueAfterDelay(t,n,s){this.pu(),this.gu.indexOf(t)>-1&&(n=0);const i=di.createAndSchedule(this,t,n,s,r=>this.Tu(r));return this.du.push(i),i}pu(){this._u&&I()}verifyOperationInProgress(){}async Au(){let t;do t=this.hu,await t;while(t!==this.hu)}Ru(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}Pu(t){return this.Au().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Au()})}bu(t){this.gu.push(t)}Tu(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}function Ea(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class te extends vi{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new wd,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ia(this),this._firestoreClient.terminate()}}function Ed(e=_c()){return Nc(e,"firestore").getImmediate()}function Ta(e){return e._firestoreClient||Ia(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ia(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Jh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new dd(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ee(B.fromBase64String(t))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ee(B.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return b(this._lat,t._lat)||b(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=/^__.*__$/;class Id{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new zt(t,this.data,this.fieldMask,n,this.fieldTransforms):new bn(t,this.data,n,this.fieldTransforms)}}class Sa{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new zt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ca(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Ei{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.O=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(t){return new Ei(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Su({path:s,Cu:!1});return i.Nu(t),i}xu(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Su({path:s,Cu:!1});return i.vu(),i}ku(t){return this.Su({path:void 0,Cu:!0})}Ou(t){return qn(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Nu(this.path.get(t))}Nu(t){if(t.length===0)throw this.Ou("Document fields must not be empty");if(Ca(this.Vu)&&Td.test(t))throw this.Ou('Document fields cannot begin and end with "__"')}}class Sd{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.O=s||Ln(t)}Fu(t,n,s,i=!1){return new Ei({Vu:t,methodName:n,$u:s,path:J.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Aa(e){const t=e._freezeSettings(),n=Ln(e._databaseId);return new Sd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Cd(e,t,n,s,i,r={}){const o=e.Fu(r.merge||r.mergeFields?2:0,t,n,i);Ii("Data must be an object, but it was:",o,s);const a=Na(s,o);let c,h;if(r.merge)c=new Se(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const l of r.mergeFields){const f=Si(t,l,n);if(!o.contains(f))throw new w(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ba(u,f)||u.push(f)}c=new Se(u),h=o.fieldTransforms.filter(l=>c.covers(l.field))}else c=null,h=o.fieldTransforms;return new Id(new nt(a),c,h)}class Un extends Fn{_toFieldTransform(t){if(t.Vu!==2)throw t.Vu===1?t.Ou(`${this._methodName}() can only appear at the top level of your update data`):t.Ou(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Un}}class Ti extends Fn{_toFieldTransform(t){return new yu(t.path,new De)}isEqual(t){return t instanceof Ti}}function Ad(e,t,n,s){const i=e.Fu(1,t,n);Ii("Data must be an object, but it was:",i,s);const r=[],o=nt.empty();Nt(s,(c,h)=>{const u=Ci(t,c,n);h=at(h);const l=i.xu(u);if(h instanceof Un)r.push(u);else{const f=$n(h,l);f!=null&&(r.push(u),o.set(u,f))}});const a=new Se(r);return new Sa(o,a,i.fieldTransforms)}function Nd(e,t,n,s,i,r){const o=e.Fu(1,t,n),a=[Si(t,s,n)],c=[i];if(r.length%2!=0)throw new w(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(Si(t,r[f])),c.push(r[f+1]);const h=[],u=nt.empty();for(let f=a.length-1;f>=0;--f)if(!ba(h,a[f])){const m=a[f];let v=c[f];v=at(v);const N=o.xu(m);if(v instanceof Un)h.push(m);else{const L=$n(v,N);L!=null&&(h.push(m),u.set(m,L))}}const l=new Se(h);return new Sa(u,l,o.fieldTransforms)}function $n(e,t){if(ka(e=at(e)))return Ii("Unsupported field value:",t,e),Na(e,t);if(e instanceof Fn)return function(n,s){if(!Ca(s.Vu))throw s.Ou(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Cu&&t.Vu!==4)throw t.Ou("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=$n(o,s.ku(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pu(s.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=et.fromDate(n);return{timestampValue:On(s.O,i)}}if(n instanceof et){const i=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:On(s.O,i)}}if(n instanceof wi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ee)return{bytesValue:Vo(s.O,n._byteString)};if(n instanceof st){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Js(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Ou(`Unsupported field value: ${yi(n)}`)}(e,t)}function Na(e,t){const n={};return to(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Nt(e,(s,i)=>{const r=$n(i,t.Du(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function ka(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof et||e instanceof wi||e instanceof ee||e instanceof st||e instanceof Fn)}function Ii(e,t,n){if(!ka(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=yi(n);throw s==="an object"?t.Ou(e+" a custom object"):t.Ou(e+" "+s)}}function Si(e,t,n){if((t=at(t))instanceof Vn)return t._internalPath;if(typeof t=="string")return Ci(e,t);throw qn("Field path arguments must be of type string or ",e,!1,void 0,n)}const kd=new RegExp("[~\\*/\\[\\]]");function Ci(e,t,n){if(t.search(kd)>=0)throw qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vn(...t.split("."))._internalPath}catch{throw qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function qn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(d.INVALID_ARGUMENT,a+e+c)}function ba(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ai("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bd extends Da{data(){return super.data()}}function Ai(e,t){return typeof t=="string"?Ci(e,t):t instanceof Vn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ra extends Da{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ai("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class jn extends Ra{data(t={}){return super.data(t)}}class Dd{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ue(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new jn(this._firestore,this._userDataWriter,s.key,s,new Ue(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new jn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new jn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Rd(o.type),doc:a,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(e){if(In(e)&&e.explicitOrderBy.length===0)throw new w(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Od{}function qd(e,...t){for(const n of t)e=n._apply(e);return e}class Ld extends Od{constructor(t,n){super(),this.Uu=t,this.Gu=n,this.type="orderBy"}_apply(t){const n=function(s,i,r){if(s.startAt!==null)throw new w(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new w(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ht(i,r);return function(a,c){if(lo(a)===null){const h=fo(a);h!==null&&xd(a,h,c.field)}}(s,o),o}(t._query,this.Uu,this.Gu);return new Fe(t.firestore,t.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new ke(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function jd(e,t="asc"){const n=t,s=Ai("orderBy",e);return new Ld(s,n)}function xd(e,t,n){if(!n.isEqual(t))throw new w(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{convertValue(t,n="none"){switch(kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(qt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Nt(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new wi(M(t.latitude),M(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=no(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ce(t));default:return null}}convertTimestamp(t){const n=pt(t);return new et(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);D(jo(s));const i=new jt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class _a extends Md{constructor(t){super(),this.firestore=t}convertBytes(t){return new ee(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function Bd(e,t,n,...s){e=Ot(e,st);const i=Ot(e.firestore,te),r=Aa(i);let o;return o=typeof(t=at(t))=="string"||t instanceof Vn?Nd(r,"updateDoc",e._key,t,n,s):Ad(r,"updateDoc",e._key,t),Ni(i,[o.toMutation(e._key,gt.exists(!0))])}function Kd(e){return Ni(Ot(e.firestore,te),[new bo(e._key,gt.none())])}function Gd(e,t){const n=Ot(e.firestore,te),s=vd(e),i=Pd(e.converter,t);return Ni(n,[Cd(Aa(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,gt.exists(!1))]).then(()=>s)}function Hd(e,...t){var n,s,i;e=at(e);let r={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Ea(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Ea(t[o])){const l=t[o];t[o]=(n=l.next)===null||n===void 0?void 0:n.bind(l),t[o+1]=(s=l.error)===null||s===void 0?void 0:s.bind(l),t[o+2]=(i=l.complete)===null||i===void 0?void 0:i.bind(l)}let c,h,u;if(e instanceof st)h=Ot(e.firestore,te),u=zs(e._key.path),c={next:l=>{t[o]&&t[o](Vd(h,e,l))},error:t[o+1],complete:t[o+2]};else{const l=Ot(e,Fe);h=Ot(l.firestore,te),u=l._query;const f=new _a(h);c={next:m=>{t[o]&&t[o](new Dd(h,f,l,m))},error:t[o+1],complete:t[o+2]},_d(e._query)}return function(l,f,m,v){const N=new ld(v),L=new Hl(f,N,m);return l.asyncQueue.enqueueAndForget(async()=>jl(await pa(l),L)),()=>{N.Jc(),l.asyncQueue.enqueueAndForget(async()=>Bl(await pa(l),L))}}(Ta(h),u,a,c)}function Ni(e,t){return function(n,s){const i=new At;return n.asyncQueue.enqueueAndForget(async()=>td(await md(n),s,i)),i.promise}(Ta(e),t)}function Vd(e,t,n){const s=n.docs.get(t._key),i=new _a(e);return new Ra(e,i,t._key,s,new Ue(n.hasPendingWrites,n.fromCache),t.converter)}function zd(){return new Ti("serverTimestamp")}(function(e,t=!0){(function(n){Ut=n})(Dc),zn(new je("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new te(i,new Kh(n.getProvider("auth-internal")),new Wh(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),Lt(Qr,"3.4.5",e),Lt(Qr,"3.4.5","esm2017")})();const Fd={apiKey:"AIzaSyB62aK-w4r6U1gC9XxZL-cS6BswsaMJnb0",authDomain:"garena-free-fire-85c70.firebaseapp.com",projectId:"garena-free-fire-85c70",storageBucket:"garena-free-fire-85c70.appspot.com",messagingSenderId:"1010216807066",appId:"1:1010216807066:web:79fabb20ae668606d94d23",measurementId:"G-PM62XX7LBF"},Ud=Rc(Fd),Wd=Ed(Ud);export{Hd as H,Bd as Q,Kd as W,$d as a,Wd as d,vd as i,zd as n,jd as p,qd as w,Gd as z};
