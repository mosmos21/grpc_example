import { Server, ServerCredentials } from "@grpc/grpc-js";
import { AuthService } from "@todo-app/proto/gen/server/auth_grpc_pb";
import { register } from "@/handler/auth/register";

const server = new Server();
server.addService(AuthService, { register });

server.bindAsync("0.0.0.0:8081",  ServerCredentials.createInsecure(), () => {
  server.start()
})
