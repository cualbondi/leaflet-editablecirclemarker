!function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){function r(){i||(i={includes:L.Evented,options:{weight:1,clickable:!1,draggable:!0},initialize:function(t,e,r){r=r||{},L.Util.setOptions(this,r),this._latlng=L.latLng(t),this._radius=e;var i={};this.options.className&&(i.icon=new L.DivIcon({className:this.options.className})),this.options.icon&&(i.icon=this.options.icon),i.draggable=this.options.draggable,this._marker=new L.Marker(t,i),this.options.popup&&this._marker.bindPopup(this.options.popup),this._circle=new L.Circle(t,e,this.options);var n=this;this._marker.on("movestart",function(){n.fire("movestart")}),this._marker.on("move",function(t){var e=n._latlng;return n._latlng=this._latlng,n._circle.setLatLng(n._latlng),n.fire("move",{oldLatLng:e,latlng:n._latlng})}),this._marker.on("moveend",function(){n._marker.setLatLng(this._latlng),n.fire("moveend")})},onAdd:function(t){this._map=t,t.addLayer(this._marker),t.addLayer(this._circle),this.options.draggable&&this._marker.dragging.enable()},onRemove:function(t){t.removeLayer(this._marker),t.removeLayer(this._circle)},getEvents:function(){return{zoom:this.updateMarker,viewreset:this.updateMarker}},updateMarker:function(){if(this._marker._icon&&this._marker._map){var t=this._marker._map.latLngToLayerPoint(this._marker._latlng).round();this._marker._setPos(t)}return this},getBounds:function(){return this._circle.getBounds()},getLatLng:function(){return this._latlng},setLatLng:function(t){this._marker.fire("movestart"),this._latlng=L.latLng(t),this._marker.setLatLng(this._latlng),this._circle.setLatLng(this._latlng),this._marker.fire("moveend")},getRadius:function(){return this._radius},setRadius:function(t){this._radius=t,this._circle.setRadius(t)},getCircleOptions:function(){return this._circle.options},setCircleStyle:function(t){this._circle.setStyle(t)}}),L.EditableCircleMarker||(L.EditableCircleMarker=L.Layer.extend(i)),L.editableCircleMarker||(L.editableCircleMarker=function(t,e,r){return new L.EditableCircleMarker(t,e,r)})}var i=null;L&&L.Layer&&L.Layer.extend&&r(),t.exports=function(t,e,i){if(!L||!L.Layer||!L.Layer.extend)throw new Error("Leaflet must be loaded before instantiating the editableCircleMarker plugin");return r(),L.editableCircleMarker(t,e,i)}}]);