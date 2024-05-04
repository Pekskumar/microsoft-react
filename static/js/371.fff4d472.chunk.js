/*! For license information please see 371.fff4d472.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmicrosoft_prakash=self.webpackChunkmicrosoft_prakash||[]).push([[371],{6371:(e,t,r)=>{r.r(t),r.d(t,{NestedAppAuthController:()=>_});var n=r(9848),o=r(471),i=r(1392),s=r(8648),c=r(4096),a=r(8439),u=r(385),d=r(7056),l=r(4012),p=r(1670),h=r(2989),A=r(7118),g=r(5788),v=r(6823);const E="USER_INTERACTION_REQUIRED",m="USER_CANCEL",C="NO_NETWORK",k="TRANSIENT_ERROR",I="PERSISTENT_ERROR",w="DISABLED",T="ACCOUNT_UNAVAILABLE",f="NESTED_APP_AUTH_UNAVAILABLE";class R{constructor(e,t,r,n){this.clientId=e,this.clientCapabilities=t,this.crypto=r,this.logger=n}toNaaTokenRequest(e){var t;let r;r=void 0===e.extraQueryParameters?new Map:new Map(Object.entries(e.extraQueryParameters));const n=(new a.W).addClientCapabilitiesToClaims(e.claims,this.clientCapabilities),o=e.scopes||u.aZ;return{platformBrokerId:null===(t=e.account)||void 0===t?void 0:t.homeAccountId,clientId:this.clientId,authority:e.authority,scope:o.join(" "),correlationId:void 0!==e.correlationId?e.correlationId:this.crypto.createNewGuid(),claims:d.$.isEmptyObj(n)?void 0:n,state:e.state,authenticationScheme:e.authenticationScheme||u.IO.BEARER,extraParameters:r}}fromNaaTokenResponse(e,t,r){if(!t.token.id_token||!t.token.access_token)throw(0,l.SB)(p.Bh);const n=new Date(1e3*(r+(t.token.expires_in||0))),o=h.My(t.token.id_token,this.crypto.base64Decode),i=this.fromNaaAccountInfo(t.account,o),s=t.token.scope||e.scope;return{authority:t.token.authority||i.environment,uniqueId:i.localAccountId,tenantId:i.tenantId,scopes:s.split(" "),account:i,idToken:t.token.id_token,idTokenClaims:o,accessToken:t.token.access_token,fromCache:!0,expiresOn:n,tokenType:e.authenticationScheme||u.IO.BEARER,correlationId:e.correlationId,extExpiresOn:n,state:e.state}}fromNaaAccountInfo(e,t){const r=t||e.idTokenClaims,n=e.localAccountId||(null===r||void 0===r?void 0:r.oid)||(null===r||void 0===r?void 0:r.sub)||"",o=e.tenantId||(null===r||void 0===r?void 0:r.tid)||"",i=e.homeAccountId||"".concat(n,".").concat(o),s=e.username||(null===r||void 0===r?void 0:r.preferred_username)||"",c=e.name||(null===r||void 0===r?void 0:r.name);return{homeAccountId:i,environment:e.environment,tenantId:o,username:s,localAccountId:n,name:c,idToken:e.idToken,idTokenClaims:r}}fromBridgeError(e){if(!function(e){return void 0!==e.status}(e))return new v.lR("unknown_error","An unknown error occurred");switch(e.status){case m:return new l.eB(p.fn);case C:return new l.eB(p.l7);case T:return new l.eB(p.rk);case w:return new l.eB(p.CN);case f:return new l.eB(e.code||p.CN,e.description);case k:case I:return new A.g(e.code,e.description);case E:return new g.CB(e.code,e.description);default:return new v.lR(e.code,e.description)}}}const y={code:"unsupported_method",desc:"The PKCE code challenge and verifier could not be generated."};class N extends v.lR{constructor(e,t){super(e,t),Object.setPrototypeOf(this,N.prototype),this.name="NestedAppAuthError"}static createUnsupportedError(){return new N(y.code,y.desc)}}var U=r(1182),S=r(7498);class _{constructor(e){this.operatingContext=e;const t=this.operatingContext.getBridgeProxy();if(void 0===t)throw new Error("unexpected: bridgeProxy is undefined");this.bridgeProxy=t,this.config=e.getConfig(),this.logger=this.operatingContext.getLogger(),this.performanceClient=this.config.telemetry.client,this.browserCrypto=e.isBrowserEnvironment()?new c.M(this.logger,this.performanceClient):n.j,this.eventHandler=new U.J(this.logger,this.browserCrypto),this.nestedAppAuthAdapter=new R(this.config.auth.clientId,this.config.auth.clientCapabilities,this.browserCrypto,this.logger)}getBrowserStorage(){throw N.createUnsupportedError()}getEventHandler(){return this.eventHandler}static async createController(e){const t=new _(e);return Promise.resolve(t)}initialize(){return Promise.resolve()}ensureValidRequest(e){return null!==e&&void 0!==e&&e.correlationId?e:{...e,correlationId:this.browserCrypto.createNewGuid()}}async acquireTokenInteractive(e){const t=this.ensureValidRequest(e);this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_START,s.X8.Popup,t);const r=this.performanceClient.startMeasurement(o.MX.AcquireTokenPopup,t.correlationId);null===r||void 0===r||r.add({nestedAppAuthRequest:!0});try{const e=this.nestedAppAuthAdapter.toNaaTokenRequest(t),n=i._C(),o=await this.bridgeProxy.getTokenInteractive(e),c=this.nestedAppAuthAdapter.fromNaaTokenResponse(e,o,n);return this.operatingContext.setActiveAccount(c.account),this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_SUCCESS,s.X8.Popup,c),r.add({accessTokenSize:c.accessToken.length,idTokenSize:c.idToken.length}),r.end({success:!0,requestId:c.requestId}),c}catch(n){const e=this.nestedAppAuthAdapter.fromBridgeError(n);throw this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_FAILURE,s.X8.Popup,null,n),r.end({success:!1},n),e}}async acquireTokenSilentInternal(e){const t=this.ensureValidRequest(e);this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_START,s.X8.Silent,t);const r=this.performanceClient.startMeasurement(o.MX.SsoSilent,t.correlationId);null===r||void 0===r||r.increment({visibilityChangeCount:0}),null===r||void 0===r||r.add({nestedAppAuthRequest:!0});try{const e=this.nestedAppAuthAdapter.toNaaTokenRequest(t),n=i._C(),o=await this.bridgeProxy.getTokenSilent(e),c=this.nestedAppAuthAdapter.fromNaaTokenResponse(e,o,n);return this.operatingContext.setActiveAccount(c.account),this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_SUCCESS,s.X8.Silent,c),null===r||void 0===r||r.add({accessTokenSize:c.accessToken.length,idTokenSize:c.idToken.length}),null===r||void 0===r||r.end({success:!0,requestId:c.requestId}),c}catch(n){const e=this.nestedAppAuthAdapter.fromBridgeError(n);throw this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_FAILURE,s.X8.Silent,null,n),null===r||void 0===r||r.end({success:!1},n),e}}async acquireTokenPopup(e){return this.acquireTokenInteractive(e)}acquireTokenRedirect(e){throw N.createUnsupportedError()}async acquireTokenSilent(e){return this.acquireTokenSilentInternal(e)}acquireTokenByCode(e){throw N.createUnsupportedError()}acquireTokenNative(e,t,r){throw N.createUnsupportedError()}acquireTokenByRefreshToken(e,t){throw N.createUnsupportedError()}addEventCallback(e){return this.eventHandler.addEventCallback(e)}removeEventCallback(e){this.eventHandler.removeEventCallback(e)}addPerformanceCallback(e){throw N.createUnsupportedError()}removePerformanceCallback(e){throw N.createUnsupportedError()}enableAccountStorageEvents(){throw N.createUnsupportedError()}disableAccountStorageEvents(){throw N.createUnsupportedError()}getAccount(e){throw N.createUnsupportedError()}getAccountByHomeId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.homeAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByLocalId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.localAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByUsername(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.username===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAllAccounts(){const e=this.operatingContext.getActiveAccount();return void 0!==e?[this.nestedAppAuthAdapter.fromNaaAccountInfo(e)]:[]}handleRedirectPromise(e){return Promise.resolve(null)}loginPopup(e){if(void 0!==e)return this.acquireTokenInteractive(e);throw N.createUnsupportedError()}loginRedirect(e){throw N.createUnsupportedError()}logout(e){throw N.createUnsupportedError()}logoutRedirect(e){throw N.createUnsupportedError()}logoutPopup(e){throw N.createUnsupportedError()}ssoSilent(e){return this.acquireTokenSilentInternal(e)}getTokenCache(){throw N.createUnsupportedError()}getLogger(){return this.logger}setLogger(e){this.logger=e}setActiveAccount(e){this.logger.warning("nestedAppAuth does not support setActiveAccount")}getActiveAccount(){const e=this.operatingContext.getActiveAccount();return void 0!==e?this.nestedAppAuthAdapter.fromNaaAccountInfo(e):null}initializeWrapperLibrary(e,t){}setNavigationClient(e){this.logger.warning("setNavigationClient is not supported in nested app auth")}getConfiguration(){return this.config}isBrowserEnv(){return this.operatingContext.isBrowserEnvironment()}getBrowserCrypto(){return this.browserCrypto}getPerformanceClient(){throw N.createUnsupportedError()}getRedirectResponse(){throw N.createUnsupportedError()}async clearCache(e){throw N.createUnsupportedError()}async hydrateCache(e,t){throw N.createUnsupportedError()}}}}]);
//# sourceMappingURL=371.fff4d472.chunk.js.map