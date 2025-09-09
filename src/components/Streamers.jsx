import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Streamers = () => {
    const chartRef = useRef(null);
    const [activeTier, setActiveTier] = useState(0);
    const hoursChart = useRef(null);

    const tiers = [
        {
            name: "🏅 Nivel 1: Streamer Novato",
            color: "#a855f7",
            benefits: [
                "<strong>¡Bienvenido!:</strong> Un bot anuncia tu stream cada vez que inicias.",
                "<strong>Regalo inicial:</strong> Un paquete de recursos para tu personaje.",
                "<strong>Apoyo:</strong> Ayuda del staff para tus primeras tramas."
            ]
        },
        {
            name: "🌟 Nivel 2: Streamer Promesa",
            color: "#0ea5e9",
            benefits: [
                "<strong>Vehículo de Apoyo:</strong> Un vehículo de clase C exclusivo.",
                "<strong>Objeto Exclusivo:</strong> Accesorio equipable."
            ]
        },
        {
            name: "💎 Nivel 3: Streamer Consolidado",
            color: "#f59e0b",
            benefits: [
                "<strong>Negocio de Rol:</strong> Podrás solicitar un pequeño negocio.",
                "<strong>Vehículo Mejorado:</strong> Un vehículo de clase B."
            ]
        }
        ,
        {
            name: "👑 Nivel 4: Streamer Élite",
            color: "#ef4444",
            benefits: [
                "<strong>Vehículo de Lujo:</strong> Un vehículo de clase A asignado.",
                "<strong>Propiedad Exclusiva:</strong> Un apartamento o propiedad de lujo en la ciudad.",
                "<strong>Tramas Exclusivas:</strong> Participación en historias de alto nivel."
            ]
        }
    ];

    const updateChart = (selectedIndex) => {
        if (!hoursChart.current) return;

        const backgroundColors = tiers.map((tier, index) =>
            index === selectedIndex ? tier.color.replace(')', ', 0.8)').replace('rgb', 'rgba') : tier.color.replace(')', ', 0.2)').replace('rgb', 'rgba')
        );
        const borderColors = tiers.map(tier => tier.color);

        hoursChart.current.data.datasets[0].backgroundColor = backgroundColors;
        hoursChart.current.data.datasets[0].borderColor = borderColors;
        hoursChart.current.update();
    };

    const selectTier = (index) => {
        setActiveTier(index);
    };

    useEffect(() => {
        if (chartRef.current) {
            if (hoursChart.current) {
                hoursChart.current.destroy();
            }
            const ctx = chartRef.current.getContext('2d');
            hoursChart.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Novato', 'Promesa', 'Consolidado', 'Élite'],
                    datasets: [{
                        label: 'Horas requeridas',
                        data: [50, 150, 300, 301],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Horas de Stream Acumuladas' }
                        }
                    }
                }
            });
            updateChart(activeTier);
        }

        return () => {
            if (hoursChart.current) {
                hoursChart.current.destroy();
            }
        };
    }, [activeTier]);


    return (
        <section id="streamers" className="bg-stone-100 text-stone-800">

            <main className="container mx-auto px-6 py-12">
                <section className="text-center mb-20">
                    <h2 className="text-5xl font-black text-stone-900 mb-4">Programa de Creadores de Contenido</h2>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto">Recompensamos tu creatividad y dedicación. Descubre cómo puedes crecer con nosotros y obtener beneficios exclusivos mientras creas contenido en nuestra comunidad.</p>
                </section>

                <section id="path" className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-black text-stone-900 mb-2">El Camino del Creador</h3>
                        <p className="text-lg text-stone-600">Haz clic en cada nivel para descubrir los beneficios que te esperan. Tu dedicación tiene recompensa.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {tiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`tier-card cursor-pointer bg-white p-6 rounded-lg shadow-md border-2 border-transparent ${activeTier === index ? 'active' : ''}`}
                                onClick={() => selectTier(index)}
                            >
                                <h4 className={`text-xl font-bold ${activeTier === index ? 'text-purple-600' : 'text-stone-800'}`}>{tier.name}</h4>
                                <p className="text-sm text-stone-500">
                                    {index === 0 ? "0 - 50 Horas" : index === 1 ? "51 - 150 Horas" : index === 2 ? "151 - 300 Horas" : "301+ Horas"}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h4 id="details-title" className="text-3xl font-bold mb-4" style={{ color: tiers[activeTier].color }}>
                                {tiers[activeTier].name}
                            </h4>
                            <ul id="details-list" className="space-y-3 text-stone-700 text-lg">
                                {tiers[activeTier].benefits.map((benefit, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
                                ))}
                            </ul>
                        </div>
                        <div className="chart-container">
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                </section>

                <section id="rules" className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-black text-stone-900 mb-2">Normativa del Programa</h3>
                        <p className="text-lg text-stone-600">Estas son las reglas que aseguran una comunidad justa y positiva para todos.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold mb-4 text-purple-600">Requisitos</h4>
                            <ul className="space-y-2 list-disc list-inside text-stone-600">
                                <li>Rolear activamente por al menos 1 semana.</li>
                                <li>Tener Whitelist aprobada.</li>
                                <li>Dominar mecánicas de rol (/me y /do).</li>
                                <li>Postular vía ticket de soporte.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-2xl font-bold mb-4 text-sky-500">Conducta</h4>
                            <ul className="space-y-2 list-disc list-inside text-stone-600">
                                <li>Incluir "Bly Wood" en el título del stream.</li>
                                <li>Mínimo de 6 horas de stream semanales.</li>
                                <li>Prohibido el "Stream Sniping".</li>
                                <li>Cero tolerancia a la toxicidad (IC y OOC).</li>
                                <li>Resolver conflictos únicamente por ticket.</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
                            <h4 className="text-2xl font-bold mb-4 text-red-500">Sanciones</h4>
                            <ul className="space-y-2 list-disc list-inside text-stone-600">
                                <li>Incumplir normas resulta en la pérdida del rol.</li>
                                <li>Inactividad no notificada causa la pérdida del rol.</li>
                                <li>Conductas tóxicas reiteradas implicarán la expulsión definitiva del programa.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="start" className="text-center bg-stone-900 text-white py-16 rounded-lg">
                    <h3 className="text-4xl font-black mb-4">¿Listo para Empezar?</h3>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-8">Si cumples con los requisitos y estás de acuerdo con la normativa, te invitamos a postularte y unirte a nuestro programa de creadores.</p>
                    <a href="https://discord.gg/weC9rUDrPs" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 inline-block" target="_blank" rel="noopener noreferrer">Postular vía Ticket en Discord</a>
                </section>
            </main>
        </section>
    );
};

export default Streamers;
