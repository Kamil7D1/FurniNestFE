import { Outlet, Link } from "react-router-dom";

export const Profile: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-10 w-full items-center justify-center">
        <p className="text-2xl">Hello,</p>
        <h2 className="text-4xl">Kamil</h2>
        <ul className="*:my-5 *:text-2xl">
          <li>
            <Link to="orders">
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="favourite">
              <p>Favourite</p>
            </Link>
          </li>
          <li>
            <Link to="account-settings">
              <p>Account Settings </p>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
