import UserMenu from './UserMenu';
import GuestMenu from './GuestMenu';

export const Logged = ({logged}) => {
	return logged ? <UserMenu /> : <GuestMenu />;
}
