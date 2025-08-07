// 데이터 불러오기
import { results, mbtis } from "./data.js";

// 1. URL에서 ?mbti=xxxx 읽어오기
const mbti = new URLSearchParams(location.search).get('mbti');
console.log(mbti)

console.log(mbtis[mbti])

const resultMbti = results[mbtis[mbti]]
console.log(resultMbti)



// // 2. 잘못된 MBTI 예외 처리
// if (!mbti || !mbtis.hasOwnProperty(mbti)) {
//   alert("MBTI 정보가 잘못되었거나 없습니다.");
//   location.href = "/"; // 메인으로 이동
// }

// // 3. 결과 데이터 가져오기
// const resultIndex = mbtis[mbti];
// const result = results[resultIndex];



// 4. HTML 요소 선택
const titleEl = document.querySelector(".page-title");            // 제목
const characterEl = document.querySelector(".character");         // 캐릭터 이미지
const boxEls = document.querySelectorAll(".box");                 // 설명 박스들
const jobsEls = document.querySelectorAll(".job");                // 직업 박스들
const lectureEl = document.querySelector(".lecture");             // 강의 링크
const lectureImgEl = document.querySelector(".lecture img");      // 강의 이미지

titleEl.innerHTML = resultMbti.title
characterEl .src = resultMbti.character

boxEls.forEach(function(box, i){
 box.innerHTML = resultMbti.results[i]
})

jobsEls.forEach((job, i)=>{
  job.innerHTML = resultMbti.jobs[i]
})

lectureEl.href = resultMbti.lectureUrl
console.log(resultMbti.lectureUrl)
lectureImgEl.src = resultMbti.lectureImg















// // -------------------------
// // ✅ 조건 1: innerHTML 사용해서 데이터 넣기
// titleEl.innerHTML = result.title;

// // ✅ 캐릭터 이미지는 src 속성 변경
// characterEl.src = result.character;

// // -------------------------
// // ✅ 조건 2: querySelectorAll 로 가져온 boxEls, jobsEls는 forEach로 반복 처리
// boxEls.forEach((el, i) => {
//   el.innerHTML = result.results[i];
// });

// jobsEls.forEach((el, i) => {
//   el.innerHTML = result.jobs[i];
// });

// // -------------------------
// // ✅ 조건 3: lecture 는 lecture.html 페이지를 보이게 함
// lectureEl.href = result.lectureUrl;
// lectureImgEl.src = result.lectureImg;

