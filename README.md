# **Delilah Resto**
_3rd proyecto del curso "Desarollo Web Full Stack" - Acámica_

&nbsp; 
## **Sistema de gestión de pedidos de un restaurant**
Este es un proyecto NO COMERCIAL en el cuál se busca emular el sistema de gestión de pedidos que utilizaría un restaurant para dicho fin y en el proceso desarrollar las habilidades de back-end que involucra el desarrollo de ésta aplicación. Tales como: registro y log de usuarios, autenticación con tokens (JWT), conexión a bases de datos relacional, endpoint testing, entre otros.


---
&nbsp; 
## **Configuraciones** 

Para poder correr ésta aplicación es necesario instalar algunas librerías de node.js, ubicados en el directorio del proyecto, ejecutamos:

```bash
   .../DelilahResto---TPn3-Acamica>npm i bcrypt dotenv express jsonwebtoken mysql2 nodemon sequelize
``` 

una vez finalizado en el archivo package.json el listado de "dependencies" debería verse así:

![dependencies](https://user-images.githubusercontent.com/59923978/103581543-fd91b380-4eba-11eb-8b52-afc35b757dd6.png)



---
&nbsp; 
## **Inicio** 

Para iniciar el servidor y ponerlo a la escucha, ejecutamos:

```bash
   .../DelilahResto---TPn3-Acamica>npm start
``` 

_*Nota: El servidor iniciará por defecto en el puerto 5000 y si éste no se encontrara disponible en el puerto 3000*_

---

&nbsp; 
## **Sign up** 
Para iniciar en la aplicación se debe registrar como usuario y posteriormente loguear. En el caso del registro se hace una petición de tipo GET a la ruta '/sign-up' y ahí nos devolverá como respuesta los datos que debemos enviar al servidor para poder completarlo. 


![sign-up-GET](https://user-images.githubusercontent.com/59923978/103498086-4ba6a880-4e22-11eb-91ea-28227ee60f3b.png)


Luego con una petición POST enviamos los datos en formato JSON: 


![sign-up-POST](https://user-images.githubusercontent.com/59923978/103498087-4ba6a880-4e22-11eb-8166-2cc8a15d93fd.png)



Como respuesta si todo sale correctamente nos redireccionará al endpoint '/log-in'. 

_*Importante: No es posible crear usuarios con rol de administrador. Éste ya fue creado.*_

---
&nbsp; 
## **Log in**
De esa manera se habrá completado el registro y nos redirigirá hacia el endpoint de '/log-in'. De igual manera el servidor nos provee la información sobre los datos que debemos enviar.


![log-in-GET](https://user-images.githubusercontent.com/59923978/103498070-48132180-4e22-11eb-8602-e28ba5418aa1.png)



&nbsp; 

>### Token

Cuando enviamos la petición el servidor nos devolverá un {token} el cual debemos copiar y pegar en la cabecera de nuestras futuras peticiones con la clave "Authorization" y valor "Bearer {token}" de lo contrario no podremos acceder a los servicios.

![log-in-POST](https://user-images.githubusercontent.com/59923978/103552771-2d28c780-4e8b-11eb-8ae0-a2041f257db1.png)


&nbsp;

![token](https://user-images.githubusercontent.com/59923978/103552955-7c6ef800-4e8b-11eb-8e50-80d6ae65f3f3.png)


---
&nbsp; 
## **Menu**
Una vez autenticado con nuestro token el próximo paso lógico es obtener el menu para ver que plato podemos ordenar. Se puede visualizar el menú completo (son un total de 10 items id=1 al 10) del restaurant en el endpoint '/menu'. 

![menu-GET](https://user-images.githubusercontent.com/59923978/103498077-49444e80-4e22-11eb-9901-e5163154393b.png)

_*Nota: Se puede visualizar un solo plato del menu en el endpoint '/menu/:id'_

&nbsp; 
> ### usuario ADMIN
#### **Ingresar, editar y eliminar nuevo plato**
El usuario con rol ADMIN puede ingresar, editar y eliminar platos del menu haciendo uso de las peticiones POST, PUT y DELETE respectivamente.

&nbsp;

#### **Ingresar plato**

En el endpoint '/menu' ingresar todos los datos necesarios, como pueden verse en el resto de platos que figuran en el menú.
Como respuesta por parte del servidor obtendremos el nuevo plato con un "id" asignado automáticamente.

![menu-POST](https://user-images.githubusercontent.com/59923978/103498079-49dce500-4e22-11eb-84f0-9ddb72ef75fd.png)

_*Nota: El campo de "photo" se creó para ingresar la url de la imagen del plato. En éste trabajo práctico no es requisito trabajar el diseño front-end de la app por eso se le asigna un string*_

#### **Editar plato**

En el endpoint '/menu/:id'. Ingresando todos los datos nuevamente.
Como respuesta por parte del servidor obtendremos el plato con las nuevas modificaciones.

![menu-PUT](https://user-images.githubusercontent.com/59923978/103498080-49dce500-4e22-11eb-8a79-00eb8589c977.png)



#### **Eliminar plato**

Haciendo la petición DELETE a éste endpoint '/menu/:id' se habrá eliminado el mismo. 
Como respuesta por parte del servidor se redirigirá al endpoint '/menu'.

![menu-DELETE](https://user-images.githubusercontent.com/59923978/103552028-00c07b80-4e8a-11eb-9983-3f5d484aa109.png)


---
&nbsp; 
## **Orden**

Para realizar una orden debemos enviar al endpoint '/orders/:userId' un array y dentro un objeto por _cada plato_ que queramos ordenar. Dentro de éste objeto debe tener el "id" del plato y la cantidad "qty" deseada. **Siempre como último elemento de éste array debemos especificar la manera en que haremos el pago.** 


![order-POST](https://user-images.githubusercontent.com/59923978/103498213-b821a780-4e22-11eb-9fb8-7e328c6d9eff.png)


Como se puede ver en la imagen anterior por parte del servidor seremos redirigidos hacia el endpoint '/confirmation/:userId/:orderId', donde obtendremos una confirmación de la recepción del pedido como respuesta, y además nos brindará el endpoint al cuál debemos acceder para realizar el seguimiento de nuestra orden. Si enviamos dicha petición el servidor nos mostrará el estado de nuestro pedido.


![order-tracking-GET](https://user-images.githubusercontent.com/59923978/103498085-4b0e1200-4e22-11eb-9da2-851226a10017.png)


Para ver un registro de todas las ordenes realizadas por un usuario podemos hacer una petición GET al endpoint '/orders/:userId'. 

![orders-GET](https://user-images.githubusercontent.com/59923978/103498084-4b0e1200-4e22-11eb-8528-f27f83e4e220.png)

También podemos ver una sola orden en el endpoint '/orders/:userId/:orderId'

_Importante: en éste endpoint se podrán ver datos de contacto del usuario_

![order-GET](https://user-images.githubusercontent.com/59923978/103498082-4a757b80-4e22-11eb-9957-73ccfbc2fce2.png)


&nbsp; 
>### usuario ADMIN
#### **Ver todas las ordenes, editar y eliminar una orden**
El usuario con rol ADMIN puede ver todas las ordenes ingresadas, actualizar el estado y eliminar las mismas haciendo uso de las peticiones GET, PUT y DELETE respectivamente.

**Ver ordenes**

En el endpoint '/orders' podemos ver todas las ordenes ordenadas decrecientemente, es decir, las más recientes primero.

**Actualizar ordenes**

En el endpoint '/orders/:userId/:orderId' podremos editar el estado de la orden, **no la orden en si misma**. Debemos enviar un solo dato y es el estado con una petición PUT e inmediatamente el servidor nos responderá con el detalle de la orden ésta vez con el nuevo estado actualizado por el administrador.

![order-PUT](https://user-images.githubusercontent.com/59923978/103498083-4a757b80-4e22-11eb-916b-14e7dd4642c5.png)


**Eliminar ordenes**

En el endpoint '/orders/:userId/:orderId' también podemos eliminar la orden. En éste caso como confirmación nos redirigirá a las ordenes que tiene en el historial el usuario y si no posee otras un array vacio.
