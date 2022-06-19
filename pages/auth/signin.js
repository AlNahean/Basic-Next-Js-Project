import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bi";

// pages/signin.jsx
const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
};
const SignInError = ({ error }) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return (
    <div className=" badge bg-danger text-danger bg-opacity-25 p-3 m-2">
      {errorMessage}
    </div>
  );
};

export default function SignIn({ providers }) {
  const { error } = useRouter().query;
  return (
    <>
      <div className=" center flex-column" style={{ minHeight: "100vh" }}>
        {error && <SignInError error={error} />}
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className=" btn btn-primary mb-2"
              onClick={() => signIn(provider.id)}
            >
              <p className=" m-0">Sign in with {provider.name}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
