const blogData = {
    "skills" : [
        {
            "skill" : "html",
            "explanation" : "HTML 웹 표준 준수 및 반응형 웹, 크로스 브라우징 구현,\nHTML 코딩 및 스타일링, 웹 페이지 마크업이 가능합니다."
        },
        {
            "skill" : "css",
            "explanation" : "Flex와 Grid를 활용한 레이아웃 구성, CSS3를 사용한 다양한 애니메이션 효과 구현, 미디어 쿼리를 이용한 반응형 웹 디자인이 가능합니다."
        },
        {
            "skill" : "js",
            "explanation" : "클래스 및 함수 기반의 로직 개발, async/await를 통한 비동기 코드 작성 및 관리, 배열과 객체를 사용한 데이터 구성 및 조작이 가능합니다."
        },
        {
            "skill" : "pug",
            "explanation" : "Node.js와 연동하여 마크업 작업 수행, 변수와 반복문을 활용한 동적 마크업 작성이 가능합니다."
        },
        {
            "skill" : "sass",
            "explanation" : "계층적 구조의 스타일링 구현, Mixin과 Include를 활용한 재사용 가능한 스타일 작성이 가능합니다."
        },
        {
            "skill" : "react",
            "explanation" : "클래스형 및 함수형 컴포넌트 사용, UI 구성 요소와 상태 관리, React Router를 사용한 다중 페이지 애플리케이션 개발 및 라우팅 구현이 가능합니다."
        },
        {
            "skill" : "node",
            "explanation" : "Express를 이용한 서버 구축 및 관리, npm을 활용한 다양한 라이브러리와 패키지 사용이 가능합니다."
        },
        {
            "skill" : "mysql",
            "explanation" : "DB 및 테이블의 CRUD 작업, VIEW 생성 및 관리가 가능합니다."
        },
        {
            "skill" : "vim",
            "explanation" : "Vim의 기본 단축키를 활용한 효율적인 작업 수행이 가능합니다."
        },
        {
            "skill" : "vscode",
            "explanation" : "VSCODE 내 터미널 사용 및 서버 연결을 통한 효율적인 작업이 가능합니다"
        },
    ],
    "portfolio" : [
        {
            project: '1',
            title: '행렬 계산기',
            projectType: '개인 프로젝트',
            tools: ['HTML', 'CSS', 'JAVASCRIPT'],
            explanation: '2차원 배열을 이용하여 행렬의 덧셈, 뺄셈, 곱셈이 가능한 행렬계산기를 구현했습니다.',
            siteLink: 'http://kkms4001.iptime.org/~c19st20/portfolio/MATRIX_CALCULATOR/MATRIX_CALCULATOR.html',
            pdfLink: 'http://kkms4001.iptime.org/~c19st20/portfolio/pdf/mc_pdf.pdf'
        },
        {
            project: '2',
            title: '메모장',
            projectType: '개인 프로젝트',
            tools: ['SCSS', 'REACT', 'NODE.js', 'MYSQL'],
            explanation: '회원가입, 로그인, 메모 작성, 삭제, 수정이 가능한 메모장을 구현했습니다.',
            siteLink: 'http://kkms4001.iptime.org:33200/'
        },
        {
            project: '3',
            title: '안산시 도시환경 대시보드',
            projectType: '팀 프로젝트',
            tools: ['PUG', 'SCSS', 'JAVASCRIPT', 'NODE.js', 'P5.js', 'AJAX', 'JSON'],
            explanation: '실시간으로 데이터를 받아와서 데이터 정보를 그래프로 출력해주는 대시보드를 구현했습니다.',
            siteLink: 'http://kkms4001.iptime.org:33183/',
            pdfLink: 'http://kkms4001.iptime.org/~c19st20/portfolio/pdf/AnsanCity.pdf'
        }
    ]
}

export default blogData;
