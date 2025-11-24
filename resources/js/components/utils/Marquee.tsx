export default function Marquee({
    items = [],
    speed = 20,
    logo,
    className = '',
}) {
    return (
        <div
            className={`relative overflow-hidden whitespace-nowrap ${className}`}
        >
            <div
                className="animate-marquee flex items-center gap-10"
                style={{ animationDuration: `${speed}s` }}
            >
                {items.map((text, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 text-sm md:text-base"
                    >
                        {logo && (
                            <img
                                src={logo}
                                alt="logo"
                                className="h-5 w-5 object-contain opacity-80"
                            />
                        )}
                        <span className="text-slate-700">{text}</span>
                    </div>
                ))}

                {/* Duplicate for seamless loop */}
                {items.map((text, index) => (
                    <div
                        key={`dup-${index}`}
                        className="flex items-center gap-3 text-sm md:text-base"
                    >
                        {logo && (
                            <img
                                src={logo}
                                alt="logo"
                                className="h-5 w-5 object-contain opacity-80"
                            />
                        )}
                        <span className="text-slate-700">{text}</span>
                    </div>
                ))}
            </div>

            
        </div>
    );
}
