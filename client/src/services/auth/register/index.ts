import { AuthClient } from "@todo-app/proto/gen/client/AuthServiceClientPb";
import { Account } from "@todo-app/proto/gen/client/auth_pb";

const serverURL = "http://localhost:8080";

type Props = {
  userId: string,
  password: string,
}

export const register = ({
  userId,
  password
}: Props) => {
  const account = new Account();
  account.setUserId(userId);
  account.setPassword(password);

  const authClient = new AuthClient(serverURL, {}, {});

  return new Promise((resolve, reject) => {
    authClient.register(account, {}, (error, response) => {
      if (error) {
        reject();
      }
      return resolve({});
    })
  });
}
