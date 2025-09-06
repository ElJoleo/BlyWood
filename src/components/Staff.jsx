import React from 'react';

const staffMembers = [
    { name: 'ルニカ', rank: 'Owner', avatar: '/staff-avatars/runika.gif' },
    { name: '갈가마귀', rank: 'Owner', avatar: '/staff-avatars/nay.gif' },
    { name: 'Johann Krauss', rank: 'Developer', avatar: '/staff-avatars/johann.png' },
    { name: 'EmilyBlink', rank: 'Administrador', avatar: '/staff-avatars/emily.png' },
    { name: 'Joleo', rank: 'Administrador', avatar: '/staff-avatars/joleo.gif' },
    { name: 'mbymari', rank: 'Administrador', avatar: '/staff-avatars/mari.png' },
    { name: 'Tiburin', rank: 'Administrador', avatar: '/staff-avatars/tibu.png' },
    { name: 'CR', rank: 'Moderador', avatar: '/staff-avatars/cr.gif' },
    { name: 'Lutka', rank: 'Moderador', avatar: '/staff-avatars/lutka.png' },
    { name: 'Amethyst', rank: 'Moderador', avatar: '/staff-avatars/ame.png' },
    { name: 'KLOK', rank: 'Soporte', avatar: '/staff-avatars/lok.png' },
    { name: 'Charli', rank: 'Soporte', avatar: '/staff-avatars/charli.png' },
];

const getRankColor = (rank) => {
    switch (rank) {
        case 'Owner':
            return 'border-pink-500 text-pink-400';
        case 'Developer':
            return 'border-blue-500 text-blue-400';
        case 'Administrador':
            return 'border-yellow-500 text-yellow-400';
        case 'Moderador':
            return 'border-green-500 text-green-400';
        case 'Soporte':
            return 'border-purple-500 text-purple-400';
        default:
            return 'border-gray-500 text-gray-400';
    }
};

const Staff = () => {
    return (
        <section id="staff-section" className="main special py-16 text-center">
            {/* Animaciones*/}
            <style>
                {`
                    @keyframes glowing {
                        0% { text-shadow: 0 0 5px #d069ffff, 0 0 10px #c169ffff; }
                        50% { text-shadow: 0 0 20px #c414ffff, 0 0 30px #a514ffff; }
                        100% { text-shadow: 0 0 5px #f369ffff, 0 0 10px #dc69ffff; }
                    }
                    .animated-heading {
                        animation: glowing 2s ease-in-out infinite;
                    }
                `}
            </style>
            
            <header className="major mb-12">
                <h1 className="text-4xl md:text-6xl font-black mb-4 animated-heading">
                    Conoce a Nuestro Equipo
                </h1>
                <p className="text-lg md:text-xl text-purple-700 max-w-2xl mx-auto">
                    Las mentes maestras detrás de Bly Wood, dedicadas a ofrecerte la mejor experiencia de rol.
                </p>
            </header>
            <div className="container mx-auto px-4">
                
                {/* Owners */}
                <h2 className="text-3xl font-bold text-center text-pink-500 mb-6 mt-12">
                    <i className="fas fa-crown mr-2"></i> Dueños
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {staffMembers.filter(m => m.rank === 'Owner').map((member, index) => (
                        <div key={index} className={`staff-card rounded-xl p-6 shadow-2xl border-2 ${getRankColor(member.rank).split(' ')[0]} relative overflow-hidden text-center`}>
                            <div className={`w-40 h-40 mx-auto mb-4 rounded-full border-4 ${getRankColor(member.rank).split(' ')[0]} overflow-hidden shadow-lg`}>
                                <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-full h-full object-cover" />
                            </div>
                            <h3 className={`text-2xl font-bold uppercase tracking-wide ${getRankColor(member.rank).split(' ')[1]}`}>
                                {member.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Developer */}
                <h2 className="text-3xl font-bold text-center text-blue-500 mb-6 mt-12">
                    <i className="fas fa-code mr-2"></i> Desarrollador
                </h2>
                <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
                    {staffMembers.filter(m => m.rank === 'Developer').map((member, index) => (
                        <div key={index} className={`staff-card rounded-xl p-6 shadow-2xl border-2 ${getRankColor(member.rank).split(' ')[0]} relative overflow-hidden text-center`}>
                            <div className={`w-40 h-40 mx-auto mb-4 rounded-full border-4 ${getRankColor(member.rank).split(' ')[0]} overflow-hidden shadow-lg`}>
                                <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-full h-full object-cover" />
                            </div>
                            <h3 className={`text-2xl font-bold uppercase tracking-wide ${getRankColor(member.rank).split(' ')[1]}`}>
                                {member.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Administrador */}
                <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6 mt-12">
                    <i className="fas fa-gavel mr-2"></i> Administrador
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffMembers.filter(m => m.rank === 'Administrador').map((member, index) => (
                        <div key={index} className={`staff-card rounded-xl p-6 shadow-2xl border-2 ${getRankColor(member.rank).split(' ')[0]} relative overflow-hidden text-center`}>
                            <div className={`w-40 h-40 mx-auto mb-4 rounded-full border-4 ${getRankColor(member.rank).split(' ')[0]} overflow-hidden shadow-lg`}>
                                <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-full h-full object-cover" />
                            </div>
                            <h3 className={`text-2xl font-bold uppercase tracking-wide ${getRankColor(member.rank).split(' ')[1]}`}>
                                {member.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Moderador */}
                <h2 className="text-3xl font-bold text-center text-green-500 mb-6 mt-12">
                    <i className="fas fa-shield-alt mr-2"></i> Moderador
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffMembers.filter(m => m.rank === 'Moderador').map((member, index) => (
                        <div key={index} className={`staff-card rounded-xl p-6 shadow-2xl border-2 ${getRankColor(member.rank).split(' ')[0]} relative overflow-hidden text-center`}>
                            <div className={`w-40 h-40 mx-auto mb-4 rounded-full border-4 ${getRankColor(member.rank).split(' ')[0]} overflow-hidden shadow-lg`}>
                                <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-full h-full object-cover" />
                            </div>
                            <h3 className={`text-2xl font-bold uppercase tracking-wide ${getRankColor(member.rank).split(' ')[1]}`}>
                                {member.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Soporte */}
                <h2 className="text-3xl font-bold text-center text-purple-500 mb-6 mt-12">
                    <i className="fas fa-headset mr-2"></i> Soporte
                </h2>
                <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
                    {staffMembers.filter(m => m.rank === 'Soporte').map((member, index) => (
                        <div key={index} className={`staff-card rounded-xl p-6 shadow-2xl border-2 ${getRankColor(member.rank).split(' ')[0]} relative overflow-hidden text-center`}>
                            <div className={`w-40 h-40 mx-auto mb-4 rounded-full border-4 ${getRankColor(member.rank).split(' ')[0]} overflow-hidden shadow-lg`}>
                                <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-full h-full object-cover" />
                            </div>
                            <h3 className={`text-2xl font-bold uppercase tracking-wide ${getRankColor(member.rank).split(' ')[1]}`}>
                                {member.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;