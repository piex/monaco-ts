/*! For license information please see 3513.a028a0e7.js.LICENSE.txt */
"use strict";(self.webpackChunkmonaco_ts=self.webpackChunkmonaco_ts||[]).push([["3513"],{45288:function(e,t,n){let r,i;n.r(t),n.d(t,{CompletionAdapter:function(){return ti},DefinitionAdapter:function(){return tl},DiagnosticsAdapter:function(){return tr},DocumentColorAdapter:function(){return ty},DocumentFormattingEditProvider:function(){return tw},DocumentHighlightAdapter:function(){return tg},DocumentLinkAdapter:function(){return t_},DocumentRangeFormattingEditProvider:function(){return tk},DocumentSymbolAdapter:function(){return tm},FoldingRangeAdapter:function(){return tE},HoverAdapter:function(){return tc},ReferenceAdapter:function(){return tf},RenameAdapter:function(){return tp},SelectionRangeAdapter:function(){return tC},WorkerManager:function(){return e9},fromPosition:function(){return to},fromRange:function(){return ta},setupMode:function(){return tx},toRange:function(){return ts},toTextEdit:function(){return tu}});var o,a,s,u,c,d,g,l,h,f,p,m,v,_,w,k,b,y,E,C,x,A,I,S,R,D,T,M,P,F,L,j,O,N,W,U,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,et,en,er,ei,eo,ea,es,eu,ec,ed,eg,el,eh,ef,ep,em,ev,e_,ew,ek,eb,ey,eE,eC,ex,eA,eI,eS,eR,eD,eT,eM,eP,eF,eL,ej,eO,eN,eW,eU,eV,eH,eK,ez,eX,eB,e$,eq,eQ,eG,eJ,eY,eZ,e0,e1,e2=n(6586),e4=Object.defineProperty,e3=Object.getOwnPropertyDescriptor,e8=Object.getOwnPropertyNames,e7=Object.prototype.hasOwnProperty,e6=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of e8(t))!e7.call(e,i)&&i!==n&&e4(e,i,{get:()=>t[i],enumerable:!(r=e3(t,i))||r.enumerable});return e},e5={};e6(e5,r=e2,"default"),i&&e6(i,r,"default");var e9=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!!this._worker)Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),!this._client&&(this._worker=e5.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then(e=>{t=e}).then(t=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(e=>t)}};(o=Y||(Y={})).MIN_VALUE=-2147483648,o.MAX_VALUE=2147483647,(a=Z||(Z={})).MIN_VALUE=0,a.MAX_VALUE=2147483647,(s=ee||(ee={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=Z.MAX_VALUE),t===Number.MAX_VALUE&&(t=Z.MAX_VALUE),{line:e,character:t}},s.is=function(e){return e1.objectLiteral(e)&&e1.uinteger(e.line)&&e1.uinteger(e.character)},(u=et||(et={})).create=function(e,t,n,r){if(e1.uinteger(e)&&e1.uinteger(t)&&e1.uinteger(n)&&e1.uinteger(r))return{start:ee.create(e,t),end:ee.create(n,r)};if(ee.is(e)&&ee.is(t))return{start:e,end:t};throw Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},u.is=function(e){return e1.objectLiteral(e)&&ee.is(e.start)&&ee.is(e.end)},(c=en||(en={})).create=function(e,t){return{uri:e,range:t}},c.is=function(e){return e1.defined(e)&&et.is(e.range)&&(e1.string(e.uri)||e1.undefined(e.uri))},(d=er||(er={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},d.is=function(e){return e1.defined(e)&&et.is(e.targetRange)&&e1.string(e.targetUri)&&(et.is(e.targetSelectionRange)||e1.undefined(e.targetSelectionRange))&&(et.is(e.originSelectionRange)||e1.undefined(e.originSelectionRange))},(g=ei||(ei={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},g.is=function(e){return e1.numberRange(e.red,0,1)&&e1.numberRange(e.green,0,1)&&e1.numberRange(e.blue,0,1)&&e1.numberRange(e.alpha,0,1)},(l=eo||(eo={})).create=function(e,t){return{range:e,color:t}},l.is=function(e){return et.is(e.range)&&ei.is(e.color)},(h=ea||(ea={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},h.is=function(e){return e1.string(e.label)&&(e1.undefined(e.textEdit)||ep.is(e))&&(e1.undefined(e.additionalTextEdits)||e1.typedArray(e.additionalTextEdits,ep.is))},(f=es||(es={})).Comment="comment",f.Imports="imports",f.Region="region",(p=eu||(eu={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return e1.defined(n)&&(o.startCharacter=n),e1.defined(r)&&(o.endCharacter=r),e1.defined(i)&&(o.kind=i),o},p.is=function(e){return e1.uinteger(e.startLine)&&e1.uinteger(e.startLine)&&(e1.undefined(e.startCharacter)||e1.uinteger(e.startCharacter))&&(e1.undefined(e.endCharacter)||e1.uinteger(e.endCharacter))&&(e1.undefined(e.kind)||e1.string(e.kind))},(m=ec||(ec={})).create=function(e,t){return{location:e,message:t}},m.is=function(e){return e1.defined(e)&&en.is(e.location)&&e1.string(e.message)},(v=ed||(ed={})).Error=1,v.Warning=2,v.Information=3,v.Hint=4,(_=eg||(eg={})).Unnecessary=1,_.Deprecated=2,(el||(el={})).is=function(e){return null!=e&&e1.string(e.href)},(w=eh||(eh={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return e1.defined(n)&&(a.severity=n),e1.defined(r)&&(a.code=r),e1.defined(i)&&(a.source=i),e1.defined(o)&&(a.relatedInformation=o),a},w.is=function(e){var t;return e1.defined(e)&&et.is(e.range)&&e1.string(e.message)&&(e1.number(e.severity)||e1.undefined(e.severity))&&(e1.integer(e.code)||e1.string(e.code)||e1.undefined(e.code))&&(e1.undefined(e.codeDescription)||e1.string(null===(t=e.codeDescription)||void 0===t?void 0:t.href))&&(e1.string(e.source)||e1.undefined(e.source))&&(e1.undefined(e.relatedInformation)||e1.typedArray(e.relatedInformation,ec.is))},(k=ef||(ef={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return e1.defined(n)&&n.length>0&&(i.arguments=n),i},k.is=function(e){return e1.defined(e)&&e1.string(e.title)&&e1.string(e.command)},(b=ep||(ep={})).replace=function(e,t){return{range:e,newText:t}},b.insert=function(e,t){return{range:{start:e,end:e},newText:t}},b.del=function(e){return{range:e,newText:""}},b.is=function(e){return e1.objectLiteral(e)&&e1.string(e.newText)&&et.is(e.range)},(y=em||(em={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},y.is=function(e){return void 0!==e&&e1.objectLiteral(e)&&e1.string(e.label)&&(e1.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(e1.string(e.description)||void 0===e.description)},(ev||(ev={})).is=function(e){return"string"==typeof e},(E=e_||(e_={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},E.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},E.del=function(e,t){return{range:e,newText:"",annotationId:t}},E.is=function(e){return ep.is(e)&&(em.is(e.annotationId)||ev.is(e.annotationId))},(C=ew||(ew={})).create=function(e,t){return{textDocument:e,edits:t}},C.is=function(e){return e1.defined(e)&&eA.is(e.textDocument)&&Array.isArray(e.edits)},(x=ek||(ek={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},x.is=function(e){return e&&"create"===e.kind&&e1.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||e1.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||e1.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||ev.is(e.annotationId))},(A=eb||(eb={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},A.is=function(e){return e&&"rename"===e.kind&&e1.string(e.oldUri)&&e1.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||e1.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||e1.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||ev.is(e.annotationId))},(I=ey||(ey={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},I.is=function(e){return e&&"delete"===e.kind&&e1.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||e1.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||e1.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||ev.is(e.annotationId))},(eE||(eE={})).is=function(e){return e&&(void 0!==e.changes||void 0!==e.documentChanges)&&(void 0===e.documentChanges||e.documentChanges.every(function(e){return e1.string(e.kind)?ek.is(e)||eb.is(e)||ey.is(e):ew.is(e)}))};var te=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=ep.insert(e,t):ev.is(n)?(i=n,r=e_.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=e_.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=ep.replace(e,t):ev.is(n)?(i=n,r=e_.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=e_.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=ep.del(e):ev.is(t)?(r=t,n=e_.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=e_.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw Error("Text edit change is not configured to manage change annotations.")},e}(),tt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(ev.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw Error("Id "+n+" is already in use.");if(void 0===t)throw Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new tt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(function(e){if(ew.is(e)){var n=new te(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new te(e.changes[n]);t._textEditChanges[n]=r})):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(eA.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new te(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[e];if(!n){var r=[];this._workspaceEdit.changes[e]=r,n=new te(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new tt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(em.is(t)||ev.is(t)?r=t:n=t,void 0===r?i=ek.create(e,n):(o=ev.is(r)?r:this._changeAnnotations.manage(r),i=ek.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){var i,o,a;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(em.is(n)||ev.is(n)?i=n:r=n,void 0===i?o=eb.create(e,t,r):(a=ev.is(i)?i:this._changeAnnotations.manage(i),o=eb.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){var r,i,o;if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw Error("Workspace edit is not configured for document changes.");if(em.is(t)||ev.is(t)?r=t:n=t,void 0===r?i=ey.create(e,n):(o=ev.is(r)?r:this._changeAnnotations.manage(r),i=ey.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(S=eC||(eC={})).create=function(e){return{uri:e}},S.is=function(e){return e1.defined(e)&&e1.string(e.uri)},(R=ex||(ex={})).create=function(e,t){return{uri:e,version:t}},R.is=function(e){return e1.defined(e)&&e1.string(e.uri)&&e1.integer(e.version)},(D=eA||(eA={})).create=function(e,t){return{uri:e,version:t}},D.is=function(e){return e1.defined(e)&&e1.string(e.uri)&&(null===e.version||e1.integer(e.version))},(T=eI||(eI={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},T.is=function(e){return e1.defined(e)&&e1.string(e.uri)&&e1.string(e.languageId)&&e1.integer(e.version)&&e1.string(e.text)},(M=eS||(eS={})).PlainText="plaintext",M.Markdown="markdown",(P=eS||(eS={})).is=function(e){return e===P.PlainText||e===P.Markdown},(eR||(eR={})).is=function(e){return e1.objectLiteral(e)&&eS.is(e.kind)&&e1.string(e.value)},(F=eD||(eD={})).Text=1,F.Method=2,F.Function=3,F.Constructor=4,F.Field=5,F.Variable=6,F.Class=7,F.Interface=8,F.Module=9,F.Property=10,F.Unit=11,F.Value=12,F.Enum=13,F.Keyword=14,F.Snippet=15,F.Color=16,F.File=17,F.Reference=18,F.Folder=19,F.EnumMember=20,F.Constant=21,F.Struct=22,F.Event=23,F.Operator=24,F.TypeParameter=25,(L=eT||(eT={})).PlainText=1,L.Snippet=2,(eM||(eM={})).Deprecated=1,(j=eP||(eP={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},j.is=function(e){return e&&e1.string(e.newText)&&et.is(e.insert)&&et.is(e.replace)},(O=eF||(eF={})).asIs=1,O.adjustIndentation=2,(eL||(eL={})).create=function(e){return{label:e}},(ej||(ej={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(N=eO||(eO={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},N.is=function(e){return e1.string(e)||e1.objectLiteral(e)&&e1.string(e.language)&&e1.string(e.value)},(eN||(eN={})).is=function(e){return!!e&&e1.objectLiteral(e)&&(eR.is(e.contents)||eO.is(e.contents)||e1.typedArray(e.contents,eO.is))&&(void 0===e.range||et.is(e.range))},(eW||(eW={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(eU||(eU={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return e1.defined(t)&&(i.documentation=t),e1.defined(n)?i.parameters=n:i.parameters=[],i},(W=eV||(eV={})).Text=1,W.Read=2,W.Write=3,(eH||(eH={})).create=function(e,t){var n={range:e};return e1.number(t)&&(n.kind=t),n},(U=eK||(eK={})).File=1,U.Module=2,U.Namespace=3,U.Package=4,U.Class=5,U.Method=6,U.Property=7,U.Field=8,U.Constructor=9,U.Enum=10,U.Interface=11,U.Function=12,U.Variable=13,U.Constant=14,U.String=15,U.Number=16,U.Boolean=17,U.Array=18,U.Object=19,U.Key=20,U.Null=21,U.EnumMember=22,U.Struct=23,U.Event=24,U.Operator=25,U.TypeParameter=26,(ez||(ez={})).Deprecated=1,(eX||(eX={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(V=eB||(eB={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},V.is=function(e){return e&&e1.string(e.name)&&e1.number(e.kind)&&et.is(e.range)&&et.is(e.selectionRange)&&(void 0===e.detail||e1.string(e.detail))&&(void 0===e.deprecated||e1.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))},(H=e$||(e$={})).Empty="",H.QuickFix="quickfix",H.Refactor="refactor",H.RefactorExtract="refactor.extract",H.RefactorInline="refactor.inline",H.RefactorRewrite="refactor.rewrite",H.Source="source",H.SourceOrganizeImports="source.organizeImports",H.SourceFixAll="source.fixAll",(K=eq||(eq={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},K.is=function(e){return e1.defined(e)&&e1.typedArray(e.diagnostics,eh.is)&&(void 0===e.only||e1.typedArray(e.only,e1.string))},(z=eQ||(eQ={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):ef.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},z.is=function(e){return e&&e1.string(e.title)&&(void 0===e.diagnostics||e1.typedArray(e.diagnostics,eh.is))&&(void 0===e.kind||e1.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||ef.is(e.command))&&(void 0===e.isPreferred||e1.boolean(e.isPreferred))&&(void 0===e.edit||eE.is(e.edit))},(X=eG||(eG={})).create=function(e,t){var n={range:e};return e1.defined(t)&&(n.data=t),n},X.is=function(e){return e1.defined(e)&&et.is(e.range)&&(e1.undefined(e.command)||ef.is(e.command))},(B=eJ||(eJ={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},B.is=function(e){return e1.defined(e)&&e1.uinteger(e.tabSize)&&e1.boolean(e.insertSpaces)},($=eY||(eY={})).create=function(e,t,n){return{range:e,target:t,data:n}},$.is=function(e){return e1.defined(e)&&et.is(e.range)&&(e1.undefined(e.target)||e1.string(e.target))},(q=eZ||(eZ={})).create=function(e,t){return{range:e,parent:t}},q.is=function(e){return void 0!==e&&et.is(e.range)&&(void 0===e.parent||q.is(e.parent))},(Q=e0||(e0={})).create=function(e,t,n,r){return new tn(e,t,n,r)},Q.is=function(e){return!!(e1.defined(e)&&e1.string(e.uri)&&(e1.undefined(e.languageId)||e1.string(e.languageId))&&e1.uinteger(e.lineCount)&&e1.func(e.getText)&&e1.func(e.positionAt)&&e1.func(e.offsetAt))},Q.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;)0>=n(i[a],o[s])?t[u++]=i[a++]:t[u++]=o[s++];for(;a<i.length;)t[u++]=i[a++];for(;s<o.length;)t[u++]=o[s++];return t}(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),u=e.offsetAt(a.range.end);if(u<=i)n=n.substring(0,s)+a.newText+n.substring(u,n.length);else throw Error("Overlapping edit");i=s}return n};var tn=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return ee.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return ee.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();G=e1||(e1={}),J=Object.prototype.toString,G.defined=function(e){return void 0!==e},G.undefined=function(e){return void 0===e},G.boolean=function(e){return!0===e||!1===e},G.string=function(e){return"[object String]"===J.call(e)},G.number=function(e){return"[object Number]"===J.call(e)},G.numberRange=function(e,t,n){return"[object Number]"===J.call(e)&&t<=e&&e<=n},G.integer=function(e){return"[object Number]"===J.call(e)&&-2147483648<=e&&e<=2147483647},G.uinteger=function(e){return"[object Number]"===J.call(e)&&0<=e&&e<=2147483647},G.func=function(e){return"[object Function]"===J.call(e)},G.objectLiteral=function(e){return null!==e&&"object"==typeof e},G.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var tr=class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);let r=e=>{let t,n=e.getLanguageId();if(n===this._languageId)this._listener[e.uri.toString()]=e.onDidChangeContent(()=>{window.clearTimeout(t),t=window.setTimeout(()=>this._doValidate(e.uri,n),500)}),this._doValidate(e.uri,n)},i=e=>{e5.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(e5.editor.onDidCreateModel(r)),this._disposables.push(e5.editor.onWillDisposeModel(i)),this._disposables.push(e5.editor.onDidChangeModelLanguage(e=>{i(e.model),r(e.model)})),this._disposables.push(n(e=>{e5.editor.getModels().forEach(e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))})})),this._disposables.push({dispose:()=>{for(let e in e5.editor.getModels().forEach(i),this._listener)this._listener[e].dispose()}}),e5.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,t){this._worker(e).then(t=>t.doValidation(e.toString())).then(n=>{let r=n.map(t=>(function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:function(e){switch(e){case ed.Error:return e5.MarkerSeverity.Error;case ed.Warning:return e5.MarkerSeverity.Warning;case ed.Information:return e5.MarkerSeverity.Info;case ed.Hint:return e5.MarkerSeverity.Hint;default:return e5.MarkerSeverity.Info}}(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}})(e,t)),i=e5.editor.getModel(e);i&&i.getLanguageId()===t&&e5.editor.setModelMarkers(i,t,r)}).then(void 0,e=>{console.error(e)})}},ti=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doComplete(i.toString(),to(t))).then(n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new e5.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map(e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:function(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}(e.command),range:i,kind:function(e){let t=e5.languages.CompletionItemKind;switch(e){case eD.Text:return t.Text;case eD.Method:return t.Method;case eD.Function:return t.Function;case eD.Constructor:return t.Constructor;case eD.Field:return t.Field;case eD.Variable:return t.Variable;case eD.Class:return t.Class;case eD.Interface:return t.Interface;case eD.Module:return t.Module;case eD.Property:break;case eD.Unit:return t.Unit;case eD.Value:return t.Value;case eD.Enum:return t.Enum;case eD.Keyword:return t.Keyword;case eD.Snippet:return t.Snippet;case eD.Color:return t.Color;case eD.File:return t.File;case eD.Reference:return t.Reference}return t.Property}(e.kind)};return e.textEdit&&(function(e){return void 0!==e.insert&&void 0!==e.replace}(e.textEdit)?t.range={insert:ts(e.textEdit.insert),replace:ts(e.textEdit.replace)}:t.range=ts(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(tu)),e.insertTextFormat===eT.Snippet&&(t.insertTextRules=e5.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:n.isIncomplete,suggestions:o}})}};function to(e){if(!!e)return{character:e.column-1,line:e.lineNumber-1}}function ta(e){if(!!e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ts(e){if(!!e)return new e5.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function tu(e){if(!!e)return{range:ts(e.range),text:e.newText}}var tc=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.doHover(r.toString(),to(t))).then(e=>{if(!!e)return{range:ts(e.range),contents:function(e){return e?Array.isArray(e)?e.map(td):[td(e)]:void 0}(e.contents)}})}};function td(e){var t;if("string"==typeof e)return{value:e};if((t=e)&&"object"==typeof t&&"string"==typeof t.kind)return"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value};return{value:"```"+e.language+"\n"+e.value+"\n```\n"}}var tg=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),to(t))).then(e=>{if(!!e)return e.map(e=>({range:ts(e.range),kind:function(e){switch(e){case eV.Read:return e5.languages.DocumentHighlightKind.Read;case eV.Write:return e5.languages.DocumentHighlightKind.Write;case eV.Text:}return e5.languages.DocumentHighlightKind.Text}(e.kind)}))})}},tl=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),to(t))).then(e=>{if(!!e)return[th(e)]})}};function th(e){return{uri:e5.Uri.parse(e.uri),range:ts(e.range)}}var tf=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.findReferences(i.toString(),to(t))).then(e=>{if(!!e)return e.map(th)})}},tp=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.doRename(i.toString(),to(t),n)).then(e=>(function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=e5.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:ts(i.range),text:i.newText}})}return{edits:t}})(e))}},tm=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentSymbols(n.toString())).then(e=>{if(!!e)return e.map(e=>(function(e){return"children"in e})(e)?function e(t){return{name:t.name,detail:t.detail??"",kind:tv(t.kind),range:ts(t.range),selectionRange:ts(t.selectionRange),tags:t.tags??[],children:(t.children??[]).map(t=>e(t))}}(e):{name:e.name,detail:"",containerName:e.containerName,kind:tv(e.kind),range:ts(e.location.range),selectionRange:ts(e.location.range),tags:[]})})}};function tv(e){let t=e5.languages.SymbolKind;switch(e){case eK.File:return t.File;case eK.Module:return t.Module;case eK.Namespace:return t.Namespace;case eK.Package:return t.Package;case eK.Class:return t.Class;case eK.Method:return t.Method;case eK.Property:return t.Property;case eK.Field:return t.Field;case eK.Constructor:return t.Constructor;case eK.Enum:return t.Enum;case eK.Interface:return t.Interface;case eK.Function:break;case eK.Variable:return t.Variable;case eK.Constant:return t.Constant;case eK.String:return t.String;case eK.Number:return t.Number;case eK.Boolean:return t.Boolean;case eK.Array:return t.Array}return t.Function}var t_=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentLinks(n.toString())).then(e=>{if(!!e)return{links:e.map(e=>({range:ts(e.range),url:e.target}))}})}},tw=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.format(r.toString(),null,tb(t)).then(e=>{if(!!e&&0!==e.length)return e.map(tu)}))}},tk=class{constructor(e){this._worker=e,this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then(e=>e.format(i.toString(),ta(t),tb(n)).then(e=>{if(!!e&&0!==e.length)return e.map(tu)}))}};function tb(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var ty=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then(e=>e.findDocumentColors(n.toString())).then(e=>{if(!!e)return e.map(e=>({color:e.color,range:ts(e.range)}))})}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),t.color,ta(t.range))).then(e=>{if(!!e)return e.map(e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=tu(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(tu)),t})})}},tE=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),t)).then(e=>{if(!!e)return e.map(e=>{let t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case es.Comment:return e5.languages.FoldingRangeKind.Comment;case es.Imports:return e5.languages.FoldingRangeKind.Imports;case es.Region:return e5.languages.FoldingRangeKind.Region}}(e.kind)),t})})}},tC=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),t.map(to))).then(e=>{if(!!e)return e.map(e=>{let t=[];for(;e;)t.push({range:ts(e.range)}),e=e.parent;return t})})}};function tx(e){let t=[],n=[],r=new e9(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);return!function(){let{languageId:t,modeConfiguration:r}=e;tI(n),r.completionItems&&n.push(e5.languages.registerCompletionItemProvider(t,new ti(i,["/","-",":"]))),r.hovers&&n.push(e5.languages.registerHoverProvider(t,new tc(i))),r.documentHighlights&&n.push(e5.languages.registerDocumentHighlightProvider(t,new tg(i))),r.definitions&&n.push(e5.languages.registerDefinitionProvider(t,new tl(i))),r.references&&n.push(e5.languages.registerReferenceProvider(t,new tf(i))),r.documentSymbols&&n.push(e5.languages.registerDocumentSymbolProvider(t,new tm(i))),r.rename&&n.push(e5.languages.registerRenameProvider(t,new tp(i))),r.colors&&n.push(e5.languages.registerColorProvider(t,new ty(i))),r.foldingRanges&&n.push(e5.languages.registerFoldingRangeProvider(t,new tE(i))),r.diagnostics&&n.push(new tr(t,i,e.onDidChange)),r.selectionRanges&&n.push(e5.languages.registerSelectionRangeProvider(t,new tC(i))),r.documentFormattingEdits&&n.push(e5.languages.registerDocumentFormattingEditProvider(t,new tw(i))),r.documentRangeFormattingEdits&&n.push(e5.languages.registerDocumentRangeFormattingEditProvider(t,new tk(i)))}(),t.push(tA(n)),tA(t)}function tA(e){return{dispose:()=>tI(e)}}function tI(e){for(;e.length;)e.pop().dispose()}}}]);