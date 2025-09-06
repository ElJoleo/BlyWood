import HTMLFlipBook from 'react-pageflip';

const Lore = () => {
    return (
        <div
            id="lore"
            className="bg-navy py-20 px-6 lg:px-20 text-white font-raleway flex flex-col items-center"
        >
            <h2 className="text-4xl font-black uppercase text-center mb-10 underline decoration-celeste underline-offset-8">
                Lore del Servidor
            </h2>
            <div className="max-w-4xl mx-auto relative z-10">
                <HTMLFlipBook
                    width={500}
                    height={700}
                    showCover={true}
                    drawShadow={true}
                    useMouseEvents={true}
                    className="lore-book"
                    style={{ overflow: 'hidden' }}
                >
                    {/* Página de Portada */}
                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center text-center font-courier-prime border-4 border-red-800 relative overflow-hidden">
                        <h3 className="text-6xl font-black uppercase text-black drop-shadow-lg">
                            Bly Wood
                        </h3>
                        <p className="text-xl text-darkGray drop-shadow-lg mt-4">
                            Los Secretos de BlyWood
                        </p>
                    </div>

                    {/* Páginas del Lore */}
                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">
                            La Historia de BlyWood
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Durante décadas, Roxwood fue reconocida como un centro de innovación y
                            desarrollo. Sin embargo, lo que nadie sabía era que en los márgenes del
                            sistema, una sombra crecía silenciosamente, a espalda de los demás. La
                            raíz de la tragedia lleva el nombre de Alisson Manson, una famosa asesina
                            serial de New York cuya brutalidad estremeció al país. Secuestradora,
                            torturadora y psicópata sin remordimientos. Alisson se dio por muerta... o
                            eso se creyó. En realidad, su desaparición fue encubierta por un grupo
                            clandestino que operaba en los túneles subterráneos de Humane Labs,
                            interesados en su retorcida inteligencia y su obsesión con salirse con la
                            suya.
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">
                            El Legado de Alisson
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Allí, Alisson dio vida a su "obra maestra": Clary, una niña criada en
                            completo aislamiento, modificada genéticamente desde su concepción. Clary
                            no era una hija, sino un experimento, un recipiente para el virus ZG-04,
                            una cepa biológica creada a partir de tejidos humanos y compuestos
                            neurotóxicos diseñados para romper la mente antes que el cuerpo.
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">El Incidente</h3>
                        <p className="text-lg leading-relaxed">
                            Todo comenzó con reportes menores: agentes del FIB (incluyendo a la
                            querida Directora Daniela de León Q.D.E.P y policías locales desapareciendo
                            sin dejar rastro. Se hablaba de operativos mal planeados, ajustes de
                            cuentas o corrupción... pero lo cierto era más siniestro. Clary, ya
                            adolescente y completamente inestable, comenzó a secuestrar miembros de la
                            policía usando su extraordinaria fuerza, su velocidad y una capacidad
                            sobrehumana de mimetizarse con su entorno.
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">La Tragedia</h3>
                        <p className="text-lg leading-relaxed">
                            Las víctimas eran arrastradas a los túneles y sometidas a experimentos con
                            el virus. Los que lograban escapar regresaban cambiados: alucinaciones,
                            agresividad extrema, pérdida de memoria, paranoia y, en muchos casos,
                            ataques repentinos a sus propios compañeros. Los informes médicos eran
                            confidenciales. Los mandos policiales lo atribuían a "estrés operacional
                            severo".
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">
                            Las Consecuencias
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Pero la ciudad ya estaba infectada... y la locura era el primer síntoma.
                            Pese a las advertencias de algunos médicos forenses y científicos civiles,
                            el gobierno ignoró las señales. Humane Labs siguió funcionando en las
                            sombras, sin regulación, bajo una falsa fachada de "investigación
                            ambiental".
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">El Día D</h3>
                        <p className="text-lg leading-relaxed">
                            Hasta que ocurrió la explosión. Una noche de invierno, Clary rompió el
                            protocolo, asesinó a sus cuidadores y activó el sistema de emergencia del
                            laboratorio. El núcleo químico explotó, liberando la versión mutada del
                            virus ZG-04 en el aire, el agua y el suelo. En solo 24 horas, más del 60%
                            de la población de Roxwood presentaba síntomas: delirio, sangrado ocular,
                            insomnio crónico, y finalmente la transformación en seres rabiosos,
                            carnívoros, sin conciencia ni lenguaje.
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">
                            El Estado de Emergencia
                        </h3>
                        <p className="text-lg leading-relaxed">
                            En menos de una semana, el gobierno decretó estado de emergencia nacional.
                            Se activó el protocolo Sombra Blanca, una operación conjunta de evacuación
                            y contención. Los pocos sobrevivientes, entre ellos científicos, civiles y
                            cuerpos de seguridad no infectados, fueron localizados por drones térmicos
                            y transportados en helicópteros y convoys militares hacia el Sur, al
                            territorio de BlyWood. BlyWood fue declarado Estado Autónomo por decreto
                            presidencial, con su propia gobernación, sistema judicial y leyes de
                            emergencia.
                        </p>
                    </div>

                    <div className="page bg-white p-8 rounded-lg shadow-lg flex flex-col justify-start text-black font-courier-prime border-2 border-red-800 relative overflow-hidden">
                        <h3 className="text-3xl font-bold mb-4 text-darkGray">
                            Roxwood había caído.
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Los sobrevivientes pasaron semanas en zonas de cuarentena, vigilados por
                            médicos del Ejército y expertos en bioseguridad. Tras rigurosas pruebas, se
                            les otorgó el derecho a una nueva identidad y fueron liberados con la
                            promesa de "empezar desde cero". Los medios intentaron ocultarlo. Las
                            autoridades bloquearon carreteras y puentes. Pero las transmisiones de
                            civiles, los videos filtrados y los gritos a través de las radios lo
                            dejaron claro: Roxwood había caído.
                        </p>
                    </div>
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default Lore;
