$(document).ready(function(){

    navigacija()
    futerNavigacija()
    futerContactPodaci()
    
    $("#newsletterDugme").click(newsletterProvera)

    let page = window.location.href

    if(page.indexOf('index.html') != -1){

        uslugeIndex()
        vestiIndex()
        popuniDd()

        $(".white").hide()
        $("#indexFormaDugme").click(FormaProvera)
           
    }

    if(page.indexOf('services.html') != -1){

        usluge()       

    }

    if(page.indexOf('news.html') != -1){

        vesti()       

    }

    if(page.indexOf('contact.html') != -1){
        
        popuniDd()

        $(".white").hide()
        $("#contactFormaDugme").click(FormaProvera)    

    }

    else{
         uslugeIndex()
        vestiIndex()

        $("#indexFormaDugme").click(FormaProvera)
    }

    function navigacija(){

        let navText = [
            'Home',
            'About',
            'Exchange',
            'Services',
            "News",
            "Contact"
        ]

        let navHref = [
            'index.html',
            'about.html',
            'exchange.html',
            'services.html',
            "news.html",
            "contact.html"
        ]

        let nav = document.getElementById("navbar-wd")
        let html = "<ul class='navbar-nav'>"
        for(let i = 0; i < navText.length; i++){
            html += `<li><a class='nav-link' href='${navHref[i]}'>${navText[i]}</a></li>`
        }

        html += '</ul>';
        nav.innerHTML = html
    }

    function futerNavigacija(){

        let navText = [
            '> Home',
            '> About',
            '> Exchange',
            '> Services',
            "> News",
            "> Contact",
            "> O Autoru",
            "> Dokumentacija"
        ]

        let navHref = [
            'index.html',
            'about.html',
            'exchange.html',
            'services.html',
            "news.html",
            "contact.html",
            "autor.html",
            "dokumentacija.pdf"
        ]

        let nav = document.querySelector(".menu_footer")
        let html = ""
        for(let i = 0; i < navText.length; i++){
            html += `<li><a href='${navHref[i]}'>${navText[i]}</a></li>`
        }

        nav.innerHTML = html
    }
    
    function futerContactPodaci(){

        let text = [
            'London 145<br>United Kingdom',
            'demo@gmail.com',
            '+12586954775',
        ]

        let img = [
            'images/i5.png',
            'images/i6.png',
            'images/i7.png',
        ]

        let futerContactPodaci = document.querySelector("#futerContactPodaci")
        let html = ""
        for(let i = 0; i < text.length; i++){
            html += `<li><img src="${img[i]}"><span>${text[i]}</span></li>`
        }

        futerContactPodaci.innerHTML = html
    }

    function uslugeIndex(){

        let uslugeText = [
            'Safe & Secure',
            "Mobile Apps",
            "Wallet",
            "Experts Support"
        ]

        let uslugeImg = [
            'images/s1.png',
            'images/s2.png',
            'images/s3.png',
            'images/s4.png'
        ]

        let usluge = document.getElementById("indexUsluge")
        let html = ""
        for(let i = 0; i < uslugeText.length; i++){
            html += `   <div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="full services_blog">
                            <img class="img-responsive" src="${uslugeImg[i]}" alt="#" />
                            <h4>${uslugeText[i]}</h4>
                            </div>
                        </div>`
        }

        usluge.innerHTML = html
    }

    function vestiIndex(){

        let vestiText = [
            'Former Microsoft Engineer Says Nigerian Expatriates Are Using Bitcoin to Circumvent Country’s Overvalued Exchange Rate',
            "Institutional money may propel Bitcoin to $250K in one year's time, says macro investor",
            "New Research Suggests Satoshi Nakamoto Lived in London Creating Bitcoin"
        ]

        let vestiImg = [
            'images/b1.png',
            'images/b2.png',
            'images/b3.png'
        ]

        let vestiNaslov = [
            'Bitcoin News',
            'Ethereum News',
            'Light News'
        ]

        let vesti = document.getElementById("vestiIndex")
        let html = ""
        for(let i = 0; i < vestiText.length; i++){
            html += `   <div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="full news_blog">
                            <img class="img-responsive" src="${vestiImg[i]}" alt="${vestiNaslov[i]}" />
                            <div class="overlay"><a class="main_bt transparent" href="news.html">View</a></div>
                            <div class="blog_details">
                                <h3>${vestiNaslov[i]}</h3>
                                <p>${vestiText[i]}</p>
                            </div>
                            </div>
                        </div>`
        }

        vesti.innerHTML = html
    }

    function popuniDd(){

        let polPodaci = ['Choose Gender', 'Female', 'Male']

        let polDd = $("#pol")

        let html = ''

        for (let i = 0; i < polPodaci.length; i++) {
            
            html += `<option value="${i}">${polPodaci[i]}</option>`
                        
        }

        polDd.html(html)
    }

    function FormaProvera(){

        let markerName = false
        let markerEmail = false
        let markerPhone = false
        let markerMessage = false
        let markerPolDd = false

        let name = $("#name")
        let email = $("#email")
        let phone = $("#phone")
        let message = $("#message")
        let polDd = $("#pol")
        let polDdSelektovan = $("#pol").prop('selectedIndex')
        
        let nameReg = /^[A-zšđčćž]{3,}$/
        let emailReg = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/
        let phoneReg = /^(06)[0-9][0-9]{6,7}$/

        if(name.val() == ''){
            name.css({
                'border': '4px solid crimson'
            })
            name.val('')
            name.attr('placeholder', 'Ime mora biti uneto')
        } else if(!nameReg.test(name.val())){
            name.css({
                'border': '4px solid crimson'
            })
            name.val('')
            name.attr('placeholder', 'Ime mora imati najmanje 3 slova(Iva, ana)')
        } else{
            name.css({
                'border': 'none'
            })
            markerName = true
            name.attr('placeholder', 'Your name')
        }
        
        if(email.val() == ''){
            email.css({
                'border' : '4px solid crimson'
            })
            email.val('')
            email.attr('placeholder', 'Email mora biti unet!')
        } else if(!emailReg.test(email.val())){
            email.css({
                'border': '4px solid crimson'
            })
            email.val('')
            email.attr('placeholder', 'Email nije u dobrom formatu(pera@gmail.com)')
        } else{
            email.css({
                'border': 'none'
            })
            markerEmail = true
            email.attr('placeholder', 'Your email')
        }

        if(phone.val() == ''){
            phone.css({
                'border' : '4px solid crimson'
            })
            phone.val('')
            phone.attr('placeholder', 'Telefon mora biti unet!')
        } else if(!phoneReg.test(phone.val())){
            phone.css({
                'border': '4px solid crimson'
            })
            phone.val('')
            phone.attr('placeholder', 'Telefon nije u dobrom formatu(060123456/0601234567')
        } else{
            phone.css({
                'border': 'none'
            })
            markerPhone = true
            phone.attr('placeholder', 'Phone number')
        }

        if(polDdSelektovan == 0){
           polDd.css({
            'border' : '4px solid crimson'
            })
        }else{
            polDd.css({
                'border': 'none'
            })
            markerPolDd = true
        }

        if(message.val() == ''){
            message.css({
                'border' : '4px solid crimson'
            })
            message.val('')
            message.attr('placeholder', 'Poruka mora biti uneta!')
        } else{
            message.css({
                'border': 'none'
            })
            markerMessage = true
            message.attr('placeholder', 'Message')
        }

        if(markerName && markerEmail && markerPhone && markerPolDd && markerMessage){
            $(".white").fadeIn()
            
        }
    }

    function usluge(){

        let uslugeText = [
            'Safe & Secure',
            "Mobile Apps",
            "Wallet",
            "Experts Support"
        ]

        let uslugeTextDodatno = [
            'Bitcoin Transfers',
            "Dekstop Apps",
            "24/7 Support",
            "Safe & Secure"
        ]

        let uslugeImg = [
            'images/s1.png',
            'images/s2.png',
            'images/s3.png',
            'images/s4.png'
        ]

        let uslugeImgDodatno = [
            'images/s1.png',
            'images/s2.png',
            'images/s3.png',
            'images/s4.png'
        ]

        let html = ""

        for(let i = 0; i < uslugeText.length; i++){

        html += `   <div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="full services_blog">
                        <img class="img-responsive" src="${uslugeImg[i]}" alt="${uslugeText[i]}" />
                        <h4>${uslugeText[i]}</h4>
                        </div>
                    </div>`
        }

        document.getElementById("usluge").innerHTML = html

        let htmlDodatno = ""

        for(let x = 0; x < uslugeTextDodatno.length; x++){

        htmlDodatno += `<div class="col-md-3 col-sm-6 col-xs-12">
                            <div class="full services_blog">
                            <img class="img-responsive" src="${uslugeImgDodatno[x]}" alt="${uslugeTextDodatno[x]}" />
                            <h4>${uslugeTextDodatno[x]}</h4>
                            </div>
                        </div>`
        }

        
        document.getElementById("uslugeDodatno").innerHTML = htmlDodatno

        $("#uslugeDodatno").hide()

        $("#uslugeMore").click(function(e){

            e.preventDefault()

            if($("#uslugeDodatno").is(":visible")){

                $("#uslugeDodatno").slideUp(500)
                $("#uslugeMore").html("See More >")

            }else{

                $("#uslugeDodatno").slideDown(500)
                $("#uslugeMore").html("See Less >")

            }
        })        

    }

    function vesti(){

        let vestiNaslov = [
            'Bitcoin News',
            "Ethereum News",
            "Light News",
            "Experts News",
            'Pandemic News',
            'Europe News'
        ]

        let  vestiNaslovDodatno = [
            'Bitcoin News',
            "Ethereum News",
            "Light News",
            "Experts News",
            'Pandemic News',
            'Europe News'
        ]

        let vestiText = [
            'Former Microsoft Engineer Says Nigerian Expatriates Are Using Bitcoin to Circumvent Country’s Overvalued Exchange Rate',
            "Institutional money may propel Bitcoin to $250K in one year's time, says macro investor",
            "New Research Suggests Satoshi Nakamoto Lived in London Creating Bitcoin",
            'Crude Oil Prices Retreat ahead of OPEC+ Meeting, US Blacklists CNOOC',
            'S&P 500 May Rise Further, Fed-Treasury Affray Brushed Aside for Now',
            'Nasdaq 100, Hang Seng Weekly Open: Markets Recede from Recent Highs'
        ]

        let vestiTextDodatno = [
            'Former Microsoft Engineer Says Nigerian Expatriates Are Using Bitcoin to Circumvent Country’s Overvalued Exchange Rate',
            "Institutional money may propel Bitcoin to $250K in one year's time, says macro investor",
            "New Research Suggests Satoshi Nakamoto Lived in London Creating Bitcoin",
            'Crude Oil Prices Retreat ahead of OPEC+ Meeting, US Blacklists CNOOC',
            'S&P 500 May Rise Further, Fed-Treasury Affray Brushed Aside for Now',
            'Nasdaq 100, Hang Seng Weekly Open: Markets Recede from Recent Highs'
        ]

        let  vestiImg = [
            'images/b1.png',
            'images/b2.png',
            'images/b3.png',
            'images/b1.png',
            'images/b2.png',
            'images/b3.png'
        ]

        let  vestiImgDodatno = [
            'images/b1.png',
            'images/b2.png',
            'images/b3.png',
            'images/b1.png',
            'images/b2.png',
            'images/b3.png'
        ]

        let html = ""

        for(let i = 0; i < vestiNaslov.length; i++){

        html += `<div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="full news_blog">
                        <img class="img-responsive" src="${vestiImg[i]}" alt="${vestiNaslov[i]}" />
                       <div class="blog_details">
                         <h3>${vestiNaslov[i]}</h3>
                         <p>${vestiText[i]}</p>
                       </div>
                    </div>
                </div>`
        }

        document.getElementById("vesti").innerHTML = html

        let htmlDodatno = ""

        for(let x = 0; x < vestiNaslovDodatno.length; x++){

        htmlDodatno += `<div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="full news_blog">
                                <img class="img-responsive" src="${vestiImgDodatno[x]}" alt="${vestiNaslovDodatno[x]}" />
                            <div class="blog_details">
                                <h3>${vestiNaslovDodatno[x]}</h3>
                                <p>${vestiTextDodatno[x]}</p>
                            </div>
                            </div>
                        </div>`
        }

        
        document.getElementById("vestiDodatno").innerHTML = htmlDodatno

        $("#vestiDodatno").hide()

        $("#vestiMore").click(function(e){

            e.preventDefault()
            
            if($("#vestiDodatno").is(":visible")){

                $("#vestiDodatno").slideUp(500)
                $("#vestiMore").html("See More >")

            }else{

                $("#vestiDodatno").slideDown(500)
                $("#vestiMore").html("See Less >")

            }
        })
    }

    function newsletterProvera(){
        
        let marker = false

        let email = $("#newsletterEmail")
        
        let emailReg = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/

        if(email.val() == ''){
            email.css({
                'border' : '4px solid crimson'
            })
            marker = false
            email.val('')
            email.attr('placeholder', 'Email mora biti unet!')
        } else if(!emailReg.test(email.val())){
            email.css({
                'border': '4px solid crimson'
            })
            marker = false
            email.val('')
            email.attr('placeholder', 'Email nije u dobrom formatu(pera@gmail.com)')
        } else{
            email.css({
                'border': 'none'
            })
            marker = true
            email.attr('placeholder', 'Your email')
        }

        if(marker == true){
            alert("Prijavljeni ste na nas newsletter!")
            email.val('')
        }
    }

})