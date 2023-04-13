import { UserProfile } from "../../profiling/businessLogic/UserProfile";
import { CoachHistory } from "../coachingHistory/businessLogic/CoachHistory";
import { Action } from "../data/actions";

export abstract class ActionService {
    abstract selectAction(userProfile: UserProfile, coachHistory: CoachHistory): Action;
}

export class BasicActionService implements ActionService {
    selectAction(userProfile: UserProfile, coachHistory: CoachHistory): Action {
        return Action.changeHabit;
    }
}