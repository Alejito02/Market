<template>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-img src="https://img.freepik.com/fotos-premium/objetos-oficina-blancos-bien-organizados-sobre-fondo-colores_264197-16492.jpg?semt=ais_hybrid">
          <div class="absolute-bottom text-h6">
            <q-btn to="/Articulos">Articulos</q-btn>
          </div>
        </q-img>
      </q-card>

      <q-card class="my-card">
        <q-img src="https://img.freepik.com/fotos-premium/dispositivos-aparatos-jovenes-modernos-sobre-fondo-amarillo-vista-superior-endecha-plana_175682-21250.jpg?semt=ais_hybrid">
          <div class="absolute-bottom text-h6">
            <q-btn to="/Categorias">Categorias</q-btn>
          </div>
        </q-img>
      </q-card>

      <q-card class="my-card">
        <q-img src="https://blog.interfell.com/hubfs/Qu%C3%A9%20est%C3%A1%20pasando%20en%20la%20industria%20de%20la%20tecnolog%C3%ADa.jpg">
          <div class="absolute-bottom text-h6">
            <q-btn to="/Movimientos">Movimientos</q-btn>
          </div>
        </q-img>
      </q-card>

      <q-card class="my-card">
        <q-img src="https://tycgroup.com/wp-content/uploads/2024/02/I1-1.jpg">
          <div class="absolute-bottom text-h6">
            <q-btn to="/Terceros">Usuarios</q-btn>
          </div>
        </q-img>
      </q-card>
    </div>
  </template>
  
  <script>
  export default {
    setup () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    }
  }
  </script>
  
  <style >
.my-card {
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 500px;
}

.q-pa-md row items-start q-gutter-md {
    margin-left: 0%;
}
  </style>
  