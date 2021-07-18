import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { Account } from "@todo-app/proto/gen/server/auth_pb";

export const register = (
  call: ServerUnaryCall<Account, void>,
  callback: sendUnaryData<void>
) => {
  console.log(call.request);
  callback(null);
}
