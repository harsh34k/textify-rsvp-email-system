import { Editor } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model'
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';

// Content styles, including inline UI like fake cursors
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';

export default function BundledEditor(props) {
    return (
        <Editor
            apiKey='6sbd7pqh019xnpsjrjvjejbnip8ldahy0yq2mlmhfiwd2cla'
            {...props}
            initialValue=
            {`
    <div style="background: #FFF9EF; padding: 24px; font-family: 'Segoe UI', sans-serif; color: #333333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">

        <img src="https://media-hosting.imagekit.io/13023b84004842f7/banner.png?Expires=1840946599&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yVoordsjrFTMTkKlySkgzPgNfqBLIMYK~FYk-I~hFscyQjm5Pi4QlekDuVFn~lX0FRdRL4wQDSu1peCN-~-W4KmSyZYaql2jtzGSsbTwvzu2Mfr0Pt7t8rENUGETFHudX~nVnUpR4mlNc14qV2naZs0pDQWpR6CHp96~O4Qcbpl79XVE7dLdcWWgFlU1fqZkjHQKejCK98Sm2QYxYG52t~v-RF3Io0TDJ7wNOKOIf1MTL8QN1TQUsRSXvqsmRRUvDFCgigSVAayOPPLto45foW-hcjKplvb-hVO~uYf4YY4FO4PsXFVMz66GwUjXUyIT3u97-PtXP3m5Gy9zc-j7Mg__" alt="Event Header" style="max-width: 100%; height: auto; margin-bottom: 20px;" />

      <div style="text-align: center;">
        <img src="https://media-hosting.imagekit.io/46f39181d1e9401f/mahaveer.png?Expires=1840946666&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GtDJpS9yWVsni~Yi5RwClbJqIBP3KiuRuPQbdaaYWzZDCEQq3Deqsqe5I3kvZLzVhwk2kLL1CHfkOorgOyMUgvTKWz-ytECq5HrX5urTL6yE3W0YITkHPqi0nHI9pQ~ZDXKQnghn781RFmPJdRfAwgm-jkbVb7YfMRS8dkH4E~WdlfUHRiSx3~axEHZjfa7c0TSba2II9dx2BeUcxT5uu2-zxMqWbLrfuQ957JTModJQvgQI-BKG1qOeVVya4jDxcDAhq10DpPSR6ohAKhipQPKzeP2okqBJR1SLfqD-Q1wcboWkhvuK835jbYeYi4M8rMDOA5Pt64-n4WNqJMLkng__" alt="Event Header" style="max-width: 100%; height: 10rem; margin-bottom: 20px;" />
      </div>

      <h2 style="color: #b30000; text-align: center;">Mahaveer Swami Janma Kalyanak Celebration</h2>
      <p style="text-align: center; font-size: 16px; margin: 8px 0;"><strong>Sunday, April 27th, 2025</strong></p>
      <p style="font-size: 15px;">Hi {{Name}},</p>

      <p>You're warmly invited to celebrate the auspicious occasion of <strong>Mahaveer Swami Janma Kalyanak</strong> with us!</p>
      <p>We'll gather at <strong>10:00 AM sharp</strong> for Bhakti, Aarti, and a day full of cultural programs and celebration.</p>

      <hr style="margin: 20px 0;" />

      <h3 style="color: #006600;">🎉 Program Highlights:</h3>
      <ul style="line-height: 1.6; padding-left: 20px;">
        <li><strong>Snatak Pooja</strong> &ndash; With kids participating in pooja and mantra recitation</li>
        <li><strong>Snack Pack #1</strong> &ndash; 13 layered sandwich + dhokla</li>
        <li><strong>Snack Pack #2</strong> &ndash; Khaman + Jalebi</li>
        <li><strong>Snack Pack #3</strong> &ndash; Tikki Chaat + Thepla Roll</li>
      </ul>

      <p>We'll also recognize Jain Pathshala students and Jain Center volunteers.</p>

      <div style="text-align: center; margin: 30px 0;">
        <h2> Click Here to RSVP {{RSVP_Link}}</h2>
      </div>

      <p style="font-size: 14px; text-align: center; margin-top: 30px;">
        Thank you for your continued support. <br/>
        <strong>Jai Jinendra!</strong>
      </p>

      <div style="text-align: center; font-size: 12px; color: #777; margin-top: 20px;">
        Jain Center of America<br/>
        123 Main Street, New York, NY · <a href="mailto:info@jaincenter.org">info@jaincenter.org</a><br/>
        Follow us: <a href="#">Facebook</a> | <a href="#">Instagram</a>
      </div>
    </div>
            `}
        />
    );
}
