import { CoachHistory } from "./CoachHistory";

export abstract class CoachHistoryService {
    abstract fetchCoachHistory(): CoachHistory;
}

export class CoachHistoryServiceImpl implements CoachHistoryService {
    fetchCoachHistory(): CoachHistory {
        return new CoachHistory();
    }
}