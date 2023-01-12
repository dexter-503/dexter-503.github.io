$('body').terminal({
                hello: function(what) {
                    this.echo('Hello, ' + what + '. Welcome to this terminal. ');
                }
            }, {
                greetings: 'Terminal style portfolio: dexter-503'
            }, {
                whoareyou: function() {
                    this.echo('I am dexter-503');
                }
            });