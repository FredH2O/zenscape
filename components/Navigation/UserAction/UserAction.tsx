import {
  FaShoppingCart as ShoppingCartIcon,
  FaUser as UserIcon,
} from "react-icons/fa";

type UserActionProps = {
  className?: string;
};

const userIcons = [
  {
    name: "Sign-in",
    icon: <UserIcon className="text-2xl" />,
  },
  {
    name: "Cart",
    icon: <ShoppingCartIcon className="text-2xl" />,
  },
];

const UserAction = ({ className }: UserActionProps) => {
  return (
    <div className={`gap-5 text-center ${className}`}>
      {userIcons.map((user) => (
        <button
          key={user.name}
          className="flex flex-col text-slate-600 justify-center items-center cursor-pointer"
        >
          {user.icon} {user.name}
        </button>
      ))}
    </div>
  );
};

export default UserAction;
