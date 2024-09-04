let navBar = document.querySelector('nav');

navBar.innerHTML = `
<div class="container">
    <ul class="sidebar">  
        <a class="spec" href="#" onclick=closeSidebar()><box-icon name='x' color='#ffffff' font-size="48px"></box-icon></a>
        <li><a href="#home" >หน้าแรก</a></li>
        <li><a href="#tools" >Tools</a></li>
        <li><a href="#works" >ผลงาน</a></li>
        <li><a href="#email" class="btnNav" >ติดต่อสอบถาม</a></li>       
    </ul>  
    
    <ul>  
        <p class="Logo">Ads<spen class="logo-color">DEV</spen></p>    
        <li class="hideOnMobile"><a href="#home">หน้าแรก</a></li>
        <li class="hideOnMobile"><a href="#tools">Tools</a></li>
        <li class="hideOnMobile"><a href="#works">ผลงาน</a></li>
        <li class="hideOnMobile"><a href="#email" class="btnNav">ติดต่อสอบถาม</a></li>                 
    </ul>  
    <a href="#" class="menuicon" onclick=showSidebar()><box-icon name='menu' color='#ffffff'></a>  
</div>`;


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex';
}

function closeSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'none';
}




document.querySelectorAll('ul a').forEach(click => {
    click.addEventListener('click', function(event) {
        event.preventDefault();

        let targetSection = document.querySelector(this.getAttribute('href'));
        let offset = 0;

        // ปรับ offset สำหรับ sections tools และ works
        if (targetSection.id === 'tools' || targetSection.id === 'works') {
            offset = -100;
        }

        // คำนวณตำแหน่งที่เลื่อนโดยรวม offset
        let sectionPosition = targetSection.getBoundingClientRect().top + window.scrollY + offset;

        // เลื่อนหน้าเว็บไปยังตำแหน่งที่คำนวณไว้
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    });
});
