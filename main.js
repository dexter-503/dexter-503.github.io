$('body').terminal({
                whoareyou: function() {
                    this.echo('I am dexter-503.');
                },
                github: function() {
                    this.echo('https://github.com/dexter-503/');
                },
                email: function() {
                    this.echo('ranottyl44@gmail.com');
                },
                about: function() {
                    this.echo('I am a Computer Science enthusiast. My areas of interest are - AI, ML & Web Development. I am also interested in learning Game Design and Game Development in the near future.');
                },
                lang: function() {
                    this.echo('I have worked with C, C++, HTML, CSS, JavaScript, Java and Python till date.');
                },
                help: function() {
                    this.echo('whoareyou   github   email   about   lang');
                }
            }, 
            {
                completion: true,
                greetings: greetings.innerHTML
            });