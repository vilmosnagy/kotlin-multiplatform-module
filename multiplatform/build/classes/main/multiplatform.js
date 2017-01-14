if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'multiplatform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'multiplatform'.");
}
var multiplatform = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      github: Kotlin.definePackage(null, /** @lends _.com.github */ {
        vilmosnagy: Kotlin.definePackage(null, /** @lends _.com.github.vilmosnagy */ {
          multiplatform: Kotlin.definePackage(null, /** @lends _.com.github.vilmosnagy.multiplatform */ {
            DummyEntity: Kotlin.createClass(null, function DummyEntity(id, name) {
              this.id = id;
              this.name = name;
            }, /** @lends _.com.github.vilmosnagy.multiplatform.DummyEntity.prototype */ {
              component1: function () {
                return this.id;
              },
              component2: function () {
                return this.name;
              },
              copy_19mbxw$: function (id, name) {
                return new _.com.github.vilmosnagy.multiplatform.DummyEntity(id === void 0 ? this.id : id, name === void 0 ? this.name : name);
              },
              toString: function () {
                return 'DummyEntity(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + ')';
              },
              hashCode: function () {
                var result = 0;
                result = result * 31 + Kotlin.hashCode(this.id) | 0;
                result = result * 31 + Kotlin.hashCode(this.name) | 0;
                return result;
              },
              equals_za3rmp$: function (other) {
                return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name)))));
              }
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('multiplatform', _);
  return _;
}(kotlin);
