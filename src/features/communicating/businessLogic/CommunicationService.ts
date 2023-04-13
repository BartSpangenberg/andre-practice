import { CoachHistory } from "../../action/coachingHistory/businessLogic/CoachHistory";
import { UserProfile } from "../../profiling/businessLogic/UserProfile";
import { Channel } from "./Channel";
import { Communication } from "./Communication";

export abstract class CommunicationService {
    protected communication: Communication = new Communication();

    public createCommunication(userProfile: UserProfile, coachHistory: CoachHistory): Communication {
        this.setMessage(userProfile, coachHistory);
        this.selectChannel(userProfile, coachHistory);
        return this.communication;
    }

    protected abstract setMessage(userProfile: UserProfile, coachHistory: CoachHistory): void;

    private selectChannel(userProfile: UserProfile, coachHistory: CoachHistory) {
        this.communication.channel = Channel.inAppNotification;
    }
}


export class StrictCommunicationService extends CommunicationService {
    protected setMessage(userProfile: UserProfile, coachHistory: CoachHistory): void {
        this.communication.message = "You're doing great! Keep going!";
    }
}

