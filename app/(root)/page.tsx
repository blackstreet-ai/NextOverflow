import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold flex h-screen items-center justify-center text-center font-space-grotesk">
        Welcome to the world of Next.js
      </h1>
    </>
  );
};

export default Home;
