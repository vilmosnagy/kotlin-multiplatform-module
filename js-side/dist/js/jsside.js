if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'jsside'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'jsside'.");
}
var jsside = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      github: Kotlin.definePackage(null, /** @lends _.com.github */ {
        vilmosnagy: Kotlin.definePackage(null, /** @lends _.com.github.vilmosnagy */ {
          multiplatform: Kotlin.definePackage(null, /** @lends _.com.github.vilmosnagy.multiplatform */ {
            js: Kotlin.definePackage(null, /** @lends _.com.github.vilmosnagy.multiplatform.js */ {
              main_kand9s$f: function (it) {
                Kotlin.println(it.id);
                Kotlin.println(it.name);
              },
              main_kand9s$: function (args) {
                var options = _.com.github.vilmosnagy.multiplatform.js.AjaxRequest_init_hpzn2e$('http://localhost:8080/entity', _.com.github.vilmosnagy.multiplatform.js.HttpWord.GET, '');
                return $.ajax(options).done(_.com.github.vilmosnagy.multiplatform.js.main_kand9s$f);
              },
              AjaxRequest: Kotlin.createClass(null, function AjaxRequest(url, type, data) {
                this.url = url;
                this.type = type;
                this.data = data;
                this.contentType = 'application/json; charset=utf-8';
                this.dataType = 'json';
              }, /** @lends _.com.github.vilmosnagy.multiplatform.js.AjaxRequest.prototype */ {
                component1: function () {
                  return this.url;
                },
                component2: function () {
                  return this.type;
                },
                component3: function () {
                  return this.data;
                },
                copy_6hosri$: function (url, type, data) {
                  return new _.com.github.vilmosnagy.multiplatform.js.AjaxRequest_init_hpzn2e$(url === void 0 ? this.url : url, type === void 0 ? this.type : type, data === void 0 ? this.data : data);
                },
                toString: function () {
                  return 'AjaxRequest(url=' + Kotlin.toString(this.url) + (', type=' + Kotlin.toString(this.type)) + (', data=' + Kotlin.toString(this.data)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.url) | 0;
                  result = result * 31 + Kotlin.hashCode(this.type) | 0;
                  result = result * 31 + Kotlin.hashCode(this.data) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data)))));
                }
              }),
              AjaxRequest_init_hpzn2e$: function (url, type, data, $this) {
                $this = $this || Object.create(_.com.github.vilmosnagy.multiplatform.js.AjaxRequest.prototype);
                _.com.github.vilmosnagy.multiplatform.js.AjaxRequest.call($this, url, type.toString(), data);
                return $this;
              },
              HttpWord: Kotlin.createEnumClass(function () {
                return [Kotlin.Enum];
              }, function HttpWord() {
                HttpWord.baseInitializer.call(this);
              }, function () {
                return {
                  GET: function () {
                    return new _.com.github.vilmosnagy.multiplatform.js.HttpWord();
                  },
                  POST: function () {
                    return new _.com.github.vilmosnagy.multiplatform.js.HttpWord();
                  },
                  PUT: function () {
                    return new _.com.github.vilmosnagy.multiplatform.js.HttpWord();
                  },
                  DELETE: function () {
                    return new _.com.github.vilmosnagy.multiplatform.js.HttpWord();
                  }
                };
              })
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('jsside', _);
  _.com.github.vilmosnagy.multiplatform.js.main_kand9s$([]);
  return _;
}(kotlin);
