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
    root.Dis.OBSDestinationDescriptorRequest = factory(root.Dis.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OBSDestinationDescriptorRequest model module.
   * @module model/OBSDestinationDescriptorRequest
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>OBSDestinationDescriptorRequest</code>.
   * @alias module:model/OBSDestinationDescriptorRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>OBSDestinationDescriptorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OBSDestinationDescriptorRequest} obj Optional instance to populate.
   * @return {module:model/OBSDestinationDescriptorRequest} The populated <code>OBSDestinationDescriptorRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('task_name')) {
        obj['task_name'] = ApiClient.convertToType(data['task_name'], 'String');
      }
      if (data.hasOwnProperty('agency_name')) {
        obj['agency_name'] = ApiClient.convertToType(data['agency_name'], 'String');
      }
      if (data.hasOwnProperty('file_prefix')) {
        obj['file_prefix'] = ApiClient.convertToType(data['file_prefix'], 'String');
      }
      if (data.hasOwnProperty('partition_format')) {
        obj['partition_format'] = ApiClient.convertToType(data['partition_format'], 'String');
      }
      if (data.hasOwnProperty('obs_bucket_path')) {
        obj['obs_bucket_path'] = ApiClient.convertToType(data['obs_bucket_path'], 'String');
      }
      if (data.hasOwnProperty('deliver_time_interval')) {
        obj['deliver_time_interval'] = ApiClient.convertToType(data['deliver_time_interval'], 'Number');
      }
      if (data.hasOwnProperty('deliver_data_type')) {
        obj['deliver_data_type'] = ApiClient.convertToType(data['deliver_data_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} task_name
   */
  exports.prototype['task_name'] = undefined;
  /**
   * Name of the agency created in IAM. DIS uses an agency to access your specified resources.
   * @member {String} agency_name
   */
  exports.prototype['agency_name'] = undefined;
  /**
   * Directory to hold files that will be dumped to OBS. Different directory levels are separated by a forward slash (/) and cannot start with a forward slash (/).
   * @member {String} file_prefix
   */
  exports.prototype['file_prefix'] = undefined;
  /**
   * Directory structure of the Object file written into OBS.
   * @member {String} partition_format
   */
  exports.prototype['partition_format'] = undefined;
  /**
   * Name of the OBS bucket used to store data from the DIS stream.
   * @member {String} obs_bucket_path
   */
  exports.prototype['obs_bucket_path'] = undefined;
  /**
   * User-defined interval at which data from the DIS stream is imported into OBS.
   * @member {Number} deliver_time_interval
   */
  exports.prototype['deliver_time_interval'] = undefined;
  /**
   * This parameter is mandatory if Dump Type is set to Custom file.
   * @member {String} deliver_data_type
   */
  exports.prototype['deliver_data_type'] = undefined;



  return exports;
}));


