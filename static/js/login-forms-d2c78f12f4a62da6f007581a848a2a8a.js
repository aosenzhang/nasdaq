!function(e){var r={models:{c:Fiverr.models.context,b:Fiverr.models.browser,user:Fiverr.models.user,facepileLoadingFailed:!1},selectors:{},init:function(){Fiverr._debug("[fLoginForms] init");{var r=this,o=r.models;r.selectors}r.bindPopupTriggers(),r.initJoinForms(),r.initLoginForms(),e(".main-message").on("DOMSubtreeModified",".fb-facepile > span",function(){var r=e(this);o.facepileLoadingFailed=!1,r.parent().css("display","inline-block"),0===r.innerHeight()&&(o.facepileLoadingFailed=!0,r.parent().css("display","none"))}),(document.pageScope.push_join_lightbox||!!Fiverr._getUrlVars().show_join==!0)&&this.forceJoinPopup(),this.shouldOpenJoinPopupFromUrlParam()},initJoinForms:function(){if(Fiverr._debug("[fLoginForms] initJoinForms"),(e("#join_form").length||e("#new_user").length)&&(fForms.models.forms.popupJoinForm=Fiverr._getUrlHashVars().is_facebook_campaign?new r.newJoinForm({form:e(".js-social-form-container #join_form")}):new r.newJoinForm,Fiverr.twoStepRegistration||fForms.focusFirstInput(e("form#join_form"))),e("#unbounce_join_form").length&&(fForms.models.forms.popupUnbounceJoinForm=new r.newJoinForm({form:e("#unbounce_join_form")}),fForms.focusFirstInput(e("form#join_form"))),e("#instant-reg-form").length){var o=e("#instant-reg-form"),s=e(".js-instant-reg-btn"),t=e(".js-link-instant-trigger");Fiverr.twoStepRegistration&&(s=o.find("#join-btn")),s.on(Fiverr.clickEventType,function(){t.addClass("disabled")}),s.on("event-submit-form",function(){t.removeClass("disabled")}),fForms.models.forms.popupInstantJoinForm=new r.newJoinForm({form:o}),fForms.focusFirstInput(o)}},initLoginForms:function(){if(Fiverr._debug("[fLoginForms] initLoginForms"),e("#session_form").length&&(fForms.models.forms.popupSigninForm=new r.newLoginForm,fForms.models.forms.popupForgotPwForm=new r.newForgotPwForm,fForms.focusFirstInput(e("form#session_form"))),e("#instant-login-form").length){var o=e("#instant-login-form"),s=e(".popup-instant-link .forgot-password-form"),t=e(".js-instant-login-btn"),i=e(".js-instant-forgotpw-btn"),n=e(".js-link-instant-trigger");Fiverr.twoStepRegistration&&(t=o.find("#login-btn"),i=s.find("#forgotpw-btn")),t.on(Fiverr.clickEventType,function(){n.addClass("disabled")}),t.on("event-submit-form",function(){n.removeClass("disabled")}),fForms.models.forms.popupSigninForm=new r.newLoginForm({form:o,inputsToCheck:"",submitButton:t}),fForms.models.forms.popupForgotPwForm=new r.newForgotPwForm({form:s,inputsToCheck:"",submitButton:i}),fForms.focusFirstInput(o)}},bindPopupTriggers:function(){Fiverr._debug("[fLoginForms] bindPopupTriggers");{var o=this,s=o.models;o.selectors}e(document.body).on(Fiverr.clickEventType,".js-open-popup-login",function(e){var r=["new","create_social_user","new_from_social"];return"users"===s.c.psMain&&_.includes(r,s.c.psSub)?!0:(e.preventDefault(),"user_sessions"===s.c.psMain?!1:void(Fiverr.models.browser.isMobileResponsive?document.location="/login":Fiverr.openInlineUserPopupNew("login")))}),e(document.body).on(Fiverr.clickEventType,".js-open-popup-join",function(o){var t=["new","create_social_user","new_from_social"],i=e.cookie("guest_request_data");if("user_sessions"===s.c.psMain)return!0;if(o.preventDefault(),"users"===s.c.psMain&&_.includes(t,s.c.psSub))return!1;if(i){var n=i.split(":")[0];return void r.shouldOpenJoinPopupFromUrlParam(n)}Fiverr.models.browser.isMobileResponsive?document.location="/join"+location.search:r.openInlineUserPopupNew("join",e(this).attr("href"))})},newJoinForm:function(o){Fiverr._debug("[fLoginForms] newJoinForm");{var s=this;s.models,s.selectors}o?(s.form=o.form,s.submitButton=o.form.find('input[type="submit"]')):(s.form=e("#join_form"),s.submitButton=s.form.find("#join-btn")),s.activeSection=s.form.data("active-section"),s.formSections=e(".js-form-join-section"),s.inputsToCheck=s.form.find('input[type="text"],input[type="password"],input[type="checkbox"]'),s.usernameStatus=e(s.form.find("#username-status")),s.usernameTimeout=null,s.usernameActive=!1,s.errors={container:e(s.form.find(".form-errors")),header:e("<h2><span></span>"+e.t("users.new.form.error_messages.errors_main_header")+"</h2>"),email:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.email")+"</p></div>"),username:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.username")+"</p></div>"),userNotAllowed:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.user_not_allowed")+"</p></div>"),userTaken:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.user_taken")+"</p></div>"),password:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.password")+"</p></div>"),terms:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.terms")+"</p></div>")};var t=function(){s.setEvents(),e(".js-fb-form-toggle").on(Fiverr.clickEventType,function(r){r.preventDefault(),e(".js-fb-form-container").toggleClass("hidden")}),document.twoStepActiveSection=s.activeSection,document.removeFloatingLabelJoinAb&&document.removeFloatingLabelJoinAb()};s.fullReset=function(){e(s.form)[0].reset(),s.hideErrors(),s.usernameStatus.removeAttr("class"),s.submitButton.removeAttr("disabled"),s.submitButton.removeClass("in-progress"),Fiverr.twoStepRegistration&&(e(".js-form-join-section").addClass("hidden").filter('[data-section="1"]').removeClass("hidden"),s.activeSection=1,document.twoStepActiveSection=1,r.lockSecondStep&&(s.form.closest(".popup-new").find("header > .btn-close").removeClass("hidden"),r.lockSecondStep=!1))},s.setEvents=function(){Fiverr.twoStepRegistration&&e.each(s.inputsToCheck,function(r,o){e(o).placeholder()}),s.form.submit(function(o){o.preventDefault(),s.submitButton.attr("disabled","disabled"),s.submitButton.addClass("in-progress"),s.hideErrors();var t=s.checkForm();if(t)s.showErrors(t),s.submitButton.removeAttr("disabled").removeClass("in-progress"),Fiverr.twoStepRegistration?s.inputsToCheck.filter(".with-error").first().focus():s.form.find('input[type="text"]')[0].focus();else if(Fiverr.twoStepRegistration&&1===s.activeSection){var i=s.form.find(".js-form-email");Fiverr.pushGoogleTag("save-email","two-step-reg"),e.ajax({url:"/validate_new_user_email",type:"post",data:{email:i.val()},dataType:"json",success:function(o){if("success"==o.status)s.activeSection=2,document.twoStepActiveSection=2,s.formSections.addClass("hidden").filter("[data-section=2]").removeClass("hidden").find('input[type="text"]').first().focus(),Fiverr.pushGoogleTag("open-popup","two-step-reg","join-step-2"),s.submitButton.val(s.submitButton.data("toggle-text")).removeAttr("disabled").removeClass("in-progress"),r.lockSecondStep&&(e(".b-modal").unbind("click"),s.form.closest(".popup-new").find("header > .btn-close").addClass("hidden"));else{if(o.error){var t=[["email",o.error]];s.showErrors(t,"ajax")}s.submitButton.removeAttr("disabled"),s.submitButton.removeClass("in-progress")}},error:function(){var e=[["email","Something went wrong, please try again."]];s.showErrors(e,"ajax"),s.submitButton.removeAttr("disabled"),s.submitButton.removeClass("in-progress")}})}else{s.submitButton.hasClass("js-gtm-event-join")&&Fiverr.pushGoogleTag(s.submitButton.data("gtm-action"),s.submitButton.data("gtm-event"),s.submitButton.data("gtm-label")),Fiverr.twoStepRegistration&&Fiverr.pushGoogleTag("finish-registration","two-step-reg");var n=Fiverr._getUrlVars(),a=s.form.attr("action"),u=s.form.attr("method")||"post",t=!1;e.ajax({url:a,type:u,data:s.form.serialize(),dataType:"json",success:function(e){if("failure"==e.status){if(e.redirect_to_join_page&&("users"!==Fiverr.models.context.psMain||"new"!==Fiverr.models.context.psSub))return void(document.location.href="/join");s.showErrors(e.errors,"ajax"),s.submitButton.removeAttr("disabled"),s.submitButton.removeClass("in-progress")}else{n.u_med&&n.u_sou&&n.ucam&&Fiverr.pushGoogleUniversalTag(n.u_med,"registration-complete",n.u_sou,n.ucam);var o="undefined"!=typeof fGigs,t=Fiverr._getUrlVars().redirect_to||r.models.redirectTo;if(t)document.location.href=t;else if(e.redirect_url){var i=Fiverr._getUrlVars(e.redirect_url);if(i.show_popup&&"true"===i.show_popup){var a=i.type;a?e.redirect_url+="&popup="+a:Fiverr._debug("[Fiverr] handlePopups : no popup type provided")}"/workmyway?s=1"===e.redirect_url&&Fiverr.pushGoogleUniversalTag("work-my-way","join","user-join"),document.location.href=e.redirect_url}else"users"===Fiverr.models.context.psMain&&"new"===Fiverr.models.context.psSub?document.location.href="/":o&&fGigs.orderStarted?(fGigs.models.user={userName:""},fForms.models.forms.orderForm.form.submit()):"landing_pages"===Fiverr.models.context.psMain?document.location.href=document.location.origin+document.location.pathname:document.location.reload()}}})}}),s.inputsToCheck.filter(".js-form-username").keyup(function(){if(s.usernameActive){var r=e(this);s.usernameStatus.removeAttr("class").addClass("username-status-loading"),clearTimeout(s.usernameTimeout),s.usernameTimeout=setTimeout(function(){s.usernameAvailable(r)},1e3)}else s.usernameActive=!0}),s.submitButton.on(Fiverr.clickEventType,function(e){e.preventDefault(),s.submitButton.attr("disabled","disabled").addClass("in-progress"),s.form.submit()})},s.checkForm=function(){var r=s.inputsToCheck;Fiverr.twoStepRegistration&&1===s.activeSection&&(r=r.filter(".js-form-email"));var o=!1;return e.each(r,function(r,s){var t=e(s);t.hasClass("js-form-email")?s.checkValue("email")||(t.addClass("with-error"),o+=",email"):t.hasClass("js-form-username")?(s.checkValue("newUser")||(t.addClass("with-error"),o+=",username"),t.hasClass("already_taken")&&(t.addClass("with-error"),o+=",userTaken"),t.hasClass("not_allowed")&&(t.addClass("with-error"),o+=",userNotAllowed")):t.hasClass("js-form-password")?s.checkValue("password")||(t.addClass("with-error"),o+=",password"):t.is('[name="terms_of_use"]')&&(t.prop("checked")||(t.addClass("with-error"),o+=",terms"))}),o?o.replace("false,","").split(","):o},s.usernameAvailable=function(r){return r.attr("class","js-form-username"),r[0].checkValue("newUser")?(s.usernameStatus.removeAttr("class").addClass("username-status-loading"),void e.ajax({type:"post",dataType:"text",url:"/checkuser",data:"username="+r.val(),success:function(o){switch(r.attr("class","js-form-username"),o){case"ok":r.addClass("ok"),r.closest(".input-wrap").find(".error-container").remove(),s.usernameStatus.removeAttr("class").addClass("username-status-ok");break;case"not allowed":r.addClass("not_allowed with-error"),s.showUserNameMsg(e.t("users.new.form.error_messages.user_not_allowed"),r),s.usernameStatus.removeAttr("class").addClass("username-status-error");break;case"is already taken":r.addClass("already_taken with-error"),s.showUserNameMsg(e.t("users.new.form.error_messages.user_taken"),r),s.usernameStatus.removeAttr("class").addClass("username-status-error")}}})):(s.usernameStatus.removeAttr("class").addClass("username-status-error"),r.addClass("with-error"),r.val().length<6?void s.showUserNameMsg(e.t("users.new.form.error_messages.user_too_short"),r):r.val().length>15?void s.showUserNameMsg(e.t("users.new.form.error_messages.user_too_long"),r):(r.addClass("not_allowed"),void s.showUserNameMsg(e.t("users.new.form.error_messages.user_not_allowed"),r)))},s.showErrors=function(r,o){switch(o=o||"inline"){case"inline":e.each(r,function(e,r){Fiverr.twoStepRegistration?s.inputsToCheck.filter(".js-form-"+r).closest(".input-wrap").append(s.errors[r].css({display:"block"})):s.inputsToCheck.filter(".js-form-"+r).parent().append(s.errors[r].css({display:"block"}))});break;case"ajax":e.each(r,function(r,o){var t=e('<div class="error-container"><p class="msg-error">'+o[1]+"</p></div>");Fiverr.twoStepRegistration?s.inputsToCheck.filter(".js-form-"+o[0]).addClass("with-error").closest(".input-wrap").append(t.css({display:"block"})):s.inputsToCheck.filter(".js-form-"+o[0]).closest(".input-wrap").append(s.errors[o[0]].css({display:"block"}))})}},s.hideErrors=function(){s.inputsToCheck.removeClass("with-error"),s.errors.container.empty(),s.form.find(".error-container").remove()},s.showUserNameMsg=function(r,o){var s=e('<div class="error-container"><p class="msg-error">'+r+"</p></div>"),t=o.closest(".input-wrap");o.closest(".input-wrap").find(".error-container").length?t.find(".msg-error").html(r):t.append(s.css({display:"block"}))},t()},newLoginForm:function(r){Fiverr._debug("[fLoginForms] newLoginForm");var o=this;r?(o.form=r.form,o.inputsToCheck=o.form.find('input[type="text"],input[type="password"], input[type="checkbox"]'),o.submitButton=r.submitButton):(o.form=e("#session_form"),o.inputsToCheck=o.form.find('input[type="text"],input[type="password"]'),o.submitButton=o.form.find("#login-btn")),o.errors={container:e(o.form.find(".form-errors")),header:e("<h2>"+e.t("users.new.form.error_messages.login_errors.errors_main_header")+"</h2>"),login:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.login_errors.username")+"</p></div>"),password:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.login_errors.password")+"</p></div>"),username_pw:e("<li>"+e.t("users.new.form.error_messages.login_errors.user_or_password")+"</li>")},r&&(o.errors.terms=e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.terms")+"</p></div>"),o.errors.email=e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.email")+"</p></div>"));var s=function(){o.setEvents(),o.form.find(".js-btn-forgotpw").on(Fiverr.clickEventType,function(r){r.preventDefault(),e(".popup-content-login").hide(),e(".popup-content-forgotpw").show(),o.hideErrors()})};o.fullReset=function(){e(o.form)[0].reset(),o.hideErrors(),o.submitButton.removeAttr("disabled"),o.submitButton.removeClass("in-progress"),o.submitButton.trigger("event-submit-form"),e(".popup-content-login").show(),e(".popup-content-forgotpw").hide()},o.setEvents=function(){Fiverr.twoStepRegistration&&e.each(o.inputsToCheck,function(r,o){e(o).placeholder()}),o.form.submit(function(r){o.submitButton.attr("disabled","disabled"),o.submitButton.addClass("in-progress"),o.hideErrors();var s=o.checkForm();if(s)o.showErrors(s),o.form.find('input[type="text"]')[0].focus(),o.submitButton.removeAttr("disabled"),o.submitButton.removeClass("in-progress"),o.submitButton.trigger("event-submit-form"),r.preventDefault();else{r.preventDefault();var t=o.form.attr("action"),i=o.form.attr("method")||"post",s=!1;e.ajax({url:t,type:i,data:o.form.serialize(),dataType:"json",success:function(e){if("failure"===e.status||"redirect"===e.status){if("redirect"===e.status)return e.url?void(location.href=e.url):void location.reload();e.errors?o.showErrors(e.errors,"ajax"):(s=["username_pw"],o.showErrors(s)),o.form.find('input[type="text"]')[0].focus(),o.submitButton.removeAttr("disabled").removeClass("in-progress"),o.submitButton.trigger("event-submit-form")}else{var r="undefined"!=typeof fGigs;e.redirect_url?("/workmyway?s=1"===e.redirect_url&&Fiverr.pushGoogleUniversalTag("work-my-way","login","user-login"),document.location.href=e.redirect_url):"user_sessions"===Fiverr.models.context.psMain&&"new"===Fiverr.models.context.psSub?document.location.href="/":r&&fGigs.orderStarted?(fGigs.models.user={userName:""},fForms.models.forms.orderForm.form.submit()):"landing_pages"===Fiverr.models.context.psMain?document.location.href=document.location.origin+document.location.pathname:location.reload()}}})}})},o.checkForm=function(){var r=!1;return e.each(o.inputsToCheck,function(o,s){var t=e(s);t.hasClass("js-form-login")||t.hasClass("js-form-username")?s.checkValue("existUser")||(t.addClass("with-error"),r+=",login"):t.hasClass("js-form-password")?s.checkValue("password")||(t.addClass("with-error"),r+=",password"):t.is('[name="terms"]')?t.prop("checked")||(t.addClass("with-error"),r+=",terms"):t.is('[name="email"]')&&(s.checkValue("email")||(t.addClass("with-error"),r+=",email"))}),r?r.replace("false,","").split(","):r},o.showErrors=function(r,s){switch(s=s||"inline"){case"inline":e.each(r,function(e,r){Fiverr.twoStepRegistration?o.inputsToCheck.filter('[name*="'+r+'"]').closest(".input-wrap").append(o.errors[r].css({display:"block"})):o.inputsToCheck.filter('[name*="'+r+'"]').parent().append(o.errors[r].css({display:"block"}))});break;case"ajax":e.each(r,function(r,s){var t=e('<div class="error-container"><p class="msg-error">'+s[1]+"</p></div>");Fiverr.twoStepRegistration?o.inputsToCheck.filter('[name*="'+s[0]+'"]').addClass("with-error").closest(".input-wrap").append(t.css({display:"block"})):o.inputsToCheck.filter('[name*="'+s[0]+'"]').closest(".input-wrap").append(o.errors[s[0]].css({display:"block"}))})}},o.hideErrors=function(){o.inputsToCheck.removeClass("with-error"),o.form.find(".error-container").remove(),o.errors.container.empty()},s()},newForgotPwForm:function(r){Fiverr._debug("[fLoginForms] newForgotPwForm");var o=this;r?(o.form=r.form,o.inputsToCheck=r.inputsToCheck.length?r.inputsToCheck:o.form.find('input[type="text"]'),o.submitButton=r.submitButton):(o.form=e(".js-forgot-password-form"),o.inputsToCheck=o.form.find('input[type="text"]'),o.submitButton=o.form.find("#forgotpw-btn")),o.errors={container:e(o.form.find(".form-errors")),email:e('<div class="error-container"><p class="msg-error">'+e.t("users.new.form.error_messages.login_errors.email")+"</p></div>")};var s=function(){o.setEvents(),e("body").on(Fiverr.clickEventType,".js-btn-signin",function(r){r.preventDefault(),e(".popup-content-login").show(),e(".popup-content-forgotpw").hide(),o.hideErrors()})};o.fullReset=function(){e(o.form)[0].reset(),o.hideErrors(),o.submitButton.removeAttr("disabled"),o.submitButton.removeClass("in-progress")},o.setEvents=function(){Fiverr.twoStepRegistration&&e.each(o.inputsToCheck,function(r,o){e(o).placeholder()}),o.form.submit(function(){o.submitButton.attr("disabled","disabled"),o.submitButton.addClass("in-progress"),o.hideErrors();var e=o.checkForm();return e?(o.showErrors(e),o.form.find('input[type="text"]')[0].focus(),o.submitButton.removeAttr("disabled"),o.submitButton.removeClass("in-progress"),!1):void 0})},o.checkForm=function(){var r=!1;return e.each(o.inputsToCheck,function(o,s){e(s).attr("name").match("email")&&(s.checkValue("email")||(e(s).addClass("with-error"),r+=",email"))}),r?r.replace("false,","").split(","):r},o.showErrors=function(r){e.each(r,function(e,r){Fiverr.twoStepRegistration?o.inputsToCheck.filter('[name*="'+r+'"]').closest(".input-wrap").append(o.errors[r].css({display:"block"})):o.inputsToCheck.filter('[name*="'+r+'"]').parent().append(o.errors[r].css({display:"block"}))})},o.hideErrors=function(){o.inputsToCheck.removeClass("with-error"),o.form.find(".error-container").remove(),o.errors.container.empty()},s()},shouldOpenJoinPopupFromUrlParam:function(e){Fiverr._debug("[fLoginForms] shouldOpenJoinPopupFromUrlParam");var o=this,s=o.models,t=Fiverr._getUrlVars(),i=e||(t.unbounce_join_email?decodeURIComponent(t.unbounce_join_email):""),n=fForms.models.forms.popupJoinForm;if(i&&n){var a=n.form,u=a.find(".js-form-email");n.fullReset(),u.val(i),r.lockSecondStep=!0,_.delay(function(){r.forceJoinPopup(),t.u_med&&t.u_sou&&t.ucam&&Fiverr.pushGoogleUniversalTag(t.u_med,"registration-show",t.u_sou,t.ucam),a.submit(),_.delay(function(){"user_sessions"!==s.c.psMain&&"users"!==s.c.psMain&&"new"!==s.c.psSub&&a.closest("section").find(".main-message .js-form-join-section").addClass("hidden").filter('[data-section="join-pop-auto"]').removeClass("hidden"),fForms.focusFirstInput(a)},100)},50)}},openInlineUserPopupNew:function(r,o){Fiverr._debug("[fLoginForms] openInlineUserPopupNew");var s,o=o||null,t="",i=null,n="",a=!0,u=!1;switch(r){case"join":t=".popup-user-register",n=".js-form-email",Fiverr.twoStepRegistration&&Fiverr.pushGoogleTag("open-popup","two-step-reg","join-step-1");break;case"login":t=".popup-user-login",n=".js-form-login",Fiverr.twoStepRegistration&&Fiverr.pushGoogleTag("open-popup","two-step-reg","login");break;case"existing_user":t=".popup-instant-link",n="#instant-buy-login",a=!1,s=!0,u=!0;break;case"new_user":t=".popup-instant-reg",n=".js-form-email",a=!1,s=!0,u=!0}var l="undefined"!=typeof fGigs,p=l?fGigs.orderStarted:!1;if("block"===e(".js-popup-gig-shipping").css("display")&&Fiverr.mainPopupBox.closeFast(),"join"===r&&o){var m=Fiverr._getUrlVars(o);m&&m.ref&&(i=m.ref)}if("block"===e("#js-popup-user").css("display")&&(e("#js-popup-user").removeAttr("id"),Fiverr.mainPopupBox.closeFast()),"block"===e(".js-popup-user-facebook").css("display")&&Fiverr.mainPopupBox.closeFast(),"block"===e(".js-popup-user-social").css("display")&&Fiverr.mainPopupBox.closeFast(),e.cookie("fiverr_xauth")){if("yup"!==e.cookie("fiverr_login_retry"))return Fiverr._setCookie("fiverr_login_retry","yup"),void window.location.reload();Fiverr._removeCookie("fiverr_login_retry")}if(u&&Fiverr.models.browser.isMobileResponsive)return void e(t).addClass("popup-user-forms-mobile").find(".popup-content-login").show();var c=Fiverr.models.browser.isMobileOrTablet?[!1,!1]:[!0,!0];Fiverr.mainPopupBox=e(t).bPopup({amsl:0,closeClass:"btn-close",opacity:.6,follow:c,position:["auto","auto"],appending:!1,escClose:a,modalClose:a,onOpen:function(){s||e("body").addClass("disable-scrolling"),e(".disable-body-clicks").length&&_.delay(function(){e(".disable-body-clicks").remove()},1e3),Fiverr.isInstantPopupNew?Fiverr.pushGoogleTag("activation-popup","instant-buy","new-user"):Fiverr.isInstantPopupExisting&&Fiverr.pushGoogleTag("activation-popup","instant-buy","existing-user"),e(t).attr("id","js-popup-user"),("join"===r||"login"===r)&&("start_selling"===i?Fiverr._setCookie("seller","start_selling",7):"start_selling_lp"===i?Fiverr._setCookie("seller","create_gig",7):Fiverr._removeCookie("seller")),p&&(fGigs.orderStarted=p)},onClose:function(){switch(e(".disable-scrolling").length&&e("body").removeClass("disable-scrolling"),r){case"join":fForms.models.forms.popupJoinForm&&fForms.models.forms.popupJoinForm.fullReset(),fForms.models.forms.popupUnbounceJoinForm&&fForms.models.forms.popupUnbounceJoinForm.fullReset(),fForms.models.forms.popupInstantJoinForm&&fForms.models.forms.popupInstantJoinForm.fullReset();break;case"login":fForms.models.forms.popupSigninForm.fullReset(),fForms.models.forms.popupForgotPwForm.fullReset()}e(t).removeAttr("id"),p&&(fForms.models.forms.orderForm.enableFormSubmit(),fGigs.orderStarted=!1)}},function(){e(n).length&&e(n).focus()})},openFBUserPopup:function(o){Fiverr._debug("[fLoginForms] openFBUserPopup");var o=o||null;if(o){if(Fiverr.models.browser.isMobileResponsive)return void(window.location.href=o);var s="undefined"!=typeof fGigs,t=s?fGigs.orderStarted:!1;"block"===e("#js-popup-user").css("display")&&(e("#js-popup-user").removeAttr("id"),Fiverr.mainPopupBox.closeFast()),e(".js-popup-user-facebook").length<1&&e("body").prepend('<div class="js-popup-user-facebook popup-user-facebook"></div>'),s&&(fGigs.orderStarted=t),Fiverr.mainPopupBox=e(".js-popup-user-facebook").bPopup({amsl:0,loadUrl:o,closeClass:"btn-close",opacity:.6,follow:[!0,!0],position:["auto","auto"],appending:!1,loadCallback:function(o){""==e.trim(o)?window.location.reload():(fForms.models.forms.popupSigninForm=new r.newLoginForm,fForms.models.forms.popupFbForm=new r.newJoinForm)}})}},openSocialUserPopup:function(o,s,t){Fiverr._debug("[fLoginForms] openSocialUserPopup"),s=null!=s?s:!0,t=null!=t?t:!1;var o=o||null;if(o){if(Fiverr.models.browser.isMobileResponsive)return void(window.location.href=o);var i="undefined"!=typeof fGigs,n=i?fGigs.orderStarted:!1;"block"===e("#js-popup-user").css("display")&&(e("#js-popup-user").removeAttr("id"),Fiverr.mainPopupBox.closeFast()),e(".js-popup-user-social").length<1&&e("body").prepend('<div class="js-popup-user-social popup-user-social"></div>'),i&&(fGigs.orderStarted=n),Fiverr.mainPopupBox=e(".js-popup-user-social").bPopup({amsl:0,loadUrl:o,closeClass:"btn-close",opacity:.6,follow:[!0,!0],position:["auto","auto"],appending:!1,modalClose:s,loadCallback:function(o){""==e.trim(o)?window.location.reload():(fForms.models.forms.popupSigninForm=new r.newLoginForm,fForms.models.forms.popupFbForm=new r.newJoinForm,t&&fForms.models.forms.popupFbForm.form.submit())}})}},forceJoinPopup:function(){Fiverr._debug("[fLoginForms] forceJoinPopup");{var r=this,o=r.models;r.selectors}"user_sessions"===o.c.psMain||"users"===o.c.psMain&&"new"===o.c.psSub||(Fiverr.models.browser.isMobileResponsive?document.location="/join"+location.search:Fiverr.openInlineUserPopupNew("join",e(this).attr("href")))}};window.fLoginForms=r,e(document).ready(function(){r.init()})}(jQuery);