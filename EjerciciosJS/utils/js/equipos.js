let barcelona = new Equipo("FC Barcelona",[], 1000);
let realMadrid = new Equipo("Real Madrid",[], 1000000);
let atleticoMadrid = new Equipo("Atlético Madrid",[], 500000);

barcelona.ficharJugador(new jugador("Joao Felix","Delantero",10000));
barcelona.ficharJugador(new jugador("Joao Cancelo","Defensa",50000));
barcelona.ficharJugador(new jugador("Oriol Romeu","Centrocampista",2000));
barcelona.ficharJugador(new jugador("Pedri","Centrocampista",20000));
barcelona.ficharJugador(new jugador("Lewandoski","Delantero",100000));


realMadrid.ficharJugador(new jugador("Bellingham","Centrocampista",100000));
realMadrid.ficharJugador(new jugador("Camavinga","Centrocampista",10000));
realMadrid.ficharJugador(new jugador("Vinicius Jr","Delantero",80000));
realMadrid.ficharJugador(new jugador("Mbappe","Delantero",200000));
realMadrid.ficharJugador(new jugador("Alaba","Defensa",10000));


atleticoMadrid.ficharJugador(new jugador("Griezmann","Delantero",60000));
atleticoMadrid.ficharJugador(new jugador("Lemar","Centrocampista",10000));
atleticoMadrid.ficharJugador(new jugador("Soyuncu","Defensa",4000));
atleticoMadrid.ficharJugador(new jugador("Reinildo","Defensa",8000));
atleticoMadrid.ficharJugador(new jugador("Oblak","Delantero",70000));


barcelona.topTresJugadoresCaros();
realMadrid.topTresJugadoresCaros();
atleticoMadrid.topTresJugadoresCaros();

