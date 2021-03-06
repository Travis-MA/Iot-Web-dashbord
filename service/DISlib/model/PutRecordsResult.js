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
    define(['ApiClient', 'model/PutRecordsResultEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PutRecordsResultEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.Dis) {
      root.Dis = {};
    }
    root.Dis.PutRecordsResult = factory(root.Dis.ApiClient, root.Dis.PutRecordsResultEntry);
  }
}(this, function(ApiClient, PutRecordsResultEntry) {
  'use strict';




  /**
   * The PutRecordsResult model module.
   * @module model/PutRecordsResult
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PutRecordsResult</code>.
   * @alias module:model/PutRecordsResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PutRecordsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutRecordsResult} obj Optional instance to populate.
   * @return {module:model/PutRecordsResult} The populated <code>PutRecordsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('failed_record_count')) {
        obj['failed_record_count'] = ApiClient.convertToType(data['failed_record_count'], 'Number');
      }
      if (data.hasOwnProperty('records')) {
        obj['records'] = ApiClient.convertToType(data['records'], [PutRecordsResultEntry]);
      }
    }
    return obj;
  }

  /**
   * The number of data records that failed to be put into the selected DIS stream.
   * @member {Number} failed_record_count
   */
  exports.prototype['failed_record_count'] = undefined;
  /**
   * @member {Array.<module:model/PutRecordsResultEntry>} records
   */
  exports.prototype['records'] = undefined;



  return exports;
}));


