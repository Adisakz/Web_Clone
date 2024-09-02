let navBar = document.querySelector('nav');

navBar.innerHTML = `
<div class="container">
    <ul class="sidebar">  
        <a class="spec" href="#" onclick=closeSidebar()><box-icon name='x' color='#ffffff' font-size="48px"></box-icon></a>
        <li><a href="#">หน้าแรก</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">ผลงาน</a></li>
        <li ><a href="#" class="btnNav">ติดต่อสอบถาม</a></li>       
    </ul>  
    
    <ul>  
        <p class="Logo">Ads<spen class="logo-color">DEV</spen></p>    
        <li class="hideOnMobile"><a href="#">หน้าแรก</a></li>
        <li class="hideOnMobile"><a href="#">Skills</a></li>
        <li class="hideOnMobile"><a href="#">ผลงาน</a></li>
        <li class="hideOnMobile"><a href="#" class="btnNav">ติดต่อสอบถาม</a></li>                 
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

