export default function Partners() {
  const partners = [
    { name: "BITS Pilani", color: "text-purple-400", hoverColor: "hover:text-purple-300", url: "https://www.bits-pilani.ac.in/" },
    { name: "TCPWave", color: "text-blue-400", hoverColor: "hover:text-blue-300", url: "https://www.tcpwave.com/" },
    { name: "DSCI", color: "text-green-400", hoverColor: "hover:text-green-300", url: "https://www.dsci.in/" },
    { name: "IIT Kanpur", color: "text-orange-400", hoverColor: "hover:text-orange-300", url: "https://www.iitk.ac.in/" },
    { name: "MISP Project", color: "text-red-400", hoverColor: "hover:text-red-300", url: "https://www.misp-project.org/" },
    { name: "TransAsia Tech", color: "text-cyan-400", hoverColor: "hover:text-cyan-300", url: "https://www.transasiatech.com/" }
  ];

  return (
    <section id="partners" className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-4 overflow-hidden">
        <p className="text-center text-slate-500 text-sm font-mono uppercase tracking-widest mb-8">
          Strategic Partners & Technology Stack
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {partners.map((p, i) => (
            <a 
              key={i} 
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl font-display font-bold ${p.color} ${p.hoverColor} grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110 hover:animate-pulse`}
              data-testid={`partner-link-${i}`}
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
