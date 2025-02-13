import blogData from "./Data.js";

class blogScript{
    constructor(id){
        this.id = id;
        this._data = null;
    }
    get data() {
        return this._data;
    }
    loadData() {
        this._data = blogData;
    }

    runEvent(){
        this.loadData();


        const domId = (idname) => {
            return document.getElementById(idname);
        };

        const domClass = (classname,type=1) => {
            return type === 1 ? document.querySelector(classname) : document.querySelectorAll(classname);
        };

        const homeEvent = () => { // Home 메뉴 이벤트

            //메뉴바 토글
            domId('ham_toggle').addEventListener('click', function() {
                this.classList.toggle('active');
                domId('menu_wrap').classList.toggle('active');
            });

            // 스크롤 유도버튼 사라지기
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
            
                if (scrollPosition > 0) {
                    domClass('.mouse').classList.add('hidden');
                }
                else{
                    if (scrollPosition === 0) {
                        domClass('.mouse').classList.remove('hidden');
                    }
                }
            });

            // 타이틀 애니메이션
            const titleAnimation = () => {
                const text = domId('title');
                const spans = text.getElementsByTagName('span');

                for (let i = 0; i < spans.length; i++) {
                    spans[i].style.animationDelay = `${i * 0.1}s`; // 각 글자별로 애니메이션 딜레이 설정
                }
            }
            titleAnimation();
        }

        const skillsEvent = () => { // Skills 메뉴 이벤트

            // 클릭 이벤트 함수
            const clickSkill = (skill) => {
                domClass(`.${skill}`).addEventListener('click', () => {
                    domClass('.skill_wrap ul li',2).forEach(li => {
                        li.classList.remove('select');
                    });
                    domClass(`.${skill}`).classList.add('select');

                    const skillData = this.data.skills.find(item => item.skill === skill);

                    if (skillData) {
                        domId('explanation_p').innerText = skillData.explanation;
                    }
                });
            };

            this.data.skills.forEach(item => {
                clickSkill(item.skill);
            });
        }

        const portfolioEvent = () => { // portfolio 메뉴 이벤트

            // 데이터 생성 함수
            const PortfolioData = (project, title, projectType, tools, explanation, siteLink, pdfLink = '') =>{
                return `
                    <div class="pf_background"  style="background: url('./style/image/portfolio${project}.png')no-repeat center center; background-size: contain;"></div>
                    <div class="contents">
                        <div class="title">
                            <h3>${title} <span>( ${projectType} )</span></h3>
                        </div>
                        <div class="tool">
                            ${tools.map(tool => `<span>${tool}</span>`).join('')}
                        </div>
                        <p class="explanation">${explanation}</p>
                        <div class="link_wrap">
                            <a href="${siteLink}" target="_blank">SITE 바로가기</a>
                            ${pdfLink ? `<a href="${pdfLink}" target="_blank">PDF 보기</a>` : ''}
                        </div>
                    </div>`;
            }
            const pfElements = domClass('.pf',2);

            // 각 포트폴리오에 맞는 데이터 불러오기
            pfElements.forEach((pfElement) => {
                pfElement.addEventListener('click', () => {
                    domClass('.p_explanation_wrap').style.display = 'block';
                    switch(pfElement.className){
                        case 'pf1 pf':
                            domClass('.contents_wrap').innerHTML = PortfolioData(...Object.values(this.data.portfolio[0]));
                            break;
                        case 'pf2 pf':
                            domClass('.contents_wrap').innerHTML = PortfolioData(...Object.values(this.data.portfolio[1]));
                            break;
                        case 'pf3 pf':
                            domClass('.contents_wrap').innerHTML = PortfolioData(...Object.values(this.data.portfolio[2]));
                            break;
                        case 'pf4 pf':
                            domClass('.contents_wrap').innerHTML = PortfolioData(...Object.values(this.data.portfolio[3]));
                            break;
                    }
                });
            });
            domId('close').addEventListener('click', function() {
                domClass('.p_explanation_wrap').style.display = 'none';
            });}

        homeEvent();
        skillsEvent();
        portfolioEvent();
    } 
}


window.onload = () => {
    const youngjinBlogScript = new blogScript('youngjinBlog');
    youngjinBlogScript.runEvent();
}