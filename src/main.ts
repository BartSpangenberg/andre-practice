import { ActionService, BasicActionService } from "./features/action/businessLogic/ActionService";
import { CoachHistory } from "./features/action/coachingHistory/businessLogic/CoachHistory";
import { CoachHistoryService, CoachHistoryServiceImpl } from "./features/action/coachingHistory/businessLogic/CoachHistoryService";
import { Action } from "./features/action/data/actions";
import { Communication } from "./features/communicating/businessLogic/Communication";
import { StrictCommunicationService } from "./features/communicating/businessLogic/CommunicationService";
import { UserProfile } from "./features/profiling/businessLogic/UserProfile"
import { BasicProfileService } from "./features/profiling/businessLogic/UserProfileService";

const main = () => {
    let userProfile: UserProfile = new BasicProfileService();
    let coachHistory: CoachHistory = new CoachHistoryServiceImpl().fetchCoachHistory()

    // Visitor pattern ==> userProfile and coachHistory visit the ActionService
    let action: Action = new BasicActionService().selectAction(userProfile, coachHistory);

    // Unclear what pattern is used here
    let communication: Communication = new StrictCommunicationService().createCommunication(userProfile, coachHistory);

    console.log(`The message: "${communication.message}" will be send via channel: ${communication.channel}`);
}

main();