/**
 * DIS
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SchemaField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SchemaField'));
  } else {
    // Browser globals (root is window)
    if (!root.Dis) {
      root.Dis = {};
    }
    root.Dis.CloudtableSchema = factory(root.Dis.ApiClient, root.Dis.SchemaField);
  }
}(this, function(ApiClient, SchemaField) {
  'use strict';




  /**
   * The CloudtableSchema model module.
   * @module model/CloudtableSchema
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>CloudtableSchema</code>.
   * @alias module:model/CloudtableSchema
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CloudtableSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CloudtableSchema} obj Optional instance to populate.
   * @return {module:model/CloudtableSchema} The populated <code>CloudtableSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('row_key')) {
        obj['row_key'] = ApiClient.convertToType(data['row_key'], [SchemaField]);
      }
      if (data.hasOwnProperty('columns')) {
        obj['columns'] = ApiClient.convertToType(data['columns'], [SchemaField]);
      }
    }
    return obj;
  }

  /**
   * HBase rowkey Schema used by the CloudTable cluster to convert JSON data into HBase rowkeys.
   * @member {Array.<module:model/SchemaField>} row_key
   */
  exports.prototype['row_key'] = undefined;
  /**
   * HBase column Schema used by the CloudTable cluster to convert JSON data into HBase columns.
   * @member {Array.<module:model/SchemaField>} columns
   */
  exports.prototype['columns'] = undefined;



  return exports;
}));

