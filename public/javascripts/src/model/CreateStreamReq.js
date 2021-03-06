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
    define(['ApiClient', 'model/CloudtableDestinationDescriptorRequest', 'model/MRSDestinationDescriptorRequest', 'model/OBSDestinationDescriptorRequest', 'model/UqueryDestinationDescriptorRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CloudtableDestinationDescriptorRequest'), require('./MRSDestinationDescriptorRequest'), require('./OBSDestinationDescriptorRequest'), require('./UqueryDestinationDescriptorRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Dis) {
      root.Dis = {};
    }
    root.Dis.CreateStreamReq = factory(root.Dis.ApiClient, root.Dis.CloudtableDestinationDescriptorRequest, root.Dis.MRSDestinationDescriptorRequest, root.Dis.OBSDestinationDescriptorRequest, root.Dis.UqueryDestinationDescriptorRequest);
  }
}(this, function(ApiClient, CloudtableDestinationDescriptorRequest, MRSDestinationDescriptorRequest, OBSDestinationDescriptorRequest, UqueryDestinationDescriptorRequest) {
  'use strict';




  /**
   * The CreateStreamReq model module.
   * @module model/CreateStreamReq
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>CreateStreamReq</code>.
   * @alias module:model/CreateStreamReq
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CreateStreamReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateStreamReq} obj Optional instance to populate.
   * @return {module:model/CreateStreamReq} The populated <code>CreateStreamReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('stream_name')) {
        obj['stream_name'] = ApiClient.convertToType(data['stream_name'], 'String');
      }
      if (data.hasOwnProperty('partition_count')) {
        obj['partition_count'] = ApiClient.convertToType(data['partition_count'], 'Number');
      }
      if (data.hasOwnProperty('stream_type')) {
        obj['stream_type'] = ApiClient.convertToType(data['stream_type'], 'String');
      }
      if (data.hasOwnProperty('data_type')) {
        obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
      }
      if (data.hasOwnProperty('data_duration')) {
        obj['data_duration'] = ApiClient.convertToType(data['data_duration'], 'Number');
      }
      if (data.hasOwnProperty('obs_destination_descriptor')) {
        obj['obs_destination_descriptor'] = ApiClient.convertToType(data['obs_destination_descriptor'], [OBSDestinationDescriptorRequest]);
      }
      if (data.hasOwnProperty('mrs_destination_descriptor')) {
        obj['mrs_destination_descriptor'] = ApiClient.convertToType(data['mrs_destination_descriptor'], [MRSDestinationDescriptorRequest]);
      }
      if (data.hasOwnProperty('uquery_destination_descriptor')) {
        obj['uquery_destination_descriptor'] = ApiClient.convertToType(data['uquery_destination_descriptor'], [UqueryDestinationDescriptorRequest]);
      }
      if (data.hasOwnProperty('cloudtable_destination_descriptor')) {
        obj['cloudtable_destination_descriptor'] = ApiClient.convertToType(data['cloudtable_destination_descriptor'], [CloudtableDestinationDescriptorRequest]);
      }
    }
    return obj;
  }

  /**
   * Name of the DIS stream to be created.
   * @member {String} stream_name
   */
  exports.prototype['stream_name'] = undefined;
  /**
   * The number of partitions into which data records in the newly created DIS stream will be distributed.
   * @member {Number} partition_count
   */
  exports.prototype['partition_count'] = undefined;
  /**
   * Partition Type.
   * @member {module:model/CreateStreamReq.StreamTypeEnum} stream_type
   */
  exports.prototype['stream_type'] = undefined;
  /**
   * Data type of the data putting into the stream.
   * @member {module:model/CreateStreamReq.DataTypeEnum} data_type
   */
  exports.prototype['data_type'] = undefined;
  /**
   * The number of hours for which data from the stream will be retained in DIS.
   * @member {Number} data_duration
   */
  exports.prototype['data_duration'] = undefined;
  /**
   * Parameter list of the OBS to which data in the DIS stream will be dumped.
   * @member {Array.<module:model/OBSDestinationDescriptorRequest>} obs_destination_descriptor
   */
  exports.prototype['obs_destination_descriptor'] = undefined;
  /**
   * Parameter list of the MRS to which data in the DIS stream will be dumped.
   * @member {Array.<module:model/MRSDestinationDescriptorRequest>} mrs_destination_descriptor
   */
  exports.prototype['mrs_destination_descriptor'] = undefined;
  /**
   * Parameter list of the UQuery to which data in the DIS stream will be dumped.
   * @member {Array.<module:model/UqueryDestinationDescriptorRequest>} uquery_destination_descriptor
   */
  exports.prototype['uquery_destination_descriptor'] = undefined;
  /**
   * A list of parameters required for dumping data to CloudTable.
   * @member {Array.<module:model/CloudtableDestinationDescriptorRequest>} cloudtable_destination_descriptor
   */
  exports.prototype['cloudtable_destination_descriptor'] = undefined;


  /**
   * Allowed values for the <code>stream_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StreamTypeEnum = {
    /**
     * value: "COMMON"
     * @const
     */
    "COMMON": "COMMON",
    /**
     * value: "ADVANCED"
     * @const
     */
    "ADVANCED": "ADVANCED"  };

  /**
   * Allowed values for the <code>data_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DataTypeEnum = {
    /**
     * value: "BLOB"
     * @const
     */
    "BLOB": "BLOB",
    /**
     * value: "JSON"
     * @const
     */
    "JSON": "JSON"  };


  return exports;
}));


