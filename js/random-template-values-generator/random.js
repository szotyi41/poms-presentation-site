export let genders = ['woman','man'];

export let firstNames = {
    'woman': ['Brenda','Krissy','Lanelle','Lucille','Hattie','Petronila','Elaina','Ophelia','Brandi','Sharolyn','Cherlyn','Jane','Selina','Mattie','Lucy','Fleta','Aurore','Bronwyn','Paulita','Aurea','Roxie','Elvia','Keila','Avelina','Gabriele','Cindy','Teofila','Renetta','Sheilah','Lakesha','Alyson','Saundra','Ramonita','Martha','Halley','Louanne','Valeria','Felicitas','Ellamae','Reynalda', 'Lana', 'Malory', 'Cheryl', 'Pam', 'Mary', 'Lois', 'Meg', 'Diane', 'Loretta', 'Bonnie', 'Babs', 'Tricia', 'Connie', 'Thelma', 'Lisa', 'Muriel', 'Nicole', 'Esther', 'Angela', 'Jillian', 'Drew', 'Ruth', 'Natasha', 'Masha', 'Patty', 'Joyce', 'Stella', 'Roberta', 'Sheila', 'Paola', 'Kirlyam', 'Aya', 'Aziza', 'Chelsea', 'Danielle', 'Evelin', 'Daya', 'Cássia', 'Amy', 'Nikki', 'Loren', 'Noon', 'Melanie', 'Carolina', 'Aleksandra', 'Alexandra', 'Anfisa', 'Nicole', 'Narkyia', 'Alla', 'Chantel', 'Winter', 'Elizabeth', 'Evelyn', 'Molly', 'Annie', 'Aika', 'Ashley', 'Larissa', 'Fernanda', 'Kalani', 'Leida', 'Olga', 'Emily', 'Anna', 'Juliana', 'Tania', 'Anny', 'Jasmin', 'Natalie', 'Angela', 'Elaine'],
    'man': ['Gerard','Ellsworth','Wesley','Hans','Brain','Amos','Wilfredo','Will','Claude','Yu', 'Sterling', 'Cyril', 'Ray', 'Len', 'Barry', 'Simon', 'Andrew', 'James', 'John', 'Philip', 'Thaddeus', 'Bartholomew', 'Thomas', 'James', 'Matthew', 'Mark', 'Luke', 'Jude', 'Glenn', 'Cleveland', 'Chris', 'Stewie', 'Brian', 'Dan', 'Junior', 'Rallo', 'Joseph', 'kevin', 'Bud', 'Mort', 'Neil', 'Tom', 'Oliver', 'Ollie', 'Santos', 'Pasqual', 'Bert', 'Opie', 'Fouad', 'Adam', 'Bruce', 'Carl', 'Elmer', 'Frank', 'Horace', 'Jake', 'Jeffrey', 'Jerome', 'Jim', 'Lou', 'Rupert', 'Seamus', 'Vinny', 'Al', 'Buzz', 'Conway', 'Johhny', 'Ernie', 'Gary', 'Seth', 'Kevin', 'Jesse', 'Hassan', 'Azan', 'Alladin', 'Zied', 'Russ', 'Alan', 'Louis', 'Mike', 'Yamir', 'Mohamed', 'Justin', 'Brett', 'Jason', 'Danny', 'Alexei', 'Kyle', 'Devar', 'Fernando', 'Josh', 'Jorge', 'Olulowo', 'Pedro', 'Matt', 'Andrei', 'Andrej', 'David', 'Luis', 'Louie', 'Josh', 'Jihoon', 'Colt', 'Jay', 'Jonathan', 'Asuelu', 'Eric', 'Steven', 'Sasha', 'Mursel', 'Syngin', 'Robert', 'Roberto', 'Blake', 'Jerry', 'Cosmo', 'George', 'Mike']
};

export let lastNames = ['Tobia','Jarnagin','Verduzco','Ackermann','Nakashima','Madill','Lustig','Tom','Finney','Rasberry','Band','Joyner','Milewski','Jaycox','Sonntag','Kasper','Kohler','Egner','Karr','Littles','Wingo','Grisson','Joachim','Madden','Torgeson','Carini','Kull','Kersten','Davi','Recore','Montandon','Balmer','Vescio','Moyer','Manahan','Jeans','Milholland','Escarcega','Lagunas','Jone','Rasmusson','Mckendrick','Touchette','Truelove','Ceja','Jules','Low','Arthur','Amrhein','Eudy', 'Krieger'];

export let separators = ['.', '-', '_', '__'];

export let providers = ['yahoo.com', 'gmail.com', 'fancy-email.co.uk', 'hotmail.com', 'example.com'];


/**
 * Return a random integer value.
 * 
 * @since 1.0.0
 * 
 * @param {int} min The minimum (left-side limit) value (included).
 * @param {int} max The maximum (right-side limit) value (inclued).
 * 
 * @returns {int} A random value between `min` and `max`.
 */
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Return a random person object.
 * 
 * The person object contains: 
 * a gender, 
 * a first and a last name (the full name can also be accesed),
 * an e-mail address.
 * The gender can be provided or, if not, it will be randomly selected.
 * 
 * @since 1.0.0
 * 
 * @param {string} gender A person gender.
 * 
 * @returns {object} A random person object.
 */
export function person(gender = null)
{
    var result = {};
    
    result.gender = (gender) ? gender : genders[getRandomInt(0, genders.length-1)];
    result.firstName = firstNames[result.gender][getRandomInt(0, firstNames[result.gender].length-1)];
    result.lastName = lastNames[getRandomInt(0, lastNames.length-1)];
    result.fullName = `${result.firstName} ${result.lastName}`;

    result.separator = separators[getRandomInt(0, separators.length-1)];
    result.fullSeparatedName = result.firstName.toLowerCase() + result.separator + result.lastName.toLowerCase();
    
    result.email = email(result.fullSeparatedName);
    
    return result;
}

/**
 * Return a random e-mail provider.
 * 
 * @since 1.0.0
 * 
 * @return {string} A random e-mail provider.
 */
export function provider()
{    
    return providers[getRandomInt(0, providers.length-1)];
}

/**
* Return a random e-mail address.
 * 
 * @since 1.0.0
 * 
 * @param {string} name A person full separated name.
 * 
 * @return {string} A random e-mail address.
 */
export function email(name = null)
{
    var username = (name) ? name : name().fullSeparatedName;
     
    return `${username}@` + provider();
}

/**
 * Return an object of fields from a list of elements.
 * 
 * @since 1.0.0
 * 
 * @param {object} inputs A non-live NodeList of inputs (as provided by a `querySelectorAll()`).
 * 
 * @returns {object} An object of field values to be used as selection base for a template.
 */
export function fields(inputs)
{
    let fields = {};

    $(inputs).each((index, obj) => {
        
        var siblings = $(obj).siblings('select');
        
        $(siblings).each((pos, sibling) => {
            var name = $(sibling).attr('id');
            var id = `#${name}`;

            fields[name] = [];

            $(`${id} option`).each((index, obj) => {
                var option = $(obj).val();
                (fields[name]).push(option);
            });
            
        });
    });

    return fields;
}

/**
 * Return an object of selections from a provided fields object.
 * 
 * @since 1.0.0
 * 
 * @param {object} fields An object of field values.
 * 
 * @returns {object} An object of selection values to be used by a template.
 */
export function selection(fields)
{
    let selections = {};

    for (let [key, value] of Object.entries(fields)) {
        selections[key] = value[getRandomInt(0, value.length-1)];
    }

    return selections;
}
