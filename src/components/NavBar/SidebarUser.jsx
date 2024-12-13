import useCurrentUser from "../../hooks/useCurrentUser";

const SidebarUser = () => {

    const user = useCurrentUser();

    return (
        user && <div className="flex items-center gap-2 overflow-hidden p-5 border-t dark:border-[#2f2f2f]">
            <img className="h-10 w-10 rounded-full border dark:border-[#2f2f2f]" src={user?.photoURL} alt={user?.displayName} />
            <div>
                <h4 className="font-bold">{user?.displayName}</h4>
                <p className="text-sm">{user?.email}</p>
            </div>
        </div>
    );
};

export default SidebarUser;