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
    root.Dis.CommitCheckpointRequest = factory(root.Dis.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommitCheckpointRequest model module.
   * @module model/CommitCheckpointRequest
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>CommitCheckpointRequest</code>.
   * @alias module:model/CommitCheckpointRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CommitCheckpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommitCheckpointRequest} obj Optional instance to populate.
   * @return {module:model/CommitCheckpointRequest} The populated <code>CommitCheckpointRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('app_name')) {
        obj['app_name'] = ApiClient.convertToType(data['app_name'], 'String');
      }
      if (data.hasOwnProperty('checkpoint_type')) {
        obj['checkpoint_type'] = ApiClient.convertToType(data['checkpoint_type'], 'String');
      }
      if (data.hasOwnProperty('stream_name')) {
        obj['stream_name'] = ApiClient.convertToType(data['stream_name'], 'String');
      }
      if (data.hasOwnProperty('partition_id')) {
        obj['partition_id'] = ApiClient.convertToType(data['partition_id'], 'String');
      }
      if (data.hasOwnProperty('sequence_number')) {
        obj['sequence_number'] = ApiClient.convertToType(data['sequence_number'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique name of the consumer application that will read data from the chosen DIS stream.
   * @member {String} app_name
   */
  exports.prototype['app_name'] = undefined;
  /**
   * Checkpoint Type
   * @member {module:model/CommitCheckpointRequest.CheckpointTypeEnum} checkpoint_type
   */
  exports.prototype['checkpoint_type'] = undefined;
  /**
   * Name of the DIS stream whose data record will have a checkpoint.
   * @member {String} stream_name
   */
  exports.prototype['stream_name'] = undefined;
  /**
   * Partition ID
   * @member {String} partition_id
   */
  exports.prototype['partition_id'] = undefined;
  /**
   * Unique sequence number of the record for which a checkpoint will be added.
   * @member {String} sequence_number
   */
  exports.prototype['sequence_number'] = undefined;
  /**
   * Metadata of the consumer application.
   * @member {String} metadata
   */
  exports.prototype['metadata'] = undefined;


  /**
   * Allowed values for the <code>checkpoint_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CheckpointTypeEnum = {
    /**
     * value: "LAST_READ"
     * @const
     */
    "READ": "LAST_READ",
    /**
     * value: "LAST_COMPUTE"
     * @const
     */
    "COMPUTE": "LAST_COMPUTE"  };


  return exports;
}));


