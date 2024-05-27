import axios from "axios";

const DB_URL = 'url값';

export function sendSchedule(enteredScheduleText) {
    axios.post(
        // 추가한 일정마다 각각의 DB 생성
        DB_URL + `/todolist/${enteredScheduleText}.json`, enteredScheduleText
        // 만약에 객체로 전달해야 한다면 { scheduleText: enteredScheduleText } 로 바꿔 json 형식으로 전달
    );
}

export async function deleteSchedule(id) {
    axios.delete(
        DB_URL + `/todolist/${id}.json`
    );
}

export async function fetchSchedule() {
    const response = axios.get(DB_URL + '/파일 명');

    const schedules = [];

    console.log(response.data);
    // 로그로 어떤 데이터가 반환되는지 확인하기

    for (const key in response.data) {
        const scheduleObj = {
            id: key,
            text: response.data[key].text,
            // date: new Date(response.data[key].date),
            // date는 나중에 일정을 추가했을 때 일자 표기 시 주석 해제하면 될 듯.
        };
        schedules.push(scheduleObj);
    }
    return schedules;
}
// test