(function(){
    const slot = document.querySelector('[data-ad-id="ad_1"]');
    if(!slot) return;
    if(slot.dataset.adRendered === '1') return;

    const pageContext = slot.dataset.adContext;
    const ad_all_enable = false;
    const template_ad_enable = false;
    const article_ad_enable = false;
    const ad_enable = true;
    const ad_scope = "both";
    const ad_html = "<script async src=\"https:\/\/pagead2.googlesyndication.com\/pagead\/js\/adsbygoogle.js?client=ca-pub-3637491388974545\"\r\n     crossorigin=\"anonymous\"><\/script>\r\n<ins class=\"adsbygoogle\"\r\n     style=\"display:block; text-align:center;\"\r\n     data-ad-layout=\"in-article\"\r\n     data-ad-format=\"fluid\"\r\n     data-ad-client=\"ca-pub-3637491388974545\"\r\n     data-ad-slot=\"2169436093\"><\/ins>\r\n<script>\r\n     (adsbygoogle = window.adsbygoogle || []).push({});\r\n<\/script>";

    if(!ad_all_enable){
        return;
    }
    if(!ad_enable){
        return;
    }

    let pass = false;
    if(pageContext === 'theme'){
        if(template_ad_enable){
            if(ad_scope === 'theme' || ad_scope === 'both'){
                pass = true;
            }
        }
    }else if(pageContext === 'post'){
        if(article_ad_enable){
            if(ad_scope === 'post' || ad_scope === 'both'){
                pass = true;
            }
        }
    }
    if(!pass){
        return;
    }

    slot.innerHTML = ad_html;
    slot.dataset.adRendered = '1';
    (adsbygoogle = window.adsbygoogle || []).push({});
})();