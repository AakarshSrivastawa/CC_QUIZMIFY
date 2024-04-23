"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-attr";
exports.ids = ["vendor-chunks/style-attr"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-attr/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/style-attr/lib/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/*:: type Attr = { [key: string]: string | number } */ /*:: type Opts = { preserveNumbers: ?boolean } */ /*\n\nstyle-attr\n====\n\nVery simple parsing and stringifying of style attributes.\n\n`parse`\n----\n\nConvert a style attribute string to an object.\n\n*/ /*:: declare function parse (raw: string, opts: ?Opts): Attr */ \nfunction parse(raw, opts) {\n    opts = opts || {};\n    var preserveNumbers = opts.preserveNumbers;\n    var trim = function(s) {\n        return s.trim();\n    };\n    var obj = {};\n    getKeyValueChunks(raw).map(trim).filter(Boolean).forEach(function(item) {\n        // split with `.indexOf` rather than `.split` because the value may also contain colons.\n        var pos = item.indexOf(\":\");\n        var key = item.substr(0, pos).trim();\n        var val = item.substr(pos + 1).trim();\n        if (preserveNumbers && isNumeric(val)) {\n            val = Number(val);\n        }\n        obj[key] = val;\n    });\n    return obj;\n}\n/*\n\n`isNumeric`\n----\n\nCheck if a value is numeric.\nVia: https://stackoverflow.com/a/1830844/9324\n\n*/ /*:: declare function isNumeric (n: any): boolean */ function isNumeric(n) {\n    return !isNaN(parseFloat(n)) && isFinite(n);\n}\n/*\n\n`getKeyValueChunks`\n----\n\nSplit a string into chunks matching `<key>: <value>`\n\n*/ /*:: declare function getKeyValueChunks (raw: string): Array<string> */ function getKeyValueChunks(raw) {\n    var chunks = [];\n    var offset = 0;\n    var sep = \";\";\n    var hasUnclosedUrl = /url\\([^\\)]+$/;\n    var chunk = \"\";\n    var nextSplit;\n    while(offset < raw.length){\n        nextSplit = raw.indexOf(sep, offset);\n        if (nextSplit === -1) {\n            nextSplit = raw.length;\n        }\n        chunk += raw.substring(offset, nextSplit);\n        // data URIs can contain semicolons, so make sure we get the whole thing\n        if (hasUnclosedUrl.test(chunk)) {\n            chunk += \";\";\n            offset = nextSplit + 1;\n            continue;\n        }\n        chunks.push(chunk);\n        chunk = \"\";\n        offset = nextSplit + 1;\n    }\n    return chunks;\n}\n/*\n\n`stringify`\n----\n\nConvert an object into an attribute string\n\n*/ /*:: declare function stringify (obj: Attr): string */ function stringify(obj) {\n    return Object.keys(obj).map(function(key) {\n        return key + \":\" + obj[key];\n    }).join(\";\");\n}\n/*\n\n`normalize`\n----\n\nNormalize an attribute string (eg. collapse duplicates)\n\n*/ /*:: declare function normalize (str: string, opts: ?Opts): string */ function normalize(str, opts) {\n    return stringify(parse(str, opts));\n}\nmodule.exports.parse = parse;\nmodule.exports.stringify = stringify;\nmodule.exports.normalize = normalize;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtYXR0ci9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBRUEsb0RBQW9ELEdBQ3BELCtDQUErQyxHQUUvQzs7Ozs7Ozs7Ozs7O0FBWUEsR0FFQSw2REFBNkQ7QUFDN0QsU0FBU0EsTUFBTUMsR0FBRyxFQUFFQyxJQUFJO0lBQ3RCQSxPQUFPQSxRQUFRLENBQUM7SUFFaEIsSUFBSUMsa0JBQWtCRCxLQUFLQyxlQUFlO0lBQzFDLElBQUlDLE9BQU8sU0FBVUMsQ0FBQztRQUNwQixPQUFPQSxFQUFFRCxJQUFJO0lBQ2Y7SUFDQSxJQUFJRSxNQUFNLENBQUM7SUFFWEMsa0JBQWtCTixLQUFLTyxHQUFHLENBQUNKLE1BQU1LLE1BQU0sQ0FBQ0MsU0FBU0MsT0FBTyxDQUFDLFNBQVVDLElBQUk7UUFDckUsd0ZBQXdGO1FBQ3hGLElBQUlDLE1BQU1ELEtBQUtFLE9BQU8sQ0FBQztRQUN2QixJQUFJQyxNQUFNSCxLQUFLSSxNQUFNLENBQUMsR0FBR0gsS0FBS1QsSUFBSTtRQUNsQyxJQUFJYSxNQUFNTCxLQUFLSSxNQUFNLENBQUNILE1BQU0sR0FBR1QsSUFBSTtRQUNuQyxJQUFJRCxtQkFBbUJlLFVBQVVELE1BQU07WUFDckNBLE1BQU1FLE9BQU9GO1FBQ2Y7UUFFQVgsR0FBRyxDQUFDUyxJQUFJLEdBQUdFO0lBQ2I7SUFFQSxPQUFPWDtBQUNUO0FBRUE7Ozs7Ozs7O0FBUUEsR0FFQSxrREFBa0QsR0FFbEQsU0FBU1ksVUFBVUUsQ0FBQztJQUNsQixPQUFPLENBQUNDLE1BQU1DLFdBQVdGLE9BQU9HLFNBQVNIO0FBQzNDO0FBRUE7Ozs7Ozs7QUFPQSxHQUNBLHFFQUFxRSxHQUNyRSxTQUFTYixrQkFBa0JOLEdBQUc7SUFDNUIsSUFBSXVCLFNBQVMsRUFBRTtJQUNmLElBQUlDLFNBQVM7SUFDYixJQUFJQyxNQUFNO0lBQ1YsSUFBSUMsaUJBQWlCO0lBQ3JCLElBQUlDLFFBQVE7SUFDWixJQUFJQztJQUNKLE1BQU9KLFNBQVN4QixJQUFJNkIsTUFBTSxDQUFFO1FBQzFCRCxZQUFZNUIsSUFBSWEsT0FBTyxDQUFDWSxLQUFLRDtRQUM3QixJQUFJSSxjQUFjLENBQUMsR0FBRztZQUNwQkEsWUFBWTVCLElBQUk2QixNQUFNO1FBQ3hCO1FBRUFGLFNBQVMzQixJQUFJOEIsU0FBUyxDQUFDTixRQUFRSTtRQUUvQix3RUFBd0U7UUFDeEUsSUFBSUYsZUFBZUssSUFBSSxDQUFDSixRQUFRO1lBQzlCQSxTQUFTO1lBQ1RILFNBQVNJLFlBQVk7WUFDckI7UUFDRjtRQUVBTCxPQUFPUyxJQUFJLENBQUNMO1FBQ1pBLFFBQVE7UUFDUkgsU0FBU0ksWUFBWTtJQUN2QjtJQUVBLE9BQU9MO0FBQ1Q7QUFFQTs7Ozs7OztBQU9BLEdBQ0Esb0RBQW9ELEdBQ3BELFNBQVNVLFVBQVU1QixHQUFHO0lBQ3BCLE9BQU82QixPQUFPQyxJQUFJLENBQUM5QixLQUFLRSxHQUFHLENBQUMsU0FBVU8sR0FBRztRQUN2QyxPQUFPQSxNQUFNLE1BQU1ULEdBQUcsQ0FBQ1MsSUFBSTtJQUM3QixHQUFHc0IsSUFBSSxDQUFDO0FBQ1Y7QUFFQTs7Ozs7OztBQU9BLEdBQ0EsbUVBQW1FLEdBQ25FLFNBQVNDLFVBQVVDLEdBQUcsRUFBRXJDLElBQUk7SUFDMUIsT0FBT2dDLFVBQVVsQyxNQUFNdUMsS0FBS3JDO0FBQzlCO0FBRUFzQyxvQkFBb0IsR0FBR3hDO0FBQ3ZCd0Msd0JBQXdCLEdBQUdOO0FBQzNCTSx3QkFBd0IsR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6bWlmeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1hdHRyL2xpYi9pbmRleC5qcz8xMmU1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKjo6IHR5cGUgQXR0ciA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH0gKi9cbi8qOjogdHlwZSBPcHRzID0geyBwcmVzZXJ2ZU51bWJlcnM6ID9ib29sZWFuIH0gKi9cblxuLypcblxuc3R5bGUtYXR0clxuPT09PVxuXG5WZXJ5IHNpbXBsZSBwYXJzaW5nIGFuZCBzdHJpbmdpZnlpbmcgb2Ygc3R5bGUgYXR0cmlidXRlcy5cblxuYHBhcnNlYFxuLS0tLVxuXG5Db252ZXJ0IGEgc3R5bGUgYXR0cmlidXRlIHN0cmluZyB0byBhbiBvYmplY3QuXG5cbiovXG5cbi8qOjogZGVjbGFyZSBmdW5jdGlvbiBwYXJzZSAocmF3OiBzdHJpbmcsIG9wdHM6ID9PcHRzKTogQXR0ciAqL1xuZnVuY3Rpb24gcGFyc2UocmF3LCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHZhciBwcmVzZXJ2ZU51bWJlcnMgPSBvcHRzLnByZXNlcnZlTnVtYmVycztcbiAgdmFyIHRyaW0gPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnRyaW0oKTtcbiAgfTtcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGdldEtleVZhbHVlQ2h1bmtzKHJhdykubWFwKHRyaW0pLmZpbHRlcihCb29sZWFuKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgLy8gc3BsaXQgd2l0aCBgLmluZGV4T2ZgIHJhdGhlciB0aGFuIGAuc3BsaXRgIGJlY2F1c2UgdGhlIHZhbHVlIG1heSBhbHNvIGNvbnRhaW4gY29sb25zLlxuICAgIHZhciBwb3MgPSBpdGVtLmluZGV4T2YoJzonKTtcbiAgICB2YXIga2V5ID0gaXRlbS5zdWJzdHIoMCwgcG9zKS50cmltKCk7XG4gICAgdmFyIHZhbCA9IGl0ZW0uc3Vic3RyKHBvcyArIDEpLnRyaW0oKTtcbiAgICBpZiAocHJlc2VydmVOdW1iZXJzICYmIGlzTnVtZXJpYyh2YWwpKSB7XG4gICAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICB9XG5cbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgfSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLypcblxuYGlzTnVtZXJpY2Bcbi0tLS1cblxuQ2hlY2sgaWYgYSB2YWx1ZSBpcyBudW1lcmljLlxuVmlhOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgzMDg0NC85MzI0XG5cbiovXG5cbi8qOjogZGVjbGFyZSBmdW5jdGlvbiBpc051bWVyaWMgKG46IGFueSk6IGJvb2xlYW4gKi9cblxuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLypcblxuYGdldEtleVZhbHVlQ2h1bmtzYFxuLS0tLVxuXG5TcGxpdCBhIHN0cmluZyBpbnRvIGNodW5rcyBtYXRjaGluZyBgPGtleT46IDx2YWx1ZT5gXG5cbiovXG4vKjo6IGRlY2xhcmUgZnVuY3Rpb24gZ2V0S2V5VmFsdWVDaHVua3MgKHJhdzogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiAqL1xuZnVuY3Rpb24gZ2V0S2V5VmFsdWVDaHVua3MocmF3KSB7XG4gIHZhciBjaHVua3MgPSBbXTtcbiAgdmFyIG9mZnNldCA9IDA7XG4gIHZhciBzZXAgPSAnOyc7XG4gIHZhciBoYXNVbmNsb3NlZFVybCA9IC91cmxcXChbXlxcKV0rJC87XG4gIHZhciBjaHVuayA9ICcnO1xuICB2YXIgbmV4dFNwbGl0O1xuICB3aGlsZSAob2Zmc2V0IDwgcmF3Lmxlbmd0aCkge1xuICAgIG5leHRTcGxpdCA9IHJhdy5pbmRleE9mKHNlcCwgb2Zmc2V0KTtcbiAgICBpZiAobmV4dFNwbGl0ID09PSAtMSkge1xuICAgICAgbmV4dFNwbGl0ID0gcmF3Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBjaHVuayArPSByYXcuc3Vic3RyaW5nKG9mZnNldCwgbmV4dFNwbGl0KTtcblxuICAgIC8vIGRhdGEgVVJJcyBjYW4gY29udGFpbiBzZW1pY29sb25zLCBzbyBtYWtlIHN1cmUgd2UgZ2V0IHRoZSB3aG9sZSB0aGluZ1xuICAgIGlmIChoYXNVbmNsb3NlZFVybC50ZXN0KGNodW5rKSkge1xuICAgICAgY2h1bmsgKz0gJzsnO1xuICAgICAgb2Zmc2V0ID0gbmV4dFNwbGl0ICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICBjaHVuayA9ICcnO1xuICAgIG9mZnNldCA9IG5leHRTcGxpdCArIDE7XG4gIH1cblxuICByZXR1cm4gY2h1bmtzO1xufVxuXG4vKlxuXG5gc3RyaW5naWZ5YFxuLS0tLVxuXG5Db252ZXJ0IGFuIG9iamVjdCBpbnRvIGFuIGF0dHJpYnV0ZSBzdHJpbmdcblxuKi9cbi8qOjogZGVjbGFyZSBmdW5jdGlvbiBzdHJpbmdpZnkgKG9iajogQXR0cik6IHN0cmluZyAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgKyAnOicgKyBvYmpba2V5XTtcbiAgfSkuam9pbignOycpO1xufVxuXG4vKlxuXG5gbm9ybWFsaXplYFxuLS0tLVxuXG5Ob3JtYWxpemUgYW4gYXR0cmlidXRlIHN0cmluZyAoZWcuIGNvbGxhcHNlIGR1cGxpY2F0ZXMpXG5cbiovXG4vKjo6IGRlY2xhcmUgZnVuY3Rpb24gbm9ybWFsaXplIChzdHI6IHN0cmluZywgb3B0czogP09wdHMpOiBzdHJpbmcgKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZShzdHIsIG9wdHMpIHtcbiAgcmV0dXJuIHN0cmluZ2lmeShwYXJzZShzdHIsIG9wdHMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbm1vZHVsZS5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeTtcbm1vZHVsZS5leHBvcnRzLm5vcm1hbGl6ZSA9IG5vcm1hbGl6ZTsiXSwibmFtZXMiOlsicGFyc2UiLCJyYXciLCJvcHRzIiwicHJlc2VydmVOdW1iZXJzIiwidHJpbSIsInMiLCJvYmoiLCJnZXRLZXlWYWx1ZUNodW5rcyIsIm1hcCIsImZpbHRlciIsIkJvb2xlYW4iLCJmb3JFYWNoIiwiaXRlbSIsInBvcyIsImluZGV4T2YiLCJrZXkiLCJzdWJzdHIiLCJ2YWwiLCJpc051bWVyaWMiLCJOdW1iZXIiLCJuIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJjaHVua3MiLCJvZmZzZXQiLCJzZXAiLCJoYXNVbmNsb3NlZFVybCIsImNodW5rIiwibmV4dFNwbGl0IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwidGVzdCIsInB1c2giLCJzdHJpbmdpZnkiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsIm5vcm1hbGl6ZSIsInN0ciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-attr/lib/index.js\n");

/***/ })

};
;