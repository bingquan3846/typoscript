# logo
lib.logo = TEXT
lib.logo{
    typolink.parameter = 1
    typolink.additionalParams = &keep=1
    wrap = <a href="|" class="logo"><img src="fileadmin/assets/img/logo-gatx.png"></a>
    typolink.returnLast = url
}

# language menu
lib.lang = HMENU
lib.lang{
    special = language
    special.value = 0,1,2,3
    special.normalWhenNoLanguage = 0
    wrap = <ul class="language-selection"> | </ul>
    1 = TMENU
    1 {
        noBlur = 1
        NO = 1
        NO {
            stdWrap.override = EN || DE || PL || FR
            doNotLinkIt = 1
            stdWrap.typolink.parameter.data = page:uid
            stdWrap.typolink.ATagParams = class="language"
            stdWrap.typolink.additionalParams =  &L=0&keep=1 || &L=1 || &L=2 || &L=3
            stdWrap.typolink.addQueryString = 0
            stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
            stdWrap.typolink.addQueryString.method = GET
            stdWrap.typolink.useCacheHash = 1
            stdWrap.typolink.no_cache = 0
            stdWrap.wrap = <li>|</li>
        }
        ACT < .NO
        ACT.stdWrap.wrap = <li class="active">|</li>
            USERDEF1 < .NO
        USERDEF1.noLink = 1
        USERDEF1.stdWrap >
        USERDEF1.stdWrap{
            override = <span class="visuallyhidden">NONE</span>
        }
        USERDEF2 < .ACT
    }

}
# top navigation
lib.navigation = HMENU
lib.navigation{
    special = list
    special.value = 5, 6, 7, 8, 9, 35
    wrap = <ul class="main-navigation"> |</ul>
    1 = TMENU
    1{
        expAll = 1
        target = _top
        NO{
            wrapItemAndSub = <li> | </li>
        }


        NO.ATagTitle.field = title
        IFSUB = 1
        IFSUB{
            wrapItemAndSub = <li class="has-submenu"> | </li>
        }
        ACT = 1
        ACT < .NO
        ACT{
            wrapItemAndSub = <li class="active"> | </li>
        }
        ACTIFSUB = 1
        ACTIFSUB{
            wrapItemAndSub = <li class="active has-submenu"> | </li>
        }

    }
    2 = TMENU
    2{
        expAll = 1
        target = _top
        wrap = <ul> | </ul>
            NO{
            wrapItemAndSub = <li> | </li>
        }
        NO.ATagTitle.field = title
        ACT = 1
        ACT < .NO
        ACT{
            wrapItemAndSub = <li class="active"> | </li>
        }
    }
}
# top search
lib.search = TEXT
lib.search{
    typolink.parameter = 3
    wrap =  <div id="site-search"> <form action=" | " method="post" ><input type="text" name="tx_indexedsearch[sword]" placeholder="Search text"></form> </div>
    typolink.returnLast = url
}
[globalVar = GP:L=1]
lib.search.wrap =  <div id="site-search"> <form action=" | " method="post" ><input type="text" name="tx_indexedsearch[sword]" placeholder="Suchbegriff"></form> </div>
[global]
    [globalVar = GP:L=2]
lib.search.wrap =  <div id="site-search"> <form action=" | " method="post" ><input type="text" name="tx_indexedsearch[sword]" placeholder="Szukaj wyrażenia"></form> </div>
[global]
    [globalVar = GP:L=3]
lib.search.wrap =  <div id="site-search"> <form action=" | " method="post" ><input type="text" name="tx_indexedsearch[sword]" placeholder="Le terme de recherche"></form> </div>
[global]

# breadscrumb

lib.breadcrumb = COA
lib.breadcrumb {
    10 = HMENU
    10 {
        special = rootline
        special.range = 0|-1
        # "not in menu pages" should show up in the breadcrumbs menu
        includeNotInMenu = 1
        1 = TMENU
        # no unneccessary scripting.
        1.noBlur = 1
        # Current item should be unlinked
        1.CUR = 1
        1.target = _self
        1.wrap = <ul class="breadcrumbs"> | </ul>
            1.NO {
            stdWrap.field = title
            ATagTitle.field = nav_title // title
            linkWrap = <li>|</li>|*|  <li><span>|</span></li>|*|
        }
        # Current menu item is unlinked
        1.CUR {
            stdWrap.field = title
            linkWrap = <li>|</li>|*|  <li><span>|</span></li>|*|
            doNotLinkIt = 1
        }
    }
}

[globalVar = TSFE:id = 1]
lib.breadcrumb >
lib.breadcrumb = TEXT
lib.breadcrumb.value =
    [global]

lib.header = COA
lib.header{
    wrap =  <div class="inner-wrapper"> |
        10 < lib.navigation

    20 < lib.search
    30 < lib.logo
    40 < lib.lang
    50 < lib.breadcrumb
    50.wrap = </div>|

}

[globalVar = TSFE:id = 1]

[global]

lib.footer = COA
lib.footer{
    10 < lib.navigation
    10{
        special.value = 5, 6, 7, 8
        wrap = <div class="full-width"> <ul> |</ul> </div>
        1.NO.wrapItemAndSub = <li><div>|</div></li>
        1.IFSUB.wrapItemAndSub = <li><div>|</div></li>
        1.ACT.wrapItemAndSub = <li><div>|</div></li>
        1.ACTIFSUB.wrapItemAndSub = <li><div>|</div></li>

    }

    20 = COA
    20{
        wrap = <div class="inner-wrapper"> | </div>
        10 = HMENU
        10{
            special = list
            special.value = 28, 29, 30, 9
            wrap = <ul> | </ul>
            1 = TMENU
            1{
                expAll = 1
                target = _top
                NO{
                    wrapItemAndSub = <li> | </li>
                }
                NO.ATagTitle.field = title
                ACT = 1
                ACT < .NO
                ACT{
                    wrapItemAndSub = <li class="active"> | </li>
                }

            }
        }

        20 = TEXT
        20.value(
            <span class="copyright">© Copyright GATX 2014</span>
    )
    }

}

lib.readmore = TEXT
lib.readmore.value = read more
lib.readmore.lang.de = weiterlesen
lib.readmore.lang.fr = en savoir plus
lib.readmore.lang.pl = więcej

lib.pdficon = TEXT
lib.pdficon.value(
    <svg version="1.1" class="icon-pdf" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 40.9 40" enable-background="new 0 0 40.9 40" xml:space="preserve">
<path fill="#C92424" d="M40.2,24.7c-0.8-0.8-2.6-1.2-5.4-1.3c-1.9,0-4.1,0.1-6.5,0.5c-1.1-0.6-2.2-1.3-3-2.1
c-2.3-2.2-4.2-5.1-5.4-8.4c0.1-0.3,0.1-0.6,0.2-0.9c0,0,1.3-7.4,1-9.9c0-0.3-0.1-0.4-0.2-0.7l-0.1-0.3c-0.4-0.8-1-1.7-2.1-1.6L18,0
l0,0c-1.2,0-2.2,0.6-2.5,1.5c-0.8,2.9,0,7.2,1.5,12.9l-0.4,0.9c-1.1,2.6-2.4,5.2-3.5,7.4L13,23.1c-1.2,2.4-2.3,4.4-3.3,6.2l-1,0.6
c-0.1,0-1.9,1-2.3,1.2c-3.6,2.1-5.9,4.5-6.3,6.4c-0.1,0.6,0,1.4,0.6,1.8l1,0.5C2.1,39.9,2.6,40,3,40c2.5,0,5.5-3.1,9.5-10.2
c4.7-1.5,10-2.8,14.6-3.5c3.6,2,7.9,3.4,10.7,3.4c0.5,0,0.9,0,1.3-0.1c0.5-0.1,1-0.4,1.2-0.9c0.5-0.8,0.6-1.9,0.5-3
C40.8,25.4,40.5,24.9,40.2,24.7z M2.5,38.1c0.5-1.3,2.3-3.8,5-6c0.2-0.1,0.6-0.5,1-0.9C5.6,35.8,3.7,37.5,2.5,38.1z M18.5,1.3
c0.8,0,1.3,2,1.3,4c0,1.9-0.4,3.3-1,4.3c-0.5-1.5-0.7-3.8-0.7-5.3C18.1,4.2,18.1,1.3,18.5,1.3z M13.7,27.5c0.6-1,1.2-2.1,1.8-3.2
c1.5-2.8,2.4-4.9,3.1-6.7c1.4,2.5,3.1,4.6,5.1,6.3c0.3,0.2,0.5,0.4,0.8,0.6C20.3,25.4,16.8,26.3,13.7,27.5z M39.5,27.3
c-0.2,0.2-1,0.2-1.4,0.2c-1.5,0-3.3-0.7-5.9-1.8c1-0.1,1.9-0.1,2.7-0.1c1.5,0,1.9,0,3.4,0.4C39.7,26.4,39.7,27.1,39.5,27.3z"/>
</svg>
)

lib.mapsicon = TEXT
lib.mapsicon.value(
    <svg version="1.1" class="icon-nav" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 50.6 50.6" enable-background="new 0 0 50.6 50.6" xml:space="preserve">
<g>
    <path fill="#22CC09" d="M25.3,44.7c-11.2,0-20.2-8.5-20.2-19s9.1-19,20.2-19s20.2,8.5,20.2,19S36.5,44.7,25.3,44.7z M25.3,10.1 c-9.2,0-16.6,7-16.6,15.6s7.5,15.6,16.6,15.6s16.6-7,16.6-15.6S34.5,10.1,25.3,10.1z"/>
</g>
<g>
    <rect x="24" fill="#22CC09" width="3" height="13"/>
</g>
<g>
    <rect x="24" y="37" fill="#22CC09" width="3" height="14"/>
</g>
<g>
    <rect x="37" y="24" fill="#22CC09" width="14" height="3"/>
</g>
<g>
    <rect y="24" fill="#22CC09" width="13" height="3"/>
    </g>
    </svg>
)

lib.document.pdf = TEXT
lib.document.pdf.value = Data sheet (PDF)
lib.document.pdf.lang.de = Datenblatt (PDF)
lib.document.pdf.lang.pl = Karta (PDF)
lib.document.pdf.lang.fr = Fiche technique (PDF)

lib.button.railcar.overlay = TEXT
lib.button.railcar.overlay.value = Open Railcar Overview
lib.button.railcar.overlay.lang.de = Wagenübersicht öffnen
lib.button.railcar.overlay.lang.pl = Przegląd wagonów
lib.button.railcar.overlay.lang.fr = Ouvrir la porte Présentation

lib.approach.pdf = TEXT
lib.approach.pdf.value = Maps (PDF)
lib.approach.pdf.lang.de = Anfahrt (PDF)
lib.approach.pdf.lang.pl = Dojazd (PDF)
lib.approach.pdf.lang.fr = approche (PDF)

lib.approachmaps = TEXT
lib.approachmaps.value = Start Maps
lib.approachmaps.lang.de = Starte Maps
lib.approachmaps.lang.pl = Mapa
lib.approachmaps.lang.fr = Plans Démarrer

lib.field_rail_type = TEXT
lib.field_rail_type.data = page:title



