import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  user?: User;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const User: NextPage<Props> = ({ user }: Props) => {
  const router = useRouter();
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>{user?.id}</h4>
      <h4 style={{ textAlign: "center" }}>{user?.email}</h4>
      <h4 style={{ textAlign: "center" }}>{user?.username}</h4>
      <h2>
        <Link href="/details">Details</Link>
      </h2>
    </div>
  );
};

User.getInitialProps = async (ctx: NextPageContext) => {
  console.log("ctx", ctx.req);
  const { query } = ctx;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + query.user
  );
  const user: User = await response.json();
  return { user };
};

export default User;
