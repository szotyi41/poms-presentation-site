var template = '';
var persons = [
    {
      "contact_person_name": "Guillermo Plaza",
      "contact_title": "Persona de contacto",
      "background_image_1_contact_person": "guillermo_g.jpg",
      "contact_person_location": "Colombia",
      "contact_person_email": "guillermo.plaza@pomscloud.ie",
      "contact_person_phone": "+44 7532 298546",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B12",
      "x": 18,
      "y": 54,
      "direction": 130
    },
    {
      "contact_person_name": "Gergely Zsigmond",
      "contact_title": "Kontaktpersonen",
      "background_image_1_contact_person": "greg_zs.jpg",
      "contact_person_location": "Deutschland",
      "contact_person_email": "greg@pomscloud.ie",
      "contact_person_phone": "+36 20 310 0617",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B15",
      "x": 48,
      "y": 19,
      "direction": 280
    },
    {
      "contact_person_name": "Alexandra Szucs",
      "contact_title": "Persona de contacto",
      "background_image_1_contact_person": "alexandra_sz.jpg",
      "contact_person_location": "España",
      "contact_person_email": "alexandra.szucs@pomscloud.ie",
      "contact_person_phone": "+36 20 364 5529",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B3",
      "x": 43,
      "y": 28,
      "direction": 200
    },
    {
      "contact_person_name": "Flora Karacsony",
      "contact_title": "Persona de contacto",
      "background_image_1_contact_person": "flora_k.jpg",
      "contact_person_location": "Estados Unidos Mexicanos",
      "contact_person_email": "flora@pomscloud.ie",
      "contact_person_phone": "+36 70 466 3400",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B5",
      "x": 11,
      "y": 44,
      "direction": 170
    },
    {
      "contact_person_name": "Dorottya Fulop",
      "contact_title": "Contact",
      "background_image_1_contact_person": "dorottya_f.jpg",
      "contact_person_location": "Ireland",
      "contact_person_email": "dorottya.fulop@pomscloud.ie",
      "contact_person_phone": "+36 20 411 8005",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B4",
      "x": 43,
      "y": 18,
      "direction": 220
    },
    {
      "contact_person_name": "Zita Kolarovszki",
      "contact_title": "Contact",
      "background_image_1_contact_person": "zita_k.jpg",
      "contact_person_location": "La France",
      "contact_person_email": "zita.kolarovszki@pomscloud.ie",
      "contact_person_phone": "+36 20 426 9354",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B7",
      "x": 45,
      "y": 24,
      "direction": 110
    },
    {
      "contact_person_name": "Gergely Gulya",
      "contact_title": "Kapcsolat",
      "background_image_1_contact_person": "gergely_g.jpg",
      "contact_person_location": "Magyarország",
      "contact_person_email": "gergely.gulya@pomscloud.ie",
      "contact_person_phone": "+36 70 318 1833",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "IG3",
      "x": 52,
      "y": 21
    },
    {
      "contact_person_name": "Szilard Beres",
      "contact_title": "Contact",
      "background_image_1_contact_person": "szilard_b.jpg",
      "contact_person_location": "New Zeland",
      "contact_person_email": "szilard.beres@pomscloud.ie",
      "contact_person_phone": "+36 20 940 2727",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "AD2",
      "x": 97,
      "y": 92,
      "direction": 160
    },
    {
      "contact_person_name": "Bálint Borsos",
      "contact_title": "Kontaktpersonen",
      "background_image_1_contact_person": "balint_b.jpg",
      "contact_person_location": "Österreich",
      "contact_person_email": "balint.borsos@pomscloud.ie",
      "contact_person_phone": "+36 30 825 8066",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B6",
      "x": 49,
      "y": 23,
      "direction": 320
    },
    {
      "contact_person_name": "Aurel Aliszpahity",
      "contact_title": "Контакт особа",
      "background_image_1_contact_person": "aurel_a.jpg",
      "contact_person_location": "Pепублика Cрбија",
      "contact_person_email": "aurel.aliszpahity@pomscloud.ie",
      "contact_person_phone": "+36 70 290 8477",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B11",
      "x": 52,
      "y": 25,
      "direction": 30
    },
    {
      "contact_person_name": "Nikolina Jankovic",
      "contact_title": "Osoba za kontakt",
      "background_image_1_contact_person": "nikolina_j.jpg",
      "contact_person_location": "Republika Hrvatska",
      "contact_person_email": "nikolina.jankovic@pomscloud.ie",
      "contact_person_phone": "+36 30 176 1561",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B17",
      "x": 50,
      "y": 25,
      "direction": 95
    },
    {
      "contact_person_name": "Tibor Jozsa",
      "contact_title": "Persoană de contact",
      "background_image_1_contact_person": "Tibor_j.jpg",
      "contact_person_location": "România",
      "contact_person_email": "tibor.jozsa@pomscloud.ie",
      "contact_person_phone": "+40 744 454 194",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B13",
      "x": 56,
      "y": 28,
      "direction": 90
    },
    {
      "contact_person_name": "Daniel Moravanszky",
      "contact_title": "Contact",
      "background_image_1_contact_person": "dani_m.jpg",
      "contact_person_location": "UK",
      "contact_person_email": "daniel.moravanszky@pomscloud.ie",
      "contact_person_phone": "+44 7500 794472",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "IG9",
      "x": 44,
      "y": 19,
      "direction": 260
    },
    {
      "contact_person_name": "Tamas Nagy",
      "contact_title": "Contact",
      "background_image_1_contact_person": "tamas_n.jpg",
      "contact_person_location": "US",
      "contact_person_email": "tamas.nagy@pomscloud.ie",
      "contact_person_phone": "+36 30 455 3352",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "B10",
      "x": 12,
      "y": 30,
      "direction": 220
    },
    {
      "contact_person_name": "Robert Kecskes",
      "contact_title": "الشخص الذي يمكن الاتصال به",
      "background_image_1_contact_person": "robert_k.jpg",
      "contact_person_location": "الإمارات العربية المتحدة",
      "contact_person_email": "robert.kecskes@pomscloud.ie",
      "contact_person_phone": "+36 20 333 9034",
      "background_image_1_contact_map": "_map.svg",
      "folder_name": "ME17",
      "x": 63,
      "y": 42,
      "direction": 60
    }
];

// Get parameters from url
var url = new URL(window.location.href);
var selectedPersonId = url.searchParams.get('personid');


$(document).ready(function () {

    replaceOpenedPerson();
    $(window).on('resize', function () {
        replaceOpenedPerson();
    });

    // Get x,y positions to edit 
    $('.map img').on('click', function(event) {
        console.log('X:', (event.offsetX / $(this).width()) * 100);
        console.log('Y:', (event.offsetY / $(this).height()) * 100);
    });

    // Insert persons
    var personsElement = $('.persons');
    var countrySelectElement = $('#country');

    countrySelectElement.on('change', function() {
        var value = $(this).val();
        openPerson(value);
    });

    persons.sort(function(a, b) {
        return a.contact_person_location - b.contact_person_location;
    }).forEach(function (person) {
        const contactPerson = document.createElement('div');
        contactPerson.className = 'contact-person';
        contactPerson.id = `person-${person.folder_name}`;
        contactPerson.addEventListener('click', () => {openPerson(person.folder_name)});
        contactPerson.setAttribute('data-personid', person.folder_name);
        contactPerson.setAttribute('data-left', person.x);
        contactPerson.setAttribute('data-top', person.y);
        contactPerson.setAttribute('data-direction', person.direction);
        contactPerson.setAttribute('data-title', person.contact_title);

        const line = document.createElement('div');
        line.className = 'line';

        const contactPersonClose = document.createElement('div');
        contactPersonClose.className = 'contact-person-close';
        contactPersonClose.addEventListener('click', () => {closePerson(person.folder_name)});

        const closeIcon = document.createElement('i');
        closeIcon.className = 'fa fa-times';

        contactPersonClose.append(closeIcon);

        const contactPersonInfoPersonName = document.createElement('div');
        contactPersonInfoPersonName.className = 'contact-person-info contact-person-name';
        contactPersonInfoPersonName.innerHTML = person.contact_person_name;

        const contactPersonInfoPersonLocation = document.createElement('div');
        contactPersonInfoPersonLocation.className = 'contact-person-info contact-person-location';
        contactPersonInfoPersonLocation.innerHTML = ' ' + person.contact_person_location;

        const globeIcon = document.createElement('i');
        globeIcon.className = 'fa fa-globe';

        contactPersonInfoPersonLocation.prepend(globeIcon);

        const contactPersonInfoPersonEmail = document.createElement('div');
        contactPersonInfoPersonEmail.className = 'contact-person-info contact-person-email';

        const envelopeIcon = document.createElement('i');
        envelopeIcon.className = 'fa fa-envelope';

        contactPersonInfoPersonEmail.append(envelopeIcon);

        const mailToLink = document.createElement('a');
        mailToLink.href = `mailto:${person.contact_person_email}`;
        mailToLink.innerHTML = ' ' + person.contact_person_email;

        contactPersonInfoPersonEmail.append(mailToLink);

        const contactPersonInfoPersonPhone = document.createElement('div');
        contactPersonInfoPersonPhone.className = 'contact-person-info contact-person-phone';

        const phoneIcon = document.createElement('i');
        phoneIcon.className = 'fa fa-phone';

        contactPersonInfoPersonPhone.append(phoneIcon);

        const phoneLink = document.createElement('a');
        phoneLink.href = `tel:${person.contact_person_phone}`;
        phoneLink.innerHTML = ' ' + person.contact_person_phone;

        contactPersonInfoPersonPhone.append(phoneLink);

        const contactPersonInfoPersonImg = document.createElement('div');
        contactPersonInfoPersonImg.className = 'contact-person-image';

        const personImg = document.createElement('img');
        personImg.src = 'assets/' + person.background_image_1_contact_person;

        contactPersonInfoPersonImg.append(personImg);

        contactPerson.append(line);
        contactPerson.append(contactPersonClose);
        contactPerson.append(contactPersonInfoPersonName);
        contactPerson.append(contactPersonInfoPersonLocation);
        contactPerson.append(contactPersonInfoPersonEmail);
        contactPerson.append(contactPersonInfoPersonPhone);
        contactPerson.append(contactPersonInfoPersonImg);

        personsElement.append(contactPerson);
        countrySelectElement.append(`<option value="${person.folder_name}">${person.contact_person_location}</option>`);
    });

    setTimeout(function() {
        // If url has personid paramter open it in maps
        if (selectedPersonId) {
            openPerson(selectedPersonId);
        } else {
            openPerson(1000);
        }

        countrySelectElement.formSelect();
    }, 10);
});

function closePerson(id) {
    setTimeout(function() {
        openPerson(1000);
    }, 10);
}

function openPerson(id, size = -1, mobileSize = -1) {

    var personElement = $('#person-' + id);

    window.openedPerson = id;

    if (size === -1) size = window.openPersonInSize;
    if (mobileSize === -1) mobileSize = window.mobileSize;

    // Do not open again opened
    if (personElement.hasClass('opened')) return;

    // Close all
    $('.contact-person').each(function (i, element) {
        var personElement = $(element);

        
        if (personElement.attr('id') !== 'person-' + id) {

            var length = 96 * size;
            var percentX = personElement.attr('data-left');
            var percentY = personElement.attr('data-top');
            var direction = personElement.attr('data-direction') === 'undefined' ? 0 : personElement.attr('data-direction');
            var lengthdirX = Math.cos(direction * (Math.PI / 180));
            var lengthdirY = Math.sin(direction * (Math.PI / 180));

            personElement.removeClass('opened');
            personElement.css({
                left: `calc(${percentX}% + ${length * lengthdirX}px)`,
                top: `calc(${percentY}% + ${length * lengthdirY}px)`,
                width: mobileSize ? '16px' : '64px',
                height: mobileSize ? '16px' : '64px'
            });
            personElement.find('.line').css({
                display: 'block',
                opacity: 1,
                width: length,
                height: '3px',
                left: `calc(50% - ${(48 * size) * lengthdirX}px)`,
                top: `calc(50% - ${(48 * size) * lengthdirY}px)`,
                transform: 'translate(-50%, -50%) rotate(' + direction + 'deg)'
            });
            personElement.find('.contact-person-image').css({
                width: mobileSize ? '16px' : '64px',
                height: mobileSize ? '16px' : '64px'
            }).find('img').css({
                display: mobileSize ? 'none' : 'block'
            })
        }
    });

    // Open with id
    if (!personElement) {
        return;
    } 

    $('.map-title').html(personElement.attr('data-title'));
    personElement.addClass('opened');
    personElement.css({
        left: '50%',
        top: '50%'
    });
    personElement.find('.line').css({opacity: 0, display: 'none'});
    personElement.find('img').css({display: 'block'});
}

// On mobile the person is under the map
function replaceOpenedPerson() {

    // Small
    if (window.innerWidth < 800) {
        window.openPersonInSize = 0;
        window.mobileSize = true;
        openPerson(window.openedPerson, window.openPersonInSize, window.mobileSize);
        return;
    }

    // Medium
    if (window.innerWidth < 1200) {
        window.openPersonInSize = 0.75;
        window.mobileSize = false;
        openPerson(window.openedPerson, window.openPersonInSize);
        return;
    }

    window.openPersonInSize = 1;
    window.mobileSize = false;
    openPerson(window.openedPerson, window.openPersonInSize);
}
