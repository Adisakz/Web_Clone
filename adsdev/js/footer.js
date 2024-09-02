let footer = document.querySelector('footer');
let signature = document.getElementsByClassName('signature')[0];

footer.innerHTML = `
    <div class="container">
        <div class="content-footer">
           <div class="footer-head">
                <div class="data-head">
                <p class="Logo">Ads<spen class="logo-color">DEV</spen></p> 
                </div> 
                <div class="data">
                    <img src="./image/Mail_white.png" alt="Mail">
                    <p>film.asa17@gmail.com</p>
                </div>
                 <div class="data">
                    <img src="./image/Line_white.png" alt="Line">
                    <p>film.103</p>
                </div>
                 <div class="data">
                    <img src="./image/Phone_white.png" alt="Phone">
                    <p>085-508-0026</p>
                </div>
            </div>
            <div class="footer-head">
                <div class="data-head">
                <p class="text-head">คำค้นหาที่เกี่ยวข้อง</spen></p>  
                </div>
                <div class="content-data-search">
                    <div class="data-search">รับทำเว็บไซต์</div>
                    <div class="data-search">ทำเว็บ</div>
                </div>
                <div class="content-data-search">
                    <div class="data-search">รับทำเว็บไซต์ราชการ</div>
                    <div class="data-search">รับทำเว็บไซต์เอกชน</div>
                </div>
                <div class="content-data-search">
                    <div class="data-search">ที่ปรึกษาโปรเจค</div>
                    <div class="data-search">รับทำเว็บไซต์ ราคาถูก</div>
                </div>
                <div class="content-data-search">
                    <div class="data-search">ทำเว็บบริษัท</div>
                    <div class="data-search"></div>
                </div>
            </div>
            <div class="footer-head-email">
                <div class="data-head">
                    <p class="text-head">ติดต่อสอบถาม</spen></p>  
                </div>
                <div class="email">
                    <div class="head-mail">
                        <input type="text" placeholder="ชื่อผู้ส่ง">
                        <input type="email" placeholder="E-mail">
                    </div>
                    <div class="data-mail">
                        <input type="text" placeholder="Subject">
                    </div>
                    <div class="data-mail">
                        <textarea></textarea>
                    </div>
                </div>
                <a href="#" class="btnSendMail">ส่งข้อความ</a>
            </div>
        </div>
    </div>
`;
signature.innerHTML = `
    <div class="container">
        Copyright © 2024 AdsDEV
    </div>
`;