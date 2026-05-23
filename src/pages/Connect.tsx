export default function ContactSection() {
  return (
    <div className="bg-[#ffffff] h-120 flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-5xl font-semibold text-gray-800 mb-6">
          Connect
        </h1>

        {/* Intro Text */}
        <p className="text-[15px] font-bold text-gray-900 mb-2">
          In order to participate at The Grand Masters 2026 Summit Series,
          please get in touch with:
        </p>

        {/* Contacts */}
        <div className="space-y-2 text-[15px] text-gray-800">
          <p>
            Bhupinder Kaur | +91-9654155065 |{" "}
            <a
              href="mailto:bhupinder@witnesslive.in"
              className="text-[#D2520D] hover:underline"
            >
              bhupinder@witnesslive.in
            </a>
          </p>

          <p>
            Neelima Maheshwari | +91-8800841600 |{" "}
            <a
              href="mailto:neelima.maheshwari@witnesslive.in"
              className="text-[#D2520D] hover:underline"
            >
              neelima.maheshwari@witnesslive.in
            </a>
          </p>
        </div>

        {/* Company Info */}
        <div className="mt-10 space-y-4 text-gray-800">
          <h2 className="text-[15px] font-semibold">
            <span className="text-[#D2520D]">Lex Witness</span> – India’s 1st
            Magazine on Legal & Corporate Affairs
          </h2>

          <p className="text-[15px] ">
            Suite 1/6, Lower Ground Floor, Block B, Hauz Khas,
            <br />
            New Delhi - 110016
          </p>

          <p className="text-[15px]">
            <span className="font-semibold">E:</span>{" "}
            <a
              href="mailto:info@witnesslive.in"
              className="text-[#D2520D] hover:underline"
            >
              info@witnesslive.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}