# App Message Module

Es un paquete propio que permita el uso de alerts y confirms personalizados a traves de componentes angular y servicios observables.

## Uso

- Importa el { _AppMessagesModule_ } en el modulo de aplicacion donde quiera aplicarse su uso

- Posteriormente importar el servicio _AppMessagesService_ en el componente que quiera llamar a la alerta o confirm.

       `` import { AppMessagesService } from 'Ruta del modulo'

-Inyectar el servicio en el constructor

        `` constructor(private appMessageService: AppMessageService)

### Uso de "Alerts"

Para usar el componente alert debe llamarlo en la plantilla html del componente donde se aplicara. _Se recomienda llamar el alertComponent en el componente raiz para un uso en diferentes partes de la aplicacion_

Para usar el componente debe incluir lo siguiente en la plantilla:
`` <ngx-alert></ngx-alert>

Ya con el componente listo. En el archivo .ts debe llamar en el servicio appMessage la funcion "alertShow())"

    `` this.appMessageService.alertShow(
    ``       'Titulo de la alerta',
    ``       'Cuerpo de la alerta',
    ``       () => {
    ``           console.log("Callback para cuando se acepte la alerta");
    ``            }
    ``   );

La funcion alertShow recibira 3 paramentros: - El titulo que se la dara a la alerta - El cuerpo del mensaje - Una funcion a manera de callback que se ejecutara cuando se acepte la alerta

De esta manera se mostrara un cuadro de dialogo emergente con el titulo, cuerpo y un boton para dicha alerta. Y al presionar el boton, se ejecutara la funcion pasada como 3er argumento y se cerrara la alerta.

### Uso de confirms

De la misma manera debera incluir el selector del elemento en la plantilla html:
`` <ngx-confirm></ngx-confirm>

y en el archivo .ts del componente usar la funcion showConfirm() a traves del servicio de appMessage previamente inyectado en el constructor:

      this.appMessageService
        .showConfirm('Titulo del confirm', 'Cuerpo Del confirm')
        .pipe(take(1))
        .subscribe((res) => {
          if (res) {
            console.log('Accion para Verdadero');
          } else {
            console.log('Accion para falso');
          }
       });

Esta funcion showConfirm recibe como argumentos el titulo que se le dara al confirm y el cuerpo:
`` showConfirm(title, body)

Y regresara un observable con la respuesta de la accion. Para suscribirse a esta respuesta se recomienda el uso del pipe con el operador _take_ en 1. De esta manera solo se obtendra la primera respueta entregada por el confirm y automaticamente se desuscribira el observable; y asi se evita ejecutar mas de una vez la accion para la respuesta:

    showConfirm(title: string, body: string).pipe(take(1))

Este operador take se importa de rxjs/operators

finalmente se realiza la suscripcion con el metodo susbcribe del observable; en donde se recibe una respuesta y se ejecutan las acciones acordes

        `` .susbcribe(
            res=>{
                if(res){

                    //Acciones para el confirm en true
                }else{
                    // Acciones para el confirm en false
                }
            }
        )

## Estilos

Facilmente puede agregar estilos entrando en el archivo .css del componente
