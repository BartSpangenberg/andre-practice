import { UserProfile } from "./UserProfile";

export abstract class UserProfileService {
    abstract createProfile(): UserProfile;
}

export class BasicProfileService implements UserProfileService {
    createProfile(): UserProfile {
        return new UserProfile();
    }
}