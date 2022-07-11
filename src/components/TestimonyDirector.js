export default function TestimonyDirector() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          marginTop: 0,
        }}
      >
        From Director's Desk
      </h1>
      <div class="max-w-5xl px-4 py-8 mx-auto">
        <section class="p-8 bg-gray-100 rounded-lg">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <div class="relative">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  src="https://www.iiitnr.ac.in/sites/default/files/faculty_photo/director_mod.jpg"
                  alt=""
                  class="object-cover rounded-lg"
                />
              </div>

              {/* <div class="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                <span class="inline-block w-12 h-10 bg-gray-100 rounded-lg"></span>
              </div> */}
            </div>

            <blockquote class="sm:col-span-2">
              <p class="text-xl font-medium sm:text-2xl">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>

              <cite class="inline-flex items-center mt-8 not-italic">
                {/* <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span> */}
                <p class="text-sm text-gray-500 uppercase sm:ml-3">
                  <strong>- Dr. Pradeep K. Sinha</strong>, Vice Chancellor &
                  Director, IIIT Naya Raipur
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
