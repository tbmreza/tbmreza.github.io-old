<script>
  console.log(
    "I use this template: https://github.com/WebPraktikos/universal-resume\nDefinitely check them out."
  );
</script>

<style>
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  a {
    background-color: transparent;
  }
  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
    border: 0 solid #e2e8f0;
  }
  h1,
  h2,
  h3 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  .bg-white {
    --bg-opacity: 1;
    background-color: #fff;
    background-color: rgba(255, 255, 255, var(--bg-opacity));
  }
  .bg-gray-200 {
    --bg-opacity: 1;
    background-color: #edf2f7;
    background-color: rgba(237, 242, 247, var(--bg-opacity));
  }
  .inline-block {
    display: inline-block;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .font-fallback {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .text-base {
    font-size: 1rem;
  }
  .text-lg {
    font-size: 1.125rem;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
  .text-sm2 {
    font-size: 0.9375rem;
  }
  .text-md {
    font-size: 1rem;
  }
  .leading-normal {
    line-height: 1.34;
  }
  .leading-relaxed {
    line-height: 1.625;
  }
  .leading-snugish {
    line-height: 1.32;
  }
  .list-inside {
    list-style-position: inside;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .my-3\.2 {
    margin-top: 0.8125rem;
    margin-bottom: 0.8125rem;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .mt-8 {
    margin-top: 2rem;
  }
  .mb-8 {
    margin-bottom: 2rem;
  }
  .mt-1\.5 {
    margin-top: 0.375rem;
  }
  .mr-1\.6 {
    margin-right: 0.4375rem;
  }
  .mb-1\.6 {
    margin-bottom: 0.4375rem;
  }
  .mt-2\.1 {
    margin-top: 0.5625rem;
  }
  .mb-4\.5 {
    margin-bottom: 1.125rem;
  }
  .-ml-3 {
    margin-left: -0.75rem;
  }
  .-mr-1\.6 {
    margin-right: -0.4375rem;
  }
  .-mb-1\.6 {
    margin-bottom: -0.4375rem;
  }
  .first\:mt-0:first-child {
    margin-top: 0;
  }
  .max-w-2xl {
    max-width: 42rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .px-2\.5 {
    padding-left: 10px;
    padding-right: 10px;
  }
  .pb-px {
    padding-bottom: 1px;
  }
  .last\:pb-1\.5:last-child {
    padding-bottom: 0.375rem;
  }
  .absolute {
    position: absolute;
  }
  .text-gray-550 {
    --text-opacity: 1;
    color: #8e9cb4;
    color: rgba(141.77999999999997, 155.618, 179.52, var(--text-opacity));
  }
  .text-gray-650 {
    --text-opacity: 1;
    color: #68778d;
    color: rgba(104.04, 118.72800000000001, 140.76, var(--text-opacity));
  }
  .text-gray-700 {
    --text-opacity: 1;
    color: #4a5568;
    color: rgba(74, 85, 104, var(--text-opacity));
  }
  .text-gray-750 {
    --text-opacity: 1;
    color: #44505f;
    color: rgba(
      67.728,
      79.75039999999998,
      95.47200000000001,
      var(--text-opacity)
    );
  }
  .group:hover .group-hover\:text-gray-700 {
    --text-opacity: 1;
    color: #4a5568;
    color: rgba(74, 85, 104, var(--text-opacity));
  }
  .italic {
    font-style: italic;
  }
  .tracking-widest {
    letter-spacing: 0.1em;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .transform {
    --transform-translate-x: 0;
    --transform-translate-y: 0;
    --transform-rotate: 0;
    --transform-skew-x: 0;
    --transform-skew-y: 0;
    --transform-scale-x: 1;
    --transform-scale-y: 1;
    transform: translateX(var(--transform-translate-x))
      translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
      skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
      scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  }
  .-translate-y-px {
    --transform-translate-y: -1px;
  }
  .transition {
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
  }
  .ease-in {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }
  .duration-100 {
    transition-duration: 0.1s;
  }
  @-webkit-keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
  @keyframes ping {
    75%,
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  @keyframes bounce {
    0%,
    to {
      transform: translateY(-25%);
      -webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  .hyphens-manual {
    -webkit-hyphens: manual;
    -ms-hyphens: manual;
    hyphens: manual;
  }
  .col-gap-md {
    -moz-column-gap: 2.1875rem;
    column-gap: 2.1875rem;
  }
  .break-inside-avoid {
    -moz-column-break-inside: avoid;
    break-inside: avoid;
  }
  .col-fill-auto {
    -moz-column-fill: auto;
    column-fill: auto;
  }
  @media print {
    @page {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
    }
    .page {
      padding: 4rem !important;
    }
    h1,
    h2,
    h3,
    li,
    p {
      color: #000 !important;
    }
  }
  @media print {
    .print\:bg-white {
      --bg-opacity: 1;
      background-color: #fff;
      background-color: rgba(255, 255, 255, var(--bg-opacity));
    }
    .print\:font-normal {
      font-weight: 400;
    }
    .print\:h-letter-col {
      height: 71.625rem;
    }
    .print\:max-w-letter {
      max-width: 66.40625rem;
    }
    .print\:text-black {
      --text-opacity: 1;
      color: #000;
      color: rgba(0, 0, 0, var(--text-opacity));
    }
    .print\:border-inset {
      box-shadow: inset 0 0 0 1px #cbd5e0;
    }
    .print\:col-count-2 {
      -moz-column-count: 2;
      column-count: 2;
    }
  }
  @media (min-width: 500px) {
    .xsm\:p-8 {
      padding: 2rem;
    }
  }
  @media (min-width: 640px) {
    .sm\:-ml-3\.2 {
      margin-left: -0.8125rem;
    }
  }
  @media (min-width: 833px) {
    .md\:h-letter {
      height: 85.9375rem;
    }
    .md\:h-letter-col {
      height: 71.625rem;
    }
    .md\:mb-11 {
      margin-bottom: 2.75rem;
    }
    .md\:max-w-letter {
      max-width: 66.40625rem;
    }
    .md\:p-16 {
      padding: 4rem;
    }
    .md\:col-count-2 {
      -moz-column-count: 2;
      column-count: 2;
    }
  }
</style>

<main class="font-fallback hyphens-manual">

  <!-- Page -->
  <div
    class="p-6 mx-auto page max-w-2xl print:max-w-letter md:max-w-letter
    md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-white">

    <!-- Name -->
    <header class="flex items-center mb-8 md:mb-11">
      <h1 class="text-2xl font-semibold text-gray-750 pb-px">Reza Handzalah</h1>
    </header>
    <!-- end Name -->

    <!-- Column -->
    <div
      class="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col
      print:h-letter-col col-fill-auto">

      <section class="mt-8 first:mt-0">

        <!-- To keep in the same column -->
        <div class="break-inside-avoid">

          <h2
            class="mb-4 font-bold tracking-widest text-sm2 text-gray-550
            print:font-normal">
            ABOUT ME
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Software Engineer
              </h3>
              <p class="leading-normal text-md text-gray-650">Since 2019</p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal" />
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              My area is web application development, as well as the tooling
              around it.
            </p>
          </section>

        </div>

      </section>

      <section class="mt-8 first:mt-0">

        <!-- To keep in the same column -->
        <div class="break-inside-avoid">

          <h2
            class="mb-4 font-bold tracking-widest text-sm2 text-gray-550
            print:font-normal">
            EXPERIENCE
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                IDEMIA, Jakarta R&D Office
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Aug 2019 – present | Software Engineer, Validation
              </p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              I work on Card Personalization System analysis: Mobile Card
              Configurator (MCC) and Identity Card Configurator (ICC)
              applications.
            </p>
            <ul class="">
              <li class="mt-2.1 text-sm2 text-gray-700 leading-normal">
                <span
                  class="absolute -ml-3 sm:-ml-3.2 select-none transform
                  -translate-y-px">
                  ›
                </span>
                Maintaining and upgrading existing systems as required
              </li>
              <li class="mt-2.1 text-sm2 text-gray-700 leading-normal">
                <span
                  class="absolute -ml-3 sm:-ml-3.2 select-none transform
                  -translate-y-px">
                  ›
                </span>
                Troubleshooting technical issues
              </li>
              <li class="mt-2.1 text-sm2 text-gray-700 leading-normal">
                <span
                  class="absolute -ml-3 sm:-ml-3.2 select-none transform
                  -translate-y-px">
                  ›
                </span>
                Collaborating with other RnD teams to resolve issues
              </li>
            </ul>
          </section>

        </div>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
              Telkom Indonesia, Divisi Digital Service
            </h3>
            <p class="leading-normal text-md text-gray-650">
              Jan 2019 – Jun 2019 | Data Scientist Intern
            </p>
          </header>
          <p class="mt-2.1 text-md text-gray-700 leading-normal">
            I was assigned to Video Analytics team. I reported to DSC Business
            and Development manager.
          </p>
          <ul class="">
            <li class="mt-2.1 text-sm2 text-gray-700 leading-normal">
              <span
                class="absolute -ml-3 sm:-ml-3.2 select-none transform
                -translate-y-px">
                ›
              </span>
              Pitching data science use cases to clients (B2B)
            </li>
            <li class="mt-2.1 text-sm2 text-gray-700 leading-normal">
              <span
                class="absolute -ml-3 sm:-ml-3.2 select-none transform
                -translate-y-px">
                ›
              </span>
              Contributing to projects (dashboard design, document recognition
              with OCR, and object counting)
            </li>
          </ul>
        </section>

      </section>

      <section class="mt-8 first:mt-0">

        <!-- To keep in the same column -->
        <div class="break-inside-avoid">

          <h2
            class="mb-4 font-bold tracking-widest text-sm2 text-gray-550
            print:font-normal">
            EDUCATION
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Telkom University, Indonesia
              </h3>
              <p class="leading-normal text-md text-gray-650">
                Bachelor's Degree in Telecommunication Engineering
              </p>
              <p class="leading-normal text-md text-gray-650">
                <span class="italic">cum laude</span>
                | 2015 – 2019 | 3.65/4.00 GPA
              </p>
              <p class="leading-normal text-md text-gray-650">
                Conference paper:
                <a
                  href="https://www.researchgate.net/publication/332157743_Simulasi_Komunikasi_Cahaya_Tampak_Berbasis_Pemultipleksan_Pembagian_Panjang_Gelombang_pada_Jaringan_Fiber_to_the_Home"
                  class="group">
                  ResearchGate
                  <span
                    class="inline-block text-gray-550 print:text-black
                    font-normal group-hover:text-gray-700 transition
                    duration-100 ease-in">
                    ↗
                  </span>
                </a>
              </p>
            </header>
          </section>

        </div>

      </section>

      <section class="mt-8 first:mt-0">

        <!-- To keep in the same column -->
        <div class="break-inside-avoid">

          <h2
            class="mb-4 font-bold tracking-widest text-sm2 text-gray-550
            print:font-normal">
            LEARNING PROJECTS
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                <a href="https://codepen.io/collection/AMLBoV" class="group">
                  Take Home Projects (ongoing)
                  <span
                    class="inline-block text-gray-550 print:text-black
                    font-normal group-hover:text-gray-700 transition
                    duration-100 ease-in">
                    ↗
                  </span>
                </a>
              </h3>
              <p class="leading-normal text-md text-gray-650">Svelte</p>
            </header>
            <p class="mt-2.1 text-md text-gray-700 leading-normal">
              My solutions to freeCodeCamp's curated list of common challenges
              for web developer interview.
            </p>
          </section>

        </div>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
              <a
                href="https://github.com/users/tbmreza/projects/1"
                class="group">
                Compiler Little Projects (ongoing)
                <span
                  class="inline-block text-gray-550 print:text-black font-normal
                  group-hover:text-gray-700 transition duration-100 ease-in">
                  ↗
                </span>
              </a>
            </h3>
            <p class="leading-normal text-md text-gray-650">Rust</p>
          </header>
          <p class="mt-2.1 text-md text-gray-700 leading-normal">
            Learning compilers and programming languages by doing project ideas
            from belkadan's "So You Want to Be a (Compiler) Wizard" blog post.
          </p>
        </section>

      </section>

      <section class="mt-8 first:mt-0">

        <!-- To keep in the same column -->
        <div class="break-inside-avoid">

          <h2
            class="mb-4 font-bold tracking-widest text-sm2 text-gray-550
            print:font-normal">
            SKILLS
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <header>
              <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
                Natural Languages
              </h3>
            </header>
            <div class="my-3.2 last:pb-1.5">
              <ul
                class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                <li
                  class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                  print:bg-white print:border-inset bg-gray-200">
                  English (C1)
                </li>
                <li
                  class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                  print:bg-white print:border-inset bg-gray-200">
                  Indonesian (Native)
                </li>
              </ul>
            </div>
          </section>

        </div>

        <section class="mb-4.5 break-inside-avoid">
          <header>
            <h3 class="text-lg font-semibold text-gray-700 leading-snugish">
              Other Technologies
            </h3>
          </header>
          <div class="my-3.2 last:pb-1.5">
            <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
              <li
                class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                print:bg-white print:border-inset bg-gray-200">
                Python
              </li>
              <li
                class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                print:bg-white print:border-inset bg-gray-200">
                HTML
              </li>
              <li
                class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                print:bg-white print:border-inset bg-gray-200">
                CSS
              </li>
              <li
                class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                print:bg-white print:border-inset bg-gray-200">
                Bash
              </li>
              <li
                class="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750
                print:bg-white print:border-inset bg-gray-200">
                Git
              </li>
            </ul>
          </div>
        </section>

      </section>

      <section class="mt-8 first:mt-0">

        <!-- To keep in the same column -->
        <div class="break-inside-avoid">

          <h2
            class="mb-4 font-bold tracking-widest text-sm2 text-gray-550
            print:font-normal">
            CONTACT
          </h2>

          <section class="mb-4.5 break-inside-avoid">
            <ul class="list-inside pr-7">
              <li class="mt-1.5 leading-normal text-gray-700 text-md">
                <a href="//tbmreza.github.io" class="group">
                  tbmreza.github.io
                  <span
                    class="inline-block text-gray-550 print:text-black
                    font-normal group-hover:text-gray-700 transition
                    duration-100 ease-in">
                    ↗
                  </span>
                </a>
              </li>
              <li class="mt-1.5 leading-normal text-gray-700 text-md">
                <a href="//linkedin.com/in/reza-handzalah" class="group">
                  linkedin.com/in/reza-handzalah
                  <span
                    class="inline-block text-gray-550 print:text-black
                    font-normal group-hover:text-gray-700 transition
                    duration-100 ease-in">
                    ↗
                  </span>
                </a>
              </li>
              <li class="mt-1.5 leading-normal text-gray-700 text-md">
                <a href="//twitter.com/rezahandzalah" class="group">
                  twitter.com/rezahandzalah
                  <span
                    class="inline-block text-gray-550 print:text-black
                    font-normal group-hover:text-gray-700 transition
                    duration-100 ease-in">
                    ↗
                  </span>
                </a>
              </li>
              <li class="mt-1.5 leading-normal text-gray-700 text-md">
                rezahandzalah@protonmail.com
              </li>
              <li class="mt-1.5 leading-normal text-gray-700 text-md">
                (+62) 81312646370
              </li>
            </ul>
          </section>

        </div>

      </section>

    </div>
    <!-- end Column -->

  </div>
  <!-- end Page -->
</main>
