const question_box = document.getElementById('question_box')
const question_yes_btn = document.getElementById('question_yes')
const question_no_btn = document.getElementById('question_no')

question_yes_btn.addEventListener('click', () => {
    question_box.textContent = '';
    question_yes_btn.style.display = 'none';
    question_no_btn.style.display = 'none';


    const match_btn = document.createElement('button');
    match_btn.textContent = 'マッチングを開始';
    question_box.appendChild(match_btn);

    match_btn.addEventListener('click', async () => {

        match_btn.remove(); 
        question_box.textContent = 'マッチング中';

        await new Promise((resolve) => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    question_box.textContent += '.';

                    if (i === 4) resolve();
                }, (i + 1) * 500);
            }
        });

        question_box.textContent = 'あなたにマッチする人は見つかりませんでした';
    });
});

question_no_btn.addEventListener('click', () => {
    question_box.textContent = '農工大生以外は利用できません';
    question_yes_btn.style.display = 'none';
    question_no_btn.style.display = 'none';

})


const mbti_btn = document.getElementById('mbti')
const mbti_container = document.getElementById('mbti_container')
const mbti_result_area = document.getElementById('mbti_result')

const mbti_question = {
    text: "好きなのはどっち？",
    choices: [
        {label: "蚕", result: 'AGRI'},
        {label: "織機", result: 'TECH'}
    ]
}
mbti_btn.addEventListener('click', () => {
    mbti_btn.style.display = 'none';

    const p = document.createElement('p');
    p.textContent = mbti_question.text;
    mbti_container.appendChild(p);

    mbti_question.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice.label;
        btn.className = "choice-btn";

        mbti_container.appendChild(btn);

        btn.addEventListener('click', () => {
            mbti_container.style.display = 'none';
            mbti_result_area.textContent =  `あなたのMBTIは${choice.result}です`
        })
    })
})

