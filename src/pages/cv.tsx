import Head from "next/head";

export default function CVPage() {
  return (
    <>
      <Head>
        <title>Matěj Vykoukal — CV</title>
        <meta name="robots" content="noindex" />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <div className="min-h-screen bg-neutral-100 px-6 py-10 text-neutral-900">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-semibold">Curriculum Vitae</h1>
              <p className="text-sm text-neutral-600">
                Download the PDF or view it inline.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white"
                href="/api/cv"
              >
                Download PDF
              </a>
              <a
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold"
                href="/"
              >
                Back to site
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-[0_30px_60px_-45px_rgba(15,23,42,0.35)]">
            <iframe
              title="CV preview"
              src="/api/cv?inline=1"
              className="h-[82vh] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
