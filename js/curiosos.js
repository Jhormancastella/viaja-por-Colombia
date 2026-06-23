// Datos curiosos — carrusel automático aleatorio
(function () {
    'use strict';

    const datos = [
        // AMAZONAS
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '🐍', texto: 'Amazonas alberga más de 2.000 especies de peces, más que en todo el Océano Atlántico.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '�', texto: 'El 90% del territorio de Amazonas está cubierto por selva tropical virgen.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '🦋', texto: 'En Amazonas se han registrado más de 1.200 especies de mariposas diurnas.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '�', texto: 'El río Amazonas en Colombia recibe el nombre de río Solimões antes de cruzar la frontera con Brasil.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '�', texto: 'Leticia, capital de Amazonas, es la única ciudad colombiana accesible solo por río o por avión.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '🌺', texto: 'El Parque Nacional Amacayacu en Amazonas protege más de 500 especies de aves.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '🐬', texto: 'En los ríos de Amazonas habita el delfín rosado o boto, una especie única de agua dulce.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '🌙', texto: 'Varias comunidades indígenas de Amazonas nunca han tenido contacto permanente con el mundo exterior.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '�', texto: 'La patarashca amazónica es un plato ancestral: pescado envuelto en hojas de bijao y asado al fuego.' },
        { dept: 'Amazonas', color: '#3fc2ff', emoji: '�', texto: 'Un solo hectárea de selva en Amazonas puede contener más de 200 especies de árboles distintas.' },
        // ANTIOQUIA
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🌸', texto: 'Antioquia produce el 70% de las flores exportadas por Colombia, el segundo exportador floral del mundo.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '☕', texto: 'La región del suroeste antioqueño es considerada cuna del café colombiano de especialidad.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🚇', texto: 'El Metro de Medellín fue el primer sistema de metro de Colombia, inaugurado en 1995.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🎨', texto: 'Fernando Botero, el artista colombiano más reconocido del mundo, nació en Medellín, Antioquia.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🌉', texto: 'El Peñón de Guatapé es una roca monolítica de 200 millones de años que se puede escalar por 649 escalones.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🦘', texto: 'El municipio de Puerto Berrío tiene la mayor densidad de hipopótamos salvajes fuera de África, herencia de Pablo Escobar.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🏔️', texto: 'El Páramo de Frontino en Antioquia es uno de los ecosistemas de páramo más biodiversos de Colombia.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🎭', texto: 'Medellín fue elegida ciudad más innovadora del mundo en 2013 por el Urban Land Institute.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🌺', texto: 'La Feria de las Flores de Medellín, en agosto, es el festival más representativo de la cultura antioqueña.' },
        { dept: 'Antioquia', color: '#c1cf00', emoji: '🛻', texto: 'El municipio de Fredonia, Antioquia, tiene más de 200 años de tradición cafetera ininterrumpida.' },
        // ARAUCA
        { dept: 'Arauca', color: '#2e8b57', emoji: '🐊', texto: 'En los llanos de Arauca vive la mayor población de chigüiros silvestres de Colombia, el roedor más grande del mundo.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🎵', texto: 'Arauca es considerada la cuna del joropo llanero, música declarada Patrimonio Cultural de Venezuela y Colombia.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🛢️', texto: 'El Campo Caño Limón en Arauca fue uno de los yacimientos petroleros más grandes de Colombia al descubrirse en 1983.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🦜', texto: 'Las planicies de Arauca albergan colonias de cotorras cabeciamarillas, especie casi extinta en otras regiones.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🌅', texto: 'Los atardeceres en los llanos de Arauca están entre los más fotografiados de América del Sur.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🐎', texto: 'La doma del caballo llanero es un arte tradicional que se practica en Arauca desde la época colonial.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🌊', texto: 'El río Arauca marca la frontera natural entre Colombia y Venezuela a lo largo de todo el departamento.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🦅', texto: 'El gabán peonero, ave emblemática de los llanos, nidifica en grandes colonias en las sabanas de Arauca.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🌿', texto: 'La Reserva de Biosfera El Tuparro, parcialmente en Arauca, es una de las más extensas de Colombia.' },
        { dept: 'Arauca', color: '#2e8b57', emoji: '🍖', texto: 'La mamona o ternera a la llanera se cocina durante horas en varillas al calor del fuego, técnica ancestral araucana.' },
        // ATLÁNTICO
        { dept: 'Atlántico', color: '#e8962e', emoji: '🎭', texto: 'El Carnaval de Barranquilla es Patrimonio Oral e Inmaterial de la Humanidad UNESCO desde 2003.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🎵', texto: 'La cumbia, ritmo madre de la música colombiana, tiene sus raíces más fuertes en el Atlántico.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🌊', texto: 'Barranquilla es el único puerto fluvial y marítimo natural de Colombia sobre el río Magdalena.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🏗️', texto: 'El Barrio El Prado de Barranquilla es el primer barrio residencial planificado de Colombia, construido en 1920.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🦞', texto: 'La butifarra de Soledad, Atlántico, es una de las charcuterías más antiguas de América, con receta de origen español.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🌀', texto: 'El municipio de Tubará en Atlántico conserva una de las culturas indígenas zenú más auténticas del Caribe colombiano.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '⚽', texto: 'El Junior de Barranquilla es uno de los clubes de fútbol más antiguos y ganadores de Colombia, fundado en 1924.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🌅', texto: 'Las playas del municipio de Puerto Colombia fueron el principal balneario de Colombia a principios del siglo XX.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🎪', texto: 'Durante el Carnaval de Barranquilla se producen más de 300 eventos culturales en cuatro días.' },
        { dept: 'Atlántico', color: '#e8962e', emoji: '🏛️', texto: 'El Museo del Caribe en Barranquilla es el museo interactivo más grande de Colombia.' },
        // BOLÍVAR
        { dept: 'Bolívar', color: '#a8324e', emoji: '🏰', texto: 'Cartagena tiene la única ciudad amurallada de América del Sur que conserva intactas sus fortificaciones coloniales.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🌊', texto: 'Las Islas del Rosario frente a Cartagena tienen uno de los arrecifes de coral más importantes del Caribe colombiano.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '📜', texto: 'Cartagena fue el primer puerto del Nuevo Mundo habilitado para el comercio con España en el siglo XVI.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🎨', texto: 'El Centro Histórico de Cartagena fue declarado Patrimonio de la Humanidad por la UNESCO en 1984.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🌺', texto: 'El Canal del Dique conecta Cartagena con el río Magdalena y fue construido por los españoles en 1650.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🐠', texto: 'Las aguas de Islas del Rosario albergan más de 50 especies de coral y 200 especies de peces tropicales.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🍲', texto: 'La mote de queso y las carimañolas son platos bolivarenses de origen indígena y africano fusionados.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🏛️', texto: 'El Castillo de San Felipe de Barajas en Cartagena es la fortaleza española más grande construida en América.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🌅', texto: 'El volcán del Totumo, un volcán de lodo cerca de Cartagena, tiene propiedades minerales únicas y mide apenas 15 metros.' },
        { dept: 'Bolívar', color: '#a8324e', emoji: '🎭', texto: 'El Festival Internacional de Cine de Cartagena es el más antiguo de América Latina, celebrado desde 1960.' },
        // BOYACÁ
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '💎', texto: 'Boyacá produce el 90% de las esmeraldas del mundo. La mina de Muzo es la más importante del planeta.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '⚔️', texto: 'La Batalla del Puente de Boyacá el 7 de agosto de 1819 selló la independencia de Colombia.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🏔️', texto: 'El Lago de Tota en Boyacá es el lago natural más grande de Colombia con 55 km².' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🌿', texto: 'El Páramo de Sumapaz, parcialmente en Boyacá, es el páramo más grande del mundo.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🎨', texto: 'Villa de Leyva en Boyacá tiene la plaza mayor sin pavimentar más grande de Colombia, con 14.000 m².' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🦕', texto: 'En Boyacá se han encontrado los fósiles de kronosaurus, un reptil marino del Cretácico de 12 metros.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🚴', texto: 'Boyacá es la cuna de los ciclistas colombianos más famosos; el Tour de France lo han ganado corredores de esta región.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🍲', texto: 'El cocido boyacense es un plato con más de 15 ingredientes diferentes, símbolo de la gastronomía andina.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🌺', texto: 'El Festival Internacional de la Cultura en Tunja es uno de los más importantes de Colombia, celebrado desde 1968.' },
        { dept: 'Boyacá', color: '#6b5ce7', emoji: '🌊', texto: 'La Laguna de la Cocha no es de Boyacá, pero el Lago de Tota en Boyacá tiene aguas tan frías que apenas supera los 10 °C.' },
        // CALDAS
        { dept: 'Caldas', color: '#f5a623', emoji: '☕', texto: 'El Paisaje Cultural Cafetero de Caldas es Patrimonio de la Humanidad UNESCO desde 2011.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🌋', texto: 'El Nevado del Ruiz, en Caldas, es el volcán activo con mayor altitud de Colombia: 5.321 msnm.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🦜', texto: 'El Parque Nacional Los Nevados protege más de 600 especies de aves entre Caldas y otros departamentos.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🏙️', texto: 'Manizales, capital de Caldas, está construida sobre las laderas de la cordillera a 2.153 msnm.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🌺', texto: 'La Feria de Manizales, en enero, combina toros, café y música en una de las ferias más grandes de Colombia.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🚡', texto: 'El teleférico de Manizales conecta el centro de la ciudad con el cable aéreo, una vista única sobre los Andes.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🌿', texto: 'Caldas alberga el 30% de las especies de orquídeas registradas en Colombia.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🎭', texto: 'El Teatro Los Fundadores de Manizales es uno de los teatros más modernos y con mejor acústica de Colombia.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🌄', texto: 'La Laguna del Otún en el límite de Caldas es uno de los destinos de trekking más populares de los Andes colombianos.' },
        { dept: 'Caldas', color: '#f5a623', emoji: '🐦', texto: 'En Caldas se puede observar el cóndor de los Andes, el ave voladora más grande del mundo con hasta 3,3 m de envergadura.' },
        // CAQUETÁ
        { dept: 'Caquetá', color: '#1e8140', emoji: '🌿', texto: 'Caquetá tiene el 35% de la selva amazónica colombiana y alberga más de 800 especies de aves.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🐄', texto: 'Caquetá es el mayor productor de leche y queso de la Amazonía colombiana.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🌊', texto: 'El río Caquetá es el segundo río más largo que nace en Colombia, con más de 2.200 km de longitud.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🦜', texto: 'El Parque Nacional Serranía de Chiribiquete, en Caquetá, tiene pinturas rupestres de más de 20.000 años.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🐆', texto: 'Caquetá es uno de los pocos departamentos donde aún se avistan jaguares en estado silvestre.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🌺', texto: 'La palma milpesos del Caquetá produce un aceite muy valorado por comunidades indígenas por sus propiedades nutritivas.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🐟', texto: 'El pirarucú del Caquetá puede pesar hasta 200 kg y es el pez de agua dulce más grande de América del Sur.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🏕️', texto: 'La cueva de Los Guácharos en Caquetá es hogar de miles de guácharos, aves que navegan en la oscuridad con ecolocalización.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🌳', texto: 'Florencia, capital de Caquetá, creció vertiginosamente en los años 70 como puerta de entrada a la Amazonía colombiana.' },
        { dept: 'Caquetá', color: '#1e8140', emoji: '🍽', texto: 'El casabe de yuca brava es el pan ancestral de los pueblos indígenas del Caquetá, preparado desde hace milenios.' },
        // CASANARE
        { dept: 'Casanare', color: '#d4503a', emoji: '🐴', texto: 'Casanare es cuna del Torneo Internacional del Joropo, la fiesta llanera más grande de Colombia.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🛢️', texto: 'El campo petrolero de Cusiana-Cupiagua en Casanare fue el mayor descubrimiento de petróleo en Colombia en el siglo XX.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🦢', texto: 'Las sabanas inundables de Casanare son el hábitat de la garza morena y la espátula rosada durante la época de lluvias.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🌅', texto: 'Los llanos de Casanare se inundan hasta un 70% de su superficie cada temporada de lluvias, formando un mar interior.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🐢', texto: 'El galápago llanero, tortuga endémica de los llanos colombo-venezolanos, se reproduce en los ríos de Casanare.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🎵', texto: 'El arpa llanera, instrumento símbolo del joropo, se fabrica artesanalmente en talleres de Yopal, Casanare.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🌿', texto: 'La Reserva Natural El Alcaraván en Casanare es uno de los proyectos de conservación del chigüiro más exitosos de Colombia.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🐊', texto: 'El caimán del Orinoco, en peligro crítico, aún puede avistarse en algunos caños del departamento de Casanare.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '🍖', texto: 'El pisillo de chigüiro es un plato tradicional casanareño: carne seca y deshilachada acompañada de yuca y arroz.' },
        { dept: 'Casanare', color: '#d4503a', emoji: '⭐', texto: 'El Observatorio de los Llanos en Casanare ofrece una de las vistas de cielo nocturno más limpias de Colombia.' },
        // CAUCA
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🌋', texto: 'El volcán Puracé tiene uno de los cráteres activos más accesibles de Sudamérica, a 4.646 msnm.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🏛️', texto: 'Popayán, capital de Cauca, es conocida como "La Ciudad Blanca" por sus edificios coloniales encalados.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🎭', texto: 'La Semana Santa de Popayán es una de las más solemnes de América Latina, declarada Patrimonio Cultural de la Humanidad.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🌿', texto: 'El Parque Nacional Natural Munchique en Cauca es uno de los puntos de mayor diversidad de aves del mundo.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🎵', texto: 'La chirimía caucana es una tradición musical de las comunidades afrodescendientes del Pacífico caucano.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🍽', texto: 'El tamal caucano se envuelve en hoja de plátano y se cocina en fogón de leña, con receta prehispánica.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🌺', texto: 'Cauca tiene la mayor concentración de comunidades indígenas nasas del país, con más de 200.000 personas.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🌊', texto: 'El río Cauca, segundo más importante de Colombia, nace en el macizo caucano a más de 3.000 msnm.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '☕', texto: 'El café del Cauca, cultivado en laderas volcánicas a más de 1.700 msnm, es uno de los más premiados de Colombia.' },
        { dept: 'Cauca', color: '#8b5cf6', emoji: '🦋', texto: 'El santuario de flora Plantas Medicinales Orito Ingi-Ande en Cauca protege especies de mariposas únicas del Pacífico.' },
        // CESAR
        { dept: 'Cesar', color: '#e8a817', emoji: '🎵', texto: 'El vallenato nació en la región del Cesar. Desde 2015 es Patrimonio Cultural Inmaterial de la Humanidad.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🎪', texto: 'El Festival de la Leyenda Vallenata en Valledupar, cada abril, es la celebración musical más importante de Colombia.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🏔️', texto: 'La Sierra Nevada del Cocuy, parcialmente visible desde Cesar, influye en el clima de toda la región.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🌊', texto: 'El río Cesar es el único río colombiano que corre paralelo a dos sierras nevadas al mismo tiempo.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🦎', texto: 'Las ciénagas del Cesar son hábitat natural del babilla, un caimán pequeño en proceso de recuperación poblacional.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🌿', texto: 'La Serranía del Perijá en Cesar alberga especies de fauna y flora endémicas que aún se están catalogando.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🍚', texto: 'El arroz con coco cesarense tiene una receta particular que varía de municipio en municipio como marca de identidad local.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🐐', texto: 'La ganadería caprina es una tradición ancestral en el sur del Cesar, con razas adaptadas al calor extremo.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🎶', texto: 'El acordeón llega al Cesar a finales del siglo XIX con inmigrantes alemanes, y se fusionó con los ritmos afro e indígenas.' },
        { dept: 'Cesar', color: '#e8a817', emoji: '🌅', texto: 'Valledupar, capital del Cesar, está ubicada en el Valle del río Cesar rodeada por la Sierra Nevada y la Serranía del Perijá.' },
        // CHOCÓ
        { dept: 'Chocó', color: '#e85d24', emoji: '🐋', texto: 'Chocó es uno de los lugares con mayor pluviosidad del mundo: recibe hasta 13.000 mm de lluvia al año.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🌊', texto: 'Chocó es el único departamento de Colombia con costas en dos océanos: el Pacífico y el Atlántico.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🐢', texto: 'Las playas del Pacífico chocoano son el principal lugar de desove de la tortuga baula en Colombia.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🌿', texto: 'El Chocó Biogeográfico es uno de los puntos calientes de biodiversidad más importantes del planeta.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🎵', texto: 'La chirimía chocoana, mezcla de ritmos africanos e indígenas, se toca en fiestas patronales de todo el departamento.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🐳', texto: 'Entre julio y octubre, ballenas jorobadas del Pacífico Sur llegan a las costas de Chocó a tener sus crías.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🌺', texto: 'Chocó tiene la mayor diversidad de plantas por kilómetro cuadrado de toda América del Sur.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🦁', texto: 'El jaguar negro, una variante melanística del jaguar, es avistado ocasionalmente en las selvas del Chocó.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🍽', texto: 'El pusandao chocoano es un sancocho de carne salada con plátano y yuca, símbolo de la gastronomía afropacífica.' },
        { dept: 'Chocó', color: '#e85d24', emoji: '🏄', texto: 'Nuquí y Bahía Solano en Chocó son destinos de surf y ecoturismo reconocidos internacionalmente.' },
        // CÓRDOBA
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🐟', texto: 'El río Sinú en Córdoba es hogar del manatí antillano, una de las especies más amenazadas de América.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🎵', texto: 'El porro y el fandango son los ritmos tradicionales de Córdoba, base del folclor del Caribe colombiano.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🌊', texto: 'Las Ciénagas Grande de Lorica y el Complejo de Ayapel en Córdoba son humedales Ramsar de importancia internacional.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🐄', texto: 'Córdoba es el segundo departamento ganadero de Colombia, con más de 2,5 millones de cabezas de ganado.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🏛️', texto: 'Montería, capital de Córdoba, fue fundada en 1777 y es conocida como "la perla del Sinú".' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🌺', texto: 'El Festival del Porro en San Pelayo, Córdoba, es declarado Patrimonio Cultural Inmaterial de Colombia.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🦅', texto: 'El Parque Nacional Natural Paramillo en Córdoba es el último refugio del oso de anteojos en el norte de Colombia.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🍲', texto: 'El mote de queso de Córdoba es un sancocho espeso de ñame y queso costeño, de origen afroindígena.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🌾', texto: 'El ñame espino de Córdoba es el más exportado de Colombia y tiene denominación de origen regional.' },
        { dept: 'Córdoba', color: '#3a9d5c', emoji: '🚣', texto: 'La pesca artesanal en el río Sinú ha sido la base económica de decenas de comunidades por siglos.' },
        // CUNDINAMARCA
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🏙️', texto: 'Bogotá es la ciudad más alta del mundo entre las de más de 5 millones de habitantes, a 2.600 msnm.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🌿', texto: 'El Páramo de Sumapaz, en el borde de Cundinamarca, es el páramo continuo más grande del mundo.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🌸', texto: 'La Sabana de Bogotá fue el centro de la civilización muisca, una de las más avanzadas de América precolombina.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🏊', texto: 'El Salto del Tequendama en Cundinamarca tiene una caída de 157 metros sobre el río Bogotá.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🌡️', texto: 'Cundinamarca tiene climas que van desde el páramo a los 4.000 msnm hasta tierra caliente a 400 msnm.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🍽', texto: 'El ajiaco bogotano con tres tipos de papa, pollo y guascas es el plato más representativo de la cocina cundiboyacense.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🌺', texto: 'La Sabana de Bogotá produce el 70% de las flores que Colombia exporta al mundo gracias a su clima perfecto.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🏛️', texto: 'El Museo del Oro de Bogotá tiene la colección de orfebrería precolombina más grande del mundo, con 55.000 piezas.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '🚲', texto: 'Bogotá tiene más de 550 km de ciclovías permanentes, la red más extensa de América Latina.' },
        { dept: 'Cundinamarca', color: '#c0392b', emoji: '📚', texto: 'La Biblioteca Luis Ángel Arango de Bogotá es la más visitada de América Latina, con más de 5 millones de visitas al año.' },
        // GUAINÍA
        { dept: 'Guainía', color: '#0891b2', emoji: '🌊', texto: 'El río Inírida tiene aguas tan transparentes que se puede ver el fondo a varios metros de profundidad.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🌺', texto: 'La flor de Inírida o "flor inmortal" crece solo en los suelos de granito blanco del Guainía y no se marchita.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🗣️', texto: 'En Guainía se hablan más de 17 lenguas indígenas distintas en un territorio de apenas 72.000 habitantes.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🌿', texto: 'El Parque Nacional Natural Puinawai en Guainía es uno de los mayores bosques protegidos de Colombia.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🐟', texto: 'El río Negro en Guainía es famoso por sus aguas negras de origen orgánico, ricas en materia vegetal.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '⭐', texto: 'Inírida tiene uno de los cielos nocturnos más limpios de Colombia gracias a su baja contaminación lumínica.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🏕️', texto: 'El Cerro Mavicure en Guainía es una formación de tres tepuyes que emerge de la selva como en el mundo perdido.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🦜', texto: 'Las comunidades curripaco del Guainía elaboran artesanías con fibras naturales que se exportan a Europa.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🚤', texto: 'La única forma de llegar a Inírida es en avión o en varias horas de travesía por río desde Puerto Carreño.' },
        { dept: 'Guainía', color: '#0891b2', emoji: '🌿', texto: 'El casabe de Guainía, pan de yuca brava prensada, se sigue preparando igual que hace 2.000 años.' },
        // GUAVIARE
        { dept: 'Guaviare', color: '#059669', emoji: '🎨', texto: 'El Cerro Pintado de Guaviare tiene pinturas rupestres de más de 12.000 años con figuras de animales extintos.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🌊', texto: 'Los Raudales de Angosturas en Guaviare son unas cataratas en medio de la selva, accesibles solo en canoa.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🌿', texto: 'El Parque Nacional Natural Serranía de Chiribiquete, parcialmente en Guaviare, es Patrimonio UNESCO.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🐊', texto: 'El caño Cristales de Guaviare no es el único: el Guaviare tiene ríos de colores por algas únicas del tepuy.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🌺', texto: 'Las orquídeas del Guaviare son tan variadas que científicos del mundo vienen a catalogarlas cada año.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🏕️', texto: 'San José del Guaviare es punto de partida para expediciones al corazón de la Amazonia colombiana.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🐟', texto: 'La cachama del Guaviare es criada y pescada para consumo local; su sabor es valorado en toda la Amazonia.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🦋', texto: 'El Guaviare tiene una de las mayores concentraciones de mariposas morfo azul de toda Colombia.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🌙', texto: 'Los tepuyes del Guaviare son formaciones de arenisca de más de 1.800 millones de años.' },
        { dept: 'Guaviare', color: '#059669', emoji: '🗣️', texto: 'Las comunidades nukak del Guaviare son uno de los últimos grupos nómadas de Colombia.' },
        // HUILA
        { dept: 'Huila', color: '#d97706', emoji: '🔭', texto: 'El desierto de La Tatacoa en Huila es el segundo desierto más grande de Colombia y un punto de astronomía clave.' },
        { dept: 'Huila', color: '#d97706', emoji: '🦕', texto: 'En el Parque Paleontológico de Villavieja, Huila, se han encontrado fósiles de crocodílidos de hace 13 millones de años.' },
        { dept: 'Huila', color: '#d97706', emoji: '🌊', texto: 'El río Magdalena, el más importante de Colombia, nace en el Macizo Colombiano en el sur del Huila.' },
        { dept: 'Huila', color: '#d97706', emoji: '☕', texto: 'El café del Huila ha ganado múltiples premios internacionales de taza de excelencia; es de los más valorados del país.' },
        { dept: 'Huila', color: '#d97706', emoji: '🎵', texto: 'El Festival del Bambuco en Neiva, capital del Huila, es la fiesta folclórica más representativa del interior colombiano.' },
        { dept: 'Huila', color: '#d97706', emoji: '🌋', texto: 'El Macizo Colombiano en el Huila es la estrella fluvial de Sudamérica: nacen allí cuatro ríos mayores.' },
        { dept: 'Huila', color: '#d97706', emoji: '🗿', texto: 'El Parque Arqueológico de San Agustín en Huila es Patrimonio de la Humanidad UNESCO desde 1995.' },
        { dept: 'Huila', color: '#d97706', emoji: '🍽', texto: 'El asado huilense se prepara con carne de cerdo marinada en hogao durante más de 12 horas antes de asarla.' },
        { dept: 'Huila', color: '#d97706', emoji: '🌺', texto: 'La Laguna del Buey en Huila fue nombrada así por la leyenda de un toro de oro que según los indígenas habita en sus fondos.' },
        { dept: 'Huila', color: '#d97706', emoji: '🦅', texto: 'El cóndor de los Andes fue reintroducido con éxito en la Serranía de las Minas, Huila, en los años 2000.' },
        // LA GUAJIRA
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🌬️', texto: 'La Guajira es la región con mayor potencial eólico de América Latina, con vientos promedio de más de 10 m/s.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🏜️', texto: 'La Guajira es el único desierto tropical costero de Colombia, con dunas que llegan hasta el mar Caribe.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🌅', texto: 'Cabo de la Vela es el punto más al norte de Sudamérica continental, tierra del pueblo wayuu.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🌊', texto: 'La Punta Gallinas en La Guajira es el punto más septentrional de toda Sudamérica.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🧶', texto: 'Las mochilas wayuu de La Guajira son tejidas a mano y cada una puede tardar entre 15 y 30 días en elaborarse.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🐐', texto: 'La cría de chivos es la base económica y cultural del pueblo wayuu de La Guajira desde hace siglos.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🌺', texto: 'El Festival de la Cultura Wayuu en Uribia, "la capital indígena de Colombia", celebra la mayor etnia del país.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '💡', texto: 'El Parque Eólico Jepírachi en La Guajira fue el primer parque eólico de Colombia, inaugurado en 2003.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🍽', texto: 'El friche wayuu es un plato ritual de chivo asado con vísceras, preparado en ceremonias y velorios.' },
        { dept: 'La Guajira', color: '#f59e0b', emoji: '🦩', texto: 'El Santuario de Fauna y Flora Los Flamencos en La Guajira protege colonias de flamencos rosados migratorios.' },
        // MAGDALENA
        { dept: 'Magdalena', color: '#2563eb', emoji: '🏔️', texto: 'La Sierra Nevada de Santa Marta es la montaña costera más alta del mundo con 5.775 msnm.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🌊', texto: 'El Parque Tayrona en Magdalena combina selva tropical con playas de arena blanca y arrecifes de coral.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🗿', texto: 'La Ciudad Perdida (Teyuna) en la Sierra Nevada fue construida hace 650 años y supera en antigüedad a Machu Picchu.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🐠', texto: 'Santa Marta fue la primera ciudad fundada por los españoles en tierra firme de América del Sur, en 1525.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🎵', texto: 'Carlos Vives, el cantante colombiano más internacionalmente reconocido del vallenato moderno, es de Santa Marta.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🌿', texto: 'La reserva de biosfera de la Sierra Nevada de Santa Marta protege más de 650 especies de aves.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🧗', texto: 'El trekking a la Ciudad Perdida en Magdalena es considerado una de las mejores rutas de senderismo de Sudamérica.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🌺', texto: 'El Festival del Mar en Santa Marta es uno de los festivales acuáticos y culturales más grandes del Caribe colombiano.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🐊', texto: 'La Ciénaga Grande de Santa Marta es el lago costero más grande de Colombia y un humedal Ramsar.' },
        { dept: 'Magdalena', color: '#2563eb', emoji: '🍽', texto: 'La viuda de pescado magdalenense se prepara sobre piedras calientes al borde del río, tradición ribereña única.' },
        // META
        { dept: 'Meta', color: '#8c2d2d', emoji: '🦅', texto: 'Meta alberga el 30% de las aves de Colombia. La Macarena es única en biodiversidad mundial.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🌈', texto: 'Caño Cristales en Meta es conocido como "el río de los cinco colores" por las plantas acuáticas que lo tiñen.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🐆', texto: 'La Serranía de La Macarena en Meta es uno de los últimos refugios del jaguar en Colombia.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🌿', texto: 'La Macarena es un punto de encuentro único de cuatro grandes biogeografías: Andes, Orinoquia, Amazonia y Guyana.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🐴', texto: 'Villavicencio, capital del Meta, es la puerta de entrada a los llanos orientales y capital de la música llanera.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🎵', texto: 'El Festival Internacional del Joropo en Villavicencio reúne a los mejores arpistas y copleros del mundo llanero.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🍖', texto: 'La carne a la perra del Meta se envuelve en cuero de res fresco y se entierra con carbón caliente por horas.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🌊', texto: 'El río Meta marca la frontera natural entre Colombia y Venezuela y desemboca en el Orinoco.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🦜', texto: 'El loro real o guacamaya verde es el ave símbolo del Meta y puede vivir hasta 80 años en libertad.' },
        { dept: 'Meta', color: '#8c2d2d', emoji: '🌅', texto: 'Las sabanas del Meta se inundan completamente en verano, creando un ecosistema único de sabana inundable.' },
        // NARIÑO
        { dept: 'Nariño', color: '#16a34a', emoji: '🌺', texto: 'La Laguna de La Cocha en Nariño es el único lago navegable de Colombia y uno de los más grandes en altitud.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🌋', texto: 'Nariño tiene la mayor concentración de volcanes activos de Colombia: Galeras, Cumbal, Chiles y Azufral.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🎨', texto: 'Las máscaras y carrozas del Carnaval de Negros y Blancos de Pasto son Patrimonio UNESCO desde 2009.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🍽', texto: 'El cuy asado es el plato más representativo de Nariño, de tradición prehispánica y símbolo de celebración.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🌿', texto: 'El Santuario de Flora La Planada en Nariño tiene la mayor diversidad de plantas por km² de los Andes.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🎭', texto: 'El Carnaval de Blancos y Negros en Pasto conmemora la abolición de la esclavitud con danzas y disfraces únicos.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🌊', texto: 'Tumaco en Nariño es el segundo puerto marítimo más importante del Pacífico colombiano.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🧶', texto: 'El barniz de Pasto o "mopa mopa" es una técnica artesanal precolombina única en el mundo, declarada Patrimonio.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🐦', texto: 'El cóndor andino es avistado regularmente en los páramos de Nariño; la región es clave para su recuperación.' },
        { dept: 'Nariño', color: '#16a34a', emoji: '🌄', texto: 'Las carreteras de Nariño atraviesan paisajes que van del páramo al Pacífico en menos de 100 km.' },
        // NORTE DE SANTANDER
        { dept: 'Norte de Santander', color: '#006411', emoji: '🦎', texto: 'En Norte de Santander se encontraron fósiles de la Titanoboa, la serpiente más grande que haya existido: 13 metros.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🌿', texto: 'El Catatumbo en Norte de Santander tiene el fenómeno del Relámpago del Catatumbo: hasta 280 noches de tormenta al año.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '⚡', texto: 'El Relámpago del Catatumbo es el lugar del mundo con mayor actividad eléctrica; genera el 10% del ozono troposférico.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🏙️', texto: 'Cúcuta, capital de Norte de Santander, es la ciudad fronteriza más comercial de Colombia con Venezuela.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🍽', texto: 'El mute santandereano es una sopa densa de maíz, carne, garbanzos y papa, de tradición colonial española.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🌊', texto: 'El río Zulia en Norte de Santander es navegable y fue clave en el transporte de cacao en el siglo XIX.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🏛️', texto: 'Villa del Rosario, en Norte de Santander, fue sede del Congreso que redactó la Constitución de la Gran Colombia en 1821.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🌺', texto: 'El Parque Natural Regional Sisavita en Norte de Santander protege los últimos bosques de niebla de la región.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🧱', texto: 'Norte de Santander produce el 60% del carbón mineral de Colombia; sus minas son de las más productivas del país.' },
        { dept: 'Norte de Santander', color: '#006411', emoji: '🦋', texto: 'El Parque Natural Regional Área de Manejo Especial del Catatumbo alberga más de 300 especies de mariposas.' },
        // PUTUMAYO
        { dept: 'Putumayo', color: '#0d9488', emoji: '🌿', texto: 'Putumayo concentra una de las mayores diversidades de plantas medicinales del mundo usadas por comunidades indígenas.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🌊', texto: 'El río Putumayo nace en los Andes y viaja 1.813 km hasta el Amazonas, marcando la frontera con Perú y Ecuador.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🐟', texto: 'En los ríos del Putumayo habitan más de 400 especies de peces, muchas aún sin clasificar científicamente.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🌺', texto: 'El chontaduro del Putumayo es una palma cuyo fruto es fuente principal de proteína para comunidades indígenas.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🌋', texto: 'La Laguna La Cocha está justo en el límite entre Nariño y Putumayo, en el borde del volcán Bordoncillo.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🦜', texto: 'La guacamaya azul y amarilla es común en los bosques del Putumayo; vuela en parejas de por vida.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🏕️', texto: 'Mocoa, capital del Putumayo, está rodeada de cascadas; el sendero a la Cascada Fin del Mundo es el más visitado.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🐆', texto: 'El Putumayo es corredor biológico del jaguar entre la Amazonia colombiana y el Ecuador.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🗣️', texto: 'En Putumayo se hablan más de 10 lenguas indígenas, entre ellas el inga, el kamsá y el nasa yuwe.' },
        { dept: 'Putumayo', color: '#0d9488', emoji: '🍽', texto: 'El pescado de río frito con patacón y ají negro es el plato más cotidiano de la gastronomía putumayense.' },
        // QUINDÍO
        { dept: 'Quindío', color: '#22c55e', emoji: '🌴', texto: 'La palma de cera del Quindío, árbol nacional de Colombia, puede vivir más de 100 años y alcanzar 60 metros.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '☕', texto: 'El Quindío es el departamento cafetero más pequeño de Colombia, pero uno de los más productivos por hectárea.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🦜', texto: 'El loro orejiamarillo, considerado extinc en los 80, fue redescubierto y se recupera gracias a proyectos del Quindío.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🏙️', texto: 'Armenia, capital del Quindío, fue casi destruida por el terremoto de 1999 y se reconstruyó en tiempo récord.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🚂', texto: 'El Quindío fue el primer departamento de Colombia en tener tren cafetero turístico como atractivo cultural.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🌺', texto: 'El Valle del Cocora en Quindío es el único lugar del mundo donde la palma de cera crece en tal densidad y tamaño.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🐦', texto: 'El colibrí pico de espada, con el pico más largo proporcional al cuerpo de todas las aves, vive en el Quindío.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🎭', texto: 'El Parque Nacional del Café en Quindío es el parque temático más visitado de Colombia fuera de Bogotá.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🌿', texto: 'El Quindío tiene la mayor densidad de fincas cafeteras con certificación orgánica del Eje Cafetero.' },
        { dept: 'Quindío', color: '#22c55e', emoji: '🍽', texto: 'La trucha del Quindío, criada en aguas frías de montaña, es considerada la mejor del país por su textura y sabor.' },
        // RISARALDA
        { dept: 'Risaralda', color: '#f97316', emoji: '🦜', texto: 'El Santuario Otún Quimbaya en Risaralda es refugio del loro orejiamarillo, una de las aves más amenazadas de Colombia.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '☕', texto: 'Pereira, capital de Risaralda, es el corazón comercial del Eje Cafetero y la tercera ciudad más poblada de la región andina.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🌿', texto: 'El Parque Nacional Natural Tatamá en Risaralda es uno de los bosques de niebla más biodiversos del mundo.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🌺', texto: 'El municipio de Marsella, Risaralda, tiene el jardín botánico más antiguo del Eje Cafetero, fundado en 1929.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🏄', texto: 'El río Cauca en Risaralda ofrece rafting de clase IV y V, siendo uno de los ríos más desafiantes del país.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🎵', texto: 'La música de cuerda del Eje Cafetero tiene en Risaralda una de sus tradiciones más fuertes de bandola y tiple.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🌄', texto: 'Desde el Alto del Nudo en Risaralda se puede ver al mismo tiempo el río Cauca y el Pacífico en días despejados.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🐦', texto: 'Risaralda tiene registradas más de 600 especies de aves, muchas endémicas de los Andes colombianos.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🧱', texto: 'La arquitectura de bahareque del Eje Cafetero, representada en Risaralda, está en la lista UNESCO.' },
        { dept: 'Risaralda', color: '#f97316', emoji: '🍽', texto: 'El sancocho de gallina criolla risaraldense se cocina con hierbas de la huerta propias de cada familia.' },
        // SAN ANDRÉS
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🐠', texto: 'El archipiélago de San Andrés tiene la segunda barrera coralina más grande del mundo, Reserva de Biosfera UNESCO.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🌊', texto: 'El Mar de los Siete Colores de San Andrés es famoso por la transparencia y gradiente de azules de sus aguas.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🗣️', texto: 'La comunidad raizal de San Andrés habla una lengua propia: el creole, mezcla de inglés, español y lenguas africanas.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🦀', texto: 'En San Andrés ocurre cada año la migración masiva del cangrejo negro: miles cruzan la isla hacia el mar para reproducirse.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🏝️', texto: 'Providencia, parte del archipiélago, fue declarada el arrecife coralino mejor conservado del Caribe occidental.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🍽', texto: 'El rondón de San Andrés es un guiso de mariscos, pescado y vegetales en leche de coco, de origen caribeño anglosajón.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🎵', texto: 'El calipso sanandresano tiene raíces africanas y caribeñas distintas al resto de Colombia, con letras en creole.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🐢', texto: 'La tortuga carey y la tortuga verde se reproducen en las playas de Providencia, protegidas por la comunidad raizal.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🌺', texto: 'Old Providence McBean Lagoon en Providencia es el único parque natural marino de Colombia en el Caribe.' },
        { dept: 'San Andrés', color: '#06b6d4', emoji: '🦞', texto: 'La langosta espinosa del Caribe, capturada artesanalmente en San Andrés, es uno de sus principales productos de exportación.' },
        // SANTANDER
        { dept: 'Santander', color: '#4f46e5', emoji: '🪂', texto: 'San Gil en Santander es la capital del deporte extremo de Colombia y uno de los mejores destinos de rafting de América.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🌿', texto: 'El Cañón del Chicamocha en Santander es el cañón más profundo de Colombia y uno de los más espectaculares de América.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🍽', texto: 'Las hormigas culonas de Santander son una tradición culinaria de más de 500 años, consumidas fritas como snack.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🏛️', texto: 'Barichara en Santander es considerado el pueblo más bonito de Colombia, con casas de piedra del siglo XVIII.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🌊', texto: 'El Parque Nacional del Chicamocha tiene el teleférico más largo de Colombia, con 6,3 km sobre el cañón.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '⚽', texto: 'Bucaramanga, capital de Santander, es conocida como "la ciudad bonita" y una de las más organizadas de Colombia.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🥊', texto: 'Santander ha dado al boxeo colombiano varios campeones mundiales; la región tiene tradición pugilística de décadas.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🌺', texto: 'La ruta de los Comuneros atraviesa Santander y recuerda la primera gran rebelión popular de América en 1781.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🧵', texto: 'El bordado de la manta santandereana es un arte textil declarado Patrimonio Cultural Inmaterial de Colombia.' },
        { dept: 'Santander', color: '#4f46e5', emoji: '🌄', texto: 'El Camino Real de Barichara a Guane en Santander es uno de los senderos prehispánicos mejor conservados de Colombia.' },
        // SUCRE
        { dept: 'Sucre', color: '#10b981', emoji: '💃', texto: 'El Festival Nacional del Porro en Sucre es uno de los festivales de música tradicional más antiguos de Colombia, desde 1960.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🌊', texto: 'La Ciénaga de la Caimanera en Sucre es uno de los manglares más grandes y mejor conservados del Caribe colombiano.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🐊', texto: 'Los humedales de Sucre son hábitat de reproducción del caimán aguja, especie en recuperación en Colombia.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🎵', texto: 'El fandango de lengua, gaita y porro son ritmos originados en las culturas zenú del actual Sucre.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🌾', texto: 'El ñame sucreño, variedad local de taro, es uno de los productos agrícolas más exportados del Caribe colombiano.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🏛️', texto: 'Sincelejo, capital de Sucre, es conocida como "ciudad de los caballeros" por su feria taurina tradicional.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🧶', texto: 'Las hamacas y trenzados de caña flecha del pueblo zenú en Sucre son Patrimonio Cultural Inmaterial de Colombia.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🍲', texto: 'El mote de queso sucreño varía del bolivarense: lleva más ñame y se acompaña con bollo de mazorca.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🌺', texto: 'El complejo lagunar de la Mojana en Sucre es una de las mayores reservas de agua dulce del norte de Colombia.' },
        { dept: 'Sucre', color: '#10b981', emoji: '🐟', texto: 'La pesca artesanal en el Golfo de Morrosquillo, Sucre, ha sostenido familias de pescadores por generaciones.' },
        // TOLIMA
        { dept: 'Tolima', color: '#dc2626', emoji: '🌋', texto: 'El nevado del Huila, en el límite con Tolima, es el volcán activo más alto de Colombia con 5.364 msnm.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🎵', texto: 'El bambuco, música nacional de Colombia, tiene en Ibagué su capital: la ciudad musical del país.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🌊', texto: 'El río Magdalena atraviesa el Tolima de sur a norte, siendo el eje histórico de la economía del departamento.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🍽', texto: 'El tamal tolimense se diferencia por su relleno de arroz, carne, pollo y arveja, envuelto en hoja de bijao.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🌿', texto: 'El Parque Nacional Natural Los Nevados cubre parte del Tolima con glaciares que abastecen ríos regionales.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🎪', texto: 'El Festival Folclórico del Bambuco en Ibagué es el evento musical más tradicional del interior andino colombiano.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🌾', texto: 'El arroz de la meseta del Tolima es uno de los más apreciados de Colombia por su grano largo y fragancia.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🐦', texto: 'El Parque Nacional Nevado del Huila protege el cóndor andino; la región tiene el mayor avistamiento del país.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🧱', texto: 'El municipio de Honda, Tolima, conserva el mayor número de casas coloniales ribereñas de Colombia, del siglo XVI.' },
        { dept: 'Tolima', color: '#dc2626', emoji: '🌺', texto: 'La lechona tolimense, cerdo relleno de arroz y arvejas asado entero, es el plato más emblemático del departamento.' },
        // VALLE DEL CAUCA
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🎶', texto: 'Cali es la capital mundial de la salsa. Cada año recibe millones de turistas por el Festival Mundial de Salsa.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🌿', texto: 'El Valle del Cauca produce más del 90% del azúcar de Colombia gracias a su clima tropical privilegiado.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🌊', texto: 'El río Cauca en el Valle tiene el mayor volumen hídrico regulado por represas en Colombia.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🏛️', texto: 'Cali fue sede de los Juegos Panamericanos 1971 y los Juegos Mundiales 2013, consolidando su vocación deportiva.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🌺', texto: 'El Parque Nacional Natural Farallones de Cali protege el acueducto natural que abastece a toda la ciudad.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🍽', texto: 'El sancocho de gallina valluno lleva hierbas aromáticas de la región que le dan un sabor único en Colombia.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🎭', texto: 'La Feria de Cali cada diciembre es una de las fiestas más reconocidas de América Latina por su música y folclor.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🐦', texto: 'El Parque Nacional Farallones alberga el 60% de las aves del Valle del Cauca, incluidas varias endémicas.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🏖️', texto: 'Buenaventura en el Valle del Cauca es el puerto más importante de Colombia sobre el Pacífico.' },
        { dept: 'Valle del Cauca', color: '#7c3aed', emoji: '🌮', texto: 'El champús vallecaucano, bebida de maíz, lulo y guanábana, es tan antiguo como la colonia española en la región.' },
        // VAUPÉS
        { dept: 'Vaupés', color: '#0284c7', emoji: '🗣️', texto: 'Vaupés es el departamento con mayor diversidad lingüística de Colombia: se hablan más de 25 lenguas indígenas.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🌿', texto: 'El 95% del territorio del Vaupés está cubierto por selva amazónica sin intervención humana significativa.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🌊', texto: 'El río Vaupés tiene raudales y cascadas que impiden la navegación continua, aislando comunidades por siglos.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🍽', texto: 'El casabe de Vaupés se elabora con técnicas que han permanecido inalteradas por más de 3.000 años.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🎨', texto: 'Los diseños corporales indígenas del Vaupés son mapas de identidad étnica que codifican historia y territorio.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🦜', texto: 'Los tucanes y guacamayas del Vaupés son tan abundantes que avistarlos al amanecer es una experiencia cotidiana.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🏕️', texto: 'Mitú, capital del Vaupés, solo es accesible por avión; es una de las capitales departamentales más aisladas de Colombia.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🐟', texto: 'El pez bocachico del Vaupés sube en masa por los ríos cada temporada en el fenómeno conocido como "subienda".' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🌙', texto: 'Las comunidades desana del Vaupés tienen una astronomía propia que regula sus ciclos agrícolas y rituales.' },
        { dept: 'Vaupés', color: '#0284c7', emoji: '🌺', texto: 'El Vaupés tiene la menor densidad de población de Colombia: menos de 0,3 habitantes por km².' },
        // VICHADA
        { dept: 'Vichada', color: '#991b1b', emoji: '⭐', texto: 'Vichada tiene los cielos más despejados de Colombia, siendo un paraíso para la observación astronómica.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🌊', texto: 'El río Orinoco forma la frontera de Vichada con Venezuela; sus raudales de Maipures son los más grandes del mundo.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🌿', texto: 'La Reserva de Biosfera El Tuparro en Vichada es la más grande de Colombia, con más de 500.000 hectáreas.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🐊', texto: 'El caimán del Orinoco, el más grande de América, tiene en Vichada uno de sus últimos refugios naturales.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🦅', texto: 'La Orinoquia vichadense es el reino del águila arpía, el ave rapaz más grande de las Américas.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🌅', texto: 'Las sabanas de Vichada son tan extensas que en temporada de lluvias el horizonte desaparece bajo el agua.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🐴', texto: 'Puerto Carreño, capital de Vichada, es accesible por avión o por días de navegación fluvial desde el interior.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🍖', texto: 'La mamona de Vichada se cocina sobre estacas de madera alrededor del fuego durante toda la noche.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🎵', texto: 'El joropo de Vichada tiene una cadencia más lenta y melancólica que el de otros llanos, único en su estilo.' },
        { dept: 'Vichada', color: '#991b1b', emoji: '🌿', texto: 'El palmar de las Gaviotas en Vichada fue un experimento de reforestación masiva con pino caribe en los años 80.' },
    ];

    // Mezclar aleatoriamente (Fisher-Yates)
    for (let i = datos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [datos[i], datos[j]] = [datos[j], datos[i]];
    }

    const track = document.getElementById('curiososTrack');
    if (!track) return;

    let current = 0;
    const INTERVAL = 15000;

    datos.forEach((d, i) => {
        const card = document.createElement('div');
        card.className = 'curiosos-card' + (i === 0 ? ' active' : '');
        card.setAttribute('aria-hidden', i !== 0 ? 'true' : 'false');
        card.innerHTML = `
            <span class="curiosos-card-emoji" style="color:${d.color}">${d.emoji}</span>
            <div class="curiosos-card-body">
                <span class="curiosos-card-dept" style="background:${d.color}">${d.dept}</span>
                <p class="curiosos-card-text">${d.texto}</p>
            </div>`;
        track.appendChild(card);
    });

    const cards = track.querySelectorAll('.curiosos-card');

    function goTo(index) {
        cards[current].classList.remove('active');
        cards[current].setAttribute('aria-hidden', 'true');
        current = (index + datos.length) % datos.length;
        cards[current].classList.add('active');
        cards[current].setAttribute('aria-hidden', 'false');
    }

    let timer = setInterval(() => goTo(current + 1), INTERVAL);
    track.addEventListener('mouseenter', () => clearInterval(timer));
    track.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), INTERVAL); });

    let touchX = 0;
    track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
    });

})();
