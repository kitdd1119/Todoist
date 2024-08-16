import Realm from "realm";

// Schedule 모델 정의
class Schedule extends Realm.Object {}
Schedule.schema = {
  name: "Schedule",
  primaryKey: "id",
  properties: {
    id: "string",
    text: "string",
    // date: "date",
  },
};

export default Schedule;