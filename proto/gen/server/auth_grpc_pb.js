// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_pb = require('./auth_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_Account(arg) {
  if (!(arg instanceof auth_pb.Account)) {
    throw new Error('Expected argument of type todo.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Account(buffer_arg) {
  return auth_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  register: {
    path: '/todo.Auth/Register',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.Account,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_todo_Account,
    requestDeserialize: deserialize_todo_Account,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  login: {
    path: '/todo.Auth/Login',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.Account,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_todo_Account,
    requestDeserialize: deserialize_todo_Account,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
