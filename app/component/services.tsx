import Image from "next/image";

export default function ServicesFullImage() {
    return (
        <section className="relative w-full min-h-screen bg-[#0a1219] overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,139,31,0.12),transparent_35%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,25,0.9)_0%,rgba(10,18,25,1)_100%)] pointer-events-none" />

            {/* Image area */}
            <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] items-center justify-center px-4 py-16 lg:px-10 lg:py-20">
                <div className="relative w-full h-[70vh] lg:h-[85vh]">
                    <Image
                        src="/services.png"
                        alt="Full Services Overview"
                        fill
                        priority
                        className="object-contain object-center"
                        sizes="100vw"
                    />
                </div>
            </div>

            {/* Decorative frame */}
            <div className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-tl-3xl border-l border-t border-white/10 lg:left-10 lg:top-10" />
            <div className="pointer-events-none absolute bottom-8 right-8 h-24 w-24 rounded-br-3xl border-b border-r border-white/10 lg:bottom-10 lg:right-10" />
        </section>
    );
}