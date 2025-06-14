const resolver = {
    resolve: function resolve(options, callback) {
        // The string to resolve
        const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        const combinedOptions = Object.assign({}, options, { resolveString: resolveString });

        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)];
        };

        function doRandomiserEffect(options, callback) {
            const characters = options.characters;
            const timeout = options.timeout;
            const element = options.element;
            const partialString = options.partialString;

            let iterations = options.iterations;

            setTimeout(() => {
                if (iterations >= 0) {
                    const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });

                    // Ensures partialString without the random character as the final state.
                    if (iterations === 0) {
                        element.textContent = partialString; 
                    } else {
                        // Replaces the last character of partialString with a random character
                        element.textContent = partialString.substring(0, partialString.length - 2) + randomCharacter(characters);
                    }

                    doRandomiserEffect(nextOptions, callback)
                } else if (typeof callback === "function") {
                    callback();
                }
            }, options.timeout);
        };

        function doResolverEffect(options, callback) {
            const resolveString = options.resolveString;
            const characters = options.characters;
            const offset = options.offset;
            const partialString = resolveString.substring(0, offset);
            const combinedOptions = Object.assign({}, options, { partialString: partialString });

            doRandomiserEffect(combinedOptions, () => {
                const nextOptions = Object.assign({}, options, { offset: offset + 1 });

                if (offset <= resolveString.length) {
                    doResolverEffect(nextOptions, callback);
                } else if (typeof callback === "function") {
                    callback();
                }
            });
        };

        doResolverEffect(combinedOptions, callback);
    }
}

/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
const strings = [
    'Olá, eu sou Valdemir',

];

const strings2 = [
    '29 anos. Nordestino. Dev. \nAdoro tranformar idéias em código. \nMeu foco atualmente é desenvolvimento mobile com flutter e kotlin, porém, boa parte da minha evolução foi na programação para web e WebApi, o que me permite ser flexível para criar soluções mais completas.',
];

let counter = 0;

const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 3,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
}

const options2 = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 10,
    // Number of random characters to show
    iterations: 3,
    // Random characters to pick from
    characters: ['#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings2[counter],
    // The element
    element: document.querySelector('#textoResumo')
}

// Callback function when resolve completes
function callback() {
    setTimeout(() => {
        counter++;

        if (counter >= strings.length) {
            counter = 0;
        }

        let nextOptions = Object.assign({}, options, { resolveString: strings[counter] });
        //resolver.resolve(nextOptions, callback);
    }, 1000);
}

//resolver.resolve(options, callback);


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                resolver.resolve(options2, callback)
                setTimeout(() => {

                    document.querySelector('#textoResumo').style.display = "initial";

                }, 100);

            }, 1000);
            observer.unobserve(entry.target); // se quiser que o log aconteça apenas uma vez
        }
    });
});

observer.observe(document.querySelector('#resumo'));
