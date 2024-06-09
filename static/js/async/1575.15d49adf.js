/*! For license information please see 1575.15d49adf.js.LICENSE.txt */
"use strict";(self.webpackChunkmonaco_ts=self.webpackChunkmonaco_ts||[]).push([["1575"],{78401:function(e,t,i){let s,r;i.r(t),i.d(t,{Adapter:function(){return y},CodeActionAdaptor:function(){return K},DefinitionAdapter:function(){return A},DiagnosticsAdapter:function(){return S},DocumentHighlightAdapter:function(){return D},FormatAdapter:function(){return L},FormatHelper:function(){return O},FormatOnTypeAdapter:function(){return N},InlayHintsAdapter:function(){return R},Kind:function(){return T},LibFiles:function(){return w},OutlineAdapter:function(){return I},QuickInfoAdapter:function(){return C},ReferenceAdapter:function(){return F},RenameAdapter:function(){return M},SignatureHelpAdapter:function(){return v},SuggestAdapter:function(){return k},WorkerManager:function(){return h},flattenDiagnosticMessageText:function(){return b},getJavaScriptWorker:function(){return W},getTypeScriptWorker:function(){return j},setupJavaScript:function(){return H},setupTypeScript:function(){return E}});var n,a,o=i(6586),l=i(39585),u=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,p=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of d(t))!g.call(e,r)&&r!==i&&u(e,r,{get:()=>t[r],enumerable:!(s=c(t,r))||s.enumerable});return e},m={};p(m,s=o,"default"),r&&p(r,s,"default");var h=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;let e=++this._updateExtraLibsToken,t=await this._worker.getProxy();if(this._updateExtraLibsToken===e)t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return!this._client&&(this._client=(async()=>(this._worker=m.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync())?await this._worker.withSyncedResources(m.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy())()),this._client}async getLanguageServiceWorker(...e){let t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},f={};function b(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(let r of e.next)s+=b(r,t,i);return s}function _(e){return e?e.map(e=>e.text).join(""):""}f["lib.d.ts"]=!0,f["lib.decorators.d.ts"]=!0,f["lib.decorators.legacy.d.ts"]=!0,f["lib.dom.d.ts"]=!0,f["lib.dom.iterable.d.ts"]=!0,f["lib.es2015.collection.d.ts"]=!0,f["lib.es2015.core.d.ts"]=!0,f["lib.es2015.d.ts"]=!0,f["lib.es2015.generator.d.ts"]=!0,f["lib.es2015.iterable.d.ts"]=!0,f["lib.es2015.promise.d.ts"]=!0,f["lib.es2015.proxy.d.ts"]=!0,f["lib.es2015.reflect.d.ts"]=!0,f["lib.es2015.symbol.d.ts"]=!0,f["lib.es2015.symbol.wellknown.d.ts"]=!0,f["lib.es2016.array.include.d.ts"]=!0,f["lib.es2016.d.ts"]=!0,f["lib.es2016.full.d.ts"]=!0,f["lib.es2017.d.ts"]=!0,f["lib.es2017.full.d.ts"]=!0,f["lib.es2017.intl.d.ts"]=!0,f["lib.es2017.object.d.ts"]=!0,f["lib.es2017.sharedmemory.d.ts"]=!0,f["lib.es2017.string.d.ts"]=!0,f["lib.es2017.typedarrays.d.ts"]=!0,f["lib.es2018.asyncgenerator.d.ts"]=!0,f["lib.es2018.asynciterable.d.ts"]=!0,f["lib.es2018.d.ts"]=!0,f["lib.es2018.full.d.ts"]=!0,f["lib.es2018.intl.d.ts"]=!0,f["lib.es2018.promise.d.ts"]=!0,f["lib.es2018.regexp.d.ts"]=!0,f["lib.es2019.array.d.ts"]=!0,f["lib.es2019.d.ts"]=!0,f["lib.es2019.full.d.ts"]=!0,f["lib.es2019.intl.d.ts"]=!0,f["lib.es2019.object.d.ts"]=!0,f["lib.es2019.string.d.ts"]=!0,f["lib.es2019.symbol.d.ts"]=!0,f["lib.es2020.bigint.d.ts"]=!0,f["lib.es2020.d.ts"]=!0,f["lib.es2020.date.d.ts"]=!0,f["lib.es2020.full.d.ts"]=!0,f["lib.es2020.intl.d.ts"]=!0,f["lib.es2020.number.d.ts"]=!0,f["lib.es2020.promise.d.ts"]=!0,f["lib.es2020.sharedmemory.d.ts"]=!0,f["lib.es2020.string.d.ts"]=!0,f["lib.es2020.symbol.wellknown.d.ts"]=!0,f["lib.es2021.d.ts"]=!0,f["lib.es2021.full.d.ts"]=!0,f["lib.es2021.intl.d.ts"]=!0,f["lib.es2021.promise.d.ts"]=!0,f["lib.es2021.string.d.ts"]=!0,f["lib.es2021.weakref.d.ts"]=!0,f["lib.es2022.array.d.ts"]=!0,f["lib.es2022.d.ts"]=!0,f["lib.es2022.error.d.ts"]=!0,f["lib.es2022.full.d.ts"]=!0,f["lib.es2022.intl.d.ts"]=!0,f["lib.es2022.object.d.ts"]=!0,f["lib.es2022.regexp.d.ts"]=!0,f["lib.es2022.sharedmemory.d.ts"]=!0,f["lib.es2022.string.d.ts"]=!0,f["lib.es2023.array.d.ts"]=!0,f["lib.es2023.d.ts"]=!0,f["lib.es2023.full.d.ts"]=!0,f["lib.es5.d.ts"]=!0,f["lib.es6.d.ts"]=!0,f["lib.esnext.d.ts"]=!0,f["lib.esnext.full.d.ts"]=!0,f["lib.esnext.intl.d.ts"]=!0,f["lib.scripthost.d.ts"]=!0,f["lib.webworker.d.ts"]=!0,f["lib.webworker.importscripts.d.ts"]=!0,f["lib.webworker.iterable.d.ts"]=!0;var y=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},w=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!f[e.path.slice(1)]}getOrCreateModel(e){let t=m.Uri.parse(e),i=m.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return m.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);let s=l.TG.getExtraLibs()[e];return s?m.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){if(!!this._containsLibFile(e))await this._fetchLibFiles()}_fetchLibFiles(){return!this._fetchLibFilesPromise&&(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},S=class extends y{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i,this._disposables=[],this._listener=Object.create(null);let r=e=>{let t;if(e.getLanguageId()!==i)return;let s=()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)},r=e.onDidChangeContent(()=>{clearTimeout(t),t=window.setTimeout(s,500)}),n=e.onDidChangeAttached(()=>{let{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t&&(e.isAttachedToEditor()?s():m.editor.setModelMarkers(e,this._selector,[]))});this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(t)}},s()},n=e=>{m.editor.setModelMarkers(e,this._selector,[]);let t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(m.editor.onDidCreateModel(e=>r(e))),this._disposables.push(m.editor.onWillDisposeModel(n)),this._disposables.push(m.editor.onDidChangeModelLanguage(e=>{n(e.model),r(e.model)})),this._disposables.push({dispose(){for(let e of m.editor.getModels())n(e)}});let a=()=>{for(let e of m.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),m.editor.getModels().forEach(e=>r(e))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){let t=await this._worker(e.uri);if(e.isDisposed())return;let i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();!s&&i.push(t.getSyntacticDiagnostics(e.uri.toString())),!r&&i.push(t.getSemanticDiagnostics(e.uri.toString())),!n&&i.push(t.getSuggestionDiagnostics(e.uri.toString()));let a=await Promise.all(i);if(!a||e.isDisposed())return;let o=a.reduce((e,t)=>t.concat(e),[]).filter(e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)),l=o.map(e=>e.relatedInformation||[]).reduce((e,t)=>t.concat(e),[]).map(e=>e.file?m.Uri.parse(e.file.fileName):null);if(await this._libFiles.fetchLibFilesIfNecessary(l),!e.isDisposed())m.editor.setModelMarkers(e,this._selector,o.map(t=>this._convertDiagnostics(e,t)))}_convertDiagnostics(e,t){let i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(m.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(m.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o,message:b(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];let i=[];return t.forEach(t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;let r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:u}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:u,message:b(t.messageText,"\n")})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return m.MarkerSeverity.Error;case 3:break;case 0:return m.MarkerSeverity.Warning;case 2:return m.MarkerSeverity.Hint}return m.MarkerSeverity.Info}},k=class e extends y{get triggerCharacters(){return["."]}async provideCompletionItems(t,i,s,r){let n=t.getWordUntilPosition(i),a=new m.Range(i.lineNumber,n.startColumn,i.lineNumber,n.endColumn),o=t.uri,l=t.getOffsetAt(i),u=await this._worker(o);if(t.isDisposed())return;let c=await u.getCompletionsAtPosition(o.toString(),l);if(!(!c||t.isDisposed()))return{suggestions:c.entries.map(s=>{let r=a;if(s.replacementSpan){let e=t.getPositionAt(s.replacementSpan.start),i=t.getPositionAt(s.replacementSpan.start+s.replacementSpan.length);r=new m.Range(e.lineNumber,e.column,i.lineNumber,i.column)}let n=[];return void 0!==s.kindModifiers&&-1!==s.kindModifiers.indexOf("deprecated")&&n.push(m.languages.CompletionItemTag.Deprecated),{uri:o,position:i,offset:l,range:r,label:s.name,insertText:s.name,sortText:s.sortText,kind:e.convertKind(s.kind),tags:n}})}}async resolveCompletionItem(t,i){let s=t.uri,r=t.position,n=t.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),n,t.label);return o?{uri:s,position:r,label:o.name,kind:e.convertKind(o.kind),detail:_(o.displayParts),documentation:{value:e.createDocumentationString(o)}}:t}static convertKind(e){switch(e){case T.primitiveType:case T.keyword:return m.languages.CompletionItemKind.Keyword;case T.variable:case T.localVariable:return m.languages.CompletionItemKind.Variable;case T.memberVariable:case T.memberGetAccessor:case T.memberSetAccessor:return m.languages.CompletionItemKind.Field;case T.function:case T.memberFunction:case T.constructSignature:case T.callSignature:case T.indexSignature:return m.languages.CompletionItemKind.Function;case T.enum:return m.languages.CompletionItemKind.Enum;case T.module:return m.languages.CompletionItemKind.Module;case T.class:return m.languages.CompletionItemKind.Class;case T.interface:return m.languages.CompletionItemKind.Interface;case T.warning:return m.languages.CompletionItemKind.File}return m.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=_(e.documentation);if(e.tags)for(let i of e.tags)t+=`

${x(i)}`;return t}};function x(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){let[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` \u2014 ${s.map(e=>e.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(e=>e.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var v=class e extends y{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case m.languages.SignatureHelpTriggerKind.TriggerCharacter:if(!e.triggerCharacter)return{kind:"invoked"};if(e.isRetrigger)return{kind:"retrigger",triggerCharacter:e.triggerCharacter};return{kind:"characterTyped",triggerCharacter:e.triggerCharacter};case m.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case m.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,i,s,r){let n=t.uri,a=t.getOffsetAt(i),o=await this._worker(n);if(t.isDisposed())return;let l=await o.getSignatureHelpItems(n.toString(),a,{triggerReason:e._toSignatureHelpTriggerReason(r)});if(!l||t.isDisposed())return;let u={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]};return l.items.forEach(e=>{let t={label:"",parameters:[]};t.documentation={value:_(e.documentation)},t.label+=_(e.prefixDisplayParts),e.parameters.forEach((i,s,r)=>{let n=_(i.displayParts),a={label:n,documentation:{value:_(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=_(e.separatorDisplayParts))}),t.label+=_(e.suffixDisplayParts),u.signatures.push(t)}),{value:u,dispose(){}}}},C=class extends y{async provideHover(e,t,i){let s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;let a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;let o=_(a.documentation),l=a.tags?a.tags.map(e=>x(e)).join("  \n\n"):"",u=_(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+u+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},D=class extends y{async provideDocumentHighlights(e,t,i){let s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;let a=await n.getDocumentHighlights(s.toString(),r,[s.toString()]);if(!(!a||e.isDisposed()))return a.flatMap(t=>t.highlightSpans.map(t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?m.languages.DocumentHighlightKind.Write:m.languages.DocumentHighlightKind.Text})))}},A=class extends y{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){let s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;let a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map(e=>m.Uri.parse(e.fileName))),e.isDisposed())return;let o=[];for(let e of a){let t=this._libFiles.getOrCreateModel(e.fileName);t&&o.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return o}},F=class extends y{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){let r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;let o=await a.getReferencesAtPosition(r.toString(),n);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map(e=>m.Uri.parse(e.fileName))),e.isDisposed())return;let l=[];for(let e of o){let t=this._libFiles.getOrCreateModel(e.fileName);t&&l.push({uri:t.uri,range:this._textSpanToRange(t,e.textSpan)})}return l}},I=class extends y{async provideDocumentSymbols(e,t){let i=e.uri,s=await this._worker(i);if(e.isDisposed())return;let r=await s.getNavigationTree(i.toString());if(!r||e.isDisposed())return;let n=(t,i)=>({name:t.text,detail:"",kind:P[t.kind]||m.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:t.childItems?.map(e=>n(e,t.text)),containerName:i});return r.childItems?r.childItems.map(e=>n(e)):[]}},T=class{static{this.unknown=""}static{this.keyword="keyword"}static{this.script="script"}static{this.module="module"}static{this.class="class"}static{this.interface="interface"}static{this.type="type"}static{this.enum="enum"}static{this.variable="var"}static{this.localVariable="local var"}static{this.function="function"}static{this.localFunction="local function"}static{this.memberFunction="method"}static{this.memberGetAccessor="getter"}static{this.memberSetAccessor="setter"}static{this.memberVariable="property"}static{this.constructorImplementation="constructor"}static{this.callSignature="call"}static{this.indexSignature="index"}static{this.constructSignature="construct"}static{this.parameter="parameter"}static{this.typeParameter="type parameter"}static{this.primitiveType="primitive type"}static{this.label="label"}static{this.alias="alias"}static{this.const="const"}static{this.let="let"}static{this.warning="warning"}},P=Object.create(null);P[T.module]=m.languages.SymbolKind.Module,P[T.class]=m.languages.SymbolKind.Class,P[T.enum]=m.languages.SymbolKind.Enum,P[T.interface]=m.languages.SymbolKind.Interface,P[T.memberFunction]=m.languages.SymbolKind.Method,P[T.memberVariable]=m.languages.SymbolKind.Property,P[T.memberGetAccessor]=m.languages.SymbolKind.Property,P[T.memberSetAccessor]=m.languages.SymbolKind.Property,P[T.variable]=m.languages.SymbolKind.Variable,P[T.const]=m.languages.SymbolKind.Variable,P[T.localVariable]=m.languages.SymbolKind.Variable,P[T.variable]=m.languages.SymbolKind.Variable,P[T.function]=m.languages.SymbolKind.Function,P[T.localFunction]=m.languages.SymbolKind.Function;var O=class extends y{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},L=class extends O{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,i,s){let r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;let l=await o.getFormattingEditsForRange(r.toString(),n,a,O._convertOptions(i));if(!(!l||e.isDisposed()))return l.map(t=>this._convertTextChanges(e,t))}},N=class extends O{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){let n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;let l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,O._convertOptions(s));if(!(!l||e.isDisposed()))return l.map(t=>this._convertTextChanges(e,t))}},K=class extends O{async provideCodeActions(e,t,i,s){let r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=O._convertOptions(e.getOptions()),l=i.markers.filter(e=>e.code).map(e=>e.code).map(Number),u=await this._worker(r);if(e.isDisposed())return;let c=await u.getCodeFixesAtPosition(r.toString(),n,a,l,o);return!c||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:c.filter(e=>0===e.changes.filter(e=>e.isNewFile).length).map(t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){let s=[];for(let t of i.changes)for(let i of t.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,i.span),text:i.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},M=class extends y{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){let r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;let l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw Error("Renaming files is not supported.");let u=await o.findRenameLocations(n,a,!1,!1,!1);if(!u||e.isDisposed())return;let c=[];for(let e of u){let t=this._libFiles.getOrCreateModel(e.fileName);if(t)c.push({resource:t.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(t,e.textSpan),text:i}});else throw Error(`Unknown file ${e.fileName}.`)}return{edits:c}}},R=class extends y{async provideInlayHints(e,t,i){let s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);return e.isDisposed()?null:{hints:(await o.provideInlayHints(r,n,a)).map(t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)})),dispose:()=>{}}}_convertHintKind(e){if("Parameter"===e)return m.languages.InlayHintKind.Parameter;return m.languages.InlayHintKind.Type}};function E(e){a=V(e,"typescript")}function H(e){n=V(e,"javascript")}function W(){return new Promise((e,t)=>{if(!n)return t("JavaScript not registered!");e(n)})}function j(){return new Promise((e,t)=>{if(!a)return t("TypeScript not registered!");e(a)})}function V(e,t){let i=[],s=[],r=new h(t,e);i.push(r);let n=(...e)=>r.getLanguageServiceWorker(...e),a=new w(n);return!function(){let{modeConfiguration:i}=e;B(s),i.completionItems&&s.push(m.languages.registerCompletionItemProvider(t,new k(n))),i.signatureHelp&&s.push(m.languages.registerSignatureHelpProvider(t,new v(n))),i.hovers&&s.push(m.languages.registerHoverProvider(t,new C(n))),i.documentHighlights&&s.push(m.languages.registerDocumentHighlightProvider(t,new D(n))),i.definitions&&s.push(m.languages.registerDefinitionProvider(t,new A(a,n))),i.references&&s.push(m.languages.registerReferenceProvider(t,new F(a,n))),i.documentSymbols&&s.push(m.languages.registerDocumentSymbolProvider(t,new I(n))),i.rename&&s.push(m.languages.registerRenameProvider(t,new M(a,n))),i.documentRangeFormattingEdits&&s.push(m.languages.registerDocumentRangeFormattingEditProvider(t,new L(n))),i.onTypeFormattingEdits&&s.push(m.languages.registerOnTypeFormattingEditProvider(t,new N(n))),i.codeActions&&s.push(m.languages.registerCodeActionProvider(t,new K(n))),i.inlayHints&&s.push(m.languages.registerInlayHintsProvider(t,new R(n))),i.diagnostics&&s.push(new S(a,e,t,n))}(),i.push(function(e){return{dispose:()=>B(e)}}(s)),n}function B(e){for(;e.length;)e.pop().dispose()}}}]);