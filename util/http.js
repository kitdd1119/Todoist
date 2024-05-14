import axios from "axios";

export function schedule(enteredScheduleText) {
    axios.post(
        'url값',
        enteredScheduleText
        // 만약에 객체로 전달해야 한다면 { scheduleText: enteredScheduleText } 로 바꿔 json 형식으로 전달
    );
}
