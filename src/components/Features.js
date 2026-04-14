export default function Features() {
  const features = [
    {
      color: "#22C55E",
      title: "Pelacakan Real-Time",
      desc: "Monitor posisi dan rute kapal secara langsung dengan akurasi tinggi",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="5.33" y="2.67" width="21.33" height="26.67" rx="2" stroke="#22C55E" strokeWidth="2.67" fill="none" />
          <circle cx="16" cy="13.33" r="4" stroke="#22C55E" strokeWidth="2.67" fill="none" />
        </svg>
      ),
    },
    {
      color: "#F59E0B",
      title: "Monitoring Bahan Bakar",
      desc: "Pantau konsumsi dan optimalkan efisiensi bahan bakar armada",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="5.33" y="2.67" width="13.33" height="26.67" rx="2" stroke="#F59E0B" strokeWidth="2.67" fill="none" />
          <rect x="18.67" y="6.67" width="10.67" height="18.67" rx="2" stroke="#F59E0B" strokeWidth="2.67" fill="none" />
        </svg>
      ),
    },
    {
      color: "#3B82F6",
      title: "Manajemen Pemeliharaan",
      desc: "Kelola jadwal dan riwayat pemeliharaan untuk semua kapal",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2.67" y="2.67" width="26.67" height="26.67" rx="3" stroke="#3B82F6" strokeWidth="2.67" fill="none" />
          <path d="M10 16h12M16 10v12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      color: "#A855F7",
      title: "Analitik & Laporan",
      desc: "Analisis kinerja dan buat keputusan berdasarkan data akurat",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2.67" y="16" width="26.67" height="13.33" rx="2" stroke="#A855F7" strokeWidth="2.67" fill="none" />
          <circle cx="25.33" cy="13.33" r="4" stroke="#A855F7" strokeWidth="2.67" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-grid" id="fitur">
      {features.map((f, i) => (
        <div className="card feature-card" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
