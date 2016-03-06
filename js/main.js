var animacion = {
	estatico: [{
		x: 30,
        y: 0,
        width: 65,
        height: 79
	}],
    caminar: [{
        x: 30,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 109,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 0,
        width: 65,
		height: 79
	}, {
		x: 267,
		y: 0,
		width: 65,
		height: 79
	}, {
		x: 346,
		y: 0,
		width: 65,
		height: 79
	}, {
		x: 425,
		y: 0,
		width: 65,
		height: 79
	}],
    saltar: [{
        x: 109,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 70,
        width: 65,
        height: 79
    },{
        x: 188,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 267,
        y: 70,
        width: 65,
		height: 79
	}, {
        x: 267,
        y: 70,
        width: 65,
		height: 79
	}, {
		x: 346,
		y: 70,
		width: 65,
		height: 79
	}, {
		x: 346,
		y: 70,
		width: 65,
		height: 79
	}, {
		x: 425,
		y: 70,
		width: 65,
		height: 79
	},{
		x: 425,
		y: 70,
		width: 65,
		height: 79
	},{
		x: 425,
		y: 70,
		width: 65,
		height: 79
	},{
		x: 425,
		y: 70,
		width: 65,
		height: 79
	}]
};
var escenario;
var fondo;
var imagenFondo;
var teclado = {};
var intervalo;
var bandera = false;
var personaje;
var puntaje;
var gravedad = 0.8;
var valorRebote = 0;
var grupoAssets;
var juego = new Juego();
var imgHeroe = new Image();
imgHeroe.src = "Assets/Heroe.png";
var imgEnemigo = new Image();
imgEnemigo.src = "Assets/enemy.png";
var imgEstrella = new Image();
imgEstrella.src = 'Assets/estrella.png';
var imgPlataforma = new Image();
imgPlataforma.src = 'Assets/pattern.png';
var imgPuerta = new Image();
imgPuerta.src = 'Assets/puerta.png';
var imgLlave = new Image();
imgLlave.src = 'Assets/llave.png';
var imgFondo = new Image();
imgFondo.src = 'Assets/fondo.jpg';



grupoAssets = new Kinetic.Group({
  x:0,
  y:0
})
escenario = new Kinetic.Stage({
  container: 'game',
  width: 960,
  height: 500
})
imagenFondo = new Kinetic.Image({
	x:0,
	y:0,
	image: imgFondo,
	width: escenario.getWidth(),
	height: escenario.getHeight()
})
puntaje = new Kinetic.Text({
  text: 'Puntos: 0',
  height: 25,
  width: 150,
  x:escenario.getWidth()-150,
  y:15,
  fill: '#f7f7f7',
  fontFamily: 'Arial',
  fontSize: 20

});
function nivelUno(){
  if(bandera)
  {
    return;
  }
  bandera = true;
  juego.puntaje = 0;
  juego.llave = true;
  fondo = new Kinetic.Layer();
  //Enemigos
  grupoAssets.add(new Enemigo(200,escenario.getHeight()-75,imgEnemigo));
  grupoAssets.add(new Enemigo(850,escenario.getHeight()/3.9-60,imgEnemigo));
  grupoAssets.add(new Enemigo(170,escenario.getHeight()/3-60,imgEnemigo));
  grupoAssets.add(new Enemigo(1020,escenario.getHeight()/-75,imgEnemigo));
  grupoAssets.add(new Enemigo(1120,escenario.getHeight()/-75,imgEnemigo));
  grupoAssets.add(new Enemigo(1220,escenario.getHeight()/-75,imgEnemigo));
  //Plataformas
  var piso = new Plataforma(0,escenario.getHeight()-15,imgPlataforma);
  piso.setWidth(escenario.getWidth()*2);
  grupoAssets.add(piso);

  grupoAssets.add(new Plataforma(20,escenario.getHeight()/1.5,imgPlataforma));
  grupoAssets.add(new Plataforma(190,escenario.getHeight()/3,imgPlataforma));
  //monedas
  grupoAssets.add(new Moneda(350,escenario.getHeight()/3-130,imgEstrella));
  //Puerta
  grupoAssets.add(new Puerta(910,escenario.getHeight()-85,imgPuerta));
  //personaje
  personaje = new Heroe(imgHeroe,animacion);
  personaje.setX(0);
  personaje.setY(escenario.getHeight() - personaje.getHeight());
  personaje.limiteDerecho = escenario.getWidth() - personaje.getWidth();
  personaje.limiteTope = escenario.getHeight();
	fondo.add(imagenFondo);
  fondo.add(personaje);
  fondo.add(grupoAssets);
  escenario.add(fondo);
  fondo.add(puntaje);
	console.log(personaje);
  personaje.start();
  intervalo = setInterval(frameLoop,1000/20);
}
function nivelDos()
{
	fondo = new Kinetic.Layer();
	juego.llave = false;
	//Enemigos
  grupoAssets.add(new Enemigo(200,escenario.getHeight()/1.5-60,imgEnemigo));
	grupoAssets.add(new Enemigo(850,escenario.getHeight()/3.9-60,imgEnemigo));
	grupoAssets.add(new Enemigo(25,escenario.getHeight()/3-60,imgEnemigo));
	grupoAssets.add(new Enemigo(500,escenario.getHeight()-75,imgEnemigo));
	grupoAssets.add(new Enemigo(650,escenario.getHeight()-75,imgEnemigo));
	grupoAssets.add(new Enemigo(850,escenario.getHeight()-75,imgEnemigo));
	//puerta
	grupoAssets.add(new Puerta(1800,escenario.getHeight()-90,imgPuerta));
	//Plataformas
	var piso = new Plataforma(0,escenario.attrs.height/1.5,imgPlataforma);
	piso.setWidth(escenario.getWidth()*2);
	grupoAssets.add(piso);
	grupoAssets.add(new Plataforma(190,escenario.attrs.height/1.5,imgPlataforma));
	grupoAssets.add(new Plataforma(10,escenario.attrs.height/3,imgPlataforma));
	grupoAssets.add(new Plataforma(310,escenario.attrs.height/4,imgPlataforma));
	grupoAssets.add(new Plataforma(870,escenario.attrs.height/3.9,imgPlataforma));
	//Monedas
	grupoAssets.add(new Moneda(350,escenario.getHeight()/3-130,imgEstrella));
	//personaje
	personaje = new Heroe(imgHeroe,animacion);
	personaje.setX(0);
	personaje.limiteDerecho = escenario.getWidth() - personaje.getWidth();
	personaje.limiteTope = escenario.getHeight();
	fondo.add(imagenFondo);
	fondo.add(personaje);
	fondo.add(grupoAssets);
	fondo.add(puntaje);
	personaje.start();
	escenario.add(fondo);
	intervalo = setInterval(frameLoop,1000/20);
}
function moverPersonaje(){
  if(personaje.getAnimation() != 'caminar' && (teclado[37] || teclado[39]))
	{
    personaje.setAnimation('caminar');
  }
  if(teclado[37]){
    personaje.retroceder();
  }
  if(teclado[39]){
    personaje.caminar();
  }
  if(teclado[38] && personaje.contador < 1){
    personaje.saltar();
  }
	if(!(teclado[39] || teclado[38] || teclado[37]) && !personaje.estaSaltando)
	{
		personaje.setAnimation('estatico');
	}
}
function addKeyBoardEvents(){
  //saber cuando presiona una tecla
  addEvent(document,'keydown',function(e){
    teclado[e.keyCode] = true;
  });
  //saber cuando deja de presionar la tecla
  addEvent(document,'keyup',function(e){
    teclado[e.keyCode] = false;
  });
  //funcion para agregar eventos
  function addEvent(elemento,evento,func){
    if(elemento.addEventListener)
    {
      elemento.addEventListener(evento,func,false);
    }
    else if(elemento.attachEvent){
      elemento.attachEvent(evento,func);
    }
  }
}

//algoritmo para detecta colision
function colision(a,b){
  var colision = false;
  //colisiones horizontales
  if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth())
  {
    //colisiones verticales
    if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
    {
      colision = true;
    }
  }
  //colision de a con b
  if(b.getX() <= a.getY() && b.getX() + b.getWidth() >= a.getY() + a.getHeight())
  {
    if(a.getY() <= b.getY() && a.getY() + a.getHeight >= b.getY() + b.getHeight())
    {
      colision = true;
    }
  }

  return colision;
}
function moverFondo(){
	if(personaje.getX() > (escenario.getWidth()/2) && teclado[39])
	{
			personaje.vx = 2;
			for(i in grupoAssets.children)
			{
				var asset = grupoAssets.children[i];
				asset.move(-5,0);
			}
	}
	else {
		personaje.vx = 10;
	}
}
function moverEnemigos(){
  var enemigos = grupoAssets.children;
  for(i in enemigos){
    var enemigo = enemigos[i];
    if(enemigo instanceof Enemigo)
    {
      enemigo.mover();
    }
  }
}
function aplicarFuerzas(){
  personaje.aplicarGravedad(gravedad,valorRebote);
}
function detectarColPlataforma(){
  var plataformas = grupoAssets.children;
  for(i in plataformas)
  {
    var plataforma = plataformas[i];
    if(colision(plataforma,personaje))
    {
      if(plataforma instanceof Enemigo)
      {
        if(personaje.vy > 2 && personaje.getY() < plataforma.getY())
        {
          plataforma.remove();
          juego.puntaje += 5;
          console.log(juego.puntaje);
        }
        else
        {
          console.log('fin del juego');
        }
      }
      else if(plataforma instanceof Plataforma && personaje.getY() < plataforma.getY() && personaje.vy >= 0)
      {
        personaje.contador = 0;
        personaje.setY(plataforma.getY() - personaje.getHeight());
        personaje.vy *= valorRebote;
      }
      else if(plataforma instanceof Moneda)
      {
        plataforma.remove();
        juego.puntaje++;
      }
      else if(plataforma instanceof Puerta && juego.llave)
      {
        if(juego.nivel == 1)
        {
					grupoAssets.removeChildren();
					window.clearInterval(intervalo);
					juego.nivel = 2;
          nivelDos();
        }
        if(juego.nivel == 2)
        {
          console.log('Ganastes');
        }
      }
    }
  }
}
function actualizarTexto(){
  puntaje.setText('Puntos: ' + juego.puntaje);
}
function frameLoop(){
  aplicarFuerzas();
  moverPersonaje();
	moverFondo();
  escenario.draw();
  actualizarTexto();
  detectarColPlataforma();
  moverEnemigos();
}
addKeyBoardEvents();
