import "../css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  return (
    <footer
      class="text-white bg-gray-900 lg:grid lg:grid-cols-5"
      data-aos="fade-up"
    >
      <aside class="hidden lg:relative lg:col-span-2 lg:block">
        <div
          style={{
            marginTop: 20,
            marginLeft: 20,
            display: "flex",
            flexDirection: "row",
            flexFlow: "row nowrap",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6010852008485!2d81.76397671476502!3d21.12846438594454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1656687809693!5m2!1sen!2sin"
            width="600"
            height="450"
            marginHeight={40}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </aside>

      <div class="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p class="font-medium">
              <p
                class="font-medium"
                style={{
                  fontSize: "20px",
                  textDecorationLine: "underline",
                  textUnderlineOffset: "10px",
                }}
              >
                Contact :
              </p>

              <p class="font-medium" style={{ marginTop: "12px" }}>
                Amit Kumar Agrawal (Faculty Incharge)
              </p>
              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  class="hover:opacity-75"
                  href="tel:+91-771-2474032"
                  style={{ marginLeft: "6px", fontSize: "13px" }}
                >
                  +91-771-2474032
                </a>
              </div>

              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  onClick={() => window.location = 'mailto:amitag@gmail.com'}
                  class="hover:opacity-75"
                  href="mail:amitag@iiitnr.edu.in"
                  style={{ marginLeft: "6px", fontSize: "13px" }}
                >
                  amitag@iiitnr.edu.in
                </a>
              </div>
              <br />

              <p class="font-medium">IIIT Naya Raipur </p>
              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  class="hover:opacity-75"
                  href="tel:+91-771-2474182"
                  style={{ marginLeft: "6px", fontSize: "13px" }}
                >
                  +91-771-2474182
                </a>
              </div>

              <div style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  onClick={() => window.location = 'mailto:iiitnr@iiitnr.ac.in'}
                  class="hover:opacity-75"
                  href=""
                  style={{ marginLeft: "6px", fontSize: "13px" }}
                >
                  iiitnr@iiitnr.ac.in
                </a>
              </div>
            </p>
            <br />

            <p
              class="font-medium"
              style={{
                fontSize: "20px",
                textDecorationLine: "underline",
                textUnderlineOffset: "10px",
              }}
            >
              Address :
            </p>
            <p
              class="font-medium"
              style={{
                fontSize: "13px",
                display: "flex",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                marginTop: "12px",
              }}
            >
              IIIT–Naya Raipur Plot No. 7, Sector 24, <br />
              Near Purkhoti Muktangan,
              <br />
              Atal Nagar – 493661 Chhattisgarh
            </p>
            {/* <ul class="mt-8 space-y-2 text-sm">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul> */}

            <div class="flex mt-16 space-x-3">
              <a
                class="p-2 border rounded-full border-white/25 hover:opacity-75"
                href="https://www.facebook.com/IIITNROfficial"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Facebook </span>

                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                class="p-2 border rounded-full border-white/25 hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Instagram </span>

                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                class="p-2 border rounded-full border-white/25 hover:opacity-75"
                href="https://twitter.com/IIITNayaRaipur"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Twitter </span>

                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              {/* <a
                class="p-2 border rounded-full border-white/25 hover:opacity-75"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> GitHub </span>

                <svg
                  class="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a> */}

              <a
                class="p-2 border rounded-full border-white/25 hover:opacity-75"
                href="https://www.linkedin.com/company/tnpiiitnr/"
                target="_blank"
                rel="noreferrer"
              >
                <span class="sr-only"> Linkedin </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p
                class="font-medium"
                style={{
                  fontSize: "20px",
                  textDecorationLine: "underline",
                  textUnderlineOffset: "10px",
                }}
              >
                Quick Links
              </p>

              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
                <a
                  class="hover:opacity-75"
                  href="https://www.iiitnr.ac.in/"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  IIIT Website{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href=""
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Placement Brochure{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href=""
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Internship Brochure{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href="https://www.iiitnr.ac.in/faculty"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Faculty Profiles{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href="https://www.iiitnr.ac.in/content/btech-curriculum"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Curriculum{" "}
                </a>
                <a
                  class="hover:opacity-75"
                  href="http://sac.iiitnr.ac.in/"
                  style={{ fontSize: "15px" }}
                >
                  {" "}
                  Student Activities{" "}
                </a>
              </nav>
            </div>

            {/* <div>
              <p class="font-medium">Products</p>

              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-300">
                <a class="hover:opacity-75" href="">
                  {" "}
                  1to1 Coaching{" "}
                </a>
                <a class="hover:opacity-75" href="">
                  {" "}
                  Lesson Plans{" "}
                </a>
                <a class="hover:opacity-75" href="">
                  {" "}
                  Meal Plans{" "}
                </a>
                <a class="hover:opacity-75" href="">
                  {" "}
                  Gym Sessions{" "}
                </a>
              </nav>
            </div> */}
          </div>
        </div>

        <div class="pt-12 mt-12 border-t border-gray-800">
          <div class="text-sm text-gray-300 sm:items-center sm:justify-between sm:flex">
            <div class="flex space-x-3">
              {/* <a class="hover:opacity-75" href="">
                {" "}
                Privacy Policy{" "}
              </a>
              <a class="hover:opacity-75" href="">
                {" "}
                Terms & Conditions{" "}
              </a>
              <a class="hover:opacity-75" href="">
                {" "}
                Returns Policy{" "}
              </a> */}
            </div>

            <p class="mt-4 sm:mt-0">&copy; 2022 TnP Cell.</p>
          </div>

          <p class="mt-8 text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            mollitia quia quod repellendus. Porro harum, odio dolore
            perspiciatis praesentium provident esse consequatur quibusdam
            aperiam, cupiditate omnis modi in quasi? In, maxime odio vel
            repellat sed earum? Debitis quaerat facilis animi. Odio natus
            nostrum laboriosam impedit magnam praesentium asperiores consectetur
            ipsum.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
