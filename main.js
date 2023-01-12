$('body').terminal({
                hello: function(what) {
                    this.echo('Hi, ' + what + '! Welcome to my terminal. ');
                },
                whoareyou: function() {
                    this.echo('I am dexter-503.');
                },
                github: function() {
                    this.echo('https://github.com/dexter-503/');
                },
                email: function() {
                    this.echo('ranottyl44@gmail.com');
                }
            }, 
            {
                greetings: 'Terminal style portfolio: dexter-503'
            });