import { UserType } from '@/types/user';
import { atom } from 'jotai'

// TODO : set user type 

export const cloudAtom = atom<{auth_token? : string, user?: UserType}>({});
export const headerDropdownAtom = atom(false);  
export const noAtom = atom(0);