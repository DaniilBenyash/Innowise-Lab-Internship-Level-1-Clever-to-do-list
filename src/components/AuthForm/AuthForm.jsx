import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const AuthForm = ({
  valueEmail,
  onChangeEmail,
  valuePassword,
  onChangePassword,
  nameButton,
  onClickButton
}) => {
  return (
    <form action="">
      <Input
        label="Email"
        placeholder="Your email"
        value={valueEmail}
        onChange={onChangeEmail}
        type="email"
      />
      <Input
        label="Password"
        placeholder="Your password"
        value={valuePassword}
        onChange={onChangePassword}
        type="password"
      />
      <Button text={nameButton} onClick={onClickButton} />
    </form>
  );
};
