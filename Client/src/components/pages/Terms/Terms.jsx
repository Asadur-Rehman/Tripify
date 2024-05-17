import React from "react";
import styles from "./terms.module.css";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";

export default function Terms() {
  return (
    <>
      <NavBar />
      <div className={`${styles.maincontainer}`}>
        <img
          src={require("../../../assets/terms.jpg")}
          alt="img"
          className={styles.mainImg}
        />
      </div>
      <div className={`${styles.terms} row d-flex justify-content-center`}>
        <div className={`${styles.left} col-9`}>
          <h1>
            <b>Website terms</b>
          </h1>
          <span>Last updated: April 2017</span>
          <p class={`mt-4`}>
            These terms govern your use of the sites (as defined below)
            including your participation in our online community (whether you're
            registered, contributing content or just browsing). Please read and
            check these terms regularly as they may change from time to time.
            Using our sites
          </p>
          <ul className="mt-4">
            <li className="my-2">
              <a href="#">Using our sites</a>
            </li>
            <li className="my-2">
              <a href="#">Tripify trademarks and copyright</a>
            </li>
            <li className="my-2">
              <a href="#">Contributing to the sites</a>
            </li>
            <li className="my-2">
              <a href="#">Removal of content and termination of accounts</a>
            </li>
            <li className="my-2">
              <a href="#">Reporting abuse</a>
            </li>
            <li className="my-2">
              <a href="#">Reporting defamation</a>
            </li>
            <li className="my-2">
              <a href="#">Reporting copyright infringements</a>
            </li>
            <li className="my-2">
              <a href="#">Your privacy</a>
            </li>
            <li className="my-2">
              <a href="#">Liability</a>
            </li>
          </ul>
          <h2 className="mt-4">
            <b>Using our sites:</b>
          </h2>
          <p class={`mt-4`}>
            By using any website owned and operated by Tripify, such as
            Tripify.com or Budgettravel.com (‘the site/s’) you agree to be
            bound by these terms. <br /> <br />
            No commercial use of sites is permitted. You may use the sites for
            personal, non-commercial purposes only. <br />
            <br />
            If you are under the age of 18 you need your parents' permission
            before using the sites or registering. <br />
            <br />
            Our Community Guidelines apply to your use of the sites, so
            <a href="#">read them. Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Tripify trademarks and copyright</b>
          </h2>
          <p class={`mt-4`}>
            <b>All content on the sites</b> is owned by Tripify Global
            Inc. (us) or licensed to us by our registered users and other
            licensees. You may not copy, store, scrape or use any part of our
            site without permission. <br />
            <br /> <b>Our trade marks</b> (including but not limited to the
            Tripify, Thorn Tree and Budget Travel trade marks) may not be
            used in any way or for any purpose without our permission. <br />
            <br />
            More information about our intellectual property, can be found{" "}
            <a href="#">here.</a>
            <br />
            <br />
            <a href="#">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Contributing to the sites</b>
          </h2>
          <p class={`mt-4`}>
            If you engage with someone else’s application on a site (e.g. using
            or posting content on the application), an independent legal
            relationship is formed between you and the application provider. An
            application provider may impose terms on your use of their
            application. <br />
            <br />
            You agree that all of your contribution to the site is your own
            work. You license us the non-exclusive, perpetual, irrevocable,
            royalty-free, worldwide rights to reproduce, communicate, edit,
            store, adapt or otherwise use any content you upload to the site,
            including any feedback that you submit through the site, via third
            party applications available through the site, on the site and in
            our other products (your content). This includes the right to
            sublicense to others at our discretion. <br />
            <br />
            You also consent to your content being altered, edited or adapted
            for such uses, or to ensure your content does not infringe these
            terms or breach the law, as we see fit. Although we generally
            attribute you as the author, it's not always possible. So you
            consent to us not attributing authorship to you, or only attributing
            your registered 'handle'. We will ask you before publishing your
            real name. <br />
            <br />
            <b>Prohibited content. </b> You must ensure that your content does
            not contain anything that breaches any laws or rights, including by:
            <ul>
              <li>defaming any person</li>
              <li>breaching any intellectual property rights</li>
              <li>
                containing personal information (contrary to our
                <a>privacy policy</a>)
              </li>
              <li>containing commercial advertising</li>
              <li>
                containing excessively coarse language or content which would be
                rated R, RC or X by the Australian Classification Board (
                <a>see www.classification.gov.au</a>)
              </li>
            </ul>
            <br />
            <br />
            If you would like to include someone else's copyright material,
            trademark or other intellectual property in your content you must
            first obtain and keep their written permission. <br />
            <br />
            <a href="#">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Removal of content and termination of accounts</b>
          </h2>
          <p class={`mt-4`}>
            We may remove your content from the sites in our discretion. <br />
            <br />
            We may terminate or suspend your registration (and any future
            accounts) if you have breached these terms multiple times or if the
            breach is serious. <br />
            <br />
            <a href="top">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Reporting abuse</b>
          </h2>
          <p class={`mt-4`}>
            IF YOU BELIEVE ANY CONTENT ON OUR SITES INFRINGES THESE TERMS,
            PLEASE USE THE REPORT ABUSE FUNCTION AVAILABLE THROUGHOUT THE SITES.{" "}
            <br />
            <br />
            <a href="top">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Reporting defamation</b>
          </h2>
          <p class={`mt-4`}>
            Pursuant to the Defamation Act 2013, a valid defamation notification
            must contain the following information:
            <br />
            <br />
            <ol>
              <li>Your name and email address;</li>
              <li>
                The location of the comments on our website that you are
                referring to, including what the comments are and why you
                believe they are defamatory;
              </li>
              <li>
                The meaning that you attribute to the comments and what aspects
                you believe are incorrect or just opinions;
              </li>
              <li>
                Confirmation that you do not have sufficient contact details of
                the users who have posted the comments (the Poster/s) to pursue
                this matter directly with those Poster/s; and
              </li>
              <li>
                Confirmation that you consent to Tripify providing your
                name and/or email to the Posters.
              </li>
            </ol>{" "}
            <br /> <br />
            Upon receipt of a valid defamation notification, we will contact the
            Poster/s in relation to their comments. <br />
            <br />
            <a href="top">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Reporting copyright infringements</b>
          </h2>
          <p class={`mt-4`}>
            If you believe that any content on our sites infringes your
            copyright, please notify us by providing a DMCA notice to our
            designated copyright agent. <br />
            <br />
            Your notification must include the following:
            <br />
            <br />
            <ol>
              <li>
                Identification of the copyrighted work or works you believe have
                been infringed and the holder of the copyright if you are acting
                on their behalf;
              </li>
              <li>
                Identification of the material that you believe to be infringing
                including its location on the site;
              </li>
              <li>
                Your contact information including name and address, e-mail and
                telephone number;
              </li>
              <li>
                A statement that:
                <ul>
                  <li>
                    you believe in good faith that the use of the material was
                    not authorised by the owner of the work, its agent, or the
                    law;
                  </li>
                  <li>
                    the information in the notification is accurate, and under
                    penalty of perjury, that you are, or are authorised to act
                    on behalf of, the owner of an exclusive right that is
                    allegedly infringed; and
                  </li>
                  <li>
                    you acknowledge that the notice will be sent to the user who
                    uploaded the material at issue.
                  </li>
                </ul>
              </li>
              <li>
                A physical or electronic signature of the copyright owner or a
                person authorised to act on their behalf.
              </li>
            </ol>
            <br /> <br />
            Upon receipt of a valid defamation notification, we will contact the
            Poster/s in relation to their comments. <br />
            <br />
            <a href="top">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Your privacy</b>
          </h2>
          <p className="mt-4">
            <b>The purposes for which we collect your personal information</b>{" "}
            when you register or email us are: administering the site, sending
            you a password, contacting you about your content and keeping in
            touch with you. <br />
            <br />
            <b>You can access and update</b> your personal information in the
            'profile' section at any time. <br />
            <br />
            <b>We may disclose</b> information about you to our authors (some of
            whom work on contract to us) and other Tripify companies. If
            your content breaches these terms or the law, we may pass your
            details and IP address on to a law enforcement agency. Don't worry,
            we won't sell your contact details to marketing companies for
            spamming! <br />
            <br />
            To find out more, please read our <a href="#">
              privacy policy
            </a>. <br /> <br />
            <a href="top">Back to top</a>
          </p>
          <h2 className="mt-4">
            <b>Liability and Disclaimer</b>
          </h2>
          <p className="mt-4">
            You must <br />
            <br />
            <ol>
              <li>
                own all of the work you upload to the sites or have the
                permission from the owner of the content to upload it;
              </li>
              <li>
                be able to grant Tripify the rights under these Terms and
                Conditions (so, for example, you cannot grant us exclusive
                rights if you have already granted someone else exclusive
                rights); and
              </li>
              <li>
                obtain the consent of the owner of any work incorporated into
                the content you upload on the sites;
              </li>
            </ol>{" "}
            <br />
            <br />
            because serious legal consequences can happen to you, Tripify,
            and other parties if you do not (like legal action for
            infringement). <br />
            <br />
            <br />
            <br />
            You indemnify Tripify against all losses, costs and expenses
            directly incurred by Tripify, in connection with a demand,
            allegation, action, proceeding or claim that you do not own all of
            your work, you are not able to grant Tripify rights or you do
            not have the consent of an owner to incorporate their work into
            yours. Tripify must take reasonable steps to mitigate its
            loss.
          </p>
        </div>

        <div className={`${styles.right} col-2`}>
          <h3>RELATED LINKS</h3>
          <a href="#" style={{ textDecoration: "none" }}>
            Privacy Policy
          </a>{" "}
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            Contact Us
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none" }}>
            About Us
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
