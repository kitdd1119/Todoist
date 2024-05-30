import axios from "axios";

const DB_URL = 'http://localhost:3001/';

export function sendSchedule(enteredScheduleText) {
    axios.post(
        // 내가 보내는 주소는 server의 router주소와 연관 관계를 맺어야함 
        // 예제로 localhost:3001/todolist/todo로 연결을 하면 
        // todolist의 router가 todo라는 컨트롤러로 호출하는 형식 
        // 이형식에 맞춰 필요한 데이터를 json파일로 보내는 것을 server와의 통신 즉 back-end와의 연결이다
        // 즉, 서버에서 사용자가 입력한 일정 값을 기반으로 한 폴더를 하나 생성할 수 있도록 만들어야 한다.
        // 추가한 일정마다 각각의 column 생성
        DB_URL + `schedules/${enteredScheduleText}.json`, { scheduleText: enteredScheduleText }
    );
}

export async function deleteSchedule(id) {
    axios.delete(
        // delete 또한 삭제해야하는 파일의 정확한 정보를 알 수 있는 코드를 보내줘야함
        DB_URL + `delete/${id}.json`
    );
}

export async function fetchSchedule(enteredScheduleText) {
    const response = axios.get(DB_URL + enteredScheduleText);

    const schedules = [];

    console.log(response.data);
    // 로그로 어떤 데이터가 반환되는지 확인하기

    for (const key in response.data) {
        const scheduleObj = {
            id: key,
            text: response.data[key].text,
            // column 값은 하나씩 받아온다 필요한컬럼이무엇인지 정학히 파악
            // date: new Date(response.data[key].date),
            // date는 나중에 일정을 추가했을 때 일자 표기 시 주석 해제하면 될 듯.
        };
        schedules.push(scheduleObj);
    }
    return schedules;
}
