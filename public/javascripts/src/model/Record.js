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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Dis) {
      root.Dis = {};
    }
    root.Dis.Record = factory(root.Dis.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Record model module.
   * @module model/Record
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>Record</code>.
   * @alias module:model/Record
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Record</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Record} obj Optional instance to populate.
   * @return {module:model/Record} The populated <code>Record</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('partition_key')) {
        obj['partition_key'] = ApiClient.convertToType(data['partition_key'], 'String');
      }
      if (data.hasOwnProperty('sequence_number')) {
        obj['sequence_number'] = ApiClient.convertToType(data['sequence_number'], 'String');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'Blob');
      }
      if (data.hasOwnProperty('approximate_arrival_timestamp')) {
        obj['approximate_arrival_timestamp'] = ApiClient.convertToType(data['approximate_arrival_timestamp'], 'Number');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('timestamp_type')) {
        obj['timestamp_type'] = ApiClient.convertToType(data['timestamp_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Partition key of the partition into which an individual data record will be put.
   * @member {String} partition_key
   */
  exports.prototype['partition_key'] = undefined;
  /**
   * Sequence number of the data record pulled from the DIS stream.
   * @member {String} sequence_number
   */
  exports.prototype['sequence_number'] = undefined;
  /**
   * Data pulled from the DIS stream.
   * @member {Blob} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Number} approximate_arrival_timestamp
   */
  exports.prototype['approximate_arrival_timestamp'] = undefined;
  /**
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {String} timestamp_type
   */
  exports.prototype['timestamp_type'] = undefined;



  return exports;
}));


