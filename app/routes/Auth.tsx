import { usePuterStore } from "~/lib/puter";
import { useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const meta = () => [
  { title: "Resumind | Auth" },
  { name: "description", content: "log in into your account" },
];
const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();
  useEffect(() => {
if (auth.isAuthenticated) navigate(next)
  },[auth.isAuthenticated,next])
  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1> Here you are !</h1>
            <h2>log in to continue your job craft</h2>
          </div>
            <div>
                {" "}
                {isLoading ? (
                    <button className="auth-button animate-pulse">
                        <p> signing you in ...</p>
                    </button>
                ) : (
                    <>
                        {auth.isAuthenticated ? (
                            <button className="auth-button" onClick={auth.signOut}>
                                Log out
                            </button>
                        ) : (
                            <button className="auth-button" onClick={auth.signIn}>
                                Log in
                            </button>
                        )}
                    </>
                )}
            </div>
        </section>
      </div>

    </main>
  );
};
export default Auth;
