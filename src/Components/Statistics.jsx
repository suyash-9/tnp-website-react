import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Statistics.css";

AOS.init();

const Statistics = () => {
  return (
    <>
      <section class="bg-white" data-aos="fade-right">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto text-center">
            <h1
              class="card-title"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 40,
                marginTop: 0,
                color: " #0a4275",
              }}
            >
              Statistics (2021-2022)
            </h1>

            {/* <p class="mt-4 text-gray-500 sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                        laborum labore provident impedit esse recusandae facere libero harum
                        sequi.
                    </p> */}
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Offers
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  <CountUp start={0} end={150} duration={2.0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </dd>
              </div>

              <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Companies
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  <CountUp start={0} end={45} duration={2.0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </dd>
              </div>

              <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Highest CTC
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  57 LPA
                </dd>
              </div>
            </dl>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Average CTC
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  12.67 LPA
                </dd>
              </div>

              <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Median CTC
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  11.75 LPA
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
