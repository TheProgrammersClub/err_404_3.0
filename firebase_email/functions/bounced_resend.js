
var fs = require('fs')

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");



// let send_to = "nikhil161096@gmail.com"
let send_to = "rajpurohitc87@gmail.com";
let team_name = "Sniperlyfe";
const msg = {
    to: send_to,
    from: 'Err_404 Team <mhssprogrammersclub@gmail.com>',
    // from: 'Err_404 Team <csi@mhssce.ac.in>',
    subject: 'Err_404 | Seat Confirmed',
    html: '<!DOCTYPE html>\
	<html lang="it"><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"><title>MOSAICO Responsive Email Designer</title><!--\
	COLORE INTENSE  #9C010F\
	COLORE LIGHT #EDE8DA\
	\
	TESTO LIGHT #3F3D33\
	TESTO INTENSE #ffffff \
	\
	\
	 --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><style type="text/css">#ko_onecolumnBlock_4 .textintenseStyle a, #ko_onecolumnBlock_4 .textintenseStyle a:link, #ko_onecolumnBlock_4 .textintenseStyle a:visited, #ko_onecolumnBlock_4 .textintenseStyle a:hover {color: #fff;color: ;text-decoration: none;text-decoration: none;font-weight: bold;}\
	#ko_onecolumnBlock_4 .textlightStyle a:visited, #ko_onecolumnBlock_4 .textlightStyle a:hover {color: #3f3d33;color: ;text-decoration: none;text-decoration: ;font-weight: bold;}</style><style type="text/css">\
		/* CLIENT-SPECIFIC STYLES */\
		#outlook a{padding:0;} /* Force Outlook to provide a "view in browser" message */\
		.ReadMsgBody{width:100%;} .ExternalClass{width:100%;} /* Force Hotmail to display emails at full width */\
		.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div{line-height: 100%;} /* Force Hotmail to display normal line spacing */\
		body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} /* Prevent WebKit and Windows mobile changing default text sizes */\
		table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} /* Remove spacing between tables in Outlook 2007 and up */\
		img{-ms-interpolation-mode:bicubic;} /* Allow smoother rendering of resized image in Internet Explorer */\
	\
		/* RESET STYLES */\
		body{margin:0; padding:0;}\
		img{border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}\
		table{border-collapse:collapse !important;}\
		body{height:100% !important; margin:0; padding:0; width:100% !important;}\
	\
		/* iOS BLUE LINKS */\
		.appleBody a{color:#68440a; text-decoration: none;}\
		.appleFooter a{color:#999999; text-decoration: none;}\
	\
		/* MOBILE STYLES */\
		@media screen and (max-width: 525px) {\
	\
			/* ALLOWS FOR FLUID TABLES */\
			table[class="wrapper"]{\
			  width:100% !important;\
			  min-width:0px !important;\
			}\
	\
			/* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */\
			td[class="mobile-hide"]{\
			  display:none;}\
	\
			img[class="mobile-hide"]{\
			  display: none !important;\
			}\
	\
			img[class="img-max"]{\
			  width:100% !important;\
			  max-width: 100% !important;\
			  height:auto !important;\
			}\
	\
			/* FULL-WIDTH TABLES */\
			table[class="responsive-table"]{\
			  width:100%!important;\
			}\
	\
			/* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */\
			td[class="padding"]{\
			  padding: 10px 5% 15px 5% !important;\
			}\
	\
			td[class="padding-copy"]{\
			  padding: 10px 5% 10px 5% !important;\
			  text-align: center;\
			}\
	\
			td[class="padding-meta"]{\
			  padding: 30px 5% 0px 5% !important;\
			  text-align: center;\
			}\
	\
			td[class="no-pad"]{\
			  padding: 0 0 0px 0 !important;\
			}\
	\
			td[class="no-padding"]{\
			  padding: 0 !important;\
			}\
	\
			td[class="section-padding"]{\
			  padding: 10px 15px 10px 15px !important;\
			}\
	\
			td[class="section-padding-bottom-image"]{\
			  padding: 10px 15px 0 15px !important;\
			}\
	\
			/* ADJUST BUTTONS ON MOBILE */\
			td[class="mobile-wrapper"]{\
				padding: 10px 5% 15px 5% !important;\
			}\
	\
			table[class="mobile-button-container"]{\
				margin:0 auto;\
				width:100% !important;\
			}\
	\
			a[class="mobile-button"]{\
				width:80% !important;\
				padding: 15px !important;\
				border: 0 !important;\
				font-size: 16px !important;\
			}\
	\
		}\
	</style></head><body style="margin: 0; padding: 0;" bgcolor="#ffffff" align="center">\
	\
	<!-- PREHEADER -->\
	\
	\
	<table border="0" cellpadding="0" cellspacing="0" width="100%" id="ko_imageBlock_3"><tbody><tr class="row-b"><td bgcolor="#fafafa" align="center" class="no-pad" style="padding-top: 0px; padding-left: 15px; padding-bottom: 0px; padding-right: 15px;">\
				<table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table"><tbody><tr><td>\
							<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td>\
										<!-- HERO IMAGE -->\
										<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td class="no-padding">\
														  <table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td>\
																	  <img width="500" border="0" alt="QR Code" class="img-max" style="display: block; padding: 0; color: #3F3D33; text-decoration: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; width: 500px;" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+send_to+'"></td>\
																</tr></tbody></table></td>\
												  </tr></tbody></table></td>\
								</tr></tbody></table></td>\
					</tr></tbody></table></td>\
		</tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" width="100%" id="ko_onecolumnBlock_4"><tbody><tr class="row-a"><td bgcolor="#fafafa" align="center" class="section-padding" style="padding-top: 30px; padding-left: 15px; padding-bottom: 30px; padding-right: 15px;">\
				<table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table"><tbody><tr><td>\
							<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td>\
										<!-- COPY -->\
										<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="center" class="padding-copy" style="font-size: 25px; font-family: Helvetica, Arial, sans-serif; color: #3F3D33; padding-top: 0px;">Welcome to Err_404</td>\
											</tr><tr><td align="center" class="padding-copy textlightStyle" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #3F3D33;"><p style="margin:0px;">Hi team '+team_name+'</p> <p>We are excited to have you join us at Err_404 Hackathon 2017.</p> <p>Please show this email at the Registration Desk during the registration phase for a fast and simple check-in!<br> <p>Regards,<br>Err_404 Team</p></p> </td>\
											</tr></tbody></table></td>\
								</tr></tbody></table></td>\
					</tr></tbody></table></td>\
        </tr></tbody></table></body></html>\
        ',
};
sgMail.send(msg);

