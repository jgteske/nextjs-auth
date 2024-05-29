import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't habe an account?"
      backButtonHref="/auth/register"
      showSocial // remove to not use social logins
    >
      Login Form!
    </CardWrapper>
  );
};
