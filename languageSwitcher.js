document.addEventListener('DOMContentLoaded', function () {
    var currentLangDiv = document.getElementById('currentLang');
    var langOptions = document.querySelector('.lang-options');
    var options = langOptions.getElementsByClassName('option');
    var flagImg = currentLangDiv.querySelector('.flag img'); // This might need to change if you are using SVG instead of IMG
    var currentLangText = currentLangDiv.querySelector('span');

    // Mockup translations object (you'll need to expand this with real translations)
    var translations = {
        "az": {
            "pageTitle": "RAIS İstilik Nasosları",
            "home": "Əsas Səhifə",
            "gallery": "Qalereya",
            "videos": "Videolar",
            "contact": "Əlaqə",
            "about": "Haqqımızda",
            "aboutContent": "RAIN Energy innovativ və davamlı enerji həlləri hazırlamağa sadiqdir. Missiyamız daha təmiz, daha səmərəli dünya yaratmaq üçün bərpa olunan mənbələrin gücündən istifadə etməkdir.",
            "team": "Komanda",
            "welcomeMessage": "RAİN İstilik və Soyutma Nasosları Şirkətinə Xoş Gəlmisiniz",
            "discover": "Məhsullarımızın xüsusiyyətləri və üstünlükləri ilə tanış olun. Bizim geotermal, hidrotermal, aerotermal və bio-termal nasoslarımızın effektivliyi və davamlılığı haqqında daha çox məlumat əldə edin.",
            "nameLabel": "Ad:",
            "emailLabel": "E-poçt:",
            "phoneLabel": "Telefon:",
            "messageLabel": "Mətn:",
            "submitButton": "Göndər:",
            "exploreButton": "Araşdır",
            "aboutFounder": "Təsisçimiz haqqında",
            "founderDetails": "Azərbaycanın Yer Elmləri üzrə Elmlər Doktoru, Ukraynanın Geoekologiya Elmləri Doktoru, Rusiyanın Təbiət Elmləri Akademiyasının Həqiqi üzvüyəm. Dövlət Qulluğunun Kiçik Dövlət Müşaviriyəm. Uzun müddət N.Nərimanov adına neft-qaz çıxarma idarəsində mədənin baş geoloqu, və “Neft Daşları”nda ətraf mühitin və dənizin şirklənmədəm qorunması problemləri ilə məşğul olmuşam və tədqiqatlarımı hələ də davam etdirirəm 2007-ci ildə yeni yaradılan Energetika Nazirliyində “Alternativ enerji və ekologiya” şöbəsinin müdir müavini, 2013-cü ildən isə yeni yaradılan “Alternativ və Bərpa olunan enerji mənbələri üzrə Dövlət Agentliyində həmin vəzifədə çalışmışam. Təqaüdə çıxana qədər Dövlət Neft Akademiyasında, İdarəçilik Akademiyasında, Qafqaz Unuversitetində, Bakı Dövlət Unuversitetində professor vəzifəsində çalışmışam.",
            "mission": "Missiyamız",
            "missionDetails": "Missiyamız Yer kürəsinin təbii istilik enerjisindən istifadə edərək səmərəli, davamlı və ekoloji cəhətdən təmiz istilik və soyutma həlləri təqdim etməkdir. Məqsədimiz ənənəvi yanacaq mənbələrinə olan asılılığı azaltmaq, ətraf mühitə təsiri minimuma endirmək və qlobal miqyasda bərpa olunan enerjiyə keçidi dəstəkləməkdir.",
            "goals": "Məqsədlərimiz",
            "goal1": "Geotermal, hidrotermal, aerotermal və bio-termal mənbələrdən istifadə edən qabaqcıl istilik nasos sistemlərini inkişaf etdirmək və həyata keçirmək.",
            "goal2": "Karbon emissiyalarını azaldan və enerji səmərəliliyini artıran davamlı enerji həllərini təşviq etmək.",
            "goal3": "Yaşayış, kommersiya və sənaye tətbiqləri üçün etibarlı, sərfəli istilik və soyutma həlləri təqdim etmək.",
            "services": "Xİdmətlərİmİz",
            "servicesIntro": "RAİN Heating and Cooling Pumps Company olaraq, biz sizin istilik və soyutma ehtiyaclarınızı qarşılamaq üçün müxtəlif xidmətlər təklif edirik:",
            "service1": "İstilik nasoslarımız üçün soyuducu olaraq Freon və Glikol istifadə edirik.",
            "service2": "<strong>Geotermal İstilik Nasosları:</strong> Yer kürəsinin təbii istiliyindən istifadə edərək, bu nasoslar xarici hava şəraitindən asılı olmayaraq davamlı və səmərəli istilik və soyutma təmin edir.",
            "service3": "<strong>Hidrotermal İstilik Nasosları:</strong> Dənizlər, göllər və çaylar daxil olmaqla su obyektlərinin istilik enerjisindən istifadə edərək təsirli temperatur tənzimlənməsi təmin edir.",
            "service4": "<strong>Aerotermal İstilik Nasosları:</strong> İstilik mənbəyi kimi havadan istifadə edərək, bu nasoslar mülayim temperatur dəyişikliyi olan iqlimlər üçün idealdır.",
            "service5": "<strong>Bio-termal İstilik Nasosları:</strong> Məişət, kənd təsərrüfatı və sənaye mənbələrindən tullantı materiallarını istilik enerjisinə çevirərək davamlı tullantı idarə edilməsini təmin edir.",
            "whyChooseUs": "Nİyə Bİzİ Seçməlİsİnİz?",
            "reason1": "<strong>Ekoloji cəhətdən təmiz həllər:</strong> İstilik nasoslarımız karbon emissiyalarını azaldır və bərpa olunan enerji mənbələrindən istifadə edir, daha sağlam bir mühitə töhfə verir.",
            "reason2": "<strong>Qənaətcil:</strong> Enerji istehlakını azaltmaqla, sistemlərimiz istilik və soyutma xərclərinə əhəmiyyətli qənaət təklif edir.",
            "reason3": "<strong>İnnovativ Texnologiya:</strong> Bütün məhsullarımızda yüksək səmərəlilik və etibarlılığı təmin etmək üçün ən son texnologiyalardan istifadə edirik.",
            "reason4": "<strong>Ekspertiza:</strong> Dr. Əliyevin rəhbərlik etdiyi təcrübəli mütəxəssislərdən ibarət komandamız keyfiyyətli həllər və xidmətlər təqdim etməyə həsr olunub.",
            "benefits": "İstİlİk Nasoslarının Faydaları",
            "benefit1": "<strong>Yüksək Səmərəlilik:</strong> İstilik nasoslarının performans əmsalı (COP) yüksəkdir, tez-tez 4-dən çox olur, yəni istehlak etdiklərindən daha çox enerji verir.",
            "benefit2": "<strong>Qənaət:</strong> Ənənəvi istilik və soyutma sistemləri ilə müqayisədə enerji xərclərində əhəmiyyətli azalmalar.",
            "benefit3": "<strong>Davamlılıq:</strong> Bərpa olunan enerji mənbələrindən istifadə istixana qazı emissiyalarını azaltmağa kömək edir.",
            "benefit4": "<strong>Çox yönlü:</strong> İstilik, soyutma və isti su təchizatı daxil olmaqla geniş tətbiqlər üçün uyğundur.",
            "projects": "Layİhələrİmİz",
            "projectsIntro": "Biz istilik nasos sistemlərimizin praktiklik və səmərəliliyini nümayiş etdirərək, müxtəlif bölgələrdə uğurla layihələr həyata keçirmişik. Davam edən tədqiqat və inkişaf işlərimiz bu həllərin daha çox sahələrə, o cümlədən Azərbaycanın yeni azad edilmiş bölgələrinə genişləndirilməsini hədəfləyir.",
            "team": "Komanda",
            "man1Name": "Əliyev Rasim Nəcəf oğlu",
            "man1Description": "Azərbaycanın Yer Elmləri üzrə Elmlər Doktoru, Ukraynanın Geoekologiya Elmləri Doktoru, Rusiyanın Təbiət Elmləri Akademiyasının Həqiqi üzvüyəm. Dövlət Qulluğunun Kiçik Dövlət Müşaviriyəm. Uzun müddət N.Nərimanov adına neft-qaz çıxarma idarəsində mədənin baş geoloqu, və “Neft Daşları”nda ətraf mühitin və dənizin şirklənmədəm qorunması problemləri ilə məşğul olmuşam və tədqiqatlarımı hələ də davam etdirirəm 2007-ci ildə yeni yaradılan Energetika Nazirliyində “Alternativ enerji və ekologiya” şöbəsinin müdir müavini, 2013-cü ildən isə yeni yaradılan “Alternativ və Bərpa olunan enerji mənbələri üzrə Dövlət Agentliyində həmin vəzifədə çalışmışam. Təqaüdə çıxana qədər Dövlət Neft Akademiyasında, İdarəçilik Akademiyasında, Qafqaz Unuversitetində, Bakı Dövlət Unuversitetində professor vəzifəsində çalışmışam.",
            "teamEmployees": "Şirkətimizdə 3 geoloq, bir vəkil, bir IT mühəndisi və bir mühasib də daxil olmaqla bir neçə əməkdaş çalışır.",
            "contact": "Əlaqə",
            "nameLabel": "Ad:",
            "emailLabel": "E-poçt:",
            "phoneLabel": "Telefon:",
            "messageLabel": "Mətn:",
            "submitButton": "Göndər:",
            "contactInfo": "Əlaqə Məlumatları",
            "footer": "© 2024 RAIS Energy. Bütün hüquqlar qorunur.",
            "desc1": "Mühəndislərimiz tərəfindən yaradılan nümunə 1",
            "desc2": "Mühəndislərimiz tərəfindən yaradılan nümunə 2",
            "desc3": "Son Hazır İstilik Nasosu",
            "desc4": "İş Stansiyamız",
            "desc5": "Hazır Məhsul",
            "desc6": "Çindən sifariş edilən detallar",
            "desc7": "İş Prinsipi",
            "desc8": "Son Geotermal İstilik Nasosu",
            "desc9": "Son Geotermal İstilik Nasosu",
            "desc10": "Son Geotermal İstilik Nasosu",
            "desc11": "Son Geotermal İstilik Nasosu",
            "desc12": "Son Geotermal İstilik Nasosu",
            "desc13": "Son Geotermal İstilik Nasosu",
            "desc14": "Son Geotermal İstilik Nasosu",
            "desc15": "Son Geotermal İstilik Nasosu",
            "desc16": "Havadan geotermal enerji almaq üçün cihaz",
            "desc17": "Rusiyadan Məhsul",
            "desc18": "Rusiyadan Geotermal İstilik Nasosları 1",
            "desc19": "Rusiyadan Geotermal İstilik Nasosları 2",
            "desc20": "İstilik Nasoslarının Qiymət Müqayisəsi",
            "desc21": "İstilik Nasosunun Strukturu",
            "desc22": "Məhsul Şəkli 24",
            "desc23": "İstilik Nasosu üçün Səbət",
            "desc24": "İstilik Nasosu üçün Boru",
            "desc25": "İstilik Nasosunun özü",
            "desc26": "Son Səbət 1",
            "desc27": "Son Səbət 2"
        },
        "ru": {
            "pageTitle": "RAIS Тепловые насосы",
            "home": "Главная",
            "gallery": "Галерея",
            "videos": "Видео",
            "contact": "Контакт",
            "about": "О нас",
            "aboutContent": "Компания RAIN Energy занимается разработкой инновационных и устойчивых энергетических решений. Наша миссия - использовать силу возобновляемых ресурсов для создания более чистого и эффективного мира.",
            "team": "Команда",
            "welcomeMessage": "Добро пожаловать в компанию RAİN Heating and Cooling Pumps",
            "discover": "Познакомьтесь с особенностями и преимуществами наших продуктов. Узнайте больше о нашей геотермальной, гидротермальной, аэротермальной и биотермальной насосной технике, их эффективности и устойчивости.",
            "nameLabel": "Имя:",
            "emailLabel": "Электронная почта:",
            "phoneLabel": "Номер телефона:",
            "messageLabel": "Сообщение:",
            "submitButton": "Отправить:",
            "exploreButton": "Изучить",
            "aboutFounder": "О нашем основателе",
            "founderDetails": "Доктор Расим Наджаф оглу Алиев, доктор наук в области геологии Азербайджана и доктор наук в области геоэкологии Украины, является признанным членом Российской академии естественных наук. Его обширная карьера включает роли главного геолога по добыче нефти и газа, специалиста по охране окружающей среды и профессора в различных престижных университетах. С глубоким стремлением к альтернативной энергетике, доктор Алиев инициировал многочисленные исследовательские проекты и продолжает руководить инновационными усилиями в этой области.",
            "mission": "Наша миссия",
            "missionDetails": "Наша миссия - использовать естественную тепловую энергию Земли для предоставления эффективных, устойчивых и экологически чистых решений для отопления и охлаждения. Мы стремимся снизить зависимость от традиционных источников топлива, минимизировать воздействие на окружающую среду и способствовать глобальному переходу на возобновляемую энергию.",
            "goals": "Наши цели",
            "goal1": "Разрабатывать и внедрять передовые системы тепловых насосов, использующие геотермальные, гидротермальные, аэротермальные и био-термальные источники.",
            "goal2": "Содействовать устойчивым энергетическим решениям, которые сокращают выбросы углерода и повышают энергоэффективность.",
            "goal3": "Предоставлять надежные, экономически эффективные решения для отопления и охлаждения для жилых, коммерческих и промышленных объектов.",
            "services": "Наши услуги",
            "servicesIntro": "В компании RAİN Heating and Cooling Pumps Company мы предлагаем ряд услуг, разработанных для удовлетворения ваших потребностей в отоплении и охлаждении:",
            "service1": "Мы используем фреон и гликоль в качестве хладагента для наших тепловых насосов.",
            "service2": "<strong>Геотермальные тепловые насосы:</strong> Используя естественное тепло Земли, эти насосы обеспечивают стабильное и эффективное отопление и охлаждение, независимо от внешних погодных условий.",
            "service3": "<strong>Гидротермальные тепловые насосы:</strong> Использование тепловой энергии водоемов, включая моря, озера и реки, для эффективного контроля температуры.",
            "service4": "<strong>Аэротермальные тепловые насосы:</strong> Использование воздуха в качестве источника тепла, эти насосы идеально подходят для климатов с умеренными температурными колебаниями.",
            "service5": "<strong>Био-термальные тепловые насосы:</strong> Преобразование отходов из бытовых, сельскохозяйственных и промышленных источников в тепловую энергию, обеспечивая устойчивое управление отходами.",
            "whyChooseUs": "Почему выбирают нас?",
            "reason1": "<strong>Экологически чистые решения:</strong> Наши тепловые насосы сокращают выбросы углерода и используют возобновляемые источники энергии, способствуя здоровью окружающей среды.",
            "reason2": "<strong>Экономически эффективные:</strong> Снижая потребление энергии, наши системы предлагают значительную экономию на отоплении и охлаждении.",
            "reason3": "<strong>Инновационные технологии:</strong> Мы используем передовые технологии для обеспечения высокой эффективности и надежности всех наших продуктов.",
            "reason4": "<strong>Экспертиза:</strong> Под руководством доктора Алиева наша команда опытных специалистов стремится предоставить высококачественные решения и услуги.",
            "benefits": "Преимущества тепловых насосов",
            "benefit1": "<strong>Высокая эффективность:</strong> Тепловые насосы имеют высокий коэффициент производительности (COP), часто превышающий 4, что означает, что они обеспечивают больше энергии, чем потребляют.",
            "benefit2": "<strong>Экономия средств:</strong> Значительное снижение затрат на электроэнергию по сравнению с традиционными системами отопления и охлаждения.",
            "benefit3": "<strong>Устойчивость:</strong> Использование возобновляемых источников энергии помогает сократить выбросы парниковых газов.",
            "benefit4": "<strong>Универсальность:</strong> Подходят для широкого спектра применений, включая отопление, охлаждение и горячее водоснабжение.",
            "projects": "Наши проекты",
            "projectsIntro": "Мы успешно реализовали проекты в различных регионах, демонстрируя практичность и эффективность наших систем тепловых насосов. Наши продолжающиеся исследования и разработки направлены на расширение этих решений в большем количестве областей, включая недавно освобожденные регионы Азербайджана.",
            "team": "Команда",
            "man1Name": "Алиев Расим Нажаф оглу",
            "man1Description": "Доктор наук в области Земных наук Азербайджана, доктор наук в области геоэкологии Украины, действительный член Российской академии естественных наук. Младший государственный советник государственной службы. Долгое время работал главным геологом в нефтегазодобывающем управлении им. Н.Нариманова и занимался проблемами охраны окружающей среды и моря на «Нефтяных Камнях», и продолжаю свои исследования. В 2007 году стал заместителем начальника отдела «Альтернативной энергетики и экологии» в новообразованном Министерстве энергетики, а с 2013 года работаю на той же должности в новосозданном Государственном агентстве по альтернативным и возобновляемым источникам энергии. До выхода на пенсию работал профессором в Азербайджанской государственной нефтяной академии, Академии государственного управления, Кавказском университете и Бакинском государственном университете.",
            "teamEmployees": "В нашей компании работает несколько сотрудников, включая 3 геологов, юриста, IT-инженера и бухгалтера.",
            "contact": "Контакт",
            "nameLabel": "Имя:",
            "emailLabel": "Электронная почта:",
            "phoneLabel": "Телефон:",
            "messageLabel": "Сообщение:",
            "submitButton": "Отправить:",
            "contactInfo": "Контактная информация",
            "footer": "© 2024 RAIS Energy. Все права защищены.",
            "desc1": "Образец, созданный нашими инженерами 1",
            "desc2": "Образец, созданный нашими инженерами 2",
            "desc3": "Готовый тепловой насос",
            "desc4": "Наша рабочая станция",
            "desc5": "Готовый продукт",
            "desc6": "Детали, заказанные из Китая",
            "desc7": "Принцип работы",
            "desc8": "Конечный геотермальный тепловой насос",
            "desc9": "Конечный геотермальный тепловой насос",
            "desc10": "Конечный геотермальный тепловой насос",
            "desc11": "Конечный геотермальный тепловой насос",
            "desc12": "Конечный геотермальный тепловой насос",
            "desc13": "Конечный геотермальный тепловой насос",
            "desc14": "Конечный геотермальный тепловой насос",
            "desc15": "Конечный геотермальный тепловой насос",
            "desc16": "Устройство для получения геотермальной энергии из воздуха",
            "desc17": "Продукт из России",
            "desc18": "Геотермальные тепловые насосы из России 1",
            "desc19": "Геотермальные тепловые насосы из России 2",
            "desc20": "Сравнение цен на тепловые насосы",
            "desc21": "Структура теплового насоса",
            "desc22": "Фото продукта 24",
            "desc23": "Тележка для теплового насоса",
            "desc24": "Труба для теплового насоса",
            "desc25": "Сам тепловой насос",
            "desc26": "Готовая тележка 1",
            "desc27": "Готовая тележка 2"
        },
        "en": {
            "pageTitle": "RAIS Heat Pumps",
            "home": "Home",
            "gallery": "Gallery",
            "videos": "Videos",
            "contact": "Contact",
            "about": "About",
            "aboutContent": "RAIN Energy is dedicated to providing innovative and sustainable energy solutions. Our mission is to harness the power of renewable resources to create a cleaner, more efficient world.",
            "team": "Team",
            "welcomeMessage": "Welcome to RAİN Heating and Cooling Pumps Company",
            "discover": "Discover the features and benefits of our products. Learn more about the efficiency and sustainability of our geothermal, hydrothermal, aerothermal, and bio-thermal pumps.",
            "nameLabel": "Name:",
            "emailLabel": "E-mail:",
            "phoneLabel": "Phone:",
            "messageLabel": "Message:",
            "submitButton": "Submit",
            "exploreButton": "Explore",
            "aboutFounder": "About Our Founder",
            "founderDetails": "Dr. Rasim Najaf oglu Aliyev, with a Doctorate in Earth Sciences from Azerbaijan and Geoecology Sciences from Ukraine, is a recognized member of the Russian Academy of Natural Sciences. His extensive career includes roles as a chief geologist in oil and gas extraction, environmental protection specialist, and professor at various prestigious universities. With a deep commitment to alternative energy, Dr. Aliyev has pioneered numerous research projects and continues to lead innovative efforts in the field.",
            "mission": "Our Mission",
            "missionDetails": "Our mission is to harness the natural thermal energy of the Earth to provide efficient, sustainable, and eco-friendly heating and cooling solutions. We aim to reduce reliance on traditional fuel sources, minimize environmental impact, and contribute to the global transition towards renewable energy.",
            "goals": "Our Goals",
            "goal1": "Develop and implement advanced heat pump systems utilizing geothermal, hydrothermal, aerothermal, and bio-thermal sources.",
            "goal2": "Promote sustainable energy solutions that reduce carbon emissions and enhance energy efficiency.",
            "goal3": "Provide reliable, cost-effective heating and cooling solutions for residential, commercial, and industrial applications.",
            "services": "Our Services",
            "servicesIntro": "At RAİN Heating and Cooling Pumps Company, we offer a range of services designed to meet your heating and cooling needs:",
            "service1": "We use Freon and Glycol as Refrigerant for our heat pumps.",
            "service2": "<strong>Geothermal Heat Pumps:</strong> Utilizing the Earth’s natural heat, these pumps offer consistent and efficient heating and cooling, independent of external weather conditions.",
            "service3": "<strong>Hydrothermal Heat Pumps:</strong> Harnessing the thermal energy from water bodies, including seas, lakes, and rivers, for effective temperature control.",
            "service4": "<strong>Aerothermal Heat Pumps:</strong> Using air as a source of heat, these pumps are ideal for climates with moderate temperature variations.",
            "service5": "<strong>Bio-thermal Heat Pumps:</strong> Converting waste materials from domestic, agricultural, and industrial sources into heat energy, ensuring sustainable waste management.",
            "whyChooseUs": "Why Choose Us?",
            "reason1": "<strong>Eco-friendly Solutions:</strong> Our heat pumps reduce carbon emissions and utilize renewable energy sources, contributing to a healthier environment.",
            "reason2": "<strong>Cost-Effective:</strong> By reducing energy consumption, our systems offer significant cost savings on heating and cooling.",
            "reason3": "<strong>Innovative Technology:</strong> We use cutting-edge technology to ensure high efficiency and reliability in all our products.",
            "reason4": "<strong>Expertise:</strong> Led by Dr. Aliyev, our team of experienced specialists is dedicated to delivering top-quality solutions and services.",
            "benefits": "Benefits of Heat Pumps",
            "benefit1": "<strong>High Efficiency:</strong> Heat pumps have a high coefficient of performance (COP), often exceeding 4, meaning they deliver more energy than they consume.",
            "benefit2": "<strong>Cost Savings:</strong> Significant reductions in energy bills compared to traditional heating and cooling systems.",
            "benefit3": "<strong>Sustainability:</strong> Use of renewable energy sources helps reduce greenhouse gas emissions.",
            "benefit4": "<strong>Versatility:</strong> Suitable for a wide range of applications, including heating, cooling, and hot water supply.",
            "projects": "Our Projects",
            "projectsIntro": "We have successfully implemented projects in various regions, demonstrating the practicality and efficiency of our heat pump systems. Our ongoing research and development efforts aim to expand these solutions to more areas, including the newly liberated regions of Azerbaijan.",
            "team": "Team",
            "man1Name": "Aliyev Rasim",
            "man1Description": "Dr. Rasim Najaf oglu Aliyev, a Doctor of Earth Sciences from Azerbaijan and a Doctor of Geoecology from Ukraine, is a member of the Russian Academy of Natural Sciences. He is a Junior State Advisor in Public Service. For a long time, he worked as the chief geologist at the N.Narimanov Oil and Gas Production Department and dealt with environmental and sea protection issues at \"Neft Daşları\" and continues his research. In 2007, he became the Deputy Head of the \"Alternative Energy and Ecology\" Department in the newly established Ministry of Energy, and since 2013 he has been working in the same position at the newly created State Agency for Alternative and Renewable Energy Sources. Until his retirement, he worked as a professor at the State Oil Academy, the Academy of Public Administration, Qafqaz University, and Baku State University.",
            "teamEmployees": "Our company consists of several employees, including 3 geologists, a lawyer, an IT engineer, and an accountant.",
            "contact": "Contact",
            "nameLabel": "Name:",
            "emailLabel": "E-mail:",
            "phoneLabel": "Phone:",
            "messageLabel": "Message:",
            "submitButton": "Submit",
            "contactInfo": "Contact Information",
            "footer": "© 2024 RAIS Energy. All rights reserved.",
            "desc1": "Our Sample Created by our engineers 1",
            "desc2": "Our Sample Created by our engineers 2",
            "desc3": "Final ready Heat Pump",
            "desc4": "Our Workstation",
            "desc5": "Ready Product",
            "desc6": "Details ordered from China",
            "desc7": "Work Principle",
            "desc8": "Final Geothermal Heat Pump",
            "desc9": "Final Geothermal Heat Pump",
            "desc10": "Final Geothermal Heat Pump",
            "desc11": "Final Geothermal Heat Pump",
            "desc12": "Final Geothermal Heat Pump",
            "desc13": "Final Geothermal Heat Pump",
            "desc14": "Final Geothermal Heat Pump",
            "desc15": "Final Geothermal Heat Pump",
            "desc16": "A device for receiving geothermal energy from the air",
            "desc17": "Product from Russia",
            "desc18": "Geothermal Heat Pumps from Russia 1",
            "desc19": "Geothermal Heat Pumps from Russia 2",
            "desc20": "Price comparison of Heat Pumps",
            "desc21": "Structure of Heat Pump",
            "desc22": "Product Photo 24",
            "desc23": "Cart for Heat Pump",
            "desc24": "Tube for Heat Pump",
            "desc25": "Heat Pump Itself",
            "desc26": "Finalized cart 1",
            "desc27": "Finalized cart 2"
        }
    };
    

    // Function to apply translations to the page
    function applyTranslations(lang) {
        document.querySelectorAll('[data-key]').forEach(function (element) {
            var key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName.toLowerCase() === 'title') {
                    document.title = translations[lang][key]; // Special handling for the document title
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
    }


    // Function to hide the language options
    function hideLangOptions() {
        langOptions.style.display = 'none';
        currentLangDiv.classList.remove('open');
    }

    // Toggle language options on click
    currentLangDiv.addEventListener('click', function (event) {
        var isOpen = langOptions.style.display === 'block';
        langOptions.style.display = isOpen ? 'none' : 'block';
        currentLangDiv.classList.toggle('open', !isOpen);
        event.stopPropagation();
    });

    // Close the language switcher when clicking outside of it
    document.addEventListener('click', function (event) {
        var isClickInsideLangSwitcher = currentLangDiv.contains(event.target) || langOptions.contains(event.target);
        if (!isClickInsideLangSwitcher) {
            hideLangOptions();
        }
    });

    // Add click event to language options
    Array.from(options).forEach(function(option) {
        option.addEventListener('click', function () {
            var selectedLang = this.getAttribute('data-lang');
            
            // Update the current language div with the selected language and flag
            flagImg.src = this.querySelector('img').src;
            flagImg.alt = this.textContent.trim();
            currentLangText.textContent = this.textContent.trim();

            // Apply translations to the page
            applyTranslations(selectedLang);

            // Hide the options again
            hideLangOptions();
        });
    });

    // Initial call to set the default language to Azerbaijani
    applyTranslations('en'); // Set Azerbaijani as the default language
});
