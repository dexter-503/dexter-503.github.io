$('body').terminal({
                hello: function(what) {
                    this.echo('Hi, ' + what + '! Welcome to my terminal. ');
                },
                whoareyou: function() {
                    this.echo('I am dexter-503.');
                }
            }, 
            {
                greetings: 'Terminal style portfolio: dexter-503'
            });