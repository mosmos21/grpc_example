import React from "react";
import {
  Container,
  Card,
  Typography,
  FormControl,
  Button,
  TextField,
  styled
} from "@material-ui/core";
import { Control, Controller } from "react-hook-form";
import { FormData } from "@/hooks/useAuthForm";

type Props = {
  title: string;
  control: Control<FormData>;
  onClickSubmit: () => void;
}

export const AuthForm: React.VFC<Props> = ({
  title,
  control,
  onClickSubmit
}) => (
  <Container maxWidth="xs">
    <_Card>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      <Form>
        <Controller
          name="userId"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user_id"
              label="User ID"
              autoComplete="user_id"
              autoFocus
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...field}
            />
          )}
        />
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={onClickSubmit}
        >
          {title}
        </SubmitButton>
      </Form>
    </_Card>
  </Container>
);

const _Card = styled(Card)({
  marginTop: 40,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

const Form = styled(FormControl)({
  width: "100%",
  marginTop: 12
})

const SubmitButton = styled(Button)({
  margin: "12px 0"
})
