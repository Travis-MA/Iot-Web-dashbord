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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CloudtableDestinationDescriptorRequest', 'model/CloudtableSchema', 'model/CommitCheckpointRequest', 'model/CreateAppRequest', 'model/CreateStreamReq', 'model/DescribeStreamResult', 'model/GetCheckpointResult', 'model/GetPartitionCursorResult', 'model/GetRecordsResult', 'model/ListStreamsResult', 'model/OBSDestinationDescriptorRequest', 'model/OpenTSDBSchema', 'model/PartitionResult', 'model/PutRecordsRequest', 'model/PutRecordsRequestEntry', 'model/PutRecordsRequestEntryExtendedInfo', 'model/PutRecordsResult', 'model/PutRecordsResultEntry', 'model/Record', 'model/SchemaField', 'model/MRSDestinationDescriptorRequest', 'model/UqueryDestinationDescriptorRequest', 'api/AppApi', 'api/CheckpointApi', 'api/RecordApi', 'api/StreamApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CloudtableDestinationDescriptorRequest'), require('./model/CloudtableSchema'), require('./model/CommitCheckpointRequest'), require('./model/CreateAppRequest'), require('./model/CreateStreamReq'), require('./model/DescribeStreamResult'), require('./model/GetCheckpointResult'), require('./model/GetPartitionCursorResult'), require('./model/GetRecordsResult'), require('./model/ListStreamsResult'), require('./model/OBSDestinationDescriptorRequest'), require('./model/OpenTSDBSchema'), require('./model/PartitionResult'), require('./model/PutRecordsRequest'), require('./model/PutRecordsRequestEntry'), require('./model/PutRecordsRequestEntryExtendedInfo'), require('./model/PutRecordsResult'), require('./model/PutRecordsResultEntry'), require('./model/Record'), require('./model/SchemaField'), require('./model/MRSDestinationDescriptorRequest'), require('./model/UqueryDestinationDescriptorRequest'), require('./api/AppApi'), require('./api/CheckpointApi'), require('./api/RecordApi'), require('./api/StreamApi'));
  }
}(function(ApiClient, CloudtableDestinationDescriptorRequest, CloudtableSchema, CommitCheckpointRequest, CreateAppRequest, CreateStreamReq, DescribeStreamResult, GetCheckpointResult, GetPartitionCursorResult, GetRecordsResult, ListStreamsResult, OBSDestinationDescriptorRequest, OpenTSDBSchema, PartitionResult, PutRecordsRequest, PutRecordsRequestEntry, PutRecordsRequestEntryExtendedInfo, PutRecordsResult, PutRecordsResultEntry, Record, SchemaField, MRSDestinationDescriptorRequest, UqueryDestinationDescriptorRequest, AppApi, CheckpointApi, RecordApi, StreamApi) {
  'use strict';

  /**
   * .<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Dis = require('index'); // See note below*.
   * var xxxSvc = new Dis.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Dis.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Dis.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Dis.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.3.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CloudtableDestinationDescriptorRequest model constructor.
     * @property {module:model/CloudtableDestinationDescriptorRequest}
     */
    CloudtableDestinationDescriptorRequest: CloudtableDestinationDescriptorRequest,
    /**
     * The CloudtableSchema model constructor.
     * @property {module:model/CloudtableSchema}
     */
    CloudtableSchema: CloudtableSchema,
    /**
     * The CommitCheckpointRequest model constructor.
     * @property {module:model/CommitCheckpointRequest}
     */
    CommitCheckpointRequest: CommitCheckpointRequest,
    /**
     * The CreateAppRequest model constructor.
     * @property {module:model/CreateAppRequest}
     */
    CreateAppRequest: CreateAppRequest,
    /**
     * The CreateStreamReq model constructor.
     * @property {module:model/CreateStreamReq}
     */
    CreateStreamReq: CreateStreamReq,
    /**
     * The DescribeStreamResult model constructor.
     * @property {module:model/DescribeStreamResult}
     */
    DescribeStreamResult: DescribeStreamResult,
    /**
     * The GetCheckpointResult model constructor.
     * @property {module:model/GetCheckpointResult}
     */
    GetCheckpointResult: GetCheckpointResult,
    /**
     * The GetPartitionCursorResult model constructor.
     * @property {module:model/GetPartitionCursorResult}
     */
    GetPartitionCursorResult: GetPartitionCursorResult,
    /**
     * The GetRecordsResult model constructor.
     * @property {module:model/GetRecordsResult}
     */
    GetRecordsResult: GetRecordsResult,
    /**
     * The ListStreamsResult model constructor.
     * @property {module:model/ListStreamsResult}
     */
    ListStreamsResult: ListStreamsResult,
    /**
     * The OBSDestinationDescriptorRequest model constructor.
     * @property {module:model/OBSDestinationDescriptorRequest}
     */
    OBSDestinationDescriptorRequest: OBSDestinationDescriptorRequest,
    /**
     * The OpenTSDBSchema model constructor.
     * @property {module:model/OpenTSDBSchema}
     */
    OpenTSDBSchema: OpenTSDBSchema,
    /**
     * The PartitionResult model constructor.
     * @property {module:model/PartitionResult}
     */
    PartitionResult: PartitionResult,
    /**
     * The PutRecordsRequest model constructor.
     * @property {module:model/PutRecordsRequest}
     */
    PutRecordsRequest: PutRecordsRequest,
    /**
     * The PutRecordsRequestEntry model constructor.
     * @property {module:model/PutRecordsRequestEntry}
     */
    PutRecordsRequestEntry: PutRecordsRequestEntry,
    /**
     * The PutRecordsRequestEntryExtendedInfo model constructor.
     * @property {module:model/PutRecordsRequestEntryExtendedInfo}
     */
    PutRecordsRequestEntryExtendedInfo: PutRecordsRequestEntryExtendedInfo,
    /**
     * The PutRecordsResult model constructor.
     * @property {module:model/PutRecordsResult}
     */
    PutRecordsResult: PutRecordsResult,
    /**
     * The PutRecordsResultEntry model constructor.
     * @property {module:model/PutRecordsResultEntry}
     */
    PutRecordsResultEntry: PutRecordsResultEntry,
    /**
     * The Record model constructor.
     * @property {module:model/Record}
     */
    Record: Record,
    /**
     * The SchemaField model constructor.
     * @property {module:model/SchemaField}
     */
    SchemaField: SchemaField,
    /**
     * The MRSDestinationDescriptorRequest model constructor.
     * @property {module:model/MRSDestinationDescriptorRequest}
     */
    MRSDestinationDescriptorRequest: MRSDestinationDescriptorRequest,
    /**
     * The UqueryDestinationDescriptorRequest model constructor.
     * @property {module:model/UqueryDestinationDescriptorRequest}
     */
    UqueryDestinationDescriptorRequest: UqueryDestinationDescriptorRequest,
    /**
     * The AppApi service constructor.
     * @property {module:api/AppApi}
     */
    AppApi: AppApi,
    /**
     * The CheckpointApi service constructor.
     * @property {module:api/CheckpointApi}
     */
    CheckpointApi: CheckpointApi,
    /**
     * The RecordApi service constructor.
     * @property {module:api/RecordApi}
     */
    RecordApi: RecordApi,
    /**
     * The StreamApi service constructor.
     * @property {module:api/StreamApi}
     */
    StreamApi: StreamApi
  };

  return exports;
}));
