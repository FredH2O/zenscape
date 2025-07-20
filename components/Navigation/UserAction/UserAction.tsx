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
    <div className={`${className}`}>
      {userIcons.map((user) => (
        <button
          key={user.name}
          className="flex md:flex-col text-sm justify-start gap-1 items-center cursor-pointer"
        >
          {user.icon} {user.name}
        </button>
      ))}
    </div>
  );
};

export default UserAction;
