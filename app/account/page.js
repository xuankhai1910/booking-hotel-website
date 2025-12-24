import Navigation from "../_components/Navigation";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Tài khoản",
};
export default async function Page() {
  const session = await auth();
  console.log(session);
  const firstName = session.user.name.split(" ")[0];
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  );
}
