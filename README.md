# **DelilahResto---TPn3-Acamica**
_3rd proyecto del curso "Desarollo Web Full Stack"_

&nbsp; 
## **Sistema de gestión de pedidos de un restaurant**
Este es un proyecto NO COMERCIAL en el cuál se busca emular el sistema de gestión de pedidos que utilizaría un restaurant para dicho fin y en el proceso desarrollar las habilidades de back-end que involucra el desarrollo de éste sistema. Tales como: registro, autenticación con tokens (JWT), conexión a bases de datos relacional, entre otros.


---
&nbsp; 
### **Inicio** 

Para iniciar el servidor y ponerlo a la escucha, ubicados en el directorio del proyecto, ejecutamos:

```bash
   .../DelilahResto---TPn3-Acamica>npm start
``` 

_Nota: El servidor iniciará por defecto en el puerto 5000 y si éste no se encontrara disponible en el puerto 3000_

---

&nbsp; 
### **Sign up** 
Para iniciar en la aplicación se debe registrar como usuario y posteriormente loguear. En el caso del registro se puede hacer una petición de tipo GET a la ruta '/sign-up' y ahí nos devolverá como respuesta los datos que debemos enviar al servidor para poder completarlo. 


![sign-up-GET-img](DelilahResto---TPn3-Acamica\src\images\sign-up-GET.png)


Luego con una petición POST enviamos los datos en formato JSON: 


![sign-up-POST-img](DelilahResto---TPn3-Acamica\src\images\sign-up-POST.png)



Como respuesta si todo sale correctamente nos redireccionará al endpoint '/log-in'. 

#### _Importante: No es posible crear usuarios con rol de administrador. Éste ya fue creado._

---
&nbsp; 
### **Log in**
En el endpoint de '/log-in' de igual manera el servidor nos provee la información sobre los datos que debemos enviar.


![log-in-GET-img](DelilahResto---TPn3-Acamica\src\images\log-in-GET.png)


&nbsp; 

>### Token

Cuando enviamos la petición el servidor nos devolverá un {token} el cual debemos copiar y pegar en la cabecera de nuestras futuras peticiones con la clave "Authorization" y valor "Bearer {token}" de lo contrario no podremos acceder a los servicios.

![log-in-POST-img](DelilahResto---TPn3-Acamica\src\images\log-in-POST.png)

&nbsp;

![token-img](DelilahResto---TPn3-Acamica\src\images\token.png)

---
&nbsp; 
### **Menu**
Una vez autenticado con nuestro token el próximo paso es obtener el menu para ver que plato podemos ordenar. Se puede visualizar el menú completo del restaurant en el endpoint '/menu'. 

![menu-GET-img](DelilahResto---TPn3-Acamica\src\images\menu-GET.png)

#### _*Se puede visualizar un solo plato del menu en el endpoint '/menu/:id'_

&nbsp; 
> ### usuario ADMIN
#### **Ingresar, editar y eliminar nuevo plato**
El usuario con rol ADMIN puede ingresar, editar y eliminar platos del menu haciendo uso de las peticiones POST, PUT y DELETE respectivamente.

&nbsp;

#### **Ingresar plato**

En el endpoint '/menu'. Ingresar todos los datos necesarios: 

![menu-POST-img](DelilahResto---TPn3-Acamica\src\images\menu-POST.png)

Como respuesta por parte del servidor obtendremos el "id" del nuevo plato.

#### **Editar plato**

En el endpoint '/menu/:id'. Ingresando todos los datos nuevamente y el que se desea cambiar con un valor diferente:

![menu-PUT-img](DelilahResto---TPn3-Acamica\src\images\menu-PUT.png)

Como respuesta por parte del servidor obtendremos información acerca de la cantidad de filas que fueron afectadas en la base de datos.

#### **Eliminar plato**

Haciendo la petición DELETE a éste endpoint '/menu/:id' se habrá eliminado el mismo. 

![menu-DELETE-img](DelilahResto---TPn3-Acamica\src\images\menu-DELETE.png)

Nuevamente por parte del servidor obtendremos información de las filas afectadas.

---
&nbsp; 
### **Orden**

Para realizar una orden debemos enviar al endpoint '/orders/:userId' un array y dentro un objeto por _cada plato_ que queramos ordenar. Dentro de éste objeto debe tener el "id" del plato y la cantidad "qty" deseada. **Siempre como último elemento de éste array debemos especificar la manera en que haremos el pago.** 


![order-POST-img](DelilahResto---TPn3-Acamica\src\images\order-POST.png)


Como se puede ver en la imagen anterior por parte del servidor seremos redirigidos hacia el endpoint '/confirmation/:userId/:orderId' obtendremos una confirmación de la recepción del pedido y además nos brindará el endpoint al cuál debemos acceder para realizar el seguimiento de nuestra orden. Si enviamos dicha petición el servidor nos mostrará el estado de nuestro pedido.


![order-tracking-GET-img](DelilahResto---TPn3-Acamica\src\images\order-tracking-GET.png)


Para ver un registro de todas las ordenes realizadas por un usuario podemos hacer una petición GET al endpoint '/orders/:userId'. 

![orders-GET-img](DelilahResto---TPn3-Acamica\src\images\orders-GET.png)

También podemos ver una sola orden en el endpoint '/orders/:userId/:orderId'

![order-GET-img](DelilahResto---TPn3-Acamica\src\images\order-GET.png)

_Importante: en éste endpoint se podrán ver datos de contacto del usuario_

&nbsp; 
> ### usuario ADMIN
#### **Ver todas las ordenes, editar y eliminar una orden**
El usuario con rol ADMIN puede ver todas las ordenes ingresadas, actualizar el estado y eliminar las mismas haciendo uso de las peticiones GET, PUT y DELETE respectivamente.

**Ver ordenes**

En el endpoint '/orders' podemos ver todas las ordenes ordenadas decrecientemente, es decir, las más recientes primero.

**Actualizar ordenes**

En el endpoint '/orders/:userId/:orderId' podremos editar el estado de la orden, **no la orden en si misma**. Debemos enviar un solo dato y es el estado con una petición PUT e inmediatamente el servidor nos responderá con el detalle de la orden ésta vez con el nuevo estado actualizado por el administrador.

![order-PUT-img](DelilahResto---TPn3-Acamica\src\images\order-PUT.png)


**Eliminar ordenes**

En el endpoint '/orders/:userId/:orderId' también podemos eliminar la orden. En éste caso como confirmación nos redirigirá a las ordenes que tiene en el historial el usuario y si no posee otras un array vacio.
